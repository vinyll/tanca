<template>
  <van-row>
    <van-col :span="span" :offset="offset">
      <slot></slot>
    </van-col>
  </van-row>
</template>

<script>
  export default {
    props: {
      full: Boolean,
    },

    computed: {
      span() {
        return this.full ? 24 : 22
      },
      offset() {
        return this.full ? 0 : 1
      }
    }
  }
</script>
