<template>
  <div class="pagination" v-if="totalPages">
    <button class="btn" v-if="currentPage !== 0"
            @click="emitPagination(currentPage - 1)">
      Prev
    </button>
    <button class="btn" v-for="page in pageRange"
            @click="emitPagination(page - 1)">
      {{page == currentPage + 1 ? `(${page})` : page}}
    </button>
    <button class="btn" v-if="currentPage !== totalPages"
            @click="emitPagination(currentPage + 1)">
      Next
    </button>
  </div>
</template>

<script>
  export default {
    props: ['currentPage', 'totalPages', 'limit'],
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
  .pagination
    display: inline-block

    button
      background-color: #4CAF50
      color: white
      margin-left: 10px
</style>
