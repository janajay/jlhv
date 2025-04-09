"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDSTOffsetInTimezone = exports.getDSTEndInTimezone = exports.getDSTStartInTimezone = exports.getDSTOffset = exports.getDSTEnd = exports.getDSTStart = exports.isDaylightSavingTime = exports.getTimezoneAbbreviation = exports.getTimezoneName = exports.getTimezoneOffset = exports.getCurrentDateInTimezone = exports.getYearsBetweenDates = exports.getMonthsBetweenDates = exports.getWeeksBetweenDates = exports.getDaysBetweenDates = exports.getLastDayOfMonth = exports.getFirstDayOfMonth = exports.getDaysInMonth = exports.isLeapYear = exports.subtractYears = exports.subtractMonths = exports.subtractWeeks = exports.subtractDays = exports.addYears = exports.addMonths = exports.addWeeks = exports.addDays = exports.getYear = exports.getMonthOfYear = exports.getDayOfWeek = exports.getCurrentDateString = exports.getCurrentDate = exports.getUTCDate = exports.getISODate = void 0;
exports.formatDate = formatDate;
var date_fns_1 = require("date-fns");
/**
 * Parses input into a Date object.
 */
function parseDate(date) {
    try {
        if (typeof date === "string") {
            var parsed = (0, date_fns_1.parseISO)(date);
            if (isNaN(parsed.getTime())) {
                throw new Error("Invalid date string");
            }
            return parsed;
        }
        if (date instanceof Date && !isNaN(date.getTime())) {
            return date;
        }
        throw new Error("Invalid date");
    }
    catch (error) {
        console.error("Error parsing date:", error);
        throw new Error("Invalid date format");
    }
}
/**
 * Formats a date string.
 */
