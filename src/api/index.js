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
export function userProfile(uid) {
    return $http({
        method: 'get',
        url: '/user/detail',
        params: {
            uid
        }
    })
}
// 获取用户信息:歌单，收藏，mv, dj 数量
export function userInfo(uid) {
    return $http({
        method: 'get',
        url: '/user/subcount',
        params: {
            uid
        }
    })
}
// 用户歌单
export function userPlaylist(uid) {
    return $http({
        method: 'get',
        url: '/user/playlist',
        params: {
            uid
        }
    })
}
// 用户电台
export function userDj(uid) {
    return $http({
        method: 'get',
        url: '/user/dj',
        params: {
            uid
        }
    })
}
// 用户关注列表
// 必选参数:
// uid : 用户 id
// 可选参数:
// limit : 返回数量,默认为30
// offset : 偏移数量，用于分页,如: 如:(页数-1)*30, 其中 30 为 limit 的值,默认为0
export function userFollows(uid, limit, offset) {
    return $http({
        method: 'get',
        url: '/user/follows',
        params: {
            uid,
            limit,
            offset
        }
    })
}
// 用户粉丝列表
// 必选参数:
// uid : 用户 id
// 可选参数:
// limit : 返回数量,默认为30
// offset : 偏移数量，用于分页,如: 如:(页数-1)*30, 其中 30 为 limit 的值,默认为0
export function userFolloweds(uid, limit, offset) {
    return $http({
        method: 'get',
        url: '/user/followeds',
        params: {
            uid,
            limit,
            offset
        }
    })
}
// 用户动态
// 必选参数:
// uid : 用户 id
export function userEvent(uid) {
    return $http({
        method: 'get',
        url: '/user/event',
        params: {
            uid
        }
    })
}
// 用户播放记录
// 必选参数:
// uid : 用户 id
// 可选参数:
// type : type=1时只返回weekData, type=0时返回allData
export function userPlayRecord(uid, type) {
    return $http({
        method: 'get',
        url: '/user/record',
        params: {
            uid,
            type,
        }
    })
}

// 我的等级信息
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

// 电台详细
// 必选参数:
// rid: 电台 的 id
export function djDetail(rid) {
    return $http({
        method: 'get',
        url: '/dj/detail',
        params: {
            rid
        }
    })
}
// 电台节目
// 必选参数:
// rid: 电台 的 id
export function djProgram(rid) {
    return $http({
        method: 'get',
        url: '/dj/program',
        params: {
            rid
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

// 歌手单曲
// 必选参数:
// id: 歌手 id,可由搜索接口获得
export function artistSongs(id) {
    return $http({
        method: 'get',
        url: '/artists',
        params: {
            id
        }
    })
}
// 歌手MV
// 必选参数:
// id: 歌手 id
export function artistMv(id) {
    return $http({
        method: 'get',
        url: '/artist/mv',
        params: {
            id
        }
    })
}
// 歌手专辑
// 必选参数:
// id: 歌手 id
// 可选参数:
// limit: 取出数量,默认为50
// offset: 偏移数量,用于分页,如:(页数-1)*50, 其中 50 为 limit 的值,默认为0
export function artistAlbum(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/artist/album',
        params: {
            id,
            limit,
            offset
        }
    })
}
// 歌手描述
// 必选参数:
// id: 歌手 id
export function artistDesc(id) {
    return $http({
        method: 'get',
        url: '/artist/desc',
        params: {
            id
        }
    })
}
// 相似歌手
// 必选参数:
// id: 歌手 id
export function simiArtist(id) {
    return $http({
        method: 'get',
        url: '/simi/artist',
        params: {
            id
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
// 专辑评论
// 必选参数:
// id: 专辑 id
// 可选参数:
// limit: 取出评论数量,默认为20
// offset: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值
export function albumComment(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/comment/album',
        params: {
            id,
            limit,
            offset
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
// 相似MV
// 必选参数:
// id: 专辑 id
export function simiMv(mvid) {
    return $http({
        method: 'get',
        url: '/simi/mv',
        params: {
            mvid
        }
    })
}


// MV评论
// 必选参数:
// id: mv id
// 可选参数:
// limit: 取出评论数量,默认为20
// offset: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值
export function mvComment(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/comment/mv',
        params: {
            id,
            limit,
            offset
        }
    })
}


//
// 歌曲详细
// 必选参数:
// ids: 音乐 id,如 ids=347230
export function songDetail(ids) {
    return $http({
        method: 'get',
        url: '/song/detail',
        params: {
            ids,
        }
    })
}
// 歌曲评论
// 必选参数:
// id: 音乐 id
// 可选参数:
// limit: 取出评论数量,默认为20
// offset: 偏移数量,用于分页,如:(评论页数-1)*20, 其中 20 为 limit 的值
export function songComment(id, limit, offset) {
    return $http({
        method: 'get',
        url: '/comment/music',
        params: {
            id,
            limit,
            offset
        }
    })
}
// 相似歌曲
export function simiSong(id) {
    return $http({
        method: 'get',
        url: '/simi/song',
        params: {
            id,
        }
    })
}
// 歌词
// 必选参数:
// id: 音乐 id
export function songLyric(id) {
    return $http({
        method: 'get',
        url: '/lyric',
        params: {
            id,
        }
    })
}