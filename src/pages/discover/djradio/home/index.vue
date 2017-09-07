<template>
    <div>
        <div class="rditop f-cb">
            <!-- 推荐节目 S -->
            <div class="blk" style="width:100%;">
                <div class="u-title f-cb">
                    <h3><span class="f-ff2">推荐节目</span></h3>
                    <span class="sub s-fc4">（每日更新）</span>
                </div>
                <ul class="m-plylist toplist toplist-recmd f-cb" v-if="djRecommendData">
                    <li class="itm" v-for="item in djRecommendData" :key="item.id">
                        <a class="cvr u-cover u-cover-tiny f-fl" title="播放">
                            <img :src="item.coverUrl+'?param=40x40'" alt="">
                            <i class="ply f-pa f-dn f-alpha"></i>
                        </a>
                        <div class="col cnt f-thide">
                            <a :href="'/program?id='+item.id" class="s-fc1" :title="item.name">{{item.name}}</a>
                        </div>
                        <div class="col artist f-thide">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.radio.id}}"
                            :title="item.radio.name"
                            class="s-fc3">{{item.radio.name}}</router-link>
                        </div>
                        <div class="col col-4 s-fc4">播放{{item.listenerCount}}</div>
                        <div class="col col-5 s-fc4">赞{{item.likedCount}} </div>
                        <a :href="'/discover/djradio/category?id='+item.radio.categoryId" class="tag u-type">{{item.radio.category}}</a>
                    </li>
                </ul>
            </div>
            <!-- 推荐节目 End -->
        </div>

        <!-- 音乐故事 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">音乐故事</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="yinyuegushi">
                <li v-for="item in yinyuegushi" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 音乐故事 End -->


        <!-- 美文读物 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">美文读物</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="meiwenduwu">
                <li v-for="item in meiwenduwu" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 美文读物 End -->


        <!-- 脱口秀 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">脱口秀</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="tuokouxiu">
                <li v-for="item in tuokouxiu" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 脱口秀 End -->

        <!-- 情感调频 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">情感调频</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="qinggantiaopin">
                <li v-for="item in qinggantiaopin" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 情感调频 End -->


        <!-- 创作|翻唱 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">创作|翻唱</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="chuangzuofanchang">
                <li v-for="item in chuangzuofanchang" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 创作|翻唱 End -->

        <!-- 人文历史 End -->
        <div class="rdimore">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2">
                        <a href="/discover/djradio/category?id=2">人文历史</a>
                        <span class="f-ff1">·</span>电台
                    </span>
                </h3>
                <a href="/discover/djradio/category?id=2" class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="rdilist f-cb" v-if="renwenlishi">
                <li v-for="item in renwenlishi" :key="item.id">
                    <router-link
                    :to="{name: 'djRadioDetail', query: {id: item.id}}"
                    class="cvr u-cover u-cover-rdi f-fl">
                        <img :src="item.picUrl+'?param=200y200'" alt="">
                    </router-link>
                    <div class="cnt">
                        <h3 class="f-fs3">
                            <router-link
                            :to="{name: 'djRadioDetail', query: {id: item.id}}"
                            :title="item.name"
                            class="s-fc1">
                            {{item.name}}
                            </router-link>
                        </h3>
                        <p class="note s-fc4">{{item.rcmdtext}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 人文历史 End -->
    </div>
</template>

<script>
import { djRecommend, djRecommendType } from '@/api'
export default {
    name: 'DJRadioMain',
    data() {
        return {
            djRecommendData: null, // 推荐节目
            yinyuegushi: null, // 音乐故事
            meiwenduwu: null, // 美文读物
            tuokouxiu: null, // 脱口秀
            qinggantiaopin: null, // 情感调频
            chuangzuofanchang: null, // 创作/翻唱
            renwenlishi: null, // 人物历史
        }
    },
    created() {
        this.getDJRecommend()

        this.getDJRecommendType(2)
        this.getDJRecommendType(6)
        this.getDJRecommendType(5)
        this.getDJRecommendType(3)
        this.getDJRecommendType(2001)
        this.getDJRecommendType(11)
    },
    methods: {
        getDJRecommend() {
            // 推荐节目
            djRecommend().then(res => {
                if ( res.data.code === 200 ) {
                    this.djRecommendData = res.data.programs
                } else {
                    console.error('数据获取出错了')
                }
            }).catch(error => {
                console.error(error)
            })
        },
        getDJRecommendType(id) {
            // 分类推荐
            djRecommendType(id).then(res => {
                if ( res.data.code === 200 ) {
                    switch(id) {
                        case 2:
                            this.yinyuegushi = res.data.djRadios.slice(0,4)
                        case 6:
                            this.meiwenduwu = res.data.djRadios.slice(0,4)
                        case 5:
                            this.tuokouxiu = res.data.djRadios.slice(0,4)
                        case 3:
                            this.qinggantiaopin = res.data.djRadios.slice(0,4)
                        case 2001:
                            this.chuangzuofanchang = res.data.djRadios.slice(0,4)
                        case 11:
                            this.renwenlishi = res.data.djRadios.slice(0,4)
                    }
                } else {
                    console.error('数据获取出错了')
                }
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>
