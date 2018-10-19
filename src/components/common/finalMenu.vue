<template>
  <!-- <div> -->
  <li>
      <router-link :to="menu.url" v-if=" !hasChild ">{{menu.name}}</router-link>
      <a href="javascript:;" v-if="hasChild">
          <i class="icon-cogs"></i>
          <span class="title">{{menu.name}}</span>
          <span class="arrow "></span>
      </a>
      <ul class="sub-menu" v-if=" hasChild">
          <finalMenu v-for="m in menu.children" :key="m.id" :menu=m></finalMenu>
      </ul>
  </li>
  <!-- </div> -->
</template>
<script>
let timer = null
export default {
  name: 'finalMenu',
  data : function(){
    return {
      hasChild: true
    }
  },
  props:{
    menu:{
      type: Object,
      default:function(){
        return {};
      }
    }
  },
  mounted:function(){
     this.hasChild = this.menu.children!=undefined && this.menu.children.length>0;
  }
}
</script>
