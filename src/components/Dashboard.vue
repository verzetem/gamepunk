<template>
	<div>
		<h2 class="page-title"><span class="shadow">YOUR FEED </span><i @click="refreshArticles" class="fas fa-sync-alt"></i></h2>

	  <div class="content">

	  	<div class="inner">
	  			<div v-for="article in articles" class="article-card">
	  				<div class="image-container">
	  					<a :href="article.article_url" target="_blank">
					    <img v-bind:src="article.img_url" />
					    <div class="after">
					    	<h6 class="card-img-text">{{ publisherName(article.publisher_id) }}</h6>
								<p class="date-time">{{ article.date_time }}</p>
					    </div>
							<span class="card-title" style="margin: 0 0.5% 0.5% 0.5%">{{ articleTitle(article.title) }}</span>
	  				</a>
	  				</div> 
	  				<div class="icon-outer">
	  				<i @click="favoritePut(article.id, article.favorited)" 
	  					v-bind:class="{ 'fas fa-heart red-heart': article.favorited, 'far fa-heart': !article.favorited }" 
	  					style="fontSize: 1.3em; marginTop: 4%;">
	  				</i>
	  				</div>	
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
  	}
  },
  methods : {
  	articleTitle(title) {
			return title.slice(0,60) + "..."
  	},
  	publisherName(id) {
			if (id === 1) {
				return "PCGamer"
			} else if (id === 2) {
				return "Destructoid"
			} else if (id === 3) {
				return "Kotaku"
			} else if (id === 4) {
				return "GameSpot"
			}
  	},
  	refreshArticles() {
			fetch("http://localhost:3030/articles/update", {
			method: "GET"
		})
			setTimeout(this.getArticles(), 15000);
  	},
  	favoritePut(id, favorited) {
  		// console.log("id and fav?", id,fav)
  		fetch("http://localhost:3030/articles/" + id, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "PUT",
			body: JSON.stringify({
				favorited: !favorited
			})
		})
  		.then(res => res.json())
  		.then(res => {
  			console.log('RESPONSE!',res)
  			let newArticles = this.articles.map(article => {
  				if (article.id === id ) article.favorited = !favorited
  				return article
  			})
  			this.articles = newArticles
  		})
  	},
  	getArticles() {
  		fetch('http://localhost:3030/articles/')
      .then(response => response.json())
      .then(response => {
      	this.articles = response.articles
      	console.log("getArticles",response.articles)
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
.icon-outer {
	position: absolute;
	bottom: 0;
	left: 44%;
}
.fa-heart {
	font-size: 1.8em !important;
	transition: all 0.3s;
	.red-heart:hover {
		color: red;
	}
}

.date-time {
	margin: 0;
	padding: 0;
}
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
	padding: 1% 2% 0 2%;
	background-color: rgba(0,0,0,0.6);

}
.article-card {
	position: relative;
	height: 220px;
	width: 220px;
	background-color: rgba(0,206,182,0.2);
	border: 2px solid #000;
	border-radius: 5px;
	margin: auto;
	margin-bottom: 1%;
	a {
		text-decoration: none;
	}
	.card-title {
		color: #FFF;
		// font-weight: bold;
		font-size: 1em;
		text-decoration: none;
	}
	img {
		height: 115px;
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
		margin: 19% auto 0 auto;
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
.shadow {
	color: white;
	text-shadow:  -2px 2px black;
	font-weight: bold;
}

</style>
