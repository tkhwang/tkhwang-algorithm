const ElementMerger = require('./index');

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(ElementMerger([4, 5, 1, 2, 7])).toBe(1);
  });
});