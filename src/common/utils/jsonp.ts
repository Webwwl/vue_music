import originJsonp from 'jsonp';

export default function jsonp(url: string, data: object, options: object) {
  return new Promise((resolve, reject) => {
    url += (url.includes('?') ? '&' : '?') + genParmasStr(data)
    originJsonp(url, options, function (err, responseData) {
      if (err) {
        reject(err)
      } else {
        resolve(responseData)
      }
    })
  })
}

function genParmasStr(data: object) {
  let res = ''
  for(let  [key, value] of Object.entries(data)) {
    res += `&${key}=${value === undefined ? '' : encodeURIComponent(value)}`
  }
  return res ? res.substring(1) : ''
}