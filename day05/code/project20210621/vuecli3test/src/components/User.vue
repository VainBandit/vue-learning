<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{username}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      username(){
        return this.$route.params.userid;
      }
    }
  }
</script>

<style scoped>

</style>