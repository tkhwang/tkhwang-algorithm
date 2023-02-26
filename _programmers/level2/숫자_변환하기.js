// 숫자 변환하기
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  const seen = new Set();

  const operations = ["/3", "/2", "-n"];

  const calc = (num, operation) => {
    if (operation === "/3") {
      return num % 3 === 0 ? num / 3 : -1;
    }
    if (operation === "/2") {
      return num % 2 === 0 ? num / 2 : -1;
    }
    return num - n;
  };

  const bfs = (start, seen) => {
    const queue = [[start, 0]];

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i += 1) {
        const [cur, times] = queue.shift();

        if (cur === x) return times;

        for (const operation of operations) {
          const next = calc(cur, operation);

          if (next === -1) continue;
          if (next < x) continue;
          if (seen.has(next)) continue;

          seen.add(next);
          queue.push([next, times + 1]);
        }
      }
    }
    return -1;
  };

  if (x === y) return 0;

  seen.add(y);
  return bfs(y, seen);
}
