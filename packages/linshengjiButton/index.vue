<template>
  <div class="linshengji-button">
    <div class="btn-group">
      <a :class="'lsj-btn ' + type + ' ' + size">
        <slot></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'LinshengjiButton',
  props: {
    type: {
      type: String, // 按钮类型
      default: 'default'
    },
    size:{
      type: String, // 按钮大小
      default: ''
    }
  }
}
</script>

<style lang="scss">
.linshengji-button{
  display: inline-block;
  .lsj-btn {
    font-size: 14px;
    padding: 10px 18px;
    outline: none;
    border-radius: 4px;
    -webkit-transition: all .6s ease;
    transition: all .6s ease;
    position: relative;
    display: inline-block;
  }
  .btn-group{
    display: inline-block;
    border-radius: 4px;
    border: none;
  }
  a{
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  .lsj-btn:hover {
    background: #fff;
  }
  .lsj-btn:after, .lsj-btn:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    width: 0;
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
  }
  .lsj-btn:hover:after, .lsj-btn:hover:before {
    width: 100%;
    -webkit-transition: all .6s ease;
    transition: all .6s ease;
  }
  .lsj-btn:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  .default{
    color: #606266;
    background: #fff;
    border: 1px solid #606266;
  }
  .default:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  .warning{
    background: #e6a23c;
    color: #fff;
  }
  .warning:hover:after, .warning:hover:before {
    background: #e6a23c;
  }
  .warning:hover{
    color: #e6a23c;
  }

  .success{
    background: #67c23a;
    color: #fff;
  }
  .success:hover:after, .success:hover:before {
    background: #67c23a;
  }
  .success:hover{
    color: #67c23a;
  }

  .danger{
    background: #f56c6c;
    color: #fff;
  }
  .danger:hover:after, .danger:hover:before {
    background: #f56c6c;
  }
  .danger:hover{
    color: #f56c6c;
  }

  .primary{
    background: #409eff;
    color: #fff;
  }
  .primary:hover:after, .primary:hover:before {
    background: #409eff;
  }
  .primary:hover{
    color: #409eff;
  }
  .small{
    padding: 7px 13px;
  }
}
</style>