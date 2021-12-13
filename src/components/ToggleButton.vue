<template>
   <button @click="emitEvent" class="btn btn-primary">Toggle</button>
</template>


<!--script-- lang="ts">
import { h } from 'vue';

import { ref, onMounted, defineEmits, defineComponent } from 'vue'
export default defineComponent({
   emits: {
      toggle: (value: boolean) => true
   },
   setup() {
      const toggle = ref(true);
      const emit = defineEmits({
         toggle: (value: boolean) => true,
      })
      const emitEvent = () => {
         toggle.value = !toggle.value;
         context.emit('toggle', toggle.value)
      }

      onMounted(() => {
         emit('toggle', true)
      })

      return {
         ... $
      }

   },

   // data: () => ({
   //    toggle: true
   // }),
   // emits: {
   //    toggle: (value: boolean) => true
   // },
   // methods: {
   //    emitEvent() {
   //       this.toggle = !this.toggle;
   //       this.$emit('toggle', this.toggle)
   //    },
   // },
   // mounted() {
   //    this.$emit('toggle', true)
   // }

});

</!--script-->

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
});

</script>
