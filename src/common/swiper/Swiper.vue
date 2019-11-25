<template>
  <div>
    <Swipe :autoplay="3000" indicator-color="white">
      <swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.picUrl" alt="">
      </swipe-item>
    </Swipe>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {Swipe, SwipeItem} from 'vant';

  Vue.use(Swipe).use(SwipeItem);
  export default {
    name: "Swiper",
    components: {
      Swipe,
      SwipeItem
    },
    props: {
      banner: {
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
</style>
