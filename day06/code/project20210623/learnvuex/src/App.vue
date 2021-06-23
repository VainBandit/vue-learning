<template>
  <div id="app">
    <h2>------App内容-------</h2>
    <hello-vuex/>
    <h2>-----HelloVuex内容------</h2>
    <div>{{$store.state.counter}}</div>
    <h2>------getters内容-------</h2>
    <div>{{$store.getters.powerCounter}}</div>
    <div>{{$store.getters.studentsOver22}}</div>
    <div>{{$store.getters.studentsOver22Length}}</div>
    <div>{{$store.getters.studentOvertheAge(23)}}</div>

    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="plusFive">+5</button>
    <button @click="addMember">add Member</button>
    <button @click="updateCounter">更新Counter</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from "./store/mutation-type";


export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods:{
    add(){
      this.$store.commit(INCREMENT);
    },
    minus(){
      this.$store.commit('decrement');
    },
    plusFive(){
      this.$store.commit('plusNumber',5);
    },
    addMember(){
      this.$store.commit('addMember',{name:'Ellen',age:25});
    },
    updateCounter(){
      this.$store.dispatch('aUpdateInfo','Message').then(msg=>{
        console.log("回调成功");
        console.log(msg);
      });
    }
  }
}
</script>

<style>

</style>
