<template>
  <div class="main">
  <div :class="{active: activeIndex == 0, notActive: activeIndex != 0}" 
  
  @click="activeIndex = 0" style="background-color: red; flex:1"></div>  
  <div :class="{active: activeIndex == 1, notActive: activeIndex != 1}" 
  @click="activeIndex = 1" style="background-color: orange; flex:1"></div>
  <div :class="{active: activeIndex == 2, notActive: activeIndex != 2}" 
  @click="activeIndex = 2" style="background-color: purple; flex:1"></div>
  
  </div>
</template>

<script setup lang="ts">
import { ref,Ref } from 'vue';

// activeIndex is ref type null or number
let activeIndex = ref(-1)



</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.active {
  animation: active .5s infinite;
}
.notActive {
   animation: active .5s infinite;
}

@keyframes active {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes notActive {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.main {
  background-color: black;
  // height: 100vh;
  // width: 100%;
  margin: 50px;
  display: flex;
  align-items: stretch;
  
  // flex-direction: column;
  width: 600px;
  height: 300px;
}
</style>
