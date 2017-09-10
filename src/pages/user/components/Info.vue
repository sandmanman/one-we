<template>
<!-- 用户信息 S -->
<dl class="m-proifo f-cb" v-if="userProfile">
    <dt class="f-pr">
        <img :src="userProfile.profile.avatarUrl+'?param=180y180'">
    </dt>
    <dd>
        <div class="name f-cb">
            <div class="f-cb">
                <div class="edit">
                    <router-link 
                    v-if="userProfile.profile.artistId"
                    :to="{name: 'artistDetail', query: {id: userProfile.profile.artistId}}"
                    class="u-btn2 u-btn2-1">
                        <i>查看歌手页</i>
                    </router-link>
                </div>
                <h2 class="wrap f-fl f-cb ">
                    <span class="tit f-ff2 s-fc0 f-thide">{{userProfile.profile.nickname}}</span>
                    <span class="lev u-lev u-icn2 u-icn2-lev">
                        {{userProfile.level}}<i class="right u-icn2 u-icn2-levr"></i>
                    </span>
                    <i v-if="userProfile.profile.gender === 1" class="icn u-icn u-icn-01"></i>
                    <i v-if="userProfile.profile.gender === 2" class="icn u-icn u-icn-02"></i>
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
                    <strong>{{userProfile.profile.eventCount}}</strong><span>动态</span>
                </a>
            </li>
            <li>
                <a href="/user/follows?id=371876620">
                    <strong>{{userProfile.profile.follows}}</strong><span>关注</span>
                </a>
            </li>
            <li>
                <a href="/user/fans?id=371876620">
                    <strong>{{userProfile.profile.followeds}}</strong>
                    <span>粉丝</span>
                    <i class="u-icn u-icn-68 f-alpha"></i>
                </a>
            </li>
        </ul>
        <div class="inf s-fc3 f-brk" v-if="userProfile.profile.signature">个人介绍：{{userProfile.profile.signature}}</div>
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
</template>

<script>
export default {
    name: 'userProfile',
    props: ['userProfile', 'bindings']
}
</script>

<style>
</style>