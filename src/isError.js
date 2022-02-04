/**
 * @param {*} value - the value to inspect
 * @returns {boolean} `true` if value is instance of `Error`; otherwise `false`
 * @link https://mdn.io/ErrorConstructor
 */
export function isError(value) {
	return value instanceof Error;
}
export default isError;
