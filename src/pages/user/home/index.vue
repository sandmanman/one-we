<template>
    <div class="g-bd">
        <div class="g-wrap p-prf">
            <!-- 用户信息 S -->
            <dl class="m-proifo f-cb" v-if="profileData">
                <dt class="f-pr">
                    <img :src="profileData.profile.avatarUrl+'?param=180y180'">
                </dt>
                <dd>
                    <div class="name f-cb">
                        <div class="f-cb">
                            <div class="edit">
                                <router-link 
                                v-if="profileData.profile.artistId"
                                :to="{name: 'artistDetail', query: {id: profileData.profile.artistId}}"
                                class="u-btn2 u-btn2-1">
                                    <i>查看歌手页</i>
                                </router-link>
                            </div>
                            <h2 class="wrap f-fl f-cb ">
                                <span class="tit f-ff2 s-fc0 f-thide">{{profileData.profile.nickname}}</span>
                                <span class="lev u-lev u-icn2 u-icn2-lev">
                                    {{profileData.level}}<i class="right u-icn2 u-icn2-levr"></i>
                                </span>
                                <i v-if="profileData.profile.gender === 1" class="icn u-icn u-icn-01"></i>
                                <i v-if="profileData.profile.gender === 2" class="icn u-icn u-icn-02"></i>
                            </h2>
                            <div>
                                <a href="#" class="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
                                <a href="#" class="btn u-btn u-btn-6 f-tdn"><i>已关注</i></a>
                                <a href="#" class="btn u-btn u-btn-5 f-tdn"><i>相互关注</i></a>
                                <a href="#" class="btn u-btn u-btn-8 f-tdn">关 注</a>
                            </div>
                        </div>
                    </div>
                    <ul class="data s-fc3 f-cb">
                        <li class="fst">
                            <a href="/user/event?id=371876620">
                                <strong>{{profileData.profile.eventCount}}</strong><span>动态</span>
                            </a>
                        </li>
                        <li>
                            <a href="/user/follows?id=371876620">
                                <strong>{{profileData.profile.follows}}</strong><span>关注</span>
                            </a>
                        </li>
                        <li>
                            <a href="/user/fans?id=371876620">
                                <strong>{{profileData.profile.followeds}}</strong>
                                <span>粉丝</span>
                                <i class="u-icn u-icn-68 f-alpha"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="inf s-fc3 f-brk" v-if="profileData.profile.signature">个人介绍：{{profileData.profile.signature}}</div>
                    <div class="inf s-fc3 f-cb" v-if="bindings && bindings.length !== 0">
                        <span class="tit">社交网络：</span>
                        <ul class="u-logo u-logo-s f-cb">
                            <li v-for="(item, index) in bindings" :key="index">
                                <a 
                                :href="item.url" 
                                :class="{'u-slg-sn': item.type==2, 'u-slg-db': item.type==3, 'u-slg-tc': item.type==6}"
                                class="u-slg" 
                                target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                </dd>
            </dl>
            <!-- 用户信息 End -->

            <!-- 创建的电台 S -->
            <temppale v-if="createdDjData">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2 s-fc3">{{nickname}}创建的电台</span></h3>
            </div>
            <ul class="m-plylist m-create f-cb">
                <li class="itm ">
                    <router-link
                    :to="{name: 'djRadioDetail'}"></router-link>
                    <a href="/djradio?id=1216051" class="col cvr u-cover-3">
                        <img src="http://p1.music.126.net/3MpVCL4Wz-mkrJulXO28mg==/3419481180275990.jpg?param=50y50">
                    </a>
                    <div class="col cnt f-pr f-thide">
                        <a href="/djradio?id=1216051" class="s-fc1">陈一发儿</a>
                        <div class="opt hshow">
                            <span class="icn u-icn2 u-icn2-share">分享</span>
                        </div>
                    </div>
                    <div class="col col-3 s-fc3">订阅1985560次</div>
                    <div class="col col-4 s-fc4">34期</div>
                </li>
            </ul>
            </temppale>
            <!-- 创建的电台 End -->

            <!-- 听歌排行 S -->
            <template v-if="peopleCanSeeMyPlayRecord">
            <div class="u-title u-title-1 f-cb m-record-title">
                <h3><span class="f-ff2 s-fc3">听歌排行</span></h3>
                <h4>累积听歌{{profileData.listenSongs}}首</h4>
                <span class="n-iconpoint">
                    <a href="javascript:void(0)" class="icon u-icn2 u-icn2-5 j-flag"></a>
                    <div class="tip">
                        <!-- icon在hover的时候显示tip -->
                        <p>实际播放时间过短的歌曲将不纳入计算。</p>
                        <i class="t"></i><i class="b"></i>
                    </div>
                </span>
                <div class="nav f-cb">
                    <span :class="{'z-sel': playRecordType == 0}" @click="changePlayRecord(0)">所有时间</span>
                    <i></i>
                    <span :class="{'z-sel': playRecordType == 1}" @click="changePlayRecord(1)">最近一周</span>
                </div>
            </div>

            <div class="m-record j-flag" v-if="playRecordData">
                <div class="n-nmusic" v-if="playRecordData.length == 0"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>暂无听歌记录</h3></div>
                <ul>
                    <li v-for="(item, index) in playRecordData" :key="item.id">
                        <div class="hd ">
                            <span class="ply ">&nbsp;</span><span class="num">{{index+1}}.</span>
                        </div>
                        <div class="song">
                            <div class="tt">
                                <div class="ttc">
                                    <span class="txt">
                                        <router-link
                                        :to="{name: 'songDetail', query: {id: item.song.id}}"
                                        :title="item.song.name">
                                            <b title="La vie en rose">{{item.song.name}}</b>
                                        </router-link>
                                        <span class="ar s-fc8"> 
                                            <em>-</em>
                                            <span 
                                            v-for="ar in item.song.ar"
                                            :key="ar.id"
                                            :title="ar.name">
                                                <router-link
                                                :to="{name: 'artistDetail', query: {id: ar.id}}"
                                                class="s-fc8">
                                                    {{ar.name}}
                                                </router-link>
                                                &nbsp;
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div class="opt">
                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                <span class="icn icn-fav" title="收藏"></span>
                                <span class="icn icn-share" title="分享">分享</span>
                                <span class="icn icn-dl" title="下载">下载</span>
                            </div>
                        </div>
                        <div class="tops">
                            <span class="bg" :style="{width:item.score +'%'}"></span>
                        </div>
                    </li>
                </ul>
                <!-- <div class="more">
                    <a href="/user/songs/rank?id=371876620">查看更多&gt;</a>
                </div> -->
            </div>
            </template>
            <!-- 听歌排行 End -->

            <!-- 创建的歌单 S -->
            <template v-if="createPlaylist">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2">{{nickname}}创建的歌单（{{createPlaylist.length}}）</span></h3>
            </div>
            <ul class="m-cvrlst f-cb">
                <li v-for="item in createPlaylist" :key="item.id">
                    <div class="u-cover u-cover-1">
                        <img :src="item.coverImgUrl+'?param=140y140'">
                        <router-link 
                        :to="{name: 'playlistDetail', query: {id: item.id}}"
                        :title="item.name"
                        class="msk"></router-link>
                        <div class="bottom">
                            <a class="icon-play f-fr" href="javascript:;" title="播放"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">{{item.playCount}}</span>
                        </div>
                    </div>
                    <p class="dec">
                        <router-link 
                        :to="{name: 'playlistDetail', query: {id: item.id}}"
                        :title="item.name"
                        class="tit f-thide s-fc0">{{item.name}}</router-link>
                    </p>
                </li>
            </ul>
            </template>
            <!-- 创建的歌单 End -->
            

            <!-- 收藏的歌单 S -->
            <template v-if="collectionPlaylist">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2">{{nickname}}收藏的歌单（{{collectionPlaylist.length}}）</span></h3>
            </div>
            <ul class="m-cvrlst f-cb">
                <li v-for="item in collectionPlaylist" :key="item.id">
                    <div class="u-cover u-cover-1">
                        <img :src="item.coverImgUrl+'?param=140y140'">
                        <router-link 
                        :to="{name: 'playlistDetail', query: {id: item.id}}"
                        :title="item.name"
                        class="msk"></router-link>
                        <div class="bottom">
                            <a class="icon-play f-fr" href="javascript:;" title="播放"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">{{item.playCount}}</span>
                        </div>
                    </div>
                    <p class="dec">
                        <router-link 
                        :to="{name: 'playlistDetail', query: {id: item.id}}"
                        :title="item.name"
                        class="tit f-thide s-fc0">{{item.name}}</router-link>
                    </p>
                </li>
            </ul>
            </template>
            <!-- 收藏的歌单 End -->
            
        </div>
    </div>
