<template>
    
    <div class="g-bd2 f-cb">
        <div class="g-sd2">
            <div class="g-wrap4 n-sgernav">
                <h2 class="tit">推荐</h2>
                <ul class="nav f-cb">
                    <li>
                        <router-link :to="{name: 'artist'}" class="cat-flag" active-class="z-slt">推荐歌手</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="g-mn2">
            <div class="g-mn2c">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: 'Artist'
}
</script>

<style>

</style>


