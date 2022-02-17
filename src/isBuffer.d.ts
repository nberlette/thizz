/**
 * Returns `true` if value is an instance of `Buffer`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/Buffer
 */
declare module 'isBuffer' {
  export function isBuffer(value: any): boolean;
  export default isBuffer;
}
