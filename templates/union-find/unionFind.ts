export class UnionFind {
  private readonly parent: number[];
  private readonly size: number[];
  private remainingComponents: number;

  constructor(length: number) {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error('UnionFind requires a positive integer size.');
    }

    this.parent = Array.from({ length }, (_, index) => index);
    this.size = Array.from({ length }, () => 1);
    this.remainingComponents = length;
  }

  find(node: number): number {
    this.assertInRange(node);

    let root = node;
    while (root !== this.parent[root]) {
      root = this.parent[root];
    }

    // Path compression
    while (node !== root) {
      const next = this.parent[node];
      this.parent[node] = root;
      node = next;
    }

    return root;
  }

  union(a: number, b: number): boolean {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA === rootB) {
      return false;
    }

    if (this.size[rootA] < this.size[rootB]) {
      [rootA, rootB] = [rootB, rootA];
    }

    this.parent[rootB] = rootA;
    this.size[rootA] += this.size[rootB];
    this.remainingComponents -= 1;

    return true;
  }

  connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }

  componentSize(node: number): number {
    const root = this.find(node);
    return this.size[root];
  }

  get components(): number {
    return this.remainingComponents;
  }

  private assertInRange(node: number): void {
    if (!Number.isInteger(node) || node < 0 || node >= this.parent.length) {
      throw new Error(`Node ${node} is out of bounds.`);
    }
  }
}
