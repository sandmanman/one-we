<template>
    <div class="wrapper">

        <banner :bannerList="bannerList"></banner>

        <div class="g-bd1 f-cb">
            <div class="g-mn1">
                <div class="g-mn1c">
                    <div class="g-wrap3">

                        <!-- 热门推荐 -->
                        <hot-recommended :recommended="hotRecommendedList"></hot-recommended>
                        
                        <!-- 个性化推荐 -->
                        <recommend-resource :recommendResource="recommendResource"></recommend-resource>

                        <!-- 新碟上架 -->
                        <new-album :albums="newAlbum.data"></new-album>

                        <!-- 榜单 -->
                        <div class="n-bill">
                            <div class="v-hd2">
                                <a href="#" class="tit f-ff2 f-tdn">榜单</a>
                                <span class="more">
                                    <router-link
                                    :to="{name: 'toplist'}"
                                    class="s-fc3">更多</router-link><i class="cor s-bg s-bg-6">&nbsp;</i>
                                </span>
                            </div>
                            <div class="n-bilst" v-if="showToplist">
                                <toplist :toplist="biaosheng" :toplistId="3" v-if="biaosheng"></toplist>
                                <toplist :toplist="xinge" :toplistId="0" v-if="xinge"></toplist>
                                <toplist :toplist="yuanchuang" :toplistId="2" v-if="yuanchuang"></toplist>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 侧边 -->
            <div class="g-sd1">
                <!-- 用户信息 -->
                <my-profile></my-profile>
            </div>
        </div>


    </div>
</template>

<script>
    import Banner from './components/Banner'

    import HotRecommended from './components/HotRecommended'
    import RecommendResource from './components/RecommendResource'
    import NewAlbum from './components/NewAlbum'
    import Toplist from './components/Toplist'

    import MyProfile from './components/MyProfile'

    import {
        banner,
        hotRecommended,
        recommendResource,
        newAlbum,
        toplist
    } from '@/api'

    export default {
        name: 'Recommonded',
        components: {
            Banner,
            HotRecommended,
            RecommendResource,
            NewAlbum,
            Toplist,
            MyProfile
        },
        data() {
            return {
                bannerList: null,
                hotRecommendedList: null,
                recommendResource: null,
                newAlbum: {
                    limit: 10,
                    offset: 0,
                    data: null
                },
                showToplist: false,
                biaosheng: null,
                xinge: null,
                yuanchuang: null
            }
        },
        created() {
            this.getBanner()
            this.getHotRecommended()
            
            this.getRecommendResource()
            this.getNewAlbum(this.newAlbum.limit, this.newAlbum.offset)
            this.getToplist()
        },
        methods: {
            // 获取banner数据
            getBanner() {
                banner().then((res) => {
                    this.bannerList = res.data.banners
                })
            },
            // 热门推荐
            getHotRecommended() {
                hotRecommended().then((res) => {
                    this.hotRecommendedList = res.data.result
                })
            },
            // 个性化推荐
            getRecommendResource() {
                recommendResource().then(res => {
                    let resData = res.data.recommend
                    this.recommendResource = resData
                })
            },
            // 获取新碟上架
            getNewAlbum(limit, offset) {
                newAlbum(limit, offset).then((res) => {
                    this.newAlbum.data = res.data.albums
                })
            },
            // 榜单
            getToplist() {
                // 飙升榜
                var bs = () => {
                    toplist(3).then((res) => {
                        this.biaosheng = res.data
                    })
                }
                // 新歌榜
                var xg = () => {
                    toplist(0).then((res) => {
                        this.xinge = res.data
                    })
                }
                
                // 原创榜
                var yc = () => {
                    toplist(2).then((res) => {
                        this.yuanchuang = res.data
                    })
                }
                
                Promise.all([bs(), xg(), yc()]).then(()=>{
                    this.showToplist = true
                })   
            }
        }
    }
</script>

<style>

</style>