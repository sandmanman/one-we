<template>
    <div class="g-bd">
        <div class="g-wrap p-prf" v-if="fansData">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2 s-fc3">粉丝</span></h3>
            </div>
        
            <ul class="m-fans f-cb">
                <li v-for="item in fansData" :key="item.userId">
                    <router-link
                    :to="{name: 'userHome', query: {id: item.userId}}"
                    :title="item.nickname"
                    class="ava f-pr">
                        <img :src="item.avatarUrl+'?param=60y60'">
                    </router-link>
                    <div class="info">
                        <p>
                            <router-link
                            :to="{name: 'userHome', query: {id: item.userId}}"
                            :title="item.nickname"
                            class="s-fc7 f-fs1 nm f-thide">
                                {{item.nickname}}
                            </router-link>
                            <i class="icn u-icn" :class="{'u-icn-s-01': item.gender == 1, 'u-icn-s-02': item.gender == 2}"></i>
                        </p>
                        <p>
                            <a href="/user/event?id=425643951">动态<em class="s-fc7">{{item.eventCount}}</em></a>
                            <span class="line">|</span>
                            <a href="/user/follows?id=425643951">关注<em class="s-fc7">{{item.follows}}</em></a>
                            <span class="line">|</span>
                            <a href="/user/fans?id=425643951">粉丝<em class="s-fc7">{{item.followeds}}</em></a>
                        </p>
                        <p class="s-fc3 f-thide">{{item.signature}}</p>
                    </div>
                    <div class="oper">
                        <a class="u-btn u-btn-7 f-tdn" href="#" v-show="false"><i>发私信</i></a>
                        <p class="s-fc4" v-show="false"><i class="u-icn u-icn-67"></i> 已关注</p>
                        <p class="s-fc4" v-show="false"><i class="u-icn u-icn-66"></i> 相互关注</p>
                        <a class="u-btn u-btn-8 f-tdn" href="#">关 注</a>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
import { userFolloweds } from '@/api'
export default {
    name: 'userFans',
    data() {
        return {
            fansData: null,
        }
    },
    created() {
        this.getFans(this.$route.query.id)
    },
    methods: {
        getFans(uid, limit, offset) {
            userFolloweds(uid, limit, offset).then(res => {
                if(res.data.code === 200) {
                    this.fansData = res.data.followeds
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style scoped>
.m-fans {
    width: 904px;
    border-bottom: 1px solid #d5d5d5;
}
.m-fans li {
    width: 408.5px;
}
.m-fans li:hover {
    background-color: #eee;
}
</style>

