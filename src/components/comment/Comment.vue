<template>
<div>
    <div class="u-title u-title-1">
        <h3><span class="f-ff2">评论</span></h3>
        <span class="sub s-fc3">共<span class="j-flag" v-if="totalComment">{{totalComment}}</span>条评论</span>
    </div>
    <div class="m-cmmt">
        <div class="iptarea" v-if="false">
            <div class="head"><img src="http://p3.music.126.net/1RsTROfvnB-Ryv33ZT5FRA==/8887352487628687.jpg?param=50y50"></div>
            <div class="j-flag">
                <div>
                    <div class="m-cmmtipt f-cb f-pr">
                        <div class="u-txtwrap holder-parent f-pr" style="display: block;">
                            <textarea class="u-txt area j-flag" placeholder="评论"></textarea>
                        </div>
                        <div class="btns f-cb f-pr">
                            <i class="icn u-icn u-icn-36 j-flag"></i>
                            <i class="icn u-icn u-icn-41 j-flag"></i>
                            <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">评论</a>
                            <span class="zs s-fc4 j-flag">140</span>
                        </div>
                        <div class="corr u-arr">
                            <em class="arrline">◆</em><span class="arrclr">◆</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cmmts j-flag">
            <template v-if="hotComments && hotComments.length !== 0">
            <!-- 精彩评论 S -->
            <h3 class="u-hd4">精彩评论</h3>
            <div class="itm" v-for="item in hotComments" :key="item.commentId">
                <div class="head">
                    <router-link
                    :to="{name: 'userHome', query: {id: item.user.userId}}">
                    <img :src="item.user.avatarUrl+'?param=50y50'">
                    </router-link>
                </div>
                <div class="cntwrap">
                    <div class="">
                        <div class="cnt f-brk">
                            <router-link
                            :to="{name: 'userHome', query: {id: item.user.userId}}"
                            class="s-fc7">
                            {{item.user.nickname}}
                            </router-link>：
                            {{item.content}}
                        </div>
                    </div>
                    <template v-if="item.beReplied">
                        <div class="que f-brk f-pr s-fc3" v-for="(reply, index) in item.beReplied" :key="index">
                            <span class="darr">
                                <i class="bd">◆</i>
                                <i class="bg">◆</i>
                            </span>
                            <router-link
                            :to="{name: 'userHome', query: {id: item.user.userId}}"
                            class="s-fc7">
                            {{item.user.nickname}}
                            </router-link>：
                            {{reply.content}}
                        </div>
                    </template>
                    <div class="rp">
                        <div class="time s-fc4">{{item.time | formatCommentTime}}</div>
                        <a href="javascript:void(0)"><i class="zan u-icn2 u-icn2-12"></i> ({{item.likedCount}})</a>
                        <span class="sep">|</span>
                        <a href="javascript:void(0)" class="s-fc3">回复</a>
                    </div>
                </div>
            </div>
            <!-- / .itm -->
            <!-- 精彩评论 End -->
            <br>
            <br>
            </template>

            <template  v-if="comments && comments.length !== 0">
            <h3 class="u-hd4">最新评论({{totalComment}})</h3>
            <div class="itm" v-for="item in comments" :key="item.commentId">
                <div class="head">
                    <a href="/user/home?id=402266706">
                        <img :src="item.user.avatarUrl+'?param=50y50'">
                    </a>
                </div>
                <div class="cntwrap">
                    <div class="">
                        <div class="cnt f-brk">
                            <a :href="'/user/home?id='+item.user.userId" class="s-fc7">{{item.user.nickname}}</a>：
                            {{item.content}}
                        </div>
                    </div>
                    <template v-if="item.beReplied">
                        <div class="que f-brk f-pr s-fc3" v-for="(reply, index) in item.beReplied" :key="index">
                            <span class="darr">
                                <i class="bd">◆</i>
                                <i class="bg">◆</i>
                            </span>
                            <a :href="'/user/home?id='+reply.user.userId" class="s-fc7">
                            {{reply.user.nickname}}</a>：
                            {{reply.content}}
                        </div>
                    </template>
                    <div class="rp">
                        <div class="time s-fc4">{{item.time | formatCommentTime}}</div>
                        <a href="javascript:void(0)">
                            <i class="zan u-icn2 u-icn2-12"></i> 
                            <template v-if="item.likedCount">
                            ({{item.likedCount}})
                            </template>
                        </a>
                        <span class="sep">|</span>
                        <a href="javascript:void(0)" class="s-fc3">回复</a>
                    </div>
                </div>
            </div>
            <!-- / .itm -->
            </template>
        </div>
        <!-- / .cmmts -->
    </div>
    <!-- / .m-cmmt -->
</div>
</template>

<script>
import { formatDate } from '@/utils'
export default {
    name: 'Comment',
    props: {
        comments: {
            type: Array
        },
        hotComments: {
            type: Array
        },
        totalComment: {
            type: Number
        },
    },
    filters: {
        formatCommentTime(date) { // 评论时间格式
            return formatDate.fullDate(date)
        }
    }
}
</script>
