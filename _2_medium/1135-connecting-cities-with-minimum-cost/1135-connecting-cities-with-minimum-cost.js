/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    const graph = Array(n + 1).fill(null).map((_) => []);
    
    for (const [ u, v, cost ] of connections) {
        graph[u].push([ v, cost ]);
        graph[v].push([ u, cost ]);
    }
    
    const visited = new Set();
    
    let res = 0;
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    minHeap.enqueue([ 0, 1 ]);
    
    while (minHeap.size()) {
        const [ cost, cur ] = minHeap.dequeue();

        if (visited.has(cur)) continue;
        
        res += cost;
        visited.add(cur);
        
        for (const [ next, nextCost ] of graph[cur]) {
            if (visited.has(next)) continue;
            
            minHeap.enqueue([ nextCost, next ]);
        }
    }
    
    return visited.size === n ? res : -1;
};
