export * from 'thizz/isArray';
export * from 'thizz/isArrayBuffer';
export * from 'thizz/isArrayLike';
export * from 'thizz/isBigInt';
export * from 'thizz/isBoolean';
export * from 'thizz/isBuffer';
export * from 'thizz/isCatchable';
export * from 'thizz/isDate';
export * from 'thizz/isError';
export * from 'thizz/isFunction';
export * from 'thizz/isInteger';
export * from 'thizz/isMap';
export * from 'thizz/isNaN';
export * from 'thizz/isNil';
export * from 'thizz/isNull';
export * from 'thizz/isNumber';
export * from 'thizz/isObject';
export * from 'thizz/isObjectLiteral';
export * from 'thizz/isPromise';
export * from 'thizz/isProxy';
export * from 'thizz/isRegExp';
export * from 'thizz/isSafeInteger';
export * from 'thizz/isSet';
export * from 'thizz/isString';
export * from 'thizz/isStringObject';
export * from 'thizz/isSymbol';
export * from 'thizz/isThenable';
export * from 'thizz/isUndefined';
export * from 'thizz/isWeakMap';
export * from 'thizz/isWeakSet';


export function isTruthy (value) {
  return !(~[false, null, ''].includes(value));
}

export function isFalsy (value) {
  return !isTruthy(value);
}

export function isPrimitive (value) {
  return isNumber(value) || isString(value) || isBoolean(value);
}

export function isNumeric (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

export function isFinite (value) {
  return Number.isFinite(value);
}

export function isVoid (value) {
  return value === void 0;
}

export function isEmpty (value) {
  if(isArray(value)) {
    return value.length === 0;
  } else if(isObjectLiteral(value)) {
    return Object.keys(value).length === 0;
  } else if(isString(value)) {
    return value === '';
  } else {
    return value == null;
  }
}

export function isContract (fn, context) {
  return (context || window) ? fn.call(context || window) : fn();
}

export function isElement (mixed) {
  return (mixed instanceof Element || mixed instanceof Node || mixed instanceof DocumentElement || mixed instanceof HTMLDocument || mixed instanceof Window);
}

export function isPureElement (element) {
  return el.nodeType !== 3;
}

export function isTextNode (node) {
  return node.nodeType === 3;
}

export function isCommentNode (node) {
  return node.nodeType === 8;
}

export function isHTMLElement (element) {
  return element.nodeType === 1;
}

export function isWindow (value) {
  return (value instanceof Window || Object.prototype.toString.call(value) === '[object global]');
}
