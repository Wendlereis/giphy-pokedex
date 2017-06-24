<template>
  <div class="pagination" v-if="totalPages">
    <button class="btn" v-if="currentPage !== 0"
            @click="emitPagination(currentPage - 1)">
      <i class="fa fa-angle-double-left" aria-hidden="true"></i>
    </button>
    <button class="btn" v-for="page in pageRange"
            @click="emitPagination(page - 1)">
      <label v-if="page == currentPage + 1" class="btn-active">{{page}}</label>
      <label v-else>{{page}}</label>
    </button>
    <button class="btn" v-if="currentPage !== totalPages"
            @click="emitPagination(currentPage + 1)">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
  export default {
    props: ['currentPage', 'totalPages', 'limit'],
    data: () => {
      return {
        isActive: true
      }
    },
    methods: {
      emitPagination: function(selectedPage) {
        this.$emit('selectedPage', selectedPage)
      }
    },
    computed: {
      pageRange: function() {
        let offset = Math.ceil(this.limit / 2)
        let initialPage = 1 + this.currentPage - offset + (this.limit % 2)
        if (this.currentPage < offset) { initialPage = 1 }
        if (this.currentPage + offset > this.totalPages) { initialPage = this.totalPages + 1 - this.limit }
        return [...Array(this.limit)].map((_, i) => initialPage + i);
      }
    }
  }
</script>
 
<style lang="sass" scoped>
  $btnSearch: #7342af
  $white: #fff

  .pagination
    display: inline-block

    .btn
      background: transparent
      
      cursor: pointer
      margin-left: 10px
      color: $white
  
      &:hover,
        background: $btnSearch
        border-color: $btnSearch
        color: $white
      
      &:focus
        box-shadow: initial
    
    .btn-active 
      color: $btnSearch
      font-weight: bold    

    label
      margin: 0
</style>
