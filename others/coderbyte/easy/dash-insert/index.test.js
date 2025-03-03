const DashInsert = require("./index");

describe("Test case", () => {
  it("should  insert dashes \(\'-\'\) between each two odd numbers in str", () => {
    expect(DashInsert(99946)).toBe("9-9-946");
  });
});

describe("Test case", () => {
  it("should  insert dashes \(\'-\'\) between each two odd numbers in str", () => {
    expect(DashInsert(1562)).toBe("1-562");
  });
});