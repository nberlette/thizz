/**
 * Returns `true` if value is `undefined`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isUndefined(value) {
	return value === undefined || typeof value === 'undefined';
}
export default isUndefined;
