<template>
  <!-- <div> -->
    <ul class="sub-menu">
        <li v-for="m in menus" :key="m.id">
            <router-link :to="m.url">
            {{m.name}}
            </router-link>
            <finalMenu :menus=m.children></finalMenu>
        </li>
    </ul>
  <!-- </div> -->
</template>
<script>
let timer = null
export default {
  name: 'finalMenu',
  props:{
    menus:{
      type:Object,
      default:function(){
        return {};
      }
    }
  }
}
</script>
