<template>
<div class="serviceContent">

    <router-link :to="{path:'/service/teaBreakService'}">
        <div class="service-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png">
            <div class="title">
                <span class="C-title">茶歇服务</span>
                <span class="E-title">TEA BREAK SERVICE</span>
            </div>
        </div>
    </router-link>

    <div class="hr"></div>

    <router-link :to="{path:'/service/souvenir'}">
        <div class="service-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png">
            <div class="title">
                <span class="C-title">杭州伴手礼</span>
                <span class="E-title">TEA SOUVENIR</span>
            </div>
        </div>
    </router-link>  

    <div class="hr"></div>

        <router-link :to="{path:'/service/seminar'}">
        <div class="service-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png">
            <div class="title">
                <span class="C-title">茶事活动</span>
                <span class="E-title">TEA CULTURE SEMINAR</span>
            </div>
        </div>
    </router-link>

    <div class="hr"></div>

    <router-link :to="{path:'/service/diyActivites'}">
        <div class="service-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png">
            <div class="title">
                <span class="C-title">DIY活动</span>
                <span class="E-title">DIY ACTIVITES</span>
            </div>
        </div>
    </router-link>

    <div class="hr"></div>


</div>
</template>


<style scoped>
    /* a{
    color:#9dc135;
    text-decoration: none;

} */
    .serviceContent{
        display: flex;
        flex-direction: column;
        align-items: center;   
        width:100%;
        margin-bottom: 50px;

    }
    
    .service-name{
        width:250px;
        height:60px;       
        border:1.3px dotted #9dc135;
        display:flex;
        align-items: center;
        margin-top:20px;
        box-shadow: 0px 0px 10px 0px #e0e0e0;
        border-radius: 3px;
    }

    .logo{
        width:40px;
        height:40px;
        margin-left:40px;

    }
    .title{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        height:40px;
        color: #9dc135;
        
    }
    /* .title:hover{
        color:#fff;
    } */

    .C-title{
        font-size: 20px;
   
    }
    .E-title{
        font-size:10px;
        line-height: 0.8;
    }
    
    .hr{
        border:0.5px solid #f0f0f0;
        width: 90%;
        margin-top:20px;
    }
</style>