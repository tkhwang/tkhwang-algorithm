/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = {};
    for (const [ begin, end ] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    
    const dfs = (cur, parent, visited) => {
        if (cur === destination) return true;
        
        let res = false;
        for (const next of graph[cur]) {
            if (next === parent) continue;
            if (visited.has(next)) continue;
            
            visited.add(next);
            res = res || dfs(next, cur, visited);
            visited.delete(next);
        }
        return res;
    }
    
    const bfs = (start, visited) => {
        const queue = [ start ];
        
        while (queue.length) {
            const len = queue.length;
            
            for (let i = 0; i < len; i += 1) {
                const cur = queue.shift();
                
                if (cur === destination) return true;
                
                for (const next of graph[cur]) {
                    if (visited.has(next)) continue;
                    
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
        
        return false;
    }
    
    const visited = new Set();
    visited.add(source)
    
    return bfs(source, visited);
    // return dfs(source, null, visited)
};