<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="turnActive">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#ff697a'
      }
    },
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!=-1;
      },
      turnActive(){
        return this.isActive ? {color:this.activeColor}:{};
      }
    },
    methods:{
      itemClick(){
        if(this.path != this.$route.path){
          this.$router.replace(this.path);
        }
      }
    }
  }
</script>

<style scoped>
  @font-face{
    src: url("../../assets/font/tabbar/tabbar.ttf");
    font-family: tabbar;
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
    font-weight: bold;
  }

  .tab-bar-item div{
    text-align: center;
  }

  .active{
    color: #ff697a;
  }
</style>