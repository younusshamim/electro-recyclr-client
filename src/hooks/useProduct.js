import { useQuery } from "react-query";
import { onGetProduct } from "../services/product-services";

const useProduct = (id) => {
  const productData = useQuery(["getProduct", id], () => onGetProduct(id), {
    enabled: !!id,
  });
  return productData;
};

export default useProduct;
