<template>
  <div class="header">
    <div class="header-item">
      <div class="icon"></div>
      <div class="text">
        <h2>Chicken Music</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  .header {
    margin-top: 10px;
    width: 100%;
    /*padding:0 72px;*/

    .header-item {
      text-align: center;

      .icon {
        width: 30px;
        height: 11.53333vw;
        display: inline-block;
        vertical-align: middle;
        background: url("../../../assets/img/header/logo.png") no-repeat;
        background-size: 30px 32px;
      }

      .text {
        display: inline-block;
        color: orange;

        h1{
          display: inline-block;
        }
      }
    }
  }
</style>
