<template>
    <div class="g-bd">
        <div class="g-wrap p-pl f-pr">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2 d-flag">全部</span>
                    <a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag">
                        <i>选择分类<em class="u-icn u-icn-38"></em></i>
                    </a>
                </h3>
                <div class="u-btn f-fr u-btn-hot d-flag">
                    <a href="/discover/playlist/?order=hot" class="a1">热门</a>
                    <a href="/discover/playlist/?order=new" class="a2">最新</a>
                </div>
            </div>

            <ul class="m-cvrlst f-cb">
                <li v-for="item in playlist" :key="item.id">
                    <div class="u-cover u-cover-1">
                        <img class="j-flag" :src="item.coverImgUrl+'?param=140y140'">
                        <a :title="item.name" :href="'/playlist?id='+item.id" class="msk"></a>
                        <div class="bottom">
                            <a class="icon-play f-fr" title="播放" href="javascript:;"></a>
                            <span class="icon-headset"></span>
                            <span class="nb">{{item.playCount | formatCount}}</span>
                        </div>
                    </div>
                    <p class="dec">
                        <a :title="item.name" :href="'/playlist?id='+item.id" class="tit f-thide s-fc0">{{item.name}}</a>
                    </p>
                    <p>
                        <span class="s-fc4">by</span>
                        <a :title="item.creator.nickname" :href="'/user/home?id='+item.creator.userId" class="nm nm-icn f-thide s-fc3">{{item.creator.nickname}}</a>
                        <sup class="u-icn u-icn-84" v-if="item.creator.vipType === 0"></sup>
                        <sup class="u-icn u-icn-1"  v-if="item.creator.vipType === 11"></sup>
                    </p>
                </li>
            </ul>

            <!-- 分页 S -->
            <div class="j-flag">
                <div class="u-page">
                    <a href="#" class="zbtn zprv js-p-1503235651126 js-disabled">上一页</a>
                    <a href="#" class="zpgi zpg1 js-i-1503235651126 js-selected">1</a>
                    <a href="#" class="zpgi zpg2 js-i-1503235651126">2</a>
                    <a href="#" class="zpgi zpg3 js-i-1503235651126">3</a>
                    <a href="#" class="zpgi zpg4 js-i-1503235651126">4</a>
                    <a href="#" class="zpgi zpg5 js-i-1503235651126">5</a>
                    <a href="#" class="zpgi zpg6 js-i-1503235651126">6</a>
                    <a href="#" class="zpgi zpg7 js-i-1503235651126">7</a>
                    <a href="#" class="zpgi zpg8 js-i-1503235651126">8</a>
                    <span class="zdot">...</span>
                    <a href="#" class="zpgi zpg9 js-i-1503235651126">3697</a>
                    <a href="#" class="zbtn znxt js-n-1503235651126">下一页</a>
                </div>
            </div>
            <!-- 分页 End -->

        </div>
    </div>
</template>

<script>
import { playlist } from '@/api'
import { formatPlayCount } from '@/utils'
export default {
    name: 'Playlist',
    data() {
        return {
            playlist: null
        }
    },
    created() {
        this.getToplist()
    },
    methods: {
        getToplist() {
            playlist().then(res => {
                if (res.data.code === 200) {
                    this.playlist = res.data.playlists
                } else {
                    console.error('数据获取错误')
                }
            }).catch(error => {
                console.error(error)
            })
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
