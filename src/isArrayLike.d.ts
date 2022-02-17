/**
 * Returns `true` if value is not a function and has a valid `.length` property less than or equal to `Number.MAX_SAFE_INTEGER` (the conditions of 'ArrayLike'); otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/ArrayLike
 */
declare module 'thizz/isArrayLike' {
  export function isArrayLike(value: any): boolean;
  export default isArrayLike;
}
