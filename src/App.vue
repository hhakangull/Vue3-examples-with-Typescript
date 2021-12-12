<template>
  <div class="container py-5">
    <h1 class="mt-5">ANA SAYFA</h1>
    <h2>APP VUE HOME Component İşlemleri</h2>
    <hr />
    <vierone-component>
      <template #header>hepsiburada rezaleti</template>
      <template #body>Merhabalar bu veri ana vue den geldi</template>

      <template #footer>yazar: vierone 1 saat önce</template>
    </vierone-component>
    <hr />
  </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import VieroneComponent from './components/Vierone.vue';



</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>