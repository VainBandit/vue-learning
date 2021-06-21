<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="clickMe">Click</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        message:'Hello World'
      }
    },
    methods:{
      clickMe(){
        alert("Hello Vue");
      }
    }
  }
</script>

<style scoped>

</style>