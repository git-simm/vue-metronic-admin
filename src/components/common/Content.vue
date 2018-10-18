<template>
  <div class="content">
    <p>{{ comment }}</p>
    <div class="next"><slot>{{ comment+'的评论区' }}</slot></div>
  </div>
</template>
<script>
let timer = null
export default {
  name: 'Content',
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
 }
</style>
