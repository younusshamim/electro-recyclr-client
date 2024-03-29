import { useQuery, useQueryClient } from "react-query";
import { onGetProduct } from "../services/product-services";
import { useProductsFilter } from "../contexts/ProductsFilterProvider";

const useProduct = (id) => {
  const queryClient = useQueryClient();
  const { productsQueries } = useProductsFilter();

  const getInitData = () => {
    const products = queryClient.getQueryData(["products", productsQueries]);
    const product = products?.data?.products?.find(
      (product) => product._id === id
    );
    if (product) return { data: product };
  };

  return useQuery(["getProduct", id], () => onGetProduct(id), {
    enabled: !!id,
    initialData: getInitData,
  });
};

export default useProduct;
