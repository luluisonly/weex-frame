// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(222)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 4:
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Created by baidu on 16/6/8.
	 */

	var stream = weex.requireModule('stream');

	var apiURL = {
	  baseurl: 'http://v3.wufazhuce.com:8000/api',
	  homePage: '/hp/bymonth/',
	  readingCarousel: '/reading/carousel',
	  readingIndex: '/reading/index/',
	  essay: '/essay/',
	  serialcontent: '/serialcontent/',
	  question: '/question/',
	  carouselList: '/reading/carousel/',
	  movieList: '/movie/list/',
	  movieDetail: '/movie/detail/'
	};

	function getData(url, callback) {
	  stream.sendHttp({
	    method: 'GET',
	    url: url
	  }, function (res) {
	    callback(JSON.parse(res));
	  });
	}

	exports.getHome = function (dateStr, callback) {
	  getData(apiURL.baseurl + apiURL.homePage + dateStr, callback);
	};

	exports.getReadingCarousel = function (callback) {
	  getData(apiURL.baseurl + apiURL.readingCarousel, callback);
	};

	exports.getReadingIndex = function (index, callback) {
	  getData(apiURL.baseurl + apiURL.readingIndex + index, callback);
	};

	exports.getEssay = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.essay + id, callback);
	};
	exports.getSerialContent = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.serialcontent + id, callback);
	};
	exports.getQuestionDetail = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.question + id, callback);
	};
	exports.getCarouseList = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.carouselList + id, callback);
	};
	exports.getMovieList = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.movieList + id, callback);
	};
	exports.getMovieDetail = function (id, callback) {
	  getData(apiURL.baseurl + apiURL.movieDetail + id, callback);
	};

	exports.getBaseUrl = function (bundleUrl, isnav) {
	  bundleUrl = new String(bundleUrl);
	  var nativeBase = '';
	  var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/dist/';
	  } else if (isiOSAssets) {
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  } else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	      nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	    } else {
	      nativeBase = 'http://' + host + '/dist/';
	    }
	  }

	  return nativeBase;
	};

/***/ },

/***/ 9:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(11)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null

	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (!hasSSR) {
	    update(obj)
	  }

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },

/***/ 11:
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(218)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(220),
	  /* template */
	  __webpack_require__(221),
	  /* scopeId */
	  "data-v-6aa68cd2",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/carouse-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] carouse-item.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6aa68cd2", Component.options)
	  } else {
	    hotAPI.reload("data-v-6aa68cd2", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(10)("70e8f2e2", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6aa68cd2&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carouse-item.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-6aa68cd2&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carouse-item.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.item-text[data-v-6aa68cd2] {\n  margin-top: 10px;\n  margin-bottom: 40px;\n}\n.text-title[data-v-6aa68cd2] {\n  color: white;\n  font-size: 36px;\n  margin-top: 20px;\n  font-weight: bold;\n}\n.text-author[data-v-6aa68cd2] {\n  margin-top: 20px;\n  color: #c7edf2;\n}\n.text-content-short[data-v-6aa68cd2] {\n  margin-top: 20px;\n  color: #c7edf2;\n  lines: 2;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n}\n\n", ""]);

	// exports


/***/ },

/***/ 220:
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  methods: {},
	  props: {
	    date: {
	      default: ''
	    }, title: {
	      default: ''
	    }, author: {
	      default: ''
	    }, content: {
	      default: ''
	    }
	  }
	};

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item-text"
	  }, [_c('text', {
	    staticClass: "text-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('text', {
	    staticClass: "text-author"
	  }, [_vm._v(_vm._s(_vm.author))]), _vm._v(" "), _c('text', {
	    staticClass: "text-content-short"
	  }, [_vm._v(_vm._s(_vm.content))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6aa68cd2", module.exports)
	  }
	}

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(223)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(225),
	  /* template */
	  __webpack_require__(226),
	  /* scopeId */
	  "data-v-569b9cbc",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/modules/carouse-list.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] carouse-list.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-569b9cbc", Component.options)
	  } else {
	    hotAPI.reload("data-v-569b9cbc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(224);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(10)("4152e313", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-569b9cbc&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carouse-list.vue", function() {
	     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-569b9cbc&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carouse-list.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.reading-list[data-v-569b9cbc] {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n.nav_bar[data-v-569b9cbc] {\n  background-color: #1db7ca;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100px;\n}\n.text-type[data-v-569b9cbc] {\n  color: white;\n  text-align: center;\n  margin-left: 10px;\n}\n", ""]);

	// exports


/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _api = __webpack_require__(4);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	var navigator = weex.requireModule('navigator');


	module.exports = {
	  components: {
	    carouseItem: __webpack_require__(217)
	  },

	  props: {
	    title: {
	      default: ''
	    }, readingList: {
	      default: function _default() {
	        return [];
	      }
	    }, baseURL: {
	      default: ''
	    }
	  },
	  created: function created() {
	    var self = this;
	    var bundleUrl = this.$getConfig().bundleUrl;
	    var contentId = self.getParameterByName('id', bundleUrl);
	    if (contentId.lastIndexOf('?') != -1) {
	      contentId = contentId.substr(0, contentId.lastIndexOf('?'));
	    }
	    self.title = self.getParameterByName('title', bundleUrl);
	    if (self.title.lastIndexOf('?') != -1) {
	      self.title = self.title.substr(0, self.title.lastIndexOf('?'));
	    }
	    _api2.default.getCarouseList(contentId, function (ret) {
	      for (var i = 0; i < ret.data.length; i++) {
	        var item = ret.data[i];
	        item.showType1 = item.type == 1;
	        item.showType2 = item.type == 2;
	        item.showType3 = item.type == 3;
	        self.readingList.push(item);
	      }
	    });

	    this.baseURL = _api2.default.getBaseUrl(bundleUrl, true);
	  },

	  methods: {
	    onBackClick: function onBackClick(e) {
	      var params = {
	        'animated': 'true'
	      };
	      navigator.pop(params, function (e) {
	        //callback
	      });
	    },
	    getParameterByName: function getParameterByName(name, url) {
	      name = name.replace(/[\[\]]/g, '\\$&');
	      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	      var results = regex.exec(url);
	      if (!results) {
	        return null;
	      }
	      if (!results[2]) {
	        return '';
	      }
	      return decodeURIComponent(results[2].replace(/\+/g, ' '));
	    },
	    onReadCellClick: function onReadCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openEssayDetail(itemid);
	    },
	    onSerialCellClick: function onSerialCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openSerialDetail(itemid);
	    },
	    onQuestionCellClick: function onQuestionCellClick(e) {
	      var itemid = e.target.attr.cid;
	      this.openQuestionDetail(itemid);
	    },
	    openEssayDetail: function openEssayDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/essay-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    },
	    openSerialDetail: function openSerialDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/serial-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    },
	    openQuestionDetail: function openQuestionDetail(id) {
	      var params = {
	        'url': this.baseURL + 'modules/question-detail.js?id=' + id,
	        'animated': 'true'
	      };
	      navigator.push(params, function (e) {
	        //callback
	      });
	    }
	  }
	};

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function(){},staticRenderFns:[]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-569b9cbc", module.exports)
	  }
	}

/***/ }

/******/ });