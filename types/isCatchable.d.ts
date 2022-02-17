/**
 * @param {*} value - the value to inspect
 * @returns {boolean} `true` if value has a `.catch` method; otherwise `false`.
 * @see isPromise
 * @link https://mdn.io/Promise.catch
 */
declare module 'thizz/isCatchable' {
  export function isCatchable(value: any): boolean;
  export default isCatchable;
}
