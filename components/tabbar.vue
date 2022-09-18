<template>
  <div>
    <router-view />
    <van-tabbar>
      <van-tabbar-item to="/profile" icon="manager-o">Infos</van-tabbar-item>
      <van-tabbar-item to="/pay" icon="back-top">Envoyer</van-tabbar-item>
    </van-tabbar>
  </div>
</template>