/**
 * Returns `true` if value is `null`, `undefined`, or `''`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @see thizz
 */
export function isNil(value) {
	return value == null;
}
export default isNil;
