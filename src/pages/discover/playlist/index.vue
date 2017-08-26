<template>
    <div class="g-bd">
        <div class="g-wrap p-pl f-pr">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2 d-flag">全部</span>
                    <a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag" @click="toggleCatMenu">
                        <i>选择分类<em class="u-icn u-icn-38"></em></i>
                    </a>
                </h3>
                <div class="u-btn f-fr d-flag" :class="classOrder">
                    <router-link :to="{name: 'playlist', query: {order: 'hot'}}" class="a1">
                        热门
                    </router-link>
                    <router-link :to="{name: 'playlist', query: {order: 'new'}}" class="a2">
                        最新
                    </router-link>
                </div>
            </div>

            <!-- 分类标签 S -->
            <div class="n-sltlyr d-flag" v-show="showCatMenu">
                <div class="hd"><i class="icn"></i></div>
                <div class="bd">
                    <h3><a href="/discover/playlist/" class="j-flag u-btn u-btn-g s-fc1" data-cat="全部"><em>全部风格</em></a></h3>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-71"></i>语种</dt>
                        <dd>
                            <a class="s-fc1 z-slt" href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" data-cat="华语">华语</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%AC%A7%E7%BE%8E" data-cat="欧美">欧美</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%A5%E8%AF%AD" data-cat="日语">日语</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9F%A9%E8%AF%AD" data-cat="韩语">韩语</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%B2%A4%E8%AF%AD" data-cat="粤语">粤语</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%B0%8F%E8%AF%AD%E7%A7%8D" data-cat="小语种">小语种</a><span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-6"></i>风格</dt>
                        <dd>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" data-cat="流行">流行</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" data-cat="摇滚">摇滚</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" data-cat="民谣">民谣</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" data-cat="电子">电子</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%88%9E%E6%9B%B2" data-cat="舞曲">舞曲</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%AF%B4%E5%94%B1" data-cat="说唱">说唱</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BD%BB%E9%9F%B3%E4%B9%90" data-cat="轻音乐">轻音乐</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%88%B5%E5%A3%AB" data-cat="爵士">爵士</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B9%A1%E6%9D%91" data-cat="乡村">乡村</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=R%26B%2FSoul" data-cat="R&amp;B/Soul">R&amp;B/Soul</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E5%85%B8" data-cat="古典">古典</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B0%91%E6%97%8F" data-cat="民族">民族</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%8B%B1%E4%BC%A6" data-cat="英伦">英伦</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%87%91%E5%B1%9E" data-cat="金属">金属</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%9C%8B%E5%85%8B" data-cat="朋克">朋克</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%93%9D%E8%B0%83" data-cat="蓝调">蓝调</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%9B%B7%E9%AC%BC" data-cat="雷鬼">雷鬼</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%96%E7%95%8C%E9%9F%B3%E4%B9%90" data-cat="世界音乐">世界音乐</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%8B%89%E4%B8%81" data-cat="拉丁">拉丁</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A6%E7%B1%BB%2F%E7%8B%AC%E7%AB%8B" data-cat="另类/独立">另类/独立</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=New%20Age" data-cat="New Age">New Age</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8F%A4%E9%A3%8E" data-cat="古风">古风</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%8E%E6%91%87" data-cat="后摇">后摇</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=Bossa%20Nova" data-cat="Bossa Nova">Bossa Nova</a><span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-7"></i>场景</dt>
                        <dd>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%99%A8" data-cat="清晨">清晨</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%A4%9C%E6%99%9A" data-cat="夜晚">夜晚</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A6%E4%B9%A0" data-cat="学习">学习</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%B7%A5%E4%BD%9C" data-cat="工作">工作</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%8D%88%E4%BC%91" data-cat="午休">午休</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E4%B8%8B%E5%8D%88%E8%8C%B6" data-cat="下午茶">下午茶</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%9C%B0%E9%93%81" data-cat="地铁">地铁</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%A9%BE%E8%BD%A6" data-cat="驾车">驾车</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E8%BF%90%E5%8A%A8" data-cat="运动">运动</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%97%85%E8%A1%8C" data-cat="旅行">旅行</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%95%A3%E6%AD%A5" data-cat="散步">散步</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%85%92%E5%90%A7" data-cat="酒吧">酒吧</a><span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-8"></i>情感</dt>
                        <dd>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%80%E6%97%A7" data-cat="怀旧">怀旧</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%85%E6%96%B0" data-cat="清新">清新</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B5%AA%E6%BC%AB" data-cat="浪漫">浪漫</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%A7%E6%84%9F" data-cat="性感">性感</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E4%BC%A4%E6%84%9F" data-cat="伤感">伤感</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B2%BB%E6%84%88" data-cat="治愈">治愈</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%94%BE%E6%9D%BE" data-cat="放松">放松</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AD%A4%E7%8B%AC" data-cat="孤独">孤独</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8" data-cat="感动">感动</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%85%B4%E5%A5%8B" data-cat="兴奋">兴奋</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BF%AB%E4%B9%90" data-cat="快乐">快乐</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%AE%89%E9%9D%99" data-cat="安静">安静</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%80%9D%E5%BF%B5" data-cat="思念">思念</a><span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-9"></i>主题</dt>
                        <dd class="last">
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%BD%B1%E8%A7%86%E5%8E%9F%E5%A3%B0" data-cat="影视原声">影视原声</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=ACG" data-cat="ACG">ACG</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A0%A1%E5%9B%AD" data-cat="校园">校园</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%B8%B8%E6%88%8F" data-cat="游戏">游戏</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=70%E5%90%8E" data-cat="70后">70后</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=80%E5%90%8E" data-cat="80后">80后</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=90%E5%90%8E" data-cat="90后">90后</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BD%91%E7%BB%9C%E6%AD%8C%E6%9B%B2" data-cat="网络歌曲">网络歌曲</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=KTV" data-cat="KTV">KTV</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BB%8F%E5%85%B8" data-cat="经典">经典</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E7%BF%BB%E5%94%B1" data-cat="翻唱">翻唱</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%90%89%E4%BB%96" data-cat="吉他">吉他</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E9%92%A2%E7%90%B4" data-cat="钢琴">钢琴</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%99%A8%E4%B9%90" data-cat="器乐">器乐</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E5%84%BF%E7%AB%A5" data-cat="儿童">儿童</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=%E6%A6%9C%E5%8D%95" data-cat="榜单">榜单</a><span class="line">|</span>
                            <a class="s-fc1 " href="/discover/playlist/?cat=00%E5%90%8E" data-cat="00后">00后</a><span class="line">|</span>
                        </dd>
                    </dl>
                </div>
                <div class="ft"></div>
            </div>
            <!-- 分类标签 End -->

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
                    <a href="#" class="zbtn zprv js-disabled">上一页</a>
                    <a href="#" class="zpgi zpg1 js-selected">1</a>
                    <a href="#" class="zpgi zpg2">2</a>
                    <a href="#" class="zpgi zpg3">3</a>
                    <a href="#" class="zpgi zpg4">4</a>
                    <a href="#" class="zpgi zpg5">5</a>
                    <a href="#" class="zpgi zpg6">6</a>
                    <a href="#" class="zpgi zpg7">7</a>
                    <a href="#" class="zpgi zpg8">8</a>
                    <span class="zdot">...</span>
                    <a href="#" class="zpgi zpg9">3697</a>
                    <a href="#" class="zbtn znxt">下一页</a>
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
            playlist: null,
            classOrder: {
                'u-btn-hot': true,
                'u-btn-new': false,
            },
            showCatMenu: false,
        }
    },
    created() {
        if ( !this.$route.query.order ) {
            this.classOrder['u-btn-hot'] = true
        }
        this.getPlaylist()
    },
    watch: {
        '$route' (to, from) {
            // 监听路由参数的变化，来获取新的数据
            this.getPlaylist(this.$route.query.order,this.$route.query.cat)
            if ( this.$route.query.order == 'hot' ) {
                this.classOrder['u-btn-hot'] = true
            } else {
                this.classOrder['u-btn-hot'] = false
            }

            if ( this.$route.query.order == 'new' ) {
                this.classOrder['u-btn-new'] = true
            } else {
                this.classOrder['u-btn-new'] = false
            }

            if ( !this.$route.query.order ) {
                this.classOrder['u-btn-hot'] = true
            }
        }
    },
    methods: {
        getPlaylist(order, cat, limit) {
            playlist(order, cat, limit).then(res => {
                if (res.data.code === 200) {
                    this.playlist = res.data.playlists
                } else {
                    console.error('数据获取错误')
                }
            }).catch(error => {
                console.error(error)
            })
        },
        toggleCatMenu() {
            this.showCatMenu = !this.showCatMenu
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
