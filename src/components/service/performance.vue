<template>
<div class="performance">
  <div class="pf-main">
    <div class="pf-content" v-for="(info1 , key1) in info.items" :key="key1">
      <silentbox-group>
        <silentbox-item v-for="(info2 , key2) in info1.imageUrls" :key="key2" :src="info2">
          <img v-if="key2===0" :src="info2" alt="" class="pf-content-img">
        </silentbox-item>
      </silentbox-group>
      <div class="pf-content-title">
          <img :src="info1.iconImageUrl" alt="" class="pf-title-icon">
          <div class="pf-title">
            <span style="color:#9dc135;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:110px;">{{info1.title}}</span>
            <span>{{info1.title_en}}</span>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      info:{}
    }
  },
  created: function(){
    console.log(this.$route.query.id);
    this.request();
  },
  methods : {
    request() {
      var that = this;
      this.$ajax.get('/getTeaPerformService', {
        params:{
          id:this.$route.query.id,
        }
      })
      .then(function (response) {
        console.log(response);
        that.info = response.data.model;
      })
      .catch(function (response) {
        console.log(response);
      });
    }
  }
  
}
</script>


<style lang="scss">
.performance{
  width: 100%;
}
.pf-main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pf-content{
  margin-top: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow:0px 0px  5px 2px #aaa;
}
.pf-content-img{
  width: 250px;
  height: 180px;
}
.pf-content-title{
  width: 250px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.pf-title-icon{
  width: 50px;
  height: 50px;
}
.pf-title{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 15px;
}
</style>
