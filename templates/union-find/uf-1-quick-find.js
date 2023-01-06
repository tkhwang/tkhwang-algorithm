class UnionFind {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i);
    this.components = n;
  }

  find(node) {
    // quick find
    return this.root[node];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return true;

    // rootY -> rootX
    for (let i = 0; i < this.root.length; i += 1) {
      if (this.root[i] === rootY) {
        this.root[i] = rootX;
      }
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
