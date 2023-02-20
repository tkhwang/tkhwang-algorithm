// 핸드폰 번호 가리기
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const N = phone_number.length;

  return "*".repeat(N - 4) + phone_number.slice(N - 4);
}
