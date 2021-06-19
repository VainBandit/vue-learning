# day 04



## 1 ES6 高阶函数

1. filter 函数

   ```javascript
   const nums = [10,20,111,222,444,40,50];
   
   let newNums = nums.filter(function(n){
      return  n < 100; //条件
   });
   
   console.log(newNums); // 10,20,40,50
   ```

2. map 函数

   ```javascript
   const nums = [10,20,40,50];
   
   let newNums = nums.map(function(n){
      return  n * 2; // 对新的数组的每个元素的数据操作
   });
   
   console.log(newNums); // 20,40,80,100
   ```

3. reduce 函数

   ```javascript
   const nums = [10,20,40,50];
   
   // reduce 作用就是对数组的所有内容进行汇总使用的(有点像递归)
   let newNums = nums.reduce(function(preValue, n){
      return  preValue + n; // 对新的数组的每个元素的数据操作
   },0); // reduce(function, 初始值)
   
   console.log(newNums); // 20,40,80,100
   ```



## 2 Vue v-model

1. 基本使用

   ```html
   <div id="app">
     <input type="text" v-model="message"> <!--如果input里面的值发生变化，message的变量也相应地发生变化-->
     {{message}}
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```

   > v-model 的 作用就是对数据和界面的数据进行双向绑定。
   >
   > 当数据改变的时候，界面的数据就会发生改变。界面的数据改变的话，数据就会发生改变

   ---

2. 实现原理

   ```html
    <div id="app">
     <!--:value 当数据发生改变的时候，页面的数据就会发生改变-->
     <!--@input 当页面数据发生改变的时候，触发onInput事件-->
     <input type="text" :value="message" @input="valueChange">
     {{message}}
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       methods:{
         valueChange(event){
           this.message = event.target.value; //触发事件调用函数，将页面数据赋给数据
         }
       }
     });
   </script>
   ```

   > 这样就可以在不使用v-model的情况下实现双向绑定

   ---

   ```html
    <div id="app">
     <!--:value 当数据发生改变的时候，页面的数据就会发生改变-->
     <!--@input 当页面数据发生改变的时候，触发onInput事件-->
     <input type="text" :value="message" @input="message = $event.target.value">
     {{message}}
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```

   > 再简单的一点的写法

   ---

3.  v-mode radio 的写法

   ```html
   <div id="app">
     <label for="male">
       <input type="radio" id="male" name="gender" value="male" v-model="gender"> 男
     </label>
     <label for="female">
       <input type="radio" id="female" name="gender" value="female" v-model="gender"> 女
     </label>
     <h2>{{gender}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         gender:'male'
       }
     });
   </script>
   ```

   ---

4. v-model checkbox

   ```html
   <div id="app">
     <label for="clause">
       <input type="checkbox" id="clause" v-model="clause"> 同意协议
     </label>
     <h2>{{clause}}</h2>
     <button :disabled="!clause">下一步</button>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         clause:false
       }
     });
   </script>
   ```

   ---

   ```html
   <div id="app">
   <!--  <label for="clause">-->
   <!--    <input type="checkbox" id="clause" v-model="clause"> 同意协议-->
   <!--  </label>-->
   <!--  <h2>{{clause}}</h2>-->
   <!--  <button :disabled="!clause">下一步</button>-->
   
     <input type="checkbox" value="篮球" v-model="hobbies">篮球
     <input type="checkbox" value="足球" v-model="hobbies"> 足球
     <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
     <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
   
     <h2>{{hobbies}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         hobbies:[]
       }
     });
   </script>
   ```

5. v-model select

   ```html
   <div id="app">
     <select name="abc" id="" v-model="fruit">
       <option value="apple">Apple</option>
       <option value="banana">Banana</option>
       <option value="grape">Grape</option>
       <option value="pear">Pear</option>
     </select>
     <h2>{{fruit}}</h2>
   
   <!--  <select name="abc" id="" v-model="fruit" multiple>-->
   <!--    <option value="apple">Apple</option>-->
   <!--    <option value="banana">Banana</option>-->
   <!--    <option value="grape">Grape</option>-->
   <!--    <option value="pear">Pear</option>-->
   <!--  </select>-->
   <!--  <h2>{{fruit}}</h2>-->
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         fruit:'apple'
       }
     });
   </script>
   ```

   ---

   ```html
   <div id="app">
   <!--  <select name="abc" id="" v-model="fruit">-->
   <!--    <option value="apple">Apple</option>-->
   <!--    <option value="banana">Banana</option>-->
   <!--    <option value="grape">Grape</option>-->
   <!--    <option value="pear">Pear</option>-->
   <!--  </select>-->
   <!--  <h2>{{fruit}}</h2>-->
   
     <select name="abc" id="" v-model="fruit" multiple>
       <option value="apple">Apple</option>
       <option value="banana">Banana</option>
       <option value="grape">Grape</option>
       <option value="pear">Pear</option>
     </select>
     <h2>{{fruit}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         fruit:'apple'
       }
     });
   </script>
   ```

   ---

