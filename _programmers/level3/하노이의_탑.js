// 하노이의 탑
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
  const dfs = (n, start, to, mid, res) => {
    if (n === 1) return res.push([start, to]);

    dfs(n - 1, start, mid, to, res);

    res.push([start, to]);

    dfs(n - 1, mid, to, start, res);
  };

  const res = [];
  dfs(n, 1, 3, 2, res);
  return res;
}
