<template>
    <div>
        <button style="margin-left: 10px" v-on:click="emitPagination(page)" v-for="page in totalPages">{{page == this.currentPage ? `(${page})` : page}}</button>
    </div>
</template>

<script>
    export default {
        props: ['currentPage', 'totalPages'],
        methods: {
            emitPagination: function(selectedPage) {
                this.$emit('selectedPage', selectedPage)
            }
        }
    }
</script>

<style>

</style>
