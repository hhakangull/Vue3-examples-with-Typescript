<template>
  <div id="main">
  <Yaz :files="files" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Yaz from "./components/Yaz.vue";
import type { Tree } from "./components/Yaz.vue";
const files: Tree = [
  {
    type: "folder",
    name: "Merhaba",
    children: [
      {
        type: "file",
        name: "asdas.mp4",
      },
    ],
  },
  {
    type: "file",
    name: "tasdas.ts",
  },
];
</script>

<style>
#main {
  margin: 30px;
  padding: 30px;
}
</style>
