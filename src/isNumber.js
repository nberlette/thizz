/**
 * Returns `true` if value is an instance of `Number` or of type `number`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isNumber(value) {
	return value instanceof Number || typeof value === 'number';
}
export default isNumber;
