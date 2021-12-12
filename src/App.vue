<template>
  <div class="container text-center py-5">
    <h3 class="mt-5">ANA SAYFA</h3>
    <input :value="msg" type="text" @input="makeEqual" />
    <hr />
    <input type="text" v-model="msg" />
    <hr />
    msg: {{ msg }}
    <hr />
    <div style="white-space: pre-wrap;">{{ text }}</div>
    <textarea v-model="text"></textarea>
    <hr />
    {{ checkbox }}
    <br />
    Araba:
    <input value="araba" type="checkbox" v-model="checkbox" />
    Motor:
    <input value="motor" type="checkbox" v-model="checkbox" />
    Kamyonet:
    <input value="kamyonet" type="checkbox" v-model="checkbox" />
  </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
const msg = ref('Bir Değer Giriniz');
const text = ref('');
const checkbox: Ref<String[]> = ref([]);
function makeEqual(e: KeyboardEvent) {
  if (e.currentTarget instanceof HTMLInputElement) {
    return msg.value = e.currentTarget.value;
  } else {
    return msg.value;
  }
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>