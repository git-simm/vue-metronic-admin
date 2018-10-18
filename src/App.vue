<template>
  <div id="app">
    <Header></Header>
  <!-- BEGIN CONTAINER -->

    <div class="page-container">

      <!-- <Menu></Menu> -->
      <menuEntry></menuEntry>
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

import myApp from "metronic/js/app.js";
import myIndex from "metronic/js/index.js";

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import menuEntry from '@/components/common/menuEntry'

export default {
  name: "App",
  components:{ Footer , Header,Menu,menuEntry }
};

myApp.init(); // initlayout and core plugins
//myIndex.init();
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
