<template>
  <div>
    <h1>我是Profile组件</h1>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created(){
      console.log('Created');
    },
    destroyed(){
      console.log('Destroyed');
    }
  }
</script>

<style scoped>

</style>