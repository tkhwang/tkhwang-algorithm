/**
 * @param {number} n
 * @param {number[][]} highways
 * @param {number} discounts
 * @return {number}
 */
var minimumCost = function(n, highways, discounts) {
    const graph = {};
    for (const [ u, v, toll ] of highways) {
        if (graph[u] === undefined) graph[u] = [];
        if (graph[v] === undefined) graph[v] = [];
        graph[u].push([ v, toll ]);
        graph[v].push([ u, toll ]);
    }
    
    const search = (cur, discounts) => {
        const minHeap = new MinPriorityQueue({ compare: (a,b) => a[0] - b[0] });
        minHeap.enqueue([ 0, 0, discounts ]);
        
        const dist = Array(n).fill(null).map((_) => Array(discounts + 1).fill(Infinity));
        
        while (minHeap.size()) {
            let [ cost, cur, discount ] = minHeap.dequeue();

            if (cur === n - 1) return cost;

            if (cost >= dist[cur][discount] || graph[cur] === undefined) continue;
            dist[cur][discount] = cost;
            
            for (const [ next, toll ] of graph[cur]) {
                if (dist[next][discount] !== Infinity) continue;
                
                minHeap.enqueue([ cost + toll, next, discount ]);
                if (discount > 0) minHeap.enqueue([ cost + Math.floor(toll/2), next, discount - 1 ]);
            }
        }
        
        return -1;
    }
    
    return search(0, discounts);    
};