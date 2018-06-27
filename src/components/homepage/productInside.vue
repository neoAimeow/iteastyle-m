<template>
<div class="productinside">
        <div class="name-border">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
            <span class="name">{{title}}</span>
        </div>
        
    <div class="pdinside-body">
        <div v-for="(img,key) in imgs" :key="key" >          
            <div v-if="key==1" class="pd-introduction">
                <span class="pd-word">{{content}}</span>
            </div>
            <img  class="body-img" :src="img" alt="">
        </div>
    </div>

    
    
</div>
</template>

<script>
export default {
    data() {
        return {
            imgs:{
                    
            },
            content:'',
            title: ''
        }
    },
created: function() {
    console.log(this.$route.query.id);
    var that = this;
     this.$ajax.get('/productShowerDetail', {
        params:{
            productShowerId:this.$route.query.id
        }
    })
    .then(function (response) {
      console.log(response);
      that.content = response.data.model.content;
      that.imgs = response.data.model.imageArr;
      that.title = response.data.model.title;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style scoped>
    .productinside{
        margin:0;
        padding:0;
        border-bottom:2px solid #9dc135;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }

    .name-border{
        width:205px;
        height:50px;
        border:1px dotted #9dc135;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin:0 auto;
        margin-bottom: 40px;
        margin-top: 40px;
      
    }

    .logo{
        width:40px;
        height:auto;
    }

    .name{
        margin-left:5px;
        color:#9dc135;
    }
    
    .pdinside-body{
        width:500px; 
        margin:0 auto; 
        margin-bottom: 40px;
    }

    .pd-introduction{
        width:500px;
        line-height: 2;      
        margin:0 auto; 
        /* background-color: blue; */
        color:#626262;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pd-word{
        margin:40px;
        text-align: center;

    }
    .body-img{
        width:500px;
        height:300px;
    }



    
</style>