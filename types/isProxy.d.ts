/**
 * Returns `true` if value is an instance of `Proxy`; otherwise, returns `false`.
 * @param {Proxy} value - target value to inspect
 * @returns {boolean} `boolean`
 */
declare module 'thizz/isProxy' {
  export function isProxy(value: ProxyConstructor): boolean;
  export default isProxy;
}
