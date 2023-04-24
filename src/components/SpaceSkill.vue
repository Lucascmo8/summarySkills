<template>
    <div class="spaceSkill" :class="this.name" @change="passSkillValue">
        <img v-show="this.name == 'Reaction'" src="../assets/icons/icon-reaction.svg" :alt="name">
        <img v-show="this.name == 'Memory'" src="../assets/icons/icon-memory.svg" :alt="name">
        <img v-show="this.name == 'Verbal'" src="../assets/icons/icon-verbal.svg" :alt="name">
        <img v-show="this.name == 'Visual'" src="../assets/icons/icon-visual.svg" :alt="name">
        
        <p>{{ name }}</p>
        <div class="spaceValue">
            <InputValueSkill @passValue="getValue" v-show="isForm"/>
            <p>{{valueSkill}}</p>
            <span>/100</span>
        </div>
    </div>
</template>

<script>
import InputValueSkill from './InputValueSkill.vue'
    
    export default{
        name:'SpaceSkill',
        data(){
            return{
                skillValue:''
            }
        },
        methods:{
            getValue(value){
                this.skillValue = value
            },
            passSkillValue(){
                this.$emit("pass-skill-value",this.skillValue)
            }
        },
        props:{name:{type:String},isForm:{type:Boolean},valueSkill:{type:String}},
        components:{
            InputValueSkill
        }
    }
</script>

<style scoped>
    .spaceSkill{
        grid-template-columns: .5fr 1.5fr .6fr;
        @apply w-full p-3 px-4 grid gap-4 m-1 rounded-lg shadow-md font-semibold items-center align-middle justify-center
    }

    .spaceValue{
        @apply flex gap-1 items-center
    }
    div.Reaction{
        @apply bg-red-100 text-red-500
    }

    div.Memory{
        @apply bg-yellow-100 text-yellow-500
    }
    div.Verbal{
        @apply bg-green-100 text-green-500
    }
    div.Visual{
        @apply bg-blue-100 text-blue-500
    }

    div span{
        @apply text-slate-400
    }
</style>