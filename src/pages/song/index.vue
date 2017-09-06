<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <div class="m-lycifo">
                        <div class="f-cb">
                            <!-- 专辑封面 S -->
                            <div class="cvrwrap f-cb f-pr">
                                <div class="u-cover u-cover-6 f-fl">
                                    <img src="http://p4.music.126.net/cUTk0ewrQtYGP2YpPZoUng==/3265549553028224.jpg?param=130y130" class="j-img">
                                    <span class="msk f-alpha"></span>
                                </div>
                                <div class="out s-fc3">
                                    <i class="u-icn u-icn-95 f-fl"></i>
                                    <a data-href="/outchain/2/418603077/" class="des s-fc7">生成外链播放器</a>
                                </div>
                            </div>
                            <!-- 专辑封面 S -->

                            <div class="cnt">
                                <div class="hd">
                                    <i class="lab u-icn u-icn-37"></i>
                                    <div class="tit">
                                        <em class="f-ff2">告白气球</em>
                                        <router-link
                                        :to="{name: 'mvDetail', query: {mvid: 5382080}}">
                                            <i class="icn u-icn u-icn-2"></i>
                                        </router-link>
                                    </div>
                                </div>
                                <p class="des s-fc4">
                                    歌手：
                                    <span title="周杰伦">
                                        <router-link
                                        :to="{name: 'artistDetail', query: {id: 6452}}"
                                        class="s-fc7">周杰伦</router-link>
                                    </span>
                                </p>
                                <p class="des s-fc4">
                                    所属专辑：
                                    <router-link
                                    :to="{name: 'albumDetail', query: {id: 34720827}}"
                                    class="s-fc7">周杰伦的床边故事</router-link>
                                </p>
                                <div class="m-info">
                                    <div class="btns f-cb">
                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放">
                                        <i><em class="ply"></em>播放</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>
                                    <a class="u-btni u-btni-fav " href="javascript:;">
                                        <i>收藏</i>
                                    </a>
                                    <a class="u-btni u-btni-share " href="javascript:;">
                                        <i>分享</i>
                                    </a>
                                    <a class="u-btni u-btni-dl " href="javascript:;">
                                        <i>下载</i>
                                    </a>
                                    <a href="javascript:;" class="u-btni u-btni-cmmt ">
                                        <i>(<span>335669</span>)</i>
                                    </a>
                                    </div>
                                </div>
                                <!-- 歌词 -->
                                <div class="bd bd-open f-brk f-ib">
                                    <div>
                                        拥有你就拥有  全世界<br><br>亲爱的  爱上你  从那天起<br>甜蜜的很轻易<br>亲爱的  别任性  你的眼睛<br>在说我愿意<br><br>塞纳河畔  左岸的咖啡<br>我手一杯  品尝你的美<br>留下唇印的嘴<br><br>花店玫瑰  名字写错谁<br>告白气球  风吹到对街<br>微笑在天上飞<br><br>你说你有点难追  想让我知难而退<br>礼物不需挑最贵  只要香榭的落叶<br>喔～营造浪漫的约会  不害怕搞砸一切<br>拥有你就拥有  全世界<br><br>亲爱的  爱上你  从那天起<br>甜蜜的很轻易<br>亲爱的  别任性  你的眼睛<br>在说我愿意<br><br>亲爱的  爱上你  恋爱日记<br>飘香水的回忆<br>一整瓶  的梦境  全都有你<br>搅拌在一起<br><br>亲爱的别任性  你的眼睛<br>在说我愿意<br><br>
                                    </div>
                                    <div class="crl">
                                        <a href="javascript:void(0)" class="s-fc7">展开<i class="u-icn u-icn-69"></i></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="n-cmt">
                        <div class="u-title u-title-1">
                            <h3><span class="f-ff2">评论</span></h3>
                            <span class="sub s-fc3">共<span class="j-flag">335669</span>条评论</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="g-sd4">
            <div class="g-wrap7">
                <h3 class="u-hd3">
                    <span class="f-fl">相似歌曲</span>
                </h3>
                <ul class="m-sglist f-cb">
                    <li class="f-cb">
                        <div class="txt">
                            <div class="f-thide">
                                <a href="/song?id=186016" title="晴天" class="s-fc1">晴天</a>
                            </div>
                            <div class="f-thide s-fc4">
                                <span title="周杰伦"><a class="s-fc4" href="/artist?id=6452">周杰伦</a></span>
                            </div>
                        </div>
                        <div class="opr f-cb">
                            <a class="play" href="javascript:;"></a>
                            <a class="add" href="javascript:;"></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Song'
}
</script>


<style>

</style>
