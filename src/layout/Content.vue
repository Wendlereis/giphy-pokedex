<template>
  <div>
    <img v-for="gif in gifs"
         v-bind:src="gif.images.fixed_height_small.url"/>
  </div>
</template>

<script>
  export default {
    props: ['gifs']
  }
</script>

<style lang="scss">

</style>
