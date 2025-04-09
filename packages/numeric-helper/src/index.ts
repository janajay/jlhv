/**
 * Numeric Helper Library
 * Provides utility functions for numeric manipulation.
 */

/** Checks if a number is even. */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/** Checks if a number is odd. */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/** Checks if a number is prime (without using Math.sqrt). */
export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/** Calculates the factorial of a number (non-recursive). */
export function factorial(num: number): number {
  if (num < 0) return 0;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

/** Returns the nth Fibonacci number (without recursion). */
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

/** Returns the sum of an array of numbers. */
export function sum(arr: number[]): number {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

/** Returns the average of an array of numbers. */
export function average(arr: number[]): number {
  return arr.length === 0 ? 0 : sum(arr) / arr.length;
}

/** Finds the greatest common divisor (GCD) without using modulo. */
export function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a - Math.floor(a / b) * b;
    a = temp;
  }
  return a;
}

/** Finds the least common multiple (LCM) using GCD. */
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

/** Restricts a number between a min and max value. */
export function clamp(num: number, min: number, max: number): number {
  return num < min ? min : num > max ? max : num;
}

/** Converts a number to binary (without built-in functions). */
export function toBinary(num: number): string {
  if (num === 0) return "0";
  let binary = "";
  let n = num;
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}

/** Converts a number to hexadecimal (without built-in functions). */
export function toHex(num: number): string {
  const hexChars = "0123456789abcdef";
  if (num === 0) return "0";
  let hex = "";
  let n = num;
  while (n > 0) {
    hex = hexChars[n % 16] + hex;
    n = Math.floor(n / 16);
  }
  return hex;
}

/** Generates a random integer between min and max (without Math.random). */
export function randomInt(min: number, max: number): number {
  let seed = Date.now() % 10000;
  seed = (seed * 9301 + 49297) % 233280;
  let rnd = seed / 233280;
  return Math.floor(rnd * (max - min + 1)) + min;
}

/** Checks if a value is numeric. */
export function isNumeric(value: any): boolean {
  return typeof value === "number" && isFinite(value);
}

/** Converts degrees to radians (without using Math.PI). */
export function degToRad(degrees: number): number {
  const piApprox = 355 / 113; // Approximation of π
  return (degrees * piApprox) / 180;
}

/** Converts radians to degrees (without using Math.PI). */
export function radToDeg(radians: number): number {
  const piApprox = 355 / 113;
  return (radians * 180) / piApprox;
}

/** Computes the power of a number (base^exp) without using Math.pow. */
export function power(base: number, exp: number): number {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

/** Computes the square root of a number using the Babylonian method. */
export function sqrt(num: number): number {
  if (num < 0) return NaN;
  let guess = num / 2;
  let prevGuess;

  do {
    prevGuess = guess;
    guess = (guess + num / guess) / 2;
  } while (Math.abs(guess - prevGuess) > 0.00001);

  return guess;
}

/** Computes the nth root of a number using Newton's method. */
export function nthRoot(num: number, n: number): number {
  if (num < 0 && n % 2 === 0) return NaN;

  let guess = num / n;
  let prevGuess;

  do {
    prevGuess = guess;
    guess = ((n - 1) * guess + num / power(guess, n - 1)) / n;
  } while (Math.abs(guess - prevGuess) > 0.00001);

  return guess;
}

/** Checks if a number is a perfect square (without Math.sqrt). */
export function isPerfectSquare(num: number): boolean {
  let x = 1;
  while (x * x <= num) {
    if (x * x === num) return true;
    x++;
  }
  return false;
}
