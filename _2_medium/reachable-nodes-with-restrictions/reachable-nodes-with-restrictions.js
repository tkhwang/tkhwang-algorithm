/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = {};
    for (const [ begin, end ] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    
        const dfs = (cur, visited) => {
            for (const next of graph[cur]) {
                if (visited.has(next)) continue;
                if (restricted.includes(next)) continue;

                visited.add(next);
                dfs(next, visited);
            }
        }
        
        const visited = new Set();
        visited.add(0);
        dfs(0, visited)
        
        return visited.size;
};