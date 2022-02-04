/**
 * Returns `true` if value is an instance of `Proxy`; otherwise, returns `false`.
 * @param {Proxy} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isProxy(value) {
	return value instanceof Proxy;
}
export default isProxy;
