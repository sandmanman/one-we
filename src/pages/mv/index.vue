<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <!-- video S -->
                    <div class="n-mv" v-if="mvData">
                        <div class="title f-cb">
                            <h2 class="f-ff2 f-thide">{{mvData.name}}</h2>
                            <span class="name">
                                <router-link
                                v-for="item in mvData.artists"
                                :key="item.id"
                                :to="{name: 'artistDetail', query: {id: item.id}}" 
                                :title="item.name"
                                class="s-fc7">{{item.name}}</router-link>
                                &nbsp;
                            </span>
                        </div>

                        <div class="mv">
                            <d-player
                            :video="video"
                            :autoplay="autoplay"
                            :contextmenu="contextmenu"
                            @play="play"
                            ref="player"></d-player>
                        </div>
                        <div class="btns f-cb">
                            <a class="j-flag u-btni u-btni-fav" href="javascript:;"><i>收藏</i></a>
                            <a class="u-btni u-btni-share" href="javascript:;"><i>分享</i></a>
                        </div>
                    </div>
                    <!-- video End -->
                </div>
            </div>
        </div>

        <div class="g-sd4">
            <div class="g-wrap7" v-if="mvData">
                <h3 class="u-hd3">
                    <span class="f-fl">MV简介</span>
                </h3>
                <div class="m-mvintr">
                    <p class="s-fc4">发布时间：{{mvData.publishTime}}</p>
                    <p class="s-fc4">播放次数：{{mvData.playCount}}万次</p>
                    <p class="intr">
                    {{mvData.briefDesc}}
                    <br>
                    {{mvData.desc}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DPlayer from 'DPlayer'
import VueDPlayer from 'vue-dplayer'
import { mvDetail } from '@/api'
export default {
    name: 'MV',
    components: {
        'd-player': VueDPlayer,
    },
    data() {
        return {
            mvData: null,
            video: {
                url: String,
                pic: String
            },
            autoplay: true,
            player: null,
            contextmenu: [
                {
                    text: '网易云音乐',
                    link: 'http://music.163.com/'
                }
            ]
        }
    },
    created() {
        this.getMV(this.$route.query.mvid)
    },
    methods: {
        getMV(id) {
            mvDetail(id).then(res => {
                if( res.data.code === 200 ) {
                    this.mvData = res.data.data
                    // localhost:1128 是api服务地址
                    this.video.url = 'http://localhost:1128/mv/url?url='+res.data.data.brs[720]
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        play() {
            console.log('play callback')
        },
    }
}
</script>


<style lang="scss" scoped>
.n-mv {
    h2 {
        float: left;
        max-width: 100%;
        margin-top: -10px;
        margin-right: 8px;
        font-size: 24px;
        line-height: 32px;
        font-weight: normal;
    }
    .title {
        padding-top: 10px;
        margin-bottom: 8px;
    }
    .mv {
        width: 640px;
        height: 400px;
        background-color: #2e2e2e;
        font-size: 0;
        line-height: 0;
    }
    .btns {
        margin: 12px 0 45px;
    }
    .u-btni {
        margin-right: 10px;
    }
}
.m-mvintr {
    p {
        line-height: 18px;
        &.intr {
            margin-top: 10px;
        }
    }
}
.dplayer {
    height: 400px;
}
</style>
