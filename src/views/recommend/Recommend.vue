<template>
  <div>
    <Swiper :banner="banner"/>
  </div>
</template>

<script>
  //导入公共组件
  import Swiper from '../../common/swiper/Swiper'
  //导入网络请求相关
  import {getBanner} from "../../network/request/recommend.js";
  import {getSongList} from "../../network/request/recommend.js";

  export default {
    name: "Recommend",
    data() {
      return {
        banner: []
      }
    },
    components: {
      Swiper
    },
    methods: {},
    created() {

    },
    mounted() {
      getBanner().then(res => {
        if (res.data.code === 0) {
          this.banner = res.data.data.slider;
          console.log(res);
        }
      });
      getSongList().then(res => {
        if (res.data.code === 0) {
          console.log(res);
        }
      })
    },

  }
</script>

<style scoped>

</style>
