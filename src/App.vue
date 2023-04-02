<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './router';
import { useRefHistory } from '@vueuse/core';
import { onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
import { steps } from './stores/counter';
const step = steps();
onMounted(() => {
      window.addEventListener('popstate', step.decrementStep);
      window.addEventListener('popstate', step.increment);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('popstate', step.decrementStep);
      window.addEventListener('popstate', step.increment);
    });
</script>

<template>


      <nav>
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/about" >About</RouterLink>
      </nav>



  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
