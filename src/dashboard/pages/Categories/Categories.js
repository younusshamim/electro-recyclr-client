import React from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import TableRow from "./TableRow";
import { Button, useDisclosure } from "@chakra-ui/react";
import AddCategoryModal from "./AddCategoryModal";
import { useQuery } from "react-query";
import { onGetCategories } from "../../../services/category-services";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theadData = ["Name", "Action"];

  // use query  data
  const { data, isLoading, error } = useQuery("getCategories", onGetCategories);
  const categories = data?.data;

  return (
    <BorderedStack>
      <Button
        w="fit-content"
        size="sm"
        onClick={onOpen}
        mb="2"
        isDisabled={true}
      >
        Add Category
      </Button>

      {isOpen && <AddCategoryModal isOpen={isOpen} onClose={onClose} />}

      {isLoading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : categories.length === 0 ? (
        <NoDataFound />
      ) : (
        <SimpleTable theadData={theadData}>
          {categories.map((category, i) => (
            <TableRow category={category} key={i} />
          ))}
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default Categories;
