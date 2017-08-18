<template>
    <dl class="blk" v-cloak>
        <dt class="top">
            <div class="cver u-cover u-cover-4">
                <img class="j-img" :src="toplistData.coverImgUrl">
                <a href="#" class="msk" :title="toplistData.name"></a>
            </div>
            <div class="tit">
                <a href="#" :title="toplistData.name"><h3 class="f-fs1 f-thide">{{toplistData.name}}</h3></a>
                <div class="btn">
                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" title="播放">播放</a>
                    <a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag" title="收藏">收藏</a>
                </div>
            </div>
        </dt>
        <dd>
            <ol>
                <li v-for="(item, index) in toplistData.tracks.slice(0, 10)" :key="index">
                    <span class="no">{{index + 1}}</span>
                    <a href="#" class="nm s-fc0 f-thide" :title="item.name">{{item.name}}</a>
                    <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放"></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏"></a>
                    </div>
                </li>
            </ol>
            <div class="more"><a :href="'/toplist?id='+toplistData.id" class="s-fc0">查看全部&gt;</a></div>
        </dd>
    </dl>
</template>

<script>
import { toplist } from '../../../api'
export default {
    name: 'Toplist',
    props: {
        toplist: {
            type: Object
        }
    },
    computed: {
        toplistData() {
            if ( this.toplist ) return this.toplist
        }
    }
}
</script>

<style>
</style>