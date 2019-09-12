/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + "." + {"1":"436c4ee2"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/demo/ShoppingCart/getCart.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 是一个Car  单例模式
var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    _classCallCheck(this, Cart);

    this.list = [];
  }

  _createClass(Cart, [{
    key: "add",
    value: function add(data) {
      this.list.push(data);
    }
  }, {
    key: "del",
    value: function del(id) {
      this.list = this.list.filter(function (item) {
        return !(item.id === id);
      });
    }
  }, {
    key: "getList",
    value: function getList() {
      return this.list.map(function (item) {
        return item.name;
      }).join('\n');
    }
  }]);

  return Cart;
}(); // 返回单例


var getCart = function () {
  // 闭包
  var instance;
  return function () {
    if (!instance) {
      instance = new Cart();
    }

    return instance;
  };
}();

/* harmony default export */ var ShoppingCart_getCart = (getCart);
// CONCATENATED MODULE: ./src/demo/ShoppingCart/shoppingCart.js
function shoppingCart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shoppingCart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shoppingCart_createClass(Constructor, protoProps, staticProps) { if (protoProps) shoppingCart_defineProperties(Constructor.prototype, protoProps); if (staticProps) shoppingCart_defineProperties(Constructor, staticProps); return Constructor; }



var shoppingCart_ShoppingCart =
/*#__PURE__*/
function () {
  function ShoppingCart(app, cart) {
    shoppingCart_classCallCheck(this, ShoppingCart);

    this.app = app;
    this.cart = ShoppingCart_getCart();
    this.$el = $('<div></div>').css({
      'padding-bottom': '10px',
      'border-bottom': '1px solid #ccc'
    });
  }

  shoppingCart_createClass(ShoppingCart, [{
    key: "initBtn",
    value: function initBtn() {
      var $btn = $('<button>show</button>');

      var _this = this;

      $btn.click(function () {
        _this.showCart();
      });
      this.$el.append($btn);
    }
  }, {
    key: "showCart",
    value: function showCart() {
      var list = this.cart.getList();
      alert(list);
    }
  }, {
    key: "render",
    value: function render() {
      this.app.$el.append(this.$el);
    }
  }, {
    key: "init",
    value: function init() {
      this.initBtn();
      this.render();
    }
  }]);

  return ShoppingCart;
}();


// CONCATENATED MODULE: ./src/demo/data.js
var data_data = [{
  id: '1',
  name: '课程1',
  price: 129,
  discount: 1
}, {
  id: '2',
  name: '课程2',
  price: 222,
  discount: 1
}, {
  id: '3',
  name: '课程3',
  price: 222,
  discount: 0
}, {
  id: '4',
  name: '课程4',
  price: 222,
  discount: 0
}];
/* harmony default export */ var demo_data = (data_data);
// EXTERNAL MODULE: /Users/jiaxiaoxiao/Documents/my/webpack/webpack-config/singal/node_modules/_javascript-state-machine@3.1.0@javascript-state-machine/lib/state-machine.js
var state_machine = __webpack_require__(0);
var state_machine_default = /*#__PURE__*/__webpack_require__.n(state_machine);

// CONCATENATED MODULE: ./src/demo/utils/log.js
function log(type) {
  return function (target, name, descriptor) {
    var oldValue = descriptor.value; // value 就是这个function

    descriptor.value = function () {
      console.log("\u65E5\u5FD7\u4E0A\u62A5 ".concat(type));
      return oldValue.apply(this, arguments); // 在运行这个函数
    };

    return descriptor;
  };
}
// CONCATENATED MODULE: ./src/demo/List/item.js
var _dec, _dec2, _class;

function item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function item_createClass(Constructor, protoProps, staticProps) { if (protoProps) item_defineProperties(Constructor.prototype, protoProps); if (staticProps) item_defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }




