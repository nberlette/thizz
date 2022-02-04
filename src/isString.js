/**
 * Returns `true` if value is an instance of `String` or is of type `string`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isString(value) {
	return typeof value === 'string' || value instanceof String;
}
export default isString;
