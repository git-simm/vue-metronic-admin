<template>
  <div class="content">
    <p>层级：{{ node.name }}</p>
    <tree v-for="node in node.childs" :node=node :key='node.name'></tree>
  </div>
</template>
<script>
let timer = null
export default {
  name: 'tree',
  props:{
    node:{
      type:Object,
      default:function(){
        return {};
      }
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
 }
</style>
