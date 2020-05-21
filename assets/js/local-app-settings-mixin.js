/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/js/settings/local-app-settings-mixin.js":
/*!*****************************************************!*\
  !*** ./src/js/settings/local-app-settings-mixin.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    themeActive: {
      type: String,
      required: true
    },
    themeLocation: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      buttonAlign: 'right',
      drawerAlign: 'end',
      options: [{
        id: 'layout',
        title: 'Layout',
        children: [{
          id: 'theme',
          title: 'Theme',
          component: 'form-image-group',
          cookies: false,
          value: 'blue-light',
          options: [{
            text: 'Blue Dark',
            value: 'blue-dark',
            image: 'assets/images/settings-blue-dark.png',
            selected: true
          }, {
            text: 'Blue Light',
            value: 'blue-light',
            image: 'assets/images/settings-blue-light.png'
          }, {
            text: 'Teal Dark',
            value: 'teal-dark',
            image: 'assets/images/settings-teal-dark.png'
          }, {
            text: 'Teal Light',
            value: 'teal-light',
            image: 'assets/images/settings-teal-light.png'
          }]
        }, {
          id: 'rtl',
          title: 'RTL',
          component: 'custom-checkbox-toggle',
          options: [{
            value: true
          }, {
            value: false,
            selected: true
          }]
        }]
      }, {
        id: 'mainDrawer',
        title: 'Main Drawer',
        children: [{
          id: 'align',
          title: 'Align',
          component: 'b-form-radio-group',
          options: [{
            text: 'Start',
            value: 'start',
            selected: true
          }, {
            text: 'End',
            value: 'end'
          }]
        }, {
          id: 'sidebar',
          title: 'Sidebar Skin',
          component: 'b-form-radio-group',
          options: [{
            text: 'Dark',
            value: 'dark',
            selected: true
          }, {
            text: 'Light',
            value: 'light'
          }]
        }]
      }, {
        id: 'mainNavbar',
        title: 'Main Navbar',
        children: [{
          id: 'navbar',
          title: 'Main Navbar',
          component: 'b-form-radio-group',
          options: [{
            text: 'Dark',
            value: 'dark',
            selected: true
          }, {
            text: 'Light',
            value: 'light'
          }]
        }]
      }],
      config: {
        'layout.theme': function layoutTheme(theme) {
          if (theme !== this.themeActive) {
            location = this.themeLocation[theme];
          }
        },
        'layout.rtl': function layoutRtl(rtl) {
          var _this = this;

          document.querySelector('html').setAttribute('dir', rtl ? 'rtl' : 'ltr');

          _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('.mdk-drawer')).forEach(function (node) {
            return _this.try(node, function () {
              this.mdkDrawer._resetPosition();
            });
          });

          _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll('.mdk-drawer-layout')).forEach(function (node) {
            return _this.try(node, function () {
              this.mdkDrawerLayout._resetLayout();
            });
          });
        },
        'mainDrawer.align': function mainDrawerAlign(align) {
          this.try(document.querySelector('#default-drawer'), function () {
            this.mdkDrawer.align = align;
          });
        },
        'mainDrawer.sidebar': {
          'light': {
            '#default-drawer .sidebar-brand img': {
              src: 'assets/images/logo/black-100@2x.png'
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'dark': {
            '#default-drawer .sidebar-brand img': {
              src: 'assets/images/logo/white-100@2x.png'
            },
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light', 'bg-white']
            },
            '#default-drawer .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          }
        },
        'mainNavbar.navbar': {
          'light': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/black-100@2x.png'
            },
            '#default-navbar': {
              addClass: ['navbar-light', 'bg-white'],
              removeClass: ['navbar-dark', 'bg-dark']
            },
            '#default-navbar [data-toggle=modal]': {
              addClass: ['btn-white'],
              removeClass: ['btn-black']
            },
            '#default-navbar .search-form': {
              addClass: ['search-form--light'],
              removeClass: ['search-form--black']
            }
          },
          'dark': {
            '#default-navbar .navbar-brand img': {
              src: 'assets/images/logo/white-100@2x.png'
            },
            '#default-navbar': {
              addClass: ['navbar-dark', 'bg-dark'],
              removeClass: ['navbar-light', 'bg-white']
            },
            '#default-navbar [data-toggle=modal]': {
              addClass: ['btn-black'],
              removeClass: ['btn-white']
            },
            '#default-navbar .search-form': {
              addClass: ['search-form--black'],
              removeClass: ['search-form--light']
            }
          }
        }
      }
    };
  },
  computed: {
    computedOptions: function computedOptions() {
      var _this2 = this;

      var options = JSON.parse(JSON.stringify(this.options));
      options.map(function (option) {
        option.children.filter(function (group) {
          return group.cookies === false;
        }).map(function (group) {
          if (_this2.themeActive) {
            group.options.map(function (go) {
              return go.selected = go.value === _this2.themeActive;
            });
          } else {
            group.options.map(function (go) {
              return go.selected = go.value === group.value;
            });
          }
        });
      });
      return options;
    },
    localDrawerAlign: function localDrawerAlign() {
      var drawerAlign = this.drawerAlign;

      try {
        drawerAlign = this.settings['mainDrawer.align'] === 'end' ? 'start' : 'end';
      } catch (e) {}

      return drawerAlign;
    },
    localButtonAlign: function localButtonAlign() {
      var buttonAlign = this.buttonAlign;

      try {
        buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'left' : 'right';

        if (this.settings['layout.rtl']) {
          buttonAlign = this.settings['mainDrawer.align'] === 'end' ? 'right' : 'left';
        }
      } catch (e) {}

      return buttonAlign;
    }
  },
  created: function created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate);
  },
  methods: {
    try: function _try(node, callback) {
      try {
        callback.call(node);
      } catch (e) {
        node.addEventListener('domfactory-component-upgraded', callback);
      }
    }
  }
});

/***/ }),

