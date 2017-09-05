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
// id需要先请求排行榜后，得到 commentThreadId
export function commentToplist(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/comment/toplist',
        params: {
            id,
            limit,
            offset
        }
    })
}


//
// 歌单
// order: hot / new，默认hot
// cat: tag, 比如 "华语"、"古风" 、"欧美"、"流行",默认为"全部"
// limit: 取出评论数量,默认为20
export function playlist(order, cat, limit) {
    return $http({
        method: 'get',
        url: '/top/playlist',
        params: {
            order,
            cat,
            limit
        }
    })
}

//
// 歌单详细
// 必选参数:
// id : 歌单 id
export function playlistDetail(id) {
    return $http({
        method: 'get',
        url: '/playlist/detail',
        params: {
            id,
        }
    })
}

//
// 歌单评论
// 必选参数:
// id : 歌单 id
// 可选参数:
// limit: 取出评论数量,默认为20
// offset: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值
export function playlistComment(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/comment/playlist',
        params: {
            id,
            limit,
            offset,
        }
    })
}

//
// 相似歌单
// 必选参数:
// id: 歌曲 id
export function playlistSimi(id) {
    return $http({
        method: 'get',
        url: '/simi/playlist',
        params: {
            id,
        }
    })
}



// 节目分类
export function djCatelist() {
    return $http({
        method: 'get',
        url: '/dj/catelist',
    })
}

// 推荐节目
export function djRecommend() {
    return $http({
        method: 'get',
        url: '/program/recommend',
    })
}

// 电台-分类推荐
export function djRecommendType(id) {
    return $http({
        method: 'get',
        url: '/dj/recommend/type',
        params: {
            type: id
        }
    })
}


// 热门歌手
// 可选参数:
// limit: 取出数量,默认为50
// offset: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0
export function hotAartists(limit, offset) {
    return $http({
        method: 'get',
        url: '/top/artists',
        params: {
            limit,
            offset
        }
    })
}


// 新碟上架
// 可选参数:
// limit: 取出数量,默认为50
// offset: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0
export function topAlbum(limit, offset) {
    return $http({
        method: 'get',
        url: '/top/album',
        params: {
            limit,
            offset
        }
    })
}


// 专辑详细
// 必选参数:
// id: 专辑 id
export function albumDetail(id) {
    return $http({
        method: 'get',
        url: '/album',
        params: {
            id
        }
    })
}


// MV详细
// 必选参数:
// id: 专辑 id
export function mvDetail(mvid) {
    return $http({
        method: 'get',
        url: '/mv',
        params: {
            mvid
        }
    })
}