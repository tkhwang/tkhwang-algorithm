/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = {};
    const roads = new Set();
    const genKey = (a,b) => `${a}:${b}`;
    
    for (const [ start, end ] of connections) {
        if (graph[start] === undefined) graph[start] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[start].push(end);
        graph[end].push(start);
        roads.add(genKey(start, end));
    }

    const dfs = (cur) => {
        let count = 0;

        if (graph[cur] === undefined) return count;
        
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;
            
            if (roads.has(genKey(cur, next))) count += 1;
            visited.add(next);
            count += dfs(next);
        }
        
        return count;
    }
    
    const visited = new Set();
    visited.add(0);
    
    return dfs(0)
};