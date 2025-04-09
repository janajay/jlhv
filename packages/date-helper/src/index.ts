import { format, parseISO } from "date-fns";

/**
 * Parses input into a Date object.
 */
function parseDate(date: Date | string): Date {
  try {
    if (typeof date === "string") {
      const parsed = parseISO(date);
      if (isNaN(parsed.getTime())) {
        throw new Error("Invalid date string");
      }
      return parsed;
    }
    if (date instanceof Date && !isNaN(date.getTime())) {
      return date;
    }
    throw new Error("Invalid date");
  } catch (error) {
    console.error("Error parsing date:", error);
    throw new Error("Invalid date format");
  }
}

/**
 * Formats a date string.
 */
export function formatDate(
  date: Date | string = new Date(),
  formatStr = "yyyy-MM-dd HH:mm:ss"
): string {
  try {
    const parsedDate = parseDate(date);
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid date");
    }
    return format(parsedDate, formatStr);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
}

/** Date Retrieval Functions */
export const getISODate = (): string => new Date().toISOString();
export const getUTCDate = (): string => new Date().toUTCString();
export const getCurrentDate = (): Date => new Date();
export const getCurrentDateString = (
  formatStr = "yyyy-MM-dd HH:mm:ss"
): string => formatDate(new Date(), formatStr);

/** Get Specific Parts of a Date */
export const getDayOfWeek = (date: Date | string = new Date()): string =>
  new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(parseDate(date));

export const getMonthOfYear = (date: Date | string = new Date()): string =>
  new Intl.DateTimeFormat("en-US", { month: "long" }).format(parseDate(date));

export const getYear = (date: Date | string = new Date()): number =>
  parseDate(date).getFullYear();

/** Arithmetic Operations */
export const addDays = (date: Date | string, days: number): Date =>
  new Date(parseDate(date).getTime() + days * 86_400_000);

export const addWeeks = (date: Date | string, weeks: number): Date =>
  addDays(date, weeks * 7);

export const addMonths = (date: Date | string, months: number): Date =>
  new Date(parseDate(date).setMonth(parseDate(date).getMonth() + months));

export const addYears = (date: Date | string, years: number): Date =>
  new Date(parseDate(date).setFullYear(parseDate(date).getFullYear() + years));

/** Subtraction Operations */
export const subtractDays = (date: Date | string, days: number): Date =>
  addDays(date, -days);

export const subtractWeeks = (date: Date | string, weeks: number): Date =>
  addWeeks(date, -weeks);

export const subtractMonths = (date: Date | string, months: number): Date =>
  addMonths(date, -months);

export const subtractYears = (date: Date | string, years: number): Date =>
  addYears(date, -years);

/** Leap Year Check */
export const isLeapYear = (date: Date | string): boolean => {
  const year = parseDate(date).getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

/** Month Details */
export const getDaysInMonth = (date: Date | string): number =>
  new Date(
    parseDate(date).getFullYear(),
    parseDate(date).getMonth() + 1,
    0
  ).getDate();

export const getFirstDayOfMonth = (date: Date | string): Date =>
  new Date(parseDate(date).getFullYear(), parseDate(date).getMonth(), 1);

export const getLastDayOfMonth = (date: Date | string): Date =>
  new Date(parseDate(date).getFullYear(), parseDate(date).getMonth() + 1, 0);

/** Difference Between Dates */
export const getDaysBetweenDates = (
  date1: Date | string,
  date2: Date | string
): number =>
  Math.ceil(
    Math.abs(parseDate(date2).getTime() - parseDate(date1).getTime()) /
      86_400_000
  );

export const getWeeksBetweenDates = (
  date1: Date | string,
  date2: Date | string
): number => Math.ceil(getDaysBetweenDates(date1, date2) / 7);

export const getMonthsBetweenDates = (
  date1: Date | string,
  date2: Date | string
): number => {
  const d1 = parseDate(date1);
  const d2 = parseDate(date2);
  return (
    (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth())
  );
};

export const getYearsBetweenDates = (
  date1: Date | string,
  date2: Date | string
): number => parseDate(date2).getFullYear() - parseDate(date1).getFullYear();

/** Timezone Adjustments */
export const getCurrentDateInTimezone = (
  timezone: string,
  formatStr = "yyyy-MM-dd HH:mm:ss"
): string => {
  try {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const year = parts.find((p) => p.type === "year")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const day = parts.find((p) => p.type === "day")?.value;
    const hour = parts.find((p) => p.type === "hour")?.value;
    const minute = parts.find((p) => p.type === "minute")?.value;
    const second = parts.find((p) => p.type === "second")?.value;

    if (!year || !month || !day || !hour || !minute || !second) {
      throw new Error("Invalid date parts");
    }

    const formattedDateStr = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    return formatDate(formattedDateStr, formatStr);
  } catch (error) {
    console.error("Error in getCurrentDateInTimezone:", error);
    return "Invalid Timezone";
  }
};

export const getTimezoneOffset = (date: Date | string): number => {
  try {
    return parseDate(date).getTimezoneOffset();
  } catch (error) {
    console.error("Error in getTimezoneOffset:", error);
    return NaN;
  }
};

export const getTimezoneName = (): string =>
  Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getTimezoneAbbreviation = (date: Date | string): string => {
  try {
    return new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).format(
      parseDate(date)
    );
  } catch (error) {
    console.error("Error in getTimezoneAbbreviation:", error);
    return "Invalid Timezone";
  }
};

