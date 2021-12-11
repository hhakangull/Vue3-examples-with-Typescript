<template>
  <div class="container text-center py-5">
    <h3 class="mt-5">ANA SAYFA</h3>
    
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('');
const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 3 + 1);
}
</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>