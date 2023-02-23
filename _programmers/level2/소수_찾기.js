// 소수 찾기
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function solution(_numbers) {
  const nums = _numbers.split("");
  const N = nums.length;

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const set = new Set();

  const dfs = (cur, remains) => {
    const num = Number(cur.join(""));
    if (isPrime(num)) set.add(num);

    if (remains.length === 0) return;

    for (const [i, n] of remains.entries()) {
      cur.push(n);

      dfs(cur, [...remains.slice(0, i), ...remains.slice(i + 1)]);

      cur.pop();
    }
  };

  dfs([], nums);

  return set.size;
}
