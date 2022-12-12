const StringMerge = require('./index');

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(StringMerge("aaa*bbb")).toBe("ababab");
  });
});