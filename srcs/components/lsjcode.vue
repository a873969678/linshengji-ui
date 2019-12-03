<template>
  <div id="验证码" class="lsjcode">
    <h2>拖拽验证码</h2>
    <h3>使用方法</h3>
    <div class="hljs">
      <p>import { LinshengjiCode } from 'linshengji-ui'</p>
      <p>import 'linshengji-ui/lib/linshengji.css'</p>
      <p>{{ data }}</p>
    </div>
    <p class="demo"><LinshengjiCode /></p>
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
        <td>width</th>
        </td><td>宽度</th>
        </td><td>Number</th>
        </td><td>>200</th>
        </td><td>300</th>
        </td><td>--</th>
        </td></tr>
      <tr>
        <td>height</th>
        </td><td>高度</th>
        </td><td>Number</th>
        </td><td>>100</th>
        </td><td>150</th>
        </td><td>--</th>
        </td></tr>
      <tr>
        <td>title</th>
        </td><td>拖拽条中的文字</th>
        </td><td>String</th>
        </td><td>任意字符</th>
        </td><td>向右滑动滑块填充拼图</th>
        </td><td>--</th>
        </td></tr>
      <tr>
        <td>success</th>
        </td><td>回调函数</th>
        </td><td>Function(type)</th>
        </td><td>--</th>
        </td><td>--</th>
        </td><td>true为验证成功,false为失败</th>
        </td></tr>
    </table>
  </div>
</template>

<script>
import { LinshengjiCode } from 'linshengji-ui'
import 'linshengji-ui/lib/linshengji.css' // npm包调试
export default {
  components: {
    LinshengjiCode
  },
  data() {
    return {
      data:'<LinshengjiCode />'
    }
  },
  methods: {
  }
}
</script>


  body{
    width:80%;
    margin: 0 auto;
  }
  #water-mark{
    zoom: 1;
    overflow: auto;
  }
  .left-menu{
    margin-top: 50px;
    height: 100%;
    overflow-x: auto;
  }
  .left-menu a{
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
  }
  .left-menu a:hover{
    color: #409eff;
  }
  .right-menu{
    margin-top: 50px;
    color: #1f2f3d;
  }
  .hljs {
    line-height: 1.8;
    font-family: Menlo,Monaco,Consolas,Courier,monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #fafafa;
    border: 1px solid #eaeefb;
    margin-bottom: 25px;
    border-radius: 4px;
    -webkit-font-smoothing: auto;
  }
  p{
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
  table td:first-child, table th:first-child {
    padding-left: 10px;
  }
  table th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
  }
  table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  table td,table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  table td {
    color: #606266;
  }
  .demo{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 10px;
  }
  </style>

