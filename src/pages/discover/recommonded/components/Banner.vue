<template>
  <div class="n-ban">
    <div class="wrap">
      <div class="ban">
        <div class="ban-list">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in bannerList" :key="index">
              <img :src="item.pic">
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </swiper>
        </div>
      </div>

      <div class="download">
        <a href="http://music.163.com/#/download" target="_blank" class="btn">下载客户端</a>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'

    export default {
        name: 'Banner',
        components: {
            swiper,
            swiperSlide
        },
        props: {
            bannerList: {
                type: Array
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30,
                    effect: 'fade',
                    autoplay: 2500
                }
            }
        },
        methods: {

        }
    }
</script>

<style>
</style>