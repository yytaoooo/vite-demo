<script setup>
import { ref } from "vue";
import imgUrl from "./images/justtest.png";

defineProps({
  msg: String,
});

const count = ref(0);
console.log("px", window.innerWidth, window.innerHeight);
</script>

<template>
  <h1>{{ msg }}</h1>
  <img :src="imgUrl" />
  <h3>just test!!!!!</h3>
  <div class="par">
    <div class="par_child">test less</div>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="less">
a {
  color: #42b983;
}
.par {
  &_child {
    background-color: lightblue;
  }
}
</style>
