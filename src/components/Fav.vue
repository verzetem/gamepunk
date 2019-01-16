<template>
	<div>
		<h2 class="page-title"><span class="shadow">FAVORITED ARTICLES</span></h2>
	  <div class="content">
	  	<div class="inner">
	  			<div v-for="article in articles" class="article-card">
	  				<div class="image-container">
	  					<a :href="article.article_url" target="_blank">
					    <img v-bind:src="article.img_url" />
					    <div class="after">
					  	</div>
					    <div class="after"><h6 class="card-img-text">{{ article.publisher_id == 1 ? "Gamespot" : "Kotaku" }}</h6></div>
							<h6 class="card-title" style="margin: 0 0.5% 0.5% 0.5%">{{ article.title }}</h6>
	  				</a>
	  				</div> 
	  				<i @click="favoritePut(article.id, article.favorited)" :class="{ 'fas fa-heart': !article.favorited, 'far fa-heart': article.favorited }" style="fontSize: 1.3em; marginTop: 3%;"></i>
	  				<div>{{ article.date_time }}</div>	  				
	  			</div>

	  	</div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'Fav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.article-card {
	height: 220px;
	width: 200px;
	background-color: rgba(0,206,182,0.2);
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
	color: rgba(0,0,0,0) !important;
}

</style>
