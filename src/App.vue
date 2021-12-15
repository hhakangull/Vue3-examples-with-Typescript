<template>
  <div class="main">
    <button @click="num++" class="btn btn-primary">Click Me</button>
    <div class="h1 mt-3">{{ num }}</div>

    <button @click="input">Yazı Gir</button>
    <div>{{ mesaj }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, reactive, watchEffect } from 'vue'
const num = ref(0);
const mesaj = ref('test');

const input = () => {
  const text = prompt()!;
  mesaj.value = text;
};

const stopWatcher = watchEffect(() => {
  if (num.value < 10) {
    console.log(num.value)
    // stopWatcher();
  }
}, {
  onTrigger: () => {
    if(num.value === 10) {
      setTimeout(() => {
      stopWatcher();  
      }, 1);
      
    }
    // stopWatcher();
  }
});

// watchEffect(() => {
//   // değer değişti zaman devreye giriyor.
//   console.log(num.value)
// })

// watch([num, mesaj], (newValues, oldValues)=> {
//   // console.log("Num Değişti Yeni Değeri :" + num.value)
//   // console log old value
//   // console.log("Eski Değeri :" + oldValue)
//   // console.log("Yeni Değeri :" + newValue)
//   console.log({oldValues, newValues})
// }, {
//   immediate: true,
//   onTrack: () => console.log("onTrack Çalıştı"),
//   onTrigger: () => console.log("onTrigger Çalıştı")
// }) 

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
  padding: 15%;
}
</style>
