import { describe, expect, it } from 'vitest';
import { deepCopy } from './deepCopy';

describe('deepCopy', () => {
  it('returns identical primitive references (no cloning needed)', () => {
    const original = 42;
    const cloned = deepCopy(original);
    expect(cloned).toBe(original);
  });

  it('clones plain objects without sharing references', () => {
    const original = { x: 1, nested: { y: 2 } };
    const cloned = deepCopy(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.nested).not.toBe(original.nested);
  });

  it('clones arrays and preserves values deeply', () => {
    const original = [1, { x: 3 }, [4]];
    const cloned = deepCopy(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
    expect(cloned[2]).not.toBe(original[2]);
  });

  it('clones maps and sets deeply', () => {
    const map = new Map([[{ id: 1 }, new Set([1, 2])]]);
    const cloned = deepCopy(map);

    expect(cloned).toEqual(map);
    expect(cloned).not.toBe(map);

    const [originalKey] = map.keys();
    const [clonedKey] = cloned.keys();
    expect(clonedKey).not.toBe(originalKey);
  });

  it('handles cyclic references using a seen map', () => {
    const original: any = { name: 'cycle' };
    original.self = original;

    const cloned = deepCopy(original);

    expect(cloned).toEqual({ name: 'cycle', self: cloned });
    expect(cloned.self).toBe(cloned);
    expect(cloned).not.toBe(original);
  });
});
