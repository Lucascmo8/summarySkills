import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', {
  state(){
    return{
      ReactionValue:0,
      MemoryValue:0,
      VerbalValue:0,
      VisualValue:0,
      showForm:true,
    }
  },
  actions: {
    submitSkillsValues(values){
      this.ReactionValue = values[0]
      this.MemoryValue = values[1]
      this.VerbalValue = values[2]
      this.VisualValue = values[3]
      this.showForm = false
    },
    resetForm(){
      this.showForm = true
    }
  },
  getters:{
    averageSkills(){
      let allSkills = this.ReactionValue + this.MemoryValue + this.VerbalValue + this.VisualValue

      return parseInt(Number(allSkills/4))
    }
  }
})
