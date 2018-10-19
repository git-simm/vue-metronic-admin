<template>
  <!-- <div> -->
  <li>
      <router-link :to="menu.url">{{menu.name}} </router-link>
      <ul class="sub-menu" v-show=" menu.children!=null && menu.children.lenght>0 ">
          <finalMenu v-for="m in menu.children" :key="m.id" :menu=m></finalMenu>
      </ul>
  </li>
  <!-- </div> -->
</template>
<script>
let timer = null
export default {
  name: 'finalMenu',
  props:{
    menu:{
      type: Object,
      default:function(){
        return {};
      }
    }
  }
}
</script>
