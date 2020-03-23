export default class Singer {

  name: string

  id: string

  avatar: string

  constructor(msg: OrignSingerData) {
    this.name = msg.Fsinger_name
    this.id = msg.Fsinger_mid
    this.avatar = this.getAvatar()
  }

  getAvatar() {
    return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.id}.jpg?max_age=2592000`
  }
}

export interface OrignSingerData {
  Farea: string
  Fattribute_3: string
  Fattribute_4: string
  Fgenre: string
  Findex: string
  Fother_name: string
  Fsinger_id: string
  Fsinger_mid: string
  Fsinger_name: string
  Fsinger_tag: string
  Fsort: string
  Ftrend: string
  Ftype: string
  voc: string
}

const HOT_LEN = 10
const HOT_TITLE = '热门'

export interface SingerMapKeyItem {
  title: string
  items: Singer[]
}

export interface SingerMap {
  [index: string]: SingerMapKeyItem
}

export function normlizeSingerData(list: OrignSingerData[]) {
  const singerMap: SingerMap = {
    hot: {
      title: HOT_TITLE,
      items: []
    }
  }
  list.forEach((item, index) => {
    if(index < HOT_LEN) {
      singerMap.hot.items.push(new Singer(item))
    }
    const key = item.Findex
    if(!singerMap[key]) {
      singerMap[key] = {
        title: key,
        items: []
      }
    }
    singerMap[key].items.push(new Singer(item))
  })
  const hot = []
  let ret = []
  for(let key in singerMap) {
    if (key === 'hot') {
      hot.push(singerMap[key])
    } else if (/[a-zA-Z]/.test(key)) {
      ret.push(singerMap[key])
    }
  }
  ret = ret.sort((pre, curr) => pre.title.charCodeAt(0) - curr.title.charCodeAt(0))
  return hot.concat(ret)
}