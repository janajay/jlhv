/**
 * Array Helper Library
 * Provides utility functions for array operations.
 */

/** Checks if an array is empty. */
export function isEmpty<T>(arr: T[]): boolean {
  return arr.length === 0;
}

/** Gets the first element of an array. */
export function first<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

/** Gets the last element of an array. */
export function last<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

/** Removes duplicate values from an array. */
export function unique<T>(arr: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}

/** Finds the index of an element in an array without using built-in indexOf. */
export function indexOf<T>(arr: T[], value: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

/** Checks if an array contains a specific value without using built-in includes. */
export function contains<T>(arr: T[], value: T): boolean {
  return indexOf(arr, value) !== -1;
}

/** Counts the occurrences of a value in an array. */
export function countOccurrences<T>(arr: T[], value: T): number {
  let count = 0;
  for (const item of arr) {
    if (item === value) count++;
  }
  return count;
}

/** Merges two arrays without duplicates. */
export function mergeUnique<T>(arr1: T[], arr2: T[]): T[] {
  return unique([...arr1, ...arr2]);
}

/** Flattens a nested array (single level). */
export function flatten<T>(arr: (T | T[])[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

/** Returns an array of elements that exist in both arrays (intersection). */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];
  for (const item of arr1) {
    if (contains(arr2, item) && !contains(result, item)) {
      result.push(item);
    }
  }
  return result;
}

/** Returns elements that are in the first array but not in the second (difference). */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((item) => !contains(arr2, item));
}

/** Shuffles an array without using built-in sort or Math.random. */
export function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  let seed = Date.now() % 10000;
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = seed % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/** Reverses an array without using reverse(). */
export function reverse<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

/** Sorts an array using bubble sort. */
export function bubbleSort(arr: number[]): number[] {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}

/** Finds the minimum value in an array without using Math.min. */
export function min(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  let minValue = arr[0];
  for (const num of arr) {
    if (num < minValue) {
      minValue = num;
    }
  }
  return minValue;
}

/** Finds the maximum value in an array without using Math.max. */
export function max(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;
  let maxValue = arr[0];
  for (const num of arr) {
    if (num > maxValue) {
      maxValue = num;
    }
  }
  return maxValue;
}

/** Groups elements of an array by a callback function. */
export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  callback: (item: T) => K
): Record<K, T[]> {
  const grouped: Record<K, T[]> = {} as Record<K, T[]>;
  for (const item of arr) {
    const key = callback(item);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  }
  return grouped;
}

/** Partitions an array into two groups based on a condition. */
export function partition<T>(
  arr: T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }
  return [pass, fail];
}

/** Chunks an array into smaller arrays. */
export function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/** Removes falsy values from an array. */
export function compact<T>(arr: T[]): T[] {
  return arr.filter(Boolean);
}

/** Rotates an array by n positions. */
export function rotate<T>(arr: T[], n: number): T[] {
  const len = arr.length;
  if (len === 0) return arr;
  const shift = ((n % len) + len) % len;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

/** Returns a random element from an array. */
export function randomElement<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  let seed = Date.now() % 10000;
  seed = (seed * 9301 + 49297) % 233280;
  return arr[seed % arr.length];
}

/** Finds the nth element of an array. */
export function nth<T>(arr: T[], index: number): T | undefined {
  if (index < 0) index = arr.length + index;
  return arr[index];
}

/** Finds unique elements across multiple arrays. */
export function uniqueMultiple<T>(...arrays: T[][]): T[] {
  const allElements = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return allElements.filter(item => 
    allElements.indexOf(item) === allElements.lastIndexOf(item)
  );
}
