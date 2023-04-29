/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(N, edgeList, queries) {
    
    const uf = new UnionFind(N);
    
    edgeList.sort((a,b) => a[2] - b[2]);
    queries = queries.map((v,i) => [ ...v, i ]);
    queries.sort((a,b) => a[2] - b[2]);
    
    const minHeap = new MinPriorityQueue({ compare: (a,b) => a[2] - b[2] });
    for (const [ u, v, cost ] of edgeList) {
        minHeap.enqueue([ u, v, cost]);
    }
    
    const NQ= queries.length;
    const res = Array(NQ).fill(false);
    
    for (const [ start, end, limit, index ] of queries) {
        while (minHeap.size() && minHeap.front()[2] < limit) {
            const [ u, v, cost ] = minHeap.dequeue();
            uf.union(u, v);
        }
        res[index] = uf.connected(start, end);
    }
    return res;
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
