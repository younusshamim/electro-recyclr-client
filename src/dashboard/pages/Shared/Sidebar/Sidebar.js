import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import sidebarItem from "../../../../data/sidbarItem";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      borderRightWidth="1px"
      borderRightColor="gray.100"
      w="230px"
      h="100vh"
      p="5"
      position="relative"
    >
      <Heading color="black" fontSize="24px" fontWeight="bold" mb="8">
        ElectroRecyclr
      </Heading>

      <VStack align="flex-start">
        {sidebarItem.map((sidebarItem, i) => (
          <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.item + i} />
        ))}
      </VStack>

      <HStack
        bg="gray.100"
        p="10px 3px"
        overflow="hidden"
        borderRadius="lg"
        position="absolute"
        bottom="20px"
        left="5%"
        w="90%"
        cursor="pointer"
      >
        <Image
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"
          alt=""
          rounded="50%"
          h="40px"
          w="40px"
          objectFit="cover"
          ml="5px"
        />
        <Flex direction="column">
          <Heading fontSize="14px" fontWeight="semibold">
            Younus Shamim
          </Heading>
          <Text fontSize="12px" color="gray.500">
            younusshamim.bd@gmai...
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Sidebar;
