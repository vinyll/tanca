<template>
  <section>
    &nbsp;
    <h2>{{title}}</h2>
    <div class="content"><slot /></div>
  </section>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>
  section {
    padding: 1.44rem;
    background-color: rgb(10, 110, 110);
    color: white;
  }
  section * {
    text-align: center;
    color: inherit;
  }
  .content {
    font-size: 50px;
  }
</style>
