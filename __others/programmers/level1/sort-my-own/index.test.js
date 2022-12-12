const sortMyOwn = require("./index");
describe("sortMyOwn", () => {
  it("should fail auto generated test", () => {
    expect(sortMyOwn(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
  });
});