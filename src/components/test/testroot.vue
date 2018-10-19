<template>
  <div class="content">
    <p>这是测试主页面</p>
    <div>
      <router-link to="/test1" append>test1</router-link>
      <router-link to="/test2">test2</router-link>
    </div>
    <router-view></router-view>
    <tree :node="{name:'1',childs:[{name:'2-1',childs:[{name:'2-1-1'}]},{name:'2-2'}]}" ></tree>
  </div>
</template>
<script>
let timer = null
export default {
  name: 'testRoot',
  components:{
    "tree":()=>import("@/components/test/tree")
  },
  props: {
    comment:{
      type:String,
      default:'无评论'
    }
  }
}
</script>
<style scoped>
 .next{
   margin-left: 20px;
   border: 1px greenyellow solid;
   background-color: black;
   color: whitesmoke;
 }
 .content{
   background-color:#333;
   color: burlywood;
   border-radius: 4px;
   font-size: 16px;
 }
</style>
