import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from './types'
import xhr from './core/xhr'
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
  return buildURL(url!,params)
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


function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponseData(res.data)
  return res
}

/**
 * send the request
 * @param config
 */
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

export default axios
