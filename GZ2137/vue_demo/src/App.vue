<!--
 * @Date: 2021-10-15 15:24:51
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue_demo\src\App.vue
-->
<template>
  <div id="app">
      <prograss :songId="445124784"></prograss>
  </div>
</template>

<script>
import prograss from "./components/prograss";

export default {
  name: 'App',
  components: {
   prograss,
  }
}
</script>

