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
  },
  methods: {
    getArticles() {
      fetch('http://localhost:3030/articles/')
      .then(response => response.json())
      .then(response => {
        this.articles = response.articles
        console.log("getArticles",response.articles)
      })
    },
  },
  mounted() {
    console.log("app.vue mounted")
    this.getArticles
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
  background-image: url('https://i.redd.it/qmfjuz883g7z.png');
  background-size: cover;
	background-color: rgba(0,5,10,0.75);
	height: 100vh;
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
