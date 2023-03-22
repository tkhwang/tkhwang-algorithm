/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const uf = new UnionFind(n+1);
    const dp = Array(n+1).fill(Infinity);
    
    for (const [ begin, end, cost ] of roads) {
        dp[begin] = Math.min(dp[begin], cost);
        dp[end] = Math.min(dp[end], cost);
        
        uf.union(begin, end);
    }
    
    let min = Infinity;
    for (let i = 1; i <= n; i += 1) {
        if (uf.find(1) === uf.find(i)) {
            min = Math.min(min, dp[i]);
        }
    }
    
    return min;
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
