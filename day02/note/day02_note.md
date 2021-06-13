


# Day 02



## 1 创建Vue实例传入options

可以在Vue的官网查看相应的文档： https://cn.vuejs.org/v2/api/

目前掌握这些选项

- el:
  - **类型**：`string | Element`
  - **作用**：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标（决定之后Vue实例会管理哪一个DOM）
- data:
  - **类型**：`Object | Function`
  - **作用**：Vue实例对应的数据对象
- methods:
  - **类型**：`{ [key: string]: Function }`
  - **作用**：定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用





## 2 Vue的生命周期

![](./lifecycle.png)

- 对应生命周期的方法实例：

  ```html
  <div id="app"></div>
  <script>
      const app = new Vue({
          el:'#app',
          data:{
              message:'Hello World'
          },
          created:function(){
              console.log('created'); // 创建实例后向控制台输出created
          },
          mounted:function(){
              console.log('mounted'); // 挂载完数据后向控制台输出mounted
          }
      });
  </script>
  ```

  ![](./lifecycleFunctionResult.png)

- 生命周期函数

  - `beforeCreate`
  - `created`
  - `beforeMounte`
  - `mounted`
  - `beforeUpdate`
  - `updated`
  - `beforeDestory`
  - `destoried`



## 3 WebStorm Template

一般我们创建一个新的文件，就又要重新写一些基本的代码。

这样做会比较麻烦

WebStorm提供了一个自定义模板的功能，我们可以将一些基本的代码定义在里面，然后我们用的时候再用关键字tab出来即可

1. Vue 基本代码

   ```html
   <div id="app">{{message}}</div>
   
   <script src="./js/vue.js"></script>
   
   <script>
     const app = new Vue({
       el:'#app',
       data:{
         message:'你好'
       }
     });
   </script>
   ```

2. 复制上面的代码，然后打开Settings
   ![](./settings.png)
   ![](./settings1.png)
   ![](./settings2.png)
   ![](./settings3.png)

3. 按照上面的步骤做了之后，我们在WebStorm的HTML文件中就可以轻松打出我们要的基本代码

   - 
     ![](./settings4.png)

   - 
     ![](./settings5.png)





## Vue Mustache

- `{{}}`: Mustache
