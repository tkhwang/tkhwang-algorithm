// 네트워크
// Level 3
// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(N, computers) {
  const uf = new UnionFind(N);

  // adjMatrix 형태라서 graph 구성 파악하는데 어려웠음.
  for (const [i, computer] of computers.entries()) {
    for (const [j, isConnected] of computer.entries()) {
      if (isConnected === 0) continue;

      uf.union(i, j);
    }
  }

  return uf.getComponents();
}

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
