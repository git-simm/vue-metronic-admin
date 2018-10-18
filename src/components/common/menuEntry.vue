<template>
    <div class="page-sidebar nav-collapse collapse">
        <ul>
            <li class="" v-for="m in menus">

                <a href="javascript:;">

                    <i class="icon-cogs"></i>

                    <span class="title">{{m.name}}</span>

                    <span class="arrow "></span>

                </a>

                <ul class="sub-menu">
                    <li v-for="m2 in m.children">

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
  mounted:function(){
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

