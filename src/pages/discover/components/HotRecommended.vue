<template>
    <div class="n-rcmd">
    <div class="v-hd2">
        <a href="#" class="tit f-ff2 f-tdn">热门推荐</a>
        <div class="tab">
        <a href="#" class="s-fc3">华语</a>
        <span class="line">|</span>
        <a href="#" class="s-fc3">流行</a>
        <span class="line">|</span>
        <a href="#" class="s-fc3">摇滚</a>
        <span class="line">|</span>
        <a href="#" class="s-fc3">民谣</a>
        <span class="line">|</span>
        <a href="#" class="s-fc3">电子</a>
        </div>
        <span class="more"><a href="#" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
    </div>

    <ul class="m-cvrlst f-cb">
        <li v-for="(item, index) in recommended" :key="index">
            <div class="u-cover u-cover-1">
                <img :src="item.picUrl">
                <a :title="item.name" :href="'/playlist?id='+item.id" class="msk"></a>
                <div class="bottom">
                <a class="icon-play f-fr" title="播放" href="javascript:;"></a>
                <span class="icon-headset"></span>
                <span class="nb">{{item.playCount | formatCount}}</span>
                </div>
            </div>
            <p class="dec">
                <a :title="item.name" class="tit s-fc0" :href="'/playlist?id='+item.id">{{item.name}}</a>
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