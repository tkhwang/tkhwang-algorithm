// 징검다리 건너기
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/64062

function solution(stones, k) {
  let left = 1;
  let right = 2 * 10 ** 9;

  const check = (limit) => {
    let count = 0;
    for (const stone of stones) {
      if (stone < limit) {
        count += 1;
        if (count >= k) return false;
      } else {
        count = 0;
      }
    }
    return true;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
