<template>
  <div>
    <h3>{{ message }}</h3>
    <input v-model="message" />
  </div>
</template>

<script>
  module.exports = {
    data: () => {
      return {
        message: 'Segura o bind'
      }
    }
  }
</script>

<style lang="scss">

</style>
