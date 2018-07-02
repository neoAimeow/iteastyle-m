<template>
    <div class="index-container">
        <div class="index-head">
            <el-carousel :height="screenWidth/3+'px'">
                <el-carousel-item v-for="(item1,key) in items.headerImages" :key="key">
                    <progressive-img :src="item1" />
                </el-carousel-item>
            </el-carousel>
            <div class="index-head-logo">
              <span style="letter-spacing:3px;font-size:18px;word-break:keep-all;white-space:nowrap;">杭式下午茶，有初恋的温度</span>
              <span style="letter-spacing:-0.4px;font-size:12px;word-break:keep-all;white-space:nowrap;">茶为国饮，杭为茶都，一份伴手礼，遥遥西湖情</span>
              <div class="index-head-logo-font">
                <div style="border:solid 2px #eaffbd;border-radius:5px;"><span style="font-size:30px;padding:5px;">&#xe6cf;</span></div>
                <div style="margin-left:12px;font-weight:bold;font-size:18px;">ONLINE SHOPPING</div>
              </div>
            </div>
        </div>
        <div class="index-main">
            <div v-for="(item2,key) in items.serviceImages" :key="key">
                <div style="display:flex;flex-dirction:column;justify-content:center;"><span  class="index-main-title">茶歇服务</span></div>
              <div style="display:flex;flex-dirction:column;justify-content:center;"><progressive-img class="index-main-img" :src="item2" /></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      screenWidth: document.body.clientWidth
    };
  },
  components: {},
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  created: function() {
    var that = this;
     this.$ajax.get('/homepage', {

    })
    .then(function (response) {
      console.log(response.data);
      that.items = response.data.model;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
};
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 721549 */
  src: url('//at.alicdn.com/t/font_721549_epzyyrpnt7.eot');
  src: url('//at.alicdn.com/t/font_721549_epzyyrpnt7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.woff') format('woff'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.svg#iconfont') format('svg');
}
span {
    font-family: iconfont;
}
.index-container{
  width: 100%;
}
.index-head-logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #9dc135;
    color: white;
    height: 100px;
}
.index-head-logo-font{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.index-main-img{
    margin-top: 20px;
    width: 80%;
}
.index-main-title{
    border-style: dotted;
    border-color: #dedfdc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 30%;
    height: 80px;
    font-family:Times New Roman;
}
</style>
