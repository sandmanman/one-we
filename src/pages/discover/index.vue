<template>
    <div>
        <!-- sub nav S -->
        <div class="m-subnav j-tflag">
            <div class="wrap f-pr">
                <ul class="nav">
                    <li>
                        <router-link :to="{name: 'recommonded'}" active-class="z-slt">
                            <em>推荐</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'toplist', query: {id:3}}" active-class="z-slt">
                            <em>排行榜</em>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'playlist'}" active-class="z-slt">
                            <em>歌单</em>
                        </router-link>
                    </li>
                    <li><a href="#"><em>主播电台</em></a></li>
                    <li><a href="#"><em>歌手</em></a></li>
                    <li><a href="#"><em>新碟上架</em></a></li>
                </ul>
            </div>
        </div>
        <!-- sub nav End -->
        
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Discover'
    }
</script>

<style>

</style>