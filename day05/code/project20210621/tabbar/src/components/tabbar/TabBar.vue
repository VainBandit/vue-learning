<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  @import "../../assets/css/base.css";
  @font-face{
    src: url("../../assets/font/tabbar/tabbar.ttf");
    font-family: tabbar;
  }

  #tab-bar{
    width: 100vw;

    display: flex;
    flex-direction: row;
    background: #f6f6f6;
    box-shadow: 0 -3px 1px rgba(100,100,100,.2);

    position: fixed;
    bottom: 0px;
  }

  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 49px; /*tab-bar高度*/
  }

  .tab-bar-item span{
    font-size: 24px;
    font-family: tabbar;
    text-align: center;
  }

  .tab-bar-item div{
    text-align: center;
  }
</style>