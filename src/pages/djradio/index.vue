<template>
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <!-- 描述信息 S -->
                    <div class="m-info f-cb" v-if="djRadioData">
                        <div class="cover u-cover u-cover-dj">
                            <img :src="djRadioData.picUrl+'?param=200y200'">
                            <span class="msk"></span>
                        </div>
                        <div class="cnt">
                            <div class="cntc">
                                <div class="hd f-cb">
                                    <i class="f-fl u-icn u-icn-93"></i>
                                    <div class="tit">
                                        <h2 class="f-ff2">{{djRadioData.name}}</h2>
                                    </div>
                                </div>
                                <div class="user f-cb">
                                    <router-link
                                    :to="{name: 'user', query: {id: djRadioData.dj.userId}}"
                                    class="face"
                                    >
                                        <img :src="djRadioData.dj.avatarUrl+'?param=50y50'">
                                    </router-link>
                                    <span class="name">
                                        <router-link
                                        :to="{name: 'user', query: {id: djRadioData.dj.userId}}"
                                        :title="djRadioData.dj.nickname"
                                        class="s-fc7">
                                            {{djRadioData.dj.nickname}}
                                        </router-link>
                                    </span>
                                    <sup class="u-icn u-icn-1 "></sup>
                                </div>
                                <div class="btns f-cb j-flag">
                                    <a class="u-btni u-btni-sub"><i>订阅({{djRadioData.subCount}})</i></a>
                                    <a href="javascript:void(0)" class="u-btni u-btni-playall"><i>播放全部</i></a>
                                    <a href="javascript:void(0)" class="u-btni u-btni-share "><i>分享({{djRadioData.shareCount}})</i></a>
                                </div>
                                <p class="intr f-brk">
                                    <router-link
                                    :to="{name: 'category', query: {id: djRadioData.categoryId}}"
                                    class="cat cat u-type u-type-red">
                                        {{djRadioData.category}}
                                    </router-link>
                                    {{djRadioData.desc}}<br>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 描述信息 End -->

                    <div class="n-songtb">
                        <div class="u-title u-title-1 f-cb">
                            <h3>
                                <span class="f-ff2">节目列表</span>
                            </h3>
                            <span class="sub s-fc4">共{{programCount}}期</span>
                            <div class="u-sort f-fr f-cb">
                                <a href="javascript:void(0)" class="desc z-sel" title="降序"></a>
                                <a href="javascript:void(0)" class="asc" title="升序"></a>
                            </div>
                            <div class="out f-fr">
                                <i class="u-icn u-icn-95"></i>
                                <a class="s-fc7" href="/outchain/4/335425050/">生成外链播放器</a>
                            </div>
                        </div>
                        <div class="u-goon f-hide j-flag"></div>

                        <table class="m-table m-table-program" v-if="djProgramData">
                            <tbody>
                                <tr class="j-tr" v-for="(item, index) in djProgramData" :key="item.id">
                                    <td class="col1">
                                        <div class="hd">
                                            <span class="ply" title="播放"></span>
                                            <span class="num">{{item.serialNum}}</span>
                                        </div>
                                    </td>
                                    <td class="col2" style="width:300px">
                                        <div class="tt f-thide">
                                            <a href="/program?id=909198537" :title="item.name">{{item.name}}</a>
                                        </div>
                                        <div class="opt">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                            <span title="分享" class="icn icn-share">分享</span>
                                            <span title="下载" class="icn icn-dl">下载</span>
                                        </div>
                                    </td>
                                    <td class="col3" style="width:auto;">
                                        <span class="s-fc3">播放{{item.listenerCount}}</span>
                                    </td>
                                    <td class="col4" style="width:auto;">
                                        <span class="s-fc3">赞{{item.likedCount}}</span>
                                    </td>
                                    <td class="col5" style="width:auto;">
                                        <span class="s-fc4">{{item.createTime | formatUpdateDate}}</span>
                                    </td>
                                    <td class="f-pr" style="width:auto;">
                                        <div class="last f-hide"></div>
                                        <span class="s-fc4">{{item.duration | formatMusicDuration}}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { djDetail, djProgram } from '@/api'
import { formatDate, formatSeconds} from '@/utils'
export default {
    name: 'djRadioDetail',
    data() {
        return {
            djRadioData: null,
            djProgramData: null,
            programCount: null,
        }
    },
    created() {
        this.getDj(this.$route.query.id)
        this.getDjProgram(this.$route.query.id)
    },
    methods: {
        getDj(id) {
            djDetail(id).then(res => {
                if(res.data.code === 200) {
                    this.djRadioData = res.data.djRadio
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
        getDjProgram(id) {
            djProgram(id).then(res => {
                if(res.data.code === 200) {
                    this.djProgramData = res.data.programs
                    this.programCount = res.data.count
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
    filters: {
        formatUpdateDate(date) { // 发行时间日期格式
            return formatDate.yyyymmdd(date)
        },
        formatMusicDuration(val) { // 音乐播放总时长格式
            return formatSeconds(val)
        }
    }
}
</script>

<style scoped>
.g-bd4 {
    background-image: none;
    background-color: #fff;
}

.g-mn4c {
    margin-right: 0;
}
.m-table tbody tr .col2 .opt {
    display: none;
}
.m-table tbody tr:hover .col2 .opt {
    display: block;
}
</style>