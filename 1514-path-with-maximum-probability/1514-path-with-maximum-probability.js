/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function(N, edges, succProb, start, end) {
    const adj = {};
    const dists = new Array(N).fill(-Infinity);
    
    for (let i = 0; i < N; i += 1) {
        adj[i] = [];
    }
    
    for (const [ i, [ u, v ]] of edges.entries()) {
        adj[u].push([ v, succProb[i] ]);
        adj[v].push([ u, succProb[i] ]);
    }
    
    const maxHeap = new MaxPriorityQueue({ compare: (a,b) => [ b[1] - a[1] ]});
    maxHeap.enqueue([ start, 1 ]);
    
    while (maxHeap.size()) {
        const [ cur, prob ] = maxHeap.dequeue();
        
        if (cur === end) return prob;
        if (dists[cur] > prob) continue;
        
        if (adj[cur] === undefined) continue;
        for (const [ next, weight ] of adj[cur]) {
            if (prob * weight > dists[next]) {
                dists[next] = prob * weight;
                maxHeap.enqueue([ next, dists[next] ]);
            }
        }
    }
    
    
    return 0;
};