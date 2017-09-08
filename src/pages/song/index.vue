<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <!-- 歌曲信息 S -->
                    <div class="m-lycifo" v-if="songData">
                        <div class="f-cb">
                            <!-- 专辑封面 S -->
                            <div class="cvrwrap f-cb f-pr">
                                <div class="u-cover u-cover-6 f-fl">
                                    <img :src="songData.al.picUrl+'?param=130y130'" class="j-img">
                                    <span class="msk f-alpha"></span>
                                </div>
                                <div class="out s-fc3">
                                    <i class="u-icn u-icn-95 f-fl"></i>
                                    <a data-href="/outchain/2/418603077/" class="des s-fc7">生成外链播放器</a>
                                </div>
                            </div>
                            <!-- 专辑封面 S -->

                            <div class="cnt">
                                <div class="hd">
                                    <i class="lab u-icn u-icn-37"></i>
                                    <div class="tit">
                                        <em class="f-ff2">{{songData.name}}</em>
                                        <router-link
                                        v-if="songData.mv"
                                        :to="{name: 'mvDetail', query: {mvid: songData.mv}}">
                                            <i class="icn u-icn u-icn-2"></i>
                                        </router-link>
                                    </div>
                                </div>
                                <p class="des s-fc4">
                                    歌手：
                                    <span v-for="item in songData.ar" :key="item.id" :title="item.name">
                                        <router-link
                                        :to="{name: 'artistDetail', query: {id: item.id}}"
                                        class="s-fc7">{{item.name}}</router-link>
                                        &nbsp;
                                    </span>
                                    
                                </p>
                                <p class="des s-fc4">
                                    所属专辑：
                                    <router-link
                                    :to="{name: 'albumDetail', query: {id: songData.al.id}}"
                                    class="s-fc7">{{songData.al.name}}</router-link>
                                </p>
                                <div class="m-info">
                                    <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放">
                                        <i><em class="ply"></em>播放</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>
                                    <a class="u-btni u-btni-fav " href="javascript:;">
                                        <i>收藏</i>
                                    </a>
                                    <a class="u-btni u-btni-share " href="javascript:;">
                                        <i>分享</i>
                                    </a>
                                    <a class="u-btni u-btni-dl " href="javascript:;">
                                        <i>下载</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt ">
                                        <i>(<span>{{totalComment}}</span>)</i>
                                    </a>
                                    </div>
                                </div>
                                <!-- 歌词 -->
                                <div class="bd bd-open f-brk f-ib" v-if="lyricData">
                                    <div class="lyric-content" :class="{open:isShowMoreLyric}">
                                        <p v-for="(item, index) in lyric" :key="index">{{item.txt}}</p>
                                    </div>
                                    <div class="crl">
                                        <a v-if="!isShowMoreLyric" href="javascript:void(0)" class="s-fc7" @click="showMoreLyric">展开<i class="u-icn u-icn-69" style="margin-left:5px;"></i></a>
                                        <a v-else href="javascript:void(0)" class="s-fc7" @click="showMoreLyric">收起<i class="u-icn u-icn-70" style="margin-left:5px;"></i></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <!-- 歌曲信息 End -->

                    <div class="n-cmt">
                        <div class="u-title u-title-1">
                            <h3><span class="f-ff2">评论</span></h3>
                            <span class="sub s-fc3">共<span class="j-flag">{{totalComment}}</span>条评论</span>
                        </div>

                        <comment :totalComment="totalComment" :comments="comments" :hotComments="hotComments"></comment>

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

        <div class="g-sd4">
            <div class="g-wrap7">
                <h3 class="u-hd3">
                    <span class="f-fl">相似歌曲</span>
                </h3>
                <ul class="m-sglist f-cb" v-if="simiSongData">
                    <li class="f-cb" v-for="item in simiSongData" :key="item.id">
                        <div class="txt">
                            <div class="f-thide">
                                <router-link
                                :to="{name: 'songDetail', query: {id: item.id}}"
                                :title="item.name"
                                class="s-fc1">{{item.name}}</router-link>
                            </div>
                            <div class="f-thide s-fc4">
                                <span v-for="ar in item.artists" :key="ar.id" :title="ar.name">
                                    <router-link
                                    :to="{name: 'artistDetail', query: {id: ar.id}}"
                                    class="s-fc4">{{ar.name}}</router-link>
                                    &nbsp;
                                </span>
                            </div>
                        </div>
                        <div class="opr f-cb">
                            <a class="play" href="javascript:;"></a>
                            <a class="add" href="javascript:;"></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { songDetail, songLyric, songComment, simiSong } from '@/api'
