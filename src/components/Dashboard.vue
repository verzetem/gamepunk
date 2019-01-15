<template>
	<div>
		<h2 class="page-title">Your Feed <i class="fas fa-sync-alt"></i></h2>
	  <div class="content">
	  	<div class="inner">
	  			<div v-for="article in articles" class="article-card">
	  				<div class="image-container">
	  					<a :href="article.article_url" target="_blank">
					    <img v-bind:src="article.img_url" />
					    <div class="after"><h6 class="card-img-text">{{ article.publisher_id == 1 ? "Gamespot" : "Kotaku" }}</h6></div>
							<h6 class="card-title" style="margin: 0 0.5% 0.5% 0.5%">{{ article.title }}</h6>
	  				</a>
	  				</div> 
	  				<i @click="favoritePut(article.id, article.favorited)" :class="{ 'fas fa-heart': !article.favorited, 'far fa-heart': article.favorited }" style="fontSize: 1.3em; marginTop: 3%;"></i>	  				
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
  		articles: [],
  		favorited: false
  	}
  },
  methods : {
  	getFavorited(fav) {
  		if (fav === true) {
  			return "fas fa-heart"
  		} else {
  			return "far fa-heart"
  		}
  	},
  	favoritePut(id, fav) {
  		// console.log("id and fav?", id,fav)
  		const favArticle = fav
  		console.log("favArticle", favArticle)
  		fetch("http://localhost:3030/articles/" + id, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PUT",
			body: JSON.stringify({
				favorited: true
			})
		})
			.then(this.getArticles())
  	},
  	getArticles() {
  		fetch('http://localhost:3030/articles/')
      .then(response => response.json())
      .then(response => {
      	this.articles = response.articles
      	console.log(response.articles)
      })
  	},


  },
  mounted () {
  		console.log('mounted')
  		this.getArticles()
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fa-sync-alt {
	font-size: 0.8em;
	background-color: rgb(222,92,112);
	border-radius: 10px;
	padding: 0.5rem;
	transition: all 0.2s;
	&:hover {
		background-color: rgb(200,82,92);
		box-shadow: 2px 2px rgb(0,0,0);
	}
	&:active {
		background-color: rgb(180,62,72)
	}
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
	background-color: rgba(0,0,0,0.4 );

}
.article-card {
	height: 200px;
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
		font-size: 1.2em;
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
		// position: absolute;
		display: flex;
		z-index: 100;
		color: #FFF !important;
		font-size: 24px;
		font-weight: bold;
		align-content: center;
		justify-content: center;
		margin-top: 19%;
		transition: all 0.3s;
		&:hover {
			color: rgb(0,206,182) !important;
			margin-top:20%;
		}
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
    height: 115px;
    display: none;
    color: #FFF;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    margin-left: auto;
    margin-right: auto;
}
.page-title {
	margin: 0;
	padding: 0;
}
.invisible-text {
	color: rgb(65,68,71) !important;
}

</style>
