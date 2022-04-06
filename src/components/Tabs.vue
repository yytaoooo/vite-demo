<template>
  <div class="P-Tabs">
    <div @click="change('/')">首页</div>
    <div @click="change('/my')">我的</div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
function change(param) {
  console.log(router, route);
  router.push(param);
}
</script>

<style lang="less" scoped>
.P-Tabs {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  background-color: lightgreen;
}
</style>