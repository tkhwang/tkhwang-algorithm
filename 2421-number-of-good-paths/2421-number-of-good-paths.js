/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
    if (edges.length === 0) return 1;
    
    const n = vals.length;
    
    const graph = {};
    for (const [ begin, end ] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }
    
    console.log(graph);
    const unionFind = new UnionFind(n);

    // { value : [ nodes ]}
    const d = {};
    for (let i = 0; i < n; i += 1) {
        if (d[vals[i]] === undefined) d[vals[i]] = [];
        d[vals[i]].push(i);
    }

    const added = Array(n).fill(false);
    let res = 0;
    
    for (const cur of Object.keys(d)) {
        for (const node of d[cur]) {
            added[node] = true;
            for (const next of graph[node]) {
                if (added[next]) unionFind.union(node, next)
            }
        }
        const counts = {};
        for (const node of d[cur]) {
            const root = unionFind.find(node)
            counts[root] = (counts[root] || 0) + 1;
        }
        for (const value of Object.values(counts)) {
            res += value * (value + 1) / 2;
        }
    }
    
    return res;
};

class UnionFind {
    constructor(n) {
        this.root = Array(n).fill(null).map((_,i) => i);
        this.rank = Array(n).fill(1);
        this.components = n;
    }
    
    find(node) {
        if (node === this.root[node]) return node;
        return this.root[node] = this.find(this.root[node]);
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.root[rootY] = rootX;
        } else {
            this.root[rootY] = rootX;
            this.rank[rootX] += 1;
        }
        this.components -= 1;
        return true
    }
    
    connected(x,y) {
        return this.find(x) === this.find(y)
    }
    
    getComponents() {
        return this.components;
    }
}
