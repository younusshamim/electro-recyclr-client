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
import useCategories from "../../../hooks/useCategories";
import { useFilter } from "../../../contexts/FilterProvider";

const FilterOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // category data
  const {
    data: categoryData,
    isLoading: categoryLoading,
    error,
  } = useCategories();
  const categoryList = categoryData?.data;
  // filter contxt
  const { filterOptions, setFilterOptions } = useFilter();

  if (categoryLoading || error) return;

  return (
    <HStack justify="space-between" mt="5" mb="10">
      <HStack>
        <Text color="gray.500">Sorted By:</Text>

        <Flex align="center" justify="center" cursor="pointer" onClick={onOpen}>
          <Text mr="3px">
            {filterOptions?.selectedDistrict || "All District"}
          </Text>
          <IoIosArrowDown />
        </Flex>

        {isOpen && <DistrictModal isOpen={isOpen} onClose={onClose} />}
      </HStack>

      <Heading textTransform="uppercase" fontSize="27px" textAlign="center">
        {categoryList.find((cat) => cat._id == filterOptions.categoryId)
          ?.name || "All Category"}
      </Heading>

      <Select
        bg="gray.100"
        w="200px"
        value={filterOptions.categoryId}
        onChange={(e) =>
          setFilterOptions({
            ...filterOptions,
            page: 0,
            categoryId: e.target.value,
          })
        }
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
