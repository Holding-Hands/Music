import {request} from "./request";

export function getBanner() {
  return request({
    url:'/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  })
}

export function getSongList() {
  return request({
    url:'/splcloud/fcgi-bin/fcg_get_diss=by_tag.fcg'
  })
}
