<template>
  <van-tabbar v-model="active">
    <!-- <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item> -->
    <van-tabbar-item icon="back-top" to="/withdraw">Tamponner</van-tabbar-item>
    <van-tabbar-item icon="down" to="/deposit">Recevoir</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/profile">Mon compte</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    data() {
      return {
        active: "",
      }
    }
  }
</script>
