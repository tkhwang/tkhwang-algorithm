/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    const N = graph.length;

    const allVisited = (1 << N) - 1;
    const queue = [ ];
    const visited = new Set();
    
    for(let i = 0; i < N; i += 1) {
        queue.push([ 1 << i, i, 0 ]);
        visited.add((1 << i) * 16 + i);
    }
    
    while (queue.length > 0) {
        const [ mask, node, dist ] = queue.shift();
        
        if (mask === allVisited) return dist;
        
        for (const next of graph[node]) {
            const newMask = mask | (1 << next);
            const hasValue = newMask * 16 + next;
            
            if (!visited.has(hasValue)) {
                visited.add(hasValue);
                queue.push([ newMask, next, dist + 1 ]);
            }
        }
    }
    
    return -1;
};