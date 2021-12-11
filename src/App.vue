<template>
  <div @scroll.passive
   @click.self="writeToConsole"
  class="container text-center py-5">
    <h3 class="mt-5">ANA SAYFA</h3>
    <!--Event Modifiers-->   
    <button
    class="btn btn-primary">Hello</button>

    <form  @submit.prevent action="submit"> <hr>
    <button @click="writeConsole('Hello World')">Hi</button> <hr>
    <button @click.passive="writeConsole('Hello World')">Hi</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const writeConsole = (str: string) => {
  console.log(str)
}
const writeToConsole = ()=> {
  console.log("Clicked")
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>