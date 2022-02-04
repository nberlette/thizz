/**
 * Returns `true` if value is an instance of `WeakSet`; otherwise, returns `false`.
 * @param {WeakSet} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isWeakSet(value) {
	return value instanceof WeakSet;
}
export default isWeakSet;
