<template>
    <div class="area5">
        <div class="title-big-night">
            <span v-for="(item,index) in portfolio" :key="index">{{ item }}</span>
        </div>
        <div class="main" v-for="(item,index) in items" :key=" 'main' +index" v-show="index == n">
            <div class="item">
                <img :src="item.img" alt="">
                <h3>{{item.title}}</h3>
                <p>{{item.text}}</p>
                <a :href="item.link">{{item.id}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'portfolio',
    data(){
        return{
            portfolio:["p","o","r","t","f","o","l","i","o"],
            items: [
                {img : require('../assets/porfolio-1.png'), 
                title : 'Coffee shop -- 咖啡品牌網站',
                text : "使用 html / css / javascript / jquery",
                link : 'https://reurl.cc/zWrxOa',
                id : "more"},
                {img : require('../assets/porfolio-2.png'), 
                title : '小春堂 -- 日式和菓子電商網站',
                text : "使用 html / css / javascript / jquery / vue.js / php / mysql / ajax ",
                link : 'https://tibamef2e.com/tfd102/project/g3/page/homepage.html',
                id : "more"},
                {img : require('../assets/sign-up.jpg'), 
                title : 'WEI profile -- 個人介紹網頁',
                text : "使用 vue.js / vue.cli / gsap",
                link : '#',
                id : "more"},
            ],
            n: 1
        }
    },
    methods: {
        carousel(){
            this.n++;
            if(this.n == 3){
                this.n = 0;
            }  
        },
        timer(){
            setInterval(this.carousel,3000)
        }
        
    },
    mounted() {
        this.timer();

    }
         
}
</script>

<style scoped>
.area5{
    width: 100%;
    height: 100%;
    background-image: url('../assets/portfoliobg.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
}
img{
    width: 70%;
    height: 200px;
    margin-bottom: 30px;
}
.area5{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    display: flex;
    margin-top: 150px;
}
.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}
.item p{
    margin-top: 10px;
}
a{
    width: 150px;
    height: 40px;
    border: solid 2px white;
    color: white;
    margin-top: 60px;
    letter-spacing: 2px;
    line-height: 2.2;
    text-decoration: none;
    transition: all .3s ease-in-out;
    font-weight: bold;
}
a:hover{
    background: #472425;
    color: white;
    letter-spacing: 5px;
    border: #472425;

}
</style>