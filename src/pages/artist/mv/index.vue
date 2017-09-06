<template>
    <ul class="m-cvrlst m-cvrlst-7 f-cb" v-if="mvData">
        <li v-for="item in mvData" :key="item.id">
            <div class="u-cover u-cover-7">
                <img :src="item.imgurl+'?param=137y103'">
                <router-link :to="{name: 'mvDetail', query: {id: item.id}}" class="msk"></router-link>
                <router-link :to="{name: 'mvDetail', query: {id: item.id}}" class="icon-play f-alpha"></router-link>
            </div>
            <p class="dec">
                <router-link :to="{name: 'mvDetail', query: {id: item.id}}" class="tit f-thide s-fc0">
                    {{item.name}}
                </router-link>
            </p>
        </li>
    </ul>
</template>

<script>
import { artistMv } from '@/api'
export default {
    name: 'MV',
    data() {
        return {
            mvData: null,
        }
    },
    created() {
        this.getMV(this.$route.query.id)
    },
    watch: {
        '$route'(to,from) {
            this.getMV(this.$route.query.id)
        }
    },
    methods: {
        getMV(id) {
            artistMv(id).then(res => {
                if(res.data.code === 200) {
                    this.mvData = res.data.mvs
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

<style>

</style>

