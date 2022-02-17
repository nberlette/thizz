/**
 * @param {*} value - the value to inspect
 * @returns {boolean} `true` if value is instance of `Error`; otherwise `false`
 * @link https://mdn.io/ErrorConstructor
 */
declare module 'thizz/isError' {
  export function isError(value: any): boolean;
  export default isError;
}