import Comment from '@/components/comment/Comment'
export default {
    name: 'Song',
    components: {
        Comment
    },
    data() {
        return {
            songData: null,
            songId: null,
            lyricData: null,
            lyric: null,
            isShowMoreLyric: false,
            simiSongData: null,
            comments: null,
            hotComments: null,
            totalComment: Number,
            pageLimit: 20,
        }
    },
    created() {
        this.getSong(this.$route.query.id)
        this.getLyric(this.$route.query.id)
        this.getSongComment(this.$route.query.id)
        this.getSimiSong(this.$route.query.id)
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalComment/this.pageLimit)
        }
    },
    watch: {
        '$route'(to,from) {
            this.getSong(this.$route.query.id)
            this.getLyric(this.$route.query.id)
            this.getSongComment(this.$route.query.id)
            this.getSimiSong(this.$route.query.id)
        }
    },
    methods: {
        getSong(ids) { // 歌曲信息
            songDetail(ids).then(res => {
                if(res.data.code === 200) {
                    this.songData = res.data.songs[0]
                    this.songId = res.data.songs[0].id
                } else {
                    console.log(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getLyric(id) { // 歌词
            songLyric(id).then(res => {
                if(res.data.code === 200) {
                    this.lyricData = res.data.lrc.lyric
                    this.lyricFormat()
                } else {
                    console.log(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getSongComment(id) {
            songComment(id).then(res => {
                if(res.data.code === 200) {
                    this.comments = res.data.comments
                    this.hotComments = res.data.hotComments
                    this.totalComment = res.data.total
                } else {
                    console.log(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getSimiSong(id) {
            simiSong(id).then(res => {
                if(res.data.code === 200) {
                    this.simiSongData = res.data.songs
                } else {
                    console.log(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        lyricFormat() {
            // https://github.com/eugeneCN/vue-electron-music
            var lyrics = this.lyricData.split('\n')
            // console.log(lyrics)
            var lrcObj = []
            /*eslint-disable */
            var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
            /*eslint-enable */
            // 思路：
            // 1、把歌词进行处理以时间和歌词组成一个对象，放入lyric数组中
            // 2、在computed方法中根据当前的时间进行匹配歌词，然后查找在数据中的位置计算offset值
            for (var i = 0; i < lyrics.length; i++) {
                var timeRegExpArr = lyrics[i].match(timeReg)
                if (!timeRegExpArr) continue
                var txt = lyrics[i].replace(timeReg, '')
                // 处理时间
                for (var k = 0; k < timeRegExpArr.length; k++) {
                    var array = {}
                    var t = timeRegExpArr[k]
                    /*eslint-disable */
                    var min = Number(String(t.match(/\[\d*/i)).slice(1))
                    var sec = Number(String(t.match(/\:\d*/i)).slice(1))
                    /*eslint-enable */
                    var time = min * 60 + sec
                    array.time = time
                    array.txt = txt
                    lrcObj.push(array)
                }
            }
            this.lyric = lrcObj
        },
        showMoreLyric(event) { // 歌词展开
            this.isShowMoreLyric = !this.isShowMoreLyric
        },
        pageCallback(pageNum) {
            songComment(this.songId, this.pageLimit, (pageNum-1)*this.pageLimit).then(res => {
                if(res.data.code === 200) {
                    this.comments = res.data.comments
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>


<style scoped>
.lyric-content {
    max-height: 299px;
    overflow: hidden;
}
.lyric-content.open {
    max-height: none;
}
</style>
