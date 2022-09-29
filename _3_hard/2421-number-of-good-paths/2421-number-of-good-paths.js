/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
    if (edges.length === 0) return 1;
        
    const N = vals.length;
    
    const graph = {}
    for (const [ begin, end ] of edges) {
        if (graph[begin] === undefined) graph[begin] = [];
        if (graph[end] === undefined) graph[end] = [];
        graph[begin].push(end);
        graph[end].push(begin);
    }

    const val2node = {};
    for (const [ node, val ] of vals.entries()) {
        if (val2node[val] === undefined) val2node[val] = [];
        val2node[val].push(node);
    }

    const unionFind = new UnionFind(N);
    let sum = 0;
    
    for (const val of Object.keys(val2node).map(Number).sort((a,b) => a - b)) {
        for (const node of val2node[val]) {
            for (const neighbor of graph[node]) {
                if (val >= vals[neighbor]) {
                    unionFind.union(node, neighbor);
                }
            }
         }
        const counts = {};
        for (const node of val2node[val]) {
            const root = unionFind.find(node);
            counts[root] = (counts[root] || 0) + 1;
            
            sum += counts[root];
        }
    }
    
    return sum;
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