import { useFormik } from "formik";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  Input,
  Button,
  ModalContent,
  ModalFooter
} from "@chakra-ui/react";
import {GiAssassinPocket} from 'react-icons/gi'
import { useEffect,useContext } from 'react'
import { SocketContext } from '@/context/socket'
import { gameContext } from '@/context/room';
import { FormLabel } from "react-bootstrap";
import{ useRouter }from "next/router";
export default function JoinForm({openJoinForm,closeJoinForm}){
  const router=useRouter();
  const socket=useContext(SocketContext);
  const {inRoom,setInRoom,setRoomName,setUsername,setQuestion,setTimer,setPlayers,setCanJoin}=useContext(gameContext);
  useEffect(()=>{
    socket.on('join room status',(status)=>{
      console.log(status)
      if(status.success){
        setInRoom(true);
        setRoomName(status.room_name);
        setQuestion(status.question);
        setTimer(status.time);
        setPlayers(2);
        setCanJoin(status.canJoin);
        router.push('/typing_room');
      }
    })
  },[socket])
    const formikss=useFormik({
        initialValues:{
            room_name:"",
            name:""
        },
        onSubmit:(values)=>{
            // window.alert(JSON.stringify(values));
            setUsername(formikss.values.name);
            socket.emit('join room',values);
        }
    })
        
    return (
        <Modal isOpen={openJoinForm} onClose={closeJoinForm}>
            <form onSubmit={formikss.handleSubmit}>
            <FormControl>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:"blueviolet",color:"white"}}>
          <ModalHeader>Enter Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormLabel>Enter Your Name</FormLabel>
            <Input isRequired name="name" onChange={formikss.handleChange} value={formikss.values.name} style={{backgroundColor:"#EDE4FF",color:"black"}} placeholder="Enter Name Here"/>
            <FormLabel>Enter Room Code</FormLabel>
            <Input isRequired name="room_name" onChange={formikss.handleChange} value={formikss.values.room_name} style={{backgroundColor:"#EDE4FF",color:"black"}} placeholder="Enter Code Here"/>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" style={{backgroundColor:"aquamarine"}} mr={3}>
              <GiAssassinPocket style={{marginRight:"10px"}}/>  Submit
            </Button>
            <Button style={{backgroundColor:"aquamarine"}} mr={3} onClick={closeJoinForm}>    
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </FormControl>
        </form>
      </Modal>
    );
}
