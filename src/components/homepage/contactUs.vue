<template>
    <div class="cu-container">
        <div class="cu-title">
            <span style="font-family:Times New Roman;">OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
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
            <span style="font-family:Times New Roman;">CONTACT US</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
            <span>联系我们</span>
        </div>
        <div class="cu-content">
            <span style="margin-bottom:20px;margin-left:-40px;">{{info.contactUsTitle}}</span>
            <div class="cu-content-title">
                <span>{{info.companyName}}</span>
                <span>地址：{{info.companyAddress}}</span>
                <span>电话：{{info.telephoneNumber}}</span>
                <span>手机：{{info.phoneNumber}}</span>
                <span>邮箱：{{info.mailAddress}}</span>
                <span>网址：{{info.siteAddress}}</span>
            </div>
            <div class="cu-content-QR">
                <img style="margin-right:80px;border: 5px solid rgba(157,193,53,0.6);" src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
                <img style="border: 5px solid rgba(157,193,53,0.6);" src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
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
    this.$ajax.get('/companyStory', {

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
    background-color: #eeebeb;
    margin-top: 20px;
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
