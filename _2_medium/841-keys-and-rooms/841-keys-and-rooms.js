/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const graph = {};
    
    for (const [cur, nexts] of rooms.entries()) {
        if (graph[cur] === undefined) graph[cur] = [];
        for (const next of nexts) {
            graph[cur].push(next);
        }
    }
    
    const dfs = (cur) => {
        if (graph[cur] === undefined) return;
        
        for (const next of graph[cur]) {
            if (visited.has(next)) continue;
            
            visited.add(next);
            dfs(next);
        }
    }
    
    const visited = new Set();
    visited.add(0);
    dfs(0)
    
    return visited.size === n;
};