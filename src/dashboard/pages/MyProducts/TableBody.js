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
import ImageNameCard from "../../components/ImageNameCard/ImageNameCard";
import useBookings from "../../../hooks/useBookings";

const TableBody = ({ products }) => {
  // const menuItems = [
  //   { value: "User", option: "Make User" },
  //   { value: "Verified", option: "Verified User" },
  //   { value: "Admin", option: "Make Admin" },
  // ];

  // const { mutate, error } = useMutation(onUpdateUserStatus, {
  //   onSuccess: () => {
  //     toast("User Updated Successfully.");
  //   },
  //   onError: (err) => {
  //     toast(err.message);
  //   },
  // });

  return products.map((product) => {
    const payload = { productId: product.Id };
    const { isLoading: bookingsLoading, data: bookingsData } =
      useBookings(payload);
    const bookings = bookingsData?.data;

    return (
      <Tr key={product._id}>
        <CstmTd>
          <ImageNameCard img={product.images[0]} name={product.name} />
        </CstmTd>
        <CstmTd>{product.price}</CstmTd>
        <CstmTd>
          {product.description.length > 20
            ? product.description.slice(0, 20) + "..."
            : product.description}
        </CstmTd>

        <CstmTd>{product.price}</CstmTd>

        {/* <CstmTd>
          <Menu>
            <MenuButton>
              <Button size="sm" w="90px">
                <HStack>
                  <Text>{status || "User"}</Text>
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
        </CstmTd> */}
      </Tr>
    );
  });
};

export default TableBody;
