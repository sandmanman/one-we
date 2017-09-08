<template>
    <div class="g-bd">
        <div class="g-wrap p-prf">
            <!-- 用户信息 S -->
            <dl class="m-proifo f-cb" v-if="userProfileData">
                <dt class="f-pr">
                    <img :src="userProfileData.profile.avatarUrl+'?param=180y180'">
                </dt>
                <dd>
                    <div class="name f-cb">
                        <div class="f-cb">
                            <h2 class="wrap f-fl f-cb ">
                                <span class="tit f-ff2 s-fc0 f-thide">{{userProfileData.profile.nickname}}</span>
                                <span class="lev u-lev u-icn2 u-icn2-lev">
                                    {{userProfileData.level}}<i class="right u-icn2 u-icn2-levr"></i>
                                </span>
                                <i v-if="userProfileData.profile.gender === 1" class="icn u-icn u-icn-01"></i>
                                <i v-if="userProfileData.profile.gender === 2" class="icn u-icn u-icn-02"></i>
                            </h2>
                            <div>
                                <a href="#" class="btn u-btn u-btn-7 f-tdn"><i>发私信</i></a>
                                <a href="#" class="btn u-btn u-btn-6 f-tdn"><i>已关注</i></a>
                                <a href="#" class="btn u-btn u-btn-5 f-tdn"><i>相互关注</i></a>
                                <a href="#" class="btn u-btn u-btn-8 f-tdn">关 注</a>
                            </div>
                        </div>
                        <p class="djp f-fs1 s-fc3"><i class="tag u-icn2 u-icn2-pfv"></i>心理学家、美食家陈立教授</p>
                        <p class="djp f-fs1 s-fc3"><i class="tag u-icn2 u-icn2-pfyyr"></i>网易音乐人</p>
                        <p class="djp f-fs1 s-fc3" v-if="userProfileData.profile.expertTags">
                            <i class="tag u-icn2 u-icn2-pfdr"></i>音乐({{userProfileData.profile.expertTags.join('、')}})
                        </p>
                    </div>
                    <ul class="data s-fc3 f-cb">
                        <li class="fst">
                            <a href="/user/event?id=371876620">
                                <strong>{{userProfileData.profile.eventCount}}</strong><span>动态</span>
                            </a>
                        </li>
                        <li>
                            <a href="/user/follows?id=371876620">
                                <strong>{{userProfileData.profile.follows}}</strong><span>关注</span>
                            </a>
                        </li>
                        <li>
                            <a href="/user/fans?id=371876620">
                                <strong>{{userProfileData.profile.followeds}}</strong>
                                <span>粉丝</span>
                                <i class="u-icn u-icn-68 f-alpha"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="inf s-fc3 f-brk">个人介绍：{{userProfileData.profile.signature}}</div>
                    <div class="inf s-fc3">
                        <span class="sep" style="margin-left:0;">年龄：<span>{{userProfileData.profile.birthday}}(15后)</span></span>
                    </div>
                    <div class="inf s-fc3 f-cb">
                        <span class="tit">社交网络：</span>
                        <ul class="u-logo u-logo-s f-cb">
                            <li v-for="(item, index) in bindings" :key="index">
                                <a 
                                :href="item.url" 
                                :class="{'u-slg-sn': item.type===2, 'u-slg-db': item.type===3}"
                                class="u-slg" 
                                target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                </dd>
            </dl>
            <!-- 用户信息 End -->

            <!-- 创建的电台 S -->
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2 s-fc3">{{userProfileData.profile.nickname}}创建的电台</span></h3>
            </div>
            <ul class="m-plylist m-create f-cb">
                <li class="itm ">
                    <router-link
                    :to="{name: 'djRadioDetail'}"></router-link>
                    <a href="/djradio?id=347607128" class="col cvr u-cover-3">
                        <img src="http://p1.music.126.net/ayq6INcIWu-nT1IIcgKwZA==/18588343580970297.jpg?param=50y50" class="">
                    </a>
                    <div class="col cnt f-pr f-thide">
                        <a href="/djradio?id=347607128" class="s-fc1">猫大叔的钢琴小屋</a>
                        <div class="opt hshow">
                            <span class="icn u-icn2 u-icn2-share">分享</span>
                        </div>
                    </div>
                    <div class="col col-3 s-fc3">订阅448次</div>
                    <div class="col col-4 s-fc4">101期</div>
                </li>
            </ul>
            <!-- 创建的电台 End -->

            <!-- 听歌排行 S -->
            <template v-if="peopleCanSeeMyPlayRecord">
            <div class="u-title u-title-1 f-cb m-record-title">
                <h3><span class="f-ff2 s-fc3">听歌排行</span></h3>
                <h4>累积听歌12956首</h4>
                <span class="n-iconpoint">
                    <a href="javascript:void(0)" class="icon u-icn2 u-icn2-5 j-flag"></a>
                    <div class="tip">
                        <!-- icon在hover的时候显示tip -->
                        <p>实际播放时间过短的歌曲将不纳入计算。</p>
                        <i class="t"></i><i class="b"></i>
                    </div>
                </span>
                <div class="nav f-cb">
                    <span>所有时间</span>
                    <i></i>
                    <span class="z-sel">最近一周</span>
                </div>
            </div>
            <div class="m-record j-flag">
                <ul>
                    <li>
                        <div class="hd ">
                            <span class="ply ">&nbsp;</span><span class="num">1.</span>
                        </div>
                        <div class="song">
                            <div class="tt">
                                <div class="ttc">
                                    <span class="txt">
                                        <a href="/song?id=18383574"><b title="La vie en rose">La vie en rose</b></a>
                                        <span class="ar s-fc8"> 
                                            <em>-</em>
                                            <span title="Iggy Pop">
                                                <a class="s-fc8" href="/artist?id=35045">Iggy&nbsp;Pop</a>
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
                            <span class="bg" style="width:100%;"></span>
                        </div>
                    </li>
                </ul>
                <div class="more">
                    <a href="/user/songs/rank?id=371876620">查看更多&gt;</a>
                </div>
            </div>
            </template>
            <!-- 听歌排行 End -->

            <!-- 创建的歌单 S -->
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2">{{userProfileData.profile.nickname}}创建的歌单（57）</span></h3>
            </div>
            <ul class="m-cvrlst f-cb">
                <li>
                    <div class="u-cover u-cover-1">
                        <img src="http://p1.music.126.net/K-YI7P34oHzjMZQJE6coQA==/18535567022984112.jpg?param=140y140">
                        <a href="/playlist?id=526075209" class="msk" title="爱听音乐的猫大叔喜欢的音乐"></a>
                        <div class="bottom">
                            <a class="icon-play f-fr" href="javascript:;" title="播放"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">57274</span>
                        </div>
                    </div>
                    <p class="dec">
                        <a class="tit f-thide s-fc0" href="/playlist?id=526075209" title="爱听音乐的猫大叔喜欢的音乐">爱听音乐的猫大叔喜欢的音乐</a>
                    </p>
                </li>
            </ul>
            <!-- 创建的歌单 End -->

            <!-- 收藏的歌单 S -->
            <div class="u-title u-title-1 f-cb">
                <h3><span class="f-ff2">{{userProfileData.profile.nickname}}收藏的歌单（8）</span></h3>
            </div>
            <ul class="m-cvrlst f-cb">
                <li>
                    <div class="u-cover u-cover-1">
                        <img src="http://p1.music.126.net/K-YI7P34oHzjMZQJE6coQA==/18535567022984112.jpg?param=140y140">
                        <a href="/playlist?id=526075209" class="msk" title="爱听音乐的猫大叔喜欢的音乐"></a>
                        <div class="bottom">
                            <a class="icon-play f-fr" href="javascript:;" title="播放"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">57274</span>
                        </div>
                    </div>
                    <p class="dec">
                        <a class="tit f-thide s-fc0" href="/playlist?id=526075209" title="爱听音乐的猫大叔喜欢的音乐">爱听音乐的猫大叔喜欢的音乐</a>
                    </p>
                </li>
            </ul>
            <!-- 收藏的歌单 End -->

        </div>
    </div>
</template>

<script>
import { userProfile } from '@/api'
export default {
    name: 'UserHome',
    data() {
        return {
            uid: null,
            userProfileData: null,
            peopleCanSeeMyPlayRecord: null,
        }
    },
    created() {
        this.uid = this.$route.query.id
        this.getUserProfile(this.uid)
    },
    computed: {
        bindings: function() {
            let urlNull = function(element, index, array){
                return element.url !== ''
            }
            if (this.userProfileData) {
                let newData = this.userProfileData.bindings.filter(urlNull)
                console.log(newData)
                return newData
            }
        }
    },
    methods: {
        getUserProfile(uid) {
            userProfile(uid).then(res => {
                if(res.data.code === 200) {
                    this.userProfileData = res.data
                    // 是否显示听歌记录
                    this.peopleCanSeeMyPlayRecord = res.data.peopleCanSeeMyPlayRecord
                }
            })
        }
    }
}
</script>

<style>

</style>