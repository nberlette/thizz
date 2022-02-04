/**
 * Returns `true` if value is an instance of `Buffer`; otherwise, returns `false`.
 * @param {*} value - target value to inspect
 * @returns {boolean} `boolean`
 * @link https://mdn.io/Buffer
 */
export function isBuffer(value) {
	return value instanceof Buffer;
}
export default isBuffer;
