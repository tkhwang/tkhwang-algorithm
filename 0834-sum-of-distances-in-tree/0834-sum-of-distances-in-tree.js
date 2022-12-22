/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
    if (edges.length === 0) return [0];
    
    const graph = {};
    for (const [ begin, end] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    
    const count = Array(N).fill(1);
    const res = Array(N).fill(0);
    
    const dfs = (cur = 0, parent = null) => {
        for (const child of graph[cur]) {
            if (child === parent) continue;
            
            dfs(child, cur);
            
            count[cur] += count[child];
            res[cur] += res[child] + count[child];
        }
    }
    
    const dfs2 = (cur = 0, parent = null) => {
        for (const child of graph[cur]) {
            if (child === parent) continue;
            
            res[child] = res[cur] - count[child] + N - count[child];
            dfs2(child, cur);
        }
    }
    
    dfs();
    dfs2();
    
    return res;
};