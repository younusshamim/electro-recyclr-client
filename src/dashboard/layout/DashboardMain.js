import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const DashboardMain = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex direction="column" p="5" w="calc(100% - 250px)" ml="250px">
        <Navbar />
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default DashboardMain;
