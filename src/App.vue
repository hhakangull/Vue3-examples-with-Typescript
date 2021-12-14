<template>
  <div class="main">
    <MyComponentVue />
    <br>
    <button @click="changeName">İsmi Değiştir</button>
    
    
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import MyComponentVue from "./components/MyComponent.vue";
import store from './store/store';





// objecler için reactive kullanılır.
const person = reactive({
  isim : 'Hakan',
  soyad: 'GUL',
  yas: 25
})
const changeName = () => {
  const input = prompt("Yeni İsmi Giriniz");
  store.isim = input!;
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.buttonum {
  position: absolute;
}
body {
  margin: 0;
  padding: 0;
}
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