var item_Item = (_dec = log('add'), _dec2 = log('delete'), (_class =
/*#__PURE__*/
function () {
  function Item(list, data) {
    item_classCallCheck(this, Item);

    this.list = list;
    this.data = data;
    this.$el = $('<div>');
    this.cart = ShoppingCart_getCart(); // cart 例子
  }

  item_createClass(Item, [{
    key: "initContent",
    value: function initContent() {
      var $el = this.$el;
      var data = this.data;
      $el.append($("<p>\u540D\u79F0\uFF1A".concat(data.name, "</p>")));
      $el.append($("<p>\u4EF7\u683C\uFF1A".concat(data.price, "</p>")));
    }
  }, {
    key: "initBtn",
    value: function initBtn() {
      var $el = this.$el;
      var $btn = $('<button/>');

      var _this = this;

      var fsm = new state_machine_default.a({
        init: '加入购物车',
        transitions: [{
          name: 'addtoCart',
          from: '加入购物车',
          to: '从购物车删除'
        }, {
          name: 'deleteFromCart',
          from: '从购物车删除',
          to: '加入购物车'
        }],
        methods: {
          // 执行收藏
          onAddtoCart: function onAddtoCart() {
            _this.addToCartHandle();

            updateText();
          },
          onDeleteFromCart: function onDeleteFromCart() {
            _this.deleteFromHandle();

            updateText();
          }
        }
      });

      function updateText() {
        $btn.text(fsm.state);
      }

      $btn.click(function () {
        // 添加到购物车，从购物车移除
        if (fsm.is('加入购物车')) {
          fsm.addtoCart();
        } else {
          fsm.deleteFromCart();
        }
      });
      updateText(); // 初始化执行

      $el.append($btn);
    } // 添加到购物车 

  }, {
    key: "addToCartHandle",
    value: function addToCartHandle() {
      this.cart.add(this.data);
    } // 从购物车删除

  }, {
    key: "deleteFromHandle",
    value: function deleteFromHandle() {
      this.cart.del(this.data.id);
    }
  }, {
    key: "render",
    value: function render() {
      this.list.$el.append(this.$el);
    }
  }, {
    key: "init",
    value: function init() {
      this.initContent();
      this.initBtn();
      this.render();
    }
  }]);

  return Item;
}(), (_applyDecoratedDescriptor(_class.prototype, "addToCartHandle", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "addToCartHandle"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteFromHandle", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "deleteFromHandle"), _class.prototype)), _class));

// CONCATENATED MODULE: ./src/demo/List/createItem.js
 // 补充：优惠商品的处理逻辑

function createDiscount(itemData) {
  return new Proxy(itemData, {
    get: function get(target, key, receiver) {
      if (key === 'name') {
        return "".concat(target[key], "\u3010\u6298\u6263\u3011");
      }

      if (key === 'price') {
        return "".concat(target[key] * 0.8);
      }

      return target;
    }
  });
} // 工厂函数


/* harmony default export */ var createItem = (function (list, itemData) {
  if (itemData.discount) {
    itemData = createDiscount(itemData);
  }

  return new item_Item(list, itemData);
});
// CONCATENATED MODULE: ./src/demo/List/list.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function list_createClass(Constructor, protoProps, staticProps) { if (protoProps) list_defineProperties(Constructor.prototype, protoProps); if (staticProps) list_defineProperties(Constructor, staticProps); return Constructor; }



console.log(demo_data);

var list_List =
/*#__PURE__*/
function () {
  function List(app) {
    list_classCallCheck(this, List);

    this.app = app;
    this.$el = $('<div></div>');
  } // 获取数据


  list_createClass(List, [{
    key: "loadData",
    value: function loadData() {
      return demo_data;
    } // 生成列表

  }, {
    key: "initItemList",
    value: function initItemList(data) {
      // data.forEach( itemData=> {
      //   let item = createItem(this, itemData)
      //   item.init()
      // })
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              index = _step$value[0],
              itemData = _step$value[1];

          var item = createItem(this, itemData);
          item.init(); // console.log(index, elem);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.app.$el.append(this.$el);
    }
  }, {
    key: "init",
    value: function init() {
      this.initItemList(this.loadData());
      this.render();
    }
  }]);

  return List;
}();


// CONCATENATED MODULE: ./src/demo/app.js
function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }




var app_App =
/*#__PURE__*/
function () {
  function App(id) {
    app_classCallCheck(this, App);

    this.$el = $("#".concat(id));
  } // 初始化购物车


  app_createClass(App, [{
    key: "initShoppingCart",
    value: function initShoppingCart() {
      var shoppingCart = new shoppingCart_ShoppingCart(this);
      shoppingCart.init();
    } // 初始化列表

  }, {
    key: "initList",
    value: function initList() {
      var list = new list_List(this);
      list.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.initShoppingCart();
      this.initList();
      console.log('123');
    }
  }]);

  return App;
}();

/* harmony default export */ var demo_app = (app_App); // 工厂模式：$（‘XXX）
// 单例模式 购物车
// 装饰器模式  log
// 观察者模式：网页事件，Promise
// 状态模式：添加到购物车 && 从购物车删除
// 模版方法模式： 渲染有统一的方法，内部包含了各个模块渲染
// 代理模式：打折商品信息处理
// CONCATENATED MODULE: ./src/index.js
// import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './asstes/images/avatar.png'
// import zhCN from 'antd/es/locale/zh_CN'
// import moment from 'moment'
// import 'moment/locale/zh-cn'
// import './styles/search.scss'
// import 'antd/dist/antd.css'
// moment.locale('zh-cn')
// import ButtonText from '@/components/button.jsx'
// import DownloadTest from '@/components/download.jsx'
// import { unUsedFunction333 } from '@/utils/test'
// class MySearch extends React.Component{
//   render(){
//     return (
//       <div  className='search-text'>
//         <ButtonText />
//         <DownloadTest />
//       </div>
//     )
//   }
//   handleClick(){
//     unUsedFunction333()
//     // import ('@/utils/index')
//     //   .then( (utils) => {
//     //     utils.test()
//     //   })
//   }
// }
// ReactDOM.render(<MySearch/>,document.getElementById('app-index'))
// designMode test
// import './designMode/index'
// import largeNumber from '@langyaxue/lyx-test/index'
// import largeNumber1 from 'large-number'
// console.log(largeNumber1)
// console.log(largeNumber)
// var res2 = largeNumber1 ('999','1')
// console.log(res2)
// const largeNumber = require('@langyaxue/lyx-test/index')
// var res = largeNumber('999','1')
// console.log(res)
// import T from './test-2.js'
// console.log(T.test())
// import { test } from './test'
// console.log(test())
// import Utils from '@langyaxue/lyx-util.js/index'
// Utils.test()


window.onload = function () {
  var app = new demo_app('app');
  app.init();
  console.log(app);
}; // b.js


__webpack_require__.e(/* AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1)]; (function (moduleA) {
  console.log(moduleA.a); // 打印出：hello world
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}).catch(__webpack_require__.oe);

/***/ })

/******/ });