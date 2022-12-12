const HammingDistance = require("./index");
describe("HammingDistance", () => {
  it("should give the number of positions where the corresponding characters are different.", () => {
    expect(HammingDistance(["10011", "10100"])).toBe(3);
  });
});

describe("HammingDistance", () => {
  it("should give the number of positions where the corresponding characters are different.", () => {
    expect(HammingDistance(["coder", "codec"])).toBe(1);
  });
});