(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linshengji"] = factory();
	else
		root["linshengji"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9986");
/******/ })
/************************************************************************/
/******/ ({

/***/ "7d2e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0d8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_3_2_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_7_0_3_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_2_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9986":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.1.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"18043a26-vue-loader-template"}!./node_modules/_vue-loader@15.7.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./packages/code/code.vue?vue&type=template&id=ef82a452&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"linshengji-code"},[_c('div',{staticClass:"container"},[_c('div',{attrs:{"id":"captcha"}}),_c('div',{attrs:{"id":"msg"}})])])}]


// CONCATENATED MODULE: ./packages/code/code.vue?vue&type=template&id=ef82a452&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.2@vue-loader/lib??vue-loader-options!./packages/code/code.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var codevue_type_script_lang_js_ = ({
  name:'LinshengjiCode',
  props: {
    success: {
      type: Function,
      default: () => {}
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 150
    },
    title: {
      type: String,
      default: '向右滑动滑块填充拼图'
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.start()
  },
  methods: {
    resets() {
      // this.start()
      var div = document.getElementById('captcha')
      while (
        div.hasChildNodes() // 当div下还存在子节点时 循环继续
      ) {
        div.removeChild(div.firstChild)
      }
      this.start()
      this.success(false)
    },
    start() {
      const that = this;
      (function(window) {
        const l = 42 // 滑块边长
        const r = 10 // 滑块半径
        const w = that.width // canvas宽度
        const h = that.height // canvas高度
        const PI = Math.PI
        const L = l + r * 2 // 滑块实际边长
        function getRandomNumberByRange(start, end) {
          return Math.round(Math.random() * (end - start) + start)
        }
        function createCanvas(width, height) {
          const canvas = createElement('canvas')
          canvas.width = width
          canvas.height = height
          return canvas
        }
        function createImg(onload) {
          const img = createElement('img')
          img.crossOrigin = 'Anonymous'
          img.onload = onload
          img.onerror = () => {
            img.src = getRandomImg()
          }
          img.src = getRandomImg()
          return img
        }
        function createElement(tagName) {
          return document.createElement(tagName)
        }
        function addClass(tag, className) {
          tag.classList.add(className)
        }
        function removeClass(tag, className) {
          tag.classList.remove(className)
        }
        function getRandomImg() {
          const arr = [
            'https://picsum.photos/300/150/?image=1001',
            'https://picsum.photos/300/150/?image=1002',
            'https://picsum.photos/300/150/?image=1003',
            'https://picsum.photos/300/150/?image=1004',
            'https://picsum.photos/300/150/?image=1005',
            'https://picsum.photos/300/150/?image=1006'
          ]
          // let i =
          const i = Math.floor(Math.random() * 6)
          // console.log("https://picsum.photos/300/150/?image=" +
          //     getRandomNumberByRange(0, 1084))
          return arr[i]
        }
        function draw(ctx, operation, x, y) {
          // 绘制空白的图形区域
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + l / 2, y)
          ctx.arc(x + l / 2, y - r + 2, r, 0, 2 * PI)
          ctx.lineTo(x + l / 2, y)
          ctx.lineTo(x + l, y)
          ctx.lineTo(x + l, y + l / 2)
          ctx.arc(x + l + r - 2, y + l / 2, r, 0, 2 * PI)
          ctx.lineTo(x + l, y + l / 2)
          ctx.lineTo(x + l, y + l)
          ctx.lineTo(x, y + l)
          ctx.lineTo(x, y)
          ctx.fillStyle = '#fff'
          ctx[operation]()
          ctx.beginPath()
          ctx.arc(x, y + l / 2, r, 1.5 * PI, 0.5 * PI)
          // 画布重叠
          ctx.globalCompositeOperation = 'xor'
          ctx.fill()
        }
        function sum(x, y) {
          return x + y
        }
        function square(x) {
          return x * x
        }
        class jigsaw {
          constructor({ el, onSuccess, onFail, onRefresh }) {
            this.el = el
            this.onSuccess = onSuccess
            this.onFail = onFail
            this.onRefresh = onRefresh
          }
          init() {
            this.initDOM()
            this.initImg()
            this.draw()
            this.bindEvents()
          }
          initDOM() {
            const canvas = createCanvas(w, h) // 画布
            const block = canvas.cloneNode(true) // 滑块
            const sliderContainer = createElement('div')
            const refreshIcon = createElement('div')
            const sliderMask = createElement('div')
            const slider = createElement('div')
            const sliderIcon = createElement('span')
            const text = createElement('span')
            const codeY = document.getElementsByClassName('linshengji-code')[0]
            codeY.style.cssText = `width:${that.width}px;position: relative`
            block.className = 'block'
            sliderContainer.className = 'sliderContainer'
            sliderContainer.style.cssText = `width:${that.width}px`
            refreshIcon.className = 'refreshIcon'
            sliderMask.className = 'sliderMask'
            slider.className = 'slider'
            sliderIcon.className = 'sliderIcon'
            text.innerHTML = that.title
            text.className = 'sliderText'
            const el = this.el
            el.appendChild(canvas)
            el.appendChild(refreshIcon)
            el.appendChild(block)
            slider.appendChild(sliderIcon)
            sliderMask.appendChild(slider)
            sliderContainer.appendChild(sliderMask)
            sliderContainer.appendChild(text)
            el.appendChild(sliderContainer)
            Object.assign(this, {
              canvas,
              block,
              sliderContainer,
              refreshIcon,
              slider,
              sliderMask,
              sliderIcon,
              text,
              canvasCtx: canvas.getContext('2d'),
              blockCtx: block.getContext('2d')
            })
          }
          initImg() {
            const img = createImg(() => {
              this.canvasCtx.drawImage(img, 0, 0, w, h)
              this.blockCtx.drawImage(img, 0, 0, w, h)
              const y = this.y - r * 2 + 2
              const ImageData = this.blockCtx.getImageData(
                this.x,
                y,
                L,
                L
              )
              this.block.width = L
              this.blockCtx.putImageData(ImageData, 0, y) // 复制某一块画布
            })
            this.img = img
          }
          draw() {
            // 随机创建滑块的位置
            this.x = getRandomNumberByRange(L + 10, w - (L + 10))
            this.y = getRandomNumberByRange(
              10 + r * 2,
              h - (L + 10)
            )
            // console.log(this.x)  //x轴坐标
            draw(this.canvasCtx, 'fill', this.x, this.y)
            draw(this.blockCtx, 'clip', this.x, this.y)
          }
          clean() {
            this.canvasCtx.clearRect(0, 0, w, h)
            this.blockCtx.clearRect(0, 0, w, h)
            this.block.width = w
          }
          bindEvents() {
            this.el.onselectstart = () => false
            this.refreshIcon.onclick = () => {
              this.reset()
              typeof this.onRefresh === 'function' &&
                                this.onRefresh()
            }
            let originX = ''
            let originY = ''
            const trail = []
            let isMouseDown = false
            this.slider.addEventListener('mousedown', function(e) {
              // eslint-disable-next-line no-sequences
              (originX = e.x), (originY = e.y)
              isMouseDown = true
            })
            document.addEventListener('mousemove', e => {
              if (!isMouseDown) return false
              const moveX = e.x - originX
              const moveY = e.y - originY
              if (moveX < 0 || moveX + 38 >= w) return false
              this.slider.style.left = moveX + 'px'
              var blockLeft = (w - 40 - 20) / (w - 40) * moveX
              this.block.style.left = blockLeft + 'px'
              addClass(
                this.sliderContainer,
                'sliderContainer_active'
              )
              this.sliderMask.style.width = moveX + 'px'
              trail.push(moveY)
            })
            document.addEventListener('mouseup', e => {
              if (!isMouseDown) return false
              isMouseDown = false
              if (e.x === originX) return false
              removeClass(
                this.sliderContainer,
                'sliderContainer_active'
              )
              this.trail = trail
              const { spliced, TuringTest } = this.verify()
              if (spliced) {
                if (TuringTest) {
                  addClass(
                    this.sliderContainer,
                    'sliderContainer_success'
                  )
                  typeof this.onSuccess === 'function' &&
                                        this.onSuccess()
                } else {
                  addClass(
                    this.sliderContainer,
                    'sliderContainer_fail'
                  )
                  this.text.innerHTML = '再试一次'
                  this.reset()
                }
              } else {
                addClass(
                  this.sliderContainer,
                  'sliderContainer_fail'
                )
                typeof this.onFail === 'function' &&
                                    this.onFail()
                setTimeout(() => {
                  this.reset()
                }, 1000)
              }
            })
          }
          verify() {
            const arr = this.trail // 拖动时y轴的移动距离
            const average = arr.reduce(sum) / arr.length // 平均值
            const deviations = arr.map(x => x - average) // 偏差数组
            const stddev = Math.sqrt(
              deviations.map(square).reduce(sum) / arr.length
            ) // 标准差
            const left = parseInt(this.block.style.left)
            return {
              spliced: Math.abs(left - this.x) < 10,
              TuringTest: average !== stddev // 只是简单的验证拖动轨迹，相等时一般为0，表示可能非人为操作
            }
          }
          reset() {
            this.sliderContainer.className = 'sliderContainer'
            this.slider.style.left = 0
            this.block.style.left = 0
            this.sliderMask.style.width = 0
            this.clean()
            this.img.src = getRandomImg()
            this.draw()
          }
        }
        window.jigsaw = {
          init: function(opts) {
            // eslint-disable-next-line new-cap
            return new jigsaw(opts).init()
          },
          reset: function(opts) {
            // eslint-disable-next-line new-cap
            return new jigsaw(opts).reset()
          }
        }
      })(window)
      // eslint-disable-next-line no-undef
      jigsaw.init({
        el: document.getElementById('captcha'),
        onSuccess: function() {
          that.success(true)
        },
        onFail: cleanMsg,
        onRefresh: cleanMsg
      })
      function cleanMsg() {
        document.getElementById('msg').innerHTML = ''
        that.success(false)
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/code/code.vue?vue&type=script&lang=js&
 /* harmony default export */ var code_codevue_type_script_lang_js_ = (codevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/code/code.vue?vue&type=style&index=0&lang=scss&
var codevue_type_style_index_0_lang_scss_ = __webpack_require__("7d2e");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.2@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/code/code.vue






/* normalize component */

var component = normalizeComponent(
  code_codevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var code = (component.exports);
// CONCATENATED MODULE: ./packages/code/index.js


// 为组件提供 install 安装方法，供按需引入
code.install = function (Vue) {
  Vue.component(code.name, code)
}

// 默认导出组件
/* harmony default export */ var packages_code = (code);
// CONCATENATED MODULE: ./packages/warterMark/index.js

const watermark = {}

// 设置水印的属性
const setWatermark = (str, idName) => {
  const id = 'water-mark-js' // 给一个ID

  if (document.getElementById(idName) === null) {
    return false
  }
  // 避免重复加载水印，只加载一次
  if (document.getElementById(id) !== null) {
    return id
  }

  const can = document.createElement('canvas') // 创建canvas
  can.width = 150 // 每一个小水印宽度
  can.height = 120 // 每一个小水印高度

  const cans = can.getContext('2d') // 2d绘画
  cans.rotate(-20 * Math.PI / 180) // 水印旋转
  cans.font = '20px Vedana' // 字体
  cans.fillStyle = 'rgba(200, 200, 200, 0.20)' // 设置填充绘画的颜色、渐变或者模式
  cans.textAlign = 'left' // 设置文本内容的当前对齐方式
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
watermark.set = (str, idName) => {
  const dom = setWatermark(str, idName)
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
      setWatermark(str, idName)
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
  window.onresize = () => {
    // 屏幕变化进行重绘
    setWatermark(str, idName)
  }
}

/* harmony default export */ var warterMark = (watermark);

// CONCATENATED MODULE: ./packages/index.js



// 存储组件列表
const components = [packages_code];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
});


// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.1.1@@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport LinshengjiCode */__webpack_require__.d(__webpack_exports__, "LinshengjiCode", function() { return packages_code; });
/* concated harmony reexport warterMark */__webpack_require__.d(__webpack_exports__, "warterMark", function() { return warterMark; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f0d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
});
//# sourceMappingURL=linshengji.umd.js.map