import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRefHistory } from '@vueuse/core'
import router from '@/router'

export const steps = defineStore('steps', () => {
  const currentStep = ref(0)
  const name= ref<string>();
  const { history, undo, redo } = useRefHistory(currentStep)
  
  function incrementStep() {

    currentStep.value++;
    window.history.pushState({ step: currentStep.value }, '');
    
    
  }
  function decrementStep() {
    if(currentStep.value > 0){
      currentStep.value--;
    }
    
    
    
  }
function increment(){
  const state = window.history.state;
  console.log(state)
  const step = state ? state.step : 1;
    if (step > currentStep.value) {
      currentStep.value = step;
    }
}

  return {name,increment, currentStep,incrementStep,decrementStep,history,undo,redo }
})
