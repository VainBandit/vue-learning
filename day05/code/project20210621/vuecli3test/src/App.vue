<template>
  <div id="app">
<!--    <router-link to="/home" tag="div" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="div" replace>关于</router-link>-->
    <Button @click="toPath('/home')">首页</Button>
    <Button @click="toPath('/about')">关于</Button>
    <router-link :to="'/user/'+username" tag="button" replace>用户</router-link>
<!--    <router-link :to="{path:'/profile',query:{name:'bin',age:18,height:1.88}}" tag="button" replace>档案</router-link>-->
    <button @click="toProfile">档案</button>

    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      username:'lisi'
    }
  },
  methods:{
    toPath(path){
      if(this.$router.currentRoute.path != path){
        this.$router.replace(path);
      }
    },
    toProfile(){
      if(this.$router.currentRoute.path != '/profile'){
        this.$router.replace({
          path:'/profile',
          query:{
            name:'bin',
            age:21,
            height:1.86
          }
        });
      }
    }
  }
}
</script>

<style>

</style>
