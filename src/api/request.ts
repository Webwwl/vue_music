import axios from 'axios'
import { commonParams } from './config'
import { AxiosResponse } from 'axios'
const instance = axios.create({
  timeout: 1000 * 60
})

instance.interceptors.request.use(config => {
  config.url = formatUrl(config.url)
  config.params = Object.assign({}, commonParams, config.params)
  return config
})

instance.interceptors.response.use(response => {
  return response.data
})

export default instance

export enum RESPONSE_STATUS {
  STATUS_OK = 0,
}

export interface IRESPONSE {
  code: RESPONSE_STATUS,
  data: any
}

function formatUrl(url: string | undefined): string {
  if (url) {
    return url.replace('//', '/')
  } else {
    return ''
  }
}