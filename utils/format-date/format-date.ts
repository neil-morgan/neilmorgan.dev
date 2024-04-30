export const formatDate = (
  inputDate: string,
  separator: "-" | "/" | " " = " ",
  part: "full" | "monthYear" | "year" = "year",
) => {
  const dateParts = inputDate.split("T")[0].split("-");

  if (part === "full") {
    return dateParts[2] + separator + dateParts[1] + separator + dateParts[0];
  }
  if (part === "monthYear") {
    return dateParts[1] + separator + dateParts[0];
  }
  if (part === "year") {
    return dateParts[0];
  }
};
