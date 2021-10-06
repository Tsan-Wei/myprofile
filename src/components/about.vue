<template>
  <div class="area2">
        <div class="title-big">
            <span v-for="item in about" :key="item">{{ item }}</span>
        </div>
        <div class="left">
            <img src="../assets/me.jpg" alt="">
            <div class="icons">
                <i class="fab fa-github">
                    <a href=""></a>
                </i>
                <i class="fas fa-envelope-open-text"></i>
                <i class="fas fa-phone-alt"></i>
            </div>
            <a href="https://drive.google.com/file/d/16kekzZpNrj7b8L65OCuv9LVSL8bhNQkl/view?usp=sharing">download my cv</a>
        </div>
        <div class="right">
            <p>傳播媒體科系出身的我，喜歡觀察時事，對周遭發生的事物具有一定的敏感度，能夠迅速抓到重點並快速執行，喜歡團隊合作，遇到難題時能讓自己保持不同角度的思考方式，重視效率在專案中常擔任執行者的角色</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data(){
        return{
            about:["a","b","o","u","t","m","e"],
        }
    },
}
</script>

<style scoped>
.area2{
    width: 100%;
    height: 100%;
    background-image: url('../assets/aboutbg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 100%;
}
.area2 .left{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 60px;
}
.right{
    width: 700px;
    position: absolute;
    bottom: 20%;
    right: 5%;
    font-size: 22px;
    line-height: 3;
    text-align: left;
    background: rgba(204, 204, 204, 0.288);
    box-shadow: 5px 10px 2px #ccc;
    padding: 20px 40px;
    letter-spacing: 3px;
}
.left img{
    width: 50%;
    height: 100%;
    margin: 0 auto;
    margin-top: 40px;
}
.area2 .icons{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 50px;
}
.area2 .left .icons i{
    width: 50px;
    height: 50px;
    color: black;
    border-radius: 50%;
    line-height: 3;
    box-shadow: 1px 1px 5px  black;
    cursor: pointer;

}
.area2 .left .icons i:hover{
    background: #472425;
    color: white;
    transform: scale(1.2);
}
a{
    width: 80%;
    height: 40px;
    border: solid 2px #4d292b;
    color: #472425;
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

}
</style>