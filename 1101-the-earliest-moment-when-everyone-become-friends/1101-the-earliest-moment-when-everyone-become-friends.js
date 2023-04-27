/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    const uf = new UnionFind(n);
    
    logs.sort((a,b) => a[0] - b[0]);
    
    for (const [ time, u, v ] of logs) {
        uf.union(u, v);
        if (uf.getComponents() === 1) return time;
    }
    return -1;
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
