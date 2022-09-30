/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    const graph = {};
    for (const [ begin, end ] of edges) {
        if (graph[end] === undefined) graph[end] = [];
        graph[end].push(begin);
    }
    
    const map = Array(n).fill(null).map((_) => new Set());

    const dfs = (cur, starting, visited) => {
        if (cur === undefined) return;
        
        if (cur !== starting) map[starting].add(cur);
        
        if (graph[cur] === undefined) return;
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;
            
            visited.add(next);
            dfs(next, starting, visited)
        }
    }
    
    for (let i = 0; i < n; i += 1) {
        const visited = new Set();
        visited.add(i);
        dfs(i, i, visited)
    }
    
    return Object.values(map).map((v) => Array.from(v).sort((a,b) => a - b))
};