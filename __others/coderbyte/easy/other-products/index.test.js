const OtherProducts = require("./index");

describe("OtherProducts", () => {
  it("should return a new list of the products of all the other numbers in the array for each element.", () => {
    expect(OtherProducts([1, 2, 3, 4, 5])).toBe([120, 60, 40, 30, 24]);
  });
});