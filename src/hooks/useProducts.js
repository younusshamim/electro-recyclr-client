import { useQuery } from "react-query";
import { onGetProducts } from "../services/product-services";

const useProducts = (queries) => {
  return useQuery(["getProducts", queries], () => onGetProducts(queries));
};

export default useProducts;
