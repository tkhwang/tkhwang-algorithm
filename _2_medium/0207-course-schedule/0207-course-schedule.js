/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {};
    const indegrees = Array(numCourses).fill(0);
    
    for (const [ a, b ] of prerequisites) {
        if (graph[b] === undefined) graph[b] = [];
        graph[b].push(a);
        indegrees[a] += 1;
    }
    
    const queue = [];
    const orders = [];
    
    // check zero dependency
    for (let i = 0; i < numCourses; i += 1) {
        if (indegrees[i] === 0) queue.push(i);
    }
    
    // bfs
    while (queue.length) {
        const len = queue.length;
        
        for (let i = 0; i < len; i += 1) {
            const cur = queue.shift();
            orders.push(cur);
            
            if (graph[cur] === undefined) continue;
            
            for (const next of graph[cur]) {
                indegrees[next] -= 1;
                if (indegrees[next] === 0) queue.push(next);
            }
        }
    }
    
    return orders.length === numCourses;
};