// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Paginate from 'vuejs-paginate'

import { docCookies, localStorage } from '@/utils'

Vue.component('paginate', Paginate)

Vue.config.productionTip = false


//
// 根据路由 meta requestAuth:true 判断是否需要登录
router.beforeEach((to, from, next) => {
    /**
     * 用户在进入页面时存在登录状态，但在做操作时正好登录过期了；
     * 用户手动删除了cookie/本地storage并做操作；
     * 用户在未登录的情况下手动输入(或者从收藏夹进入)某个需要登录的路由
     * 用户在已登录的情况下进入登录页路由
     * https://github.com/doterlin/vue-example-login
     */
    if (to.meta.requestAuth) { // 目标路由需要登录权限
        console.log('Cookie[__csrf]:'+docCookies.hasItem('__csrf'))
        if( docCookies.hasItem('__csrf') ) {
            next()
        } else {
            // 中断路由
            next(false)
            
            // 进入登录页面
            // 或者弹出登录框？
            router.push({path: '/login'})
        }
    } else {
        // 无需权限则继续
        next()
    }
})
router.afterEach((route) => {
    // 更改document.title
    let docTitle = route.meta.title
    if (docTitle) {
        document.title = route.meta.title
    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
    created() {
        if( docCookies.hasItem('__csrf') ) {
            if ( localStorage.getter('CURRENT_USER_ID') ) {
                var userId = Number(localStorage.getter('CURRENT_USER_ID'))
                store.dispatch('setUserID', userId)
                store.dispatch('setCurrentUserProfile', userId)
            }
        }
    },
    methods: {
        playSong() {
            console.log('播放音乐')
        }
    }
})