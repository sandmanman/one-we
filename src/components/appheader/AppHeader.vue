<template>
    <div class="g-topbar">
        <div class="m-top">
            <div class="wrap">
                <h1 class="logo"><a href="/#">网易云音乐</a></h1>

                <!-- 导航 -->
                <ul class="m-nav j-tflag">
                    <li class="fst">
                        <span>
                            <router-link :to="{name: 'discover'}" active-class="z-slt" class="z-slt">
                                <em>发现音乐</em><sub class="cor">&nbsp;</sub>
                            </router-link>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="#">
                                <em>我的音乐</em><sub class="cor">&nbsp;</sub>
                            </a>
                        </span>
                    </li>
                    <li class="lst">
                        <span>
                            <a href="#">
                                <em>朋友</em><sub class="cor">&nbsp;</sub>
                            </a>
                        </span>
                    </li>
                </ul>

                <!-- 登录 -->
                <div class="m-tophead f-pr j-tflag" v-if="!userProfile">
                    <a href="#" class="link">登录</a>
                    <div class="m-tlist j-uflag">
                        <div class="inner">
                            <ul class="f-cb">
                                <li class="lb">
                                    <router-link :to="{ name: 'login'}" class="itm-1"><i class="icn icn-mb"></i><em>手机号登录</em></router-link>
                                </li>
                            </ul>
                        </div>
                        <i class="arr"></i>
                    </div>
                </div>

                <!-- 登录后 -->
                <template v-else>
                <div class="m-tophead f-pr j-tflag">
                    <div class="head f-fl f-pr">
                        <img :src="userProfile.profile.avatarUrl + '?param=30y30'">
                        <router-link :to="{ name: 'userHome', query: { id: userProfile.profile.userId }}" class="mask">
                        </router-link>
                        <i class="m-topmsg f-pa j-uflag">5</i>
                    </div>
                    <div class="m-tlist m-tlist-lged j-uflag">
                        <div class="inner">
                            <ul class="f-cb lb mg">
                                <li>
                                    <router-link :to="{ name: 'userHome', query: { id: userProfile.profile.userId }}" class="itm-1">
                                        <i class="icn icn-hm"></i>
                                        <em>我的主页</em>
                                        <i class="icon u-icn u-icn-68 f-alpha j-uflag"></i>
                                    </router-link>
                                </li>
                                <li>
                                    <a href="/user/level" class="itm-2">
                                        <i class="icn icn-lv"></i>
                                        <em>我的等级</em>
                                        <i class="new u-icn u-icn-78 j-uflag"></i>
                                    </a>
                                </li>
                            </ul>
                            <ul class="f-cb lt">
                                <li>
                                    <a class="itm-3" href="javascript:;" @click="logoutSubmit()">
                                        <i class="icn icn-ex"></i>
                                        <em>退出</em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <i class="arr"></i>
                    </div>
                </div>
                </template>

                <!-- 搜索 -->
                <div class="m-srch f-pr j-suggest">
                    <div class="srchbg">
                        <span class="parent">
                            <input type="text" class="txt j-flag" placeholder="音乐/电台/用户"
                            v-model="keyword"
                            @keyup="searchHandle">
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="m-subnav m-subnav-up f-pr j-tflag"></div>

        <!-- sub nav S -->
        <div class="m-subnav j-tflag">
            <div class="wrap f-pr">
                <ul class="nav">
                    <li>
                        <router-link :to="{name: 'recommonded'}" active-class="z-slt">
                            <em>推荐</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'toplist', query: {id:3}}" active-class="z-slt">
                            <em>排行榜</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'playlist'}" active-class="z-slt">
                            <em>歌单</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'djradio'}" active-class="z-slt">
                            <em>主播电台</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'artist'}" active-class="z-slt">
                            <em>歌手</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'album'}" active-class="z-slt">
                            <em>新碟上架</em>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- sub nav End -->

    </div>
</template>

<script>
import { docCookies, localStorage } from '@/utils'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AppHeader',
    data() {
        return {
            keyword: null
        }
    },
    created() {
        
    },
    computed: {
        ...mapGetters(['userProfile']),
    },
    methods: {
        ...mapActions(['logout']),
        logoutSubmit() {
            // 退出登录
            //
            // store action
            this.logout()
            // 跳转到主页
            window.location.href = '/'
        },
        searchHandle() {
            console.log('search')
        }
    }
}
</script>

<style>
</style>

