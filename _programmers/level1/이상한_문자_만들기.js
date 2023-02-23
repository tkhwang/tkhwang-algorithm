// 이상한 문자 만들기
// level1
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let index = 0;
  let res = "";

  for (const ch of s) {
    if (ch === " ") {
      res += ch;
      index = 0;
      continue;
    }

    if (index % 2 === 0) {
      res += ch.toUpperCase();
    } else {
      res += ch.toLowerCase();
    }

    index += 1;
  }

  return res;
}
