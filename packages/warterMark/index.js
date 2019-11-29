
const watermark = {}

// 设置水印的属性
const setWatermark = (str, idName, styleCss) => {
  const id = 'water-mark-js' // 给一个ID

  if (document.getElementById(idName) === null) {
    return false
  }
  // 避免重复加载水印，只加载一次
  if (document.getElementById(id) !== null) {
    return id
  }

  const can = document.createElement('canvas') // 创建canvas
  can.width = styleCss ? styleCss.width || 150 : 150 // 每一个小水印宽度
  can.height = styleCss ? styleCss.height || 120 : 120 // 每一个小水印高度

  const cans = can.getContext('2d') // 2d绘画
  const rotate = styleCss ? styleCss.rotate || -20 : -20
  cans.rotate(rotate * Math.PI / 180) // 水印旋转

  cans.font = `${styleCss ? styleCss.fontSize || 20 : 20}px Vedana` // 字体
  cans.fillStyle = `${styleCss ? styleCss.fillStyle || 'rgba(200, 200, 200, 0.20)' : 'rgba(200, 200, 200, 0.20)'}` // 设置填充绘画的颜色、渐变或者模式
  cans.textAlign = `left` // 设置文本内容的当前对齐方式
  cans.textBaseline = 'Middle' // 设置在绘制文本时使用的当前文本基线
  cans.fillText(str, can.width / 3, can.height / 2) // 在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）

  const div = document.createElement('div') // 创建整一块节点div 放置所有水印
  div.id = id // id
  const style = {
    pointerEvents: 'none', // 鼠标事件取消 不去影响其他页面的点击
    top: '100px', // top
    position: 'fixed', // 定位
    zIndex: '99', // 层级
    width: document.getElementById(idName).clientWidth + 'px', // div 宽度
    height: document.getElementById(idName).clientHeight + 'px', // div 高度
    background: 'url(' + can.toDataURL('image/png') + ') left top repeat' // canval变成背景 并且铺满
  }
  for (const key in style) {
    div.style[key] = style[key] // 追加属性
  }

  document.getElementById(idName).appendChild(div) // 追加节点
  return [id, style]
}

// 该方法只允许调用一次
watermark.set = (str, idName, styleCss) => {
  const dom = setWatermark(str, idName, styleCss)
  if (!dom) {
    return false
  }
  const id = dom[0]
  const style = dom[1]
  const sI = setInterval(() => {
    if (document.getElementById(idName) === null) {
      clearInterval(sI)
    }
    // 防止被人通过控制台删除，定时检查是否存在水印
    if (document.getElementById(id) === null) {
      setWatermark(str, idName, styleCss)
    } else {
      // 防止别人通过控制台设置css样式修改而复制页面
      document.getElementById(id).style = ''
      for (const key in style) {
        document.getElementById(id).style[key] = style[key] // 恢复样式
      }
      // 防止别人通过控制台设置hidden element或者添加class
      document.getElementById(id).className = ''
    }
  }, 1000)
  window.addEventListener('resize', () => { // 执行
    // 屏幕缩小放大时，重新获取高度
    style.width = document.getElementById(idName).clientWidth + 'px'
    style.height = document.getElementById(idName).clientHeight + 'px'
  })
}

export default watermark
