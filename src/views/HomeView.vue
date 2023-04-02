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
  <component :is="currentComponent"></component>
  {{step.currentStep}}
  <button @click="step.incrementStep">Add 1</button>
  <div v-if="step.currentStep === 5">Ohh hell nah</div>

</template>

<style>

</style>
