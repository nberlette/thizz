/**
 * Returns `true` if value is an instance of `Promise`; otherwise, returns `false`.
 * @param {Promise} value - target value to inspect
 * @returns {boolean} `boolean`
*/
declare module 'thizz/isPromise' {
  export function isPromise(value: Promise<any>): boolean;
  export default isPromise;
}
