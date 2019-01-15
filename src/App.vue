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
}
body {
  background-image: url('https://s3.envato.com/files/156884535/Game_Background_Emerald_Lake_4270x2135.jpg');
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
  background: rgba(0, 0, 0, 0.1);    
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
