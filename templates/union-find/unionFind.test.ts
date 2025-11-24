import { describe, expect, it } from 'vitest';
import { UnionFind } from './unionFind';

describe('UnionFind', () => {
  it('starts with each node isolated', () => {
    const uf = new UnionFind(3);
    expect(uf.components).toBe(3);
    expect(uf.connected(0, 1)).toBe(false);
  });

  it('merges components and tracks their sizes', () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    uf.union(1, 2);
    expect(uf.components).toBe(3);
    expect(uf.connected(0, 2)).toBe(true);
    expect(uf.componentSize(0)).toBe(3);

    uf.union(3, 4);
    expect(uf.components).toBe(2);
    expect(uf.componentSize(3)).toBe(2);
  });

  it('is idempotent when trying to union the same set twice', () => {
    const uf = new UnionFind(4);
    expect(uf.union(0, 1)).toBe(true);
    expect(uf.union(0, 1)).toBe(false);
    expect(uf.components).toBe(3);
  });

  it('throws when accessing an invalid node', () => {
    const uf = new UnionFind(2);
    expect(() => uf.find(-1)).toThrow(/out of bounds/);
    expect(() => uf.find(5)).toThrow(/out of bounds/);
  });
});
