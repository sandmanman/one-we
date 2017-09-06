<template>
    <div class="n-artdesc" v-if="descData">
        <h2><i>&nbsp;</i>歌手简介</h2>
        <p v-html="descData.briefDesc"></p>

        <div v-for="(item, index) in descData.introduction" :key="index">
            <h2>{{item.ti}}</h2>
            <p class="z-indent" v-html="item.txt"></p>
        </div>

    </div>
</template>

<script>
import { artistDesc } from '@/api'

export default {
    name: 'Desc',
    data() {
        return {
            descData: null,
        }
    },
    created() {
        this.getDesc(this.$route.query.id)
    },
    watch: {
        '$route'(to,from) {
            this.getDesc(this.$route.query.id)
        }
    },
    methods: {
        getDesc(id) {
            artistDesc(id).then(res => {
                if (res.data.code === 200) {
                    this.descData = res.data
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style lang="scss">
.n-artdesc {
    margin-top: 30px;
    h2 {
        margin: 28px 0 8px 0;
        color: #333;
        font-size: 14px;
        i {
            height: 14px;
            width: 3px;
            margin-right: 7px;
            background: #c10d0c;
        }
    }
    p {
        line-height: 25px;
        color: #666;
        text-indent: 2em;
    }
}
</style>

