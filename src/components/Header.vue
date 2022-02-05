<template>
  <nav>
    <router-link to="/"><h1>Claire Articles</h1></router-link>
    <template v-if="authIsReady">
      <!-- for logged in users -->
      <ul v-if="user">
        <li>Welcome, {{ user }}</li>
        <li @click="handleSubmit" class="btn">Logout</li>
      </ul>
      <!-- for logged out users -->
      <ul v-else>
        <li class="btn"><router-link :to="{ name: 'Login' }">Login</router-link></li>
        <li class="btn"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
      </ul>  
    </template>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleSubmit = async() => {
      await store.dispatch('logout')
      router.replace('/')
    }

    return {
      handleSubmit,
      authIsReady: computed(() => store.state.authIsReady),
      user: computed(() => store.state.user)
    }
  }
  // example
  // Composition API
  // setup() {
  //   const store = useStore()
  //   const points = computed(() => {
  //     return store.state.points
  //   })
  //   const updatePoints = (p) => {
  //     store.commit('updatePoints', p)
  //   }
  //   return {
  //     points,
  //     updatePoints
  //   }
  // },
  // Options API
  // computed: {
  //   points() {
  //     return this.$store.state.points
  //   }
  // },
  // methods: {
  //   updatePoints(points) {
  //     this.$store.commit('updatePoints', points)
  //   }
  // }
}
</script>