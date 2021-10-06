<template>
    <div class="area4">
        <div class="title-big-night">
            <span v-for="item in experience" :key="item">{{ item }}</span>
        </div>
        <div class="left">
            <div class="item-left" v-for="(item,index) in left" :key="index">
                <h1>{{item.id}}</h1>
                <img :src="item.img" alt="">
            </div>
        </div>
        <div class="right">
            <div class="item-right" v-for="(item,index) in right" :key="index">
                <p>{{item.id}}</p>
                <li>{{item.text}}</li>
                <li>{{item.text2}}</li>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'about',
    data(){
        return{
            experience:["e","x","p","e","r","i","e","n","c","e"],
            left:[
                { id : "2019.06 ~ 2020.06", img : require("../assets/experience-1.png") },
                { id : "2016.06 ~ 2020.06", img : require("../assets/experience-2.png") },
            ],
            right: [
                { id : "旭銳文化傳媒股份有限公司--影片審核管理專員 / 特效製作", text : "負責審核平台所有影片有無違規並在後台資料庫建置數據", text2 : "協助主管製作影片的特效、動畫等" },
                { id : "世新大學--傳播管理學系 學士", text : "王牌數位製作人--總召", text2 : "系學會--活動長" },
            ]
        }
    },
}
</script>

<style scoped>
.area4{
    width: 100%;
    height: 100%;
    background-image: url('../assets/experiencebg.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
}
.left,.right{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
}
img{
    width: 100px;
    height: 100px;
}
.item-left{
    margin-top: 40px;
    transform: translateY(50px);
}
.item-left h1{
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: normal;
    margin-bottom: 10px;
    background-color: #b88b8caf;
    color: white;
}
.right{
    transform: translateX(-70px);
}
.item-right{
    margin-top: 90px;
    text-align: left;
    line-height: 2;
}

.item-right p{
    font-size: 1.2rem;
    background-color: #804345;
    color: white;
    padding-left: 20px;
    /* font-weight: bold; */
}
.item-right li{
   color: white;
   letter-spacing: 2px; 
}
</style>