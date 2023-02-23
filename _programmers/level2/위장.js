// 위장
// Level2
// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const obj = {};
  for (const [name, type] of clothes) {
    if (obj[type] === undefined) obj[type] = [];
    obj[type].push(name);
  }

  const keys = Object.keys(obj);

  // 선택안함 포함 모든 선택지 곱해서 모든 경우의 수를 구한 후
  // 모두 선택하지 않는 1 경우를 제외함.
  return (
    keys
      .map((key) => obj[key])
      .map((v) => v.length + 1)
      .reduce((a, b) => a * b, 1) - 1
  );
}
