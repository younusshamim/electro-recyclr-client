import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { timeDistance } from "../../../utils";
import { MdVerifiedUser } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Information = ({ item, onOpen }) => {
  return (
    <Flex direction="column" w="50%">
      <Heading fontSize="24px" mb="1">
        {item.name}
      </Heading>
      <Text mb="4">{item.address}</Text>

      <HStack mb="2px">
        <Text fontWeight="semibold">{item.sellerName}</Text>
        {item.isVerified && (
          <Flex
            align="center"
            justify="center"
            bg="gray.600"
            color="white"
            padding="0px 5px"
            fontSize="14px"
            borderRadius="5px"
            w="fit-content"
          >
            <Box mr="3px">
              <MdVerifiedUser />
            </Box>
            <Text>verified</Text>
          </Flex>
        )}
      </HStack>

      <Flex align="center" fontWeight="semibold">
        <Box mr="5px" fontSize="18px">
          <IoIosCall />
        </Box>
        <Text>{item.mobile}</Text>
      </Flex>

      <Divider my="4" />

      <Grid templateColumns="repeat(3, 1fr)" mb="5">
        <Text>Category: {item.category}</Text>
        <Text>Condition: {item.condition}</Text>
        <Text>Used: {item.yearsOfUse}</Text>
        <Text>Posted: {timeDistance(item.postedTime)}</Text>
        <Text>Original Price: {item.orginalPrice} BDT</Text>
      </Grid>

      <Text fontSize="18px" fontWeight="semibold" mb="3">
        Price: {item.resalePrice} BDT
      </Text>

      <Text mb="5">Description: {item.description}</Text>

      <Button
        color="white"
        bg="black"
        _hover={{ bg: "black" }}
        _active={{ bg: "gray.700" }}
        w="fit-content"
        onClick={onOpen}
      >
        Book Now
      </Button>
    </Flex>
  );
};

export default Information;
