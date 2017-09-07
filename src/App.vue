<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>
    <app-footer></app-footer>

    <player></player>
  </div>
</template>

<script>
import AppHeader from '@/components/appheader/AppHeader'
import AppFooter from '@/components/appfooter/AppFooter'
import Player from '@/components/player/Player'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Player
  }
}
</script>

<style lang="scss">
@import "./assets/css/app";
</style>
