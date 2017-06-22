<template>
  <div>
    <h1>Giphy Pokédex</h1>    
    <search-bar v-on:searchByName="searchByName"></search-bar>
    <vcontent v-bind:gifs="gifs"></vcontent>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import SearchBar from './component/SearchBar.vue'
  import Vcontent from './layout/Content.vue'
  import Vfooter from './layout/Footer.vue'
  import GiphyAPI from './services/giphyAPI.js'

  export default {
    components: {
      SearchBar, Vcontent, Vfooter
    },
    data: () => {
      return {
        gifs: []
      }
    }, 
    mounted: function () {
      this.trending()
    },
    methods: {
      trending: function() {
        new GiphyAPI().getTrending().then((response) => {
          this.gifs = response.data.data
        })
      },
      searchByName: function(event) {
        console.log('app')
        new GiphyAPI().search(event).then((response) => {
          this.gifs = response.data.data;
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
