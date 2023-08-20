/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    const graph = Array.from({ length: m + n }, () => [])
    const indegree = Array(n + m).fill(0)
    
    for (let i = 0; i < group.length; i++) {
        if (group[i] == -1) continue
        graph[n + group[i]].push(i)
        indegree[i]++
  }

    for (let i = 0; i < beforeItems.length; i++) {
        for (const e of beforeItems[i]) {
            const a = group[e] === -1 ? e : n + group[e]
            const b = group[i] === -1 ? i : n + group[i]
            if (a === b) {
                graph[e].push(i)
                indegree[i]++
            } else {
                graph[a].push(b)
                indegree[b]++
      }
    }
  }
    
  const res = []
  for (let i = 0; i < n + m; i++) {
    if (indegree[i] === 0) dfs(res, graph, indegree, n, i)
  }
    
  return res.length === n ? res : []
    
  function dfs(ans, graph, indegree, n, cur) {
    if (cur < n) ans.push(cur)
    indegree[cur] = -1 
    for (let next of graph[cur] || []) {
      indegree[next]--
      if (indegree[next] === 0) dfs(ans, graph, indegree, n, next)
    }
  }    
};