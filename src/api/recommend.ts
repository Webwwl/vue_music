import requester from './request'
import { IRESPONSE } from './request'

const recommendParams = {
  platform: 'yqq.json',
  hostUin: 0,
  needNewCode: 0,
  inCharset: 'utf8',
  format: 'json',
  '-': 'recom' + (Math.random() + '').replace('0.', ''),
  data: {
    'comm': { 'ct': 24 },
    'category': { 'method': 'get_hot_category', 'param': { 'qq': '' }, 'module': 'music.web_category_svr' },
    'recomPlaylist': {
      'method': 'get_hot_recommend',
      'param': { 'async': 1, 'cmd': 2 },
      'module': 'playlist.HotRecommendServer'
    },
    'playlist': {
      'method': 'get_playlist_by_category',
      'param': { 'id': 8, 'curPage': 1, 'size': 40, 'order': 5, 'titleid': 8 },
      'module': 'playlist.PlayListPlazaServer'
    },
    'new_song': { 'module': 'newsong.NewSongServer', 'method': 'get_new_song_info', 'param': { 'type': 5 } },
    'new_album': {
      'module': 'newalbum.NewAlbumServer',
      'method': 'get_new_album_info',
      'param': { 'area': 1, 'sin': 0, 'num': 10 }
    },
    'new_album_tag': { 'module': 'newalbum.NewAlbumServer', 'method': 'get_new_album_area', 'param': {} },
    'toplist': { 'module': 'musicToplist.ToplistInfoServer', 'method': 'GetAll', 'param': {} },
    'focus': { 'module': 'QQMusic.MusichallServer', 'method': 'GetFocus', 'param': {} }
  }
}

export function getRecommend(data:object = {}) {
  data = Object.assign({}, recommendParams, data)
  return requester.request<any, IRESPONSE>({
    method: 'GET',
    url: '/music/api/getTopBanner',
    params: data
  })
}

const discParams = {
  platform: 'yqq',
  hostUin: 0,
  sin: 0,
  ein: 29,
  sortId: 5,
  needNewCode: 0,
  categoryId: 10000000,
  rnd: Math.random(),
  format: 'json'
}

export function getDiscList(data:object = {}) {
  data = Object.assign({}, discParams, data)
  return requester.request<any, IRESPONSE>({
    method: 'GET',
    url: '/music/api/getDiscList',
    params: data
  })
}



