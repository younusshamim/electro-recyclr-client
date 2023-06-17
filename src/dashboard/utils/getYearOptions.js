const getYearOptions = (limitYear) => {
  const yearList = [];
  const currYear = new Date().getFullYear();
  for (let year = currYear; year >= limitYear; year--) {
    yearList.push({ value: year, label: year });
  }
  return yearList;
};

export default getYearOptions;
