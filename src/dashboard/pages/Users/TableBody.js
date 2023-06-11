import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import userImage from "../../../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";

const TableBody = ({ users }) => {
  const menuItems = [
    { value: "User", option: "Make User" },
    { value: "Verified", option: "Verified User" },
    { value: "Admin", option: "Make Admin" },
  ];

  return users.map(({ _id, status, name, mobile, img, email }) => {
    return (
      <Tr key={_id}>
        <Td>
          <HStack>
            <Image
              src={img ? img : userImage}
              alt={name}
              w="50px"
              h="50px"
              objectFit="cover"
              borderRadius="lg"
              padding={!img && "5px"}
            />
            <Text>{name}</Text>
          </HStack>
        </Td>
        <Td>{email}</Td>
        <Td>{mobile}</Td>

        <Td>
          <Menu>
            <MenuButton>
              <Button size="sm">
                <HStack>
                  <Text>{status}</Text>
                  <Box>
                    <IoIosArrowDown />
                  </Box>
                </HStack>
              </Button>
            </MenuButton>

            <MenuList color="black" minW="130px">
              {menuItems.map(({ value, option }, i) => {
                if (status === value) return;
                return (
                  <MenuItem key={option + i} onClick={() => {}} fontSize="15px">
                    {option}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Td>
      </Tr>
    );
  });
};

export default TableBody;
