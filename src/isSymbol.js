/**
 * Returns `true` if value is an instance of `Symbol`; otherwise, returns `false`.
 * @param {Symbol} value - target value to inspect
 * @returns {boolean} `boolean`
 */
export function isSymbol(value) {
	return value instanceof Symbol;
}
export default isSymbol;
