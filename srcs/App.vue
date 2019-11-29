<template>
  <div id="app">
    <LinshengjiCode :success="success" />
  </div>
</template>

<script>
import { LinshengjiCode } from 'linshengji-ui'
import { warterMark } from 'linshengji-ui'
import 'linshengji-ui/lib/linshengji.css' // npm包调试
export default {
  components: {
    LinshengjiCode
  },
  data() {
    return {

    }
  },
  mounted() {
    warterMark.set('水印', 'app')
  },
  methods: {
    success(type) {
      // type true 成功
      //      false 失败
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

