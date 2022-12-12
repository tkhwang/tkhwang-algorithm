const VowelCount = require("./index");

describe("index", () => {
  it("should return the number of vowels the string contains", () => {
    expect(VowelCount('hello')).toBe(2);
  });
});