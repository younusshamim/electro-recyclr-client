import React from "react";
import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchField = ({
  handleSubmit,
  searchField,
  setSearchField,
  ...rest
}) => {
  return (
    <Box {...rest} display={{ base: "none", md: "block" }}>
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg" position="relative" borderRadius="md">
          <Box
            color="gray.600"
            position="absolute"
            left="10px"
            top="15px"
            zIndex="99"
            fontSize="23px"
          >
            <BiSearch />
          </Box>

          <Input
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            type="text"
            pl="40px"
            placeholder="What are you looking for?"
            bg="gray.50"
            borderRadius="md"
            color="gray.600"
            sx={{
              _placeholder: {
                color: "gray.400",
                fontSize: { base: "14px", md: "15px" },
              },
            }}
          />

          <InputRightAddon
            color="white"
            bg="black"
            cursor="pointer"
            fontSize="15px"
            fontWeight="semibold"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </InputRightAddon>
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchField;
