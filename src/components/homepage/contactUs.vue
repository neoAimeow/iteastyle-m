<template>
    <div class="cu-container">
        <div class="cu-title">
            <span style="font-family:Times New Roman;">OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
            <span>杭式下午茶</span>
        </div>
        <div class="cu-content">
            <div class="cu-content-style">
                <span>{{companyInfo.storyContent}}</span>
            </div>
        </div>
        <div class="cu-title">
            <span style="font-family:Times New Roman;">CONTACT US</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
            <span>联系我们</span>
        </div>
        <div class="cu-content">
            <span style="margin-bottom:20px;margin-left:-40px;">{{contactUsInfo.contactUsTitle}}</span>
            <div class="cu-content-title">
                <span>{{contactUsInfo.companyName}}</span>
                <span>地址：{{contactUsInfo.companyAddress}}</span>
                <span>电话：{{contactUsInfo.telephoneNumber}}</span>
                <span>手机：{{contactUsInfo.phoneNumber}}</span>
                <span>邮箱：{{contactUsInfo.mailAddress}}</span>
                <span>网址：{{contactUsInfo.siteAddress}}</span>
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
      companyInfo:{},
      contactUsInfo:{},
      center: [0,0],
      zoom:14
    }
  },
  created: function() {
    var that = this;

    this.contactUsRequest();
    this.companyRequest();

  },
  methods:  {
      contactUsRequest: function() {

        this.$ajax.get('/contactUsData', {

        })
        .then(function (response) {
        console.log(response);
        that.contactUsInfo = response.data.model;
        that.center = [response.data.model.longitude , response.data.model.latitude]
        })
        .catch(function (response) {
        console.log(response);
        });
      },
    companyRequest: function() {

        this.$ajax.get('/companyStory', {

        })
        .then(function (response) {
        console.log(response);
        that.companyInfo = response.data.model;
        })
        .catch(function (response) {
        console.log(response);
        });
      }
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
