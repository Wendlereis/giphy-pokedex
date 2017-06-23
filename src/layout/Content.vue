<template>
  <div class="content">
    <div class="gif-box" v-for="gif in gifs">
      <button class="clipboard" v-clipboard:copy="gif.images.fixed_width.url">
        <i class="fa fa-clipboard" aria-hidden="true"></i>
      </button>
      <img v-bind:src="gif.images.fixed_width.url"/>
    </div>    
  </div>
</template>

<script>

  export default {
    props: ['gifs']
  }
</script>

<style lang="sass" scoped>
  .content
    margin: 50px 22px

  img
    margin: 0 5px
  
  .gif-box
    display: inline-block 
    width: auto 
    position: relative
    
    .clipboard
      position: absolute
      right: 5px
      display: none
    
    &:hover
      .clipboard
        display: block  
</style>
