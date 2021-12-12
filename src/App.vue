<template>
  <div class="mx-auto p-2" style="max-width: 600px;">
    <div v-if="toggle" class="alert alert-danger" role="alert">Lütfen Giriş Yapın</div>

    <!-- <button class="btn btn-primary" @click="toggle = !toggle">Toogle</button> -->
    <hr>
    <ToggleButton @toggle="toggle= $event" />
  </div>
</template>
<script setup lang="ts">
import ToggleButton from './components/ToggleButton.vue';
import { ref } from 'vue';
const toggle = ref(true)
</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.buttonum {
  position: absolute;
}
</style>