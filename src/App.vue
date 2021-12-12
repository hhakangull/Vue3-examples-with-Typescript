<template>
  <div class="mx-auto p-2" style="max-width: 600px">
    <div v-if="toggle" class="alert alert-danger" role="alert">
      Lütfen Giriş Yapınız!!!      
    </div>

    <ToggleButton @toggle="toggleIt($event)">Toggle</ToggleButton>
  </div>
</template>

<script lang="ts">
import ToggleButton from "./components/ToggleButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      toggle: true,
    };
  },
  components: {
    ToggleButton,
  },
  methods: {
    toggleIt(value: boolean) {
      this.toggle = value;
    },
  },
  
});
</script>

<style lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
.buttonum {
  position: absolute;
}
</style>
