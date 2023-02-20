// 콜라츠 추측
// Level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  const LIMIT = 500;

  const recursive = (num, count) => {
    if (count > LIMIT) return -1;
    if (num === 1) return count;

    if (num % 2 === 0) return recursive(num / 2, count + 1);
    else return recursive(num * 3 + 1, count + 1);
  };

  return recursive(num, 0);
}
