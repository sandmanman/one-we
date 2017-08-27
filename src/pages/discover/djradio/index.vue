<template>
    <div class="g-bd">
        <div class="g-wrap m-radio">
            <div class="rditype f-pr f-cb">
                <div class="boxes j-flag muti">
                    <!-- 分类 S -->
                    <ul class="box f-cb z-show" v-if="djCatelistData">
                        <li v-for="(item, index) in djCatelistData" :key="item.id">
                            <router-link :to="{name: 'category', query: {id: item.id}}" exact active-class="z-sel">
                                <div class="icon" :style="'background-image:url('+item.picWebUrl+');'"></div>
                                <em>{{item.name}}</em>
                            </router-link>
                        </li>
                    </ul>
                    <!-- 分类 End -->
                </div>
            </div>

            <router-view></router-view>

        </div>
    </div>
</template>

<script>
import { djCatelist } from '@/api'
export default {
    name: 'DJRadio',
    data() {
        return {
            djCatelistData: null, // 分类
        }
    },
    created() {
        this.getDJCatelist()
    },
    methods: {
        getDJCatelist() {
            // 节目分类
            djCatelist().then(res => {
                if ( res.data.code === 200 ) {
                    this.djCatelistData = res.data.categories
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

<style>

</style>


