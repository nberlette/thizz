/**
 * @param {*} value - the value to inspect
 * @returns {boolean} `true` if value has a `.then` method; otherwise `false`.
 * @see isPromise
 * @link https://mdn.io/Promise.then
 */
export function isThenable(value) {
	return 'then' in value && typeof value.then == 'function';
}
export default isThenable;
