/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(N, edges, query) {
    const uf = new UnionFind(N);
    const graph = Array(N).fill(null).map(() => [])
    const weights = {};

    for (const [ u, v, cost ] of edges) {
        uf.union(u, v);
        graph[u].push([ v, cost ]);
    }

    for (let i = 0; i < N; i += 1) {
        const parent = uf.find(i);
        for (const [ _, weight ] of graph[i]) {
            if (weights[parent] === undefined) weights[parent] = weight;
            weights[parent] = weights[parent] & weight;
        }
    }

    const res = [];

    for (const [ start, end ] of query) {
        if (!uf.connected(start, end)) {
            res.push(-1);
        } else if (start === end) {
            res.push(0);
        } else {
            res.push(weights[uf.find(start)])
        }
    }

    return res;
};

class UnionFind {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i);
    this.rank = Array(n).fill(1);
    this.components = n;
  }

  find(node) {
    if (node === this.root[node]) return node;
    return (this.root[node] = this.find(this.root[node]));
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
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getComponents() {
    return this.components;
  }
}