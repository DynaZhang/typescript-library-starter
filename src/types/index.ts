/**
 * define the Method that Axios Supports
 */
export type Method = 'get' | 'GET' |
  'delete' | 'DELETE' |
  'head' | 'HEAD' |
  'options' | 'OPTIONS' |
  'post' | 'POST'|
  'put' | 'PUT' |
  'patch' | 'PATCH'

/**
 * define the type of Axios Request
 */
export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any,
  headers?: any
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}

/**
 * define the type of Axios Response
 */
export interface AxiosResponse<T=any> {
  data: T,
  status: number
  statusText: string
  headers: any,
  config: AxiosRequestConfig,
  request: any
}


export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val:T):T | Promise<T>
}

export interface RejectedFn {
  (error:any):any
}

/**
 * define the errors that Axios throws
 */
export interface AxiosError extends Error{
  config: AxiosRequestConfig,
  code?: string,
  request: any,
  response: AxiosResponse,
  isAxiosError: boolean
}

/**
 * Axios returns the type of Promise
 */
export interface AxiosPromise<T=any> extends Promise<AxiosResponse<T>>{}

/**
 * define the methods that Axios should realise
 */
export interface AxiosMethods {
  request<T=any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  options<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

/**
 * define the instance of Axios
 */
export interface AxiosInstance extends AxiosMethods{
  <T=any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}
