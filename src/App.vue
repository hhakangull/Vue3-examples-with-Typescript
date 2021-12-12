<template>
  <div class="container py-5">
    <h3 class="mt-5">ANA SAYFA</h3>
    <div class="col-sm-10">{{ values }}</div>
    <div>
      <div class="form-check">
        <input v-model="values" class="form-check-input" type="radio" value="araba" />
        <label class="form-check-label" for="gridRadios1">Araba</label>
      </div>
      <div class="form-check">
        <input v-model="values" class="form-check-input" type="radio" value="motor" />
        <label class="form-check-label" for="gridRadios2">Motor</label>
      </div>
      <div class="form-check">
        <input v-model="values" class="form-check-input" type="radio" value="kamyonet" />
        <label class="form-check-label" for="gridRadios2">Kamyonet</label>
      </div>
    </div>
    <div>{{ checkValues }}</div>
    <select v-model="checkValues" multiple class="custom-select mr-sm-2">
      <option value="Araba">Araba</option>
      <option value="Motor">Motor</option>
      <option value="Kamyonet">Kamyonet</option>
    </select> <hr>
    <select v-model="checkValuesMultiple" class="custom-select mr-sm-2">
      <option value="Araba">Araba</option>
      <option value="Motor">Motor</option>
      <option value="Kamyonet">Kamyonet</option>
    </select> <hr>
    <div>
    <input type="text" v-model.trim="valuesNormal"> <hr>
    <input type="number" v-model.number="num">  <hr>
    <input type="text" v-model.lazy="valuesNormal">
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue';
const values: Ref<String[]> = ref([]);
const checkValuesMultiple: Ref<String[]> = ref([]);
const checkValues = ref('');

const valuesNormal = ref('');
const num = ref(0);

</script>

<style lang="scss">
@import "./assets/bootstrap.css";

.buttonum {
  position: absolute;
}
</style>