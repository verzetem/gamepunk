<template>   
  <div>
		<nav class="uk-navbar-container uk-margin" uk-navbar>
			<div class="uk-navbar-left">

				<router-link to="/"  class="uk-navbar-item uk-logo"><h1 class="logo1">GAME<span class="logo2"><i class="fas fa-gamepad"></i>PUNK</span></h1></router-link>

				<ul class="uk-navbar-nav">
					<li>
						<router-link to="/" v-bind:class="{ 'nav-link-active': isHome, 'nav-link': !isHome }">
							<span @click="homeStyle">Home</span>
						</router-link>
					</li>
					<li>
						<router-link to="/favorites" v-bind:class="{ 'nav-link-active': isFav, 'nav-link': !isFav }">
							<span @click="favStyle">Favorites </span>
							<!-- <i class="fas fa-heart red-heart badge1" v-bind:data-badge="favNumber"></i> -->
						</router-link>
					</li>
					<li>
						<router-link to="/about" v-bind:class="{ 'nav-link-active': isAbout, 'nav-link': !isAbout }">
							<span @click="aboutStyle">About</span>
						</router-link>
					</li>
				</ul>

				<div class="uk-navbar-item fl-r">
					<form action="javascript:void(0)">
						<input class="uk-input uk-form-width-small" type="text" placeholder="Filter">
						<button class="uk-button uk-button-secondary">Submit</button>
					</form>
				</div>
					
			</div>
		</nav>

  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: 'Navbar',
  data() {
  	return {
  		articles: [],
  		user: [],
  		loggedIn: false,
  		isHome: true,
  		isFav: false,
  		isAbout: false,
  		isContact: false
  	}
  },
  created() {
		eventBus.$on('testingMethod', (articles) => {
			this.articles = articles
		})
  },
  methods: {
  	randoFunc() {
  		this.loggedIn = !this.loggedIn
  	},
  	homeStyle() {
  		this.isHome = true
			this.isFav = false
			this.isAbout = false
			this.isContact = false
  	},
  	favStyle() {
  		this.isFav = true;
  		this.isHome = false;
  		this.isAbout = false;
  		this.isContact = false;
  	},
  	aboutStyle() {
  		this.isAbout = true
  		this.isHome = false
  		this.isFav = false
  		this.isContact = false
  	},
		fetchUser() {
			fetch('http://localhost:3030/users/')
      .then(response => response.json())
      .then(response => {
      	this.user = response.users[0]
      })
		},
		navsStylePersist() {
			if (location.href === "http://localhost:8080/#/") {
			this.isHome = true
			this.isFav = false
			this.isAbout = false
			this.isContact = false
		} else if (location.href === "http://localhost:8080/#/favorites") {
			this.isFav = true
  		this.isHome = false
  		this.isAbout = false
  		this.isContact = false
		} else if (location.href === "http://localhost:8080/#/about") {
			this.isAbout = true
  		this.isHome = false
  		this.isFav = false
  		this.isContact = false
  	}
  },
},
	mounted () {
		// this.fetchUser()
		this.navsStylePersist()
	},
}

</script>

<style lang="scss">
.badge1 {
   position:relative;
}
.badge1[data-badge]:after {
   content:attr(data-badge);
   position:absolute;
   top:-10px;
   right:-12px;
   font-family: 'Montserrat', sans-serif !important;
   font-size:.6em;
   background:#00ACFA;
   color:white;
   width:18px;height:18px;
   text-align:center;
   line-height:18px;
   border-radius:15%;
   box-shadow:0 0 1px #333;
}
.red-heart {
	color: red;
}
.dropdown {
	position: relative;
	transition: all 0.3s;
}
.drop-nav {
	visibility: hidden;
	position: absolute;
	transition: all 0.3s;
	text-align: center;
	width: 100%;
	right: 6%;
	ul, li, a {
		list-style: none;
		color: rgb(255,255,255) !important;
	}
}
.dropdown:hover > .drop-nav {
	visibility: visible;
	display: block;
}
.drop-link {
	color: rgb(255,255,255);
	font-size: 1.2em;
	transition: all 0.3s;
	border-bottom: 4px solid rgba(0,206,182,0);
	&:hover {
		border-bottom: 4px solid rgb(0,206,182);
		text-decoration: none;
	}
}
.uk-navbar-container {
	background-color: rgba(0,5,2,0.75) !important;
}
.uk-button-secondary {
	background-color: rgb(0,206,182) !important;
	transition: all 0.35s !important;
	&:hover {
		background-color: rgb(0,140,123) !important;
	}
}
.user-name {
	// margin-left: 20%;
	color: #fff;
	font-size: 1.2em;
	font-weight: bold;
	width: 100%;
}
.icon-name {
	color: rgb(0,206,182);
	margin-right: 5%;
}
.avatar img {
	float: right;
	border-radius: 10px;
	width: 100px;
	height: auto;
	margin-left: 1em;
}
.nav-link {
	font-size: 1.5em !important;
	border-bottom: 5px solid rgba(255,255,255,0);
	transition: all 0.4s !important;
	margin: 0;
	padding: 0;
	color: #fff;
	&:hover {
		background-color: rgba(100,100,100,0.2) !important;
		border-bottom: 5px solid rgb(0,206,182);
		color: rgb(255,255,255) !important;
		text-decoration: none;
	}
	&:focus {
		background-color: rgba(100,100,100,0.2) !important;
		border-bottom: 5px solid rgb(0,140,123);
		color: rgb(255,255,255) !important;
	}
}
.nav-link-active {
	font-size: 1.5em !important;
	background-color: rgba(100,100,100,0.2) !important;
	border-bottom: 5px solid rgb(0,140,123);
	color: rgb(255,255,255) !important;
	margin: 0;
	padding: 0;
}
.log-in {
	margin-right: 1vw;
	font-size: 1.2em;
	color: rgb(255,255,255);
	transition: all 0.3s;
	&:hover {
		color: rgb(0,206,182);
		text-decoration: none;
	}
}
.fl-r {
	// float: right !important;
	margin-left: auto !important;
}
.logo1 {
	margin: 0;
	color: #FFF;
}
.logo2 {
	margin: 0;
	font-weight: bold;
	color: rgb(0,206,182);
}
</style>
