<template>
  <FormSkills @submitSkillsValues="getSkillsValues" v-if="skillsStores.showForm"/>
  <SummarySkills v-else/>
</template>

<script>
  import FormSkills from './components/FormSkills.vue';
  import SummarySkills from './components/SummarySkills.vue';
  import {useSkillsStore} from './stores/SkillsStores'

  export default{
    setup(){
        const skillsStores = useSkillsStore()

        return {skillsStores}
    },
    components:{
      FormSkills,
      SummarySkills
    },
  }
</script>

<style>
  body,div#app,html{
    @apply flex justify-center items-center box-border h-screen w-full bg-slate-100
  }
</style>
<!-- 
  Formulario{h1,4 espaços com 4 inputs, botão submit}
  Resultado{Formulario,Card do resultado{h1, span, h2,p}}
 -->