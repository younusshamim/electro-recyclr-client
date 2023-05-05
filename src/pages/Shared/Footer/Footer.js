import React from "react";
import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <Stack px={{ base: "10px", md: "120px" }} py="50px" mt="5" bg="black">
      <Text
        textAlign="center"
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="14px"
        color="gray.500"
      >
        Copyright &copy; {currYear} Younus Shamim
      </Text>
    </Stack>
  );
};

export default Footer;
