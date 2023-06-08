export const capitalize = (text) => {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
};

const getTitle = (pathname) => {
  const fullPathArr = pathname.split("/");
  const path = fullPathArr[fullPathArr.length - 1];
  const title = capitalize(path.split("-").join(" "));
  return title;
};

export default getTitle;
