// 문자열 압축
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  const N = s.length;
  let min = N;

  // size
  for (let i = 1; i < Math.floor(N / 2) + 1; i += 1) {
    let comp = "";
    let cnt = 1;
    let compLen = 0;

    for (let j = 0; j < N + 1; j += i) {
      let temp = s.slice(j, j + i);

      if (comp === temp) {
        cnt += 1;
      } else {
        compLen += temp.length;
        if (cnt > 1) compLen += String(cnt).length;
        cnt = 1;
        comp = temp;
      }
    }
    min = Math.min(min, compLen);
  }

  return min;
}
