import axios from 'axios'
import { commonParams } from './config'
import { AxiosResponse } from 'axios'
const instance = axios.create({
  timeout: 1000 * 60
})

instance.interceptors.request.use(config => {
  console.log("config", config)
  config.url = formatUrl('/music/api/' + config.url)
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

function formatUrl(url: string) {
  return url.replace('//', '/')
}