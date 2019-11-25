<template>
  <div id="app">
    <Header/>
    <tab-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/content/header/Header'
import TabBar from './components/content/tabBar/TabBar'

export default {
  components:{
    Header,
    TabBar,
  }
}
</script>

<style lang="less">
  @import 'assets/css/base.css';

</style>
