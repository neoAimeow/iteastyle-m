<template>
    <div class="ts-container">
        <div class="ts-main" v-for="(item,key) in items" :key="key">
            <router-link :to="{path:'./teaStateInside',query: {id: item.id}}">
                <div class="ts-main-center-right">
                    <div class="ts-main-head"><span v-html="item.title"></span></div>
                    <div class="ts-main-content"><span>{{item.content}}</span></div>
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
        that.items = response.data.model.posts;
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
    align-items: center;
    height: 120px;
    width: 80%;
    margin-top: 30px;
    border-style: dotted;
    border-color: #9dc135;
}
.ts-main-head{
    background-color: #9dc135;
    width: auto;
    text-align: center;
    border-radius: 5px;
    color: white;
    height: auto;
    max-width: 200px;
    margin-left: -40px;
    margin-top: -10px;
}
.ts-main-content{
    margin-top: 20px;
    font-size: 10px;
    color: #626262;
    font-size:12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    width: auto;
    max-width: 200px;
}
</style>
