<template>
<div class="productinside">
    <div  class="pd-name">
        <div class="title">
            <img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
            <span>{{typeName}}</span>
        </div>

        <div class="name-border">
        <span class="name">{{title}}</span>
        </div>    
    </div>

    <div  v-for="(img,key) in imgs" :key="key" >         
             <img  class="pd-img" :src="img" alt="">         
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            imgs:[
                
            ],
            title: '',
            tyoeName:''
        }
    },
created: function() {
    console.log(this.$route.query.id);
    var that = this;
     this.$ajax.get('/getCaseById', {
        params:{
            caseId:this.$route.query.id
        }
    })
    .then(function (response) {
      console.log(response);
      that.imgs = response.data.model.imageArr;
      that.title = response.data.model.title;
      that.typeName = response.data.model.typeName

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
        align-items: center;
       

    }
    
    .pd-picture{
        display: flex;
        flex-wrap:wrap;
        width:1020px;
        margin: 0 auto;
        margin-bottom: 80px;
        margin-top:80px;  
    }
    .pd-name{
        /* background-color:red; */
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color:#9dc135;
    }
    .title{
        width:150px; 
        height:50px;
        border:1px dotted #9dc135;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-top:30px;
    }
    
    .title img{
        width:40px;
        height:auto;
        margin-right:5px;
    }
    .name-border{
        max-width:250px;
        /* background-color:palevioletred; */
        border-left:2px solid #9dc135;
        border-right:2px solid #9dc135;
        align-items: center;
        margin-bottom: 20px;
        margin-top:10px;
    }
    .pd-img{
        width:340px;
        height:220px;
        margin-bottom:20px;
    }
    .name{
        width:200px;
        text-align: center;
        margin-left:10px;
        margin-right:10px;
    }
</style>
