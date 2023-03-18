// 할인 행사
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(wants, number, discount) {
  const N = discount.length;

  let res = 0;
  const queue = [];
  const obj = {};

  const isOK = (obj) => {
    for (const [i, want] of wants.entries()) {
      if (obj[want] === undefined) return false;
      if (!(obj[want] >= number[i])) return false;
    }
    return true;
  };

  for (let i = 0; i < N; i += 1) {
    const cur = discount[i];
    queue.push(cur);
    obj[cur] = (obj[cur] || 0) + 1;
    if (queue.length < 10) continue;

    if (queue.length > 10) {
      const last = queue.shift();
      obj[last] -= 1;
      if (obj[last] === 0) delete obj[last];
    }
    if (queue.length === 10) {
      if (isOK(obj)) res += 1;
    }
  }
  return res;
}
