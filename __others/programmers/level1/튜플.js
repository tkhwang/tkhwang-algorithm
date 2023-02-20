// 튜플
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const N = s.length;

  const arr = s.slice(2, N - 2).split("},{");
  const res = [];

  for (const str of arr.sort((a, b) => a.length - b.length)) {
    for (const num of str.split(",")) {
      if (res.includes(+num)) continue;
      res.push(+num);
    }
  }

  return res;
}
