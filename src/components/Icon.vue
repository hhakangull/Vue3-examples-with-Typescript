<template>
   <span class="material-icons" style="font-size: 80px;">{{ type }}</span>
</template>


<script setup lang="ts">

const props = defineProps<{
   type: 'play_circle' | 'paused' | 'delete'
}>();



</script>