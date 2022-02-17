/**
 * @param {*} value - the value to inspect
 * @returns {boolean} `true` if value has a `.then` method; otherwise `false`.
 * @see isPromise
 * @link https://mdn.io/Promise.then
 */
declare module 'isThenable' {
  export function isThenable(value: any): boolean;
  export default isThenable;
}
