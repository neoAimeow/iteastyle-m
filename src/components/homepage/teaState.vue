<template>
    <div class="ts-container">
        
        <div class="ts-main" v-for="(item,key) in items" :key="key">
            <router-link :to="{path:'./teaStateInside',query: {id: item.id}}">
                <div class="ts-main-center">
                    <div class="ts-main-head"><span>{{item.title}}</span></div>
                    <div class="ts-main-content"><span>{{item.summary}}</span></div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        items: [],
        currentPage:1,
        totalCount:0,
        pageSize:4
    };
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
            this.$ajax.get('/getPosts', {
                params: {
                    page:this.currentPage,
                    pageSize:this.pageSize
                }
            })
        .then(function (response) {
        console.log(response.data);
        that.items = response.data.model.items;
        })
        .catch(function (response) {
        console.log(response);
        });
    }
    }
}
</script>

<style>
a{
    text-decoration: none;
}
.ts-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    max-height: 650px;
}
.ts-main{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 80%;
    border: 1.5px dotted #9dc135;
    margin-top: 20px;
    margin-bottom: 20px;
    
}
.ts-main-head{
    background-color: #9dc135;
    width: auto;
    text-align: center;
    border-radius: 5px;
    color: white;
    max-width: 140px;
    margin-left: -20px;
    top: -20px;
    font-size: 13px;
    padding: 10px;
    position: relative;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.ts-main-content{
    margin-top: 20px;   
    color: #626262;
    font-size:12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    /* width: 250px; */
    width:80%;
    text-align: left;
    /* background-color:red; */
    padding-bottom: 20px;
    margin-top:5px;
    margin:0 auto;
    
}

    
</style>
