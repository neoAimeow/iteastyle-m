<template>
<div class="productDisplay">

<div v-for="(item,key) in items" :key="key" >
    <router-link :to="{path:'/homepage/productInside', query: {type: item.type}}">
    <div class="product" >
        <div class="product-name">
            <img class="logo" :src="item.typeIcon">
            <div class="title">
                <span class="C-title">{{item.typeName}}</span>
                <span class="E-title">{{item.typeNameEn}}</span>
            </div>
        </div>
        <span class="arrow">&#xe64a;</span>
        <div class="produtc-picture">
            <img class="picture" :src="item.typeImage">
        </div>
        
    </div>
    </router-link>
</div>

</div>
</template>

<script>
export default {
  data() {
    return {
      items:[]
    }
  },
  created: function() {
    var that = this;
      this.$ajax.get('/getData', {params: {key: 'caseType'}})
    .then(function (response) {
      console.log(response);
      that.items = response.data.model;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>


<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 721549 */
  src: url('//at.alicdn.com/t/font_721549_epzyyrpnt7.eot');
  src: url('//at.alicdn.com/t/font_721549_epzyyrpnt7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.woff') format('woff'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_721549_epzyyrpnt7.svg#iconfont') format('svg');
}

    a{
    color:#9dc135;
    text-decoration: none;

}
    .productDisplay{
        display: flex;
        flex-direction: column;
        align-items: center;     
        width:100%;

    }
    .product{
        width:100%;
        text-align: center;
        margin-bottom: 10px;
        margin-top:30px;
        display: flex;
        flex-direction: column;
        align-items: center;   
    }
    .arrow{
        color:#9dc135;
        font-size: 40px;
        
    }
    .product-picture{
        width:100%;
        /* height:400px; */
        display: flex;
        justify-content: center; 

    }
    .picture{
        width:90%;
        /* height:400px;
         */
   
    }
    
    .product-name{
        max-width:300px;
        width:70%;
        height:60px;        
        border:1.3px dotted #9dc135;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .logo{
        width:40px;
        height:auto;
    }
    .title{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        height:40px;
        /* background-color: blue; */
    }
    .C-title{
        font-size: 20px;
        letter-spacing:5px;
       
   
    }
    .E-title{
        font-size:10px;
        line-height: 0.8;
    }
     
</style>