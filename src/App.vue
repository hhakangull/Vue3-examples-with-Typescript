<template>
  <div @scroll.passive class="container text-center py-5">
    <h3 class="mt-5">ANA SAYFA</h3>
    <!--Event Modifiers-->
    <button @click.self="writeToConsole1" class="btn btn-primary">Hello</button>
    <form @submit.prevent action="submit">
      <button class="btn btn-primary" @click.prevent.left="writeConsole('Hello World1')">Hi</button>
      <button class="btn btn-primary" @click.right="writeConsole('Hello World2')">Hi</button>
      <button class="btn btn-primary" @click.middle="writeConsole('Hello World3')">Hi</button>
      <hr />

      <input type="text" placeholder="KeyDown" @keydown="writeConsole('Tuşa Basıldı keydown')" />
      <hr />
      <input type="text" placeholder="KeyUp" @keyup.enter="writeConsole('Tuşa Basıldı keyup')" />
      <hr />
      <input type="text" placeholder="KeyPress" @keypress="writeConsole('Tuşa Basıldı keypress')" />
      <hr />
      <input
        type="text"
        placeholder="beforeInput"
        @beforeinput="writeConsole('Tuşa Basıldı beforeinput')"
      />
      <hr />
      <input
        type="text"
        placeholder="KeyDown.prevent.tab"
        @keydown.prevent.tab="writeConsole('Tuşa Basıldı beforeinput')"
      />
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const writeConsole = (str: string) => {
  // console.log(str)
  alert("Clicked " + str)
}
const writeToConsole1 = () => {
  // console.log("Clicked")
  alert("Clicked")
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>