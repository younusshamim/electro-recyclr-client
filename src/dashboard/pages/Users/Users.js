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
          <Flex bg="gray.100" borderRadius="sm" w="220px" position="relative">
            <Box top="0" right="0" position="absolute" cursor="pointer">
              <BsSearch color="gray.300" />
            </Box>

            <Input
              type="text"
              placeholder="Search email or mobile.."
              borderRadius="sm"
              size="sm"
            />
          </Flex>

          <Select size="sm" m="5" w="130px" bg="gray.100" borderRadius="sm">
            <option value="">All User</option>
            <option value="">Verified User</option>
            <option value="">Admin List</option>
          </Select>
        </HStack>
      </HStack>

      <SimpleTable theadData={theadData}>
        <TableBody />
      </SimpleTable>
    </BorderedStack>
  );
};

export default Users;
