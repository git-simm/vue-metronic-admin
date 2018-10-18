<template>
    <div class="content">
      <p>{{ comment }}</p>
      <div class="next"><slot></slot></div>
    </div>
</template>
<script>
let timer = null
export default {
  name: 'Content',
  props: ['comment']
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
   height: 40px;
 }
</style>
