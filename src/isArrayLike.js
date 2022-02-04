/**
 * Returns `true` if value is not a function and has a valid `.length` property less than or equal to `Number.MAX_SAFE_INTEGER` (the conditions of 'ArrayLike'); otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/ArrayLike
 */
export function isArrayLike(value) {
	if (typeof value !== 'function') {
		if ('length' in value) {
			return value.length >= 0 && value.length <= Number.MAX_SAFE_INTEGER;
		}
	}
	return false;
}
export default isArrayLike;
