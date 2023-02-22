// N으로 표현
// level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/42895

function solution(N, number) {
  // dp[i] : N을 i개 사용해서 만들 수 있는 숫자들.
  const dp = Array(9 + 1)
    .fill(null)
    .map((_) => new Set());

  for (let i = 1; i <= 9; i += 1) {
    dp[i].add(Number(`${String(N).repeat(i)}`));
    const cur = dp[i];
    for (let j = 1; j < i; j += 1) {
      for (const one of dp[j]) {
        for (const two of dp[i - j]) {
          cur.add(one + two);
          cur.add(one - two);
          cur.add(one * two);
          cur.add(one / two);
        }
      }
    }
    if (cur.has(number)) return i;
  }
  return -1;
}
