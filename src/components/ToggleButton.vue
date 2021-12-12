<template>
   <button @click="emitEvent" class="btn btn-primary">Toggle</button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
const toggle = ref(true);
const emit = defineEmits({
   toggle: (value: boolean) => {
      if (typeof value != 'boolean') {
         return false;
      } else {
         return true;
      }
   },
});

const emitEvent = () => {
   toggle.value = !toggle.value
   emit('toggle', toggle.value)
};

onMounted(() => {
   emit('toggle', true)
})

</script>