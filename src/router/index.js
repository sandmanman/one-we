/**
 * 路由配置
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 404
const PageNotFound =  resolve => require(['@/pages/404.vue'], resolve)

const Discover = resolve => require(['@/pages/discover'], resolve)
// 推荐
const Recommonded = resolve => require(['@/pages/discover/recommonded'], resolve)
// 排行
const Toplist = resolve => require(['@/pages/discover/toplist'], resolve)
// 歌单
const Playlist = resolve => require(['@/pages/discover/playlist'], resolve)
// 歌单详细
const PlaylistDetail = resolve => require(['@/pages/playlist'], resolve)

// 主播电台
const DJRadio = resolve => require(['@/pages/discover/djradio'], resolve)
const DJRadioHome = resolve => require(['@/pages/discover/djradio/home/index'], resolve)
const DJCategory = resolve => require(['@/pages/discover/djradio/category/index'], resolve)
// 电台详细
const DJRadioDetail  = resolve => require(['@/pages/djradio'], resolve)

// 歌手
const Artist = resolve => require(['@/pages/discover/artist'], resolve)
const ArtistRecommonded = resolve => require(['@/pages/discover/artist/recommonded'], resolve)
const ArtistSigned = resolve => require(['@/pages/discover/artist/signed'], resolve)
// 歌手详细
const ArtistDetail = resolve => require(['@/pages/artist'], resolve)
// 歌手热门50单曲
const ArtistHotSongs  = resolve => require(['@/pages/artist/hotsongs'], resolve)
// 歌手专辑
const ArtistAlbum  = resolve => require(['@/pages/artist/album'], resolve)
// 歌手MV
const ArtistMV  = resolve => require(['@/pages/artist/mv'], resolve)
// 歌手介绍
const ArtistDesc  = resolve => require(['@/pages/artist/desc'], resolve)

// 新碟
const Album = resolve => require(['@/pages/discover/album'], resolve)
// 专辑详细
const AlbumDetail = resolve => require(['@/pages/album'], resolve)

// 歌曲详细
const SongDetail  = resolve => require(['@/pages/song'], resolve)

// MV详细
const MVDetail  = resolve => require(['@/pages/mv'], resolve)

// 登录
const Login = resolve => require(['@/pages/login'], resolve)

// 用户
const User = resolve => require(['@/pages/user'], resolve)
const UserHome = resolve => require(['@/pages/user/home'], resolve)
const UserFollows = resolve => require(['@/pages/user/follows'], resolve)
const UserFans = resolve => require(['@/pages/user/fans'], resolve)
const UserEvent = resolve => require(['@/pages/user/event'], resolve)

// 搜索
const Search = resolve => require(['@/pages/search'], resolve)

// 我的音乐
const My = resolve => require(['@/pages/my'], resolve)

// 朋友
const Friend = resolve => require(['@/pages/friend'], resolve)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Discover,
            redirect: '/discover/recommonded',
            meta: {
                title: '网易云音乐'
            }
        },
        {
            path: '/discover',
            name: 'discover',
            redirect: '/discover/recommonded',
            component: Discover,
            meta: {
                title: '网易云音乐'
            },
            children: [
                {
                    path: 'recommonded',
                    name: 'recommonded',
                    component: Recommonded,
                    meta: {
                        title: '网易云音乐 推荐',
                    }
                }, {
                    path: 'toplist',
                    name: 'toplist',
                    component: Toplist,
                    meta: {
                        title: '网易云音乐 排行榜',
                    }
                }, {
                    path: 'playlist',
                    name: 'playlist',
                    component: Playlist,
                    meta: {
                        title: '网易云音乐 歌单',
                    }
                }, {
                    path: 'djradio',
                    name: 'djradio',
                    component: DJRadio,
                    redirect: 'djradio/recommonded',
                    children: [
                        {
                            path: 'recommonded',
                            name: 'recommondedDJRadio',
                            component: DJRadioHome,
                            meta: {
                                title: '网易云音乐 主播电台',
                            }
                        },
                        {
                            path: 'category',
                            name: 'category',
                            component: DJCategory,
                            meta: {
                                title: '网易云音乐 主播电台',
                            }
                        },
                    ]
                }, {
                    path: 'artist',
                    name: 'artist',
                    component: Artist,
                    redirect: 'artist/recommonded',
                    children: [
                        {
                            path: 'recommonded',
                            name: 'recommondedArtist',
                            component: ArtistRecommonded,
                            meta: {
                                title: '网易云音乐 推荐歌手',
                            }
                        },
                        {
                            path: 'signed',
                            name: 'signed',
                            component: ArtistSigned,
                            meta: {
                                title: '网易云音乐 入驻歌手',
                            }
                        }
                    ]
                }, {
                    path: 'album',
                    name: 'album',
                    component: Album,
                    meta: {
                        title: '网易云音乐 新碟',
                    }
                }
            ]
        },
        {
            path: '/playlist',
            name: 'playlistDetail',
            component: PlaylistDetail,
            meta: {
                title: '网易云音乐 歌单详细'
            }
        },
        {
            path: '/album',
            name: 'albumDetail',
            component: AlbumDetail,
            meta: {
                title: '网易云音乐 专辑详细'
            }
        },
        {
            path: '/artist',
            name: 'artistDetail',
            component: ArtistDetail,
            redirect: '/artist/songs',
            meta: {
                title: '网易云音乐 歌手详细'
            },
            children:[
                {
                    path: 'songs',
                    name: 'artistHotSongs',
                    component: ArtistHotSongs,
                    meta: {
                        title: '热门50单曲'
                    }
                },
                {
                    path: 'album',
                    name: 'artistAlbum',
                    component: ArtistAlbum,
                    meta: {
                        title: '所有专辑'
                    }
                },
                {
                    path: 'mv',
                    name: 'artistMV',
                    component: ArtistMV,
                    meta: {
                        title: '相关MV'
                    }
                },
                {
                    path: 'desc',
                    name: 'artistDesc',
                    component: ArtistDesc,
                    meta: {
                        title: '歌手介绍'
                    }
                }
            ]
        },
        {
            path: '/song',
            name: 'songDetail',
            component: SongDetail,
            meta: {
                title: '网易云音乐 歌曲详细'
            }
        },
        {
            path: '/mv',
            name: 'mvDetail',
            component: MVDetail,
            meta: {
                title: '网易云音乐 歌曲详细'
            }
        },
        {
            path: '/djradio',
            name: 'djRadioDetail',
            component: DJRadioDetail,
            meta: {
                title: '网易云音乐 电台'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '云音乐帐号登录'
            }
        },
        {
            path: '/user',
            name: 'user',
            component: User,
            redirect: '/user/home',
            meta: {
                title: '主页',
            },
            children: [
                {
                    path: 'home',
                    name: 'userHome',
                    component: UserHome,
                    meta: {
                        title: '主页',
                    }
                },
                {
                    path: 'follows',
                    name: 'userFollows',
                    component: UserFollows,
                    meta: {
                        title: '关注',
                    }
                },
                {
                    path: 'fans',
                    name: 'userFans',
                    component: UserFans,
                    meta: {
                        title: '粉丝',
                    }
                },
                {
                    path: 'event',
                    name: 'userEvent',
                    component: UserEvent,
                    meta: {
                        title: '动态',
                    }
                }
            ]
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
            meta: {
                title: '搜索'
            }
        },
        ,
        {
            path: '/my',
            name: 'my',
            component: My,
            meta: {
                title: '我的音乐'
            }
        },
        {
            path: '/friend',
            name: 'friend',
            component: Friend,
            meta: {
                title: '朋友'
            }
        },
        {
            path: "*",
            component: PageNotFound
        }
    ]
})