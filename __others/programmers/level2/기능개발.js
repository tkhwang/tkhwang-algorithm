// 기능개발
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const res = [];

  while (progresses.length) {
    // 작업 진행
    for (let i = 0; i < progresses.length; i += 1) {
      progresses[i] += speeds[i];
    }

    let count = 0;

    // 완료 체크
    while (progresses.length && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }

    if (count > 0) res.push(count);
  }

  return res;
}
