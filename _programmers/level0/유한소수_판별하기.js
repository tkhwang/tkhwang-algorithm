// 유한소수 판별하기
// Level 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  const primeFactors = (num) => {
    const res = [];
    let prime = 2;

    while (num > 1) {
      if (num % prime === 0) {
        res.push(prime);
        num /= prime;
      } else {
        prime += 1;
      }
    }
    return res;
  };

  const aPrimes = primeFactors(a);
  const bPrimes = primeFactors(b);

  const N = bPrimes.length;
  for (let i = N - 1; i >= 0; i -= 1) {
    const cur = bPrimes[i];

    const index = aPrimes.indexOf(cur);
    if (index === -1) continue;

    aPrimes.splice(index, 1);
    bPrimes.splice(i, 1);
  }

  return bPrimes.every((num) => num === 2 || num === 5) ? 1 : 2;
}
