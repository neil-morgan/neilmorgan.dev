import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("should format date with default options", () => {
    const inputDate = "2023-04-15T00:00:00Z";
    expect(formatDate(inputDate)).toEqual("15 04 2023");
  });

  it("should format date with hyphen separator", () => {
    const inputDate = "2023-04-15T00:00:00Z";
    const options = { separator: "hyphen" as "hyphen" };
    expect(formatDate(inputDate, options)).toEqual("15-04-2023");
  });

  it("should format date with slash separator", () => {
    const inputDate = "2023-04-15T00:00:00Z";
    const options = { separator: "slash" as "slash" };
    expect(formatDate(inputDate, options)).toEqual("15/04/2023");
  });

  it("should format date in monthYear format", () => {
    const inputDate = "2023-04-15T00:00:00Z";
    const options = { format: "monthYear" as "monthYear" };
    expect(formatDate(inputDate, options)).toEqual("04 2023");
  });

  it("should format date in year format", () => {
    const inputDate = "2023-04-15T00:00:00Z";
    const options = { format: "year" as "year" };
    expect(formatDate(inputDate, options)).toEqual("2023");
  });

  it("should throw an error for invalid date format", () => {
    const inputDate = "invalid-date";
    expect(() => formatDate(inputDate)).toThrow("Invalid date format");
  });
});
