const PalindromeTwo = require("./index");

describe("index", () => {
  it("should return the string true if the parameter is a palindrome", () => {
    expect(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")).toBe(true);
  });
});

describe("index", () => {
  it("should return the string true if the parameter is a palindrome", () => {
    expect(PalindromeTwo("Sir{} I am not Iris!")).toBe(false);
  });
});

describe("index", () => {
  it("should return the string true if the parameter is a palindrome", () => {
    expect(PalindromeTwo("radars belong underwater")).toBe(false);
  });
});

describe("index", () => {
  it("should return the string true if the parameter is a palindrome", () => {
    expect(PalindromeTwo("A war at Tarawa!")).toBe(true);
  });
});