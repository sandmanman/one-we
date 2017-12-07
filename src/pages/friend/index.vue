<template>
<div>
    
    <div class="g-bd g-bd-full" v-if="!userID">
        <!-- 未登录显示 -->
        <div class="n-pglg2">
            <div class="welc s-fc3 f-fs1">你可以关注明星和好友品味他们的私房歌单<br>通过他们的动态发现更多精彩音乐</div>
            <router-link :to="{ name: 'login'}" class="btn">立即登录</router-link>
        </div>
    </div>

    <template v-else>
    <div class="g-bd5 f-cb">
        显示关注好友的动态
    </div>
    </template>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Friend',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['userID'])
    },
    methods: {

    }
}
</script>
