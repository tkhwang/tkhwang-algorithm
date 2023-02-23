// 징검다리
// Level 4
// https://school.programmers.co.kr/learn/courses/30/lessons/43236

function solution(distance, rocks, n) {
  let left = 1;
  let right = distance - 1;

  rocks.sort((a, b) => a - b);

  const check = (dist) => {
    let count = 0;
    let prv = 0;
    for (const rock of rocks) {
      if (rock < prv + dist) {
        count += 1;
      } else {
        prv = rock;
      }
    }
    return count > n;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
