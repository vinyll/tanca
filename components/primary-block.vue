<template>
  <section class="primary-block">
    &nbsp;
    <h2>{{title}}</h2>
    <div class="content"><slot /></div>
    <slot name="aside" />
  </section>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>
  section.primary-block {
    padding: 1.44rem;
    background-color: rgb(10, 110, 110);
    color: white;
  }
  section.primary-block * {
    text-align: center;
    color: inherit;
  }
  .content,
  .content * {
    font-size: 50px;
  }
  aside {
    font-size: 20px;
  }

</style>
