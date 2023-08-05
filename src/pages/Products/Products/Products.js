import { Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Product from "../../Shared/Product/Product";
import FilterOptions from "../FilterOptions/FilterOptions";
import Pagination from "../Pagination/Pagination";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { useProductsFilter } from "../../../contexts/ProductsFilterProvider";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  // filter context
  const {
    filterOptions: { search, size },
    productsQueries,
  } = useProductsFilter();
  // query
  const { data, isLoading, error } = useProducts(productsQueries);
  // data
  const productList = data?.data?.products;
  const count = data?.data?.count;
  const pages = Math.ceil(count / size);

  return (
    <Stack p="50px 120px 25px 120px">
      <FilterOptions />

      {search && (
        <Heading fontSize="lg" fontWeight="semibold">
          Search Result: {productList?.length} items found for '{search}'
        </Heading>
      )}

      {isLoading ? (
        <BeatLoading h="65vh" />
      ) : error ? (
        <ErrorMessage error={error.message} h="65vh" />
      ) : productList?.length === 0 ? (
        <ErrorMessage error="No Data Found" h="65vh" />
      ) : (
        <>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            columnGap="4"
            rowGap={{ base: 6, md: 8 }}
            pt="10"
          >
            {productList.map((product, i) => (
              <Product product={product} key={i} />
            ))}
          </Grid>

          <Pagination pages={pages} />
        </>
      )}
    </Stack>
  );
};

export default Products;
