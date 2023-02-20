// 모음 사전
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const N = word.length;
  const res = [];

  const vowels = ["A", "E", "I", "O", "U"];

  const dfs = (cur, index) => {
    if (cur) res.push(cur);

    if (cur.length >= 5) return;

    for (const vowel of vowels) {
      dfs([cur, vowel].join(""), index + 1);
    }
  };

  dfs("", 0);

  for (const [i, w] of res.entries()) {
    if (w === word) return i + 1;
  }
  return -1;
}
