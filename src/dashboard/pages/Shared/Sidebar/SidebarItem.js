import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SidebarItem = ({ sidebarItem: { Icon, item, link } }) => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Flex
      w="100%"
      transition="0.3s"
      _hover={{ color: "gray.900" }}
      color={pathname === link ? "gray.900" : "gray.500"}
      fontWeight={pathname === link ? "semibold" : "normal"}
      bg={pathname === link ? "gray.50" : ""}
      cursor="pointer"
      p="12px 8px"
      onClick={() => navigate(link)}
    >
      <HStack gap="1">
        <Box fontSize="19px">{<Icon />}</Box>
        <Box fontSize="15px">{item}</Box>
      </HStack>
    </Flex>
  );
};

export default SidebarItem;
