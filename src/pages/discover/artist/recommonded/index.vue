<template>
    <div class="g-wrap">

        <div class="u-title f-cb">
            <h3><span class="f-ff2">入驻歌手</span></h3>
            <a href="/discover/artist/signed/" class="more s-fc3">更多 &gt;</a>
        </div>
        <div class="m-sgerlist">
            <ul class="m-cvrlst m-cvrlst-5 f-cb">
                <li>
                    <div class="u-cover u-cover-5">
                        <img src="http://p3.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130"><a href="/artist?id=10559" class="msk" title="张惠妹的音乐"></a>
                    </div>
                    <p>
                        <a href="/artist?id=10559" class="nm nm-icn f-thide s-fc0" title="张惠妹的音乐">张惠妹</a>
                        <a class="f-tdn" href="/user/home?id=29879272" title="张惠妹的个人主页"><i class="u-icn u-icn-5"></i></a>
                    </p>
                </li>
            </ul>
        </div>

        <div class="u-title f-cb">
            <h3><span class="f-ff2">热门歌手</span></h3>
        </div>
        <div class="m-sgerlist">
            <ul class="m-cvrlst m-cvrlst-5 f-cb">
                <template v-if="hotAartistsDataTop10">
                <li v-for="item in hotAartistsDataTop10" :key="item.id">
                    <div class="u-cover u-cover-5">
                        <img :src="item.img1v1Url+'?param=130y130'">
                        <a :title="item.name+'的音乐'" :href="'/artist?id='+item.id" class="msk"></a>
                    </div>
                    <p>
                        <a :href="'/artist?id='+item.id" class="nm nm-icn f-thide s-fc0" :title="item.name+'的音乐'">{{item.name}}</a>
                    </p>
                </li>
                </template>
                <li class="line"></li>

                <template v-if="hotAartistsData">
                <li class="sml" v-for="item in hotAartistsData" :key="item.id">
                    <a :href="'/artist?id='+item.id" class="nm nm-icn f-thide s-fc0" :title="item.name+'的音乐'">{{item.name}}</a>
                    &nbsp;
                    <a class="icn u-icn u-icn-5" v-if="item.accountId" :href="'/user/home?id='+item.accountId" title="杨宗纬的个人主页"></a>
                </li>
                </template>
            </ul>
        </div>

    </div>
</template>

<script>
import { hotAartists } from '@/api'
export default {
    name: 'ArtistRecommonded',
    data() {
        return {
            hotAartistsDataTop10: null,
            hotAartistsData: null
        }
    },
    created() {
        this.getHotAartists()
    },
    methods: {
        getHotAartists() {
            // 热门歌手
            hotAartists().then(res => {
                if ( res.data.code === 200 ) {
                    this.hotAartistsDataTop10 = res.data.artists.slice(0, 10)
                    this.hotAartistsData = res.data.artists.slice(10)
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

<style scoped>
.line {
    width: 100%;
    height: 1px;
}
</style>


