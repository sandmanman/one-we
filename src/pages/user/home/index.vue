<template>
    <div class="g-bd">
        <div class="g-wrap p-prf">

            <user-info :userProfile="userProfileData" :bindings="bindings"></user-info>         

            <!-- 创建的电台 S -->
            <template v-if="radioData">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2 s-fc3">创建的电台</span></h3>
            </div>
            <ul class="m-plylist m-create f-cb">
                <li class="itm" v-for="item in radioData" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="col cvr u-cover-3">
                        <img :src="item.picUrl+'?param=50y50'">
                    </router-link>
                    <div class="col cnt f-pr f-thide">
                        <router-link
                        :to="{name: 'djRadioDetail', query: {id: item.id}}"
                        class="s-fc1">
                        {{item.name}}
                        </router-link>
                        <div class="opt hshow">
                            <span class="icn u-icn2 u-icn2-share">分享</span>
                        </div>
                    </div>
                    <div class="col col-3 s-fc3" style="width:200px;">订阅{{item.subCount}}次</div>
                    <div class="col col-4 s-fc4" style="text-align:right;padding-right:20px;margin-left:0;">{{item.programCount}}期</div>
                </li>
            </ul>
            </template>
            <!-- 创建的电台 End -->

            <!-- 听歌排行 S -->
            <template v-if="peopleCanSeeMyPlayRecord">
            <div class="u-title u-title-1 f-cb m-record-title">
                <h3><span class="f-ff2 s-fc3">听歌排行</span></h3>
                <h4>累积听歌{{userProfileData.listenSongs}}首</h4>
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
            </div>
            </template>
            <!-- 听歌排行 End -->

            <!-- 创建的歌单 S -->
            <template v-if="createPlaylist">
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2">创建的歌单（{{createPlaylist.length}}）</span></h3>
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
                <h3><span class="f-ff2">收藏的歌单（{{collectionPlaylist.length}}）</span></h3>
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
import userInfo from '../components/Info'
import { userProfile, userRadio, userPlaylist, userPlayRecord } from '@/api'
export default {
    name: 'UserHome',
    components: {
        userInfo
    },
    data() {
        return {
            uid: null,
            userProfileData: null,
            peopleCanSeeMyPlayRecord: null,
            radioData: null,
            playlistData: null,
            playRecordType: 1, // 听歌排行显示类型，1:最近一周，0:所有时间
            playRecordData: null,
        }
    },
    created() {
        this.uid = this.$route.query.id
        this.getProfile(this.uid)
        this.getUserRadio(this.uid)
        this.getPlaylist(this.uid)
    },
    computed: {
        bindings() {
            let urlNull = function(item, index, array) {
                return item.url !== ''
            }
            if (this.userProfileData) {
                let newData = this.userProfileData.bindings.filter(urlNull)
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
                    this.userProfileData = res.data
                    // 是否显示听歌记录
                    this.peopleCanSeeMyPlayRecord = res.data.peopleCanSeeMyPlayRecord

                    // 如果peopleCanSeeMyPlayRecord为true,则执行获取听歌记录的数据
                    if(this.peopleCanSeeMyPlayRecord == true) {
                        this.getPlayRecord(res.data.profile.userId, this.playRecordType)
                    }
                }
            }).catch(error => {
                console.log(error)
            })
        },
        getUserRadio(uid) {
            userRadio(uid).then(res => {
                if(res.data.code === 200) {
                    this.radioData = res.data.djRadios
                } else {
                    console.error(res.data.code+res.data.message)
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
.m-record li:nth-child(even),
.m-plylist .itm:nth-child(even) {
    background-color: #f7f7f7;
}
.m-record li:hover,
.m-plylist .itm:hover {
    background-color: #eee;
}
</style>