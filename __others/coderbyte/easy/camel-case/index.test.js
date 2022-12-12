const CamelCase = require("./index");

describe("index", () => {
  it("should return it in proper camel case format where the first letter of each word is capitalized \(excluding the first letter\).", () => {
    expect(CamelCase("cats AND*Dogs-are Awesome")).toBe("catsAndDogsAreAwesome");
  });
});