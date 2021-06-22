import Vue from 'vue';
import cpn from './vue/cpn.vue'

new Vue({
  el:'#app',
  template:`
    <cpn/>
  `,
  components:{
    cpn
  }
});

document.write('<h1>我真的是high到不行啦</h1>');