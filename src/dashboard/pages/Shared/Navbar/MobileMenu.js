import React from "react";
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenuAlt1 } from 'react-icons/hi'
import Sidebar from "../Sidebar/Sidebar";

const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box fontSize="24px" display={{ base: 'block', md: 'none' }} ref={btnRef} onClick={onOpen} >
                <HiMenuAlt1 />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    
                    <DrawerBody>
                        <Sidebar onClose={onClose}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileMenu;