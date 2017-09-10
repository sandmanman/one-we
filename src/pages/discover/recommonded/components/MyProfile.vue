<template>
    <div>
        <div class="n-myinfo n-myinfo-1 s-bg s-bg-1" v-if="!userProfile">
            <p class="note s-fc3">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <router-link :to="{ name: 'login'}" class="btn s-bg s-bg-2 f-tdn">用户登录</router-link>
        </div>
        <!-- 登录后 -->
        <template v-else>
        <div class="n-myinfo s-bg s-bg-5">
            <div class="f-cb">
                <a href="#" class="head f-pr">
                    <img :src="userProfile.profile.avatarUrl + '?param=80y80'">
                </a>
                <div class="info">
                    <h4><a :href="'/user/home?id=' + userProfile.profile.userId" class="nm nm-icn f-fs1 f-ib f-thide">{{userProfile.profile.nickname}}</a></h4>
                    <p><a href="#" class="u-lv u-icn2 u-icn2-lv">{{userProfile.level}}<i class="right u-icn2 u-icn2-lvright"></i></a></p>
                    <div class="btnwrap f-pr">
                        <a href="javascript:;" class="sign u-btn2 u-btn2-2"><i>签 到</i></a>
                    </div>
                </div>
            </div>
            
            <ul class="dny s-fc3 f-cb">
                <li class="fst"><a href="#"><strong>{{userProfile.profile.eventCount}}</strong><span>动态</span></a></li>
                <li><a href="#"><strong>{{userProfile.profile.follows}}</strong><span>关注</span></a></li>
                <li class="lst"><a href="#"><strong>{{userProfile.profile.followeds}}</strong><span>粉丝</span></a></li>
            </ul>
        </div>
        </template>
    </div>
</template>

<script>
import { docCookies, localStorage } from '@/utils'
import { userLevel } from '@/api'
import { mapGetters } from 'vuex'
export default {
    name: 'MyInfo',
    data() {
        return {
            
        }
    },
    created() {
        
    },
    computed: {
        ...mapGetters(['userProfile']),
    },
    methods: {
        
    }
}
</script>

<style>

</style>


