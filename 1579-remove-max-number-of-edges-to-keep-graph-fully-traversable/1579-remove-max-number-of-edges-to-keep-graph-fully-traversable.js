/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(N, edges) {
    const aUF = new UnionFind(N);
    const bUF = new UnionFind(N);

    const NE = edges.length;
    edges.sort((a,b) => b[0] - a[0]);
    
    let count = 0;
    for (const [ type, u, v ] of edges) {
        if (type === 1) {
            if (aUF.union(u,v)) count += 1;
        } else if (type === 2) {
            if (bUF.union(u,v)) count += 1;
        } else if (type === 3) {
            const result = aUF.union(u, v) | bUF.union(u, v);
            if (result) count += 1;
        }
    }

    console.log(aUF.getComponents());
    console.log(bUF.getComponents());
    console.log(count);
    
    return (aUF.getComponents() === 1 && bUF.getComponents() === 1)
           ? NE - count
           : -1;
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
