<template>
    <div class="g-bd">
        <div class="g-wrap p-pl f-pr">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2 d-flag">{{currentCat}}</span>
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
                    <h3>
                        <router-link :to="{name: 'playlist'}" class="j-flag u-btn u-btn-g s-fc1">
                            <em>全部风格</em>
                        </router-link>
                    </h3>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-71"></i>语种</dt>
                        <dd>
                            <router-link :to="{name: 'playlist', query: {cat: '华语'}}" exact class="s-fc1" active-class="z-slt">
                                华语
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '欧美'}}" exact class="s-fc1" active-class="z-slt">
                                欧美
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '日语'}}" exact class="s-fc1" active-class="z-slt">
                                日语
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '韩语'}}" exact class="s-fc1" active-class="z-slt">
                                韩语
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '粤语'}}" exact class="s-fc1" active-class="z-slt">
                                粤语
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '小语种'}}" exact class="s-fc1" active-class="z-slt">
                                小语种
                            </router-link>
                            <span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-6"></i>风格</dt>
                        <dd>
                            <router-link :to="{name: 'playlist', query: {cat: '流行'}}" exact class="s-fc1" active-class="z-slt">
                                流行
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '摇滚'}}" exact class="s-fc1" active-class="z-slt">
                                摇滚
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '民谣'}}" exact class="s-fc1" active-class="z-slt">
                                民谣
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '电子'}}" exact class="s-fc1" active-class="z-slt">
                                电子
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '舞曲'}}" exact class="s-fc1" active-class="z-slt">
                                舞曲
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '说唱'}}" exact class="s-fc1" active-class="z-slt">
                                说唱
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '轻音乐'}}" exact class="s-fc1" active-class="z-slt">
                                轻音乐
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '爵士'}}" exact class="s-fc1" active-class="z-slt">
                                爵士
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '乡村'}}" exact class="s-fc1" active-class="z-slt">
                                乡村
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: 'R&amp;B/Soul'}}" exact class="s-fc1" active-class="z-slt">
                                R&amp;B/Soul
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '古典'}}" exact class="s-fc1" active-class="z-slt">
                                古典
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '民族'}}" exact class="s-fc1" active-class="z-slt">
                                民族
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '英伦'}}" exact class="s-fc1" active-class="z-slt">
                                英伦
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '金属'}}" exact class="s-fc1" active-class="z-slt">
                                金属
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '朋克'}}" exact class="s-fc1" active-class="z-slt">
                                朋克
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '蓝调'}}" exact class="s-fc1" active-class="z-slt">
                                蓝调
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '雷鬼'}}" exact class="s-fc1" active-class="z-slt">
                                雷鬼
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '世界音乐'}}" exact class="s-fc1" active-class="z-slt">
                                世界音乐
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '拉丁'}}" exact class="s-fc1" active-class="z-slt">
                                拉丁
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '另类/独立'}}" exact class="s-fc1" active-class="z-slt">
                                另类/独立
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: 'New Age'}}" exact class="s-fc1" active-class="z-slt">
                                New Age
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '古风'}}" exact class="s-fc1" active-class="z-slt">
                                古风
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '后摇'}}" exact class="s-fc1" active-class="z-slt">
                                后摇
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: 'Bossa Nova'}}" exact class="s-fc1" active-class="z-slt">
                                Bossa Nova
                            </router-link>
                            <span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-7"></i>场景</dt>
                        <dd>
                            <router-link :to="{name: 'playlist', query: {cat: '清晨'}}" exact class="s-fc1" active-class="z-slt">
                                清晨
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '夜晚'}}" exact class="s-fc1" active-class="z-slt">
                                夜晚
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '学习'}}" exact class="s-fc1" active-class="z-slt">
                                学习
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '工作'}}" exact class="s-fc1" active-class="z-slt">
                                工作
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '午休'}}" exact class="s-fc1" active-class="z-slt">
                                午休
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '下午茶'}}" exact class="s-fc1" active-class="z-slt">
                                下午茶
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '地铁'}}" exact class="s-fc1" active-class="z-slt">
                                地铁
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '驾车'}}" exact class="s-fc1" active-class="z-slt">
                                驾车
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '运动'}}" exact class="s-fc1" active-class="z-slt">
                                运动
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '旅行'}}" exact class="s-fc1" active-class="z-slt">
                                旅行
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '散步'}}" exact class="s-fc1" active-class="z-slt">
                                散步
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '酒吧'}}" exact class="s-fc1" active-class="z-slt">
                                酒吧
                            </router-link>
                            <span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-8"></i>情感</dt>
                        <dd>
                            <router-link :to="{name: 'playlist', query: {cat: '怀旧'}}" exact class="s-fc1" active-class="z-slt">
                                怀旧
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '清新'}}" exact class="s-fc1" active-class="z-slt">
                                清新
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '浪漫'}}" exact class="s-fc1" active-class="z-slt">
                                浪漫
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '性感'}}" exact class="s-fc1" active-class="z-slt">
                                性感
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '伤感'}}" exact class="s-fc1" active-class="z-slt">
                                伤感
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '治愈'}}" exact class="s-fc1" active-class="z-slt">
                                治愈
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '放松'}}" exact class="s-fc1" active-class="z-slt">
                                放松
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '孤独'}}" exact class="s-fc1" active-class="z-slt">
                                孤独
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '感动'}}" exact class="s-fc1" active-class="z-slt">
                                感动
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '兴奋'}}" exact class="s-fc1" active-class="z-slt">
                                兴奋
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '快乐'}}" exact class="s-fc1" active-class="z-slt">
                                快乐
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '安静'}}" exact class="s-fc1" active-class="z-slt">
                                安静
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '思念'}}" exact class="s-fc1" active-class="z-slt">
                                思念
                            </router-link>
                            <span class="line">|</span>
                        </dd>
                    </dl>
                    <dl class="f-cb">
                        <dt><i class="u-icn u-icn-9"></i>主题</dt>
                        <dd class="last">
                            <router-link :to="{name: 'playlist', query: {cat: '影视原声'}}" exact class="s-fc1" active-class="z-slt">
                                影视原声
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: 'ACG'}}" exact class="s-fc1" active-class="z-slt">
                                ACG
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '校园'}}" exact class="s-fc1" active-class="z-slt">
                                校园
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '游戏'}}" exact class="s-fc1" active-class="z-slt">
                                游戏
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '70后'}}" exact class="s-fc1" active-class="z-slt">
                                70后
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '80后'}}" exact class="s-fc1" active-class="z-slt">
                                80后
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '90后'}}" exact class="s-fc1" active-class="z-slt">
                                90后
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '网络歌曲'}}" exact class="s-fc1" active-class="z-slt">
                                网络歌曲
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: 'KTV'}}" exact class="s-fc1" active-class="z-slt">
                                KTV
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '经典'}}" exact class="s-fc1" active-class="z-slt">
                                经典
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '翻唱'}}" exact class="s-fc1" active-class="z-slt">
                                翻唱
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '吉他'}}" exact class="s-fc1" active-class="z-slt">
                                吉他
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '钢琴'}}" exact class="s-fc1" active-class="z-slt">
                                钢琴
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '器乐'}}" exact class="s-fc1" active-class="z-slt">
                                器乐
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '儿童'}}" exact class="s-fc1" active-class="z-slt">
                                儿童
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '榜单'}}" exact class="s-fc1" active-class="z-slt">
                                榜单
                            </router-link>
                            <span class="line">|</span>
                            <router-link :to="{name: 'playlist', query: {cat: '00后'}}" exact class="s-fc1" active-class="z-slt">
                                00后
                            </router-link>
                            <span class="line">|</span>
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
                    <p>
                        <span class="s-fc4">by</span>
                        <router-link
                        :to="{name: 'userHome', query: {id: item.creator.userId}}"
                        :title="item.creator.nickname"
                        class="nm nm-icn f-thide s-fc3">
                        {{item.creator.nickname}}
                        </router-link>
                        <sup class="u-icn u-icn-84" v-if="item.creator.vipType === 0"></sup>
                        <sup class="u-icn u-icn-1"  v-if="item.creator.vipType === 11"></sup>
                    </p>
                </li>
            </ul>

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
            currentCat: '全部',
            order: 'hot',
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
        if ( !this.$route.query.cat ) {
            this.currentCat = '全部'
        } else {
            this.currentCat = this.$route.query.cat
        }
        this.getPlaylist()
    },
    watch: {
        '$route' (to, from) {
            // 监听路由参数的变化，来获取新的数据
            this.getPlaylist(this.$route.query.order, this.$route.query.cat)
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

            if ( this.$route.query.cat ) {
                this.currentCat = this.$route.query.cat
            } else {
                this.currentCat = '全部'
            }
        }
    },
    methods: {
        getPlaylist(order, cat, limit) {
            if ( this.showCatMenu ) this.showCatMenu = false

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
