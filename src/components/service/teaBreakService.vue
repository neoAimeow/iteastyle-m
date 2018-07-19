　<template>
  <div class="service">
    <div class="reservation">
  
      <div class="r-title">
        <div class="hr"></div>
        <div class="mid-name">
          <div class="border">
            <div class="name">
              <span class="c-title">{{responseDatas.order.title}}</span>
              <span class="e-title">{{responseDatas.order.title_en}}</span>
            </div>
          </div>
  
        </div>
      </div>
  
      <span class="re-title2" v-html="responseDatas.order.orderWay.title"></span>
  
      <div class="way-ct">
        <div class="ct1" v-for="(value,key) in responseDatas.order.orderWay.items" :key="key">
          <div class="ct-title">
            <img style="width:30px;height:auto;" :src=value.imageUrl alt="">
            <span class="ct-title-name">{{value.title}}</span>
          </div>
          <span class="ct-bottom">{{value.content}}</span>
        </div>
      </div>
  
      <span class="re-title2" v-html="responseDatas.order.menu.title"></span>
  
      <div class="menu-border-out" v-for="(value,key) in responseDatas.order.menu.menus" :key="key">
  
        <div class="menu-border-inside">
          <div class="menu-head">
            <div class="menu-head-name">
              <span v-html="value.title"></span>
            </div>
            <div class="menu-head-triangle"></div>
          </div>
  
          <div class="menu-ct">
            <div class="menu" v-for="(food,eat) in  value.items" :key="eat">
  
              <span class="menu-top top-icon" v-html="food.icon"></span>
              <span class="menu-top">{{food.title}}</span>
  
              <ul class="menu-bottom">
                <li v-for="(cake,dessert) in food.desserts" :key="dessert">{{cake}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="service-scope">
      <div class="r-title">
        <div class="hr"></div>
        <div class="mid-name">
          <div class="border">
            <div class="name">
              <span class="c-title">{{responseDatas.range.title}}</span>
              <span class="e-title">{{responseDatas.range.title_en}}</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="service-ct">
        <div class="service-border" v-for="(value,key) in responseDatas.range.ranges" :key="key">
          <div class="service-ct-top">
            <img class="service-ct-top-no" :src=value.titleImageUrl alt="logo">
            <span class="service-c-name">{{value.mainTitle}}{{value.subTitle}}</span>
            <!-- <span class="s-c-name-bottom">{{value.subTitle}}</span> -->
          </div>
          <div class="service-e-name">{{value.title_en}}</div>
          <!-- <img style="width:130px;height:80px;" :src=value.imageUrl alt="service picture"> -->
        </div>
  
      </div>
  
    </div>
  
    <div class="order-process">
      <div class="r-title">
        <div class="hr"></div>
        <div class="mid-name">
          <div class="border">
            <div class="name">
              <span class="c-title">{{responseDatas.process.title}}</span>
              <span class="e-title">{{responseDatas.process.title_en}}</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="order">
        <div class="order-ct" v-for="(value,key) in responseDatas.process.processes" :key="key">
          <div>
            <div class="order-top">
              <span>{{key+1}}.{{value.title}}</span>
            </div>
            <div class="order-bottom"><span>{{value.content}}</span></div>
          </div>
          <!-- <span class="order-arrow">&#xe631;</span> -->
        </div>
      </div>
    </div>
  
  
    <div class="order-information">
      <div class="r-title">
        <div class="hr"></div>
        <div class="mid-name">
          <div class="border">
            <div class="name">
              <span class="c-title">{{responseDatas.note.title}}</span>
              <span class="e-title">{{responseDatas.note.title_en}}</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="in-ct">
        <div class="in-ct1" v-for="(value,key) in responseDatas.note.notes" :key="key">
          <div class="in-no">
            <span class="in-no1">{{key+1}}</span>
          </div>
          <span v-html="value"></span>
        </div>
      </div>
    </div>
  
    <div class="order-ways">
      <div class="r-title">
        <div class="hr"></div>
        <div class="mid-name">
          <div class="border">
            <div class="name">
              <span class="c-title">{{responseDatas.orderMode.title}}</span>
              <span class="e-title">{{responseDatas.orderMode.title_en}}</span>
            </div>
          </div>
        </div>
      </div>
  
      <div class="ways-ct">
        <div class="ways-top">
          <div class="ways-ver"></div>
          <span>{{responseDatas.orderMode.qrTitle}}</span>
          <div class="ways-ver"></div>
        </div>
        <div class="ways-bottom">
          <img class="ways-bottom-left" :src=responseDatas.orderMode.qrImageUrl alt="QR Code">
          <div class="ways-bottom-mid"></div>
          <div class="ways-bottom-right">
            <span>识别二维码关注</span>
            <span class="fingerprint">&#xe61b;</span>
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
        responseDatas: {
          note: {
            notes: [],
            title: '',
            title_en: ''
          },
          order: {
            title: '',
            title_en: '',
            orderWay: {},
            menu: {
              title: '',
              menus: []
            }
          },
          orderMode: {
            title: '',
            title_en: '',
            qrImageUrl: '',
            qrTitle: ''
          },
          process: {
            processes: [],
            title: '',
            title_en: ''
          },
          range: {
            title: '',
            title_en: '',
            ranges: []
          }
        }
      }
    },
    created() {
      var that = this;
      this.$ajax.get('/getTeaBreakService', {
  
        }).then(function(response) {
          // console.log(response)
          that.responseDatas = response.data.model;
          console.log(that.responseDatas);
        })
        .catch(function(response) {
          console.log(response);
        });
    }
  
  };
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';
    /* project id 721549 */
    src: url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot');
    src: url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.woff') format('woff'), url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.ttf') format('truetype'), url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.svg#iconfont') format('svg');
  }
  
  .service {
    margin: 0;
    padding: 0;

  }
  
  .name {
    text-align: center;
    /* background-color: blue; */
    width: 160px;
    color: #9dc135;
    /* position:absolute;
                              z-index: 1; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
  }
  
  .c-title {
    display: block;
    font-size: 20px;
    line-height: 20px;
    width: 120px;
    background-color: #fff;
  }
  
  .e-title {
    font-size: 10px;
  }
  
  .border {
    border: 2px solid #9dc135;
    width: 180px;
    height: 30px;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .mid-name {
    width: 180px;
    /* display: block; */
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
  }
  
  .hr {
    border: 0.5px dashed #9dc135;
    width: 300px;
    margin-bottom: -36px;
    margin-top: 30px;
  }
  
  .r-title {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: red; */
    width: 300px;
    /* margin-top: 30px;
                              margin-bottom: 30px; */
  }
  
  .reservation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .re-title2 {
    margin-top: 30px;
    color: #9dc135;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: iconfont;
  }
  
  .ct1,
  .ct-bottom {
    width: 300px;
    margin-bottom: 20px;
  }
  
  .way-ct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: 30px; */
    /* margin-bottom: 20px; */
    /* width: 300px; */
    /* justify-content: space-between; */
    /* background-color: aqua; */
    margin-bottom: -20px;
  }
  
  .ct-title-name {
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
  }
  
  .ct-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .menu-ct {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  
  .menu-top {
    color: #9dc135;
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .top-icon {
    margin-right: 10px;
  }
  
  .menu-bottom>li {
    margin-top: 5px;
  }
  
  .menu-bottom {
    list-style: none;
    /* background-color: aqua; */
    margin-left: -40px;
  }
  
  .menu-border-out {
    width: 99%;
    border: 2px solid #9dc135;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .menu-border-inside {
    margin: 5px;
    border: 2px dotted #9dc135;
  }
  
  .menu-head-name {
    background-color: #9dc135;
    height: 50px;
    border-radius: 1.5px;
    /* border: 1px solid #9dc135; */
  }
  
  .menu-head-name>span {
    margin: 20px;
    font-size: 20px;
    line-height: 50px;
    color: #fff;
  }
  
  .menu-head-triangle {
    border-top: solid 25px transparent;
    border-right: solid 25px transparent;
    border-bottom: solid 25px transparent;
    border-left: solid 25px #9dc135;
    margin-left: -1px;
  }
  
  .menu-head {
    display: flex;
    flex-direction: row;
    position: relative;
    top: -30px;
    left: 30px;
  }
  
  .service-scope {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .order-process{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
    width:100%;
  }
  
  .service-ct-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: yellow; */
    margin-bottom: 5px;
  }
  
  .service-ct-top-no {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    /* margin-left:5px; */
  }
  
  .service-c-name {
    /* display: flex;
                              flex-direction: column;
                              align-items: flex-end; */
    font-weight: bold;
    font-size: 18px;
    /* background-color: blue; */
    margin-left: 5px;
    color: #9dc135;
  }
  
  .service-e-name {
    font-size: 10px;
    /* background-color: red; */
    font-style: italic;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #9dc135;
    color: #fff;
    text-align: center;
    /* text-align: right; */
  }
  
  .service-border {
    width: 140px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* box-shadow: 0px 0px 10px 0px #e0e0e0; */
    margin-bottom: 10px;
  }
  
  .s-c-name-bottom {
    font-size: 10px;
  }
  
  .service-ct-top-left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .service-ct {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .order-ct {
    width: 150px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    /* background-color: aqua; */
  }
  
  .order-top {
    width: 120px;
    height: 40px;
    text-align: center;
    background: #9dc135;
    line-height: 40px;
    border-radius: 5px 5px 0 0;
    position: relative;
    color: #fff;
  }
  
  .order-bottom {
    border-left: 2px dotted #9dc135;
    border-right: 2px dotted #9dc135;
    border-bottom: 2px dotted #9dc135;
    width: 96px;
    height: 90px;
    padding: 10px;
  }
  
  .order-arrow {
    color: #9dc135;
    margin-left: 5px;
    font-size: 20px;
  }
  
  .order {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .in-no {
    width: 25px;
    height: 25px;
    background-color: #9dc135;
    border-radius: 12.5px;
    margin-right: 10px;
  }
  
  .in-no1 {
    width: 25px;
    height: 25px;
    line-height: 25px;
    display: block;
    color: #fff;
    text-align: center;
  }
  
  .in-ct1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .in-ct {
    margin-top: 40px;
    width: 90%;
    /* background-color: aqua; */
  }
  
  .order-information {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .ways-ver {
    width: 8px;
    height: 23px;
    background-color: #9dc135;
  }
  
  .ways-top {
    display: flex;
    flex-direction: row;
    margin-left: 5%;
  }
  
  .ways-top>span {
    margin: 0 10px;
    font-size: 18px;
  }
  
  .ways-bottom {
    border: 2px solid #9dc135;
    width: 90%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-left: 5%;
    /* background-color: aqua; */
  }
  
  .ways-bottom-left {
    width: 100px;
    height: 100px;
  }
  
  .ways-bottom-mid {
    border: 1px solid #9dc135;
    height: 100px;
    margin: 0 20px;
  }
  
  .ways-bottom-right {
    color: #9dc135;
    display: flex;
    flex-direction: column;
    /* font-size: 18px; */
    text-align: center;
  }
  
  .fingerprint {
    font-size: 100px;
  }
  
  .order-ways {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .ways-ct {
    margin-top: 40px;
    margin-bottom: 100px;
    width: 100%;
    /* background-color: blue; */
  }
</style>
