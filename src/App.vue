<template>
  <div id="app">
    <div class="home-head">
      <div class="home-head-bgimg">
        <img class="home-head-bgimg1" src="http://pa74otoy6.bkt.clouddn.com/pd-title-background.png" alt="">
        <img class="home-head-bgimg2" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
      </div>
      <div class="home-head-menu">
        <div class="home-head-icon">
          <div style="font-size:35px;" v-for="(data,key) in menu" :key="key" :label="key">
            <span v-html="data.icon"></span>
          </div>
        </div>
        <div class="home-head-list">
          <div style="margin-left:15px;"  v-for="(data,key) in menu" :key="key" :label="key" >
            <router-link :index="data.title" :to="data.path">
              {{data.title}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  <router-view></router-view>
    <div class="home-foot">
      <div class="home-foot-left">
        <div class="home-foot-left-logo">
          <img style="height: 40px;width: 40px;" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
        </div>
        <div class="home-foot-left-order">
          <span>全国订购电话</span>
          <span>0571 8373 1743</span>
        </div>
      </div>
      <div class="home-foot-right">
        <span>杭式下午茶，有初恋的温度</span>
        <span>使用条款 | 法律声明</span>
      </div>
    </div>
  </div>
</template>

<script>
import menus from './common/menus'
export default {
  name:'APP',
  data(){
    return{
      menu: []
    }
  },
  created(){
    this.menu = menus
  }
}
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
span{
  font-family: iconfont;
}
html,
body,
#app{
  margin: 0;
  padding: 0;
}
.home-head-bgimg{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.home-head-bgimg1{
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: -1;
}
.home-head-bgimg2{
  height: 50px;
  width: 50px;
}
.home-head-menu{
  width: 100%;
}
.router-link-active{
  color: #9dc135;
  background-color: white;
}
.home-head-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 13px;
}
.home-head-icon{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.home-foot{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  height: 150px;
  background-color: #dad6d6;
  border:none;
  border-top:2px solid #9dc135;
}
.home-foot-left{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.home-foot-left-order{
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  margin-left: 10px;
}
.home-foot-left-logo{
  margin-left: 5px;
}
.home-foot-right{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 13px;
}
</style>
