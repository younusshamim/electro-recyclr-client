import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthProvider";
import getTitle from "../../../utils/getTitle";

const Navbar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = getTitle(pathname);

  const menuItems = [
    { id: 1, name: "My Profile", icon: <AiOutlineUser /> },
    { id: 2, name: "Logout", icon: <FiLogOut /> },
  ];

  const handleMenuClick = ({ name }) => {
    switch (name) {
      case "Logout":
        logOut()
          .then((result) => {
            console.log(result);
            navigate("/login");
          })
          .catch((err) => console.log(err));
        break;

      case "My Profile":
        navigate("/dashboard/profile");
        break;

      default:
        break;
    }
  };

  return (
    <Flex justify="space-between" mb="5">
      <Heading fontSize="22px">{title}</Heading>

      <HStack>
        {/* <InputGroup bg="gray.100" size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search.." />
        </InputGroup> */}

        <IconButton
          icon={<IoIosNotificationsOutline />}
          size="sm"
          fontSize="20px"
        />

        <Menu>
          <MenuButton>
            <IconButton icon={<AiOutlineSetting />} size="sm" fontSize="20px" />
          </MenuButton>

          <MenuList color="black" minW="180px">
            {menuItems.map((menu, i) => (
              <MenuItem key={menu + i} onClick={() => handleMenuClick(menu)}>
                <HStack py="5px" fontSize="15px">
                  <Box>{menu.icon}</Box>
                  <Text>{menu.name}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;
