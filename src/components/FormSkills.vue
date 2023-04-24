<template>
    <form @submit.prevent="skillsStores.submitSkillsValues([this.ReactionValue,this.MemoryValue,this.VerbalValue,this.VisualValue])">
        <h1>Fill each skill with a level from 0 to 100</h1>
        <SpaceSkill name="Reaction" isForm=true @passSkillValue="getReactionValue"/>
        <SpaceSkill name="Memory" isForm=true @passSkillValue="getMemoryValue"/>
        <SpaceSkill name="Verbal" isForm=true @passSkillValue="getVerbalValue"/>
        <SpaceSkill name="Visual" isForm=true @passSkillValue="getVisualValue"/>
        <Button text="Submit" />
    </form>
</template>

<script>
import SpaceSkill from './SpaceSkill.vue'
import Button from './Button.vue';
import InputValueSkill from './InputValueSkill.vue';

import {useSkillsStore} from '../stores/SkillsStores'

    export default{
    name:"FormSkills",
    setup(){
        const skillsStores = useSkillsStore()

        return {skillsStores}
    },
    data(){
        return{
            ReactionValue:'',
            MemoryValue:'',
            VerbalValue:'',
            VisualValue:'',
        }
    },
    methods:{
        getReactionValue(value){
            this.ReactionValue = value
        },
        getMemoryValue(value){
            this.MemoryValue = value
        },
        getVerbalValue(value){
            this.VerbalValue = value
        },
        getVisualValue(value){
            this.VisualValue = value
        }
    },
    components:{
        SpaceSkill,
        Button,
        InputValueSkill
    }
}
</script>

<style scoped>
    form{
        @apply p-6 shadow-lg rounded-3xl flex flex-col gap-3 items-center bg-white w-auto my-8 m-auto
    }

    form h1{
        @apply  font-semibold text-left self-start
    }
</style>