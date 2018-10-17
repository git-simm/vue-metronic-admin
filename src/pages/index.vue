<template>
	<div class="container">
		<h1 class="footer" @click="show()">test footer test footer</h1>
		<input type="text" v-model="myMsg">
		<div>{{ myMsg }}</div>
    <p v-for="m in menus" :key="m">{{m.name}}</p>
		<p v-for="m in menus" :key="m">{{m.name}}</p>
		<p v-for="m in menus" :key="m">{{m.name}}</p>
		<p v-for="m in menus" :key="m">{{m.name}}</p>
		<p v-for="m in menus" :key="m">{{m.name}}</p>
		<Footer></Footer>
	</div>
</template>
<script>
import Footer from '@/components/common/Footer'
export default {
  name: 'tq-footer',
	props:['msg'],
	//数据
	data: function() {
		return {
			name : '这里是tq-footer组件，谢谢!',
      myMsg : this.msg,
      menus :[]
		}
  },
  mounted:function(){
    //编译完成后执行
    this.getMenus();
  },
	//方法
	methods: {
		show: function() {
			var i=0;
			alert(this.name);
    },
    getMenus:function(){
       var _this = this;
       this.$http.get('static/data/menu.json',null).then(
         function(res){
           _this.menus = res.body;
         }
       );
    }
	},
	components:{Footer}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
  color: red;
}
.container{
	background-color: aliceblue;
	padding: 10px;
	margin: 10px 0;
}
.footer{
	height: 50px;
	background-color: lawngreen;
}
input{
	width:400px;
	border: 2px solid bisque;
	border-radius: 4px;
	height: 30px;
	margin: 5px 0;
}
</style>
