// 타겟 넘버
// Level 2
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  const N = numbers.length;
  let res = 0;

  const dfs = (cur, index) => {
    if (index >= N) {
      if (cur === target) res += 1;
      return;
    }

    // add
    dfs(cur + numbers[index], index + 1);
    // subtract
    dfs(cur + numbers[index] * -1, index + 1);
  };

  dfs(0, 0);

  return res;
}
