/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(N, edges) {
    let total = N * (N-1) / 2;
    
    if (edges.length === 0) return total;
    
    const uf = new UnionFind(N);
    
    for (const [ u, v ] of edges) {
        uf.union(u, v);
    }

    const obj = {};
    for (let i = 0; i < N; i += 1) {
        const root = uf.find(i);
        if (obj[root] === undefined) obj[root] = [];
        obj[root].push(i);
    }
    
    const obj2 = {};
    for (let i = 0; i < N; i += 1) {
        const root = uf.find(i);
        if (obj2[root] !== undefined) continue;
        
        const len = obj[root].length;
        total -= len * (len - 1) / 2;
        obj2[root] = i;
    }
    
    return total;
};

   class UnionFind {
      constructor(n) {
        this.root = Array(n)
          .fill(null)
          .map((_, i) => i)
        this.rank = Array(n).fill(1)
        this.components = n
      }

      find(node) {
        if (node === this.root[node]) return node
        return (this.root[node] = this.find(this.root[node]))
      }

      union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX === rootY) return false

        if (this.rank[rootX] < this.rank[rootY]) {
          this.root[rootX] = rootY
        } else if (this.rank[rootX] > this.rank[rootY]) {
          this.root[rootY] = rootX
        } else {
          this.root[rootY] = rootX
          this.rank[rootX] += 1
        }
        this.components -= 1
        return true
      }

      connected(x, y) {
        return this.find(x) === this.find(y)
      }

      getComponents() {
        return this.components
      }
    }
