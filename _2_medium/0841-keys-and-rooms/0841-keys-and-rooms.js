/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const N = rooms.length;
    const graph = {};
    
    for (const [ cur, nexts ] of rooms.entries()) {
        for (const next of nexts) {
            if (graph[cur] === undefined) graph[cur] = [];
            graph[cur].push(next);
        }
    }
    
    console.log(graph);

    const dfs = (cur, visited) => {
        if (graph[cur] === undefined) return;
        
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;
            
            visited.add(next);
            dfs(next, visited);
        }
    }
    
    const visited = new Set();
    visited.add(0);
    dfs(0, visited)
    
    return visited.size === N;
};