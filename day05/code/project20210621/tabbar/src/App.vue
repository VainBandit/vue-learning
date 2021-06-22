<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home">
        <template v-slot:item-icon>
          <span>&#xe651;</span>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="pink" >
        <template v-slot:item-icon><span>&#xe63a;</span></template>
        <template v-slot:item-text><div>分类</div></template>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="teal">
        <template v-slot:item-icon><span>&#xe650;</span></template>
        <template v-slot:item-text><div>购物车</div></template>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="orange">
        <template v-slot:item-icon><span>&#xe652;</span></template>
        <template v-slot:item-text><div>我的</div></template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar';
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return {
      tabbars:[
        {
          icon:'&#xe651;',
          text:'首页'
        },
        {
          icon:'&#xe63a;',
          text:'分类'
        },
        {
          icon:'&#xe650;',
          text:'购物车'
        },
        {
          icon:'&#xe652;',
          text:'我的'
        }
      ]
    }
  }
}
</script>

<style>

</style>
