/**
 * Returns `true` if value is an instance of `ArrayBuffer`; otherwise, returns `false`.
 * @param {ArrayBuffer|*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/ArrayBuffer
 */
declare module 'isArrayBuffer' {
  export function isArrayBuffer(value: ArrayBuffer | any): boolean;
  export default isArrayBuffer;
}
