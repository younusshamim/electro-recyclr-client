import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const DashboardMain = () => {
  return (
    <Flex>
      <Sidebar display={{base:'none', md:'flex'}}/>

      <Flex 
        direction="column"
        p={{base:"20px 10px", md:"5" }}
        w={{base:"100%", md:"calc(100% - 250px)"}} 
        ml={{ md:"250px"}}
      >
        <Navbar />
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default DashboardMain;
