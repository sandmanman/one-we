<template>
    <div class="g-bd">
        <div class="g-wrap n-alblist f-pr">
            <div class="u-title f-cb">
                <h3><span class="f-ff2">全部新碟</span></h3>
            </div>

            <ul class="m-cvrlst m-cvrlst-alb2 f-cb" v-if="topAlbumData">
                <li v-for="item in topAlbumData" :key="item.id">
                    <div class="u-cover u-cover-alb2">
                        <img :src="item.picUrl+'?param=130y130'">
                        <router-link :to="{name: 'albumDetail', query: {id:item.id}}" class="msk" :title="item.name"></router-link>
                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放"></a>
                        <p class="dec">
                            <router-link :to="{name: 'albumDetail', query: {id:item.id}}" class="tit f-thide s-fc0" :title="item.name">{{item.name}}</router-link>
                        </p>
                        <p class="f-thide">
                            <span class="nm f-thide" :title="item.artist.name">
                                <router-link :to="{name: 'artistDetail', query: {id:item.artist.id}}" class="s-fc3" :title="item.artist.name">{{item.artist.name}}</router-link>
                            </span>
                        </p>
                    </div>
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
    </div>
</template>

<script>
import { topAlbum } from '@/api'
export default {
    name: 'Album',
    data() {
        return {
            topAlbumData: null,
            totalAlbum: Number,
            pageLimit: 35,
        }
    },
    created() {
        this.getTopAlbum(this.pageLimit)
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalAlbum/this.pageLimit)
        }
    },
    methods: {
        getTopAlbum(limit, offset) {
            topAlbum(limit, offset).then(res => {
                if(res.data.code === 200) {
                    this.topAlbumData = res.data.albums
                    this.totalAlbum = res.data.total
                } else {
                    console.error('数据获取错误')
                }
            }).catch(error => {
                console.error(error)
            })
        },
        pageCallback(pageNum) {
            document.body.scrollTop = 0
            
            topAlbum(this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
                if(res.data.code === 200) {
                    this.topAlbumData = res.data.albums
                } else {
                    console.error('数据获取错误')
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


