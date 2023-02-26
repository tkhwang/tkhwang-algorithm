// 마법의 엘리베이터
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  const nums = String(storey).split("").reverse().map(Number);

  const UP = 0;
  const DOWN = 1;

  const dfs = (nums, direction) => {
    let count = 0;
    let carry = 0;

    for (const num of nums) {
      const cur = carry + num;

      if (cur < 5 || (cur === 5 && direction === DOWN)) {
        count += cur;
        carry = 0;
      } else if ((cur === 5 && direction === UP) || (5 < cur && cur < 10)) {
        count += 10 - cur;
        carry = 1;
      } else if (cur >= 10) {
        count += 0;
        carry = 1;
      }
    }
    if (carry > 0) count += 1;
    return count;
  };

  return Math.min(dfs(nums, UP), dfs(nums, DOWN));
}