6. 值绑定

   ```html
   <div id="app">
     <label v-for="item in originHobbies">
       <input type="checkbox" :value="item" v-model="newHobbies">{{item}}
     </label>
     <h2>{{newHobbies}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         originHobbies:['篮球','足球','羽毛球','快乐星球'],
         newHobbies:[]
       }
     });
   </script>
   ```

   ---

7. v-model 修饰符
   lazy 修饰符:

   - 默认情况下，v-model默认在input事件中同步输入框的数据（一旦有数据发生改变对应data中的数据就会发生改变）
   - lazy修饰符可以让数据在失去焦点或者回车时才会更新

   ```html
   <div id="app">
     <input type="text" v-model.lazy="message">
     <h2>{{message}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```

   ---

   number修饰符:

   - 默认情况下，在输入框中无论我们输入的是数字还是字母，都会被当作字符串类型处理。但是我们如果希望处理的是数字类型，那么最好直接将内容当作数字处理
   - number修饰符可以在输入框中输入的内容自动转换成数字类型

   ```html
   <div id="app">
     <input type="number" v-model.number="age">
     <h2>{{age}}-{{typeof age}}</h2>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         age:0
       }
     });
   </script>
   ```

   ---

   trim修饰符

   - 如果输入的内容首尾有很多空格，我们希望去除空格
   - trim修饰符可以过滤内容左右两边的空格

   ```html
   <div id="app">
     <input  type="text" v-model.trim="message"/>
    <!--使用console.log(app.message)查看会更清楚一点-->
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```
   





## 3 Vue 组件化

组件化是Vue.js中的重要思想

- 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造应用
- 任何的应用都会被抽象成一颗组件树

组件化思想的应用

- 有了组件化的思想，我们在之后的开发中要充分利用它
- 尽可能地将页面拆分成多个小的，可复用的组件。
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强

---

1. 实例代码

   ```html
   <div id="app">
     <my-cpn/> <!--使用组件-->
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
   
   
     // 创建组件构造器
     const cpn = Vue.extend({
       template:`
         <div>
           <h1>我是标题</h1>
           <p>我是内容</p>
           <p>我是页面底部</p>
         </div>
       `
     });
   
     // 注册组件
     Vue.component('my-cpn',cpn);
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   
   
   </script>
   ```

   ---

2. 全局组件

   ```javascript
   Vue.component('my-cpn',cpn);
   ```

   ---

3. 局部组件

   ```html
   <div id="app">
     <env/> <!--使用组件-->
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
   
   
     // 创建组件构造器
     const cpn = Vue.extend({
       template:`
         <div>
           <h1>我是标题</h1>
           <p>我是内容</p>
           <p>我是页面底部</p>
         </div>
       `
     });
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components:{
         env:cpn
       }
     });
   
   
   </script>
   ```

   > components:{
   >
   > ​	标签名:组件
   >
   > }

   ---

4. 父组件和子组件

   ```html
   <div id="app">
     <env></env>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const cpn1 = Vue.extend({
       template:`
         <div>
           <h1>Hello Component 1</h1>
         </div>
       `
     });
   
     const cpn2 = Vue.extend({
       template:`
         <div>
           <cpn1></cpn1>
           <h2>Hello Component 2</h2>
         </div>
       `,
       components:{
         'cpn1':cpn1
       }
     });
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components: {
         'env':cpn2
       }
     });
   </script>
   ```

   ---

5. 组件的语法糖写法

   ```html
   <div id="app"><cpnv/></div>
   
   <script src="./js/vue.js"></script>
   
   <script>
   
     // 1, 创建并注册组件，使用组件的语法糖
     Vue.component('cpnv',{
       template:`
         <div>
           <h1>Hello World</h1>
         </div>
       `
     });
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```

   ---

