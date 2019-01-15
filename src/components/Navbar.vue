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
							<span @click="favStyle">Favorites</span>
						</router-link>
					</li>
					<li>
						<router-link to="/about" v-bind:class="{ 'nav-link-active': isAbout, 'nav-link': !isAbout }">
							<span @click="aboutStyle">About</span>
						</router-link>
					</li>
					<li>
						<router-link to="/contact" v-bind:class="{ 'nav-link-active': isContact, 'nav-link': !isContact }">
							<span @click="contactStyle">Contact</span>
						</router-link>
					</li>
				</ul>

				<div class="uk-navbar-item">
					<form action="javascript:void(0)">
						<input class="uk-input uk-form-width-small" type="text" placeholder="Filter">
						<button class="uk-button uk-button-danger">Submit</button>
					</form>
				</div>

				<div v-if="loggedIn" class="uk-navbar-item fl-r">
					<div class="user-name dropdown">{{ user.username }} <span class="icon-name"><i class="fas fa-chevron-down"></i></span>
							<ul class="drop-nav">
								<li>
									<router-link to="" class="drop-link">Profile</router-link>
								</li>
								<li>
									<router-link to="" class="drop-link"><span @click="randoFunc">Logout </span><i class="fas fa-sign-out-alt"></i></router-link>
								</li>
							</ul>
					</div>
					<div class="avatar">
						<img src="http://avatarbox.net/avatars/img9/pokemon_face_avatar_picture_46051.jpg" alt=""/>
					</div>
				</div>

				<div v-else class=" fl-r">
					<div class="user-name">
						<router-link to="" class="log-in">
							<span @click="randoFunc">LOG IN </span><i class="fas fa-sign-in-alt"></i>
						</router-link>
					</div>
					<span class="icon-name"></span>
				</div>
					
			</div>
		</nav>

  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
  	return {
  		user: [],
  		loggedIn: false,
  		isHome: true,
  		isFav: false,
  		isAbout: false,
  		isContact: false
  	}
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
  	contactStyle() {
  		this.isContact = true
  		this.isHome = false
  		this.isAbout = false
  		this.isFav = false
  	},
		fetchUser() {
			fetch('http://localhost:3030/users/')
      .then(response => response.json())
      .then(response => {
      	this.user = response.users[0]
      })
		}
  },
  mounted () {
		this.fetchUser()
    }
  }

</script>

<style lang="scss">
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
	background-color: rgba(0,5,2,0.4) !important;
}
.uk-button-danger {
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
