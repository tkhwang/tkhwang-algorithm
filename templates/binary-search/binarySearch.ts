export type Comparator<T> = (candidate: T, target: T) => number;

export function binarySearch(collection: number[], target: number): number;
export function binarySearch<T>(collection: T[], target: T, comparator: Comparator<T>): number;
export function binarySearch<T>(
  collection: T[],
  target: T,
  comparator?: Comparator<T>
): number {
  if (collection.length === 0) {
    return -1;
  }

  const resolvedComparator: Comparator<T> = comparator ?? defaultNumberComparator as Comparator<T>;

  let left = 0;
  let right = collection.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const probe = collection[mid];
    const comparison = resolvedComparator(probe, target);

    if (comparison === 0) {
      return mid;
    }

    if (comparison < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const defaultNumberComparator: Comparator<number> = (a, b) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};
