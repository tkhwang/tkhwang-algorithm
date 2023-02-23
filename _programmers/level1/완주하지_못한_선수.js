// 완주하지 못한 선수
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participants, completions) {
  const obj = {};

  // 참석: +1
  for (const participant of participants) {
    obj[participant] = (obj[participant] || 0) + 1;
  }

  // 완료: -1
  for (const completion of completions) {
    obj[completion] = (obj[completion] || 0) - 1;
  }

  for (const athelete in obj) {
    if (obj[athelete] > 0) return athelete;
  }
  return "";
}
