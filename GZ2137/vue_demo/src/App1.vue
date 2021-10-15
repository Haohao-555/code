<!--
 * @Date: 2021-10-15 15:24:51
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue_demo\src\App1.vue
-->
<template>
  <div id="app">
    <test1></test1>
    <test2></test2> 
    <test3></test3> 
    <test4></test4>
  </div>
</template>

<script>

import test1 from './components/day01/test1'
import test2 from './components/day01/test2'
import test3 from './components/day01/test3'
import test4 from './components/day01/test4'
export default {
  name: 'App',
  components: {
    test1,
    test2,
    test3,
    test4,
  }
}
</script>

