<template>
    <div class="g-bd">
        <div class="g-wrap p-prf" v-if="eventData">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2 s-fc3">TA的动态（<span>{{eventData.size}}</span>）</span></h3>
            </div>

            <div class="m-timeline">
                <ul class="m-dlist j-flag">
                    <li class="itm" v-for="item in eventData.events" :key="item.id">
                        <div class="gface">
                            <router-link
                            :to="{name: 'userHome', query: {id: item.user.userId}}"
                            class="ficon">
                                <img class="j-flag" :src="item.user.avatarUrl+'?param=45y45'">
                            </router-link>
                        </div>

                        <div class="gcnt j-flag">
                            <div class="dcntc">
                                <div class="type f-pr f-fs1">
                                    <router-link
                                    :to="{name: 'userHome', query: {id: item.user.userId}}"
                                    class="s-fc7">{{item.user.nickname}}</router-link>
                                    <sup class="u-icn u-icn-1"></sup><span class="sep s-fc3">
                                        
                                        <span v-if="item.json.event">转发</span>
                                        <span v-if="item.json.playlist">分享歌单</span>
                                        <span v-if="item.json.song">分享单曲</span>
                                        <span v-if="item.json.mv">分享MV</span>
                                        <span v-if="item.json.video">分享/发布视频</span>
                                        <span v-if="item.json.album">分享专辑</span>
                                        <span v-if="item.json.topic">分享专栏文章</span>
                                    </span>
                                </div>
                                <div class="time">
                                    <a class="s-fc4" href="#">{{item.showTime}}</a>
                                </div>

                                <div class="text f-fs1 f-brk j-text">{{item.json.msg}}</div>

                                <div class="j-flag">
                                    <div class="card">
                                        <div class="j-flag">

                                            <!-- playlist S -->
                                            <div class="src f-cb" v-if="item.json.playlist">
                                                <div class="cover">
                                                    <span class="lnk">
                                                        <img :src="item.json.playlist.coverImgUrl+'?param=40y40&amp;quality=100'">
                                                        <span class="ply u-dicn u-dicn-8 f-alpha"></span>
                                                    </span>
                                                </div>
                                                <div class="scnt">
                                                    <h3 class="tit f-thide s-fc1 f-fs1">
                                                        <span class="tag u-dtag">歌单<i class="rt"></i></span>
                                                        <router-link
                                                        :to="{name: 'playlistDetail', query: {id: item.json.playlist.id}}"
                                                        class="s-fc1">
                                                            {{item.json.playlist.name}}
                                                        </router-link>
                                                    </h3>
                                                    <h4 class="from f-thide s-fc3">
                                                        by 
                                                        <router-link
                                                        :to="{name: 'userHome', query: {id: item.json.playlist.creator.userId}}"
                                                        class="s-fc3">
                                                            {{item.json.playlist.creator.nickname}}
                                                        </router-link>
                                                    </h4>
                                                </div>
                                            </div>
                                            <!-- playlist End -->

                                            <!-- song S -->
                                            <div class="src f-cb" v-if="item.json.song">
                                                <div class="cover cover-ply">
                                                    <span class="lnk">
                                                        <img :src="item.json.song.album.blurPicUrl+'?param=40y40&amp;quality=100'">
                                                    </span>
                                                    <a href="javascript:" class="ply u-dicn u-dicn-8 f-alpha"></a>
                                                </div>
                                                <div class="scnt">
                                                    <h3 class="tit f-thide f-fs1">
                                                        <router-link
                                                        :to="{name: 'songDetail', query: {id: item.json.song.id}}">
                                                        {{item.json.song.name}}
                                                        </router-link>
                                                    </h3>
                                                    <h4 class="from f-thide s-fc3" v-if="item.json.song.artists">
                                                        <router-link
                                                        v-for="(ar, index) in item.json.song.artists"
                                                        :to="{name: 'artistDetail', query: {id: ar.id}}"
                                                        :key="index"
                                                        class="s-fc3">
                                                        {{ar.name}}
                                                        </router-link>
                                                    </h4>
                                                </div>
                                            </div>
                                            <!-- song End -->

                                            <!-- video S -->
                                            <div class="src src-video f-cb" v-if="item.json.video">
                                                <div class="video f-pr j-flag">
                                                    <div class="info f-pa">
                                                        <div class="tit u-dicn u-dicn-17">
                                                            <p class="f-thide2">
                                                                <span class="h3">{{item.json.video.title}}</span>
                                                                <span class="h4"> - by {{item.json.video.creator.nickname}}</span>
                                                            </p>
                                                        </div>
                                                        <div class="bottom u-dicn u-dicn-49">
                                                            <span class="f-fl">
                                                                <i class="icn u-dicn u-dicn-43"></i>
                                                                {{item.json.video.playTime}}
                                                            </span>
                                                            <span class="f-fr f-ff1">
                                                                <i class="icn u-dicn u-dicn-44"></i>
                                                                {{item.json.video.durationms | formatDuration}}
                                                            </span>
                                                        </div>
                                                        <i class="ply u-dicn u-dicn-42 f-alpha"></i>
                                                    </div>
                                                    <img class="f-img" :src="item.json.video.coverUrl+'?param=338y189'">
                                                </div>
                                            </div>
                                            <!-- video End -->

                                            <!-- mv S -->
                                            <div class="src src-video f-cb" v-if="item.json.mv">
                                                <div class="video f-pr j-flag">
                                                    <div class="info f-pa">
                                                        <div class="tit u-dicn u-dicn-17">
                                                            <p class="f-thide2">
                                                                <i class="icn u-dicn u-dicn-48"></i>
                                                                <span class="h3 f-pre">{{item.json.mv.name}}</span>
                                                                <span class="h4">
                                                                     - 
                                                                     <span>
                                                                        <router-link
                                                                        v-for="ar in item.json.mv.artists"
                                                                        :key="ar.id"
                                                                        :to="{name: 'artistDetail', query: {id: ar.id}}">
                                                                            {{ar.name}}
                                                                        </router-link>
                                                                     </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div class="bottom u-dicn u-dicn-49">
                                                            <span class="f-fl">
                                                                <i class="icn u-dicn u-dicn-43"></i>
                                                                {{item.json.mv.playCount}}
                                                            </span>
                                                            <span class="f-fr f-ff1">
                                                                <i class="icn u-dicn u-dicn-44"></i>
                                                                {{item.json.mv.duration | formatDuration}}
                                                            </span>
                                                        </div>
                                                        <i class="ply u-dicn u-dicn-42 f-alpha"></i>
                                                    </div>
                                                    <img class="f-img" :src="item.json.mv.imgurl+'?param=338y189'">
                                                </div>

                                                <div class="fold f-cb j-flag" v-show="isShowFullMv">
                                                    <span class="btn s-fc3 f-fl">
                                                        <i class="icn u-dicn u-dicn-18" style="position:relative;top:2px;"></i>
                                                        &nbsp;
                                                        <a href="javascript:"> 收起</a>
                                                    </span>
                                                    <span class="sep f-fl"></span>
                                                    <div class="inf f-thide s-fc3">
                                                        <router-link 
                                                        :to="{name: 'mvDetail', query: {id: item.json.mv.id}}"
                                                        class="btn s-fc3">
                                                            <i class="icn u-dicn u-dicn-35" style="position:relative;top:2px;"></i>
                                                            &nbsp;
                                                            {{item.json.mv.name}}
                                                        </router-link>
                                                        <span>
                                                            <router-link
                                                            v-for="ar in item.json.mv.artists"
                                                            :key="ar.id"
                                                            :to="{name: 'artistDetail', query: {id: ar.id}}"
                                                            class="sub s-fc4">
                                                                {{ar.name}}
                                                            </router-link>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div class="mv mv-full f-pr j-flag">
                                                    <!-- 播放MVbox -->
                                                </div>
                                            </div>
                                            <!-- mv End -->

                                            <!-- pics S -->
                                            <ul class="pics f-cb j-flag" v-if="item.pics.length > 0">
                                                <li class="pic pic-s"
                                                v-for="(pic, index) in item.pics" :key="index">
                                                    <img class="f-img j-img f-curbig" :src="pic.pcSquareUrl+'?param=110y110&amp;quality=100'">
                                                </li>
                                            </ul>
                                            <!-- pics End -->

                                            <!-- topic S -->
                                            <div class="src src-topic f-cb" v-if="item.json.topic">
                                                <div class="cover">
                                                    <a href="javascript:;" class="lnk">
                                                        <img src="http://p1.music.126.net/gzefXoxVQi3OrUo_K6e8KQ==/19062233091086277.jpg?param=111y74&amp;quality=100"></a>
                                                </div>
                                                <div class="scnt">
                                                    <div class="inner">
                                                        <h3 class="tit f-thide2 f-fs1">
                                                            <span class="tag u-dtag">专栏<i class="rt"></i></span>
                                                            <a href="javascript:;" class="s-fc1">{{item.json.topic.mainTitle}}</a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- toppic End -->


                                            <!-- 转发的动态 ==========  S -->
                                            <div v-if="item.json.event && item.json.event !== null">
                                                <div class="text f-brk j-text">
                                                    <router-link
                                                    :to="{name: 'userHome', query: {id: item.json.event.user.userId}}"
                                                    class="s-fc7">
                                                    @{{item.json.event.user.nickname}}
                                                    </router-link>
                                                    {{item.json.event.json.msg}}
                                                </div>

                                                <template v-if="item.json.event.json.video">
                                                <!-- video S -->
                                                <div class="src src-video f-cb">
                                                    <div class="video f-pr j-flag">
                                                        <div class="info f-pa">
                                                            <div class="tit u-dicn u-dicn-17">
                                                                <p class="f-thide2">
                                                                    <span class="h3">{{item.json.event.json.video.title}}</span>
                                                                    <span class="h4"> - by {{item.json.event.json.video.creator.nickname}}</span>
                                                                </p>
                                                            </div>
                                                            <div class="bottom u-dicn u-dicn-49">
                                                                <span class="f-fl">
                                                                    <i class="icn u-dicn u-dicn-43"></i>
                                                                    {{item.json.event.json.video.playTime}}
                                                                </span>
                                                                <span class="f-fr f-ff1">
                                                                    <i class="icn u-dicn u-dicn-44"></i>
                                                                    {{item.json.event.json.video.durationms | formatDuration}}
                                                                </span>
                                                            </div>
                                                            <i class="ply u-dicn u-dicn-42 f-alpha"></i>
                                                        </div>
                                                        <img class="f-img" :src="item.json.event.json.video.coverUrl+'?param=338y189'">
                                                    </div>
                                                </div>
                                                <!-- video End -->
                                                </template>

                                                <template v-if="item.json.event.json.song">
                                                <!-- song S -->
                                                <div class="src f-cb" v-if="item.json.event.json.song">
                                                    <div class="cover cover-ply">
                                                        <span class="lnk">
                                                            <img :src="item.json.event.json.song.album.blurPicUrl+'?param=40y40&amp;quality=100'">
                                                        </span>
                                                        <a href="javascript:" class="ply u-dicn u-dicn-8 f-alpha"></a>
                                                    </div>
                                                    <div class="scnt">
                                                        <h3 class="tit f-thide f-fs1">
                                                            <router-link
                                                            :to="{name: 'songDetail', query: {id: item.json.event.json.song.id}}">
                                                            {{item.json.event.json.song.name}}
                                                            </router-link>
                                                        </h3>
                                                        <h4 class="from f-thide s-fc3" v-if="item.json.event.json.song.artists">
                                                            <router-link
                                                            v-for="(ar, index) in item.json.event.json.song.artists"
                                                            :to="{name: 'artistDetail', query: {id: ar.id}}"
                                                            :key="index"
                                                            class="s-fc3">
                                                            {{ar.name}}
                                                            </router-link>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <!-- song End -->
                                                </template>

                                                <template v-if="item.json.event.pics.length > 0">
                                                <!-- pics S -->
                                                <ul class="pics f-cb j-flag">
                                                    <li class="pic pic-s"
                                                    v-for="(pic, index) in item.json.event.pics" :key="index">
                                                        <img class="f-img j-img f-curbig" :src="pic.pcSquareUrl+'?param=110y110&amp;quality=100'">
                                                    </li>
                                                </ul>
                                                <!-- pics End -->
                                                </template>

                                                <div class="doper j-flag">
                                                    <a href="javascript:" class="s-fc7"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag">({{item.json.event.info.likedCount}})</span></a>
                                                    <span class="line">|</span>
                                                    <a href="javascript:" class="s-fc7">转发 <span class="j-flag">({{item.json.event.info.shareCount}})</span></a>
                                                    <span class="line">|</span>
                                                    <a href="javascript:" class="s-fc7">评论 <span class="j-flag">({{item.json.event.info.commentCount}})</span></a>
                                                </div>
                                            </div>
                                            <!-- 转发的动态 ========== End -->

                                        </div>
                                    </div>
                                    <!-- / .card -->

                                    <div class="doper j-flag">
                                        <a href="javascript:" class="s-fc7"><i class="icn u-dicn u-dicn-3"></i><span class="j-flag">({{item.info.likedCount}})</span></a>
                                        <span class="line">|</span>
                                        <a href="javascript:" class="s-fc7">转发 <span class="j-flag">({{item.info.shareCount}})</span></a>
                                        <span class="line">|</span>
                                        <a href="javascript:" class="s-fc7">评论 <span class="j-flag">({{item.info.commentCount}})</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
