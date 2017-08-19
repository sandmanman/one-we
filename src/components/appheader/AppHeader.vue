<template>
    <div class="g-topbar">
        <div class="m-top">
            <div class="wrap">
                <h1 class="logo"><a href="/#">网易云音乐</a></h1>

                <!-- 导航 -->
                <ul class="m-nav j-tflag">
                    <li class="fst">
                        <span>
                            <!-- 选中状态 a z-slt -->
                            <a href="/#">
                                <em>发现音乐</em><sub class="cor">&nbsp;</sub>
                            </a>
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
                <div class="m-tophead f-pr j-tflag" v-if="!userInfo">
                    <a href="#" class="link">登录</a>
                    <div class="m-tlist j-uflag">
                        <div class="inner">
                            <ul class="f-cb lb mg">
                                <li>
                                    <router-link :to="{ name: 'login'}" class="itm-1"><i class="icn icn-mb"></i><em>手机号登录</em></router-link>
                                </li>
                                <!-- <li><a class="itm-2" href="#"><i class="icn icn-wy"></i><em>网易邮箱帐号登录</em></a></li> -->
                            </ul>
                        </div>
                        <i class="arr"></i>
                    </div>
                </div>

                <!-- 登录后 -->
                <template v-else>
                <div class="m-tophead f-pr j-tflag">
                    <div class="head f-fl f-pr">
                        <img :src="userInfo.profile.avatarUrl + '?param=30y30'">
                        <a :href="'/user/home?id=' + userInfo.profile.userId" class="mask"></a>
                        <i class="icn u-icn u-icn-68 f-alpha"></i>
                    </div>
                    <a :href="'/user/home?id=' + userInfo.profile.userId" class="name f-thide f-fl f-tdn f-hide">{{userInfo.profile.nickname}}</a>
                    <div class="m-tlist m-tlist-lged j-uflag">
                        <div class="inner">
                            <ul class="f-cb lb mg">
                                <li>
                                    <router-link :to="{ name: 'userHome', params: { id: userInfo.profile.userId }}" class="itm-1">
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
                                <li>
                                    <a href="/member" class="itm-2">
                                        <i class="icn icn-mbr"></i>
                                        <em>会员中心</em>
                                    </a>
                                </li>
                            </ul>
                            <ul class="f-cb ltb mg">
                                <li>
                                    <a class="itm-2" href="/user/update">
                                        <i class="icn icn-st"></i>
                                        <em>个人设置</em>
                                    </a>
                                </li>
                                <li>
                                    <a class="itm-2" href="/import/kugou">
                                        <i class="icn icn-imt"></i>
                                        <em>导入歌单</em>
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

                <a class="m-msg f-pr j-tflag" href="/msg/#/private">
                    <i class="bub u-bub "><b class="f-alpha">2</b><em></em></i>
                </a>
                </template>

                <!-- 搜索 -->
                <div class="m-srch">
                    <div class="srchbg">
                        <span class="parent">
                            <input type="text" value="" placeholder="单曲/歌手/专辑/歌单/MV/用户">
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="m-subnav m-subnav-up f-pr j-tflag">
            <div class="shadow">&nbsp;</div>
        </div>
        <!-- sub nav S -->
        <div class="m-subnav">
            <div class="wrap">
                <ul class="nav">
                    <!-- 选中状态  a z-slt-->
                    <li><a href="#"><em>推荐</em></a></li>
                    <li><a href="#"><em>排行榜</em></a></li>
                    <li><a href="#"><em>歌单</em></a></li>
                    <li><a href="#"><em>主播电台</em></a></li>
                    <li><a href="#"><em>歌手</em></a></li>
                    <li><a href="#"><em>新碟上架</em></a></li>
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
            
        }
    },
    created() {
        
    },
    computed: {
        ...mapGetters(['userInfo']),
    },
    methods: {
        ...mapActions(['logout']),
        logoutSubmit() {
            // 退出登录
            //
            // 删除Cookie
            docCookies.removeItem('__csrf')
            console.log('Cookie[__csrf]:'+docCookies.hasItem('__csrf'))

            // store action
            this.logout()

            // 删除localStorage
            localStorage.remove('MineInfo')

            // 跳转到主页
            window.location.href = '/'
        }
    }
}
</script>

<style>
</style>

