import { AxiosMethods, AxiosPromise, AxiosRequestConfig, AxiosResponse, RejectedFn, ResolvedFn } from '../types'
import dispatchRequest from './dispatch.request'
import InterceptorManager from './interceptor-manager'

interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>
  response: InterceptorManager<AxiosResponse>
}

interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise)
  rejected?: RejectedFn
}

/**
 * packaging the Axios
 */
export default class Axios implements AxiosMethods{
  interceptors: Interceptors;

  constructor() {
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    }
  }

  request(url: any,config?: any): AxiosPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }

    const chain: Array<PromiseChain<any>> = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ]

    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })

    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor)
    })

    let promise = Promise.resolve(config)
    while(chain.length) {

      const obj: PromiseChain<any> | undefined = chain.shift()
      const resolved = obj.resolved
      const rejected = obj.rejected
      promise = promise.then(resolved,rejected)
    }

    return dispatchRequest(config)
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'delete',
      url
    }));
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'get',
      url
    }))
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'head',
      url
    }))
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'options',
      url
    }))
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'patch',
      url,
      data
    }))
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'post',
      url,
      data
    }))
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'put',
      url,
      data
    }))
  }


}
