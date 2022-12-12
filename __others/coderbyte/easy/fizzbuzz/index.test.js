const FizzBuzz = require("./index");

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(FizzBuzz(3)).toBe("1 2 Fizz");
  });
});

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(FizzBuzz(8)).toBe("1 2 Fizz 4 Buzz Fizz 7 8");
  });
});