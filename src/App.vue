<template>
  <div id="app">
    <div class="home-head">
      <div class="home-head-bgimg">
        <img class="home-head-bgimg1" src="http://pa74otoy6.bkt.clouddn.com/pd-title-background.png" alt="">
        <img class="home-head-bgimg2" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
      </div>
      <div class="home-head-menu">
        <el-menu class="el-menu-demo" active-text-color="#81b316" background-color="#ffffff" default-active="首页" :router="true" mode="horizontal">
          <el-menu-item :index="data.title" v-for="(data,key) in menu" :key="key" :label="key" :route="data.path">
            {{data.title}}
          </el-menu-item>        
        </el-menu>
      </div>
    </div>
  <router-view></router-view>
    <div class="home-foot">
      <div class="home-foot-left">
        <div class="home-foot-left-logo"><img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt=""></div>
        <div class="home-foot-left-order">
          <span>全国订购电话</span>
          <span>0571 8373 1743</span>
        </div>
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
}
.home-head-bgimg1{
  width: 100%;
  position: absolute;
  z-index: -1;
}
.home-head-bgimg2{
  height: 50px;
  width: 50px;
}
.home-head-menu{
  
}
</style>
