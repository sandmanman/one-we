<template>
    <div class="g-bd">
        <div class="g-wrap n-srch">
            <div class="pgsrch f-pr j-suggest">
                <input type="text" class="srch j-flag" style="opacity: 1;" v-model="keywords" @keyup.enter="searchHandle(keywords, type)">
                <span class="j-flag" style="display:none;">&nbsp;</span>
                <a href="javascript:void(0)" class="btn j-flag" title="搜索" @click="searchHandle(keywords, type)">搜索</a>
            </div>

            <div class="snote s-fc4 ztag">
                搜索“{{keywords}}”，找到 <em class="s-fc6" v-if="searchResultData">{{resultCount}}</em> {{type | currentTypeName}}
            </div>

            <ul class="m-tabs m-tabs-srch f-cb ztag">
                
                <li class="fst">
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 1}}"
                    exact
                    active-class="z-slt">
                        <em>单曲</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 100}}"
                    exact
                    active-class="z-slt">
                        <em>歌手</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 10}}"
                    exact
                    active-class="z-slt">
                        <em>专辑</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 1004}}"
                    exact
                    active-class="z-slt">
                        <em>MV</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 1000}}"
                    exact
                    active-class="z-slt">
                        <em>歌单</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 1009}}"
                    exact
                    active-class="z-slt">
                        <em>主播电台</em>
                    </router-link>
                </li>
                <li>
                    <router-link
                    :to="{name: 'search', query: {keywords: keywords, type: 1002}}"
                    exact
                    active-class="z-slt">
                        <em>用户</em>
                    </router-link>
                </li>
            </ul>

            <div class="ztag j-flag">
                <div class="n-srchrst ztag">
                    <!-- 单曲 -->
                    <div class="srchsongst" v-if="type == 1">
                        <div class="item f-cb h-flag">
                            <div class="td">
                                <div class="hd">
                                    <a class="ply " title="播放"></a>
                                </div>
                            </div>
                            <div class="td w0">
                                <div class="sn">
                                    <div class="text">
                                        <router-link
                                        :to="{name: 'songDetail', query: {id: 29822014}}">
                                            <b title="听见下雨的声音">听见下雨的声音</b>
                                        </router-link>
                                        <router-link
                                        :to="{name: 'mvDetail', query: {id: 394168}}"
                                        title="MV"
                                        class="mv"></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="td">
                                <div class="opt hshow">
                                    <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                    <span class="icn icn-fav" title="收藏"></span>
                                    <span class="icn icn-share" title="分享"></span>
                                    <span class="icn icn-dl" title="下载"></span>
                                </div>
                            </div>
                            <div class="td w1">
                                <div class="text">
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: 6452}}">周杰伦</router-link>
                                </div>
                            </div>
                            <div class="td w2">
                                <div class="text">
                                    <router-link
                                    :to="{name: 'albumDetail', query: {id: 3084335}}"
                                    title="《哎呦，不错哦》"
                                    class="s-fc3">
                                        《哎呦，不错哦》
                                    </router-link>
                                </div>
                            </div>
                            <div class="td">04:39</div>
                        </div>
                    </div>

                    <!-- 歌手 -->
                    <div class="m-sgerlist m-sgerlist-1" v-if="type == 100">
                        <ul class="m-cvrlst m-cvrlst-5 f-cb">
                            <li>
                                <div class="u-cover u-cover-5">
                                    <a href="/artist?id=12174549">
                                    <img src="http://p1.music.126.net/AsIsebnxMgrOr7TBw9i7PA==/109951162807163368.jpg?param=130y130">
                                    <span title="哎哟小强" class="msk"></span>
                                    </a>
                                </div>
                                <p>
                                    <a class="nm f-thide s-fc0" href="/artist?id=12174549" title="哎哟小强">
                                        <span class="s-fc7">哎</span>哟小强
                                    </a>
                                    <a href="/user/home?id=268788981">
                                        <i class="u-icn u-icn-5"></i>
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <!-- 专辑 -->
                    <ul class="m-cvrlst m-cvrlst-alb3 f-cb" v-if="type == 10">
                        <li>
                            <div class="u-cover u-cover-alb2">
                                <a href="/album?id=35666326">
                                    <img src="http://p1.music.126.net/BAZWr6bpCSdkN5iQlMMSlg==/109951162955753000.jpg?param=180y180">
                                    <span title="哎" class="msk"></span>
                                </a>
                                <a title="播放" class="icon-play f-alpha f-fr " href="javascript:void(0)"></a>
                            </div>
                            <p class="dec">
                                <a href="/album?id=35666326" class="tit f-thide s-fc0" title="哎">
                                    <span class="s-fc7">哎</span>
                                </a>
                            </p>
                            <p>
                                <span class="nm f-thide" title="Ca$hFlow">
                                    <a href="/artist?id=809018" class="s-fc3">Ca$hFlow</a>
                                </span>
                            </p>
                        </li>
                    </ul>

                    <!-- MV -->
                    <ul class="m-mvlist f-cb" v-if="type == 1004">
                        <li>
                            <div class="cover f-pr">
                                <img src="http://p4.music.126.net/m_khyC-sLEhYc0AEBceLpQ==/1377688077271835.jpg?param=159y90">
                                <span title="哎呀" class="msk"></span>
                                <p class="tr u-msk u-msk-1">
                                    <span class="u-icn2 u-icn2-mv"></span>111143</p><p class="bl u-msk u-msk-2">03:48
                                </p>
                                <a class="link" href="/mv?id=5308814"></a>
                            </div>
                            <h4 class="title f-thide">
                                <a href="/mv?id=5308814" class="s-fc0" title="哎呀"><span class="s-fc7">哎</span>呀</a>
                            </h4>
                            <h5 class="name f-thide">
                                <span class="f-thide" title="王蓉">
                                    <a href="/artist?id=9622" class="s-fc3">王蓉</a>
                                </span>
                            </h5>
                        </li>
                    </ul>

                    <!-- 歌单 -->
                    <table class="m-table m-table-2 m-table-2-cover" v-if="type == 1000">
                        <tbody>
                            <tr class="h-flag">
                                <td class="first w0">
                                    <div class="hd">
                                        <span class="ply " title="播放"></span>
                                    </div>
                                </td>
                                <td class="w7">
                                    <div class="u-cover u-cover-3">
                                        <a href="/playlist?id=85581999">
                                            <img src="http://p1.music.126.net/dfJp9prLqOTwjCvteZu3VQ==/7870304232708478.jpg?param=180y180">
                                            <span title="【节奏布鲁斯】哎，听了就想跳舞了" class="msk"></span>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div class="f-cb">
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81" href="javascript:;" title="添加到播放列表"></a>
                                            <span class="icn icn-fav " title="收藏">收藏</span>
                                            <span class="icn icn-share" title="分享">分享</span>
                                        </div>
                                        <div class="tt">
                                            <div class="ttc">
                                                <span class="txt">
                                                    <a href="/playlist?id=85581999" title="【节奏布鲁斯】哎，听了就想跳舞了">
                                                        【节奏布鲁斯】
                                                        <span class="s-fc7">哎</span>，听了就想跳舞了
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="w11 s-fc4">35首</td>
                                <td class="w4">
                                    <div class="text">
                                        <span class="s-fc3">by</span>&nbsp;&nbsp;
                                        <a class="s-fc3" href="/user/home?id=55448171" title="双鱼脆脆">
                                            双鱼脆脆&nbsp;
                                            <sup class="u-icn u-icn-84 "></sup>
                                        </a>
                                    </div>
                                </td>
                                <td class="w6 s-fc4">收藏：4415</td>
                                <td class="last w6 s-fc4">收听：16万</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 主播电台 -->
                    <ul class="m-rdilist f-cb" v-if="type == 1009">
                        <li>
                            <a href="/djradio?id=6607001" class="u-cover u-cover-rdi2">
                                <img src="http://p1.music.126.net/uQG6LAbGDqENzWl_lxnsUw==/18550960185804866.jpg?param=200y200" alt="">
                            </a>
                            <h3 class="f-fs2 f-thide">
                                <a href="/djradio?id=6607001" class="s-fc1">
                                    Dj<span class="s-fc7">哎</span>小麦
                                </a>
                            </h3>
                            <p class="f-thide s-fc4">
                                by <a href="/user/home?id=116768631">-XMRD</a>
                                <i class="icnfix u-icn u-icn-s-01 f-sep"></i>
                            </p>
                        </li>
                    </ul>

                    <!-- 用户 -->
                    <table class="m-table m-table-2 m-table-2-cover" v-if="type == 1002">
                        <tbody>
                            <tr class="h-flag">
                                <td class="first w7">
                                    <div class="u-cover u-cover-3">
                                        <a href="/user/home?id=20557394">
                                        <img src="http://p1.music.126.net/JOgAFTLTNw8PC5ARaiafTQ==/7835119859832500.jpg?param=180y180">
                                        <span class="msk" title="哎_呦喂强"></span>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div class="ttc">
                                        <a href="/user/home?id=20557394" title="哎_呦喂强" class="txt f-fs1">
                                            <span class="s-fc7">哎</span>
                                            _呦喂强&nbsp;
                                            <sup class=" u-icn2 u-icn2-music2 "></sup>
                                            <i class="icnfix u-icn u-icn-s-01"></i>
                                        </a>
                                    </div>
                                    <div class="dec s-fc4 f-thide">
                                        东张西望，一无所长。四体不勤，五谷不分。不事劳作，一无所获。厌恶争执，不善言说。借酒消愁，不太能喝。
                                    </div>
                                </td>
                                <td class="w9">
                                    <a class="u-btn u-btn-3 f-tdn" href="javascript:void(0)">
                                        <i>关注</i>
                                    </a>
                                </td>
                                <td class="w9 s-fc4">歌单：34</td>
                                <td class="last w9 s-fc4">粉丝：952</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { search } from '@/api'
export default {
    name: 'Search',
    data() {
        return {
            keywords: null,
            type: 1,
            typeName: '',
            searchResultData: null,
        }
    },
    created() {
        this.keywords = this.$route.query.keywords
        this.type = this.$route.query.type
        
        this.getSearchResult(this.keywords, this.type)
    },
    computed: {
        resultCount() {
            var t = parseInt(this.type)
            var tc = 0
            if ( this.searchResultData ) {
                switch(t) {
                    case 1:
                        tc = this.searchResultData.songCount
                        break
                    case 100:
                        tc = this.searchResultData.artistCount
                        break
                    case 10:
                        tc = this.searchResultData.albumCount
                        break
                    case 1004:
                        tc = this.searchResultData.mvCount
                        break
                    case 1000:
                        tc = this.searchResultData.playlistCount
                        break
                    case 1009:
                        tc = this.searchResultData.djRadiosCount
                        break
                    case 1002:
                        tc = this.searchResultData.userprofileCount
                        break
                }
            }
            return tc
        }
    },
    watch: {
        '$route'(to, from) {
            this.keywords = this.$route.query.keywords
            this.type = this.$route.query.type

            this.getSearchResult(this.keywords, this.type)
        }
    },
    methods: {
        getSearchResult(keywords, type) {
            search(keywords, type).then(res => {

                if (res.data.code === 200) {
                    this.searchResultData = res.data.result
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        searchHandle(keywords, type) {
            this.getSearchResult(keywords, type)
        }
    },
    filters: {
        currentTypeName(type) {
            var t = type.toString(), tn
            switch(t) {
                case '1':
                    tn = '首单曲'
                    break
                case '100':
                    tn = '个歌手'
                    break
                case '10':
                    tn = '张专辑'
                    break
                case '1004':
                    tn = '首mv'
                    break
                case '1000':
                    tn = '个歌单'
                    break
                case '1009':
                    tn = '个节目'
                    break
                case '1002':
                    tn = '个用户'
                    break
            }

            return tn
        }
    }
}
</script>

<style>
</style>