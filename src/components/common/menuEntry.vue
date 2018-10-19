
<template>
    <div class="page-sidebar nav-collapse collapse">
        <subMenu :menus="menus"></subMenu>
    </div>
</template>

<script>
export default {
  name: "menuEntry",
  components:{
    "subMenu":()=>import("@/components/common/subMenu")
  },
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

