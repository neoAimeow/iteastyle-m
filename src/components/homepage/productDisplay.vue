<template>
<div class="productDisplay">

    <div class="pd-ct">           
        <div class="product-name" v-for="(item,key) in items" :key="key">
            <router-link :to="{path:'/homepage/productInside',query: {id: item.id}}">                        
                <img class="pd-img" :src="item.imageArr[0]">                       
                <span>{{item.title}}</span>
            </router-link>
        </div>
    </div>

   <div class="pd-page">
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
            items:[

            ],
            headerImageUrl:'',
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
            this.$ajax.get('/productShower', {
                params: {
                    page:this.currentPage,
                    pageSize:this.pageSize
                }

            })
            .then(function (response) {
            console.log(response);
            that.items = response.data.model.products;
            that.totalCount = response.data.model.totalCount
            that.headerImageUrl = response.data.model.headerImageUrl
            })
            .catch(function (response) {
            console.log(response);
            });
      }
  }
}
</script>


<style scoped>
a{
    color:#626262;
    text-decoration: none;
}
.productDisplay {
    margin: 0;
    padding: 0;
    border-bottom:2px solid #9dc135;
    width: 100%;
}

.pd-ct {
  margin: 0 auto;
  max-width: 97%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; 
  margin-top: 20px;
  margin-bottom: 20px;
}

.pd-img {
  width: 130px;
  height: 80px;
  margin-bottom: 10px;
}

.product-name {
  width:130px;
  text-align: center;
  margin: 15px;
  color: #626262;
}

.pd-page {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}


</style>