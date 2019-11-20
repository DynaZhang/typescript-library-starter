import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig) {
  const {data = null, url, method = 'get'} = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  console.log(config)
  request.send(data)
}
