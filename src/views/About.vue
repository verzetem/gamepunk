<template>
	<div>
		<h2 class="page-title"><span class="shadow">ABOUT GAMEPUNK</span></h2>
	  <div class="content">
	  	<div class="inner">
				<h2 class="about-text" style="marginLeft: auto; marginRight: auto; fontWeight: bold;">
	  			What is this place? 
	  		</h2>
	  		<h3 class="about-text">
	  			GamePunk is a gaming news article aggregator. Since there are not many game news publishers with a publically available API, I came up with a solution using <a href="https://github.com/GoogleChrome/puppeteer" target="_blank">Puppeteer</a> for web scraping and <a href="https://vuejs.org/" target="_blank">Vue.js</a> for the front end design. For the back end, I used <a href="" target="_blank">Node.js</a> and <a href="" target="_blank">Express</a> for server, <a href="https://vuejs.org/" target="_blank">Knex.js</a> and <a href="" target="_blank">PostgreSQL</a> for database queries and data persistence.
	  		</h3>
	  		<h2 class="about-text" style="marginLeft: auto; marginRight: auto; fontWeight: bold;">
	  			Why GamePunk?
	  		</h2>
	  		<h3 class="about-text">
	  			Here, you can view the latest articles from all your favorite publishers (i.e. Kotaku, GameSpot, Destructoid, etc) without actually having to visit any one of those publishers sites. You can view and favorite articles without the clutter of extra feeds or ads. 
	  		</h3>
	  		<h3 class="about-text" style="marginLeft: auto; marginRight: auto">
	  			Thanks for visiting and enjoy! 
	  		</h3>



	  	</div>
	  </div>
	</div>
</template>

<style scoped lang="scss">
a {
	color: white;
	border-bottom: 3px solid rgb(0,206,182);
	text-decoration: none;
	transition: all 0.3s;
	&:hover {
		border-bottom: 3px solid rgb(0,140,123);
	}
}
.about-text {
	margin: 1% 0 2% 0;
	padding: 0;
}
.shadow {
	color: white;
	text-shadow:  -2px 2px black;
	font-weight: bold;
}
.content {
	overflow-y: auto !important;
	margin: 2vh auto !important;
	width: 80% !important;
	max-height: 80vh !important;
	border: 2px solid rgba(0,0,0,0.5) !important;
	border-radius: 5px;
}
// flex container
.inner {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 2% 6% 0 6%;
	background-color: rgba(0,0,0,0.6);
}
.page-title {
	margin: 0;
	padding: 0;
}
.about {
	margin-right: auto;
	margin-left: auto;
	width: 80vw;
}
.invisible {
	color: rgba(0,0,0,0) !important;
}
</style>
