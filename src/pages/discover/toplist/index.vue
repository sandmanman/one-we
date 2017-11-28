<template>
    <div class="g-bd3 g-bd3-1 f-cb">
        <!-- menu S -->
        <div class="g-sd3 g-sd3-l">
            <div class="n-minelst n-minelst-2">
                <h2 class="f-ff1">云音乐特色榜</h2>
                <ul class="f-cb">
                    <router-link :to="{name: 'toplist', query: {id:3}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="云音乐飙升榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">云音乐飙升榜</span></p>
                            <p class="s-fc4">每天更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:0}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40" alt="云音乐新歌榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">云音乐新歌榜</span></p>
                            <p class="s-fc4">每天更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:2}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40" alt="网易原创歌曲榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">网易原创歌曲榜</span></p>
                            <p class="s-fc4">每周四更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:1}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40" alt="云音乐热歌榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">云音乐热歌榜</span></p>
                            <p class="s-fc4">每周四更新</p>
                        </a>
                    </router-link>
                </ul>

                <h2 class="scd f-ff1">全球媒体榜</h2>
                <ul class="f-cb">
                    <router-link :to="{name: 'toplist', query: {id:4}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/4mh2HWH-bd5sRufQb-61bg==/3302932937414659.jpg?param=40y40" alt="云音乐电音榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">云音乐电音榜</span></p>
                            <p class="s-fc4">每周五更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:5}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40" alt="UK排行榜周榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">UK排行榜周榜</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:6}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40" alt="美国Billboard周榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">美国Billboard周榜</span></p>
                            <p class="s-fc4">每周三更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:21}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=40y40" alt="Beatport全球电子舞曲榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">Beatport全球电子舞曲榜</span></p>
                            <p class="s-fc4">每周四更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:19}}" tag="li" exact class="mine" active-class="z-selected">
                        <a href="/discover/toplist?id=19" class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg?param=40y40" alt="法国 NRJ Vos Hits 周榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">法国 NRJ Vos Hits 周榜</span></p>
                            <p class="s-fc4">每周五更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:7}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=40y40" alt="KTV唛榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">KTV唛榜</span></p>
                            <p class="s-fc4">每周五更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:8}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=40y40" alt="iTunes榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">iTunes榜</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:10}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=40y40" alt="日本Oricon周榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span href="/discover/toplist?id=10" class="s-fc0">日本Oricon周榜</span></p>
                            <p class="s-fc4">每周三更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:9}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40" alt="Hit FM Top榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">Hit FM Top榜</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:20}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=40y40" alt="台湾Hito排行榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">台湾Hito排行榜</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:14}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40" alt="中国TOP排行榜（港台榜）">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">中国TOP排行榜（港台榜）</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:15}}" tag="li" exact class="mine" active-class="z-selected">
                        <a href="/discover/toplist?id=15" class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40" alt="中国TOP排行榜（内地榜）">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">中国TOP排行榜（内地榜）</span></p>
                            <p class="s-fc4">每周一更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:16}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40" alt="香港电台中文歌曲龙虎榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">香港电台中文歌曲龙虎榜</span></p>
                            <p class="s-fc4">每周五更新</p>
                        </a>
                    </router-link>
                    <router-link :to="{name: 'toplist', query: {id:18}}" tag="li" exact class="mine" active-class="z-selected">
                        <a class="item f-cb">
                            <div class="left">
                                <span class="avatar">
                                    <img src="http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg?param=40y40" alt="中国嘻哈榜">
                                    <span class="msk"></span>
                                </span>
                            </div>
                            <p class="name"><span class="s-fc0">中国嘻哈榜</span></p>
                            <p class="s-fc4">每周五更新</p>
                        </a>
                    </router-link>
                </ul>
            </div>
        </div>
        <!-- menu End -->


        <div class="g-mn3">
            <div class="g-mn3c" v-if="toplist">
                <!-- header -->
                <div class="g-wrap">
                    <div class="m-info m-info-rank f-cb">
                        <div class="cover u-cover u-cover-rank">
                            <img :src="toplist.playlist.coverImgUrl+'?param=150y150'">
                            <span class="msk"></span>
                        </div>
                        <div class="cnt">
                            <div class="cntc m-info">
                                <div class="hd f-cb">
                                    <h2 class="f-ff2">{{toplist.playlist.name}}</h2>
                                </div>
                                <div class="user f-cb">
                                    <i class="u-icn u-icn-57"></i>
                                    <span class="sep s-fc3">最近更新：{{toplist.playlist.trackUpdateTime | formatToplistUpdateDate}}</span>
                                    <span class="s-fc4">（每天更新）</span>
                                </div>
                                <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl">
                                        <i><em class="ply"></em>播放</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>
                                    <a class="u-btni u-btni-fav" href="javascript:;"><i>({{toplist.playlist.subscribedCount}})</i></a>
                                    <a class="u-btni u-btni-share" href="javascript:;"><i>({{toplist.playlist.shareCount}})</i></a>
                                    <a class="u-btni u-btni-dl" href="javascript:;"><i>下载</i></a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt j-cmt">
                                        <i>(<span>{{toplist.playlist.commentCount}}</span>)</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="g-wrap12">
                    <!-- 歌曲列表 S -->
                    <div class="u-title u-title-1 f-cb">
                        <h3><span class="f-ff2">歌曲列表</span></h3>
                        <span class="sub s-fc3"><span>{{toplist.playlist.trackCount}}</span>首歌</span>
                        <div class="more s-fc3">播放：<strong class="s-fc6">{{toplist.playlist.playCount}}</strong>次</div>
                    </div>
                    <div id="song-list-pre-cache">
                        <div class="j-flag">
                            <table class="m-table m-table-rank">
                                <thead>
                                    <tr>
                                        <th class="first w1"></th>
                                        <th><div class="wp">标题</div></th>
                                        <th class="w2-1"><div class="wp">时长</div></th>
                                        <th class="w3"><div class="wp">歌手</div></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(item, index) in top3" :key="item.id">
                                        <td>
                                            <div class="hd">
                                                <span class="num">{{index+1}}</span>
                                                <div class="rk ">
                                                    <span class="ico u-icn u-icn-73 s-fc9">5</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="rank">
                                            <div class="f-cb">
                                                <div class="tt">
                                                    <a :href="'/song?id='+item.id">
                                                        <img class="rpic" :src="item.al.picUrl+'?param=50y50&amp;quality=100'">
                                                    </a>
                                                    <span class="ply ">&nbsp;</span>
                                                    <div class="ttc">
                                                        <span class="txt">
                                                            <router-link
                                                            :to="{name: 'songDetail', query: {id: item.id}}">
                                                                <b :title="item.name + '- ('+ item.al[0] +')'">{{item.name}}</b>
                                                            </router-link>
                                                            <span v-if="item.al[0]" :title="item.al[0]" class="s-fc8">
                                                                - {{item.al[0]}}
                                                            </span>
                                                            <router-link
                                                            v-if="item.mvid"
                                                            :to="{name: 'mvDetail', query: {id: item.mvid}}"
                                                            title="播放mv"
                                                            class="mv">MV</router-link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class=" s-fc3">
                                            <span class="u-dur ">{{item.duration | formatMusicDuration}}</span>
                                            <div class="opt hshow">
                                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                                <span class="icn icn-fav" title="收藏"></span>
                                                <span class="icn icn-share" title="分享">分享</span>
                                                <span class="icn icn-dl" title="下载"></span>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="text">
                                                <span v-for="(name, index) in item.artists" :key="index" :title="name.name">
                                                    <a class="" :href="'/artist?id='+name.id">{{name.name}}</a>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <!-- / tr -->


                                    <tr v-for="(item, index) in topOther" :key="index">
                                        <td>
                                            <div class="hd">
                                                <span class="num">{{index+4}}</span>
                                                <div class="rk ">
                                                    <span class="u-icn u-icn-75"></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="f-cb">
                                                <div class="tt">
                                                    <span class="ply ">&nbsp;</span>
                                                    <div class="ttc">
                                                        <span class="txt">
                                                            <router-link
                                                            :to="{name: 'songDetail', query: {id: item.id}}">
                                                                <b :title="item.name + '- ('+ item.al[0] +')'">{{item.name}}</b>
                                                            </router-link>
                                                            <span v-if="item.al[0]" :title="item.al[0]" class="s-fc8">
                                                                - {{item.al[0]}}
                                                            </span>
                                                            <router-link
                                                            v-if="item.mvid"
                                                            :to="{name: 'mvDetail', query: {id: item.mvid}}"
                                                            title="播放mv"
                                                            class="mv">MV</router-link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class=" s-fc3">
                                            <span class="u-dur ">{{item.duration | formatMusicDuration}}</span>
                                            <div class="opt hshow">
                                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                                <span class="icn icn-fav" title="收藏"></span>
                                                <span class="icn icn-share" title="分享">分享</span>
                                                <span class="icn icn-dl" title="下载"></span>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="text">
                                                <span v-for="(name, index) in item.artists" :key="index" :title="name.name">
                                                    <a class="" :href="'/artist?id='+name.id">{{name.name}}</a>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>



                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- 歌曲列表 End -->

                    <!-- 评论 S -->
                    <div class="n-cmt">
                        <comment 
                        :totalComment="totalComment" 
                        :comments="comments" 
                        :hotComments="hotComments"></comment>
                    </div>
                    <!-- 评论 End -->
                    
                    <template v-if="totalComment">
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

        </div>
    </div>