6. 组件模板抽离写法

   ```html
   <div id="app">
     <cpn/>
   </div>
   
   <!--1. 使用script标签-->
   <script type="text/x-template" id="cpn">
   <div>
     <h2>我是标题</h2>
     <p>我是内容我是内容我是内容我是内容我是内容</p>
   </div>
   </script>
   
   <script src="./js/vue.js"></script>
   
   <script>
     // 注册全局组件
     Vue.component('cpn',{
       template:'#cpn' //有点像el标签的写法
     });
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```

   ---

   ```html
   <div id="app">
     <cpn/>
   </div>
   
   <!--2. 使用template标签-->
   <template id="cpn">
     <div>
       <h2>我是标题2</h2>
       <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
     </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     // 注册全局组件
     Vue.component('cpn',{
       template:'#cpn'
     });
   
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       }
     });
   </script>
   ```
   ---

7. 组件的data写法

   ```html
   <div id="app">
     <env/>
   </div>
   
   <script src="./js/vue.js"></script>
   
   <template id="cpn1">
     <div>
       <h1>{{message}}</h1>
     </div>
   </template>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World'
       },
       components:{
         env:{
           template:'#cpn1',
           data(){
             return{
               message:'Hello Component1'
             }
           }
         }
       }
     });
   </script>
   ```

   > 之所以不能以对象的形式而是以函数的形式是因为如果我们创建多个相同的组件的时候，我们是不希望见到我们的组件的数据被另外的组件的数据改变的，所以两个组件引用一定要是不一样对象。所以这里使用以函数return返回一个新对象的方式，使各个组件的数据不会收到影响

   ---

8. 父子组件的通信
   在开发中，我们往往有一些数据需要从上层传递到下层。

   比如在一个页面中，我们从服务器请求到了很多数据。其中一部分数据并非是我们整个页面的大组件来展示的，而是需要下面的组件进行展示的。这个时候，并不会让子组件再次发送一个网络请求，而是直接让大组件（父组件）将数据传递给小组件(子组件)

   如何进行父子组件的通信

   - 通过props像子组件传递数据
   - 通过事件向父组件发送信息

   ---

   ```html
   <div id="app">
       <!--根据子组件提供的属性来传输数据，注意这里一定要用v-bind绑定属性，要不然这里传递不了对应的变量-->
     <cpn :cmovies="movies" :cmessage="message"></cpn>
   </div>
   
   <template id="cpn">
   <div>
     <ul>
       <li v-for="movie in cmovies">{{movie}}</li>
     </ul>
     <h2>{{cmessage}}</h2>
   </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         movies:['海王','海贼王','海尔兄弟']
       },
       components:{
         cpn:{
           template:'#cpn',
           props:['cmovies','cmessage']
         }
       }
     });
   </script>
   ```

   ----

   ```html
   <div id="app">
     <cpn :cmovies="movies" :cmessage="message"></cpn>
   </div>
   
   <template id="cpn">
   <div>
     <ul>
       <li v-for="movie in cmovies">{{movie}}</li>
     </ul>
     <h2>{{cmessage}}</h2>
   </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         movies:['海王','海贼王','海尔兄弟']
       },
       components:{
         cpn:{
           template:'#cpn',
           props:{
             cmovies:Array,
             cmessage:String
           }
         }
       }
     });
   </script>
   ```

   > 这里的props还能使用对象进行定义，这里的值填写的是指定这个数据用的类型是什么，也就是限制了数据的类型

   ---

   ```html
   <div id="app">
     <cpn :cmovies="movies" :cmessage="message"></cpn>
   </div>
   
   <template id="cpn">
   <div>
     <ul>
       <li v-for="movie in cmovies">{{movie}}</li>
     </ul>
     <h2>{{cmessage}}</h2>
   </div>
   </template>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'Hello World',
         movies:['海王','海贼王','海尔兄弟']
       },
       components:{
         cpn:{
           template:'#cpn',
           props:{
             cmovies:{
               type:Array,
               default:[]
             },
             cmessage:{
               type:String,
               default:'No Data'
             }
           }
         }
       }
     });
   </script>
   ```

   > 这里除了可以给属性限制类型之外还能给属性指定默认值

   ---

   

