# Array Helper Library

## Overview

The Array Helper Library provides a collection of utility functions for working with arrays, including searching, transformation, sorting, and validation.

## Installation

To install the package, use:

```sh
npm install @jlhv/array-helper
```

## Usage

Import the required functions from the library:

```javascript
import { unique, flatten, shuffle, min, max } from "@jlhv/array-helper";
```

## Functions and Examples

### Basic Operations

#### `isEmpty<T>(arr: T[]): boolean`

Checks if an array is empty.

```javascript
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```

#### `first<T>(arr: T[]): T | undefined`

Gets the first element of an array.

```javascript
first([10, 20, 30]); // 10
first([]); // undefined
```

#### `last<T>(arr: T[]): T | undefined`

Gets the last element of an array.

```javascript
last([10, 20, 30]); // 30
last([]); // undefined
```

#### `unique<T>(arr: T[]): T[]`

Removes duplicate values from an array.

```javascript
unique([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

### Searching & Counting

#### `indexOf<T>(arr: T[], value: T): number`

Finds the index of an element in an array without using `indexOf`.

```javascript
indexOf([5, 10, 15], 10); // 1
indexOf([5, 10, 15], 20); // -1
```

#### `contains<T>(arr: T[], value: T): boolean`

Checks if an array contains a specific value.

```javascript
contains([1, 2, 3], 2); // true
contains([1, 2, 3], 5); // false
```

#### `countOccurrences<T>(arr: T[], value: T): number`

Counts the occurrences of a value in an array.

```javascript
countOccurrences([1, 2, 2, 3, 3, 3], 3); // 3
```

### Merging & Transforming

#### `mergeUnique<T>(arr1: T[], arr2: T[]): T[]`

Merges two arrays without duplicates.

```javascript
mergeUnique([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
```

#### `flatten<T>(arr: (T | T[])[]): T[]`

Flattens a nested array (single level).

```javascript
flatten([1, [2, 3], 4]); // [1, 2, 3, 4]
```

### Set Operations

#### `intersection<T>(arr1: T[], arr2: T[]): T[]`

Finds common elements between two arrays.

```javascript
intersection([1, 2, 3], [2, 3, 4]); // [2, 3]
```

#### `difference<T>(arr1: T[], arr2: T[]): T[]`

Finds elements that are in the first array but not in the second.

```javascript
difference([1, 2, 3], [2, 3, 4]); // [1]
```

### Sorting & Shuffling

#### `shuffle<T>(arr: T[]): T[]`

Shuffles an array without using built-in functions.

```javascript
shuffle([1, 2, 3, 4]); // Output may vary
```

#### `reverse<T>(arr: T[]): T[]`

Reverses an array without using `reverse()`.

```javascript
reverse([1, 2, 3]); // [3, 2, 1]
```

#### `bubbleSort(arr: number[]): number[]`

Sorts an array using bubble sort.

```javascript
bubbleSort([5, 3, 8, 1]); // [1, 3, 5, 8]
```

### Min & Max Functions

#### `min(arr: number[]): number | undefined`

Finds the minimum value in an array.

```javascript
min([3, 1, 4, 1, 5]); // 1
```

#### `max(arr: number[]): number | undefined`

Finds the maximum value in an array.

```javascript
max([3, 1, 4, 1, 5]); // 5
```

### Grouping & Partitioning

#### `groupBy<T, K>(arr: T[], callback: (item: T) => K): Record<K, T[]>`

Groups elements based on a callback.

```javascript
groupBy(["apple", "banana", "avocado"], (fruit) => fruit[0]);
// { a: ["apple", "avocado"], b: ["banana"] }
```

#### `partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]]`

Splits an array into two groups based on a condition.

```javascript
partition([1, 2, 3, 4], (num) => num % 2 === 0);
// [[2, 4], [1, 3]]
```

### Other Helpers

#### `chunk<T>(arr: T[], size: number): T[][]`

Breaks an array into chunks of a given size.

```javascript
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

#### `compact<T>(arr: T[]): T[]`

Removes falsy values (false, null, 0, "", undefined, NaN).

```javascript
compact([0, 1, false, 2, "", 3]); // [1, 2, 3]
```

#### `rotate<T>(arr: T[], n: number): T[]`

Rotates an array by `n` positions.

```javascript
rotate([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
rotate([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```

#### `randomElement<T>(arr: T[]): T | undefined`

Returns a random element from an array.

```javascript
randomElement([10, 20, 30]); // Output may vary
```

#### `nth<T>(arr: T[], index: number): T | undefined`

Gets the nth element of an array (supports negative indexing).

```javascript
nth([10, 20, 30], 1); // 20
nth([10, 20, 30], -1); // 30
```

#### `uniqueMultiple<T>(...arrays: T[][]): T[]`

Finds unique elements across multiple arrays.

```javascript
uniqueMultiple([1, 2, 3], [2, 3, 4], [3, 4, 5]); // [1, 5]
```

## License

ISC License.

## Author

Vijayavel R