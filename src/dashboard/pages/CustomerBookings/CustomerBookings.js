import { Heading } from "@chakra-ui/react";
import BorderedStack from "../../components/BorderedStack/BorderedStack";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import useBookings from "../../../hooks/useBookings";
import useProducts from "../../../hooks/useProducts";
import { useAuth } from "../../../contexts/AuthProvider";
import { useState } from "react";

const initFilter = {
  page: 0,
  size: 8,
};

const CustomerBookings = () => {
  const { userDetails } = useAuth();
  const [filterOptions, setFilterOptions] = useState(initFilter);
  const queries = `page=${filterOptions.page}&size=${filterOptions.size}&email=${userDetails?.email}`;

  // use data
  const {
    data: productsData,
    isLoading: productsLoading,
    error,
  } = useProducts(queries);
  const { data: bookingsData, isLoading: bookingsLoading } = useBookings();
  // data
  const products = productsData?.data;
  const bookings = bookingsData?.data;
  const loading = productsLoading || bookingsLoading;

  return (
    <BorderedStack>
      <Heading fontSize="20px" mb="5">
        Customer Bookings
      </Heading>

      {loading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : products.length === 0 ? (
        <NoDataFound msg="No Bookings !" />
      ) : (
        <SimpleTable theadData={theadData}>
          {/* {products.map((product) => (
            <ProductRow product={product} key={product._id} />
          ))} */}
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default CustomerBookings;
