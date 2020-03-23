import requester from './request'
import { IRESPONSE } from './request'

const singerParams = {
  channel: 'singer',
  page: 'list',
  key: 'all_all_all',
  pagesize: 100,
  pagenum: 1,
  hostUin: 0,
  needNewCode: 0,
  platform: 'yqq'
}

export function getSingerList(data:object = {}) {
  data = Object.assign({}, singerParams, data)
  return requester.request<any, IRESPONSE>({
    method: 'GET',
    url: '/v8/fcg-bin/v8.fcg',
    params: data
  })
}


