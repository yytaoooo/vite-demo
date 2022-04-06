<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import Tabs from "./components/Tabs.vue";
</script>

<template>
  <div class="P-Layout">
    <router-view></router-view>
  </div>
  <Tabs></Tabs>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.P-Layout {
  height: calc(100vh - 50px);
  margin-bottom: 50px;
}
</style>
