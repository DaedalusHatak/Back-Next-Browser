<script setup lang="ts">
import {steps} from '@/stores/counter'
import SimplePage from '../components/SimplePage.vue';
import { ref, shallowRef, watch } from 'vue';
import SecondPage from '../components/SecondPage.vue';

const componentMap = {
  1: SimplePage,
  2: SecondPage,
};
const step = steps();
const currentComponent = shallowRef();
watch(
  () => step.currentStep,
  (currentStep) => {
    // return the component based on the current step
    if (currentStep === 1) {
      currentComponent.value = componentMap[currentStep];
    } else if (currentStep === 2) {
      currentComponent.value = componentMap[currentStep];
    }
    else{
      currentComponent.value = null;
    }
  }
);

</script>

<template>
 
<div class="main">  <div class="counter">
  {{step.currentStep}}
  <button @click="step.incrementStep">Add 1</button>
</div>

  <component class="component" :is="currentComponent"></component></div>
</template>

<style>
.counter{
  display: inline-block;
}
.main{
  min-height: 100svh;
 
  font-size: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
gap:5rem;
  justify-content: center;
}
button{
  padding: 0.5rem 1rem;
  font-size: 20px;
  color:slateblue;
}
.component{
  margin-top: 200px;
position: absolute;
}
</style>
