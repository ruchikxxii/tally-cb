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
export default function JoinForm({openJoinForm,closeJoinForm}){
  const socket=useContext(SocketContext);
  const {inRoom,setInRoom,roomName,setRoomName}=useContext(gameContext);
  useEffect(()=>{
    socket.on('join room status',(status)=>{
      console.log(status)
      if(status.success){
        setInRoom(true);
      }
    })
  },[socket])
    const formikss=useFormik({
        initialValues:{
            room_name:"",
        },
        onSubmit:(values)=>{
            // window.alert(JSON.stringify(values));
            socket.emit('join room',values);
        }
    })
        
    return (
        <Modal isOpen={openJoinForm} onClose={closeJoinForm}>
            <form onSubmit={formikss.handleSubmit}>
            <FormControl>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:"blueviolet",color:"white"}}>
          <ModalHeader>Enter Room Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>


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
