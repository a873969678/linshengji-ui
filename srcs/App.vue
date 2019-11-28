<template>
  <div>
    <LinshengjiCode :success="success" />
  </div>
</template>

<script>
import { LinshengjiCode } from 'lsj-code'
import 'lsj-code/lib/linshengji.css' // npm包调试
export default {
  components: {
    LinshengjiCode
  },
  data() {
    return {

    }
  },
  created() {

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

