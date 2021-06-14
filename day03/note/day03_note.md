# day 03



## 1 Vue 动态绑定样式

```html
<div id="app">
  <h2 :style="{fontSize:'72px'}">{{message}}</h2>
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

> 注意 `<h2 :style="{fontSize:'这个地方一定要加单引号'}">{{message}}</h2>`
>
> 如果没加单引号的话，Vue会默认这个是变量



```html
<div id="app">
  <h2 :style="{fontSize:finalSize}">{{message}}</h2>
</div>

<script src="./js/vue.js"></script>

<script>
    const app = new Vue({
        el:'#app',
        data:{
            message:'Hello World',
            finalSize:'100px' // 假设这个变量是从网络请求过来的
        }
    });
</script>
```

> 这样做就可以动态的更改我们元素的样式了



```html
<div id="app">
  <h2 :style="[baseStyle, fontSize]">{{message}}</h2>
</div>

<script src="./js/vue.js"></script>

<script>
  const app = new Vue({
    el:'#app',
    data:{
        message:'Hello World',
        baseStyle:{backgroundColor:'red'},
        fontSize:{fontSize: '100px'}
    }
  });
</script>
```

> 使用数组动态绑定可以动态绑定多组样式





## 2 Vue 计算属性的使用

在模板中可以直接通过插值语法显示一些data中的数据

我们可能需要对数据进行一些转化后再显示，或者需要将多个数据结合起来进行显示

- 比如我们有 `firstName` 和 `lastName`两个变量，我们需要显示完整的名称
- 但是如果有多个地方都需要显示完整的名称，我们就需要写多个`{{firstName}}` 和 `lastName`

为了解决这个麻烦的问题，我们可以使用计算属性

```html
<div id="app">
  <h2>{{firstName + ' ' + lastName}}</h2>
  <h2>{{firstName}} {{lastName}}</h2>
  <h2>{{getFullName()}}</h2> <!--虽然比上面两个简单了很多，但是这里表示的不是一个变量而是一个函数-->
  <h2>{{fullName}}</h2>
</div>

<script src="./js/vue.js"></script>

<script>
  const app = new Vue({
    el:'#app',
    data:{
      message:'Hello World',
      firstName:'Kobe',
      lastName:'Bryant'
    },
    methods:{
      getFullName(){
          return this.firstName + ' ' + this.lastName;
      }
    },
    computed:{
      fullName:function(){
          return this.firstName + ' ' + this.lastName;
      }
    }
  });
</script>
```

> 使用计算属性我们要注意要把它当==属性==使用，而不是函数
>
> - 定义计算属性的地方是 computed关键字下面的json
> - 使用的时候要注意区分 methods 和 computed 的用法，methods是定义函数， computed 是定义属性，属性是可以由多个data里面的属性进行组合或者计算的



```html
<div id="app">
  <h2>总价格 : {{totalPrice}}</h2> <!--我们可以使用计算属性来做一些复杂的操作-->
</div>

<script src="./js/vue.js"></script>

<script>
  const app = new Vue({
    el:'#app',
    data:{
        message:'Hello World',
        books:[
            {id:110, name:'Unix编程艺术', price: 119},
            {id:111, name:'代码大全', price: 105},
            {id:112, name:'深入理解计算机组成原理', price: 98},
            {id:113, name:'现代操作系统', price: 87}
        ]
    },
    computed:{
        totalPrice:function(){
          let result = 0 ;
          for(let book of this.books){
              result += book.price;
          }
          return result; //算出所有书价格的总和然后返回回去
        }
    }
  });
</script>
```

> 虽然这个操作使用methods 是可以做到的
>
> 但是这里更多的是强调是属性，显示一个数值或者数据的做法在vue中更多的是用属性来表示的



