<template>
  <div>
    <h3>Mon compte</h3>
    <van-button type="warning" @click="logout">Quitter</van-button>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$user = null
        localStorage.removeItem('user')
        this.$router.push('login')
      }
    }
  }
</script>
