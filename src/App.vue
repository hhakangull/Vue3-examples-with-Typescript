<template>
  <div id="main">
    <div class="content">
      <div class="item">
        <input @keydown.arrow-down="handleArrowDown" type="text" name="" id="" />
      </div>
      <div class="item py-2" v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const items = [...new Array(20).keys()];

function handleArrowDown() {
  console.log('handleArrowDown')
}

</script>

<style>
body{
  background-color: black;
  color: white;
}
#main {
  margin: 30px;
  padding: 30px;
}
.item{
  font-size: 24px;
}

</style>
