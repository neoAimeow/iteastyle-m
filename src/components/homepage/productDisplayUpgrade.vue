<template>
    <div class="pd-container">
        <div class="pd-title">
            <hr style="width:13.23vw;">
            <div class="pd-title-name">
                <span>茶饮茶点</span>
                <span>TEA DESSERT</span>
            </div>
            <hr style="width:13.23vw;">
        </div>
        <div class="pd-contant">
            <img style="width:11.2vw;height: 10vh;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg2.png" alt="">
            <img style="width:11.2vw;height: 10vh;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg2.png" alt="">
            <img style="width:11.2vw;height: 10vh;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg2.png" alt="">
        </div>
    </div>
</template>


<style lang="scss">
html{
    margin: 0;
    padding: 0;
}
.pd-container{
    height: 81.28vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pd-title{
    width: 32.55vw;
    background: red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.pd-title-name{
    width: 7.19vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pd-contant{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50.9vw;
    height: 10vh;
    background: blue;
}
// .pd-head{
//     width: 100%;
//     background: red;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }
// .pd-head-bgimg{
//     width: 100vw;
//     background: green;
//     height: 7.7vh;
//     position: relative;
// }
// .pd-head-logo{
//     position: absolute;
//     z-index: 1;
//     background: blue;
//     width: 5.36vw;
//     height: 3.45vh;
// }
</style>
