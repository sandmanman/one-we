<template>
    <div class="n-new">
        <div class="v-hd2">
            <a href="#" class="tit f-ff2 f-tdn">新碟上架</a>
            <span class="more"><a href="#" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
        </div>
        <div class="n-disk">
            <div class="inner">
                <div class="roll f-pr">
                    <swiper class="f-cb swiper-swiper" :options="swiperOption">
                        <swiper-slide v-for="(item, index) in albums" :key="index">
                            <div class="u-cover u-cover-alb1">
                                <img class="j-img" :src="item.blurPicUrl">
                                <router-link :to="{name: 'albumDetail', query: {id:item.id}}" class="msk" :title="item.name"></router-link>
                                <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放"></a>
                            </div>
                            <p class="f-thide">
                                <router-link :to="{name: 'albumDetail', query: {id:item.id}}" class="s-fc0 tit" :title="item.name">{{item.name}}</router-link>
                            </p>
                            <p class="tit f-thide">

                                <router-link 
                                class="s-fc3" 
                                v-for="(artists, index) in item.artists"
                                :key="index"
                                :to="{name: 'artistDetail', query: {id:artists.id}}" 
                                :title="artists.name">
                                    {{artists.name}}
                                </router-link>
                            </p>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'NewAlbum',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        albums: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 10,
                pagination: '.swiper-pagination',
                paginationClickable: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .n-disk .inner {
        padding-left: 0;
    }
    .roll {
        float: none;
        width: 650px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-swiper {
        margin-top: 28px;
        overflow: visible;
    }
    .swiper-wrapper {
        min-height: 143px;
        margin-left: 19px;
        margin-right: 16px;
    }
    .swiper-button-black {
        margin-top: -45px;
        background-size: 30%;
    }
    .swiper-button-prev {
        left: 0;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: auto;
        top: -23px;
    }
</style>


