import type { FormatDateOptions } from "./types";

export const formatDate = (inputDate: string, options?: FormatDateOptions) => {
  if (isNaN(Date.parse(inputDate))) {
    throw new Error("Invalid date format");
  }

  const { separator, format } = options || {};
  const dateParts = inputDate.split("T")[0].split("-");
  const selectedSeparator =
    separator === "hyphen" ? "-" : separator === "slash" ? "/" : " ";

  if (format === "monthYear") {
    return dateParts[1] + selectedSeparator + dateParts[0];
  }

  if (format === "year") {
    return dateParts[0];
  }

  return (
    dateParts[2] +
    selectedSeparator +
    dateParts[1] +
    selectedSeparator +
    dateParts[0]
  );
};
