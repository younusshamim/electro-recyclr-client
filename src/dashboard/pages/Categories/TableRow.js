import React from "react";
import {
  Button,
  HStack,
  IconButton,
  Image,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import CstmTd from "../../components/CstmTd/CstmTd";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const TableRow = ({ category: { name, img } }) => {
  return (
    <Tr>
      <Td>
        <HStack>
          <Image
            src={img ? img : ""}
            alt={name}
            w="50px"
            h="50px"
            objectFit="cover"
            borderRadius="lg"
            padding={!img && "5px"}
          />
          <Text>{name}</Text>
        </HStack>
      </Td>

      <Td>
        <HStack>
          <IconButton
            aria-label=""
            icon={<FiEdit />}
            fontSize="18px"
            size="sm"
            isDisabled={true}
          />
          <IconButton
            aria-label=""
            icon={<RiDeleteBinLine />}
            fontSize="18px"
            size="sm"
            isDisabled={true}
          />
        </HStack>
      </Td>
    </Tr>
  );
};

export default TableRow;
