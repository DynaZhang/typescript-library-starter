import { AxiosMethods, AxiosPromise, AxiosRequestConfig } from '../types'
import dispatchRequest from './dispatch.request'

export default class Axios implements AxiosMethods{
  request(config: AxiosRequestConfig): AxiosPromise {
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
      url
    }))
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'post',
      url
    }))
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'put',
      url
    }))
  }


}
