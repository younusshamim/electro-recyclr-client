import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoDash } from "react-icons/go";

const SidebarItem = ({ onClose, sidebarItem: { Icon, name, link, subItems } }) => {
  let { pathname } = useLocation();
  const [isLargerThanMd] = useMediaQuery('(min-width: 768px)')

  return (
    <AccordionItem border="none" mb="1">
      {link ? (
        <Link to={link} onClick={() => link && !isLargerThanMd && onClose()}>
          <AccordionButton
            borderRadius="sm"
            transition="0.3s"
            _hover={{ color: "gray.900" }}
            color={pathname === link ? "gray.900" : "gray.500"}
            fontWeight={pathname === link ? "semibold" : "normal"}
            bg={pathname === link ? "gray.50" : ""}
            cursor="pointer"
            p="12px 8px"
          >
            <HStack justify="space-between" w="full">
              <HStack gap="5">
                <Box fontSize="19px" fontWeight="bold">
                  {<Icon />}
                </Box>
                <Text fontSize="15px">{name}</Text>
              </HStack>

              <Box fontSize="19px">
                {subItems.length > 0 && <MdKeyboardArrowDown />}
              </Box>
            </HStack>
          </AccordionButton>
        </Link>
      ) : (
        <AccordionButton
          borderRadius="sm"
          transition="0.3s"
          _hover={{ color: "gray.900" }}
          color={
            subItems.find((item) => item.link === pathname)
              ? "gray.900"
              : "gray.500"
          }
          bg={subItems.find((item) => item.link === pathname) && "gray.50"}
          fontWeight={
            subItems.find((item) => item.link === pathname)
              ? "semibold"
              : "normal"
          }
          cursor="pointer"
          p="12px 8px"
        >
          <HStack justify="space-between" w="full">
            <HStack gap="5">
              <Box fontSize="19px" fontWeight="bold">
                {<Icon />}
              </Box>
              <Text fontSize="15px">{name}</Text>
            </HStack>

            <Box fontSize="19px">
              {subItems.length > 0 && <MdKeyboardArrowDown />}
            </Box>
          </HStack>
        </AccordionButton>
      )}

      {/* subitems  */}
      {subItems.length > 0 && (
        <AccordionPanel py="2">
          {subItems?.map((sub) =>
            sub.link ? (
              <Link to={sub.link} key={sub.id} onClick={() => sub.link && !isLargerThanMd && onClose()}>
                <HStack
                  color={sub.link === pathname ? "primary.900" : "gray.500"}
                  pl="6"
                  mb="3"
                  cursor="pointer"
                  transition="0.3s"
                  _hover={{ color: "gray.900" }}
                  fontWeight={sub.link === pathname ? "semibold" : "normal"}
                >
                  <Box>
                    <GoDash />
                  </Box>
                  <Text fontSize="15px">{sub.name}</Text>
                </HStack>
              </Link>
            ) : (
              <HStack
                key={sub.id}
                color={sub.link === pathname ? "primary.900" : "gray.500"}
                pl="6"
                mb="3"
                cursor="pointer"
                transition="0.3s"
                _hover={{ color: "gray.900" }}
                fontWeight={sub.link === pathname ? "semibold" : "normal"}
              >
                <Box>
                  <GoDash />
                </Box>
                <Text fontSize="15px">{sub.name}</Text>
              </HStack>
            )
          )}
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};

export default SidebarItem;
