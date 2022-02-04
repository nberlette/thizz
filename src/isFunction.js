/**
 * Returns `true` if value is an instance of `Function` or of type `function`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isFunction(value) {
	return value instanceof Function || typeof value === 'function';
}
export default isFunction;
