<template>
  <div id="main">
    <HomeVue v-if="pageType == 'home'" />
    <AboutVue v-else-if="pageType == 'about'"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue";
const AboutVue = defineAsyncComponent(()=> import ('./components/About.vue'));
const HomeVue = defineAsyncComponent(()=> import ('./components/Home.vue'));


const pageType = ref("home" as "home" | "about");

if (window.location.pathname.includes("about")) {
  pageType.value = "about";
}
</script>

<style>
#main {
  margin: 30px;
  padding: 30px;
}
</style>
