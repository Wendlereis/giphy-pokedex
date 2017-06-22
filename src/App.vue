<template>
  <div>
    <h1>Giphy Pokédex</h1>    
    <search-bar v-on:searchByName="searchByName"></search-bar>
    <vcontent v-bind:gifs="gifs"></vcontent>
    <pagination v-bind:totalPages="totalPages" v-bind:currentPage="currentPage" v-on:selectedPage="updatePage"></pagination>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import SearchBar from './component/SearchBar.vue'
  import Vcontent from './layout/Content.vue'
  import Vfooter from './layout/Footer.vue'
  import GiphyAPI from './services/giphyAPI.js'
  import Pagination from './component/Pagination.vue'

  export default {
    components: {
      SearchBar, Vcontent, Vfooter, Pagination
    },
    data: () => {
      return {
        gifs: [],
        totalPages: 0,
        currentPage: 0,
        searchQuery: '' 
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
        this.searchQuery = event

        new GiphyAPI().search({query:event, page:this.currentPage}).then((response) => {
          let pagination = response.data.pagination
          this.gifs = response.data.data
          
          this.totalPages = Math.ceil(pagination.total_count / pagination.count)
          this.currentPage = pagination.offset
        })
      },
      updatePage:function(event) {
        event * 10

        new GiphyAPI().search({query:this.searchQuery, page:event}).then((response) => {
          let pagination = response.data.pagination
          this.gifs = response.data.data
          
          this.totalPages = Math.ceil(pagination.total_count / pagination.count)
          this.currentPage = pagination.offset
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
