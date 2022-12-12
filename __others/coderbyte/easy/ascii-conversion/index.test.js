const ASCIIConversion = require('./index');

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(ASCIIConversion("hello world")).toBe("104101108108111 119111114108100");
  });
});