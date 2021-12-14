<template>
  <div id="myElement" class="main">
    <!--Button class btn btn-primary  ClickEvent  -->
    <h2 ref="myH2" :key="myKey" 
    @click="nextTickFunc"
    >{{ myKey }}</h2>
    <br />
    <!-- <button class="btn btn-primary" @click="myKey = Math.random()">Click Me</button> -->
    <!-- <button class="btn btn-primary" @click="nextTickFunc">Click me</button> -->
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, ref, nextTick, Ref } from 'vue';

const myKey = ref(3);
const myH2 = ref<HTMLElement | null>(null);

onBeforeMount(() => {
  // ... dom öncesinde çalışan life cycle hook
  console.log('before mount worked');
  // console.log(document.getElementById('myElement'));
  console.log({ myH2 });
});

onMounted(() => {
  // ... dom sonrasında çalışan life cycle hook
  console.log('on mounted worked');
  // console.log(document.getElementById('myElement'));
  // console.log({ myH2 });
  if(myH2 instanceof HTMLElement) {
    
    myH2.style.color = 'red';
    myH2.style.fontSize = '50px';
    myH2.innerHTML = 'on mounted worked';

  

  }

});

onUpdated(() => {
  // ... dom güncellendiğinde çalışan life cycle hook
  console.log('on updated worked');
  console.log("component güncellendi");
  console.log(myKey.value);

});

const nextTickFunc = async () => {
  myKey.value = Math.random();
  await nextTick();
  myKey.value = Math.random();
  console.log("nextTickFunc");
}


</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
  // height: 100vh;
  // width: 100%;
  margin: 50px;

  // flex-direction: column;
}
</style>
