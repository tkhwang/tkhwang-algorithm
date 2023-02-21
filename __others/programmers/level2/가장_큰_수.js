// 가장 큰 수
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  if (numbers.every((v) => v === 0)) return "0";

  return numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
}
