<template>
  <div class="container">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'
import { onMounted, computed, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { Header, Footer },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('checkAuth')
    })
  }
}
</script>
