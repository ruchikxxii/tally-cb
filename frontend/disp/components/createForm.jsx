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
export default function CreateForm({openCreateForm,closeCreateForm}){
    const formik=useFormik({
        initialValues:{
            players:"",

        },
        onSubmit:(values)=>{
            window.alert(values);
        }
    })
        
    return (
        <Modal isOpen={openCreateForm} onClose={closeCreateForm}>
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
        <ModalOverlay />
        <ModalContent style={{backgroundColor:"blueviolet",color:"white"}}>
          <ModalHeader>Enter Room Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input style={{backgroundColor:"#EDE4FF",color:"black"}} placeholder="Enter Code Here"/>
          </ModalBody>

          <ModalFooter>
            <Button style={{backgroundColor:"aquamarine"}} mr={3}>
              <GiAssassinPocket style={{marginRight:"10px"}}/>  Submit
            </Button>
            <Button style={{backgroundColor:"aquamarine"}} mr={3} onClick={closeCreateForm}>    
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </FormControl>
        </form>
      </Modal>
    );
}
