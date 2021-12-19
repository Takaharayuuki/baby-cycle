<template>
  <div>
    <Navbar />
    <h2>↓googleでログイン↓</h2>
    <button @click="googleLogin">ログイン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { root }) {
    /**
     * ログイン機能
     */
    // eslint-disable-next-line require-await
    const googleLogin = async () => {
      try {
        const provider = new root.$fireModule.auth.GoogleAuthProvider()
        root.$fire.auth.signInWithRedirect(provider)
      } catch (e) {
        console.error(e)
      }
    }

    return { googleLogin }
  }
})
</script>
