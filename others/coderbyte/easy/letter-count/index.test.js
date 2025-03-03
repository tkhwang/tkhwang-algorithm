const LetterCountI = require("./index");

describe('Letter Count Test', () => {
  test('TC #1', () => {
    expect(LetterCountI("the dog and cat")).toEqual("-1");
  });
});

describe('Letter Count Test', () => {
  test('TC #1', () => {
    expect(LetterCountI("Hello apple pie")).toEqual("Hello");
  });
});