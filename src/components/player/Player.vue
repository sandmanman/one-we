<template>
    <div class="g-btmbar">
        <audio id="audioMM" preload="auto"></audio>
        <div class="m-playbar m-playbar-lock">
            <div class="updn">
                <div class="left f-fl"><a href="javascript:;" class="btn"></a></div>
                <div class="right f-fl"></div>
            </div>
            <div class="bg"></div>
            <div class="hand" title="展开播放条"></div>
            <div class="wrap" style="margin-left: -497.5px;">
                <div class="btns">
                    <a href="javascript:;" class="prv" title="上一首(ctrl+←)">上一首</a>
                    <!-- 暂停 add pas -->
                    <a href="javascript:;" class="ply j-flag" title="播放/暂停(p)">播放/暂停</a>
                    <a href="javascript:;" class="nxt" title="下一首(ctrl+→)">下一首</a>
                </div>

                <template v-if="songInfo">
                <div class="head j-flag">
                    <img 
                    v-if="songInfo.al" 
                    :src="songInfo.al.picUrl+'?param=34y34'">
                    <router-link
                    :to="{name: 'songDetail', query: {id: songInfo.id}}"
                    class="mask"></router-link>
                </div>

                <div class="play">
                    <div class="j-flag words">
                        <router-link
                        :to="{name: 'songDetail', query: {id: songInfo.id}}"
                        :title="songInfo.name"
                        class="f-thide name fc1 f-fl">
                            {{songInfo.name}}
                        </router-link>

                        <router-link
                        v-if="songInfo.mv"
                        :to="{name: 'mvDetail', query: {id: songInfo.mv}}"
                        class="mv f-fl"
                        title="MV"></router-link>
                        <span class="by f-thide f-fl">
                            <span title="周杰伦" v-for="ar in songInfo.ar" :key="ar.id">
                                <router-link
                                :to="{name: 'artistDetail', query: {id: ar.id}}">
                                {{ar.name}}
                                </router-link>
                                &nbsp;
                            </span>
                        </span>
                    </div>
                    <div class="m-pbar">
                        <div class="barbg j-flag">
                            <!-- 资源加载百分比 -->
                            <div class="rdy" style="width: 93.2686%;"></div>
                            <!-- 播放进度百分比 -->
                            <div class="cur" style="width: 4.69478%;">
                                <!-- z-load 加载中 -->
                                <span class="btn f-tdn f-alpha z-load"><i></i></span>
                            </div>
                        </div>
                        <span class="j-flag time"><em>00:10</em> / {{songInfo.dt | formatSeconds}}</span>
                    </div>
                </div>
                </template>

                <template v-else>
                <div class="head j-flag"><a href="javascript:;" class="mask"></a></div>
                <div class="play">
                    <div class="j-flag words"></div>
                    <div class="m-pbar">
                        <div class="barbg j-flag">
                            <div class="rdy" style="width: 0%;"></div>
                            <div class="cur" style="width: 0%;">
                                <span class="btn f-tdn f-alpha"><i></i></span>
                            </div>
                        </div>
                        <span class="j-flag time"><em>00:00</em> / 00:00</span>
                    </div>
                </div>
                </template>

                <div class="oper f-fl">
                    <a href="javascript:;" class="icn icn-add j-flag" title="收藏">收藏</a>
                    <a href="javascript:;" class="icn icn-share" title="分享">分享</a>
                </div>

                <div class="ctrl f-fl f-pr j-flag">
                    <!-- 调音量 -->
                    <div class="m-vol" v-if="isShowVolume">
                        <div class="barbg"></div>
                        <div class="vbg j-t"><div class="curr j-t" style="height: 48.2222px;"></div>
                        <span class="btn f-alpha j-t" style="top: 39px;"></span></div>
                    </div>
                    <a href="javascript:;" class="icn icn-vol" title="音量" @click="toggleVolume"></a>

                    <!-- 循环icn-loop 单曲icn-one 随机icn-shuffle -->
                    <a href="javascript:;" class="icn icn-loop" title="循环"></a>

                    <span class="add f-pr">
                    <span class="tip" style="display: none;">已开始播放</span>
                        <a href="javascript:;" title="播放列表" class="icn icn-list s-fc3"
                        @click="togglePlaylist">253</a>
                    </span>
                    <div class="tip tip-1" style="display:none;">循环</div>
                </div>

            </div>

            <!-- 播放列表 S -->
            <transition name="slide">
            <div class="list" v-show="isShowPlaylist">
                <div class="listhd">
                    <div class="listhdc">
                        <h4>播放列表(<span class="j-flag">253</span>)</h4>
                        <a href="javascript:;" class="addall"><span class="ico ico-add"></span>收藏全部</a>
                        <span class="line"></span>
                        <a href="javascript:;" class="clear"><span class="ico icn-del"></span>清除</a>
                        <p class="lytit f-ff0 f-thide j-flag">告白气球</p>
                        <span class="close" @click="togglePlaylist">关闭</span>
                    </div>
                </div>

                <div class="listbd">
                    <img class="imgbg j-flag" src="http://music.163.com/api/img/blur/3265549553028224" style="top: -360px;">
                    <div class="msk"></div>
                    <!-- 列表 S -->
                    <div class="listbdc j-flag">
                        <ul class="f-cb">
                            <li>
                                <div class="col col-1"></div>
                                <div class="col col-2">The Spook</div>
                                <div class="col col-3">
                                    <div class="icns">
                                        <i class="ico icn-del" title="删除">删除</i>
                                        <i class="ico ico-dl" title="下载">下载</i>
                                        <i class="ico ico-share" title="分享">分享</i>
                                        <i class="j-t ico ico-add" title="收藏">收藏</i>
                                    </div>
                                </div>
                                <div class="col col-4">
                                    <span title="KSHMR/BassKillers/B3nte">
                                        <a href="/artist?id=896139">KSHMR</a>
                                    </span>
                                </div>
                                <div class="col col-5">04:00</div>
                                <div class="col col-6">
                                    <a href="/playlist?id=578963016" class="ico ico-src" title="来自歌单">来源</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 列表 End -->
                    <div class="msk2"></div>
                    <!-- 歌词 S -->
                    <div class="listlyric j-flag">
                        <p class="j-flag" data-time="0">作曲 : 周杰伦</p>
                    </div>
                    <!-- 歌词 End -->
                </div>
            </div>
            </transition>
            <!-- 播放列表 End -->

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatSeconds} from '@/utils'
export default {
    name: 'Player',
    data() {
        return {
            isShowPlaylist: false,
            isShowVolume: false,
        }
    },
    computed: {
        ...mapGetters(['songInfo'])
    },
    methods: {
        togglePlaylist() {
            // 显示隐藏播放列表
            this.isShowPlaylist = !this.isShowPlaylist
        },
        toggleVolume() {
            // 显示隐藏音量调节
            this.isShowVolume = !this.isShowVolume
        },
        play() {
            console.log('播放/暂停')
        },
        prev() {
            console.log('上一首')
        },
        next() {
            console.log('下一首')
        }
    },
    filters: {
        formatSeconds(val) {
            return formatSeconds(val)
        }
    }
}
</script>

<style scoped>
.list {
    z-index: -1;
    animation-duration: .2s;
    animation-fill-mode: both;
}
.listbdc {
    overflow-y: auto;
}
.slide-enter-active,
.slide-leave-active {
    animation-name: slideInUp;
}
 /* .fade-leave-active 在低于版本 2.1.8 中 */
.slide-enter,
.slide-leave-to {
    animation-name: slideOutDown;
}

@keyframes slideInUp {
    from {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }

    to {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes slideOutDown {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d(0, 100%, 0);
    }
}
</style>


