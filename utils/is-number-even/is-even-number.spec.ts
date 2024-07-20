import { isNumberEven } from "./is-number-even";

describe("isNumberEven", () => {
  it("should return true for even numbers", () => {
    expect(isNumberEven(2)).toBe(true);
    expect(isNumberEven(4)).toBe(true);
    expect(isNumberEven(100)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isNumberEven(1)).toBe(false);
    expect(isNumberEven(3)).toBe(false);
    expect(isNumberEven(101)).toBe(false);
  });

  it("should return true for zero", () => {
    expect(isNumberEven(0)).toBe(true);
  });

  it("should return false for negative odd numbers", () => {
    expect(isNumberEven(-1)).toBe(false);
    expect(isNumberEven(-3)).toBe(false);
  });

  it("should return true for negative even numbers", () => {
    expect(isNumberEven(-2)).toBe(true);
    expect(isNumberEven(-4)).toBe(true);
  });
});
