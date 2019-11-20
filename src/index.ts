import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL, transformRequest } from './helpers/utils'

/**
 * process the config before the request sending
 * @param config
 */
function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
  console.log(config.data)
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
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
