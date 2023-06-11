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
  Text,
  Tr,
} from "@chakra-ui/react";
import userImage from "../../../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";
import CstmTd from "../../components/CstmTd/CstmTd";
import { useMutation } from "react-query";
import { onUpdateUserStatus } from "../../../services/users-services";
import toast from "react-hot-toast";

const TableBody = ({ users, refetchUsers }) => {
  const menuItems = [
    { value: "User", option: "Make User" },
    { value: "Verified", option: "Verified User" },
    { value: "Admin", option: "Make Admin" },
  ];

  const { mutate, error } = useMutation(onUpdateUserStatus, {
    onSuccess: () => {
      refetchUsers();
      toast("User Updated Successfully.");
    },
    onError: (err) => {
      toast(err.message);
    },
  });

  return users.map(({ _id, status, name, mobile, img, email }) => {
    return (
      <Tr key={_id}>
        <CstmTd>
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
        </CstmTd>
        <CstmTd>{email}</CstmTd>
        <CstmTd>{mobile}</CstmTd>

        <CstmTd>
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
                  <MenuItem
                    key={option + i}
                    onClick={() => mutate({ _id, value })}
                    fontSize="15px"
                  >
                    {option}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </CstmTd>
      </Tr>
    );
  });
};

export default TableBody;
