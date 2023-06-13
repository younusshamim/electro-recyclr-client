import React from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import TableRow from "./TableRow";
import categoryItems from "../../../data/categories";
import { Button, useDisclosure } from "@chakra-ui/react";
import AddCategoryModal from "./AddCategoryModal";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loading = false;
  const error = false;
  const theadData = ["Name", "Action"];

  return (
    <BorderedStack>
      <Button w="fit-content" size="sm" onClick={onOpen} mb="2">
        Add Category
      </Button>

      {isOpen && <AddCategoryModal isOpen={isOpen} onClose={onClose} />}

      {loading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : categoryItems.length === 0 ? (
        <NoDataFound msg="No Users Found !!" />
      ) : (
        <SimpleTable theadData={theadData}>
          {categoryItems.map((category, i) => (
            <TableRow category={category} key={i} />
          ))}
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default Categories;
