import Vue from 'vue';
import VueX from 'vuex';
import {INCREMENT} from "./mutation-type";


Vue.use(VueX);

const store = new VueX.Store({
  state:{
    counter:1000,
    students:[
      {
        name:'Amy',
        age:21
      },
      {
        name:'Bin',
        age:22
      },
      {
        name:'Kay',
        age:23
      },
      {
        name:'Dennis',
        age:24
      }
    ]
  },
  mutations:{
    [INCREMENT](state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    plusNumber(state,number){
      state.counter += number;
    },
    addMember(state,member){
      state.students.push(member);
    },
    updateInfo(state){
      state.counter = 10;
    }
  },
  actions:{
    aUpdateInfo(context,msg){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updateInfo');
          resolve(msg);
        },1000);
      })
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter;
    },
    studentsOver22(state){
      return state.students.filter(s=>s.age>22);
    },
    studentsOver22Length(state,getters){
      return getters.studentsOver22.length;
    },
    studentOvertheAge(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  modules:{

  }
});

export default store;
