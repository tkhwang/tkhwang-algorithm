/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const [ ROWS, COLS ] = [ stones.length, stones[0].length ];
    
    const unionFind = new UnionFind(ROWS);

    for (let i = 0; i < ROWS; i += 1) {
        for (let j = i + 1; j < ROWS; j += 1) {
            const prv = stones[i];
            const cur = stones[j];
            
            if (prv[0] === cur[0] || prv[1] === cur[1]) {
                unionFind.union(i, j);
            }
        }
    }
    
    return ROWS - unionFind.getComponents();
};

class UnionFind {
    constructor(n) {
        this.root = Array(n).fill(null).map((_,i) => i);
        this.rank = Array(n).fill(1);
        this.components = n;
        this.count = 0;
    }
    
    find(node) {
        if (node === this.root[node]) return node;
        return this.root[node] = this.find(this.root[node]);
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        this.count += 1;
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