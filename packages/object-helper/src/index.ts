/**
 * Object Helper Library
 * Provides utility functions for object operations.
 */

/** Checks if an object is empty. */
export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

/** Merges two objects without modifying the originals. */
export function merge<
  T extends Record<string, any>,
  U extends Record<string, any>
>(obj1: T, obj2: U): T & U {
  const result = { ...obj1 } as T & U;
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      result[key] = obj2[key as Extract<keyof U, string>] as (T & U)[Extract<keyof U, string>];
    }
  }
  return result;
}

/** Deep clones an object. */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/** Picks specific keys from an object. */
export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result: Partial<T> = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result as Pick<T, K>;
}

/** Omits specific keys from an object. */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result: Partial<T> = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result as Omit<T, K>;
}

/** Checks if two objects are equal (shallow comparison). */
export function isEqual<T extends Record<string, any>>(
  obj1: T,
  obj2: T
): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

/** Checks if an object has a nested property. */
export function hasNested(obj: Record<string, any>, path: string): boolean {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (!current || !Object.prototype.hasOwnProperty.call(current, key)) {
      return false;
    }
    current = current[key];
  }
  return true;
}

/** Gets a nested property value from an object safely. */
export function getNested<T>(
  obj: Record<string, any>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split(".");
  let current: any = obj;
  for (const key of keys) {
    if (!current || !Object.prototype.hasOwnProperty.call(current, key)) {
      return defaultValue;
    }
    current = current[key];
  }
  return current as T;
}

/** Sets a nested property value in an object. */
export function setNested<T>(
  obj: Record<string, any>,
  path: string,
  value: T
): void {
  const keys = path.split(".");
  let current: any = obj;
  while (keys.length > 1) {
    const key = keys.shift()!;
    if (
      !Object.prototype.hasOwnProperty.call(current, key) ||
      typeof current[key] !== "object"
    ) {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[0]] = value;
}

/** Inverts an object's keys and values. */
export function invert<T extends Record<string, any>>(
  obj: T
): Record<string, keyof T> {
  const result: Record<string, keyof T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[String(obj[key])] = key;
    }
  }
  return result;
}

/** Converts an object to an array of key-value pairs. */
export function toPairs<T extends Record<string, any>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

/** Converts an array of key-value pairs to an object. */
export function fromPairs<T>(pairs: [string, T][]): Record<string, T> {
  const result: Record<string, T> = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
}

/** Freezes an object to prevent modifications. */
export function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

/** Maps over object values and returns a new object. */
export function mapValues<T extends Record<string, any>, U>(
  obj: T,
  callback: (value: T[keyof T], key: keyof T) => U
): Record<keyof T, U> {
  const result: Record<keyof T, U> = {} as Record<keyof T, U>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = callback(obj[key], key);
    }
  }
  return result;
}

/** Filters object properties based on a predicate function. */
export function filter<T extends Record<string, any>>(
  obj: T,
  predicate: (value: T[keyof T], key: keyof T) => boolean
): Partial<T> {
  const result: Partial<T> = {};
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      predicate(obj[key], key)
    ) {
      result[key] = obj[key];
    }
  }
  return result;
}

/** Deep merges two objects. */
export function deepMerge<
  T extends Record<string, any>,
  U extends Record<string, any>
>(obj1: T, obj2: U): T & U {
  const result: any = { ...obj1 };
  for (const key in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        typeof obj2[key] === "object" &&
        !Array.isArray(obj2[key]) &&
        obj2[key] !== null
      ) {
        result[key] = deepMerge(result[key] || {}, obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }
  return result;
}
