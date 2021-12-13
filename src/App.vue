<template>
  <div class="mx-auto p-2" style="max-width: 600px">
    <div>
      <h1>{{ sayi }}</h1>
    </div>
    <h2>2x = {{ ikiKati }}</h2>
    <hr />
    <button class="btn btn-primary" @click="ikiKati += 10">Arttır</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const sayi = ref(0);

// const ikiKati = computed(() => {
//   console.log("Değer DEğişti")
//   return sayi.value * 2
// });
const ikiKati = computed({
  set(val: number) {
    sayi.value = val;
  },
  get() {
    return sayi.value * 2
  }
});
const ikiKatiFunc = () => {
  return sayi.value * 2;
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.buttonum {
  position: absolute;
}
</style>
