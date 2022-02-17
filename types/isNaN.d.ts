/**
 * Returns `true` if value is `NaN` (`Infinity`, `-Infinity`, `NaN`); otherwise, returns `false`. Based on [`Number.isNaN`](https://mdn.io/Number.isNaN).
 *
 * @param {number} value - target value to inspect
 * @returns {boolean} `boolean`
 */
declare module 'thizz/isNaN' {
  export function isNaN(value: number): boolean;
  export default isNaN;
}
