import React from "react";
import { Button, HStack, IconButton, Image, Text, Tr } from "@chakra-ui/react";
import CstmTd from "../../components/CstmTd/CstmTd";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const TableRow = ({ category: { name, img } }) => {
  return (
    <Tr>
      <CstmTd>
        <HStack>
          <Image
            src={img ? img : ""}
            alt={name}
            w="60px"
            h="60px"
            objectFit="cover"
            borderRadius="lg"
            padding={!img && "5px"}
          />
          <Text>{name}</Text>
        </HStack>
      </CstmTd>

      <CstmTd>
        <HStack>
          <IconButton
            aria-label=""
            icon={<FiEdit />}
            fontSize="18px"
            size="sm"
            // isDisabled={true}
          />
          <IconButton
            aria-label=""
            icon={<RiDeleteBinLine />}
            fontSize="18px"
            size="sm"
            // isDisabled={true}
            bg="negative.600"
            _hover={{ bg: "negative.700" }}
            _active={{ bg: "negative.800", color: "white" }}
            color="negative.900"
          />
        </HStack>
      </CstmTd>
    </Tr>
  );
};

export default TableRow;
