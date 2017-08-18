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
                                <a :title="item.name" href="#" class="msk"></a>
                                <a href="javascript:;" class="icon-play f-alpha f-fr" title="播放"></a>
                            </div>
                            <p class="f-thide"><a :title="item.name" href="#" class="s-fc0 tit">{{item.name}}</a></p>
                            <p class="tit f-thide" >
                                <a class="s-fc3"
                                v-for="(artists, index) in item.artists"
                                :key="index"
                                :title="artists.name"
                                :href="'/artist?id=' + artists.id">{{artists.name}}</a>
                            </p>
                        </swiper-slide>
                        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
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
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: 5,
                spaceBetween: 2
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .swiper-swiper {
        overflow: visible;
        margin-top: 28px;
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
            left: -23px;
        }
        .swiper-button-next {
            right: -5px;
        }
    }
</style>