function formatDate(date, formatStr) {
    if (date === void 0) { date = new Date(); }
    if (formatStr === void 0) { formatStr = "yyyy-MM-dd HH:mm:ss"; }
    try {
        var parsedDate = parseDate(date);
        if (isNaN(parsedDate.getTime())) {
            throw new Error("Invalid date");
        }
        return (0, date_fns_1.format)(parsedDate, formatStr);
    }
    catch (error) {
        console.error("Error formatting date:", error);
        return "Invalid Date";
    }
}
/** Date Retrieval Functions */
var getISODate = function () { return new Date().toISOString(); };
exports.getISODate = getISODate;
var getUTCDate = function () { return new Date().toUTCString(); };
exports.getUTCDate = getUTCDate;
var getCurrentDate = function () { return new Date(); };
exports.getCurrentDate = getCurrentDate;
var getCurrentDateString = function (formatStr) {
    if (formatStr === void 0) { formatStr = "yyyy-MM-dd HH:mm:ss"; }
    return formatDate(new Date(), formatStr);
};
exports.getCurrentDateString = getCurrentDateString;
/** Get Specific Parts of a Date */
var getDayOfWeek = function (date) {
    if (date === void 0) { date = new Date(); }
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(parseDate(date));
};
exports.getDayOfWeek = getDayOfWeek;
var getMonthOfYear = function (date) {
    if (date === void 0) { date = new Date(); }
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(parseDate(date));
};
exports.getMonthOfYear = getMonthOfYear;
var getYear = function (date) {
    if (date === void 0) { date = new Date(); }
    return parseDate(date).getFullYear();
};
exports.getYear = getYear;
/** Arithmetic Operations */
var addDays = function (date, days) {
    return new Date(parseDate(date).getTime() + days * 86400000);
};
exports.addDays = addDays;
var addWeeks = function (date, weeks) {
    return (0, exports.addDays)(date, weeks * 7);
};
exports.addWeeks = addWeeks;
var addMonths = function (date, months) {
    return new Date(parseDate(date).setMonth(parseDate(date).getMonth() + months));
};
exports.addMonths = addMonths;
var addYears = function (date, years) {
    return new Date(parseDate(date).setFullYear(parseDate(date).getFullYear() + years));
};
exports.addYears = addYears;
/** Subtraction Operations */
var subtractDays = function (date, days) {
    return (0, exports.addDays)(date, -days);
};
exports.subtractDays = subtractDays;
var subtractWeeks = function (date, weeks) {
    return (0, exports.addWeeks)(date, -weeks);
};
exports.subtractWeeks = subtractWeeks;
var subtractMonths = function (date, months) {
    return (0, exports.addMonths)(date, -months);
};
exports.subtractMonths = subtractMonths;
var subtractYears = function (date, years) {
    return (0, exports.addYears)(date, -years);
};
exports.subtractYears = subtractYears;
/** Leap Year Check */
var isLeapYear = function (date) {
    var year = parseDate(date).getFullYear();
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
exports.isLeapYear = isLeapYear;
/** Month Details */
var getDaysInMonth = function (date) {
    return new Date(parseDate(date).getFullYear(), parseDate(date).getMonth() + 1, 0).getDate();
};
exports.getDaysInMonth = getDaysInMonth;
var getFirstDayOfMonth = function (date) {
    return new Date(parseDate(date).getFullYear(), parseDate(date).getMonth(), 1);
};
exports.getFirstDayOfMonth = getFirstDayOfMonth;
var getLastDayOfMonth = function (date) {
    return new Date(parseDate(date).getFullYear(), parseDate(date).getMonth() + 1, 0);
};
exports.getLastDayOfMonth = getLastDayOfMonth;
/** Difference Between Dates */
var getDaysBetweenDates = function (date1, date2) {
    return Math.ceil(Math.abs(parseDate(date2).getTime() - parseDate(date1).getTime()) /
        86400000);
};
exports.getDaysBetweenDates = getDaysBetweenDates;
var getWeeksBetweenDates = function (date1, date2) { return Math.ceil((0, exports.getDaysBetweenDates)(date1, date2) / 7); };
exports.getWeeksBetweenDates = getWeeksBetweenDates;
var getMonthsBetweenDates = function (date1, date2) {
    var d1 = parseDate(date1);
    var d2 = parseDate(date2);
    return ((d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth()));
};
exports.getMonthsBetweenDates = getMonthsBetweenDates;
var getYearsBetweenDates = function (date1, date2) { return parseDate(date2).getFullYear() - parseDate(date1).getFullYear(); };
exports.getYearsBetweenDates = getYearsBetweenDates;
/** Timezone Adjustments */
var getCurrentDateInTimezone = function (timezone, formatStr) {
    var _a, _b, _c, _d, _e, _f;
    if (formatStr === void 0) { formatStr = "yyyy-MM-dd HH:mm:ss"; }
    try {
        var now = new Date();
        var formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
        var parts = formatter.formatToParts(now);
        var year = (_a = parts.find(function (p) { return p.type === "year"; })) === null || _a === void 0 ? void 0 : _a.value;
        var month = (_b = parts.find(function (p) { return p.type === "month"; })) === null || _b === void 0 ? void 0 : _b.value;
        var day = (_c = parts.find(function (p) { return p.type === "day"; })) === null || _c === void 0 ? void 0 : _c.value;
        var hour = (_d = parts.find(function (p) { return p.type === "hour"; })) === null || _d === void 0 ? void 0 : _d.value;
        var minute = (_e = parts.find(function (p) { return p.type === "minute"; })) === null || _e === void 0 ? void 0 : _e.value;
        var second = (_f = parts.find(function (p) { return p.type === "second"; })) === null || _f === void 0 ? void 0 : _f.value;
        if (!year || !month || !day || !hour || !minute || !second) {
            throw new Error("Invalid date parts");
        }
        var formattedDateStr = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second);
        return formatDate(formattedDateStr, formatStr);
    }
    catch (error) {
        console.error("Error in getCurrentDateInTimezone:", error);
        return "Invalid Timezone";
    }
};
exports.getCurrentDateInTimezone = getCurrentDateInTimezone;
var getTimezoneOffset = function (date) {
    try {
        return parseDate(date).getTimezoneOffset();
    }
    catch (error) {
        console.error("Error in getTimezoneOffset:", error);
        return NaN;
    }
};
exports.getTimezoneOffset = getTimezoneOffset;
var getTimezoneName = function () {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
exports.getTimezoneName = getTimezoneName;
var getTimezoneAbbreviation = function (date) {
    try {
        return new Intl.DateTimeFormat("en-US", { timeZoneName: "short" }).format(parseDate(date));
    }
    catch (error) {
        console.error("Error in getTimezoneAbbreviation:", error);
        return "Invalid Timezone";
    }
};
exports.getTimezoneAbbreviation = getTimezoneAbbreviation;
/** Daylight Saving Time Adjustments */
var isDaylightSavingTime = function (date) {
    try {
        var d = parseDate(date);
        return (d.getTimezoneOffset() !==
            new Date(d.getFullYear(), 0, 1).getTimezoneOffset());
    }
    catch (error) {
        console.error("Error in isDaylightSavingTime:", error);
        return false;
    }
};
exports.isDaylightSavingTime = isDaylightSavingTime;
var getDSTStart = function (date) {
    return new Date(parseDate(date).getFullYear(), 2, 14, 2, 0, 0);
}; // Second Sunday in March
exports.getDSTStart = getDSTStart;
var getDSTEnd = function (date) {
    return new Date(parseDate(date).getFullYear(), 10, 7, 2, 0, 0);
}; // First Sunday in November
exports.getDSTEnd = getDSTEnd;
var getDSTOffset = function (date) {
    try {
        return (0, exports.isDaylightSavingTime)(date) ? -1 : 0;
    }
    catch (error) {
        console.error("Error in getDSTOffset:", error);
        return 0;
    }
};
exports.getDSTOffset = getDSTOffset;
/** Daylight Saving Time Adjustments in Timezone */
var getDSTStartInTimezone = function (timezone, formatStr) {
    var _a, _b, _c, _d, _e, _f;
    if (formatStr === void 0) { formatStr = "yyyy-MM-dd HH:mm:ss"; }
    try {
        var now = new Date();
        var year = now.getFullYear();
        // DST starts on the Second Sunday of March at 2:00 AM in most regions
        var dstStart = new Date(Date.UTC(year, 2, 8, 2, 0, 0)); // March 8th (UTC time)
        while (dstStart.getUTCDay() !== 0) {
            dstStart.setUTCDate(dstStart.getUTCDate() + 1); // Move to next Sunday
        }
        // Convert to the given timezone
        var formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        });
        var parts = formatter.formatToParts(dstStart);
        var yearPart = (_a = parts.find(function (p) { return p.type === "year"; })) === null || _a === void 0 ? void 0 : _a.value;
        var monthPart = (_b = parts.find(function (p) { return p.type === "month"; })) === null || _b === void 0 ? void 0 : _b.value;
        var dayPart = (_c = parts.find(function (p) { return p.type === "day"; })) === null || _c === void 0 ? void 0 : _c.value;
        var hourPart = (_d = parts.find(function (p) { return p.type === "hour"; })) === null || _d === void 0 ? void 0 : _d.value;
        var minutePart = (_e = parts.find(function (p) { return p.type === "minute"; })) === null || _e === void 0 ? void 0 : _e.value;
        var secondPart = (_f = parts.find(function (p) { return p.type === "second"; })) === null || _f === void 0 ? void 0 : _f.value;
        if (!yearPart || !monthPart || !dayPart || !hourPart || !minutePart || !secondPart) {
            throw new Error("Invalid date parts");
        }
        var formattedDateStr = "".concat(yearPart, "-").concat(monthPart, "-").concat(dayPart, " ").concat(hourPart, ":").concat(minutePart, ":").concat(secondPart);
        return formatDate(formattedDateStr, formatStr);
    }
    catch (error) {
        console.error("Error in getDSTStartInTimezone:", error);
        return "Invalid Timezone";
    }
};
exports.getDSTStartInTimezone = getDSTStartInTimezone;
exports.getDSTEndInTimezone = exports.getDSTStartInTimezone; // Since it's the same logic, reusing function.
var getDSTOffsetInTimezone = function (timezone, date) {
    var d = parseDate(date);
    return (d.getTimezoneOffset() - new Date(d.getFullYear(), 0, 1).getTimezoneOffset());
};
exports.getDSTOffsetInTimezone = getDSTOffsetInTimezone;
var testDate1 = "2025-04-01";
var testDate2 = "2026-04-01";
var timezone = "America/New_York";
console.log("DST Start in Timezone:", (0, exports.getDSTStartInTimezone)(timezone));
console.log("DST End in Timezone:", (0, exports.getDSTEndInTimezone)(timezone));
console.log("DST Offset in Timezone:", (0, exports.getDSTOffsetInTimezone)(timezone, testDate1));
