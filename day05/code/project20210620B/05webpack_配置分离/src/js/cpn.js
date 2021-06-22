export default {
  template:`
    <div>
      <h1>{{message}}</h1>
      <button @click="clickMe">Click</button>
    </div>
  `,
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
};