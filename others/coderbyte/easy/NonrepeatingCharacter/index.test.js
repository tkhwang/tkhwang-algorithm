const NonrepeatingCharacter = require("./index");

describe("NonrepeatingCharacter", () => {
  it("should return the first non-repeating character.", () => {
    expect(NonrepeatingCharacter("hello world hi hey")).toBe("w");
  });
});