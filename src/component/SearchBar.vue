<template>
  <div class="container">
    <div class="row">
      <input class="form-control form-control-lg" type="text" v-model="gifName"></input>
      <button class="btn btn-primary btn-lg" type="submit" v-on:click="searchByName">Search</button>
    </div>   
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        gifName: ''
      }
    },
    methods: {
      searchByName: function() {
        this.$emit('searchByName', this.gifName)
      }
    }
  }
</script>

<style lang="sass" scoped>
  $btnSearch: #7342af

  .form-control-lg
    width: 80%
  
  .btn
    width: 18%
    margin: 0 5px
    background: transparent
    border: 2px solid #fff
    cursor: pointer
  
    &:hover
      background: $btnSearch
      border-color: $btnSearch
      color: #fff
    
    &:focus
      box-shadow: initial
      
</style>
