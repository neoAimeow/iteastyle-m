<template>
<div class="classinside-one">
    
    
    <div class="case-body">
               
        <div v-for="(item,key) in items" :key="key">   
           
            <div class="picture"> 
               <img class="case-picture" :src="item.imageArr[0]" alt="">
               <div class="case-title">
                   <span>{{item.title}}</span>
               </div> 
            </div>  
            
        </div>
          
    </div> 
    <div class="case-foot">
        <el-pagination
            layout="prev, pager, next"
            :total="totalCount" :page-size="pageSize" :current-page="currentPage" @current-change="currentPageChanged"
        >
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
            items:[

            ],
            currentPage:1,
            totalCount:0,
            pageSize:6
        }
 },
created: function() {
    this.request();
  },
  methods: {
      currentPageChanged(val) {
          this.currentPage = val;
              this.request();
        console.log(`当前页: ${val}`);
      },
      request() {
              var that = this;
              
            this.$ajax.get('/cases', {
                params: {
                    type:this.$route.query.type,
                    page:this.currentPage,
                    pageSize:this.pageSize
                }

            })
            .then(function (response) {
                console.log(response);
                that.items = response.data.model.cases;
                that.totalCount = response.data.model.totalCount
                that.isLoading = false;
            })
            .catch(function (response) {
                console.log(response);
                that.isLoading = false;

            });
      }
  }
}
</script>


<style scoped>
.classinside-one{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width:100%;
}

.nocase{
    text-align: center;
    margin-top:50px;
    color:#626262;
}
.case-body{
    width:100%;   
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;   
   
    margin-top:40px; 
    
}

.picture{
    width:130px;
    height: 80px;
    margin:10px;
}

.case-picture{
    width:130px;
    height: 80px;
    position:absolute;
    z-index: -1;
}
.case-title{
    width:130px;   
    background-color: rgba(174,203,87, 0.83);
    text-align: center;
    color: white;
    line-height: 25px;
    position: relative;
    top: 45px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.case-foot{
    
    
    margin-bottom: 40px;

}
</style>
