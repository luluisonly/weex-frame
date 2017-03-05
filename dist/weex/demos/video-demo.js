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

	var App = __webpack_require__(246)
	App.el = '#root'
	new Vue(App)


/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(247)
	)

	/* script */
	__vue_exports__ = __webpack_require__(248)

	/* template */
	var __vue_template__ = __webpack_require__(249)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/Guolei/Desktop/develop/weex/weex-frame/src/demos/video-demo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },

/***/ 247:
/***/ function(module, exports) {

	module.exports = {}

/***/ },

/***/ 248:
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

	var modal = weex.requireModule('modal');
	module.exports = {
	  data: function data() {
	    return {
	      msg: '',
	      src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
	    };
	  },
	  methods: {
	    toggle: function toggle() {
	      modal.toast({ message: 'ttttt', duration: 0.3 });
	    },

	    onstart: function onstart(e) {
	      this.msg = 'onstart';
	    },
	    onpause: function onpause(e) {
	      this.msg = 'onpause';
	    },
	    onfinish: function onfinish(e) {
	      this.msg = 'onfinish';
	    },
	    onfail: function onfail(e) {
	      this.msg = 'onfinish';
	    }
	  }
	};

/***/ },

/***/ 249:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', [_vm._v("Big Eater!")]), _c('video', {
	    staticClass: ["video"],
	    staticStyle: {
	      width: "750",
	      height: "500"
	    },
	    attrs: {
	      "autoplay": "false",
	      "playStatus": "pause",
	      "controls": "true",
	      "src": _vm.src
	    },
	    on: {
	      "start": _vm.onstart,
	      "pause": _vm.onpause,
	      "finish": _vm.onfinish,
	      "fail": _vm.onfail
	    }
	  }), _c('text', {
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_vm._v("state: " + _vm._s(_vm.msg))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });