/**
 * Returns `true` if value is an instance of `RegExp`; otherwise, returns `false`.
 * @param {RegExp} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isRegExp(value) {
	return value instanceof RegExp;
}
export default isRegExp;
