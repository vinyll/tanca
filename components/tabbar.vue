<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/profile" icon="idcard">Ma carte</van-tabbar-item>
      <van-tabbar-item to="/pay" icon="shop-o">Achat</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
