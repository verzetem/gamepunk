<template>   
  <div>
		<nav class="uk-navbar-container uk-margin" uk-navbar>
			<div class="uk-navbar-left">

				<router-link to="/"  class="uk-navbar-item uk-logo"><h1 class="logo1">GAME<span class="logo2">PUNK</span></h1></router-link>

				<ul class="uk-navbar-nav">
					<li>
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li>
						<router-link to="/favorites" class="nav-link">Favorites</router-link>
					</li>
					<li>
						<router-link to="/about" class="nav-link">About</router-link>
					</li>
					<li>
						<router-link to="/contact" class="nav-link">Contact</router-link>
					</li>
				</ul>

				<div class="uk-navbar-item">
					<form action="javascript:void(0)">
						<input class="uk-input uk-form-width-small" type="text" placeholder="Filter">
						<button @click="randoFunc()" class="uk-button uk-button-danger">Submit</button>
					</form>
				</div>
				<div v-if="loggedIn" class="uk-navbar-item fl-r">
					<span class="user-name">Name</span><span class="icon-name"><i class="fas fa-chevron-down"></i></span><div class="avatar" v-tooltip="'Edit Profile'"></div>
				</div>
				<div v-else class="uk-navbar-item fl-r">
					<span class="user-name">Login</span><span class="icon-name"></span>
				</div>

			</div>
		</nav>

  </div>
</template>

<script>
import VTooltip from 'v-tooltip'

export default {
  name: 'Navbar',
  data() {

  	return {
  		user: [],
  		loggedIn: false
  	}

  },
  methods: {

  	randoFunc() {
  		this.loggedIn = !this.loggedIn;
  	}

  },
  mounted () {
    fetch('http://localhost:3030/users')
      .then(response => response.json())
      .then(response => {
      	this.user = response
      	console.log(this.user)
      })
  }
}


</script>

<style lang="scss">
	.uk-navbar-container {
		background-color: rgba(0,5,2,0.4) !important;
	}
	.uk-button-danger {
		background-color: rgb(0, 206, 182) !important;
		transition: all 0.35s !important;
		&:hover {
			background-color: rgb(0, 140, 123) !important;
		}
	}
	.tooltip {
		background-color: rgba(0,0,0,0.3);
		padding: 0.3%;
		margin-top: 0.3%;
		margin-right: 0.5%;
	}
	.user-name {
		color: #fff;
		margin-right: 1%;
		font-size: 2em;
		font-weight: bold;
	}
	.icon-name {
		color: rgb(0, 140, 123);
	}
	.avatar {
		float: right;
		border: solid 1px rgb(0, 140, 123);
		border-radius: 10px;
		width: 70px;
		height: 70px;
		margin-left: 1em;
	}
	.nav-link {
		font-size: 1.5em !important;
		border-bottom: 5px solid rgba(255,255,255,0);
		transition: all 0.4s !important;
		margin: 0;
		&:hover {
			background-color: rgba(100,100,100,0.2) !important;
			border-bottom: 5px solid rgb(0, 140, 123);
			color: rgb(255,255,255) !important;
		}
		&:focus {
			background-color: rgba(100,100,100,0.2) !important;
			border-bottom: 5px solid rgb(0, 140, 123);
			color: rgb(255,255,255) !important;
		}
	}
	.fl-r {
		float: right !important;
		margin-left: auto !important;
	}
	.logo1 {
		margin: 0;
		color: #FFF;
		// font-weight: bold;
	}
	.logo2 {
		margin: 0;
		font-weight: bold;
		color: rgb(0, 140, 123);
	}
</style>
