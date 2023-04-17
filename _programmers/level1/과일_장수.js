// 과일 장수
// level1
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, scores) {
  const N = scores.length;

  scores.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i <= N - m; i += m) {
    const sub = scores.slice(i, i + m);
    sum += sub.at(-1) * m;
  }

  return sum;
}
