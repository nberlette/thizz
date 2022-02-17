/**
 * Returns `true` if value is an Array; otherwise, returns `false`.
 * @param {any[]} value - target value to inspect
 * @returns {boolean} `boolean`  
 * 
 * @package thizz
 * @example isArray([1, 2, 3]); 
 * // returns true
 * @link https://mdn.io/Array.isArray
 */
declare module 'isArray' {
  export function isArray(value: any[]): boolean;
  export default isArray;
}
