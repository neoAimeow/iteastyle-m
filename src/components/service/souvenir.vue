<template>
<div class="souvenir">
  <div class="souvenir-main">
    <div class="souvenir-main-title">
      <span style="position: relative;letter-spacing:2px;top:27px;left:7px;width:100px;">{{items.souvenir.title}}</span>
      <div class="souvenir-main-title-cn"></div>
      <div class="souvenir-main-title-hr"></div>
    </div>
    <div class="souvenir-main-souvenir">
      <img :src="items.souvenir.imageUrl" alt="" class="souvenir-main-souvenir-img">
      <span class="souvenir-main-souvenir-introduce" v-html="items.souvenir.content"></span>
    </div>
  </div>
  <div class="souvenir-main">
    <div class="souvenir-main-title">
      <span style="position: relative;letter-spacing:2px;top:27px;left:15px;width:100px;">{{items.way.title}}</span>
      <div class="souvenir-main-title-cn"></div>
      <div class="souvenir-main-title-hr"></div>
    </div>
      <div class="souvenir-main-drink">
        <div class="souvenir-main-drink-introduce">
          <img class="souvenir-main-drink-img" :src="items.way.imageUrl" alt="">
          <div  v-for="(info1 , key1) in items.way.ways" :key="key1">
            <div class="souvenir-main-drink-subtitle">
              <div class="souvenir-main-drink-subtitle1">
                <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">{{key1+1}}</span>
              </div>
              <div class="souvenir-main-drink-subtitle2">
                <span>{{info1.title}}</span>
              </div>
            </div>
            <p class="souvenir-main-drink-content">{{info1.content}}</p>
            </div>
        </div>
      </div>
  </div>
  <div class="souvenir-main">
    <div class="souvenir-main-title">
      <span style="position: relative;letter-spacing:2px;top:27px;left:15px;width:100px;">{{items.mind.title}}</span>
      <div class="souvenir-main-title-cn"></div>
      <div class="souvenir-main-title-hr"></div>
    </div>
    <div class="souvenir-main-gift">
      <div class="souvenir-main-gitf-category" v-for="(info2 , key2) in items.mind.minds" :key="key2">
        <div class="souvenir-main-gitf-list">
          <el-table :data="info2.elements" stripe style="width: 300px;font-size:10px;">
            <el-table-column prop="number" label="编号" width="60">
            </el-table-column>
            <el-table-column prop="elementName" label="品名" width="60">
            </el-table-column>
            <el-table-column prop="wrap" label="包装" width="60">
            </el-table-column>
            <el-table-column prop="size" label="规格" width="130">
            </el-table-column>
            <el-table-column prop="price" label="价格（RMB）" width="100">
            </el-table-column>
          </el-table>
        </div>
        <div class="souvenir-main-gitf-introduce">
          <div class="gitf-introduce">
            <div class="gitf-introduce-title">
              <span style="color:#9dc135;font-size:18px;">- {{info2.itemTitle}} - -</span>
            </div>
            <div class="gitf-introduce-content">
              <span v-html="info2.itemContent"></span>
              <img :src="info2.itemImageUrl" alt="" style="width:300px;margin-top:20px;"/>
            </div>
          </div>
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
      items:{},
    }
  },
  created: function() {
    this.request();
  },
  methods: {
    request:function() {
      var that = this;
        this.$ajax.get('/getData', {params: {key: 'teaGift'}})
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
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.souvenir-main-title{
  width: 250px;
  display: flex;
  flex-direction: column;
  color: white;
}
.souvenir-main-title-hr{
  width: 260px;
  
  border: 1px solid #9dc135;
}
.souvenir-main-title-cn{
    width: 100px;
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
.souvenir-main-souvenir{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.souvenir-main-souvenir-img{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 250px;
}
.souvenir-main-drink{
  width: 250px;
}
.souvenir-main-drink-introduce{
  width: 250px;
}
.souvenir-main-drink-img{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 250px;
}
.souvenir-main-drink-subtitle{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.souvenir-main-drink-subtitle1{
  width:25px; 
  height:25px; 
  background-color: #9dc135; 
  border-radius:12.5px;
}
.souvenir-main-drink-subtitle2{
  margin-left: 15px;
  color: #9dc135;
}
.souvenir-main-drink-content{
  margin-left: 40px;
}
.souvenir-main-gift{
  margin-top: 20px;
}
.souvenir-main-gitf-introduce{
  margin-top: 20px;
}
.gitf-introduce-content{
  width: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
