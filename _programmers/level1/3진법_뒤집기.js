// 3진법 뒤집기
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const divMod = (num, base) => [Math.floor(num / base), num % base];

  const radixChange = (num, base) => {
    if (num === 0) return "0";

    const nums = [];

    while (num) {
      const [quotient, digit] = divMod(num, base);
      num = quotient;
      nums.push(String(digit));
    }
    return nums.reverse().join("");
  };

  const three = radixChange(n, 3);

  return parseInt(String(three).split("").reverse().join(""), 3);
}
