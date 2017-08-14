<template>
  <div class="content">
    <div class="gif-box" v-bind:key="gif" v-for="gif in gifs">
      <div class="float-button">
        <button class="btn" v-bind:title="copyClipboardTitle" v-clipboard:copy="gif.images.fixed_width.url">
          <i class="fa fa-clipboard" aria-hidden="true"></i>
        </button>
        <button class="btn">
          <social-sharing v-bind:url="gif.images.fixed_width.url" v-bind:quote="facebookQuote" inline-template>
            <div>
              <network network="facebook">
                <i class="fa fa-facebook"></i>
              </network>
            </div>
          </social-sharing>
        </button>
      </div>
      <img v-bind:src="gif.images.fixed_width.url"/>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['gifs'],
    data: () => {
      return {
        copyClipboardTitle: 'Copy to Clipboard',
        facebookQuote: 'This gif was shared by Giphy-Pokedex - See more in https://wendlereis.github.io/giphy-pokedex/'
      }
    }
  }
</script>

<style lang="sass" scoped>
  .content
    margin: 50px 22px

  img
    margin: 0 5px
  
  .gif-box
    display: inline-block 
    width: auto 
    position: relative
    
    .float-button
      position: absolute
      right: 5px
      display: none
      .btn
        width: 50px

    &:hover
      .float-button
        display: block  
</style>
