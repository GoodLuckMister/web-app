export const getStyledNumber = (num: number) => {
    if (num < 1000) return `${num}`;
    if (num < 1000000) return `${(num / 1000).toPrecision(2)}k`;
    if (num < 10000000) return `${num / 10000000}m`;
};
export const roundDecimal = (num: number) => Math.round(num * 10) / 10;
export const sumArray = (arr: number[]) => arr.reduce((sum, current) => sum + current, 0);
