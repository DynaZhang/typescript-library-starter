/**
 * judge whatever a variable is the type of date
 * @param val
 */
export function isDate(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Date]'
}

/**
 * judge whatever a variable is the type of object, incluing object, array, date, blob
 * @param val
 */
export function isObject(val: any): boolean {
  return val !== null && typeof val === 'object'
}

/**
 * judge whatever a variable is the type of plain object
 * @param val
 */
export function isPlainObject(val: any): boolean {
  console.log(Object.prototype.toString.call(val))
  return Object.prototype.toString.call(val) === '[object Object]'
}

/**
 * the support of special chars in request body, ex: $ , [ ] ~ %
 * @param val
 */
export function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/ig, ':')
    .replace(/%24/g, '$')
    .replace('/%2C/ig', ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}
