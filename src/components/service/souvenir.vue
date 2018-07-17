<template>
<div class="souvenir">
  <div class="souvenir-main">
    <div class="souvenir-main-title">
      <span style="position: relative;letter-spacing:2px;top:30px;left:35px;">{{items.souvenir.title}}</span>
      <div class="souvenir-main-title-cn"></div>
      <div class="souvenir-main-title-hr"></div>
      <span style="position: relative;top:5px;left:35px;font-size:10px;">{{items.souvenir.title_en}}</span>
      <div class="souvenir-main-title-en"></div>
    </div>
    <div class="souvenir-main-souvenir">
      <img :src="items.souvenir.imageUrl" alt="" class="souvenir-main-souvenir-img">
      <span class="souvenir-main-souvenir-introduce" v-html="items.souvenir.content"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items:{},
    }
  },
  created: function() {
    this.request();
  },
  methods: {
    request:function() {
      var that = this;
      this.$ajax.get('/getTeaGiftService',{
      })
      .then(function (response) {
        console.log(response);
        that.items = response.data.model;
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  }
  
}
</script>


<style lang="scss">
.souvenir{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.souvenir-main{
  width: 250px;
}
.souvenir-main-title{
  width: 250px;
  display: flex;
  flex-direction: column;
  color: white;
}
.souvenir-main-title-hr{
  width: 250px;
  height: 1px;
  border: none;
  border-top: 2px solid #9dc135;
}
.souvenir-main-title-cn{
    width: 100px;
    margin-left: 30px;
    border-top: 30px solid #9dc135;
    border-top-left-radius: 10px;
    border-top-right-radius:10px;
}
.souvenir-main-title-en{
    width: 100px;
    margin-top: -20px;
    border-top: 30px solid #9dc135;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
}
.souvenir-main-souvenir-img{
  width: 250px;
}
</style>
