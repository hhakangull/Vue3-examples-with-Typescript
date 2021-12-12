<template inherit-attrs="true">
   
      <h1>Vierone.vue Dosyasıdır</h1>
      <hr />
      <div v-bind="$attrs">
       {{ msg }} -- {{$attrs}}
      </div>
      <hr />
      <button class="btn btn-primary" @click="testFunction">Tıkla Bana</button>
 
</template>

<script setup lang="ts">
import { ref } from 'vue';
const msg = ref("bu vierone componentinen bir değerdir");
const testFunction = () => { console.log("Vierone Componentineden merhabalar"); }


</script>