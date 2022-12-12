/*
1. For the input "Laura sobs"
your output was incorrect.The correct answer is true.
2. For the input "away obe"
your output was incorrect.The correct answer is true.
3. For the input "noah obe"
your output was incorrect.The correct answer is true.
4. For the input "far ebs"
your output was incorrect.The correct answer is true.
5. For the input "123advb"
your output was incorrect.The correct answer is false.
6. For the input "123adzvb"
your output was incorrect.The correct answer is true.
7. For the input "abccccazzzb"
your output was incorrect.The correct answer is true.
8. For the input "bzzza"
your output was incorrect.The correct answer is true.
*/
const ABCheck = require("./index");

describe("ABCheck", () => {
  it("should return the string true if the characters a and b are separated.", () => {
    expect(ABCheck("after badly")).toBe(false);
  });
});

describe("ABCheck", () => {
  it("should return the string true if the characters a and b are separated.", () => {
    expect(ABCheck("Laura sobs")).toBe(true);
  });
});