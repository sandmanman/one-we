<template>
    <div>
        <div class="new" v-if="hasQueryId">
            <div class="u-title f-cb">
                <h3><span class="f-ff2">优秀新电台</span></h3>
            </div>
            <ul class="m-rdilist f-cb" v-if="djRecommendData">
                <li v-for="item in djRecommendData" :key="item.id">
                    <a :href="'/djradio?id='+item.id" class="u-cover u-cover-rdi2">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </a>
                    <h3 class="f-fs2">
                        <a :href="'/djradio?id='+item.id" class="s-fc1" :title="item.name">{{item.name}}</a>
                    </h3>
                    <p class="f-thide2 s-fc4">{{item.rcmdtext}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { djRecommendType } from '@/api'
export default {
    name: 'Category',
    data() {
        return {
            djRecommendData: null,
            hasQueryId: true
        }
    },
    created() {
        if ( !this.$route.query.id ) {
            this.hasQueryId = !this.hasQueryId
        } else {
            this.hasQueryId = true
            this.getDJRecommendType(this.$route.query.id)
        }
    },
    watch: {
        '$route'(to, from, next) {
            if ( !this.$route.query.id ) {
                this.hasQueryId = !this.hasQueryId
            } else {
                this.hasQueryId = true
                this.getDJRecommendType(this.$route.query.id)
            }   
        }
    },
    methods: {
        getDJRecommendType(id) {
            // 分类推荐
            djRecommendType(id).then(res => {
                if ( res.data.code === 200 ) {
                    this.djRecommendData = res.data.djRadios.splice(0,5)
                } else {
                    console.error('数据获取出错了')
                }
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style>

</style>

