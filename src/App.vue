<template>
  <div class="container py-5 text-center">
    <h1 class="mt-5">ANA SAYFA</h1>
    <h2>APP VUE HOME Component İşlemleri</h2> <hr>
    <vierone-component class="text-danger" />
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