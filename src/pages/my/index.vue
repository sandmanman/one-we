<template>
<div>
    
    <div class="g-bd g-bd-full" v-if="!userID">
        <!-- 未登录显示 -->
        <div class="n-pglg">
            <div class="pic">
                <h2>登录网易云音乐</h2>
                <router-link :to="{ name: 'login'}" class="btn">立即登录</router-link>
            </div>
        </div>
    </div>

    <template v-else>
    <div class="g-bd5 f-cb">
        显示我的
    </div>
    </template>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'My',
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
