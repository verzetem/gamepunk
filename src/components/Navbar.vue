<template>   
  <div>
		<nav class="uk-navbar-container uk-margin" uk-navbar>
			<div class="uk-navbar-left">

				<router-link to="/"  class="uk-navbar-item uk-logo"><h1 class="logo1">G a m e<span class="logo2">P u n k</span></h1></router-link>

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
				</ul>

				<div class="uk-navbar-item">
					<form action="javascript:void(0)">
						<input class="uk-input uk-form-width-small" type="text" placeholder="Filter">
						<button class="uk-button uk-button-danger">Submit</button>
					</form>
				</div>
				<div class="uk-navbar-item fl-r">
					<span class="user-name">Name</span><span class="icon-name"><i class="fas fa-chevron-down"></i></span><div class="avatar" v-tooltip.top-center="'Profile'"></div>
				</div>

			</div>
		</nav>

  </div>
</template>

<script>
import VTooltip from 'v-tooltip'

export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
	.uk-navbar-container {
		background-color: rgba(0,5,2,0.7) !important;
	}
	.uk-button-danger {
		background-color: rgba(181,16,41,1) !important;
		transition: all 0.35s !important;
		&:hover {
			background-color: rgba(181,16,41,0.5) !important;
		}
	}
	.tooltip {
		background-color: rgba(0,0,0,0.3);
		padding: 0.3%;
	}
	.user-name {
		color: #fff;
		margin-right: 1%;
		font-size: 2em;
		font-weight: bold;
	}
	.icon-name {
		color: red;
	}
	.avatar {
		float: right;
		border: solid 1px red;
		border-radius: 10px;
		width: 75px;
		height: 75px;
		margin-left: 1em;
	}
	.nav-link {
		font-size: 1.5em !important;
		border-bottom: 2px solid rgba(255,255,255,0);
		transition: all 0.4s !important;
		margin: 0;
		&:hover {
			background-color: rgba(100,100,100,0.2) !important;
			border-bottom: 2px solid rgba(255,255,255,1);
			color: rgba(181,16,41,1) !important;
		}
		&:focus {
			background-color: rgba(100,100,100,0.2) !important;
			border-bottom: 2px solid rgba(255,255,255,1);
			color: rgba(181,16,41,1) !important;
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
		color: rgb(181,16,41);
	}
</style>
