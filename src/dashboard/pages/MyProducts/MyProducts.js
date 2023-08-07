import React, { useState } from "react";
import BorderedStack from "../../components/BorderedStack/BorderedStack";
import { Heading } from "@chakra-ui/react";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import useProducts from "../../../hooks/useProducts";
import { useAuth } from "../../../contexts/AuthProvider";
import ProductRow from "./ProductRow";

const initFilter = {
  page: 0,
  size: 8,
};

const MyProducts = () => {
  const { userDetails } = useAuth();
  const [filterOptions, setFilterOptions] = useState(initFilter);
  const queries = `page=${filterOptions.page}&size=${filterOptions.size}&email=${userDetails?.email}`;
  // data
  const { data: productsData, isLoading, error } = useProducts(queries);
  const products = productsData?.data?.products;
  const theadData = ["Product", "price", "Description", "Bookings", "Status"];

  return (
    <BorderedStack>
      <Heading fontSize="20px" mb="5">
        Products Posted For Sale
      </Heading>

      {isLoading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : products.length === 0 ? (
        <NoDataFound msg="No product posted yet!" />
      ) : (
        <SimpleTable theadData={theadData}>
          {products.map((product) => (
            <ProductRow product={product} key={product._id} />
          ))}
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default MyProducts;
