<template>
  <div class="list-group">
    <div class="list-group-item" v-for="(val, index) in list" :key="index">
      {{ val }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  list: (string | number | boolean)[];
}>();
</script>
