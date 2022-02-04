/**
 * Returns `true` if value is an instance of `WeakMap`; otherwise, returns `false`.
 * @param {WeakMap} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isWeakMap(value) {
	return value instanceof WeakMap;
}
export default isWeakMap;
