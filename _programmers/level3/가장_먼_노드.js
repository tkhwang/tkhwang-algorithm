// 가장 먼 노드
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/49189

function solution(n, edge) {
  const graph = {};
  for (const [u, v] of edge) {
    if (graph[u] === undefined) graph[u] = [];
    if (graph[v] === undefined) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  const freq = {};

  // [ cur, parent, level ]
  const queue = [[1, -1, 1]];
  const seen = new Set();
  seen.add(1);

  while (queue.length) {
    const len = queue.length;

    let steps = 0;

    for (let i = 0; i < len; i += 1) {
      const [cur, parent, level] = queue.shift();

      freq[level] = (freq[level] || 0) + 1;

      for (const next of graph[cur]) {
        if (next === parent) continue;
        if (seen.has(next)) continue;

        seen.add(next);
        queue.push([next, cur, level + 1]);
      }
    }

    steps += 1;
  }

  const keys = Object.keys(freq);
  const maxKey = Math.max(...keys);

  return freq[maxKey];
}
