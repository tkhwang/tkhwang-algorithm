const ArithGeo = require("./index");

describe('Test Case #1', () => {
  it('should pass tc #1', () => {
    const m = [1, 2, 3, 4];
    expect(ArithGeo(m)).toEqual("Arithmetic");
  });
});

describe('Test Case #2', () => {
  it('should pass tc #2', () => {
    const m = [1, 2, 3, 4, 5, 10, 20];
    expect(ArithGeo(m)).toEqual("-1");
  });
});

describe('Test Case #3', () => {
  it('should pass tc #3', () => {
    const m = [1, 2, 3, 4, 5, 6, 7, 88, 2];
    expect(ArithGeo(m)).toEqual("-1");
  });
});