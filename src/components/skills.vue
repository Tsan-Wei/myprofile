<template>
    <div class="area3">
        <!-- <h1>skills</h1> -->
        <div class="title-big">
            <span v-for="(item,index) in skill" :key="index">{{ item }}</span>
        </div>
        <div class="left">
            <a href="" v-for=" left in links" :key="left" @click.prevent="show">{{left.text}}</a>
            <div class="text" ref="text">
                <p v-for="(text,index) in skillsFront" :key="index" v-show="f1">{{text}}</p>
                <p v-for="(text,index) in skillsBack" :key="index" v-show="f2">{{text}}</p>
                <p v-for="(text,index) in others" :key="index" v-show="f3">{{text}}</p>
            </div>
        </div>
            <div class="right" ref="image">
                <img :src="img" :class="showImage">
            </div>
    </div>  
</template>

<script>

import { TimelineLite,Power2 } from 'gsap'

export default {
    name: 'about',
    data(){
        return{
            skill:["s","k","i","l","l","s"],
            links:[
                { text : "front-end", index : 0},
                { text : "back-end", index : 1},
                { text : "others", index : 2},

            ],
            img: require("../assets/skill-1.png"),
            showImage: "img",
            skillsFront: ["html","css/scss","javascript/jquery","vue.js/cli","gsap","ajax"],
            skillsBack: ["php","mysql"],
            others: ["phptoshop","illustrator","premiere pro","adobe xd","git"],
            t: true,
            f1: false,
            f2: false,
            f3: false

        }
    },
    methods: {
        show(e){
            const el = e.currentTarget;
            const x = el.innerHTML;
            switch (x){
                case "front-end":
                    this.f1 = this.t;
                    this.f2 = false;
                    this.f3 = false;
                    this.img = require("../assets/skill-1.png")
                    break;
                case "back-end":
                    this.f2 = this.t;
                    this.f1 = false;
                    this.f3 = false;
                    this.img = require("../assets/skill-2.png")
                    break;
                case "others":
                    this.f3 = this.t;
                    this.f1 = false;
                    this.f2 = false;
                    this.img = require("../assets/skill-3.png")
                    break;
                default:
                    this.f1 = false;
                    this.f2 = false;
                    this.f3 = false;
                
            }
            this.animated()
        },
        animated(){
            const { text, image} = this.$refs;
            const animate = new TimelineLite();
            
            
            animate.from(text,0.5,{
                x: 40,
                opacity: 1,
                ease: Power2.easeInOut,
            });

            animate.from(image,0.5,{
                y: -100,
                opacity: 1,
                ease: Power2.easeInOut,
            });
        }
    }
}
</script>

<style scoped>
.area3{
    width: 100%;
    height: 100%;
    background: linear-gradient(0.5turn, #d7e2ec, #c1ebec, #002a3f);
}
.left{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 80px;
    z-index: 10;
}
.text{
    text-align: left;
    color: #ffffff;
    font-weight: bold;
    text-indent: 1em;
}
.text p{
    font-size: 22px;
    padding: 7px;
    letter-spacing: 2px;
}
.text p::after{
    content: "\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0\00A0";
    width: 100px;
    height: 1px;
    background: white;
    border-radius: 50px;
    margin-left: 50px;
    
}

.right{
    position: absolute;
    bottom: 10%;
    right: 2%;
    width: 700px;
    height: 400px;
    overflow: hidden;
    z-index: 10;
}
.right .img{
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    /* opacity: 0; */
}
a{
    width: 100%;
    border-top: solid 1px #4d292b;
    border-bottom: solid 1px #4d292b;
    color: #472425;
    letter-spacing: 4px;
    text-decoration: none;
    padding: 20px 20px 20px;
    transition: all .3s ease-in-out;
    font-size: 3em;
    position: relative;
    font-weight: bold;
    text-align: left;
}
a::before{
    content: "";
    width: 15px;
    height: 5px;
    border-top: 1px solid #4d292b;
    position: absolute;
    left: 0;
    top: 50%;
    transform: scaleX(1);
    transition: all .3s ease-in-out;
}
a:hover{
    background: #472425;
    color: white;
    letter-spacing: 8px;

}
a:hover::before{
    width: 500px;
    border-top: 2px solid white;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>