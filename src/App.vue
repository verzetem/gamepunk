<template>
  <div id="app" class="bg-tint">
  	<Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'index',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body, html, h1, h2, h3, h4, h5, h6, p {
  font-family: 'Montserrat', sans-serif !important;
  color: #FFF !important;
  text-align: center;
}
body {
  background-image: url('https://i.stack.imgur.com/WUUJj.png');
  background-size: cover;
	background-color: rgba(0,5,10,0.75);
	height: 100vh;
}
.bg-tint {
  z-index: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.2);    
}
body, html {
	overflow: hidden !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
