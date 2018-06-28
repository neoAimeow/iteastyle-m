<template>
    <div class="cu-container">
        <div class="cu-title">
            <span>OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus.png" alt="">
            <span>杭式下午茶</span>
        </div>
        <div class="cu-content">
            <div class="cu-content-style">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;杭州执贝科技有限公司旗下品牌【杭式下午茶】是效力于茶歇（TEA BREAK）
                    一站式的综合服务机构，真正以茶元素为核心，用纯天然的超微茶粉，将茶与饮品、茶与糕点
                    、茶与时尚有机的结合在一起，旨在引领一种健康的生活方式与生活理念！
                </span>
            </div>
        </div>
        <div class="cu-title">
            <span>CONTACT US</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus.png" alt="">
            <span>联系我们</span>
        </div>
        <div class="cu-content">
            <div class="cu-content-title">
                <span>杭式下午茶 创意茶歇 健康食尚</span>
                <span style="margin-top:20px;">杭州执贝科技有限公司</span>
                <span>地址：杭州民和路525号三宏国际8楼</span>
                <span>电话：(86)0571-83731743</span>
                <span>手机：159-0663-1121</span>
                <span>邮箱：iteastyle@126.com</span>
                <span>网址：https://www.iteastyle.cn</span>
            </div>
            <div class="cu-content-QR">
                <img style="margin-right:80px;" src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
                <img src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
            </div>
            <div class="cu-content-map">
                <el-amap class="cu-content-map-style" vid="amapDemo" :zoom="zoom" :center="center">
                    <el-amap-marker :position="center"></el-amap-marker>
                </el-amap>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      info:{},
      center: [0,0],
      zoom:14
    }
  },
  created: function() {
    var that = this;
     this.$ajax.get('/contactUsData', {

    })
    .then(function (response) {
      console.log(response);
      that.info = response.data.model;
      that.center = [response.data.model.longitude , response.data.model.latitude]
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style>
.cu-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cu-title{
    border-style: dotted;
    border-color: #9dc135;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 80px;
    margin-top: 40px;
}
.cu-content{
    width: 90%;
    background-color: #eeebeb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}
.cu-content-style{
    margin-top: 40px;
    width: 80%;
    margin-bottom: 40px
}
.cu-content-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
}
.cu-content-QR{
    margin-top: 40px;
}
.cu-content-map{
    height: 230px;
    margin-top: 40px;
    margin-bottom: 40px;
}
.cu-content-map-style{
    width: 300px;
    border: 5px solid rgba(157,193,53,0.6);
}
</style>
