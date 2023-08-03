import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InputField from "./InputField";
import useMutateBooking from "../../../hooks/useMutateBooking";
import { useAuth } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ isOpen, onClose, product }) => {
  const [contact, setContact] = useState(product.sellerInfo.mobile);
  const [meetingAddress, setMeetingAddress] = useState();
  // mutate booking
  const onSuccess = (data) => {
    toast("Booked Successfully.");
    onClose();
  };
  const onError = (error) => toast(error.message);
  const { mutate, isLoading } = useMutateBooking(onSuccess, onError);
  const { userDetails } = useAuth();

  const handleBooking = () => {
    const payload = {
      userEmail: userDetails.email,
      productId: product._id,
      contact,
      meetingAddress,
    };
    mutate(payload);
  };

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
            <InputField
              label="Contact No"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="number"
            />
            <InputField
              label="Meeting Address"
              value={meetingAddress}
              onChange={(e) => setMeetingAddress(e.target.value)}
            />
          </Grid>
        </ModalBody>

        <ModalFooter pb="5">
          <Button
            color="white"
            bg="black"
            _hover={{ bg: "black" }}
            _active={{ bg: "gray.700" }}
            isDisabled={isLoading}
            onClick={handleBooking}
          >
            Confirm Booking
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
