
<template>
    <div class="page-sidebar nav-collapse collapse">
        <ul class="page-sidebar-menu">
            <li class="" v-for="m in menus" :key="m.id">

                <a href="javascript:;">

                    <i class="icon-cogs"></i>

                    <span class="title">{{m.name}}</span>

                    <span class="arrow "></span>

                </a>

                <ul v-if="m.id !=null" class="sub-menu">
                    <li v-for="m2 in m.children" :key="m2.id">

                            <a>
                                <router-link :to="m2.url">
                                {{m2.name}}
                                </router-link>
                                </a>
                    </li>
                </ul>

                <ul v-else class="page-sidebar-menu">
                    <li v-for="m2 in m.children" v-bind:todo="m2" v-bind:key="m2.id">

                        <a href="layout_horizontal_sidebar_menu.html">

                            {{m2.name}}</a>

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

