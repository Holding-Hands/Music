<template>
  <div class="tabbar">

    <router-link class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>

    <router-link class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>

    <router-link class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>

    <router-link class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped lang="less">
  .tabbar {
    position: relative;
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-around;


    .tab-item {
      text-decoration: none;
      color: white;
    }
  }

  .router-link-active {
    color: orange!important;
    margin-bottom: 2.53333vw;
    border-bottom: 3px solid orange;
  }
</style>
