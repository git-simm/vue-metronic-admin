<template>
	<div class="container">
<<<<<<< HEAD
    <Menu></Menu>
    <input type="text" v-model="myMsg">
		<div>{{ myMsg }}</div>
    <p v-for="m in menus" :key="m.id">{{m.name}}</p>
		<p v-for="m in menus" :key="m.id">{{m.name}}</p>
		<p v-for="m in menus" :key="m.id">{{m.name}}</p>
		<p v-for="m in menus" :key="m.id">{{m.name}}</p>
		<p v-for="m in menus" :key="m.id">{{m.name}}</p>
=======
    <Content comment="这是楼主">
       <Content comment="这是2楼">
         <Content comment="这是3楼">
           <Content comment="这是4楼"/>
         </Content>
       </Content>
    </Content>
>>>>>>> 735369b9b03f1e62ec60c79544175372fa94b241
	</div>
</template>
<script>
import Content from '@/components/common/Content'
export default {
  name: 'tq-footer',
  props:['msg'],
  components:{Content},
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
    getMenus:function(){
       var _this = this;
       this.$http.get('static/data/menu.json',null).then(
         function(res){
           _this.menus = res.body;
         }
       );
    }}
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
	/*background-color: lawngreen; */
}
input{
	width:400px;
	border: 2px solid bisque;
	border-radius: 4px;
	height: 30px;
	margin: 5px 0;
}
</style>
