<template>
  <form @submit="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>
    <div v-if="emailError" class="error">{{ emailError }}</div>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <div class="submit">
      <button @click="handleSubmit">Login</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const emailError = ref(null)
    const passwordError = ref(null)

    const handleSubmit = async(e) => {
      emailError.value = ''
      passwordError.value = ''
      e.preventDefault()
      try {
        const err = await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        if (err) {
          emailError.value = err.email
          passwordError.value = err.password
        } else {
          router.push('/')
        }
      } catch(err) {
        console.log(err)
      }
    }
    return { handleSubmit, email, password, emailError, passwordError }
  }
}
</script>

<style scoped lang="scss">

</style>