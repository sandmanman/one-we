<template>
    <h1>分类</h1>
</template>

<script>
import { djRecommendType } from '@/api'
export default {
    name: 'Category',
    data() {
        return {
            djData: null,
        }
    },
    created() {

    },
    watch: {
        '$route'(to, from, next) {
            this.getDJRecommendType(this.$route.query.id)
        }
    },
    methods: {
        getDJRecommendType(id) {
            // 分类推荐
            djRecommendType(id).then(res => {
                if ( res.data.code === 200 ) {
                    this.djData = res.data.djRadios
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

