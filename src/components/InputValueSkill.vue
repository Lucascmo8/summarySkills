<template>
    <input type="number" @input="passValue" v-model="value" min="0" max="100" required>
</template>

<script>
    export default{
        name:'InputValueSkill',
        data(){
            return{
                value:''
            }
        },
        methods:{
            passValue() {
                 this.$emit("pass-value", this.value);
            }
        },
        props:{},
    }
</script>

<style scoped>
    input[type=number]{
        @apply bg-transparent border-b border-black w-10 appearance-none;
    }
</style>