<template>
    <div class="footer">
      <slot></slot>
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
let timer = null
export default {
  name: 'Footer',
 data () {
    return {
      isTop: true
    }
  },
  mounted () {
    //this.needScroll()
  },
  methods: {
    needScroll () {
      let clientHeight = document.documentElement.clientHeight
      let obtn = this.$refs.btn
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        if (osTop >= clientHeight) {
          obtn.style.display = 'block'
        } else {
          obtn.style.display = 'none'
        }
        if (!this.isTop) {
          clearInterval(timer)
        }
        this.isTop = false
      }
    },
    goTop () {
      timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>
<style scoped>
h1{
  font-size: 15px;
  color: white;
}
.footer {
  margin: 0 auto;
  /*background-color: aqua; */
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
