<template>
    <div class="n-top50">
        <!-- 热门50单曲 -->
        <div class="m-info">
            <div class="btns f-cb">
                <a href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" title="播放"><i><em class="ply"></em>播放</i></a>
                <a href="javascript:;" class="u-btni u-btni-add" title="添加到播放列表"></a>
                <a href="javascript:;" class="u-btni u-btni-fav"><i>收藏热门50</i></a>
            </div>
        </div>
        <div class="f-cb">
            <div class="j-flag" v-if="hotSongsData">
                <table class="m-table m-table-1 m-table-4">
                    <tbody>
                        <tr v-for="(item, index) in hotSongsData" :key="item.id">
                            <td class="w1">
                                <div class="hd">
                                    <span class="ply">&nbsp;</span><span class="num">{{index+1}}</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="f-cb">
                                    <div class="tt">
                                        <div class="ttc">
                                            <span class="txt">
                                                <router-link :to="{name: 'songDetail',query: {id: item.id}}">
                                                    <b :title="item.name">{{item.name}}</b>
                                                </router-link>
                                                <span
                                                v-if="item.alia.length"
                                                :title="item.alia[0]" class="s-fc8"> - ({{item.alia[0]}})</span>

                                                <router-link 
                                                v-if="item.mv !== 0"
                                                :to="{name: 'mvDetail', query: {mvid: item.mv}}" 
                                                class="mv" 
                                                title="播放mv">MV</router-link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="w2-1 s-fc3">
                                <span class="u-dur ">{{item.dt | formatMusicDuration}}</span>
                                <div class="opt hshow">
                                    <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"></a>
                                    <span class="icn icn-fav" title="收藏"></span>
                                    <span class="icn icn-share" title="分享">分享</span>
                                    <span class="icn icn-dl" title="下载"></span>
                                </div>
                            </td>
                            <td class="w4">
                                <div class="text">
                                    <router-link
                                    :to="{name: 'albumDetail', query: {id: item.al.id}}" 
                                    :title="item.al.name">{{item.al.name}}</router-link>
                                </div>
                            </td>
                            <td class="w5"><span class="hot u-hot"><i style="width:92%"><i></i></i></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { artistSongs, simiArtist } from '@/api'
import { formatSeconds} from '@/utils'
export default {
    name: 'hotSongsTop50',
    data() {
        return {
            hotSongsData: null,
        }
    },
    created() {
        this.getArtistData(this.$route.query.id)
    },
    watch: {
        '$route'(to,from) {
            this.getArtistData(this.$route.query.id)
        }
    },
    methods: {
        getArtistData(id) {
            artistSongs(id).then(res => {
                if (res.data.code === 200) {
                    this.hotSongsData = res.data.hotSongs
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        },
    },
    filters: {
        formatMusicDuration(val) { // 音乐播放总时长格式
            return formatSeconds(val)
        }
    }
}
</script>

<style scoped>
.n-top50 .btns {
    margin: 20px 0 10px;
}
</style>
