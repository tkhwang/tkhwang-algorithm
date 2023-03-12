// 겹치는 선분의 길이
// Level 0
// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  const N = lines.length;

  const events = [];
  const UP = 0;
  const DOWN = 1;

  for (let i = 0; i < N; i += 1) {
    const [start, end] = lines[i];

    events.push([start, UP]);
    events.push([end, DOWN]);
  }

  events.sort((a, b) => a[0] - b[0]);

  let point = 0;
  let prv = -1;
  let res = 0;

  for (const [time, event] of events) {
    if (event === UP) {
      point += 1;
      if (point == 2) prv = time;
    } else {
      point -= 1;
      if (point === 1) {
        res += time - prv;
        prv = -1;
      }
    }
  }
  return res;
}
