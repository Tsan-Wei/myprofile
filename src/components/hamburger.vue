<template>
    <div id="container">
        <i :class="hamIcon" @click="open" :style="{color: hamColor}"></i>
        <div :class="hamburger">
            <div class="wrapper">
                <div :class="imgShow" :style="{width: imgWidth, backgroundImage: 'url(' + image[getRandom(5)] + ')'}"></div>
            </div>
            <ul class="nav">
                <li class="nav-item" v-for="(item,index) in items" :key="index">
                    <a :href="'#' + item.links" >
                        <span :data="item.id" @mouseover="imgOpen" @mouseleave="imgClose">{{item.id}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "hamburger",
    data(){
        return{
            items: [
                { id : "about",links : "area1", index : "0"},
                { id : "skills",links : "area2", index : "1"},
                { id : "experience",links : "area3", index : "2"},
                { id : "porfolio",links : "area4", index : "3"},
                { id : "contact",links : "area5", index : "4"}
            ],
            hamIcon: "fas fa-bars",
            hamburger: "hamburger-close",
            hamColor: "#804345",
            imgShow : "preview",
            imgWidth: "0",
            n: "",
            image: [require("../assets/about.jpg"),require("../assets/skills.jpg"),require("../assets/experience.jpg"),require("../assets/portfolio.jpg"),require("../assets/contact.jpg")]
        }
    },
    methods:{
        open(){
            if(this.hamburger == "hamburger-open"){
                this.hamIcon = "fas fa-bars",
                this.hamburger = "hamburger-close",
                this.hamColor = "#804345"
            }else{
                this.hamIcon = "fas fa-times"
                this.hamburger = "hamburger-open",
                this.hamColor = "white"
            }
        },
        imgOpen(){
            this.imgWidth = "500px"
        },
        imgClose(){
            this.imgWidth = "0px"
        },
        getRandom(x){
            this.n = Math.floor(Math.random() * x)
            return this.n
        }
    },
}
</script>

<style scoped>
.hamburger-open{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #000;
    opacity: 1;
    transition: all .7s cubic-bezier(0.165, 0.84, 0.44, 1);

}
.hamburger-close{
    width: 0%;
    height: 100%;
    position: fixed;
    top: 0%;
    left: -100%;
    z-index: 1000;
    background: #000;
    opacity: .8;
    transition: all .7s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
i{
    font-size: 40px;
    color: rgb(14, 0, 0);
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 50px;
    z-index: 10000;
}
.preview{
    /* border: solid 1px red; */
    position: absolute;
    width: 0;
    height: 400px;
    top: 25%;
    left: 50%;
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
}
.nav{
    margin-top: 40px;
    margin-left: 150px;
    margin-bottom: 200px;
    list-style: none;
    position: absolute;
    text-align: left;
}
.nav-item{
    margin: 50px;
    display: block;
}
a{
    text-decoration: none;
    letter-spacing: 10px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(255,255,255,0.3);
}
span{
    position: relative;
    display: block;
    
}
span::before{
    width: 0;
    overflow: hidden;
    color: white;
    position: absolute;
    content: attr(data);
    transition: all .5s cubic-bezier(0.84, 0 , 0.08 , 0.99);
}

a:hover span::before{
    width: 100%;  
}

</style>