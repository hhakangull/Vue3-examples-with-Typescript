<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";

</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  font-family: 'Bree Serif', serif;
}
#main {
  margin: 30px;
  padding: 30px;
}
</style>
