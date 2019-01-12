<template>
	<div>
		<h2 class="page-title">Articles</h2>
	  <div class="content">
	  	<div class="inner">
	  			<div v-for="article in articles" class="article-card">
	  				<a v-bind:href="article.article_url">
	  					<!-- <div class="overlay">
	  					</div>
	  					<h6 class="card-title" style="margin: 0 0.5% 0.5% 0.5%">Placeholder Title</h6> -->
	  					<div class="image-container">
						    <img v-bind:src="article.img_url" />
						    <div class="after"><h6 class="card-img-text">{{ (article) => cardTitle(article) }}</h6></div>
						</div>
						<h6 class="card-title" style="margin: 0 0.5% 0.5% 0.5%">Placeholder Title</h6>
	  				</a>	  				
	  			</div>

	  	</div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
  	return {
  		articles: []
  	}
  },
  methods : {
		cardTitle(article) {
			if (article.publisher_id == 1) {
				return "Gamespot"
			} else if (article.publisher_id == 2) {
				 return "Kotaku"
			}
		}
  },
  mounted () {
  		console.log('mounted')
  		fetch('http://localhost:3030/articles')
      .then(response => response.json())
      .then(response => {
      	this.articles = response.favorites
      	console.log(response.favorites)
      })
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.content {
		overflow-y: auto !important;
		margin: 2vh auto !important;
		width: 80% !important;
		max-height: 80vh !important;
		border: 2px solid rgba(0,0,0,0.5) !important;
	}
	// flex container
	.inner {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 2% 6% 0 6%;

	}
	.article-card {
		height: 300px;
		width: 200px;
		background-color: rgba(0,206,182,0.1);
		border: 2px solid #000;
		border-radius: 5px;
		margin: auto;
		margin-bottom: 1%;
		a {
			text-decoration: none;
		}
		.card-title {
			font-weight: bold;
		}
		img {
			width: 100%;
			border-radius: 3px 3px 0 0;
			border-bottom: 1px solid #000;
			&:hover {
				color: rgba(255,255,255,1)
			}
		}
		.card-img-text {
			position: absolute;
			z-index: 100;
			color: #FFF;
			font-size: 24px;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
		}
	}
	.image-container {
    position: relative;
    margin-right: auto;
    margin-left: auto;
	}
	.image-container .after {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    display: none;
	    color: #FFF;
	}
	.image-container:hover .after {
	    display: block;
	    background: rgba(0, 0, 0, .6);
	}
	.page-title {
		margin: 0;
		padding: 0;
	}
	.invisible-text {
		color: rgb(65,68,71) !important;
	}

</style>
