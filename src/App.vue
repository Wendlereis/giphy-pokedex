<template>
  <div>
    <vheader></vheader>
    <vcontent></vcontent>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import Vheader from './Header.vue'
  import Vcontent from './Content.vue'
  import Vfooter from './Footer.vue'

  export default {
    components: {
      Vheader, Vcontent, Vfooter
    },
    data: () => {
      return {
        
      }
    }
  }
</script>

<style lang="scss">

</style>
