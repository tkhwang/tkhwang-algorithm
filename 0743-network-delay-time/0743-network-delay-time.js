/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {};
    for (const [ u, v, cost ] of times) {
        if (graph[u] === undefined) graph[u] = [];
        graph[u].push([ v, cost ]);
    }
    
    const costs = Array(n + 1).fill(Infinity);
    costs[k] = 0;
    costs[0] = 0;
    
    // [ cost, next ]
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] });
    minHeap.enqueue([ k, 0 ]);

    while (minHeap.size()) {
        const [ cur, cost ] = minHeap.dequeue();
        
        // check latest updated
        if (costs[cur] !== cost) continue;
        if (graph[cur] === undefined) continue;
        
        for (const [ next, nextCost ] of graph[cur]) {
            if (costs[next] > costs[cur] + nextCost) {
                costs[next] = costs[cur] + nextCost;
                minHeap.enqueue([ next, costs[next] ]);
            }            
        }
    }
    
    const max = Math.max(...costs);
    return max === Infinity ? -1 : max;
};