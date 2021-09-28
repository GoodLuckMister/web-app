export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
export const daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
export const shortMonthNames = monthNames.map((month) => month.slice(0, 3));
export const getStyledDate = (date: Date) =>
    `${date.getDay()} ${shortMonthNames[date.getMonth()]} ${date.getFullYear()}`;

export const getStyledTimeAndDate = (date: Date) =>
    `${getStyledDate(date)}  (${date.getHours()}:${date.getMinutes()}:${date.getSeconds()})`;
