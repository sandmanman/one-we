import Vue from 'vue'
import Router from 'vue-router'

import Discover from '@/pages/discover'
import Login from '@/pages/login'
import User from '@/pages/user'
import UserHome from '@/pages/user/home'
import UserFollows from '@/pages/user/follows'

Vue.use(Router)

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
            component: Discover,
            meta: {
                title: '网易云音乐'
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