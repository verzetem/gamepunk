<template>
  <div>
    <h2 class="page-title">Favorited Articles</h2>
	  <div class="content">
	  	<div class="inner">
	  		<h1 class="invisible-text"> 
	  			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellendus voluptatem itaque vero iste quas, nostrum enim cumque harum neque et suscipit quibusdam modi eum, officia totam, doloremque consequuntur, odio.
	  		</h1>
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
	.content {
		overflow-y: auto !important;
		margin: 2vh auto !important;
		width: 80% !important;
		max-height: 80vh !important;
		border: 2px solid rgba(0,0,0,0.5) !important;
	}
	.inner {
		padding: 2%;
	}
	.page-title {
		margin: 0;
		padding: 0;
	}
	.invisible-text {
		color: rgb(65,68,71) !important;
	}

</style>
