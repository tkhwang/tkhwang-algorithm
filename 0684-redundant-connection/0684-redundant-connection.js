/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const N = edges.length;
    
    const uf = new UnionFind(N);
    
    const res = [];
    
    for (const [ u, v ] of edges) {
        if (uf.connected(u, v)) {
            res.push(u);
            res.push(v);
            return res;
        }
        
        uf.union(u, v);
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