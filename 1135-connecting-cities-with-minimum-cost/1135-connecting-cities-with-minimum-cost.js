/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(n, connections) {
    connections.sort((a,b) => a[2] - b[2] );

    const uf = new UnionFind(n);
    
    let res = 0;
    
    for (const [ u, v, cost ] of connections) {
        if (uf.find(u) !== uf.find(v)) {
            res += cost;
            uf.union(u, v);
        }
    }
    
    return uf.getComponents() === 1 ? res : -1;
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