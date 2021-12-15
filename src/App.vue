<template>
  <div class="main">
    <Text v-if="aktifMi" /> <hr>
    <button
    @click="aktifMi = !aktifMi"
     class="btn btn-primary">Aktif et</button>
  </div>
</template>

<script lang="ts" setup>

import {ref, defineAsyncComponent} from 'vue';

const Text = defineAsyncComponent(() => import('./components/Text.vue'));

const aktifMi = ref(false);

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
  padding: 15%;
}
</style>
