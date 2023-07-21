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
  ModalFooter,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { GiAssassinPocket } from "react-icons/gi";
import { SocketContext } from "@/context/socket";
import { useContext } from "react";
import { gameContext } from "@/context/room";
export default function CreateForm({ openCreateForm, closeCreateForm }) {
  const socket = useContext(SocketContext);
  const {setUsername}=useContext(gameContext);
  const formik = useFormik({
    initialValues: {
      players: 0,
      time: 0,
      speed: 0,
      name:"",
    },
    onSubmit: (values) => {
      // window.alert(JSON.stringify(values));
      setUsername(formik.values.name);
      socket.emit('create room',values);
    },
  });

  return (
    <Modal isOpen={openCreateForm} onClose={closeCreateForm}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <ModalOverlay />
          <ModalContent
            style={{ backgroundColor: "blueviolet", color: "white" }}
          >
            <ModalHeader>Create Room</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormLabel>Enter Your Name</FormLabel>
              <Input
                onChange={formik.handleChange}
                name="name"
                value={formik.values.name}
                style={{ backgroundColor: "#EDE4FF", color: "black" }}
                placeholder="Enter Your Name"
              />
              <FormLabel>Number of Players</FormLabel>
              <Input
                onChange={formik.handleChange}
                name="players"
                value={formik.values.players}
                style={{ backgroundColor: "#EDE4FF", color: "black" }}
                placeholder="Enter Number of Players"
              />
              <FormLabel>Speed</FormLabel>
              <Select
                onChange={formik.handleChange}
                value={formik.values.speed}
                name="speed"
                placeholder="Select option"
                bgColor={"white"}
                color={"black"}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              <FormLabel>Time</FormLabel>
              <Select
                onChange={formik.handleChange}
                value={formik.values.time}
                placeholder="Select option"
                name="time"
                bgColor={"white"}
                color={"black"}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" style={{ backgroundColor: "aquamarine" }} mr={3}>
                <GiAssassinPocket style={{ marginRight: "10px" }} /> Submit
              </Button>
              <Button
                style={{ backgroundColor: "aquamarine" }}
                mr={3}
                onClick={closeCreateForm}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </FormControl>
      </form>
    </Modal>
  );
}
