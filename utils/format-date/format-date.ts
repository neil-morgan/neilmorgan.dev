export const formatDate = (
  inputDate: string,
  separator: "hyphen" | "slash" | "space" = "space",
  part: "full" | "monthYear" | "year" = "year",
) => {
  const dateParts = inputDate.split("T")[0].split("-");
  const selectedSeparator =
    separator === "hyphen" ? "-" : separator === "slash" ? "/" : " ";

  if (part === "full") {
    return (
      dateParts[2] +
      selectedSeparator +
      dateParts[1] +
      selectedSeparator +
      dateParts[0]
    );
  }
  if (part === "monthYear") {
    return dateParts[1] + selectedSeparator + dateParts[0];
  }
  if (part === "year") {
    return dateParts[0];
  }
};
