// 튜플
// level2
// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const N = s.length;

  const arr = s.slice(2, N - 2).split("},{");
  const map = new Map();

  for (const str of arr.sort((a, b) => a.length - b.length)) {
    for (const num of str.split(",")) {
      if (map.has(+num)) continue;

      map.set(+num, +num);
    }
  }

  return Array.from(map.keys());
}
