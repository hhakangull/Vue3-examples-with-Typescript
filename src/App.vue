<template>
  <div class="container py-5 text-center">
    <h1 class="mt-5">ANA SAYFA</h1>
    <h2>Template İşlemleri</h2>
    <h3>{{values}}</h3>
    <hr />
    <div>
      <p class="text-uppercase text-white   h2"
      :class="{ 'bg-primary': isFirst, 'bg-success': !isFirst }"
      >
      {{isFirst ? "Sitemize Hoşgeldiniz" : "Hoşgeldiniz"}}
      </p>
    </div>
    <hr />
    <button class="btn btn-block  w-50" 
    :class="{'btn-primary' : isFirst, 'btn-success': !isFirst}"
    @click="isFirst = !isFirst">{{ isFirst }}</button> <hr>
  <button class="btn btn-danger" @click="doIt">Değer Ver</button> <hr>

  </div>
  


</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
const values = ref('Hello World');
const num = ref(0);
const isFirst = ref(true);

const doIt =() =>  values.value = prompt('Değer Ver')!;


</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>