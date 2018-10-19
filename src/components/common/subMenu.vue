<template>
  <div>
    <ul class="page-sidebar-menu">
        <li class="" v-for="m in menus" :key="m.id">
            <a href="javascript:;">
                <i class="icon-cogs"></i>
                <span class="title">{{m.name}}</span>
                <span class="arrow "></span>
            </a>
            <ul class="sub-menu">
              <finalMenu v-for="m2 in m.children" :key="m2.id" :menu=m2></finalMenu>
            </ul>
        </li>
    </ul>
  </div>
</template>
<script>
let timer = null
export default {
  name: 'subMenu',
  components:{
    "finalMenu":()=>import("@/components/common/finalMenu")
  },
  props:{
    menus:{
      type:Array,
      default:function(){
        return [];
      }
    }
  }
}
</script>
