import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import InputField from "./InputField";

const BookingModal = ({ isOpen, onClose, product }) => {
  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontSize="18px"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Booking Information
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <InputField label="Name" value="Md. Younus" disabled={true} />
            <InputField
              label="Email"
              value="younusshamim.bd@gmail.com"
              disabled={true}
            />
            <InputField label="Product" value={product.name} disabled={true} />
            <InputField label="Price" value={product.price} disabled={true} />
            <InputField label="Contact No" value="01858286180" type="number" />
            <InputField label="Meeting Address" value="" />
          </Grid>
        </ModalBody>

        <ModalFooter pb="5">
          <Button
            color="white"
            bg="black"
            _hover={{ bg: "black" }}
            _active={{ bg: "gray.700" }}
          >
            Confirm Booking
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
