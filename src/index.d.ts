import { isArray } from './isArray';
import { isArrayBuffer } from './isArrayBuffer';
import { isArrayLike } from './isArrayLike';
import { isBigInt } from './isBigInt';
import { isBoolean } from './isBoolean';
import { isBuffer } from './isBuffer';
import { isCatchable } from './isCatchable';
import { isDate } from './isDate';
import { isError } from './isError';
import { isFunction } from './isFunction';
import { isInteger } from './isInteger';
import { isMap } from './isMap';
import { isNaN } from './isNaN';
import { isNil } from './isNil';
import { isNull } from './isNull';
import { isNumber } from './isNumber';
import { isObject } from './isObject';
import { isObjectLiteral } from './isObjectLiteral';
import { isPromise } from './isPromise';
import { isProxy } from './isProxy';
import { isRegExp } from './isRegExp';
import { isSafeInteger } from './isSafeInteger';
import { isSet } from './isSet';
import { isString } from './isString';
import { isStringObject } from './isStringObject';
import { isSymbol } from './isSymbol';
import { isThenable } from './isThenable';
import { isUndefined } from './isUndefined';
import { isWeakMap } from './isWeakMap';
import { isWeakSet } from './isWeakSet';

export default {
	isArray,
	isArrayBuffer,
	isArrayLike,
	isBigInt,
	isBoolean,
	isBuffer,
	isCatchable,
	isDate,
	isError,
	isFunction,
	isInteger,
	isMap,
	isNaN,
	isNil,
	isNull,
	isNumber,
	isObject,
	isObjectLiteral,
	isPromise,
	isProxy,
	isRegExp,
	isSafeInteger,
	isSet,
	isString,
	isStringObject,
	isSymbol,
	isThenable,
	isUndefined,
	isWeakMap,
	isWeakSet,
};

declare module 'thizz' {
	export default {
		isArray,
		isArrayBuffer,
		isArrayLike,
		isBigInt,
		isBoolean,
		isBuffer,
		isCatchable,
		isDate,
		isError,
		isFunction,
		isInteger,
		isMap,
		isNaN,
		isNil,
		isNull,
		isNumber,
		isObject,
		isObjectLiteral,
		isPromise,
		isProxy,
		isRegExp,
		isSafeInteger,
		isSet,
		isString,
		isStringObject,
		isSymbol,
		isThenable,
		isUndefined,
		isWeakMap,
		isWeakSet,
	};
}
