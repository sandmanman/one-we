//
// api request
//

// api整理
// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi


import $http from "./axios"

import { docCookies } from '@/utils'

const csrfToken = docCookies.getItem('__csrf')


// 首页banner
export function banner() {
    return $http({
        method: 'get',
        url: '/banner'
    })
}

// 首页热门推荐
export function hotRecommended() {
    return $http({
        method: 'get',
        url: '/personalized'
    })
}

// 首页个性化推荐（每日推荐歌单） 需要登录
export function personalRecommended() {
    return $http({
        method: 'get',
        url: '/recommend/resource'
    })
}

// 每日推荐歌曲 需要登录
export function personalTaste() {
    return $http({
        method: 'get',
        url: '/recommend/songs'
    })
}

// 新碟上架
// limit: 取出数量,默认为50
// offset: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0
export function newAlbum(limit, offset) {
    return $http({
        method: 'get',
        url: '/top/album',
        params: {
            offset: offset || 0,
            limit: limit || 50
        }
    })
}

// 排行榜
export function toplist(idx) {
    return $http({
        method: 'get',
        url: '/top/list',
        params: {
            idx
        }
    })
}


// 手机号登录
// 登录成功后可获取用户uid等信息
export function loginByMobile(phone, password) {
    return $http({
        method: 'get',
        url: '/login/cellphone',
        params: {
            phone,
            password
        }
    })
}

// 刷新登录状态
export function loginRefresh() {
    return $http({
        method: 'get',
        url: '/login/refresh'
    })
}

// 用户详情
export function userInfo(uid) {
    return $http({
        method: 'get',
        url: '/user/detail',
        params: {
            uid
        }
    })
}

// 用户等级信息
export function userLevel() {
    return $http({
        method: 'get',
        url: '/user/level',
    })
}

// 每日推荐歌单(需登录)
export function recommendResource() {
    return $http({
        method: 'get',
        url: '/recommend/resource',
    })
}

// 歌曲排行榜评论
// id的请求排行榜后得到commentThreadId
// 如/top/list?idx=6
export function commentToplist(id) {
    return $http({
        method: 'get',
        url: '/comment/toplist',
        params: {
            id
        }
    })
}