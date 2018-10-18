<template>
  <div id="app">
    <Header></Header>
  <!-- BEGIN CONTAINER -->

    <div class="page-container">

      <!-- <Menu></Menu> -->
      <!--<navtree menus= {{ menuData }}></navtree>-->
      <menu-entry></menu-entry>
      <!-- BEGIN PAGE -->

      <div class="page-content">
        <router-view/>
      </div>
      <!-- END PAGE -->
    </div>

    <!-- END CONTAINER -->
    <Footer></Footer>
	</div>
</template>

<script>
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import menuEntry from '@/components/common/menuEntry'

export default {
  name: "App",
  components:{ Footer , Header,Menu,menuEntry,NavTree },
  data: function() {
    return {
      menuData: []
    };
  },
  mounted:function(){
    //编译完成后执行
    this.getMenu();
  },
  methods: {
    getMenu: function() {
      this.$http.get("static/data/menu2.json", null).then(function(res) {
        this.menuData = res.body;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
