<template>
    <div class="container">
        <div class="overlay" ref="overlay">
            <p class="screen" ref="screen">my profile</p>
            <div class="intro">
                <button class="myBtn" ref="mybtn" @click="fadeOut">go</button>
            </div>
        </div>
        <div class="overlay-2" ref="overlay2"></div>

        <div class="content" ref="content"> 
            <h1>hi</h1>
            <h2>i'm wei</h2>
            <div class='icon-scroll'></div>
        </div>
    </div>
</template>

<script>
import { TimelineLite, Power2, Expo } from 'gsap'
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)
export default {
    name: "main",
    data(){
        return{
        }
    },
    methods:{
        fadeOut(){
            const { mybtn, screen, overlay, overlay2, content} = this.$refs
            const animate = new TimelineLite()
            animate.to(mybtn, 1, {
                y: -100,
                opacity: 0
            });

            animate.to(screen, 0.5, {
                y: -400,
                opacity: 0,
                ease: Power2.easeInOut,
                // delay: 1
            });

            animate.from(overlay, 0.5, {
                ease: Power2.easeInOut
            });

            animate.to(overlay, 1, {
                top: "-110%",
                ease: Expo.easeInOut
                // delay: 1,
            });

            animate.to(overlay2, 0.5, {
                top: "-110%",
                ease: Expo.easeInOut
                // delay: 1,
            });

            animate.from(content, 0.5, {
                // delay: 2,
                opacity: 0,
                ease: Power2.easeInOut
            });

            animate.to(content, 0.5, {
                opacity: 1,
                y: 0,
                // delay: 2.1,
                ease: Power2.easeInOut
            });

        }
    },
}
</script>

<style scoped>
button {
    display: block;
    padding: 24px 48px;
    font-family: Poppins;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 6px;
    color: #fff;
    border: 2px solid #fff;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    background: none;
    z-index: 1;
    cursor: pointer;
    transition: 0.8s ease-out;
}
.overlay {
    z-index: 100000;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #101010;
}
.overlay p {
    font-size: 300px;
    font-weight: 800;
}
.overlay-2 {
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #faf6f0;
}
.screen {
    color: #323232;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.myBtn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.myBtn:hover {
    color: #101010;
}

.myBtn:before {
    content: "";
    position: absolute;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.8s ease-out;
}

.myBtn:hover:before {
    top: 0;
}
.content {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/landingpage.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.content h1 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.content p {
    font-weight: 400;
}
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  margin-top: 150px;
  top: 50%;
  box-shadow: inset 0 0 0 1px black;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: black;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-name: scroll;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>