// 이진 변환 반복하기
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const divMod = (num, base) => [Math.floor(num / base), num % base];
  const radixChange = (num, base) => {
    if (num === 0) return "0";

    const nums = [];

    while (num) {
      const [quotient, digit] = divMod(num, base);
      num = quotient;
      nums.push(digit);
    }
    return nums.reverse().join("");
  };

  let countOperation = 0;
  let countZero = 0;

  while (s.length > 1) {
    let temp = "";
    for (const b of s) {
      if (b === "1") {
        temp += "1";
      }
    }

    countZero += s.length - temp.length;
    s = radixChange(temp.length, 2);
    countOperation += 1;
  }

  return [countOperation, countZero];
}
