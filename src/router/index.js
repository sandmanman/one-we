/**
 * 路由配置
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Discover = resolve => require(['@/pages/discover'], resolve)
const Recommonded = resolve => require(['@/pages/discover/recommonded'], resolve)
const Toplist = resolve => require(['@/pages/discover/toplist'], resolve)
const Playlist = resolve => require(['@/pages/discover/playlist'], resolve)

const Login = resolve => require(['@/pages/login'], resolve)

const User  = resolve => require(['@/pages/user'], resolve)
const UserHome  = resolve => require(['@/pages/user/home'], resolve)
const UserFollows  = resolve => require(['@/pages/user/follows'], resolve)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Discover,
            meta: {
                title: '网易云音乐'
            }
        },{
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
                }
            ]
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
            component: User,
            redirect: '/user/home',
            meta: {
                requestAuth: true,
                title: '我的主页',
            },
            children: [
                {
                    path: 'home',
                    name: 'userHome',
                    component: UserHome,
                    meta: {
                        requestAuth: true,
                        title: '我的主页',
                    }
                },
                {
                    path: 'follows',
                    name: 'userFollows',
                    component: UserFollows,
                    meta: {
                        requestAuth: true,
                        title: '我的关注',
                    }
                }
            ]
        }
    ]
})