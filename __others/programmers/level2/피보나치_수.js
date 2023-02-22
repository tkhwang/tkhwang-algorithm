// 피보나치 수
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(N) {
  const MOD = 1234567;

  const dp = Array(N + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= N; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % MOD;
  }

  return dp[N];
}
