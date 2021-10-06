<template>
  <div id="app">

    <hamburger></hamburger>

    <section class="area">
      <main-area></main-area>
    </section>

    <section class="area" id="area1">
      <about></about>
    </section>

    <section class="area" id="area2">
      <skills></skills>
    </section>

    <section class="area" id="area3">
      <experience></experience>
    </section>

    <section class="area" id="area4">
      <portfolio></portfolio>
    </section>

  </div>
</template>

<script>

import mainArea from './components/landingpage.vue';
import about from './components/about.vue';
import skills from './components/skills.vue';
import experience from './components/experience.vue';
import portfolio from './components/portfolio.vue';
import hamburger from './components/hamburger.vue';

export default{
  name:'App',
  components: {
    hamburger,
    mainArea,
    about,
    skills,
    experience,
    portfolio
  },

}
</script>

<style>
:root{
  --bg: #faf6f0;
  --main-color: #472425;
  --second-color: #121212;
  --border: #4d292b;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
  transition: all .3s ease-out;
  text-transform: uppercase;
}
::-webkit-scrollbar{
  width: 0;
}
body{
  background: var(--bg);  
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-align: center;
}
.title-big{
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 150px;
    letter-spacing: 10px;
    font-weight: bold;
    color: var(--main-color);
    text-align: center;
    text-shadow: 8px 10px 2px #b88b8c;
    z-index: 0;
}
.title-big-night{
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 150px;
    letter-spacing: 10px;
    font-weight: bold;
    color: #b88b8c;
    text-align: center;
    text-shadow: 8px 10px 2px var(--main-color);
    z-index: 0;
}
.area{
    width: 100vw;
    height: 100vh;
    position: relative;
}
</style>
