<template>
    <div class="tsI-container">
        
        <div class="tsI-main">
            <div class="tsI-main-head">
                <span>{{title}}</span>
                <hr style="height:0.2px;border:none;border-top:1px solid #a7a7a7; width: 800px;" />
                <span style="font-size:5px;color:#626262;">发布时间： {{ gmtModified | moment("YYYY-MM-DD HH:mm")  }}  </span>
            </div>
            <div class="tsI-main-body">
                <div class="tsI-main-body-content">
                    <span v-html='content'></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            content:'',
            gmtModified:''
        }
    },
created: function() {
    console.log(this.$route.query.id);
    var that = this;
     this.$ajax.get('/getPostById', {
        params:{
            postId:this.$route.query.id
        }
    })
    .then(function (response) {
      console.log(response);
      that.content = response.data.model.content;
      that.title = response.data.model.title;
      that.gmtModified = response.data.model.gmtModified;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style  scoped>
.tsI-container{
    /* //height: 900px; */
    border-bottom:2px solid #9dc135;
}

.tsI-main-head{
    margin-top: 20px;
    text-align: center;
}
.tsI-main-body{
    /* //height: 600px; */
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* //background-color: blue; */
    margin-top: 10px;
    margin-bottom: 40px;
}
.tsI-main-body-content{
    width: 700px;
    font-size: 10px;
    letter-spacing:3px;
}
</style>
