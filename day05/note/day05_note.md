# day 05



## 1 Vue slot

slot的目的就是为了让我们封装的组件更加具有拓展性

让使用者可以决定组件内部的一些内容展示什么

1. 实例

   ```html
   <div id="app">
     <cpn><button>按钮</button></cpn> <!--将我们要要插入的元素放在组件元素里面-->
   </div>
   
   <template id="cpn">
     <div>
       <h2>I'm a component</h2>
       <p>component main body</p>
       <slot></slot> <!--插入的元素就会被放在这里-->
     </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components:{
         cpn:{
           template:'#cpn'
         }
       }
     });
   </script>
   ```

   ---

2. 设置slot默认值

   ```html
   <div id="app">
     <cpn><button>按钮</button></cpn>
     <cpn></cpn> <!--没有放任何插入元素-->
   </div>
   
   <template id="cpn">
     <div>
       <h2>I'm a component</h2>
       <p>component main body</p>
       <slot><span>这个是默认值</span></slot> <!--如果父组件没有放置任何插入元素的话，那么这里就会显示默认值-->
     </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components:{
         cpn:{
           template:'#cpn'
         }
       }
     });
   </script>
   ```

   ---

3. 可以放置多个插入元素在slot中

   ```html
   <div id="app">
     <!--可以放置多个插入元素-->
     <cpn>
       <h1>Hello Slot</h1>
       <p>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</p>
     </cpn>
   </div>
   
   <template id="cpn">
     <div>
       <h2>I'm a component</h2>
       <p>component main body</p>
       <slot><span>这个是默认值</span></slot>
     </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components:{
         cpn:{
           template:'#cpn'
         }
       }
     });
   </script>
   ```

   ---

4. 

