import axios from 'axios'
import api from './api'

function disposeParam (param) {
  // 判断是否传参
  if (!param) {
    return ''
  }
  // 时间戳
  let timestamp = `?__timestamp=${Date.now()}&`
  // 参数转字符串
  Object.entries(param).forEach((item, index) => {
    if (index > Object.entries(param).length - 2) {
      return timestamp += item.join('=')
    }
    timestamp += item.join('=') + '&'
  })
  return timestamp
}

function get (url, param) {
  return new Promise((resolve, reject) => {
    let path = url + disposeParam(param)
    axios.get(path, {
      baseURL: api.HOST
    })
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export default {
  get
}
