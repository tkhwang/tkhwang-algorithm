// k진수에서 소수 개수 구하기
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
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

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const changed = radixChange(n, k);
  const filtered = changed
    .split("0")
    .filter(Boolean)
    .filter((v) => v !== "1");

  let count = 0;
  for (const num of filtered) {
    if (isPrime(num)) count += 1;
  }

  return count;
}
