<template>
   <div class="card">
      <div class="card-element card-header h3 m-0 text-uppercase">
      <slot name="header"/>
      </div>
      <div class="card-element card-body">
      <slot name="body"/>
      </div>
      <div class="card-element card-footer small">
      <slot name="footer"/>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


</script>

<style lang="scss" scoped>
.card{
   border:1px solid rgb(173, 171, 171);
   box-shadow: 0px 0px 6px 1px rgb(190, 190, 190);
   border-radius: 10px;
   font-family: Arial, Helvetica, sans-serif;
   max-width: 500px;
   margin: auto;
}
.card-element {
   padding: 5px;
}
.card-header {
   text-align: center;
   border-bottom: 1px solid rgb(199, 199, 199);
   padding: 15px 10px;
}
.card-body{
   padding: 15px;
}
.card-footer{
   padding:15px
}
</style>