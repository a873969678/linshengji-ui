<template>
<div>
    <div id="水印" class="warterMark">
      <h2>水印插件</h2>
      <div class="hljs">
        <p>案例见网站水印</p>
      </div>
      <h3>使用方法</h3>
      <div class="hljs">
        <p>import { warterMark } from 'linshengji-ui'</p>
        <p>mounted() {
          warterMark.set('水印', 'app', {fillStyle:'rgba(200, 200, 200, 0.20)'})
          }</p>
      </div>
      <h3>方法参数 Param</h3>
      <table>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
          <th>回调参数</th>
          <th>是否必传</th>
        </tr>
        <tr>
          <td>str</th>
          </td><td>水印内容</th>
          </td><td>String</th>
          </td><td>任意</th>
          </td><td>--</th>
          </td><td>--</th>
          </td><td>必传</th>
          </td></tr>
        <tr>
          <td>idName</th>
          </td><td>id节点</th>
          </td><td>String</th>
          </td><td>id名称</th>
          </td><td>--</th>
          </td><td>--</th>
          </td><td>必传</th>
          </td></tr>
        <tr>
          <td>styleCss</th>
          </td><td>额外参数</th>
          </td><td>JSON</th>
          </td><td>{width:'小水印宽度', height:'小水印高度' rotate:'旋转角度', fontSize:'字体大小', fillStyle:'字体填充颜色'}</th>
          </td><td>{width:150, height:120, rotate:-20, fontSize:20, fillStyle:'rgba(200, 200, 200, 0.20)'}</th>
          </td><td>--</th>
          </td><td>非必传</th>
          </td></tr>
      </table>
    </div>
  </div>
</template>

<script>
import { warterMark } from 'linshengji-ui'
export default {
  data() {
    return {

    }
  },
  mounted() {
    warterMark.set('linshengji-ui', 'water-mark')
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
  </style>

