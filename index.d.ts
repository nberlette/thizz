/**
 * @preserve
 * @package thizz
 * @license MIT
 * @nberlette <nick@berlette.com>
 */
declare module thizz;
	/**
	 * Returns `true` if value is an Array; otherwise, returns `false`.
	 * @param {any[]} value - target value to inspect
	 * @returns {boolean} `boolean`  
	 * 
	 * @package thizz
	 * @example isArray([1, 2, 3]); // true
	 * @link https://mdn.io/Array.isArray
	 */
	export function isArray(value: any[]): boolean;

	/**
	 * Returns `true` if value is an instance of `ArrayBuffer`; otherwise, returns `false`.
	 * @param {ArrayBuffer|*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/ArrayBuffer
	 */
	export function isArrayBuffer(value: ArrayBuffer | any): boolean;

	/**
	 * Returns `true` if value is not a function and has a valid `.length` property less than or equal to `Number.MAX_SAFE_INTEGER` (the conditions of 'ArrayLike'); otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/ArrayLike
	 */
	export function isArrayLike(value: any): boolean;

	/**
	 * Returns `true` if value is instance of `BigInt`; otherwise, returns `false`.
	 * @param {*} value - target value
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/BigInt
	 */
	export function isBigInt(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Boolean`, or if value is equal to either `true` or `false`.
	 * Returns `false` otherwise.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/Boolean
	 */
	export function isBoolean(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Buffer`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/Buffer
	 */
	export function isBuffer(value: any): boolean;

	/**
	 * @param {*} value - the value to inspect
	 * @returns {boolean} `true` if value has a `.catch` method; otherwise `false`.
	 * @see isPromise
	 * @link https://mdn.io/Promise.catch
	 */
	export function isCatchable(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Date`; otherwise, returns `false`.
	 * @param {Date} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isDate(value: Date): boolean;

	/**
	 * @param {*} value - the value to inspect
	 * @returns {boolean} `true` if value is instance of `Error`; otherwise `false`
	 * @link https://mdn.io/ErrorConstructor
	 */
	export function isError(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Function` or of type `function`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isFunction(value: any): boolean;

	/**
	 * Returns `true` if the value is an integer; otherwise `false`.
	 *
	 * @param {number} value - number to evaluate
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/Number.isInteger
	 */
	export function isInteger(value: number): boolean;

	/**
	 * Returns `true` if value is an instance of `Map`; otherwise, returns `false`.
	 * @param {Map} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isMap(value: Map<any, any>): boolean;

	/**
	 * Returns `true` if value is `NaN` (`Infinity`, `-Infinity`, `NaN`); otherwise, returns `false`. Based on [`Number.isNaN`](https://mdn.io/Number.isNaN).
	 *
	 * @param {number} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isNaN(value: number): boolean;

	/**
	 * Returns `true` if value is `null`, `undefined`, or `''`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 * @see thizz
	 */
	export function isNil(value: any): boolean;

	/**
	 * Returns `true` if value is `null`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isNull(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Number` or of type `number`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isNumber(value: any): boolean;

	/**
	 * Returns `true` if value is an object; otherwise, returns `false`.
	 * @param {object} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isObject(value: object): boolean;

	/**
	 * Returns `true` if value is an object literal; otherwise, returns `false`.
	 * @param {object} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isObjectLiteral(value: object): boolean;

	/**
	 * Returns `true` if value is an instance of `Promise`; otherwise, returns `false`.
	 * @param {Promise} value - target value to inspect
	 * @returns {boolean} `boolean`
	*/
	export function isPromise(value: Promise<any>): boolean;

	/**
	 * Returns `true` if value is an instance of `Proxy`; otherwise, returns `false`.
	 * @param {Proxy} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isProxy(value: ProxyConstructor): boolean;

	/**
	 * Returns `true` if value is an instance of `RegExp`; otherwise, returns `false`.
	 * @param {RegExp} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isRegExp(value: RegExp): boolean;

	/**
	 * Evaluate whether or not a specified value is both an integer, and less than
	 * or equal to the `MAX_SAFE_INTEGER` property of the `Number` object.
	 *
	 * **Note**: depends on `Number.isInteger` and `Math.abs`.
	 * @param {*} value - the value to inspect
	 * @returns {boolean} `boolean`
	 * @link https://mdn.io/Number.isSafeInteger
	 */
	export function isSafeInteger(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Set`; otherwise, returns `false`.
	 * @param {Set} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isSet(value: Set<any>): boolean;

	/**
	 * Returns `true` if value is an instance of `String` or is of type `string`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isString(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of the `String` object; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isStringObject(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `Symbol`; otherwise, returns `false`.
	 * @param {Symbol} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isSymbol(value: Symbol): boolean;

	/**
	 * @param {*} value - the value to inspect
	 * @returns {boolean} `true` if value has a `.then` method; otherwise `false`.
	 * @see isPromise
	 * @link https://mdn.io/Promise.then
	 */
	export function isThenable(value: any): boolean;

	/**
	 * Returns `true` if value is `undefined`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isUndefined(value: any): boolean;

	/**
	 * Returns `true` if value is an instance of `WeakMap`; otherwise, returns `false`.
	 * @param {*} value - target value to inspect
	 * @returns {boolean} `boolean`
	 */
	export function isWeakMap(value: WeakMap<any, any>): boolean;

	/**
	 * Returns `true` if value is an instance of `WeakSet`; otherwise, returns `false`.
	 * @param {*} value - `WeakSet` target to typecheck
	 * @returns {boolean} `boolean`
	 */
	export function isWeakSet(value: WeakSet<any>): boolean;
