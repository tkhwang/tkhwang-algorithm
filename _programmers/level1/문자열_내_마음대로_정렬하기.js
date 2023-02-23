// 문자열 내 마음대로 정렬하기
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  return strings.sort((a, b) => a[n].localeCompare(b[n]) || a.localeCompare(b));
}
