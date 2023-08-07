import { formatDistance, format } from "date-fns";

export const commaFormat = (value) => {
  return value && value.toLocaleString("en-IN");
};

export const timeDistance = (dateTime) => {
  return dateTime && formatDistance(new Date(dateTime), new Date());
};

export const utcToLocalTime = (utcDateString) => {
  if (utcDateString) {
    const utcDate = new Date(utcDateString);
    return utcDate.toLocaleString();
  }
};

export const dateTimeFormat = (dateTime) => {
  return dateTime && format(new Date(dateTime), "dd MMM yyyy, hh:mm aa");
};
