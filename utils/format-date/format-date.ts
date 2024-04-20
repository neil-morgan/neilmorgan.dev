export const formatDate = (inputDate: string) => {
  const dateParts = inputDate.split("T")[0].split("-");
  return dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];
};
