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

/**
 * normalize the name of request header
 * @param headers
 * @param normalizeName
 */
export function normalizeHeaderName(headers: any, normalizeName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((name) => {
    if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}


export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
