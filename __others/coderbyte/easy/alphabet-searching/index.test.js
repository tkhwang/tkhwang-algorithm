const AlphabetSearching = require("./index");

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy")).toBe(false);
  });
});

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pnsowtuv")).toBe(true);
  });
});

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(AlphabetSearching("zcxyjbbkfgtbhdaielqrm45pnsowtuv")).toBe(true);
  });
});

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pn sajbskdjfkuwufejsfsa owtuv")).toBe(true);
  });
});

describe("index", () => {
  it("should fail auto generated test", () => {
    expect(AlphabetSearching("123abcdefg123hijklmn123opqrstuvyxwyzyz")).toBe(true);
  });
});