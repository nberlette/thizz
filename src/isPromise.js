/**
 * Returns `true` if value is an instance of `Promise`; otherwise, returns `false`.
 * @param {Promise} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isPromise(value) {
	return value instanceof Promise;
}
export default isPromise;