</template>

<script>
import Comment from '@/components/comment/Comment'
import { toplist, commentToplist } from '@/api'
import { formatDate, formatSeconds} from '@/utils'
export default {
    name: 'Toplist',
    components: {
        Comment
    },
    data() {
        return {
            toplistID: null,
            toplist: null,
            top3: null,
            topOther: null,
            toplistCommentId: null,
            hotComments: null,
            comments: null,
            totalComment: null,
            pageLimit: 20,
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalComment/this.pageLimit)
        }
    },
    created() {
        if ( this.$route.query.id ) {
            this.toplistID = this.$route.query.id
        } else {
            this.toplistID = 3
        }
        this.getToplist(this.toplistID)
    },
    watch: {
        '$route' (to, from) {
            // 监听路由参数的变化
            this.getToplist(this.$route.query.id)
            this.firstMenuActive = false
            this.totalComment = null
            document.body.scrollTop = 0
        }
    },
    methods: {
        getToplist(id) {
            toplist(id).then(res => {
                if( res.data.code === 200 ) {
                    this.toplist = res.data
                    this.top3 = res.data.playlist.tracks.slice(0,3)
                    this.topOther = res.data.playlist.tracks.slice(3)

                    var commentId = res.data.playlist.commentThreadId.replace(/A_PL_0_/g, '')
                    this.toplistCommentId = commentId

                    // 请求该排行榜下的评论
                    this.getComment(this.toplistCommentId)
                } else {
                    console.error('数据获取错误')
                }
                
            }).catch(error => {
                console.log(error)
            })
        },
        getComment(id) {
            commentToplist(id).then(res => {
                if( res.data.code === 200 ) {
                    this.hotComments = res.data.hotComments
                    this.comments = res.data.comments
                    this.totalComment = res.data.total
                } else {
                    console.error(res.data.code)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        setMenuActive() {
            var menuEl = document.querySelectorAll('li.mine a'),
                locationParamId = getUrlParam('id', window.location.href)
            for (var i= 0, l = menuEl.length; i< l; i++ ) {
                var hid = getUrlParam('id', menuEl[i].href)
                if ( hid === locationParamId ) {
                    
                    console.log(getUrlParam('id', menuEl[i].href))
                    console.log(menuEl[i].parentNode)
                    
                }
                
            }
        },
        pageCallback(pageNum) {
            commentToplist(this.toplistCommentId, this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
                if(res.data.code === 200) {
                    this.comments = res.data.comments
                } else {
                    console.error('数据获取错误')
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
    filters: {
        formatToplistUpdateDate(date) { // 排行榜更新日期格式
            return formatDate.mmdd(date)
        },
        formatMusicDuration(val) { // 音乐播放总时长格式
            return formatSeconds(val)
        },
        formatCommentTime(date) { // 评论时间格式
            return formatDate.fullDate(date)
        }
    }
}
</script>

<style>

</style>