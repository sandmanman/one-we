<template>
    <div class="g-bd4 f-cb p-share">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <template v-if="albumData">
                    <div class="m-info f-cb">
                        <div class="cover u-cover u-cover-alb">
                            <img :src="albumData.picUrl+'?param=177y177'" class="j-img">
                            <span class="msk"></span>
                        </div>

                        <div class="cnt">
                            <div class="cntc">
                                <div class="topblk">
                                    <div class="hd f-cb">
                                        <i class="f-fl u-icn u-icn-16"></i>
                                        <div class="tit">
                                            <h2 class="f-ff2">{{albumData.name}}</h2>
                                        </div>
                                    </div>
                                    <p class="intr">
                                        <b>歌手：</b>
                                        <span title="Guy Sebastian">
                                            <router-link class="s-fc7"
                                            v-for="(item, index) in albumData.artists"
                                            :key="index"
                                            :to="{name: 'artistDetail', query: {id: item.id}}">
                                                {{item.name}}
                                            </router-link>
                                            &nbsp;
                                        </span>
                                    </p>
                                    <p class="intr"><b>发行时间：</b>{{albumData.publishTime | formatUpdateDate}}</p>
                                    <p class="intr"><b>发行公司：</b>{{albumData.company}}</p>
                                </div>

                                <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放">
                                        <i><em class="ply"></em>播放</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>
                                    <a class="u-btni u-btni-fav " href="javascript:;"><i>收藏</i></a>
                                    <a class="u-btni u-btni-share " href="javascript:;">
                                        <i v-if="albumData.info.shareCount === 0">分享</i>
                                        <i v-else>({{albumData.info.shareCount}})</i>
                                    </a>
                                    <a class="u-btni u-btni-dl " href="javascript:;"><i>下载</i></a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt ">
                                        <i v-if="albumData.info.commentCount === 0">评论</i>
                                        <i v-else>(<span>{{albumData.info.commentCount}}</span>)</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 专辑介绍 -->
                    <div class="n-albdesc">
                        <h3>专辑介绍：</h3>
                        <div class="f-brk" v-html="albumData.description">
                        </div>
                    </div>
                    </template>

                    <div class="n-songtb" v-if="songsData">
                        <div class="u-title u-title-1 f-cb">
                            <h3><span class="f-ff2">包含歌曲列表</span></h3>
                            <span class="sub s-fc3">{{songsData.length}}首歌</span>
                        </div>
                        <div class="j-flag">
                            <table class="m-table">
                                <thead>
                                    <tr>
                                        <th class="first w1"><div class="wp">&nbsp;</div></th>
                                        <th><div class="wp">歌曲标题</div></th>
                                        <th class="w2-1"><div class="wp">时长</div></th>
                                        <th class="w4"><div class="wp">歌手</div></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in songsData" :key="item.id">
                                        <td class="left">
                                            <div class="hd ">
                                                <span class="ply">&nbsp;</span>
                                                <span class="num">{{index+1}}</span>
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
                                                            class="mv"></router-link>
                                                        </span>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class=" s-fc3">
                                            <span class="u-dur ">{{item.dt | formatMusicDuration}}</span>
                                            <div class="opt hshow">
                                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" ></a>
                                                <span class="icn icn-fav" title="收藏"></span>
                                                <span class="icn icn-share" title="分享">分享</span>
                                                <span class="icn icn-dl" title="下载"></span>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="text">
                                                <span
                                                v-for="(ar, index) in item.ar"
                                                :key="index">
                                                    <router-link
                                                    :to="{name: 'artistDetail', query: {id: ar.id}}"
                                                    :title="ar.name">{{ar.name}}</router-link>&nbsp;
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="n-cmt">
                        <comment 
                        :totalComment="totalComment" 
                        :comments="comments" 
                        :hotComments="hotComments"></comment>
                    </div>

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
import { albumDetail, albumComment } from '@/api'
import { formatDate, formatSeconds} from '@/utils'
import Comment from '@/components/comment/Comment'
export default {
    name: 'Album',
    components: {
        Comment
    },
    data() {
        return {
            albumData: null,
            commentId: null,
            songsData: null,
            comments: null,
            hotComments: null,
            totalComment: NaN,
            pageLimit: 20,
        }
    },
    created() {
        this.getAlbumDetail(this.$route.query.id)
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalComment/this.pageLimit)
        }
    },
    methods: {
        getAlbumDetail(id) {
            albumDetail(id).then(res => {
                if(res.data.code === 200) {
                    this.albumData = res.data.album
                    this.commentId = res.data.album.commentThreadId.replace(/R_AL_3_/g,'')
                    this.songsData = res.data.songs

                    // 获取评论
                    this.getalAumComment(this.commentId)
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getalAumComment(id) {
            albumComment(id).then(res => {
                if(res.data.code === 200) {
                    this.comments = res.data.comments
                    this.hotComments = res.data.hotComments
                    this.totalComment = res.data.total
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        pageCallback(pageNum) {
            albumComment(this.commentId, this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
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
        formatUpdateDate(date) { // 发行时间日期格式
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
.n-albdesc .f-brk {
    max-height: 120px;
    overflow: hidden;
}
</style>



