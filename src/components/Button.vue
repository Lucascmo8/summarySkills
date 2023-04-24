<template>
    <button>{{ text }}</button>
</template>

<script>
    export default{
        name:'Button',
        props:{text:{type:String}},
    }
</script>

<style scoped>
    button{
        @apply w-full bg-blue-950 p-2 rounded-3xl text-white text-xl shadow-md hover:bg-blue-900 hover:scale-105 transition-all
    }
</style>