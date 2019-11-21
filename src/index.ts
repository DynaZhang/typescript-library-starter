import { AxiosPromise, AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL, processHeaders, transformRequest } from './helpers/utils'

/**
 * process the config before the request sending
 * @param config
 */
function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
  console.log(config)
}

/**
 * process the request url
 * @param config
 */
function transformURL (config: AxiosRequestConfig): string {
  const {url, params} = config
  return buildURL(url,params)
}

/**
 * process the request header
 * @param config
 */
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers={}, data } = config
  return processHeaders(headers,data)
}

/**
 * process the request body
 * @param config
 */
function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

/**
 * send the request
 * @param config
 */
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
}

export default axios
