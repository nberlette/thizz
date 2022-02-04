/**
 * Returns `true` if value is an object literal; otherwise, returns `false`.
 * @param {object} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isObjectLiteral(value) {
	return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]';
}
export default isObjectLiteral;
