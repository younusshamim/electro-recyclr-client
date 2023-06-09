import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import TableBody from "./TableBody";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import { BsSearch } from "react-icons/bs";

const Users = () => {
  const theadData = ["User", "Email", "Mobile", "Status"];

  return (
    <BorderedStack>
      <HStack justify="space-between" mb="4">
        <Heading fontSize="20px">Users List</Heading>

        <HStack w="fit-content">
          <Select size="sm" w="130px" bg="gray.100" borderRadius="sm">
            <option value="">All User</option>
            <option value="">Verified User</option>
            <option value="">Admin List</option>
          </Select>

          <Flex>
            <Input
              type="text"
              placeholder="Search email or mobile.."
              size="sm"
              bg="gray.100"
              borderRadius="sm"
              w="190px"
            />

            <HStack
              cursor="pointer"
              bg="gray.200"
              _hover={{ bg: "gray.300" }}
              _active={{ bg: "gray.200" }}
              transition="0.2s"
              w="30px"
              h="32px"
              justify="center"
            >
              <BsSearch color="gray.300" />
            </HStack>
          </Flex>
        </HStack>
      </HStack>

      <SimpleTable theadData={theadData}>
        <TableBody />
      </SimpleTable>
    </BorderedStack>
  );
};

export default Users;
