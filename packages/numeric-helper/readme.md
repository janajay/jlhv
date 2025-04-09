# Numeric Helper Library  

## Overview  
The Numeric Helper Library provides a collection of utility functions for numeric operations, including mathematical calculations, validations, and conversions.  

## Installation  
Install the package using:  

```sh
npm install @jlhv/numeric-helper
```
## Usage

#### Import the required functions from the library:
```ts
import { isEven, isOdd, factorial, gcd, lcm } from "@jlhv/numeric-helper";

console.log(isEven(4)); // Output: true
console.log(isOdd(3)); // Output: true
console.log(factorial(5)); // Output: 120
console.log(gcd(12, 18)); // Output: 6
console.log(lcm(12, 18)); // Output: 36
```

## Functions
### Basic Number Operations
```ts
    isEven(num: number): boolean
```
### Checks if a number is even.
```ts
console.log(isEven(10)); // Output: true
console.log(isEven(7));  // Output: false
```
```ts
isOdd(num: number): boolean
```
- Checks if a number is odd.
```ts
console.log(isOdd(10)); // Output: false
console.log(isOdd(7));  // Output: true
```
```ts
factorial(num: number): 
```
- Returns the factorial of a number.

```ts
console.log(factorial(5)); // Output: 120
```
```ts
sum(arr: number[]): number
```
- Returns the sum of an array of numbers.
```ts
console.log(sum([1, 2, 3, 4, 5])); // Output: 15
```
```ts
average(arr: number[]): number
```
- Returns the average of an array of numbers.
```ts
console.log(average([2, 4, 6, 8, 10])); // Output: 6
```

### Prime & Divisibility
```ts
isPrime(num: number): boolean
```
- Checks if a number is prime.

```ts
console.log(isPrime(11)); // Output: true
console.log(isPrime(10)); // Output: false
```
```ts
gcd(a: number, b: number): number
```
- Finds the greatest common divisor (GCD) of two numbers.
```ts
console.log(gcd(28, 35)); // Output: 7
```
```ts
lcm(a: number, b: number): number
```
- Finds the least common multiple (LCM) of two numbers.
```ts
console.log(lcm(12, 15)); // Output: 60
```

### Conversions
```ts
toBinary(num: number): string
```

- Converts a number to binary.

```ts
console.log(toBinary(10)); // Output: "1010"
```
```ts
toHex(num: number): string
```
- Converts a number to hexadecimal.
```ts
console.log(toHex(255)); // Output: "ff"
```
```ts
degToRad(degrees: number): number
```
- Converts degrees to radians.
```ts
console.log(degToRad(180)); // Output: 3.14159
```
```ts
radToDeg(radians: number): number
```
- Converts radians to degrees.
```ts
console.log(radToDeg(3.14159)); // Output: 180
```

### Rounding & Clamping
```ts
clamp(num: number, min: number, max: number): number
```
- Clamps a number within a given range.
```ts
console.log(clamp(15, 10, 20)); // Output: 15
console.log(clamp(25, 10, 20)); // Output: 20
```

### Miscellaneous
```ts
randomInt(min: number, max: number): number
```
- Generates a random integer between min and max.
```ts
console.log(randomInt(1, 100)); // Output: Random number between 1 and 100
```
```ts
power(base: number, exp: number): number
```
- Computes the power of a number without using Math.pow().
```ts
console.log(power(2, 3)); // Output: 8
```
```ts
sqrt(num: number): number
```
- Computes the square root of a number using the Babylonian method.
```ts
console.log(sqrt(25)); // Output: 5
```
```ts
nthRoot(num: number, n: number): number
```
- Computes the nth root of a number using Newton’s method.
```ts
console.log(nthRoot(27, 3)); // Output: 3
```
```ts
isPerfectSquare(num: number): boolean
```
- Checks if a number is a perfect square.
```ts
console.log(isPerfectSquare(36)); // Output: true
console.log(isPerfectSquare(37)); // Output: false 
```   

## License
ISC License.

## Author
Vijayavel R.