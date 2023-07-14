/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(N, prerequisites) {
 const graph = {}
  const indegrees = Array(N).fill(0)

  for (const [course, precourse] of prerequisites) {
    if (graph[precourse] === undefined) graph[precourse] = []
    graph[precourse].push(course)
    indegrees[course] += 1
  }

  const queue = []
  const orders = []

  // find zero dependency
  for (let i = 0; i < N; i += 1) {
    if (indegrees[i] === 0) queue.push(i)
  }

  // bfs
  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i += 1) {
      const cur = queue.shift()

      orders.push(cur)

      if (graph[cur] === undefined) continue
      for (const next of graph[cur]) {
        indegrees[next] -= 1
        if (indegrees[next] === 0) queue.push(next)
      }
    }
  }

  return orders.length === N;
};