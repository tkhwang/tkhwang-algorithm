const PrimeTime = require("./index");

describe("PrimeTime", () => {
  it("should test whethere the given number is the prime number is.", () => {
    expect(PrimeTime(19)).toBe(true);
  });
});