/** Daylight Saving Time Adjustments */
export const isDaylightSavingTime = (date: Date | string): boolean => {
  try {
    const d = parseDate(date);
    return (
      d.getTimezoneOffset() !==
      new Date(d.getFullYear(), 0, 1).getTimezoneOffset()
    );
  } catch (error) {
    console.error("Error in isDaylightSavingTime:", error);
    return false;
  }
};

export const getDSTStart = (date: Date | string): Date =>
  new Date(parseDate(date).getFullYear(), 2, 14, 2, 0, 0); // Second Sunday in March

export const getDSTEnd = (date: Date | string): Date =>
  new Date(parseDate(date).getFullYear(), 10, 7, 2, 0, 0); // First Sunday in November

export const getDSTOffset = (date: Date | string): number => {
  try {
    return isDaylightSavingTime(date) ? -1 : 0;
  } catch (error) {
    console.error("Error in getDSTOffset:", error);
    return 0;
  }
};

/** Daylight Saving Time Adjustments in Timezone */
export const getDSTStartInTimezone = (
  timezone: string,
  formatStr = "yyyy-MM-dd HH:mm:ss"
): string => {
  try {
    const now = new Date();
    const year = now.getFullYear();

    // DST starts on the Second Sunday of March at 2:00 AM in most regions
    const dstStart = new Date(Date.UTC(year, 2, 8, 2, 0, 0)); // March 8th (UTC time)
    while (dstStart.getUTCDay() !== 0) {
      dstStart.setUTCDate(dstStart.getUTCDate() + 1); // Move to next Sunday
    }

    // Convert to the given timezone
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const parts = formatter.formatToParts(dstStart);
    const yearPart = parts.find((p) => p.type === "year")?.value;
    const monthPart = parts.find((p) => p.type === "month")?.value;
    const dayPart = parts.find((p) => p.type === "day")?.value;
    const hourPart = parts.find((p) => p.type === "hour")?.value;
    const minutePart = parts.find((p) => p.type === "minute")?.value;
    const secondPart = parts.find((p) => p.type === "second")?.value;

    if (!yearPart || !monthPart || !dayPart || !hourPart || !minutePart || !secondPart) {
      throw new Error("Invalid date parts");
    }

    const formattedDateStr = `${yearPart}-${monthPart}-${dayPart} ${hourPart}:${minutePart}:${secondPart}`;
    return formatDate(formattedDateStr, formatStr);
  } catch (error) {
    console.error("Error in getDSTStartInTimezone:", error);
    return "Invalid Timezone";
  }
};

export const getDSTEndInTimezone = getDSTStartInTimezone; // Since it's the same logic, reusing function.

export const getDSTOffsetInTimezone = (
  timezone: string,
  date: Date | string
): number => {
  const d = parseDate(date);
  return (
    d.getTimezoneOffset() - new Date(d.getFullYear(), 0, 1).getTimezoneOffset()
  );
};