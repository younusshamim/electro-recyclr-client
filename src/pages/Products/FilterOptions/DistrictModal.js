import {
  Box,
  Flex,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import districts from "../../../data/districts";
import { BiSearch } from "react-icons/bi";
import { useProductsFilter } from "../../../contexts/ProductsFilterProvider";

const DistrictModal = ({ isOpen, onClose }) => {
  const [districtList, setdistrictList] = useState(districts);
  // filter contxt
  const { filterOptions, setFilterOptions } = useProductsFilter();

  const handleSearch = (value) => {
    const newDistrictList = districts.filter((district) =>
      district.toLowerCase().includes(value.toLowerCase())
    );
    setdistrictList(newDistrictList);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} size="xl">
      <ModalOverlay />
      <ModalContent maxH="500px" minH="500px" maxW="600px" overflowY="scroll">
        <ModalHeader position="fixed" bg="white" w="600px">
          <Flex w="250px" position="relative">
            <Input
              type="text"
              size="sm"
              placeholder="Search Your District"
              pl="7"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Box position="absolute" left="5px" top="7px">
              <BiSearch />
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody pt="70px">
          <Grid templateColumns={{base:"repeat(2, 1fr)", md:"repeat(4, 1fr)"}} columnGap="8" rowGap="3">
            {districtList.map((district) => (
              <Box
                fontSize="15px"
                cursor="pointer"
                _active={{ color: "gray.500" }}
                onClick={() => {
                  setFilterOptions({
                    ...filterOptions,
                    selectedDistrict:
                      district === "All District" ? "" : district,
                  });
                  onClose();
                }}
              >
                {district}
              </Box>
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DistrictModal;
