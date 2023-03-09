// 다항식 더하기
// level 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial) {
  let ones = 0;
  let zeros = 0;

  for (const value of polynomial.split(" + ")) {
    const nums = value.split("x").map(Number);

    let one;
    let zero;

    if (nums.length > 1) {
      one = nums[0] === 0 ? 1 : nums[0];
    } else {
      zero = nums[0];
    }

    if (one > 0) ones += one;
    if (zero > 0) zeros += zero;
  }

  let res = "";
  if (ones > 1) res += `${ones}`;
  if (ones > 0) res += "x";
  if (zeros > 0) {
    if (ones > 0) res += " + ";
    res += `${zeros}`;
  }

  return res;
}
