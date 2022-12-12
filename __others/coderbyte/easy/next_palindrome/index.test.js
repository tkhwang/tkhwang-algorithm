const NextPalindrome = require("./index");
describe("index", () => {
  it("should return the next largest palindromic number. ", () => {
    expect(NextPalindrome(179)).toBe(181);
  });
});

describe("index", () => {
  it("should return the next largest palindromic number. ", () => {
    expect(NextPalindrome(2)).toBe(3);
  });
});