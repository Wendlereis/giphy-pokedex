<template>
  <div class="col-md-10 offset-md-1">
    <h1>Giphy Pokédex</h1>
    <search-bar @searchByName="updateQuery"></search-bar>
    <vcontent :gifs="gifs"></vcontent>
    <div class="pagination">
      <pagination :totalPages="totalPages"
                :currentPage="currentPage"
                :limit="5"
                @selectedPage="updatePage" />
    </div>
    
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
      updateQuery: function(event) {
        this.currentPage = 0
        this.searchQuery = event
        this.searchGifs()
      },
      updatePage: function(event) {
        this.currentPage = event
        this.searchGifs()
      },
      searchGifs: function() {
        new GiphyAPI().search({ query: this.searchQuery, page: this.currentPage }).then((response) => {
          let pagination = response.data.pagination
          this.gifs = response.data.data

          this.totalPages = Math.ceil(pagination.total_count / response.params.perPage)

          window.scrollTo(0, 0)
        })
      }
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Amatic+SC')

  body
    background: #2c2d2d

  h1
    text-transform: uppercase
    text-align: center
    margin: 50px
    font-family: 'Amatic SC'
    font-size: 80px
    color: #fff

  .pagination
    margin: 0 auto
</style>
