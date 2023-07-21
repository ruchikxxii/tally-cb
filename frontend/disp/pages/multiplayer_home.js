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
import CreateForm from '@/components/createForm'
import JoinForm from '@/components/joinForm'
import {GiAssassinPocket} from 'react-icons/gi'

const multiplayer_home = () => {
    const {isOpen:openCreateForm,onOpen:onCreateForm,onClose:closeCreateForm}=useDisclosure();

    const { isOpen:openJoinForm, onOpen:onJoinForm, onClose:closeJoinForm } = useDisclosure()
    return (<div className={classes['home']}>
        <Image src={mult_ninja} 
            width={250}
            style = {{borderRadius:100,
                boxShadow:"0 8px 16px 0 blueviolet"
            }}
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