import { userEvent } from '@/api'
import { formatSeconds } from '@/utils'
export default {
    name: 'UserEvent',
    data() {
        return {
            eventData: [],
            isShowFullMv: false,
        }
    },
    created() {
        this.getEvent(this.$route.query.id)
    },
    methods: {
        getEvent(uid) {
            userEvent(uid).then(res => {
                res = res.data
                if ( res.code === 200 ) {
                    for (var i in res.events) {
                        res.events[i].json = this.stringToJson(res.events[i].json)
                        if ( res.events[i].json.event ) {
                            res.events[i].json.event.json = this.stringToJson(res.events[i].json.event.json)
                        }
                    }
                    this.eventData = res
                    console.log(res)
                } else {
                    console.error(res.code+res.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        stringToJson(s) {
            return JSON.parse(s)
        }
    },
    filters: {
        formatDuration(val) { // 播放时长格式
            return formatSeconds(val)
        }
    }
}
</script>

<style scoped>
.m-dlist .src-video .info {
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    background: rgba(0,0,0,0.1);
}
.m-dlist .src-video .tit {
    width: 100%;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 15px;
    padding: 10px;
    height: 100px;
}
.m-dlist .src-video .tit p {
    max-height: 30px;
}
.m-dlist .src-video .h4,
.m-dlist .src-video .h4 a {
    color: rgba(255,255,255,0.5);
}
.m-dlist .src-video .bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 33px 10px 10px;
    height: 10px;
    line-height: 10px;
    font-size: 14px;
}
.m-dlist .src-video .ply {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    width: 40px;
    height: 40px;
    background-position: 0 -510px;
    opacity: 0.8;
}
.m-dlist .src-video .ply:hover {
    opacity: 1;
}
.m-dlist .pics {
    margin-left: -4px;
    width: 346px;
    overflow: hidden;
}
.m-dlist .src-video .h3,
.m-dlist .src-video .h4 {
    position: relative;
    display: inline-block;
}
.m-dlist .src-video .fold .sep {
    display: inline-block;
    position: relative;
    top: 1px;
    width: 1px;
    height: 13px;
    margin: 0 8px;
    background: #ddd;
}
</style>

