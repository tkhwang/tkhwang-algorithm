// 큰 수 만들기
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42883#

function solution(number, k) {
  const N = number.length;
  const stack = [];

  for (const [i, num] of number.split("").entries()) {
    while (k > 0 && stack.length && number[stack.at(-1)] < num) {
      stack.pop();
      k -= 1;
    }
    stack.push(i);
  }
  return stack
    .map((v, i) => number[v])
    .join("")
    .slice(0, N - k);
}
