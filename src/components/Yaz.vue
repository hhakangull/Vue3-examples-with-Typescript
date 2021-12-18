<template>
  <div class="py-4">
    <template v-for="file in props.files">
      <template v-if="file.type === 'file'">
        <div class="py-1"><Icon name='people' /> : {{ file.name }}</div>
      </template>

      <template v-else>
        <div class="py-1"> <Icon name='folder' />{{ file.name }}</div>
        <div v-if="file.children.length > 0" class="px-4 py-1">
         <Yaz :files="file.children" />
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
export interface File {
  type: "file";
  name: string;
}
export interface Folder {
  type: "folder";
  name: string;
  children: (File | Folder)[];
}

export type Tree = (Folder | File)[];
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import Icon from "./Icon.vue";
const props = defineProps<{
  files: Tree;
}>();
</script>
