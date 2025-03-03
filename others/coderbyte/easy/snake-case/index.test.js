const SnakeCase = require('./index');

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(SnakeCase("BOB loves-coding")).toBe("bob_loves_coding");
  });
});