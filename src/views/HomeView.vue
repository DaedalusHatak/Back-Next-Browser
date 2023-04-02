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
const componente = shallowRef();
watch(
  () => step.currentStep,
  (currentStep) => {
    // return the component based on the current step
    if (currentStep === 1) {
      componente.value = componentMap[currentStep];
    } else if (currentStep === 2) {
      componente.value = componentMap[currentStep];
    }
    else{
      componente.value = null;
    }
  }
);

</script>

<template>
  <component :is="componente"></component>
  {{step.currentStep}}
  <button @click="step.incrementStep">Add 1</button>
  <div v-if="step.currentStep === 5">Ohh hell nah</div>

</template>

<style>

</style>
