<template>
    <div>
        <ul class="m-cvrlst m-cvrlst-alb4 f-cb" v-if="albumData">
            <li v-for="item in albumData" :key="item.id">
                <div class="u-cover u-cover-alb3" :title="item.name">
                    <img :src="item.picUrl+'?param=120y120'">
                    <router-link
                    :to="{name: 'albumDetail', query: {id: item.id}}" class="msk"></router-link>
                    <a class="icon-play f-alpha" href="javascript:;" title="播放"></a>
                </div>
                <p class="dec dec-1 f-thide2 f-pre" :title="item.name">
                    <router-link
                    :to="{name: 'albumDetail', query: {id: item.id}}" class="tit s-fc0">{{item.name}}</router-link>
                </p>
                <p><span class="s-fc3">{{item.publishTime | formatUpdateDate}}</span></p>
            </li>
        </ul>

        <template v-if="totalAlbum">
        <paginate
            :page-count="pageCount"
            :page-range="8"
            :margin-pages="1"
            :click-handler="pageCallback"
            :prev-text="'上一页'"
            :next-text="'下一页'"
            :container-class="'u-page'"
            :page-link-class="'page-item'"
            :prev-link-class="'page-prev'"
            :next-link-class="'page-next'">
        </paginate>
        </template>
    </div>
</template>

<script>
import { artistAlbum } from '@/api'
import { formatDate } from '@/utils'
export default {
    name: 'Album',
    data() {
        return {
            albumData: null,
            totalAlbum: null,
            pageLimit: 12,
        }
    },
    created() {
        this.getAlbum(this.$route.query.id, this.pageLimit)
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalAlbum/this.pageLimit)
        }
    },
    methods: {
        getAlbum(id, limit) {
            artistAlbum(id, limit).then(res => {
                if(res.data.code === 200) {
                    this.albumData = res.data.hotAlbums
                    this.totalAlbum = res.data.artist.albumSize
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        pageCallback(pageNum) {
            artistAlbum(this.$route.query.id, this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
                if(res.data.code === 200) {
                    this.albumData = res.data.hotAlbums
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
    filters: {
        formatUpdateDate(date) { // 发行时间日期格式
            return formatDate.yyyymmdd(date)
        }
    }
}
</script>


<style scoped>

</style>
