<template>
  <div class="main">
    <TabView :current-tab-index="currentTabIndex"/>
    <BottomBar @tab-change="changeTab($event)" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BottomBar from "./components/BottomBar.vue";
import TabView from "./components/TabView.vue";

const currentTabIndex  = ref(0)

const changeTab = (index: number) => {
  currentTabIndex.value = index;
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
