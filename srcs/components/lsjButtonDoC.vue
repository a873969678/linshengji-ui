<template>
  <div  id="button" >
   <h2>Button</h2>
   <h3>使用方法</h3>
    <div class="hljs">
      <p>import { LinshengjiButton } from 'linshengji-ui'</p>
      <p>import 'linshengji-ui/lib/linshengji.css'</p>
    </div>
   <h3>不同类型</h3>
   <div class="hljs">
      <p v-for="(item,index) in data" :key="index">{{item}}</p>
   </div>
   <LinshengjiButton>默认按钮</LinshengjiButton>
   <LinshengjiButton type='primary'>主要按钮</LinshengjiButton>
   <LinshengjiButton type='success'>成功按钮</LinshengjiButton>
   <LinshengjiButton type='warning'>信息按钮</LinshengjiButton>
   <LinshengjiButton type='danger'>警告按钮</LinshengjiButton>
   <h3>不同尺寸</h3>
   <div class="hljs">
      <p v-for="(item,index) in dataSize" :key="index">{{item}}</p>
   </div>
   <LinshengjiButton>警告按钮</LinshengjiButton>
   <LinshengjiButton size='small'>警告按钮</LinshengjiButton>
   <h3>组件参数</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>type</td>
        <td>类型</td>
        <td>String</td>
        <td>primary,success,warning,danger</td>
        <td>--</td>
        <td>--</td>
      </tr>
      <tr>
        <td>size</td>
        <td>尺寸</td>
        <td>String</td>
        <td>small</td>
        <td>--</td>
        <td>--</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { LinshengjiButton } from 'linshengji-ui'
import 'linshengji-ui/lib/linshengji.css'
export default {
  components:{
    LinshengjiButton
  },
  data() {
    return {
      data:[
        "<LinshengjiButton>默认按钮</LinshengjiButton>",
        "<LinshengjiButton type='primary'>主要按钮</LinshengjiButton>",
        "<LinshengjiButton type='success'>成功按钮</LinshengjiButton>",
        "<LinshengjiButton type='warning'>信息按钮</LinshengjiButton>",
        "<LinshengjiButton type='danger'>警告按钮</LinshengjiButton>"
      ],
      dataSize:[
        "<LinshengjiButton>警告按钮</LinshengjiButton>",
        "<LinshengjiButton size='small'>警告按钮</LinshengjiButton>"
      ]
    }
  },
  mounted() {
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .linshengji-button{
    margin: 5px;
  }
</style>

