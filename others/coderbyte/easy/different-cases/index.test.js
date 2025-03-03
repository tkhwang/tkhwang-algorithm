const DifferentCases = require('./index');

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(DifferentCases("cats AND*Dogs-are Awesome")).toBe("CatsAndDogsAreAwesome");
  });
});