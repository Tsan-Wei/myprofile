<template>
  <div class="area2">
        <div class="title-big">
            <span v-for="item in about" :key="item">{{ item }}</span>
        </div>
        <div class="left">
            <img src="../assets/me.jpg" alt="">
            <div class="icons">
                <a href="https://github.com/a88376219">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                   <i class="fas fa-envelope-open-text"></i>
                </a>
                <a href="https://github.com/a88376219">
                    <i class="fas fa-phone-alt"></i>
                </a>
            </div>
            <a href="https://drive.google.com/file/d/16kekzZpNrj7b8L65OCuv9LVSL8bhNQkl/view?usp=sharing" class="cv">download my cv</a>
        </div>
        <div class="right">
            <p>我是程璨偉，畢業於世新大學傳播管理學系，傳播媒體科系出身的我，樂於鑽研各種新奇事物，喜歡觀察時事，對周遭發生的事物具有一定的敏感度，在學期間參加過許多系上的活動並加入系學會，在各活動中擔任許多職位如總召、活動長...等．對事情能夠迅速抓到重點並且快速執行，喜歡團隊合作，遇到難題時能讓自己保持不同角度的思考方式，重視效率．通常在團隊裡常擔任執行者的角色</p>
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
    font-size: 18px;
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
.area2 .left .icons a{
    width: 50px;
    height: 50px;
    color: black;
    border-radius: 50%;
    line-height: 3;
    box-shadow: 1px 1px 5px  black;
    cursor: pointer;

}
.area2 .left .icons a:hover{
    background: #472425;
    color: white;
    transform: scale(1.2);
}
.cv{
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
.cv:hover{
    background: #472425;
    color: white;
    letter-spacing: 5px;

}
</style>