<template>
  <div class="main">
    <button class="ll-5 btn btn-primary" @click="componentEkle">
      Component Ekle
    </button>
    <component v-for="comp in Componentlar" :is="comp" />
  </div>
</template>

<script lang="ts" setup>
import Text from "./components/Text.vue";
import { ref, reactive, markRaw } from "vue";
const aktifMi = ref(false);

const Componentlar = reactive([markRaw(Text)]);

const componentEkle = () => {
  Componentlar.push(markRaw(Text))
}
</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
  padding: 15%;
}
</style>
