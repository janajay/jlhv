/**
 * String Helper Library
 * Provides various string manipulation functions
 */

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function toLowerCase(str: string): string {
  return str.toLowerCase();
}

export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export function trim(str: string): string {
  return str.trim();
}

export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

export function toCamelCase(str: string): string {
  return str.replace(/(?:^|\s)(\w)/g, (_, c) => c.toUpperCase()).replace(/\s+/g, '');
}

export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

export function toSnakeCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/\s+/g, '_').toLowerCase();
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidURL(url: string): boolean {
  return /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(url);
}

export function contains(str: string, substring: string): boolean {
  return str.includes(substring);
}

export function repeat(str: string, count: number): string {
  return str.repeat(count);
}

export function replaceAll(str: string, search: string, replacement: string): string {
  return str.split(search).join(replacement);
}

export function truncate(str: string, maxLength: number): string {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

export function countOccurrences(str: string, substring: string): number {
  return (str.match(new RegExp(substring, 'g')) || []).length;
}

export function countWords(str: string): number {
  return str.trim().split(/\s+/).length;
}

export function maskString(str: string, visibleChars: number = 4, maskChar: string = '*'): string {
  return str.length > visibleChars ? maskChar.repeat(str.length - visibleChars) + str.slice(-visibleChars) : str;
}

export function removeAllWhitespace(str: string): string {
  return str.replace(/\s+/g, '');
}

export function removeSpecialCharacters(str: string): string {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

export function extractNumbers(str: string): string {
  return str.replace(/\D+/g, '');
}

export function obfuscateEmail(email: string): string {
  return email.replace(/(\w{3})[^@]+(@.*)/, '$1***$2');
}

export function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export function swapCase(str: string): string {
  return str.replace(/([a-z])|([A-Z])/g, (_, lower, upper) => lower ? lower.toUpperCase() : upper.toLowerCase());
}

export function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}

export function isTitleCase(str: string): boolean {
  return str.split(' ').every(word => /^[A-Z][a-z]*$/.test(word));
}
