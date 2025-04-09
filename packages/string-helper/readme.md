# String Helper Library

## Overview
The String Helper Library provides a collection of utility functions for string manipulation. It includes common functions such as capitalization, formatting, validation, and transformation of strings.

## Installation
To install the package, use:
```sh
npm install @jlhv/string-helper
```

## Usage
Import the required functions from the library:
```typescript
import { capitalize, toLowerCase, isValidEmail } from "@jlhv/string-helper";

console.log(capitalize("hello")); // Output: Hello
console.log(toLowerCase("WORLD")); // Output: world
console.log(isValidEmail("test@example.com")); // Output: true
```

## Functions

### Basic String Manipulation
- `capitalize(str: string): string` - Capitalizes the first letter of a string.
- `toLowerCase(str: string): string` - Converts a string to lowercase.
- `toUpperCase(str: string): string` - Converts a string to uppercase.
- `trim(str: string): string` - Trims whitespace from both ends of a string.
- `reverse(str: string): string` - Reverses a string.

### Formatting
- `toCamelCase(str: string): string` - Converts a string to camelCase.
- `toKebabCase(str: string): string` - Converts a string to kebab-case.
- `toSnakeCase(str: string): string` - Converts a string to snake_case.
- `slugify(str: string): string` - Converts a string into a URL-friendly slug.

### Validation
- `isValidEmail(email: string): boolean` - Checks if a string is a valid email.
- `isValidURL(url: string): boolean` - Checks if a string is a valid URL.
- `isValidPhoneNumber(phone: string): boolean` - Checks if a string is a valid phone number.
- `isValidDate(date: string): boolean` - Checks if a string is a valid date (YYYY-MM-DD).
- `isValidJSON(json: string): boolean` - Checks if a string is a valid JSON.
- `isValidUUID(uuid: string): boolean` - Checks if a string is a valid UUID.
- `isValidIPAddress(ip: string): boolean` - Checks if a string is a valid IP address.
- `isValidCreditCard(cardNumber: string): boolean` - Checks if a string is a valid credit card number.

### String Operations
- `contains(str: string, substring: string): boolean` - Checks if a string contains a substring.
- `repeat(str: string, count: number): string` - Repeats a string `n` times.
- `replaceAll(str: string, search: string, replacement: string): string` - Replaces all occurrences of a substring.
- `truncate(str: string, maxLength: number): string` - Truncates a string to a given length and adds `...` if needed.
- `countOccurrences(str: string, substring: string): number` - Counts occurrences of a substring.
- `countWords(str: string): number` - Counts words in a string.

### Security & Cleaning
- `maskString(str: string, visibleChars: number = 4, maskChar: string = "*")` - Masks part of a string (e.g., credit card numbers).
- `removeAllWhitespace(str: string): string` - Removes all whitespace.
- `removeSpecialCharacters(str: string): string` - Removes special characters.
- `extractNumbers(str: string): string` - Extracts all numbers from a string.
- `removeNumbers(str: string): string` - Removes all numbers from a string.
- `obfuscateEmail(email: string): string` - Obfuscates an email address (e.g., mail***@mail.com).

### Random String Generation
- `generateRandomString(length: number): string` - Generates a random string of given length.

### Case Operations
- `isAlphanumeric(str: string): boolean` - Checks if a string contains only letters and numbers.
- `isTitleCase(str: string): boolean` - Checks if a string follows title case formatting.
- `swapCase(str: string): string` - Swaps case (uppercase to lowercase and vice versa).

### Example Usage
```typescript
import * as stringHelper from "@jlhv/string-helper";

console.log("capitalize:", stringHelper.capitalize("hello")); // Hello
console.log("toLowerCase:", stringHelper.toLowerCase("WORLD")); // world
console.log("toUpperCase:", stringHelper.toUpperCase("hello")); // HELLO
console.log("trim:", stringHelper.trim("  hello  ")); // hello
console.log("contains:", stringHelper.contains("hello world", "world")); // true
console.log("reverse:", stringHelper.reverse("hello")); // olleh
console.log("toCamelCase:", stringHelper.toCamelCase("hello world test")); // HelloWorldTest
console.log("toKebabCase:", stringHelper.toKebabCase("helloWorld Test")); // hello-world-test
console.log("toSnakeCase:", stringHelper.toSnakeCase("helloWorld Test")); // hello_world_test
console.log("repeat:", stringHelper.repeat("hi", 3)); // hihihi
console.log("replaceAll:", stringHelper.replaceAll("hello world", "o", "a")); // hella warld
console.log("truncate:", stringHelper.truncate("hello world", 5)); // hello...
console.log("isPalindrome:", stringHelper.isPalindrome("madam")); // true
console.log("isValidEmail:", stringHelper.isValidEmail("test@example.com")); // true
console.log("isValidURL:", stringHelper.isValidURL("https://example.com")); // true
console.log("isValidPhoneNumber:", stringHelper.isValidPhoneNumber("+1234567890")); // true
console.log("isValidDate:", stringHelper.isValidDate("2024-04-01")); // true
console.log("isValidJSON:", stringHelper.isValidJSON('{"name":"John"}')); // true
console.log("slugify:", stringHelper.slugify("Hello World!! Test")); // hello-world-test
console.log("countOccurrences:", stringHelper.countOccurrences("hello hello world", "hello")); // 2
console.log("removeAllWhitespace:", stringHelper.removeAllWhitespace("hello world")); // helloworld
console.log("maskString:", stringHelper.maskString("1234567890", 4, "*")); // ******7890
console.log("removeSpecialCharacters:", stringHelper.removeSpecialCharacters("hello@# world!")); // hello world
console.log("generateRandomString:", stringHelper.generateRandomString(8)); // Random 8-character string
console.log("isAlphanumeric:", stringHelper.isAlphanumeric("hello123")); // true
console.log("isTitleCase:", stringHelper.isTitleCase("Hello World")); // true
console.log("extractNumbers:", stringHelper.extractNumbers("abc123xyz")); // 123
console.log("obfuscateEmail:", stringHelper.obfuscateEmail("mail@gmail.com"));
console.log("countWords:", stringHelper.countWords("Hello world! This is a test.")); // 6
console.log("swapCase:", stringHelper.swapCase("Hello World")); // "hELLO wORLD"
```

## License
ISC License.

## Author
Vijayavel R.