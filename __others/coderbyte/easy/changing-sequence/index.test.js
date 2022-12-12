const ChangingSequence = require("./index");
describe("ChangingSequence", () => {
  it("should  return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence.", () => {
    expect(ChangingSequence([5, 4, 3, 2, 10, 11])).toBe(3);
  });
});

describe("ChangingSequence", () => {
  it("should  return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence.", () => {
    expect(ChangingSequence([5, 4, 3, 2, 10, 11])).toBe(3);
  });
});