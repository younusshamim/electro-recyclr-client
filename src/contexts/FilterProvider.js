import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

const initFilterOptions = {
  selectedDistrict: "",
  categoryId: "",
  page: 0,
  size: 8,
  search: "",
};

const FilterProvider = ({ children }) => {
  const [filterOptions, setFilterOptions] = useState(initFilterOptions);

  const filterInfo = {
    filterOptions,
    setFilterOptions,
    initFilterOptions,
  };

  return (
    <FilterContext.Provider value={filterInfo}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
