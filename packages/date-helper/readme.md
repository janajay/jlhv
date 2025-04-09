# Date Helper Utility

## Overview
The Date Helper Utility provides a set of functions to simplify date manipulation, formatting, arithmetic operations, timezone handling, and validations.

## Installation
To install the package, run:
```sh
npm install @jlhv/date-helper
```

## Usage
Import the required functions:
```ts
import {
  formatDate, getISODate, getUTCDate, getCurrentDate, getCurrentDateString,
  getDayOfWeek, getMonthOfYear, getYear,
  addDays, addWeeks, addMonths, addYears,
  subtractDays, subtractWeeks, subtractMonths, subtractYears,
  isLeapYear, getDaysInMonth, getFirstDayOfMonth, getLastDayOfMonth,
  getDaysBetweenDates, getWeeksBetweenDates, getMonthsBetweenDates, getYearsBetweenDates,
  getCurrentDateInTimezone, getTimezoneOffset, getTimezoneName, getTimezoneAbbreviation,
  isDaylightSavingTime, getDSTStart, getDSTEnd, getDSTOffset,
  getDSTStartInTimezone, getDSTEndInTimezone, getDSTOffsetInTimezone
} from "@jlhv/date-helper";
```

## Functions

### 1. Date Formatting
```ts
formatDate(new Date()); // "2025-04-03 12:34:56"
formatDate("2025-04-03T12:34:56Z", "dd/MM/yyyy"); // "03/04/2025"
```

### 2. Date Retrieval
```ts
getISODate(); // "2025-04-03T12:34:56.789Z"
getUTCDate(); // "Thu, 03 Apr 2025 12:34:56 GMT"
getCurrentDate(); // Current Date object
getCurrentDateString(); // "2025-04-03 12:34:56"
```

### 3. Get Specific Parts of a Date
```ts
getDayOfWeek("2025-04-03"); // "Thursday"
getMonthOfYear("2025-04-03"); // "April"
getYear("2025-04-03"); // 2025
```

### 4. Arithmetic Operations
```ts
addDays("2025-04-03", 10); // 2025-04-13
addWeeks("2025-04-03", 2); // 2025-04-17
addMonths("2025-04-03", 1); // 2025-05-03
addYears("2025-04-03", 5); // 2030-04-03
```

### 5. Subtraction Operations
```ts
subtractDays("2025-04-03", 5); // 2025-03-29
subtractWeeks("2025-04-03", 2); // 2025-03-20
subtractMonths("2025-04-03", 1); // 2025-03-03
subtractYears("2025-04-03", 3); // 2022-04-03
```

### 6. Leap Year & Month Details
```ts
isLeapYear("2024-01-01"); // true
isLeapYear("2025-01-01"); // false

getDaysInMonth("2025-04-01"); // 30
getFirstDayOfMonth("2025-04-01"); // 2025-04-01
getLastDayOfMonth("2025-04-01"); // 2025-04-30
```

### 7. Difference Between Dates
```ts
getDaysBetweenDates("2025-04-01", "2025-04-10"); // 9
getWeeksBetweenDates("2025-04-01", "2025-04-15"); // 2
getMonthsBetweenDates("2025-01-01", "2025-04-01"); // 3
getYearsBetweenDates("2020-01-01", "2025-01-01"); // 5
```

### 8. Timezone Handling
```ts
getCurrentDateInTimezone("Asia/Kolkata"); // "2025-04-03 18:04:56"
getTimezoneOffset("2025-04-03"); // -330 (IST)
getTimezoneName(); // "Asia/Kolkata"
getTimezoneAbbreviation("2025-04-03"); // "IST"
```

### 9. Daylight Saving Time (DST)
```ts
isDaylightSavingTime("2025-06-01"); // true/false
getDSTStart("2025"); // DST start date
getDSTEnd("2025"); // DST end date
getDSTOffset("2025-06-01"); // -1 if DST active, 0 otherwise
```

### 10. DST Adjustments in Timezones
```ts
getDSTStartInTimezone("America/New_York"); // "2025-03-09 02:00:00"
getDSTEndInTimezone("America/New_York"); // "2025-11-02 02:00:00"
getDSTOffsetInTimezone("America/New_York", "2025-06-01"); // -1 or 0
```

## License
ISC License.

## Author
Vijayavel R.