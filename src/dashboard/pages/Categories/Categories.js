import React from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import TableRow from "./TableRow";

const Categories = () => {
  const categories = [];
  const loading = false;
  const error = false;
  const theadData = ["Category"];

  return (
    <BorderedStack>
      {loading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : categories.length === 0 ? (
        <NoDataFound msg="No Users Found !!" />
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
