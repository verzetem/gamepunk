<template>
  <div id="app">
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
	background-color: rgba(0,5,10,0.75);
	height: 100vh
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
