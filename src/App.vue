<template>
  <div id="main" class="align-items-center" :style="`transform: translateX(${active * 100}%)`">
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrevious">önceki</button>
          <button @click="goNext">sonraki</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref(0);
function goNext() {
  if (active.value < 4) {
    active.value++;
  }
}

function goPrevious() {
  if (active.value > 0) {
    active.value--;
  }
}
</script>

<style scoped lang="scss">
@import "./assets/bootstrap.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: nowrap;
  transition: transform 0.5s ease-in-out;
}
.section-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  transition: transform 0.5s ease-in-out;
  flex-shrink: 0;
  .section {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    border-radius: 25px;
    border: 1px solid rgba(27, 27, 27, 0.144);
    box-shadow: 0px 0px 10px rgba(27, 27, 27, 0.156);
    flex-flow: column wrap;
    .content {
      height: 100%;
      width: 100%;
      flex: 1;
    }
    .button-area {
      height: 75px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 5px 25px;

      button {
        $blue: rgb(24, 100, 208);
        background-color: white;
        border: 1px solid $blue;
        color: $blue;
        font-weight: bold;
        padding: 8px 15px;
        margin-left: 15px;
        border-radius: 25px;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          color: white;
          background-color: $blue;
        }
      }
    }
  }
}
</style>
