/**
 * Returns `true` if value is an instance of `WeakSet`; otherwise, returns `false`.
 * @param {*} value - `WeakSet` target to typecheck
 * @returns {boolean} `boolean`
 */
declare module 'thizz/isWeakSet' {
  export function isWeakSet(value: WeakSet<any>): boolean;
  export default isWeakSet;
}
