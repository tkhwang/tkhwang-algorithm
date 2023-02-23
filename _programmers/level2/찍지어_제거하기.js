// 짝지어 제거하기
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (const ch of s) {
    if (stack.length && stack.at(-1) === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
