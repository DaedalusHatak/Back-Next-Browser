<template>
  
    <div class="about">
      <input type="text" v-model="step.name">
      <div>{{ step.name }}</div>
    </div>
  </template>
  
  <style>
  
  </style>
  
  <script setup lang="ts">

import {steps} from '@/stores/counter'
import { ref } from 'vue';
const step= steps();

</script>