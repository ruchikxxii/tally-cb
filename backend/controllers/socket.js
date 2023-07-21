const socketio = require('socket.io')
const getRandomSentences = require('../utilities').getRandomSentences

const configureSockets = (server) => {
    var rooms = [];
    const io = socketio(server,{
        cors:{
            origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
        }
    });
    io.on('connection',(socket)=>{
        console.log(socket.id)
        socket.on('create room',(details)=> {
            var room_name = `${details.name}_${Math.floor(Math.random()*10000)}`;
            rooms.push({
                name: room_name,
                players : details.players,
                playerCount : 0,
                progrss : {},
                time: details.time,
                question : getRandomSentences(details.speed*details.time),
                started : false,
                finished : false
            })
            socket.emit('room code',room_name);
        })
        socket.on('join room',(details)=> {
            var i = rooms.findIndex((room)=> {
                return room.name === details.room_name;
            })
            if(i==-1){
                socket.emit("join room status",{success:false,error:"room not found"})
            }
            else if(rooms[i].started===true){
                socket.emit("join room status",{success:false,error:"room already started"})
            }
            else if(rooms[i].playerCount===rooms[i].players){
                socket.emit("join room status",{success:false,error:"room already full"})
            }
            else{
                socket.join(details.room_name);
                rooms[i].playerCount+=1;
                rooms[i].progrss[details.name] = {words:0,time:0};
                socket.emit("join room status",{success:true,question:rooms[i].question})
            }
        })
        socket.on('start room',(room_name)=>{
            var i = rooms.findIndex((room)=> {
                return room.name === room_name;
            })
            if(i==-1){
                socket.emit("start room status",{success:false,error:"room not found"})
            }
            else if(rooms[i].started===true){
                socket.emit("start room status",{success:false,error:"room already started"})
            }
            else if(rooms[i].playerCount<rooms[i].players){
                socket.emit("start room status",{success:false,error:"room not full"})
            }
            else{
                setTimeout(()=>{
                    rooms[i].finished = true
                    io.to(room_name).emit("timer end",rooms[i].progrss);
                },rooms[i].time*60*1000);
                io.to(room_name).emit("start room status",{success:true})
            }
        })
        socket.on("update progress",(details)=>{
            var i = rooms.findIndex((room)=> {
                return room.name === details.room_name;
            })
            if(i==-1){
                socket.emit("update status",{success:false,error:"room not found"})
            }
            else if(rooms[i].started===false){
                socket.emit("update status",{success:false,error:"room has not started yet"})
            }
            else if(rooms[i].finished===true){
                socket.emit("update status",{success:false,error:"room has finished"})
            }
            else{
                if(details.end===true){
                    rooms[i].progrss[details.name].time = new Date();
                    io.to(details.room_name).emit("progress update",rooms[i].progrss)
                }
                else{
                    rooms[i].progrss[details.name].words += 1;
                    io.to(details.room_name).emit("progress update",rooms[i].progrss)
                }
            }
        })
    })
}

module.exports = {configureSockets}