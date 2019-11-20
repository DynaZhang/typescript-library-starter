import { encode, isDate, isPlainObject } from './tools'

/**
 * the process of url according the request url and the params
 * @param url
 * @param params
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }

  const parts: Array<string> = [];

  Object.keys(params).forEach((key) => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return   // 跳到下一层循环
    }
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }

    values.forEach((val) => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${key}=${encode((val))}`)
    })
  })

  let serializedParams = parts.join('&')

  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url;
}

/**
 * the process of request body
 * if the request body is the type of plain object, transform this to the type of string
 * @param data
 */
export function transformRequest (data: any): any {
  console.log(isPlainObject(data))
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}


