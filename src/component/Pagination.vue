<template>
  <div v-if="totalPages">
    <button v-if="currentPage !== 0"
            @click="emitPagination(currentPage - 1)">
      Prev
    </button>
    <button style="margin-left: 10px"
            v-for="page in pageRange"
            @click="emitPagination(page - 1)">
      {{page == currentPage + 1 ? `(${page})` : page}}
    </button>
    <button v-if="currentPage !== totalPages"
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
 
<style lang="sass">

 </style>
 
