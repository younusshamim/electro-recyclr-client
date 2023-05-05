import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex direction="column" overflow="hidden">
      <Navbar />
      <Flex py="30px"></Flex>
      <Outlet />
      <Footer />
    </Flex>
  );
};

export default Main;
