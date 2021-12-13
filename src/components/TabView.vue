<template>
   <div class="tabView">
      <Tab v-if="currentTabIndex === 0">1.Sekme</Tab>
      <Tab v-if="currentTabIndex === 1">2.Sekme</Tab>
      <Tab v-if="currentTabIndex === 2">3.Sekme</Tab>
   </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Tab from './Tab.vue';
const props = defineProps({
   currentTabIndex: {
      type: Number as () => number,
      default: 0
   }
})

</script>

<style lang="scss" scoped>
.tabView {
   height: 100%;
   align-items: center;
   justify-content: center;
   display: flex;
}
</style>