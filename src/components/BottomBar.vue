<template>
   <div class="w-100 d-flex flex-nowrap align-items-center bottom-bar">
      <template v-for="(icon,index) in ['home', 'album', 'whatshot']" :key="icon">
         <span
            :class="{active: activeTabIndex == index}"
            class="material-icons"
            @click="emitTabChange(index)"
         >{{ icon }}</span>
      </template>
   </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const activeTabIndex = ref(0);
const emit = defineEmits({
   'tab-change': (index: number) => true
});

const emitTabChange = (index: number) => {
   emit('tab-change', index);
   activeTabIndex.value = index;
}
</script>

<style scoped lang="scss">
.bottom-bar {
   height: 75px;
   background-color: rgb(38, 46, 155);
   justify-content: space-evenly;
}
.material-icons {
   color: #fff;
   font-size: 40px;
   height: 100%;
   display: inline-flex;
   align-items: center;
   width: 60px;
   justify-content: center;
   &:active {
      color: rgb(228, 156, 74);
   }
}
// .material-icons:hover {
//    background-color: #e3e4e3;
//    color: #666;
//    border-radius: 10px;
// }
// .material-icons:active {
//    background-color: #b0b6b0;
//    box-shadow: 0 5px #666;
//    transform: translateY(4px);
// }
</style>

