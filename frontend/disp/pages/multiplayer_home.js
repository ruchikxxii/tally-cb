import Image from 'next/image'
import { useDisclosure } from '@chakra-ui/react'
const mult_ninja = require('../assets/ninja_mult.jpg')
const classes = require('../styles/multiplayer_home.module.css')
import { SocketContext } from '@/context/socket'
import { gameContext } from '@/context/room'
import { useContext} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input
  } from '@chakra-ui/react'

  import {GiAssassinPocket} from 'react-icons/gi'

const multiplayer_home = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<div className={classes['home']}>
        <Image src={mult_ninja} 
            width={250}
            style = {{borderRadius:100,
                boxShadow:"0 8px 16px 0 blueviolet"
            }}
        />
        <div className={classes['options']}>
            <button className={`text-white font-extrabold text-4xl ${classes['link']}`}>Create a Server</button>
            <h1 className='text-white font-extrabold text-4xl'>OR</h1>
            <button className={`text-white font-extrabold text-4xl ${classes['link']}`} onClick={onOpen}>Join a Room</button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button style={{backgroundColor:"aquamarine"}} mr={3} onClick={onClose}>    
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>)
}

export default multiplayer_home