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

4. 具名插槽

   ```html
   <div id="app">
     <cpn>
       <button slot="left">按钮</button>
       <span slot="center">标题</span>
       <spasn slot="right" style="font-weight: bold">字体</spasn>
     </cpn>
   </div>
   
   <template id="cpn">
     <div>
       <slot name="left"><span>左边的</span></slot>
       <slot name="center"><span>中间的</span></slot>
       <slot name="right"><span>右边的</span></slot>
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

5. 作用域插槽

   - 作用域插槽是父组件替换插槽的标签，但是内容是由子组件来提供的

   ```html
   <div id="app">
     <cpn>
       <template v-slot:default="slotProp">
         <h1>{{slotProp.user}}</h1>
       </template>
     </cpn>
   </div>
   
   <template id="cpn">
     <span>
       <slot :user="username">{{username}}</slot>
     </span>
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
           template:'#cpn',
           data(){
             return {
               username:'Bin'
             }
           }
         }
       }
     });
   </script>
   ```

   ---

6. 新的具名插槽的写法

   ```html
   <div id="app">
     <cpn>
       <template v-slot:left>
         左边的
       </template>
       <template v-slot:center>
         中间的
       </template>
       <template v-slot:right>
         右边的
       </template>
     </cpn>
   </div>
   
   <template id="cpn">
   <div>
     <slot name="left"></slot>
     <slot name="center"></slot>
     <slot name="right"></slot>
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



## 2 ES6 模块化开发

1. export

   ```javascript
   let name = "john";
   
   export name; //导出
   ```

   ---

   ```javascript
   let name = "john";
   let age = 18;
   
   export {name,age} // 导出对象
   ```

   ---

   ```javascript
   export let name = "john"; //导出（很少使用）
   ```

   ---

   ```javascript
   let name = "john";
   
   export default name; // 默认导出name(对方import默认导入这个)
   ```

   ---

2. import

   ```javascript
   import name from './xxx.js'; // 从xxx.js导入name
   ```

   ---

   ```javascript
   import {name,age} from './xxx.js'; // 结构化解析
   ```

   ---

   ```javascript
   import * as newObject from './xxx.js' //从xxx.js导入全部内容 
   ```



## 3 WebPack使用

1. WebPack的安装

   ```shell
   npm install webpack@3.6.0 -g # 进行全局安装 webpack 3.6.0
   # 之所以使用wbepack@3.6.0， 是因为它能够支持vue-cli2的使用
   ```

   ---

   创建一个文件夹: e.p. use_webpack

   ---

   在use_webpack文件夹里面再创建两个文件夹

   - src
   - dist

   ----

   然后在src文件夹中编写我们的js源码，这里实例用两个js

   - mathUtils.js
   - main.js

   ```javascript
   // mathUtils.js
   
   function add(num1, num2){
       return num1+num2;
   }
   
   function multi(num1, num2){
       return num1*num2;
   }
   
   export {add, multi};
   ```

   ```javascript
   // main.js
   
   import {add, multi} from './mathUtils.js';
   
   console.log(add(20, 30));
   console.log(multi(20,30));
   ```

   ---

   测试：在use_webpack创建一个index.html文件，在里面添加代码

   ```html
   ...
   <script src="./dist/bundle.js"></script>	
   ...
   ```

   然后保存，在对应的目录下启动终端, 编写命令

   ```shell
   webpack ./src/main.js ./dist/bundle.js # 将其打包，然后生成bundle.js
   ```

   ---

   通过浏览器验证是否打包成功

   ![](./testResult1.png)
   ---


   ---

2. 

