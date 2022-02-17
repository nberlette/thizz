/**
 * Returns `true` if value is instance of `BigInt`; otherwise, returns `false`.
 * @param {*} value - target value
 * @returns {boolean} `boolean`
 * @link https://mdn.io/BigInt
 */
export function isBigInt(value) {
	return value instanceof BigInt;
}
