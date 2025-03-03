const SimpleMode = require("./index");

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(SimpleMode([5, 10, 10, 6, 5])).toBe(5);
  });
});