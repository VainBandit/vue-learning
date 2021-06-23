import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   methods:'GET'
// }).then(res=>{
//   console.log(res);
// });

// axios({
//   url:'http://192.168.137.1:3000/dj/program?rid=336355127',
//   methods:'GET'
// }).then(res=>{
//   if(res!=null){
//     document.write('-1');
//   }else{
//     console.log(res.data.programs);
//     document.write(res.data.programs[0].auditStatus);
//   }
// });
