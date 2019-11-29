# 组件库
<p>1.cnpm i linshengji-ui -S</p >

# 全局引用组件
<p>main.js文件中</p>
<p>import linshengjiUI from 'linshengji-ui' </p>
<p>import 'linshengji-ui/lib/linshengji.css' </p>
<p>Vue.use(linshengjiUI) </p>

## VUE文件中
<p><LinshengjiCode /></p >


# 按需引入

# 验证码插件

## 使用方法
<div>
 <p>import { LinshengjiCode } from 'linshengji-ui'</p >
 <p>import 'linshengji-ui/lib/linshengji.css'</p >
 <p><LinshengjiCode /></p >
</div>
<img src="https://raw.githubusercontent.com/a873969678/linshengji-code/master/src/assets/demo.png">

## 组件参数
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
    <td>宽度</th>
    <td>Number</th>
    <td>>200</th>
    <td>300</th>
    <td>--</th>
  </tr>
  <tr>
    <td>height</th>
    <td>高度</th>
    <td>Number</th>
    <td>>100</th>
    <td>150</th>
    <td>--</th>
  </tr>
   <tr>
    <td>title</th>
    <td>拖拽条中的文字</th>
    <td>String</th>
    <td>任意字符</th>
    <td>向右滑动滑块填充拼图</th>
    <td>--</th>
  </tr>
  <tr>
    <td>success</th>
    <td>回调函数</th>
    <td>Function(type)</th>
    <td>--</th>
    <td>--</th>
    <td>true为验证成功,false为失败</th>
  </tr>
</table>

# 水印插件
## 使用方法
<div>
 <p>import { warterMark } from 'linshengji-ui'</p >
 <p>mounted() {
    warterMark.set('水印', 'app')
  }</p >
</div>

## 方法参数 Param
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
    <td>name</th>
    <td>水印内容</th>
    <td>String</th>
    <td>任意</th>
    <td>--</th>
    <td>--</th>
  </tr>
  <tr>
    <td>idDom</th>
    <td>id节点</th>
    <td>String</th>
    <td>id名称</th>
    <td>--</th>
    <td>--</th>
  </tr>
</table>
