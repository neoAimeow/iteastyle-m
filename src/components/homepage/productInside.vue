<template>
    <div class="td-container">
        <div class="td-main">
            <div class="td-main-img" v-for="(info1 , key) in info.cases" :key="key">
                <silentbox-group>
                    <silentbox-item v-for="(info2 , key2) in info1.imageArr" :key="key2" :src="info2">
                        <img  v-if="key2===0" class="td-main-picture" :src="info1.imageArr[0]" alt="">
                    </silentbox-item>
                    <div class="td-main-title"><span>{{info1.title}}</span></div>
                </silentbox-group>
            </div>
        </div>
        <el-pagination
            layout="prev, pager, next"
            :total="totalCount" :page-size="pageSize" :current-page="currentPage" @current-change="currentPageChanged" 
        >
        </el-pagination>
    </div>

    
</template>
<script>
export default {
    data() {
        return {
            info:{},
            currentPage:1,
            pageSize:6,
            totalCount: 0
        }
    },
created: function() {
    console.log(this.$route.query.type);
    this.request();
  },
  methods : {
      request() {
        var that = this;
        this.$ajax.get('/getCaseByType', {
            params:{
                type:this.$route.query.type,
                page:this.currentPage,
                pageSize:this.pageSize
            }
        })
        .then(function (response) {
        console.log(response);
        that.info = response.data.model.items;
        that.totalCount = response.data.model.totalCount;
        })
        .catch(function (response) {
        console.log(response);
        });
      },
      currentPageChanged(val) {
        this.currentPage = val;
        this.request();

      }
  }
}
</script>


<style lang="scss">
.td-container{
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    // border-bottom:2px solid #9dc135;
    width:100%;
    // background-color: aqua;

}

.td-main{
    // margin-top: 80px;
    // width: 900px;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    width:320px;   
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    // align-items: center; 
    // background-color: red; 
    margin-bottom: 20px; 
   
    // margin-top:40px; 

}
.td-main-img{
    // width: 300px;
    // display: flex;
    // justify-content: center;
    // align-items: flex-end;
    width:130px;
    height: 90px;
    margin:10px;
    // background-color: yellow;
    

}

.td-main-picture{
    // width: 270px;
    // height: 200px; 
    width:130px;
    height: 90px;
    //position:absolute;
    //z-index: -1;
   

}

.td-main-title{
    // position: relative;
    // top:-60px;
    // color: white;
    // background-color: rgba(180, 218, 44, 0.5);
    // width: 270px;
    // height: 40px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    width:130px;   
    background-color: rgba(174,203,87, 0.83);
    text-align: center;
    color: white;
    line-height: 25px;
    position: relative;
    top: -40px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

}
</style>
