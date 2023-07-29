import { useQuery } from "react-query";
import { onGetCategories } from "../services/category-services";

const useCategories = () => {
  const categoryData = useQuery("getCategories", onGetCategories);
  return categoryData;
};

export default useCategories;
