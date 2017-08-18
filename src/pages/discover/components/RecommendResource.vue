<template>
    <div class="n-rcmd">
        <div class="v-hd2"><span class="tit f-ff2 f-tdn">个性化推荐</span></div>
        <ul class="m-cvrlst m-cvrlst-idv f-cb">
            <li>
                <a href="/discover/recommend/taste" title="每日歌曲推荐" class="date u-date f-alpha">
                    <span class="head">星期五</span>
                    <span class="bd">18</span>
                    <span class="mask f-alpha" title="每日歌曲推荐" href="/discover/recommend/taste"></span>
                </a>
                <p class="dec">
                    <a class="tit s-fc0" title="每日歌曲推荐" href="/discover/recommend/taste">每日歌曲推荐</a>
                </p>
                <p class="idv s-fc4" title="根据你的口味生成，每天6:00更新">
                    根据你的口味生成，<br>每天6:00更新
                </p>
            </li>

            <li v-for="(item, index) in recommendResource" :key="index">
                <div class="u-cover u-cover-1">
                    <img :src="item.picUrl+'?param=140y140'">
                    <a :title="item.name" :href="'/playlist?id='+item.id" class="msk"></a>
                    <div class="bottom">
                        <a title="播放" class="icon-play f-fr" href="javascript:;" ></a>
                        <a href="javascript:;" class="icon-headset"></a>
                        <span class="nb">{{item.playcount | formatCount}}</span>
                    </div>
                </div>
                <p class="dec f-brk">
                    <a :title="item.name" class="tit s-fc0" :href="'/playlist?id='+item.id">{{item.name}}</a>
                </p>
                <p class="idv f-brk s-fc4" :title="item.copywriter">
                    <em>{{item.copywriter}}</em>
                    <a class="btn s-bg s-bg-13" href="#">不感兴趣</a>
                </p>
            </li>

        </ul>
    </div>
</template>

<script>
    import { formatPlayCount } from '@/utils'
    export default {
        name: 'RecommendResource',
        props: {
            recommendResource: {
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


