<template>
  <div>
    <input type="text" v-model="gifName"/>
    <button type="submit" v-on:click="searchByName">Search</button>
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

<style lang="scss">

</style>
