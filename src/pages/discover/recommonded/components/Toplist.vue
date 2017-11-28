<template>
    <dl class="blk" v-cloak>
        <dt class="top">
            <div class="cver u-cover u-cover-4">
                <img class="j-img" :src="toplistData.playlist.coverImgUrl">
                <router-link
                :to="{name:'toplist', query: {id: toplistId}}"
                :title="toplistData.playlist.name"
                class="msk">
                </router-link>
            </div>
            <div class="tit">
                <router-link
                :to="{name:'toplist', query: {id: toplistId}}"
                :title="toplistData.playlist.name">
                    <h3 class="f-fs1 f-thide">{{toplistData.playlist.name}}</h3>
                </router-link>
                <div class="btn">
                    <a href="javascript:;" class="s-bg s-bg-9 f-tdn" title="播放">播放</a>
                    <a href="javascript:;" class="s-bg s-bg-10 f-tdn subscribe-flag" title="收藏">收藏</a>
                </div>
            </div>
        </dt>
        <dd>
            <ol>
                <li v-for="(item, index) in toplistData.playlist.tracks.slice(0, 10)" :key="index">
                    <span class="no">{{index + 1}}</span>
                    <router-link
                    :to="{name: 'songDetail', query: {id: item.id}}"
                    :title="item.name"
                    class="nm s-fc0 f-thide">{{item.name}}</router-link>
                    <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放"></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表"></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏"></a>
                    </div>
                </li>
            </ol>
            <div class="more">
                <router-link
                :to="{name:'toplist', query: {id: toplistId}}"
                 class="s-fc0">
                    查看全部&gt;
                </router-link>
            </div>
        </dd>
    </dl>
</template>

<script>
export default {
    name: 'Toplist',
    props: {
        toplist: {
            type: Object
        },
        toplistId: {
            type: Number
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