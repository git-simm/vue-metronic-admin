
<template>
    <div class="page-sidebar nav-collapse collapse">
        <ul class="page-sidebar-menu">
            <li class="" v-for="m in menus" :key="m.id">
                <a href="javascript:;">
                    <i class="icon-cogs"></i>
                    <span class="title">{{m.name}}</span>
                    <span class="arrow "></span>
                </a>
                <ul class="sub-menu">
                    <li v-for="m2 in m.children" :key="m2.id">
                                <router-link :to="m2.url">
                                {{m2.name}}
                                </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "menuEntry",
  data: function() {
    return {
      menus: []
    };
  },
  created:function(){},
  //编译时执行
  mounted: function() {
    //编译完成后执行
    this.getMenu();
  },
  methods: {
    getMenu: function() {
      this.$http.get("static/data/menu2.json", null).then(function(res) {
        this.menus = res.body;
      });
    }
  }
};
</script>

