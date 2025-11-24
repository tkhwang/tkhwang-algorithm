import { describe, expect, it } from 'vitest';
import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
  it('finds the index of the target when present', () => {
    const numbers = [1, 4, 6, 9, 15, 23, 42];
    expect(binarySearch(numbers, 15)).toBe(4);
    expect(binarySearch(numbers, 1)).toBe(0);
    expect(binarySearch(numbers, 42)).toBe(6);
  });

  it('returns -1 when the target does not exist', () => {
    const numbers = [-10, -4, 0, 3, 8];
    expect(binarySearch(numbers, 7)).toBe(-1);
  });

  it('supports custom comparators for complex objects', () => {
    const users = [
      { id: 'alice', score: 12 },
      { id: 'bob', score: 18 },
      { id: 'carol', score: 31 }
    ];

    const comparator = (candidate: typeof users[number], target: typeof users[number]) => {
      if (candidate.id === target.id) return 0;
      return candidate.id < target.id ? -1 : 1;
    };

    expect(binarySearch(users, { id: 'bob', score: 0 }, comparator)).toBe(1);
    expect(binarySearch(users, { id: 'dave', score: 0 }, comparator)).toBe(-1);
  });
});
