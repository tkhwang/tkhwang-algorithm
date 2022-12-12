const SecondGreatLow = require("./index");

describe('TC', () => {
  it('should test case', () => {
    expect(SecondGreatLow([1, 42, 42, 180])).toEqual("42 42");
  });
});

describe('TC', () => {
  it('should test case', () => {
    expect(SecondGreatLow([78, 90, 100, 1, 2])).toEqual("2 90");
  });
});

describe('TC', () => {
  it('should test case', () => {
    expect(SecondGreatLow([-4, -5, 10, 2])).toEqual("-4 2");
  });
});