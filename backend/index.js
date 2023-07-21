const express = require('express');
const router = require('./routes')
const http = require('http')
const socket = require('./controllers/socket')

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",router);

socket.configureSockets(server);

app.listen(5000,()=>{
    console.log("server running on localhost:5000")
})