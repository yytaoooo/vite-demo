<template>
  <div class="C-List" @scroll="onScroll()">
    <div class="C-ListItem" v-for="data in datas" :key="data.id">
      {{ data.id }}
    </div>
    <div class="C-ListEmpty">暂无更多内容～</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      ele: null,
    };
  },
  mounted() {
    const listElement = document.getElementsByClassName("C-List")[0];
    this.ele = listElement;
  },
  methods: {
    onScroll: function () {
      if (this.isBottom()) {
        console.log("isBottom");
        if (this.datas.length == 5) {
          this.datas.push({ id: 6 });
        }
      }
    },
    isBottom: function () {
      console.log("可视高度", this.ele.offsetHeight);
      console.log("滚动距离", this.ele.scrollTop);
      console.log("实际距离", this.ele.scrollHeight);
      if (this.ele.offsetHeight + this.ele.scrollTop >= this.ele.scrollHeight) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="less" scoped>
.C-List {
  height: 100%;
  overflow: auto;
  &Item {
    height: 200px;
    background-color: lightcoral;
    margin-bottom: 30px;
  }
  &Empty {
    text-align: center;
  }
}
</style>