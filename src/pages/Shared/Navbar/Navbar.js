import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../../contexts/AuthProvider";
import BeatLoading from "../../../components/Loader/BeatLoading";
import userImage from "../../../assets/user.png";
import { useProductsFilter } from "../../../contexts/ProductsFilterProvider";
import SearchField from "./SearchField";

const Navbar = () => {
  const [searchField, setSearchField] = useState("");
  const { user, logOut, loading: authLoading, userDetails } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { filterOptions, setFilterOptions } = useProductsFilter();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchField.trim() || pathname === "/products") {
      setFilterOptions({ ...filterOptions, search: searchField });
      navigate("/products");
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

      <SearchField
        handleSubmit={handleSubmit}
        searchField={searchField}
        setSearchField={setSearchField}
        w="500px"
      />

      <HStack>
        {authLoading ? (
          <BeatLoading size={10} h="0" w="0" />
        ) : userDetails ? (
          <Menu>
            <MenuButton>
              <Flex cursor="pointer" align="center">
                <Image
                  w={{ base: "30px", md: "37px" }}
                  h={{ base: "30px", md: "37px" }}
                  borderRadius="10px"
                  objectFit="cover"
                  src={userDetails?.img || userImage}
                  alt="Dan Abramov"
                  ml="15px"
                  mr="7px"
                />
                <Text fontWeight="semibold" fontSize="15px" mr="5px">
                  {userDetails?.name?.split(" ")[0]}
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
      </HStack>
    </Flex>
  );
};

export default Navbar;
