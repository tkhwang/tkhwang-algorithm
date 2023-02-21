// 입국심사
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  const check = (during) => {
    let persons = 0;
    for (const time of times) {
      persons += Math.floor(during / time);
    }
    return persons >= n;
  };

  let res = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let persons = 0;

    for (const time of times) {
      persons += Math.floor(mid / time);
      if (persons >= n) break;
    }

    if (persons >= n) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // TODO: Why not left ?
  return res;
}
