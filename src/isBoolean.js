/**
 * Returns `true` if value is an instance of `Boolean`, or if value is equal to either `true` or `false`.
 * Returns `false` otherwise.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/Boolean
 */
export function isBoolean(value) {
	return value instanceof Boolean || value === true || value === false;
}
export default isBoolean;
