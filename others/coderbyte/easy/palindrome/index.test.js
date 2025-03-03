const Palindrome = require("./index");

describe("Test case #1", () => {
  it("should pass several test cases.", () => {
    expect(Palindrome("dood")).toEqual(true);
  });
});

describe('Test case #2', () => {
  test('Case #2', () => {
    expect(Palindrome("dont nod")).toEqual(true);
  });
});