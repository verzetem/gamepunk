<template>
  <div>
    <Fav />
  </div>
</template>

<script>
// @ is an alias to /src
import Fav from '@/components/Fav.vue'

export default {
  name: 'favorites',
  components: {
		Fav
  }
}
</script>