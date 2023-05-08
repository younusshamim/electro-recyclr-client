import React from "react";
import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <Flex justify="space-between" mb="5">
      <Heading fontSize="20px">Dashboard</Heading>

      <HStack>
        <InputGroup bg="gray.100" size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search.." />
        </InputGroup>

        <IconButton
          icon={<IoIosNotificationsOutline />}
          size="sm"
          fontSize="20px"
        />

        <IconButton icon={<AiOutlineSetting />} size="sm" fontSize="20px" />
      </HStack>
    </Flex>
  );
};

export default Navbar;
