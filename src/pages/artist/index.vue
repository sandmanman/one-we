<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c" v-if="artistData">
                <div class="g-wrap6">
                    <div class="n-artist f-cb">
                        <div class="btm">
                            <h2 class="sname f-thide sname-max">{{artistData.name}}</h2>
                            <h3 class="salias f-thide">{{artistData.alias[0]}}</h3>
                        </div>
                        <img :src="artistData.picUrl+'?param=640y300'">
                        <div class="mask f-alpha"></div>
                        
                        <router-link 
                        v-if="artistData.accountId"
                        :to="{name: 'user', query: {id: artistData.accountId}}"
                        class="btn-rz f-tid">Ta的个人主页</router-link>

                        <a v-if="artistData.followed" href="javascript:void(0)" class="btnfav btnfav-0 f-tid">收藏</a>
                        <a v-else href="javascript:void(0)" class="btnfav f-tid">收藏</a>
                    </div>

                    <ul class="m-tabs f-cb">
                        <li>
                            <router-link :to="{name: 'artistHotSongs', query: {id: artistData.id}}" active-class="z-slt">
                                <em>热门50单曲</em>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'artistAlbum', query: {id: artistData.id}}" active-class="z-slt">
                                <em>所有专辑</em>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'artistMV', query: {id: artistData.id}}" active-class="z-slt">
                                <em>相关MV</em>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'artistDesc', query: {id: artistData.id}}" active-class="z-slt">
                                <em>歌手介绍</em>
                            </router-link>
                        </li>
                    </ul>

                    <router-view></router-view>

                </div>
            </div>
        </div>

        <div class="g-sd4">
            <div class="g-wrap7">
                <h3 class="u-hd3">
                    <span class="f-fl">相似歌手</span>
                </h3>
                <ul class="m-hdlist f-cb" v-if="simiArtistData">
                    <li v-for="item in simiArtistData" :key="item.id">
                        <div class="hd">
                            <router-link
                            :to="{name: 'artistDetail', query: {id: item.id}}" 
                            :title="item.name">
                                <img :src="item.picUrl+'?param=50y50'">
                            </router-link>
                        </div>
                        <p>
                            <router-link
                            :to="{name: 'artistDetail', query: {id: item.id}}" 
                            :title="item.name" 
                            class="nm nm-icn f-ib f-thide">{{item.name}}</router-link>
                        </p>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import { artistSongs, simiArtist } from '@/api'
export default {
    name: 'Artist',
    data() {
        return {
            artistData: null,
            simiArtistData: null,
        }
    },
    created() {
        this.getArtistData(this.$route.query.id)
        this.getSimiArtist(this.$route.query.id)
    },
    watch: {
        '$route'(to,from) {
            this.getArtistData(this.$route.query.id)
            this.getSimiArtist(this.$route.query.id)
        }
    },
    methods: {
        getArtistData(id) {
            artistSongs(id).then(res => {
                if (res.data.code === 200) {
                    this.artistData = res.data.artist
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        getSimiArtist(id) {
            simiArtist(id).then(res => {
                if (res.data.code === 200) {
                    this.simiArtistData = res.data.artists.slice(0,6)
                } else {
                    console.error(res.data.code)
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
