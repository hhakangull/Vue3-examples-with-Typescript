<template>
  <Icon :type="'play_circle'" />
  <Icon :type="'paused'" />
  <Icon :type="'delete'" />
  <div class="mx-auto w-50">
    <List :list="[true, 15, 20, 'Merhabalar', 'kanala', 'hoşgeldiniz', 'Vue3', 'dersleridir']" />
  </div>
</template>
<script setup lang="ts">
import Icon from './components/Icon.vue';
import List from './components/List.vue';

</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.buttonum {
  position: absolute;
}
</style>