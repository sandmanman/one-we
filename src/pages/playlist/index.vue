<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6" v-if="playlistData">
                    <!-- 歌单描述 S -->
                    <div class="m-info f-cb">
                        <div class="cover u-cover u-cover-dj">
                            <img :src="playlistData.coverImgUrl+'?param=200y200'" class="j-img">
                            <span class="msk"></span>
                        </div>

                        <div class="cnt">
                            <div class="cntc">
                                <div class="hd f-cb">
                                    <i class="f-fl u-icn u-icn-13"></i>
                                    <div class="tit">
                                        <h2 class="f-ff2 f-brk">{{playlistData.name}}</h2>
                                    </div>
                                </div>
                                <div class="user f-cb">
                                    <a class="face" :href="'/user/home?id='+playlistData.creator.userId">
                                        <img :src="playlistData.creator.avatarUrl+'?param=40y40'">
                                    </a>
                                    <span class="name">
                                        <a :href="'/user/home?id='+playlistData.creator.userId" class="s-fc7">{{playlistData.creator.nickname}}</a>
                                    </span>
                                    <sup class="u-icn u-icn-84 "></sup>
                                    <span class="time s-fc4">{{playlistData.createTime | formatUpdateDate}}&nbsp;创建</span>
                                </div>
                                <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放">
                                        <i><em class="ply"></em>播放</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>

                                    <a class="u-btni u-btni-fav u-btni-fav-dis" href="javascript:;" v-if="playlistData.subscribed">
                                        <i>({{playlistData.subscribedCount}})</i>
                                    </a>
                                    <a class="u-btni u-btni-fav" href="javascript:;" else>
                                        <i>({{playlistData.subscribedCount}})</i>
                                    </a>
                                    
                                    <a class="u-btni u-btni-share " href="javascript:;"><i>({{playlistData.shareCount}})</i></a>
                                    <a class="u-btni u-btni-dl " href="javascript:;"><i>下载</i></a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt ">
                                        <i>(<span>{{playlistData.commentCount}}</span>)</i>
                                    </a>
                                </div>
                                <div class="tags f-cb" v-if="playlistData.tags.length !== 0">
                                    <b>标签：</b>
                                    <router-link
                                    v-for="(value, index) in playlistData.tags" :key="index"
                                    :to="{name: 'playlist', query: {cat: value}}"
                                    class="u-tag"><i>{{value}}</i></router-link>
                                </div>
                                <p class="intr f-brk" v-if="playlistData.description">
                                    <b>介绍：</b>
                                    {{playlistData.description}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 歌单描述 S -->

                    <div class="n-songtb" v-if="tracksData">
                        <div class="u-title u-title-1 f-cb">
                            <h3>
                                <span class="f-ff2">歌曲列表</span>
                            </h3>
                            <span class="sub s-fc3"><span>{{tracksData.length}}</span>首歌</span>
                            <div class="more s-fc3">播放：<strong class="s-fc6">{{playlistData.playCount}}</strong>次</div>
                        </div>
                        <div>
                            <div class="j-flag">
                                <table class="m-table">
                                    <thead>
                                        <tr>
                                            <th class="first w1"><div class="wp">&nbsp;</div></th>
                                            <th><div class="wp">歌曲标题</div></th>
                                            <th class="w2"><div class="wp">时长</div></th>
                                            <th class="w3"><div class="wp">歌手</div></th>
                                            <th class="w4"><div class="wp">专辑</div></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in tracksData" :key="item.id">
                                            <td class="left">
                                                <div class="hd ">
                                                    <span class="ply ">&nbsp;</span><span class="num">{{index+1}}</span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div class="f-cb">
                                                    <div class="tt">
                                                        <div class="ttc">
                                                            <span class="txt">
                                                                <router-link
                                                                :to="{name: 'songDetail', query: {id: item.id}}">
                                                                    <b :title="item.name">{{item.name}}</b>
                                                                </router-link>

                                                                <router-link 
                                                                v-if="item.mv !== 0" 
                                                                :to="{name: 'mvDetail', query: {id: item.mv}}"
                                                                title="播放mv" 
                                                                class="mv">MV</router-link>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="s-fc3">
                                                <span class="u-dur ">{{item.dt | formatMusicDuration}}</span>
                                                <div class="opt hshow">
                                                    <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                                    <span class="icn icn-fav" title="收藏"></span>
                                                    <span class="icn icn-share" title="分享">分享</span>
                                                    <span class="icn icn-dl" title="下载"></span>
                                                </div>
                                            </td>
                                            <td class="">
                                                <div class="text">
                                                    <span v-for="item in item.ar" :key="item.id">
                                                        <router-link
                                                        :to="{name: 'artistDetail', query: {id: item.id}}">
                                                        {{item.name}}
                                                        </router-link>&nbsp;
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="text">
                                                    <router-link
                                                    :to="{name: 'albumDetail', query: {id: item.al.id}}"
                                                    :title="item.al.name">
                                                    {{item.al.name}}
                                                    </router-link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- 评论 S -->
                    <div class="n-cmt">
                        <comment 
                        :comments="comments" 
                        :hotComments="hotComments" 
                        :totalComment="totalComment"></comment>
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
import { playlistDetail, playlistComment } from '@/api'
import { formatDate, formatSeconds} from '@/utils'
export default {
    name: 'PlaylistDetail',
    components: {
        Comment
    },
    data() {
        return {
            playlistData: null,
            playlistId: null,
            tracksData: null,
            playlistSimiData: null,
            commentId: null,
            comments: null,
            hotComments: null,
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
        this.getPlaylistDetail(this.$route.query.id)
    },
    methods: {
        getPlaylistDetail(id) {
            playlistDetail(id).then(res => {
                if (res.data.code === 200) {
                    this.playlistData = res.data.playlist
                    this.playlistId = res.data.playlist.id
                    this.tracksData = res.data.playlist.tracks
                    this.commentId = res.data.playlist.commentThreadId.replace(/A_PL_0_/g, '')

                    // 请求该歌单下的评论
                    this.getComment(this.commentId)
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        getComment(id) {
            playlistComment(id).then(res => {
                if( res.data.code === 200 ) {
                    this.hotComments = res.data.hotComments
                    this.comments = res.data.comments
                    this.totalComment = res.data.total

                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        pageCallback(pageNum) {
            playlistComment(this.commentId, this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
                if(res.data.code === 200) {
                    this.comments = res.data.comments
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
    filters: {
        formatUpdateDate(date) { // 歌单创建日期格式
            return formatDate.yyyymmdd(date)
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

<style scoped>
.g-bd4 {
    background-image: none;
    background-color: #fff;
}
.g-mn4c {
    margin-right: 0;
}
</style>
