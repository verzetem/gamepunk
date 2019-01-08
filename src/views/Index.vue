<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'index',
  components: {
    Navbar,
    Dashboard
  }
}
</script>
