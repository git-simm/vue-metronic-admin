<template>
  <div>
    <ul class="page-sidebar-menu">
            <li class="" v-for="m in menus" :key="m.id">
                <a href="javascript:;">
                    <i class="icon-cogs"></i>
                    <span class="title">{{m.name}}</span>
                    <span class="arrow "></span>
                </a>
                <finalMenu :menus="m.children"></finalMenu>
                <!-- <ul class="sub-menu">
                    <li v-for="m2 in m.children" :key="m2.id">
                                <router-link :to="m2.url">
                                {{m2.name}}
                                </router-link>
                    </li>
                </ul> -->
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
      type:Object,
      default:function(){
        return {};
      }
    }
  }
}
</script>
