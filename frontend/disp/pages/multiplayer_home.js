import Image from 'next/image'
import { useDisclosure } from '@chakra-ui/react'
const mult_ninja = require('../assets/ninja_mult.jpg')
const classes = require('../styles/multiplayer_home.module.css')
import CreateForm from '@/components/createForm'
import JoinForm from '@/components/joinForm'
import { useEffect,useContext } from 'react'
import { SocketContext } from '@/context/socket'
import { gameContext } from '@/context/room';
import { useRouter } from 'next/router'
const multiplayer_home = () => { 
    const router=useRouter();
    const {inRoom,setInRoom,roomName,setRoomName,setQuestion}=useContext(gameContext);
    const socket=useContext(SocketContext);
    useEffect(()=>{
        socket.on('room code',(details)=>{
            setInRoom(true);
            setRoomName(details.room_name);
            setQuestion(details.question);
            router.push('/typing_room');

        })
    },[socket])
    const {isOpen:openCreateForm,onOpen:onCreateForm,onClose:closeCreateForm}=useDisclosure();

    const { isOpen:openJoinForm, onOpen:onJoinForm, onClose:closeJoinForm } = useDisclosure()
    return (<div className={classes['home']}>
        <Image src={mult_ninja} 
            width={250}
            style = {{borderRadius:100,
                boxShadow:"0 8px 16px 0 blueviolet"
            }}
            alt='A Ninja Floating'
        />
        <CreateForm openCreateForm={openCreateForm} closeCreateForm={closeCreateForm} />
        <JoinForm openJoinForm={openJoinForm} closeJoinForm={closeJoinForm} />
        <div className={classes['options']}>
            <button className={`text-white font-extrabold text-4xl ${classes['link']}`} onClick={onCreateForm}>Create a Server</button>
            <h1 className='text-white font-extrabold text-4xl'>OR</h1>
            <button className={`text-white font-extrabold text-4xl ${classes['link']}`} onClick={onJoinForm}>Join a Room</button>
        </div>
    </div>)
}

export default multiplayer_home