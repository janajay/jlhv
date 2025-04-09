# Object Helper Library

A collection of utility functions for common object operations in TypeScript.

## Installation

To install the package, use:

```sh
npm install @jlhv/object-helper
```

## Usage

Import the library and use its functions:

```typescript
import * as ObjectHelper from "@jlhv/object-helper";

const obj = { a: 1, b: 2, c: 3 };
console.log(ObjectHelper.isEmpty(obj)); // false
```

## API Reference

### `isEmpty(obj: Record<string, any>): boolean`

Checks if an object is empty.

```typescript
ObjectHelper.isEmpty({}); // true
ObjectHelper.isEmpty({ key: "value" }); // false
```

### `merge<T, U>(obj1: T, obj2: U): T & U`

Merges two objects without modifying the originals.

```typescript
const merged = ObjectHelper.merge({ a: 1 }, { b: 2 });
console.log(merged); // { a: 1, b: 2 }
```

### `deepClone<T>(obj: T): T`

Creates a deep copy of an object.

```typescript
const original = { a: { b: 2 } };
const copy = ObjectHelper.deepClone(original);
console.log(copy); // { a: { b: 2 } }
```

### `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`

Picks specific keys from an object.

```typescript
const obj = { a: 1, b: 2, c: 3 };
console.log(ObjectHelper.pick(obj, ["a", "c"])); // { a: 1, c: 3 }
```

### `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`

Omits specific keys from an object.

```typescript
console.log(ObjectHelper.omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
```

### `isEqual<T>(obj1: T, obj2: T): boolean`

Checks if two objects are equal (shallow comparison).

```typescript
ObjectHelper.isEqual({ a: 1 }, { a: 1 }); // true
ObjectHelper.isEqual({ a: 1 }, { a: 2 }); // false
```

### `hasNested(obj: Record<string, any>, path: string): boolean`

Checks if an object has a nested property.

```typescript
const obj = { a: { b: { c: 42 } } };
console.log(ObjectHelper.hasNested(obj, "a.b.c")); // true
console.log(ObjectHelper.hasNested(obj, "a.x.y")); // false
```

### `getNested<T>(obj: Record<string, any>, path: string, defaultValue?: T): T | undefined`

Safely retrieves a nested property.

```typescript
console.log(ObjectHelper.getNested({ a: { b: { c: 42 } } }, "a.b.c")); // 42
console.log(ObjectHelper.getNested({ a: { b: { c: 42 } } }, "a.x.y", "default")); // "default"
```

### `setNested<T>(obj: Record<string, any>, path: string, value: T): void`

Sets a nested property in an object.

```typescript
const obj = { a: { b: {} } };
ObjectHelper.setNested(obj, "a.b.d", 100);
console.log(obj.a.b.d); // 100
```

### `invert<T>(obj: T): Record<string, keyof T>`

Swaps keys and values in an object.

```typescript
console.log(ObjectHelper.invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
```

### `toPairs<T>(obj: T): [keyof T, T[keyof T]][]`

Converts an object to an array of key-value pairs.

```typescript
console.log(ObjectHelper.toPairs({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
```

### `fromPairs<T>(pairs: [string, T][]): Record<string, T>`

Creates an object from key-value pairs.

```typescript
console.log(ObjectHelper.fromPairs([["a", 1], ["b", 2]])); // { a: 1, b: 2 }
```

### `freeze<T>(obj: T): Readonly<T>`

Freezes an object to prevent modifications.

```typescript
const frozen = ObjectHelper.freeze({ a: 1 });
// frozen.a = 2; // Error in strict mode
```

### `mapValues<T, U>(obj: T, callback: (value: T[keyof T], key: keyof T) => U): Record<keyof T, U>`

Applies a function to each value in an object.

```typescript
console.log(ObjectHelper.mapValues({ a: 1, b: 2 }, val => val * 2)); // { a: 2, b: 4 }
```

### `filter<T>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T>`

Filters object properties based on a function.

```typescript
console.log(ObjectHelper.filter({ a: 1, b: 2, c: 3 }, val => val > 1)); // { b: 2, c: 3 }
```

### `deepMerge<T, U>(obj1: T, obj2: U): T & U`

Performs a deep merge of two objects.

```typescript
const obj1 = { a: { b: 1 } };
const obj2 = { a: { c: 2 } };
console.log(ObjectHelper.deepMerge(obj1, obj2)); // { a: { b: 1, c: 2 } }
```

## License

ISC License.

## Author

Vijayavel R