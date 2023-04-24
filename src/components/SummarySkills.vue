<template>
    <div id="summaryContainer">
        <div id="summaryTotal">
            <h1>Your Result</h1>
            <div id="total">
                <h2>{{ skillsStores.averageSkills }}</h2>
                <p>of 100</p>
            </div>
            <h3>Great</h3>
            <p id="summaryText">You scored higher than {{skillsStores.averageSkills > 5? skillsStores.averageSkills -5 :0 }}% of the people who have taken these tests</p>
        </div>
        <div id="summarySpaces">
            <h4>Summary</h4>
            <SpaceSkill name="Reaction" :valueSkill="skillsStores.ReactionValue"/>
            <SpaceSkill name="Memory" :valueSkill="skillsStores.MemoryValue"/>
            <SpaceSkill name="Verbal" :valueSkill="skillsStores.VerbalValue"/>
            <SpaceSkill name="Visual" :valueSkill="skillsStores.VisualValue"/>
            <Button text="Reset" @click="skillsStores.resetForm"/>
        </div>
    </div>
</template>

<script>
    import Button from "./Button.vue";
    import SpaceSkill from "./SpaceSkill.vue";
    import {useSkillsStore} from '../stores/SkillsStores'

    export default{
        name:"SummarySkills",
        setup(){
            const skillsStores = useSkillsStore()

            return {skillsStores}
        },
        data(){

        },
        components:{
            SpaceSkill,
            Button
        }
    }
</script>

<style scoped>
    #summaryContainer{
        @apply flex flex-col items-center sm:items-baseline w-full sm:w-auto rounded-3xl shadow-lg bg-white sm:grid sm:grid-cols-2 self-start sm:self-center
    }
    
    div#summaryTotal{
        @apply flex flex-col sm:h-full w-full items-center gap-4 bg-gradient-to-b from-blue-600 to-indigo-800 rounded-b-3xl sm:rounded-3xl p-6 text-white text-center 
    }

    div#summaryTotal h1{
        @apply text-xl font-semibold
    }

    p#summaryText{
        @apply text-sm text-center w-48
    }

    div#total{
        @apply bg-gradient-to-b from-indigo-700 to-indigo-800 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg font-semibold 
    }

    div#summaryTotal h2{
        @apply text-5xl
    }

    div#summaryTotal h3{
        @apply text-2xl 
    }

    div#summarySpaces{
        @apply w-full sm:w-80 sm:rounded-r-lg p-4 sm:p-6 flex flex-col gap-2 items-center justify-center
    }

    div#summarySpaces h4{
        @apply text-xl font-semibold text-left self-start
    }
</style>