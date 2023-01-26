/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = {};
    for (const [ begin, end, cost ] of flights) {
        if (graph[begin] === undefined) graph[begin] = [];
        graph[begin].push([ end, cost ]);
    }
    console.log(graph);    

    const visited = new Map();
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
    minHeap.enqueue([ 0, src, k + 1 ]);
    
    while (minHeap.size()) {
        const [ cost, cur, stops ] = minHeap.dequeue();

        visited.set(cur, stops);
        
        if (cur === dst) return cost;
        
        if (stops <= 0 || graph[cur] === undefined) continue;
        
        for (const [ next, nextCost ] of graph[cur]) {
            if (visited.has(next) && visited.get(next) >= stops - 1) continue;
            
            minHeap.enqueue([ cost + nextCost, next, stops - 1 ]);
        }
    }
    
    return -1;
};