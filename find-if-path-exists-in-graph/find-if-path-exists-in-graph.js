/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = {};
    for (const [ u, v ] of edges) {
        if (graph[u] === undefined) graph[u] = [];
        if (graph[v] === undefined) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const dfs = (cur, seen) => {
        if (cur === destination) return true;
        
        let res = false;
        for (const next of graph[cur]) {
            if (seen.has(next)) continue;
            
            seen.add(next);
            res = res || dfs(next, seen);
        }
        return res;
    }
    
    const seen = new Set();
    seen.add(source);
    return dfs(source, seen)
};