<!--
 * @Date: 2021-10-15 15:28:22
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue_demo\src\components\day01\test1.vue
-->
<template>
  <div class="container">
    <h3>{{message}}</h3>

    <div class="item">
      <h2>v-model</h2>
      <input
        type="text"
        v-model="inputValue"
      > {{inputValue}}
    </div>

    <div class="item">
      <h2>v-bind</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "text1",
  data() {
    return {
      message: "案例: v-指令",
      inputValue: "",
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #333;
  padding: 10px 12px;
  .item {
    h2 {
      margin-top: 0px;
      padding-top: 0px;
    }
    border: 1px solid #333;
    padding: 10px 12px;
    margin-bottom: 12px;
  }
}
</style>