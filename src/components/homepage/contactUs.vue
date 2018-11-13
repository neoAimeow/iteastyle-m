<template>

    <div class="cu-container">

        <div class="cu-title">
            <span style="font-family:Times New Roman;font-size:23px">OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
            <span style="letter-spacing:3px;">杭式下午茶</span>
        </div>

        <div class="cu-content">
            <span class="cu-content-style" v-html="info.storyContent"></span>
        </div>

        <div class="cu-title">
            <span style="font-family:Times New Roman;font-size:23px">CONTACT US</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus-wap.png" alt="">
            <span style="letter-spacing:5px;">联系我们</span>
        </div>

        <div class="cu-content">

            <span style="margin-bottom:20px;letter-spacing:1.5px;">{{info.contactUsTitle}}</span>

            <div class="cu-content-title">
                <span>{{info.companyName}}</span>
                <span>地址：{{info.companyAddress}}</span>
                <span>电话：{{info.telephoneNumber}}</span>
                <div style="display:flex;flex-direction:row;">
                    <div>手机：</div>
                    <div>
                        <span v-for="(number,key) in info.phoneNumber" :key="key">{{number}}<br></span>
                    </div>
                </div>
                <span>邮箱：{{info.mail}}</span>
                <span>网址：{{info.webUrl}}</span>
            </div>

            <div class="cu-content-QR">
                <img style="margin-right:55px;border: 5px solid rgba(157,193,53,0.6);"
                     :src="info.qrCodeImageUrl" alt="">
                <img style="border: 5px solid rgba(157,193,53,0.6);" :src="info.customerQrCodeImageUrl" alt="">
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
                info: {},
                center: [0, 0],
                zoom: 14
            }
        },
        created: function () {

            this.request();

        },
        methods: {
            request: function () {
                var that = this;

                this.$ajax.get('/getData', {params: {key: 'common'}})
                    .then(function (response) {
                        console.log(response);
                        that.info = response.data.model;
                        that.center = [response.data.model.longitude, response.data.model.latitude];
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            },

        }
    }
</script>

<style>
    .cu-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fafafa;
        width: 90%;
        margin: 0 auto;
        border-radius: 10px;
        color: #757575;
    }

    .cu-title {
        border: 1.5px dotted #757575;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 80px;
        margin-top: 40px;
    }

    .cu-content {
        width: 94%;
        /* background-color: #eeebeb; */
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }

    .cu-content-style {
        font-size: 13px;
        max-width: 500px;
    }

    .cu-content-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .cu-content-QR {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
    }

    .cu-content-map {
        height: 150px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .cu-content-map-style {
        width: 250px;
        border: 5px solid rgba(157, 193, 53, 0.6);
    }
</style>
