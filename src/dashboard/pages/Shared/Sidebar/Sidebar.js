import React from "react";
import { Flex, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import sidebarItem from "../../../../data/sidebarItem";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import userImage from "../../../../assets/user.png";
import { useAuth } from "../../../../contexts/AuthProvider";

const Sidebar = () => {
  const { userDetails } = useAuth();

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
      <Link to="/">
        <Heading color="black" fontSize="24px" fontWeight="bold" mb="8">
          ElectroRecyclr
        </Heading>
      </Link>

      <VStack align="flex-start">
        {sidebarItem.map((sidebarItem, i) => (
          <SidebarItem sidebarItem={sidebarItem} key={sidebarItem.item + i} />
        ))}
      </VStack>

      <Link to="/dashboard/user">
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
            src={userDetails?.img || userImage}
            alt=""
            rounded="50%"
            h="40px"
            w="40px"
            objectFit="cover"
            ml="5px"
          />
          <Flex direction="column">
            <Heading fontSize="14px" fontWeight="semibold">
              {userDetails?.name?.length > 20
                ? userDetails?.name?.slice(0, 21) + ".."
                : userDetails?.name}
            </Heading>
            <Text fontSize="12px" color="gray.500">
              {userDetails?.email?.length > 19
                ? userDetails?.email?.slice(0, 19) + "..."
                : userDetails?.email}
            </Text>
          </Flex>
        </HStack>
      </Link>
    </Flex>
  );
};

export default Sidebar;
