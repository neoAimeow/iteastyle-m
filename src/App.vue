<template>
    <div id="app">
        <div class="home-head">
            <div class="home-head-bgimg">
                <img class="home-head-bgimg-inner" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
            </div>
            <div class="home-head-menu">
                <div class="home-head-icon">
                    <div :style="data.style" v-for="(data,key) in menu" :key="key" :label="key">
                        <router-link :index="data.title" :to="data.path" class="home-head-list">
                            <span v-html="data.icon"></span>
                            <span style="font-size: 13px;">{{data.title}}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <div class="home-foot">
            <div class="home-foot-left">
                <div class="home-foot-left-logo">
                    <img style="height: 40px;width: 40px;" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png"
                         alt="">
                </div>
                <div class="home-foot-left-order">
                    <span>全国订购电话</span>
                    <span>0571 8373 1743</span>
                </div>
            </div>
            <div class="home-foot-right">
                <span>杭式下午茶，有初恋的温度</span>
                <span>使用条款 | 法律声明</span>
            </div>
        </div>
    </div>
</template>

<script>
    import menus from './common/menus'

    export default {
        name: 'APP',
        data() {
            return {
                menu: []
            }
        },
        created() {
            this.menu = menus
            this._isMobile()
        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                if (!flag) {
                    window.location.href = "https://www.iteastyle.cn"
                }
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: 'iconfont';  /* project id 721549 */
        src: url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot');
        src: url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.woff') format('woff'),
        url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_721549_gv2tbnt6yt8.svg#iconfont') format('svg');
    }

    span {
        font-family: iconfont;
    }

    html,
    body,
    #app {
        margin: 0;
        padding: 0;
    }

    .home-head {
        margin-bottom: 20px;
    }

    .home-head-bgimg {
        width: 100%;
        height: 100px;
        background: url("http://pa74otoy6.bkt.clouddn.com/pd-title-background.png") repeat-x;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: auto 100%;
    }

    .home-head-bgimg-inner {
        height: 50px;
        width: 50px;
    }

    .home-head-menu {
        width: 100%;
        margin-top: 20px;
    }

    .home-head-icon a {
        color: #797979;
    }

    a.router-link-exact-active, li.router-link-exact-active a {
        border-bottom: 1px solid #9dc135;
        color: #9dc135;
    }

    .home-head-list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .home-head-icon {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .home-foot {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
        height: 90px;
        background-color: #f2f2f2;
        border: none;
        border-top: 2px solid #9dc135;
        color: #797979;
    }

    .home-foot-left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .home-foot-left-order {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 13px;
        margin-left: 10px;
    }

    .home-foot-left-logo {
        margin-left: 5px;
    }

    .home-foot-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        font-size: 13px;
    }
</style>
