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
                        <a :href="'/album?id='+item.id" class="msk" :title="item.name"></a>
                        <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放"></a>
                        <p class="dec">
                            <a class="tit f-thide s-fc0" :href="'/album?id='+item.id" :title="item.name">{{item.name}}</a>
                        </p>
                        <p class="f-thide">
                            <span class="nm f-thide" :title="item.artist.name">
                                <a :href="'/artist?id='+item.artist.id" class="s-fc3">{{item.artist.name}}</a>
                            </span>
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import { topAlbum } from '@/api'
export default {
    name: 'Album',
    data() {
        return {
            topAlbumData: null
        }
    },
    created() {
        this.getTopAlbum()
    },
    methods: {
        getTopAlbum() {
            topAlbum().then(res => {
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


