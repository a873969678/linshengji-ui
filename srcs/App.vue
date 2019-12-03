<template>
  <div id="water-mark">
        <div style="width:15%;float:left;" class="left-menu">
          <h3>开发指南</h3>
          <p><a href="#组件库下载">组件库下载</a></p>
          <p><a href="#全局引用组件">全局引用组件</a></p>
          <h3>组件</h3>
          <p><a href="#验证码">拖拽验证码</a></p>
          <p><a href="#button">Button</a></p>
          <h3>封装方法</h3>
          <p><a href="#水印">水印</a></p>
          <h3>链接</h3>
          <p><a href="https://github.com/a873969678/linshengji-ui">git仓库地址</a></p>
        </div>
        <div style="width:75%;float:left;padding:0 10px" class="right-menu">
          <div id="组件库下载">
    
            <h2>组件库下载</h2>
            <p class="hljs">cnpm i linshengji-ui -S</p>
            <p class="tip">我们建议使用 CDN 引入 linshengji-ui 的用户在链接地址上锁定版本，以免将来 linshengji-ui 升级时受到非兼容性更新的影响</p>
          </div>
          <p style="border-bottom: 1px solid #dcdfe6;height:1px"></p>
          <div id="全局引用组件">
            <h2>全局引用组件</h2>
            <p>main.js文件中</p>
            <div class="hljs">
              <p>import linshengjiUI from 'linshengji-ui' </p>
              <p>import 'linshengji-ui/lib/linshengji.css' </p>
              <p>Vue.use(linshengjiUI) </p>
            </div>
          </div>
          <p style="border-bottom: 1px solid #dcdfe6;height:1px"></p>
          <!-- 验证码 -->
          <lsjcode /> 
          <p style="border-bottom: 1px solid #dcdfe6;height:1px"></p>
          <lsjButtonDoC />
          <p style="border-bottom: 1px solid #dcdfe6;height:1px"></p>
          <!-- 水印 -->
          <warterMark />
        </div>
      </div>
</template>

<script>
import lsjcode from './components/lsjcode.vue'
import warterMark from './components/warterMark.vue'
import lsjButtonDoC from './components/lsjButtonDoC.vue'
export default {
  components: {
    lsjcode,
    warterMark,
    lsjButtonDoC
  },
  data() {
    return {

    }
  },
  mounted() {
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
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
    position: fixed;
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
    margin-left: 15%;
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

