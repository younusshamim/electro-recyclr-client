import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../../contexts/AuthProvider";
import BeatLoading from "../../../components/Loader/BeatLoading";

const Navbar = () => {
  const { user, logOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const menuItems = [
    { id: 1, name: "Dashboard", icon: <AiOutlineUser /> },
    { id: 2, name: "Logout", icon: <FiLogOut /> },
  ];

  const handleMenuClick = ({ name }) => {
    switch (name) {
      case "Logout":
        logOut()
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
        break;

      case "Dashboard":
        navigate("/dashboard");
        break;

      default:
        break;
    }
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "10px", md: "120px" }}
      py="12px"
      position="fixed"
      w="100%"
      zIndex="999"
      bg="white"
    >
      <Box
        display={{ base: "block", md: "none" }}
        fontSize="22px"
        cursor="pointer"
      >
        <GiHamburgerMenu />
      </Box>

      <Link to="/">
        <Flex
          fontSize={{ base: "20px", md: "26px" }}
          fontWeight="bold"
          cursor="pointer"
        >
          <Box color="black" mr="7px">
            ElectroRecyclr
          </Box>
        </Flex>
      </Link>

      <Box w={{ base: "100%", md: "500px" }}>
        <form>
          <InputGroup size="lg" position="relative" borderRadius="md">
            <Box
              color="gray.600"
              position="absolute"
              left="10px"
              top="15px"
              zIndex="99"
              fontSize="23px"
            >
              <BiSearch />
            </Box>

            <Input
              pl="40px"
              placeholder="What are you looking for?"
              bg="gray.50"
              borderRadius="md"
              color="gray.600"
              sx={{
                _placeholder: {
                  color: "gray.400",
                  fontSize: { base: "14px", md: "15px" },
                },
              }}
            />

            <InputRightAddon
              color="white"
              bg="black"
              cursor="pointer"
              fontSize="15px"
              fontWeight="semibold"
            >
              Search
            </InputRightAddon>
          </InputGroup>
        </form>
      </Box>

      {authLoading ? (
        <BeatLoading size={12} />
      ) : user ? (
        <Menu>
          <MenuButton>
            <Flex
              cursor="pointer"
              align="center"
              display={{ base: "none", md: "flex" }}
            >
              <Image
                w="37px"
                h="37px"
                borderRadius="10px"
                objectFit="cover"
                src={user?.photoURL}
                alt="Dan Abramov"
                ml="15px"
                mr="7px"
              />
              <Text fontWeight="semibold" fontSize="15px" mr="5px">
                {user?.displayName?.split(" ")[0]}
              </Text>
              <Box>
                <IoIosArrowDown />
              </Box>
            </Flex>
          </MenuButton>

          <MenuList color="black" minW="180px">
            {menuItems.map((menu, i) => (
              <MenuItem key={i} onClick={() => handleMenuClick(menu)}>
                <HStack py="5px" fontSize="15px">
                  <Box>{menu.icon}</Box>
                  <Text>{menu.name}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <Link to="/login">
          <HStack cursor="pointer">
            <AiOutlineUser />
            <Text>Login</Text>
          </HStack>
        </Link>
      )}
    </Flex>
  );
};

export default Navbar;
