<template>
  <div class="container py-5 text-center">
    <h1 class="mt-5">ANA SAYFA</h1>
    <h2>Template İşlemleri</h2>
    <div class="ml-3">
      <p class="text-start" v-for="(value, index) in text" :key="index">
        {{ value }} :
        <span class="text-center">{{ index }}</span>
      </p>
    </div>
    <hr />
    <div class="ml-3">
      <p class="text-start" v-for="(value, index) in text2" :key="index">
        {{ value }} :
        <span class="text-center">{{ index }}</span>
      </p>
      <button @click="change">Change</button>
    </div>

    <div
      class="py-2 my-2"
      style="border: 1px solid black"
      v-for="(textValue,index) in text2"
      :key="index"
    >
      <p>{{ textValue.value }} : {{ index }}</p>
      <template v-if="textValue.array && Array.isArray(textValue.array)">
        <div v-for="(arrayValue,index2) in textValue.array" :key="index2">{{ arrayValue }}</div>
      </template>
    </div>

    <div v-for="(val,key,index) in myObj" :key="index">{{ key }} -- {{ val }} : {{index}}</div>

    <div :key=myKey> {{Math.random()}}
    </div>
    <button @click="myKey = Date.now()">Tıkla</button>

  </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
type CustomObject = {
  value: string;
  array?: string[];
}
const myKey: Ref<number> = ref(0);

const text = ref([
  "Selamlar",
  "Günaydın",
  "İyi Akşamlar",
  "İyi Geceler",
  "Kötü Haftasonları",
  "Kötü Çalışmalar",
  "İyi Çalışmalar"
]);

const myObj = {
  value: 'hello',
  number: 34298,
  text: "asdasdas"
}


const text2: Ref<CustomObject[]> = ref([
  { value: "Selamlar" },
  { value: "Günaydın", array: Array(5).fill('bu string x') },
  { value: "İyi Akşamlar" },
  { value: "İyi Geceler" },
  { value: "Kötü Haftasonları" },
  { value: "Kötü Çalışmalar" },
  { value: "İyi Çalışmalar" }
]);

const change = () => {
  let val = Number(prompt('Değer Gir')!);
  text2.value[val].value = Date.now().toLocaleString();
}

</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>