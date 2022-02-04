/**
 * Evaluate whether or not a specified value is both an integer, and less than
 * or equal to the `MAX_SAFE_INTEGER` property of the `Number` object.
 *
 * **Note**: depends on `Number.isInteger` and `Math.abs`.
 * @param {*} value - the value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/Number.isSafeInteger
 */
export function isSafeInteger(value: any): boolean;
export default isSafeInteger;
