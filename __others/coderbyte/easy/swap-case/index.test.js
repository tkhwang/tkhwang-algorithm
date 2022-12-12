const SwapCase = require("./index");

describe("Test case", () => {
  it("should swap the case of each character.", () => {
    expect(SwapCase("Hello World")).toBe("hELLO wORLD");
  });
});