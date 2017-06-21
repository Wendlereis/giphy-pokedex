<template>
  <div>
    <vheader></vheader>
    <vcontent v-bind:gifs="gifs"></vcontent>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import Vheader from './layout/Header.vue'
  import Vcontent from './layout/Content.vue'
  import Vfooter from './layout/Footer.vue'
  import GiphyAPI from './services/giphyAPI.js'

  export default {
    components: {
      Vheader, Vcontent, Vfooter
    },
    data: () => {
      return {
        gifs: []
      }
    }, 
    mounted: function() {
      new GiphyAPI().getTrending().then((response) => {
          this.gifs = response.data.data
      })
    }
  }
</script>

<style lang="scss">

</style>