</template>

<script>
import { userProfile, userDj, userPlaylist, userPlayRecord } from '@/api'
export default {
    name: 'UserHome',
    data() {
        return {
            uid: null,
            profileData: null,
            nickname: null,
            peopleCanSeeMyPlayRecord: null,
            createdDjData: null, // 用户创建的电台，没有找到相对应的api
            playlistData: null,
            playRecordType: 1, // 听歌排行显示类型，1:最近一周，0:所有时间
            playRecordData: null,
        }
    },
    created() {
        this.uid = this.$route.query.id
        this.getProfile(this.uid)
        this.getPlaylist(this.uid)
        this.getPlayRecord(this.uid, this.playRecordType)
    },
    computed: {
        bindings() {
            let urlNull = function(item, index, array) {
                return item.url !== ''
            }
            if (this.profileData) {
                let newData = this.profileData.bindings.filter(urlNull)
                //console.log(newData)
                return newData
            }
        },
        createPlaylist() {
            let uid = this.$route.query.id
            let sameUid = function(item, index, array) {
                return item.userId == uid
            }
            if (this.playlistData) {
                let newData = this.playlistData.filter(sameUid)
                //console.log(newData)
                return newData
            }
        },
        collectionPlaylist() {
            let uid = this.$route.query.id
            let notSameUid = function(item, index, array) {
                return item.userId != uid
            }
            if (this.playlistData) {
                let newData = this.playlistData.filter(notSameUid)
                //console.log(newData)
                return newData
            }
        }
    },
    methods: {
        getProfile(uid) {
            // 用户信息
            userProfile(uid).then(res => {
                if(res.data.code === 200) {
                    this.profileData = res.data
                    // 昵称
                    this.nickname = res.data && res.data.profile.nickname
                    // 是否显示听歌记录
                    this.peopleCanSeeMyPlayRecord = res.data.peopleCanSeeMyPlayRecord
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getPlaylist(uid) {
            userPlaylist(uid).then(res => {
                if(res.data.code === 200) {
                    this.playlistData = res.data.playlist
                } else {
                    console.error(res.data.code+res.data.message)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getPlayRecord(uid, type) {
            userPlayRecord(uid, type).then(res => {
                if(res.data.code === 200) {
                    if ( type == 1 ) {
                        this.playRecordData = res.data.weekData
                    } else if( type == 0 ) {
                        this.playRecordData = res.data.allData
                    }
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.log(error)
            })
        },
        changePlayRecord(type) {
            // 1:最近一周，0:所有时间
            if ( type == 1 ) {
                this.playRecordType = 1
            } else if ( type == 0 ) {
                this.playRecordType = 0
            }
            console.log(this.playRecordType)
            this.getPlayRecord(this.uid, this.playRecordType)
        }
    }
}
</script>

<style scoped>
.n-nmusic {
    padding: 105px 0 105px 0;
    text-align: center;
}
.m-record  li:nth-child(even) {
    background-color: #f7f7f7;
}
</style>