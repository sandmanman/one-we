<template>
    <div class="n-rcmd">
    <div class="v-hd2">
        <a href="#" class="tit f-ff2 f-tdn">热门推荐</a>
        <div class="tab">
            <router-link :to="{name: 'playlist', query: {cat: '华语'}}" class="s-fc3">华语</router-link>
            <span class="line">|</span>
            <router-link :to="{name: 'playlist', query: {cat: '流行'}}" class="s-fc3">流行</router-link>
            <span class="line">|</span>
            <router-link :to="{name: 'playlist', query: {cat: '摇滚'}}" class="s-fc3">摇滚</router-link>
            <span class="line">|</span>
            <router-link :to="{name: 'playlist', query: {cat: '民谣'}}" class="s-fc3">民谣</router-link>
            <span class="line">|</span>
            <router-link :to="{name: 'playlist', query: {cat: '电子'}}" class="s-fc3">电子</router-link>
        </div>
        <span class="more">
            <router-link :to="{name: 'playlist'}" class="s-fc3">更多</router-link>
            <i class="cor s-bg s-bg-6">&nbsp;</i>
        </span>
    </div>

    <ul class="m-cvrlst f-cb" v-if="recommended">
        <li v-for="(item, index) in recommended" :key="index">
            <div class="u-cover u-cover-1">
                <img :src="item.picUrl">
                <router-link :title="item.name" :to="{name: 'playlistDetail', query: {id: item.id}}" class="msk"></router-link>
                <div class="bottom">
                <a class="icon-play f-fr" title="播放" href="javascript:;"></a>
                <span class="icon-headset"></span>
                <span class="nb">{{item.playCount | formatCount}}</span>
                </div>
            </div>
            <p class="dec">
                <router-link :title="item.name" :to="{name: 'playlistDetail', query: {id: item.id}}" class="tit s-fc0">{{item.name}}</router-link>
            </p>
        </li>
    </ul>

    </div>
</template>

<script>
    import { formatPlayCount } from '@/utils'
    export default {
        name: 'HotRecommended',
        props: {
            recommended: {
                type: Array
            }
        },
        filters: {
            formatCount(n) {
                return formatPlayCount(n)
            }
        }
    }
</script>

<style>

</style>