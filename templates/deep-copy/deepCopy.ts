export type DeepCopyable =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint
  | Date
  | RegExp
  | Record<PropertyKey, unknown>
  | Array<unknown>
  | Map<unknown, unknown>
  | Set<unknown>;

export function deepCopy<T extends DeepCopyable>(value: T, seen = new Map<any, any>()): T {
  if (!isObjectLike(value)) {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.valueOf()) as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  if (Array.isArray(value)) {
    const clone: unknown[] = [];
    seen.set(value, clone);
    for (const item of value) {
      clone.push(deepCopy(item as DeepCopyable, seen));
    }
    return clone as T;
  }

  if (value instanceof Map) {
    const clone = new Map();
    seen.set(value, clone);
    for (const [k, v] of value.entries()) {
      clone.set(deepCopy(k as DeepCopyable, seen), deepCopy(v as DeepCopyable, seen));
    }
    return clone as T;
  }

  if (value instanceof Set) {
    const clone = new Set();
    seen.set(value, clone);
    for (const item of value.values()) {
      clone.add(deepCopy(item as DeepCopyable, seen));
    }
    return clone as T;
  }

  const prototype = Object.getPrototypeOf(value);
  const clone = Object.create(prototype);
  seen.set(value, clone);

  for (const key of Reflect.ownKeys(value)) {
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    if (!descriptor) continue;

    if ('value' in descriptor) {
      descriptor.value = deepCopy(descriptor.value as DeepCopyable, seen);
    }

    Object.defineProperty(clone, key, descriptor);
  }

  return clone;
}

function isObjectLike(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
