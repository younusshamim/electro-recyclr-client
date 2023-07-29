import {
  Flex,
  HStack,
  Heading,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import DistrictModal from "./DistrictModal";
import useCategories from "../../../hook/useCategories";

const FilterOptions = ({
  selectedDistrict,
  setSelectedDistrict,
  categoryId,
  setCategoryId,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: categoryData, isLoading: categoryLoading, error } = useCategories();
  const categoryList = categoryData?.data;

  if(categoryLoading || error) return;

  return (
    <HStack justify="space-between" mt="5" mb="10">
    
          <HStack>
            <Text color="gray.500">Sorted By:</Text>

            <Flex
              align="center"
              justify="center"
              cursor="pointer"
              onClick={onOpen}
            >
              <Text mr="3px">{selectedDistrict || "All District"}</Text>
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
            {categoryList.find((cat) => cat._id == categoryId)?.name ||
              "All Category"}
          </Heading>

          <Select
            bg="gray.100"
            w="200px"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            placeholder="All Categories"
          >
            {categoryList.map((category, i) => (
              <option value={category._id} key={i}>
                {category.name}
              </option>
            ))}
          </Select>
    </HStack>
  );
};

export default FilterOptions;
