const LetterChanges = require("./index");

describe("LetterChanges", () => {
  it("should pass the test case", () => {
    expect(LetterChanges("hello*3")).toBe("Ifmmp*3");
  });
});