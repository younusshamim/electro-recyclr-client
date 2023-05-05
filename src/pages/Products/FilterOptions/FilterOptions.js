import {
  Flex,
  HStack,
  Heading,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import categoryItems from "../../../data/categories";
import DistrictModal from "./DistrictModal";

const FilterOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");

  return (
    <HStack justify="space-between" mt="5" mb="10">
      <HStack>
        <Text color="gray.500">Sorted By:</Text>

        <Flex align="center" justify="center" cursor="pointer" onClick={onOpen}>
          <Text mr="3px">{selectedDistrict}</Text>
          <IoIosArrowDown />
        </Flex>

        {isOpen && (
          <DistrictModal
            isOpen={isOpen}
            onClose={onClose}
            setSelectedDistrict={setSelectedDistrict}
          />
        )}
      </HStack>

      <Heading textTransform="uppercase" fontSize="27px" textAlign="center">
        Smart Phones
      </Heading>

      <Select bg="gray.100" w="200px">
        {categoryItems.map((category, i) => (
          <option value={category.name} key={i}>
            {category.name}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default FilterOptions;
