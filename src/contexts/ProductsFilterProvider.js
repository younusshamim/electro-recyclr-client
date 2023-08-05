import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const initFilterOptions = {
  selectedDistrict: "",
  categoryId: "",
  page: 0,
  size: 8,
  search: "",
};

const ProductsFilterProvider = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState(initFilterOptions);

  const productsQueries = `district=${filterOptions.selectedDistrict}&search=${filterOptions.search}&categoryId=${filterOptions.categoryId}&page=${filterOptions.page}&size=${filterOptions.size}`;

  const filterInfo = {
    filterOptions,
    setFilterOptions,
    initFilterOptions,
    productsQueries,
  };

  return (
    <FilterContext.Provider value={filterInfo}>
      {children}
    </FilterContext.Provider>
  );
};

export const useProductsFilter = () => {
  return useContext(FilterContext);
};

export default ProductsFilterProvider;
