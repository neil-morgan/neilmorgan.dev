export const formatDate = (
  inputDate: string,
  separator: "-" | "/" | " " = " ",
) => {
  const dateParts = inputDate.split("T")[0].split("-");
  return dateParts[2] + separator + dateParts[1] + separator + dateParts[0];
};
