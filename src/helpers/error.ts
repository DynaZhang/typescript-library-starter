import { AxiosRequestConfig, AxiosResponse } from '../types'


export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null | undefined
  request: any
  response?: AxiosResponse | undefined

  constructor(message: string, config: AxiosRequestConfig, code: string | null | undefined, request: any, response: AxiosResponse | undefined) {
    super(message)
    this.isAxiosError = true
    this.config = config
    this.code = code
    this.request = request
    this.response = response

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null | undefined,
  request?: any,
  response?: AxiosResponse | undefined
): AxiosError {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
