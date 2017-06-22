<template>
  <div>
    <img v-for="gif in gifs"
        v-bind:src="gif.images.fixed_width_small.url"/>
  </div>
</template>

<script>
  export default {
    props: ['gifs'],
    data: () => {
      return {
        
      }
    }
  }
</script>

<style lang="scss">

</style>