/***/ 22:
/*!***********************************************************!*\
  !*** multi ./src/js/settings/local-app-settings-mixin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/settings/local-app-settings-mixin.js */"./src/js/settings/local-app-settings-mixin.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXR0aW5ncy9sb2NhbC1hcHAtc2V0dGluZ3MtbWl4aW4uanMiXSwibmFtZXMiOlsicHJvcHMiLCJ0aGVtZUFjdGl2ZSIsInR5cGUiLCJyZXF1aXJlZCIsInRoZW1lTG9jYXRpb24iLCJkYXRhIiwiYnV0dG9uQWxpZ24iLCJkcmF3ZXJBbGlnbiIsIm9wdGlvbnMiLCJpZCIsInRpdGxlIiwiY2hpbGRyZW4iLCJjb21wb25lbnQiLCJjb29raWVzIiwidmFsdWUiLCJ0ZXh0IiwiaW1hZ2UiLCJzZWxlY3RlZCIsImNvbmZpZyIsInRoZW1lIiwibG9jYXRpb24iLCJkb2N1bWVudCIsInJ0bCIsInNyYyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjb21wdXRlZCIsImNvbXB1dGVkT3B0aW9ucyIsIkpTT04iLCJvcHRpb24iLCJncm91cCIsImdvIiwibG9jYWxEcmF3ZXJBbGlnbiIsImxvY2FsQnV0dG9uQWxpZ24iLCJjcmVhdGVkIiwibWV0aG9kcyIsInRyeSIsImNhbGxiYWNrIiwibm9kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QTs7QUFDQSxZQUFJLGNBQUosWUFBSSxDQUFKLEVBQWlDO0FBQy9CQSxxQkFBVyxHQUFHLHdEQUFkQTtBQUNEO0FBSkgsUUFLRSxVQUFTLENBQUU7O0FBRWI7QUFDRDtBQXBDTyxHQTFORztBQWdRYjRCLFNBaFFhLHFCQWdRSDtBQUNSLDJDQUF1QyxLQUF2QztBQWpRVztBQW1RYkMsU0FBTyxFQUFFO0FBQ1BDLE9BRE8sZ0NBQ2E7QUFDbEIsVUFBSTtBQUNGQyxnQkFBUSxDQUFSQTtBQURGLFFBRUUsVUFBUztBQUNUQyxZQUFJLENBQUpBO0FBQ0Q7QUFDRjtBQVBNO0FBblFJLENBQWYsRSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvbG9jYWwtYXBwLXNldHRpbmdzLW1peGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMik7XG4iLCJmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHRoZW1lQWN0aXZlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGhlbWVMb2NhdGlvbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1dHRvbkFsaWduOiAncmlnaHQnLFxuICAgICAgZHJhd2VyQWxpZ246ICdlbmQnLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdsYXlvdXQnLFxuICAgICAgICAgIHRpdGxlOiAnTGF5b3V0JyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ3RoZW1lJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdUaGVtZScsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ2Zvcm0taW1hZ2UtZ3JvdXAnLFxuICAgICAgICAgICAgICBjb29raWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6ICdibHVlLWxpZ2h0JyxcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdCbHVlIERhcmsnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdibHVlLWRhcmsnLFxuICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL3NldHRpbmdzLWJsdWUtZGFyay5wbmcnLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdCbHVlIExpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYmx1ZS1saWdodCcsXG4gICAgICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvc2V0dGluZ3MtYmx1ZS1saWdodC5wbmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnVGVhbCBEYXJrJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAndGVhbC1kYXJrJyxcbiAgICAgICAgICAgICAgICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9zZXR0aW5ncy10ZWFsLWRhcmsucG5nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1RlYWwgTGlnaHQnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICd0ZWFsLWxpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9zZXR0aW5ncy10ZWFsLWxpZ2h0LnBuZydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAncnRsJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdSVEwnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdjdXN0b20tY2hlY2tib3gtdG9nZ2xlJyxcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnbWFpbkRyYXdlcicsXG4gICAgICAgICAgdGl0bGU6ICdNYWluIERyYXdlcicsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdhbGlnbicsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQWxpZ24nLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6ICdiLWZvcm0tcmFkaW8tZ3JvdXAnLFxuICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ1N0YXJ0JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdFbmQnLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICdlbmQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJ3NpZGViYXInLFxuICAgICAgICAgICAgICB0aXRsZTogJ1NpZGViYXIgU2tpbicsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJ2ItZm9ybS1yYWRpby1ncm91cCcsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnRGFyaycsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2RhcmsnLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdMaWdodCcsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpZ2h0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnbWFpbk5hdmJhcicsXG4gICAgICAgICAgdGl0bGU6ICdNYWluIE5hdmJhcicsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICduYXZiYXInLFxuICAgICAgICAgICAgICB0aXRsZTogJ01haW4gTmF2YmFyJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiAnYi1mb3JtLXJhZGlvLWdyb3VwJyxcbiAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICdEYXJrJyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogJ0xpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGlnaHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgICdsYXlvdXQudGhlbWUnOiBmdW5jdGlvbih0aGVtZSkge1xuICAgICAgICAgIGlmICh0aGVtZSAhPT0gdGhpcy50aGVtZUFjdGl2ZSkge1xuICAgICAgICAgICAgbG9jYXRpb24gPSB0aGlzLnRoZW1lTG9jYXRpb25bdGhlbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnbGF5b3V0LnJ0bCc6IGZ1bmN0aW9uKHJ0bCkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2RpcicsIHJ0bCA/ICdydGwnIDogJ2x0cicpXG5cbiAgICAgICAgICA7Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGstZHJhd2VyJyldXG4gICAgICAgICAgICAuZm9yRWFjaChub2RlID0+IHRoaXMudHJ5KG5vZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLm1ka0RyYXdlci5fcmVzZXRQb3NpdGlvbigpXG4gICAgICAgICAgICB9KSlcblxuICAgICAgICAgIDtbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kay1kcmF3ZXItbGF5b3V0JyldXG4gICAgICAgICAgICAuZm9yRWFjaChub2RlID0+IHRoaXMudHJ5KG5vZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLm1ka0RyYXdlckxheW91dC5fcmVzZXRMYXlvdXQoKVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgICAgICdtYWluRHJhd2VyLmFsaWduJzogZnVuY3Rpb24oYWxpZ24pIHtcbiAgICAgICAgICB0aGlzLnRyeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVmYXVsdC1kcmF3ZXInKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm1ka0RyYXdlci5hbGlnbiA9IGFsaWduXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgJ21haW5EcmF3ZXIuc2lkZWJhcic6IHtcbiAgICAgICAgICAnbGlnaHQnOiB7XG4gICAgICAgICAgICAnI2RlZmF1bHQtZHJhd2VyIC5zaWRlYmFyLWJyYW5kIGltZyc6IHtcbiAgICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9sb2dvL2JsYWNrLTEwMEAyeC5wbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1kcmF3ZXIgLnNpZGViYXInOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ3NpZGViYXItbGlnaHQnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2lkZWJhci1kYXJrJywgJ2JnLWRhcmsnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1kcmF3ZXIgLnNlYXJjaC1mb3JtJzoge1xuICAgICAgICAgICAgICBhZGRDbGFzczogWydzZWFyY2gtZm9ybS0tbGlnaHQnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2VhcmNoLWZvcm0tLWJsYWNrJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdkYXJrJzoge1xuICAgICAgICAgICAgJyNkZWZhdWx0LWRyYXdlciAuc2lkZWJhci1icmFuZCBpbWcnOiB7XG4gICAgICAgICAgICAgIHNyYzogJ2Fzc2V0cy9pbWFnZXMvbG9nby93aGl0ZS0xMDBAMngucG5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnI2RlZmF1bHQtZHJhd2VyIC5zaWRlYmFyJzoge1xuICAgICAgICAgICAgICBhZGRDbGFzczogWydzaWRlYmFyLWRhcmsnLCAnYmctZGFyayddLFxuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWydzaWRlYmFyLWxpZ2h0JywgJ2JnLXdoaXRlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnI2RlZmF1bHQtZHJhd2VyIC5zZWFyY2gtZm9ybSc6IHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3M6IFsnc2VhcmNoLWZvcm0tLWJsYWNrJ10sXG4gICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBbJ3NlYXJjaC1mb3JtLS1saWdodCddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnbWFpbk5hdmJhci5uYXZiYXInOiB7XG4gICAgICAgICAgJ2xpZ2h0Jzoge1xuICAgICAgICAgICAgJyNkZWZhdWx0LW5hdmJhciAubmF2YmFyLWJyYW5kIGltZyc6IHtcbiAgICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9sb2dvL2JsYWNrLTEwMEAyeC5wbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1uYXZiYXInOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ25hdmJhci1saWdodCcsICdiZy13aGl0ZSddLFxuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWyduYXZiYXItZGFyaycsICdiZy1kYXJrJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnI2RlZmF1bHQtbmF2YmFyIFtkYXRhLXRvZ2dsZT1tb2RhbF0nOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ2J0bi13aGl0ZSddLFxuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWydidG4tYmxhY2snXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1uYXZiYXIgLnNlYXJjaC1mb3JtJzoge1xuICAgICAgICAgICAgICBhZGRDbGFzczogWydzZWFyY2gtZm9ybS0tbGlnaHQnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2VhcmNoLWZvcm0tLWJsYWNrJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdkYXJrJzoge1xuICAgICAgICAgICAgJyNkZWZhdWx0LW5hdmJhciAubmF2YmFyLWJyYW5kIGltZyc6IHtcbiAgICAgICAgICAgICAgc3JjOiAnYXNzZXRzL2ltYWdlcy9sb2dvL3doaXRlLTEwMEAyeC5wbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1uYXZiYXInOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ25hdmJhci1kYXJrJywgJ2JnLWRhcmsnXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnbmF2YmFyLWxpZ2h0JywgJ2JnLXdoaXRlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnI2RlZmF1bHQtbmF2YmFyIFtkYXRhLXRvZ2dsZT1tb2RhbF0nOiB7XG4gICAgICAgICAgICAgIGFkZENsYXNzOiBbJ2J0bi1ibGFjayddLFxuICAgICAgICAgICAgICByZW1vdmVDbGFzczogWydidG4td2hpdGUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcjZGVmYXVsdC1uYXZiYXIgLnNlYXJjaC1mb3JtJzoge1xuICAgICAgICAgICAgICBhZGRDbGFzczogWydzZWFyY2gtZm9ybS0tYmxhY2snXSxcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IFsnc2VhcmNoLWZvcm0tLWxpZ2h0J11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRPcHRpb25zKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgIG9wdGlvbi5jaGlsZHJlblxuICAgICAgICAgIC5maWx0ZXIoZ3JvdXAgPT4gZ3JvdXAuY29va2llcyA9PT0gZmFsc2UpXG4gICAgICAgICAgLm1hcChncm91cCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50aGVtZUFjdGl2ZSkge1xuICAgICAgICAgICAgICBncm91cC5vcHRpb25zLm1hcChnbyA9PiBnby5zZWxlY3RlZCA9IGdvLnZhbHVlID09PSB0aGlzLnRoZW1lQWN0aXZlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZ3JvdXAub3B0aW9ucy5tYXAoZ28gPT4gZ28uc2VsZWN0ZWQgPSBnby52YWx1ZSA9PT0gZ3JvdXAudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBvcHRpb25zXG4gICAgfSxcbiAgICBsb2NhbERyYXdlckFsaWduKCkge1xuICAgICAgbGV0IGRyYXdlckFsaWduID0gdGhpcy5kcmF3ZXJBbGlnblxuICAgICAgdHJ5IHtcbiAgICAgICAgZHJhd2VyQWxpZ24gPSB0aGlzLnNldHRpbmdzWydtYWluRHJhd2VyLmFsaWduJ10gPT09ICdlbmQnID8gJ3N0YXJ0JyA6ICdlbmQnXG4gICAgICB9IGNhdGNoKGUpIHt9XG5cbiAgICAgIHJldHVybiBkcmF3ZXJBbGlnblxuICAgIH0sXG4gICAgbG9jYWxCdXR0b25BbGlnbigpIHtcbiAgICAgIGxldCBidXR0b25BbGlnbiA9IHRoaXMuYnV0dG9uQWxpZ25cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgYnV0dG9uQWxpZ24gPSB0aGlzLnNldHRpbmdzWydtYWluRHJhd2VyLmFsaWduJ10gPT09ICdlbmQnID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5nc1snbGF5b3V0LnJ0bCddKSB7XG4gICAgICAgICAgYnV0dG9uQWxpZ24gPSB0aGlzLnNldHRpbmdzWydtYWluRHJhd2VyLmFsaWduJ10gPT09ICdlbmQnID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGUpIHt9XG5cbiAgICAgIHJldHVybiBidXR0b25BbGlnblxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxpc3Rlbk9uUm9vdCgnZm06c2V0dGluZ3M6c3RhdGUnLCB0aGlzLm9uVXBkYXRlKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdHJ5KG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKG5vZGUpXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkb21mYWN0b3J5LWNvbXBvbmVudC11cGdyYWRlZCcsIGNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==