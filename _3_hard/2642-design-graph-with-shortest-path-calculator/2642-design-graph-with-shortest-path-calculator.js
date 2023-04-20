/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.n = n;
    this.adj = {};
    for (const [ from, to, cost ] of edges) {
        if (this.adj[from] === undefined) this.adj[from] = [];
        this.adj[from].push([ to, cost ]);
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    const [ from, to, cost ] = edge;
    
    if (this.adj[from] !== undefined) {
        for (const [ next, _ ] of this.adj[from]) {
            if (next === to) return -1;
        }
    } 
    
    if (this.adj[from] === undefined) this.adj[from] = [];
    this.adj[from].push([ to, cost ]);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    const begin = node1;
    const end = node2;
    
    const costs = Array(this.n).fill(Infinity);
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[1] - b[1] })
    minHeap.enqueue([ begin, 0 ]);
    costs[begin] = 0;
    
    while (minHeap.size()) {
        let len = minHeap.size();
        for (let i = 0; i < len; i += 1) {
            const [ cur, cost ] = minHeap.dequeue(0)
            
            if (cur === end) return cost;
            
            // if (costs[cost] !== cost) continue;
            if (this.adj[cur] === undefined) continue;
            
            for (const [ next, nextCost ] of this.adj[cur]) {
                if (costs[next] > costs[cur] + nextCost) {
                    costs[next] = costs[cur] + nextCost;
                    minHeap.enqueue([ next, cost + nextCost ]);
                }
            }
        }
    }
    return -1;    
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */