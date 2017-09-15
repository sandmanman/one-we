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
                    <div class="srchsongst" v-if="type == 1 && this.searchResultData">
                        <div class="item f-cb h-flag" v-for="item in searchResultData.songs" :key="item.id">
                            <div class="td">
                                <div class="hd">
                                    <a class="ply " title="播放"></a>
                                </div>
                            </div>
                            <div class="td w0">
                                <div class="sn">
                                    <div class="text">
                                        <router-link
                                        :to="{name: 'songDetail', query: {id: item.id}}">
                                            <b :title="item.name">{{item.name}}</b>
                                        </router-link>
                                        <router-link
                                        v-if="item.mvid"
                                        :to="{name: 'mvDetail', query: {id: item.mvid}}"
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
                                    <span
                                    v-for="ar in item.artists"
                                    :key="ar.id">
                                        <router-link
                                        :to="{name: 'artistDetail', query: {id: ar.id}}">{{ar.name}}</router-link>
                                        &nbsp;
                                    </span>
                                    
                                </div>
                            </div>
                            <div class="td w2">
                                <div class="text">
                                    <router-link
                                    :to="{name: 'albumDetail', query: {id: item.album.id}}"
                                    :title="item.album.name"
                                    class="s-fc3">
                                        {{item.album.name}}
                                    </router-link>
                                </div>
                            </div>
                            <div class="td">{{item.duration | formatMusicDuration}}</div>
                        </div>
                    </div>

                    <!-- 歌手 -->
                    <div class="m-sgerlist m-sgerlist-1" v-if="type == 100 && this.searchResultData">
                        <ul class="m-cvrlst m-cvrlst-5 f-cb">
                            <li v-for="item in searchResultData.artists" :key="item.id">
                                <div class="u-cover u-cover-5">
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: item.id}}">
                                        <img :src="item.img1v1Url+'?param=130y130'">
                                        <span :title="item.name" class="msk"></span>
                                    </router-link>
                                </div>
                                <p>
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: item.id}}"
                                    :title="item.name"
                                    class="nm f-thide s-fc0">
                                        {{item.name}}
                                    </router-link>
                                    <router-link
                                    v-if="item.accountId"
                                    :to="{name: 'userHome', query: {id: item.accountId}}">
                                        <i class="u-icn u-icn-5"></i>
                                    </router-link>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <!-- 专辑 -->
                    <ul class="m-cvrlst m-cvrlst-alb3 f-cb" v-if="type == 10 && this.searchResultData">
                        <li v-for="item in searchResultData.albums" :key="item.id">
                            <div class="u-cover u-cover-alb2">
                                <router-link
                                :to="{name: 'albumDetail', query: {id: item.id}}">
                                    <img :src="item.picUrl+'?param=180y180'">
                                    <span title="哎" class="msk"></span>
                                </router-link>
                                <a title="播放" class="icon-play f-alpha f-fr " href="javascript:void(0)"></a>
                            </div>
                            <p class="dec">
                                <router-link
                                :to="{name: 'albumDetail', query: {id: item.id}}"
                                :title="item.name"
                                class="tit f-thide s-fc0">
                                    {{item.name}}
                                </router-link>
                            </p>
                            <p>
                                <span class="nm f-thide"
                                v-for="ar in item.artists"
                                :key="ar.id">
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: ar.id}}"
                                    class="s-fc3">
                                        {{ar.name}}
                                    </router-link>
                                    &nbsp;
                                </span>
                            </p>
                        </li>
                    </ul>

                    <!-- MV -->
                    <ul class="m-mvlist f-cb" v-if="type == 1004 && this.searchResultData">
                        <li v-for="item in searchResultData.mvs" :key="item.id">
                            <div class="cover f-pr">
                                <img :src="item.cover+'?param=159y90'">
                                <span :title="item.name" class="msk"></span>
                                <p class="tr u-msk u-msk-1">
                                    <span class="u-icn2 u-icn2-mv"></span>{{item.playCount}}</p>
                                    <p class="bl u-msk u-msk-2">{{item.duration | formatMusicDuration}}
                                </p>
                                <router-link
                                :to="{name: 'mvDetail', query: {id: item.id}}" class="link"></router-link>
                            </div>
                            <h4 class="title f-thide">
                                <router-link
                                :to="{name: 'mvDetail', query: {id: item.id}}"
                                :title="item.name"
                                class="s-fc0">
                                    {{item.name}}
                                </router-link>
                            </h4>
                            <h5 class="name f-thide">
                                <span class="f-thide" v-for="ar in item.artists" :key="ar.id">
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: ar.id}}"
                                    class="s-fc3">{{ar.name}}</router-link>
                                    &nbsp;
                                </span>
                            </h5>
                        </li>
                    </ul>

                    <!-- 歌单 -->
                    <table class="m-table m-table-2 m-table-2-cover" v-if="type == 1000 && this.searchResultData">
                        <tbody>
                            <tr class="h-flag" v-for="item in searchResultData.playlists" :key="item.id">
                                <td class="first w0">
                                    <div class="hd">
                                        <span class="ply " title="播放"></span>
                                    </div>
                                </td>
                                <td class="w7">
                                    <div class="u-cover u-cover-3">
                                        <router-link
                                        :to="{name: 'playlistDetail', query: {id: item.id}}">
                                            <img :src="item.coverImgUrl+'?param=180y180'">
                                            <span :title="item.name" class="msk"></span>
                                        </router-link>
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
                                                    <router-link
                                                    :to="{name: 'playlistDetail', query: {id: item.id}}">
                                                        {{item.name}}
                                                    </router-link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="w11 s-fc4">{{item.trackCount}}首</td>
                                <td class="w4">
                                    <div class="text">
                                        <span class="s-fc3">by</span>&nbsp;&nbsp;
                                        <router-link
                                        :to="{name: 'userHome', query: {id: item.creator.userId}}"
                                        class="s-fc3">
                                            {{item.creator.nickname}}&nbsp;
                                            <sup class="u-icn u-icn-84 "></sup>
                                        </router-link>
                                    </div>
                                </td>
                                <td class="w6 s-fc4">收藏：{{item.bookCount | formatPlayCount}}</td>
                                <td class="last w6 s-fc4">收听：{{item.playCount | formatPlayCount}}</td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 主播电台 -->
                    <ul class="m-rdilist f-cb" v-if="type == 1009 && this.searchResultData">
                        <li v-for="item in searchResultData.djRadios" :key="item.id">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            class="u-cover u-cover-rdi2">
                                <img :src="item.picUrl+'?param=200y200'">
                            </router-link>
                            <h3 class="f-fs2 f-thide">
                                <router-link
                                :to="{name: 'djRadioDetail', query: {id: item.id}}"
                                class="s-fc1">
                                    {{item.name}}
                                </router-link>
                            </h3>
                            <p class="f-thide s-fc4">
                                by 
                                <router-link :to="{name: 'userHome', query: {id: item.dj.userId}}">
                                    {{item.dj.nickname}}
                                </router-link>
                                <i class="icnfix u-icn u-icn-s-01 f-sep"></i>
                            </p>
                        </li>
                    </ul>

                    <!-- 用户 -->
                    <table class="m-table m-table-2 m-table-2-cover" v-if="type == 1002 && this.searchResultData">
                        <tbody>
                            <tr class="h-flag" v-for="item in searchResultData.userprofiles" :key="item.id">
                                <td class="first w7">
                                    <div class="u-cover u-cover-3">
                                        <router-link
                                        :to="{name: 'userHome', query: {id: item.userId}}">
                                            <img :src="item.avatarUrl+'?param=180y180'">
                                            <span class="msk" :title="item.nickname"></span>
                                        </router-link>
                                    </div>
                                </td>
                                <td>
                                    <div class="ttc">
                                        <router-link
                                        :to="{name: 'userHome', query: {id: item.userId}}"
                                        :title="item.nickname"
                                        class="txt f-fs1">
                                            {{item.nickname}}&nbsp;
                                            <sup class=" u-icn2 u-icn2-music2" v-if="item.userType == 4"></sup>
                                            <i class="icnfix u-icn" :class="{'u-icn-s-01': item.gender == 1, 'u-icn-s-02': item.gender == 2 }"></i>
                                        </router-link>
                                        </a>
                                    </div>
                                    <div class="dec s-fc4 f-thide">
                                        {{item.signature}}
                                    </div>
                                </td>
                                <td class="w9">
                                    <a class="u-btn u-btn-3 f-tdn" href="javascript:void(0)">
                                        <i>关注</i>
                                    </a>
                                </td>
                                <td class="w9 s-fc4">歌单：{{item.playlistCount}}</td>
                                <td class="last w9 s-fc4">粉丝：{{item.followeds}}</td>
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
import { formatSeconds, formatPlayCount } from '@/utils'
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
            if ( keywords ) {
                this.getSearchResult(keywords, type)
            }
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
        },
        formatMusicDuration(val) { // 音乐播放总时长格式
            return formatSeconds(val)
        },
        formatPlayCount(val) {
            return formatPlayCount(val)
        }
    }
}
</script>

<style>
</style>