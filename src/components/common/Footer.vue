<template>
    <div class="footer">
		<div class="footer-inner">
			2013 &copy; Metronic by keenthemes.Collect from <a href="http://www.cssmoban.com/" title="网站模板" target="_blank">网站模板</a> - More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a>
		</div>
		<div class="footer-tools">
			<span class="go-top">
			<i class="icon-angle-up"></i>
			</span>
		</div>
	</div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.footer {
  margin-left: 0 !important;
  background-color: aqua;
}

.footer .footer-inner {
  float: left;
  display: inline-block;
}

.footer .footer-tools {
  float: right;
  display: inline-block;
}

.footer .footer-tools .go-top { 
  display: block;
  text-decoration: none;
  cursor: pointer;
  margin-top: -2px;
  margin-right: 0px;
  margin-bottom: 0px;
  font-size: 16px;
  padding: 0px 6px 0px 6px;
}

.icon-angle-up:before {
  content: "\f106";
}
</style>