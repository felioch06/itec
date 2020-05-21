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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fm-plugin-quill/js/quill.js":
/*!**************************************************!*\
  !*** ./node_modules/fm-plugin-quill/js/quill.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  $('[data-toggle="quill"]').each(function () {
    var element = $(this);
    var options = {
      modules: {
        toolbar: void 0 !== element.data('quill-modules-toolbar') ? element.data('quill-modules-toolbar') : {}
      },
      theme: void 0 !== element.data('quill-theme') ? element.data('quill-theme') : 'snow',
      placeholder: void 0 !== element.data('quill-placeholder') ? element.data('quill-placeholder') : Quill.DEFAULTS.placeholder,
      readOnly: void 0 !== element.data('quill-read-only') ? element.data('quill-read-only') : Quill.DEFAULTS.readOnly,
      debug: void 0 !== element.data('quill-debug') ? element.data('quill-debug') : Quill.DEFAULTS.debug,
      formats: void 0 !== element.data('quill-formats') ? element.data('quill-formats') : Quill.DEFAULTS.formats
    };
    var quillElement = element.get(0);
    var quill = new Quill(quillElement, options);
    Object.defineProperty(quillElement, 'Quill', {
      configurable: true,
      writable: false,
      value: quill
    });
  });
})();

/***/ }),

/***/ "./src/js/vendor/quill.js":
/*!********************************!*\
  !*** ./src/js/vendor/quill.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-quill */ "./node_modules/fm-plugin-quill/js/quill.js");
/* harmony import */ var fm_plugin_quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fm_plugin_quill__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 31:
/*!**************************************!*\
  !*** multi ./src/js/vendor/quill.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/vendor/quill.js */"./src/js/vendor/quill.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZtLXBsdWdpbi1xdWlsbC9qcy9xdWlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmVuZG9yL3F1aWxsLmpzIl0sIm5hbWVzIjpbIiQiLCJlYWNoIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJtb2R1bGVzIiwidG9vbGJhciIsImRhdGEiLCJ0aGVtZSIsInBsYWNlaG9sZGVyIiwiUXVpbGwiLCJERUZBVUxUUyIsInJlYWRPbmx5IiwiZGVidWciLCJmb3JtYXRzIiwicXVpbGxFbGVtZW50IiwiZ2V0IiwicXVpbGwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxDQUFDLFlBQVU7QUFDVDs7QUFFQUEsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLElBQTNCLENBQWdDLFlBQVc7QUFDekMsUUFBSUMsT0FBTyxHQUFHRixDQUFDLENBQUMsSUFBRCxDQUFmO0FBQ0EsUUFBSUcsT0FBTyxHQUFHO0FBQ1pDLGFBQU8sRUFBRTtBQUNQQyxlQUFPLEVBQUUsS0FBSyxDQUFMLEtBQVdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLHVCQUFiLENBQVgsR0FDUEosT0FBTyxDQUFDSSxJQUFSLENBQWEsdUJBQWIsQ0FETyxHQUVQO0FBSEssT0FERztBQU1aQyxXQUFLLEVBQUUsS0FBSyxDQUFMLEtBQVdMLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGFBQWIsQ0FBWCxHQUNISixPQUFPLENBQUNJLElBQVIsQ0FBYSxhQUFiLENBREcsR0FFSCxNQVJRO0FBU1pFLGlCQUFXLEVBQUUsS0FBSyxDQUFMLEtBQVdOLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLG1CQUFiLENBQVgsR0FDVEosT0FBTyxDQUFDSSxJQUFSLENBQWEsbUJBQWIsQ0FEUyxHQUVURyxLQUFLLENBQUNDLFFBQU4sQ0FBZUYsV0FYUDtBQVlaRyxjQUFRLEVBQUUsS0FBSyxDQUFMLEtBQVdULE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGlCQUFiLENBQVgsR0FDTkosT0FBTyxDQUFDSSxJQUFSLENBQWEsaUJBQWIsQ0FETSxHQUVORyxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFkUDtBQWVaQyxXQUFLLEVBQUUsS0FBSyxDQUFMLEtBQVdWLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGFBQWIsQ0FBWCxHQUNISixPQUFPLENBQUNJLElBQVIsQ0FBYSxhQUFiLENBREcsR0FFSEcsS0FBSyxDQUFDQyxRQUFOLENBQWVFLEtBakJQO0FBa0JaQyxhQUFPLEVBQUUsS0FBSyxDQUFMLEtBQVdYLE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGVBQWIsQ0FBWCxHQUNMSixPQUFPLENBQUNJLElBQVIsQ0FBYSxlQUFiLENBREssR0FFTEcsS0FBSyxDQUFDQyxRQUFOLENBQWVHO0FBcEJQLEtBQWQ7QUF1QkEsUUFBSUMsWUFBWSxHQUFHWixPQUFPLENBQUNhLEdBQVIsQ0FBWSxDQUFaLENBQW5CO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLElBQUlQLEtBQUosQ0FBVUssWUFBVixFQUF3QlgsT0FBeEIsQ0FBWjtBQUNBYyxVQUFNLENBQUNDLGNBQVAsQ0FBc0JKLFlBQXRCLEVBQW9DLE9BQXBDLEVBQTZDO0FBQzNDSyxrQkFBWSxFQUFFLElBRDZCO0FBRTNDQyxjQUFRLEVBQUUsS0FGaUM7QUFHM0NDLFdBQUssRUFBRUw7QUFIb0MsS0FBN0M7QUFLRCxHQWhDRDtBQWtDRCxDQXJDRCxJOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUEiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3F1aWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cInF1aWxsXCJdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWxlbWVudCA9ICQodGhpcylcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgdG9vbGJhcjogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3F1aWxsLW1vZHVsZXMtdG9vbGJhcicpIFxuICAgICAgICA/IGVsZW1lbnQuZGF0YSgncXVpbGwtbW9kdWxlcy10b29sYmFyJykgXG4gICAgICAgIDoge31cbiAgICAgIH0sXG4gICAgICB0aGVtZTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3F1aWxsLXRoZW1lJykgXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdxdWlsbC10aGVtZScpIFxuICAgICAgICA6ICdzbm93JyxcbiAgICAgIHBsYWNlaG9sZGVyOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgncXVpbGwtcGxhY2Vob2xkZXInKSBcbiAgICAgICAgPyBlbGVtZW50LmRhdGEoJ3F1aWxsLXBsYWNlaG9sZGVyJykgXG4gICAgICAgIDogUXVpbGwuREVGQVVMVFMucGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seTogdm9pZCAwICE9PSBlbGVtZW50LmRhdGEoJ3F1aWxsLXJlYWQtb25seScpXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdxdWlsbC1yZWFkLW9ubHknKVxuICAgICAgICA6IFF1aWxsLkRFRkFVTFRTLnJlYWRPbmx5LFxuICAgICAgZGVidWc6IHZvaWQgMCAhPT0gZWxlbWVudC5kYXRhKCdxdWlsbC1kZWJ1ZycpXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdxdWlsbC1kZWJ1ZycpXG4gICAgICAgIDogUXVpbGwuREVGQVVMVFMuZGVidWcsXG4gICAgICBmb3JtYXRzOiB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YSgncXVpbGwtZm9ybWF0cycpXG4gICAgICAgID8gZWxlbWVudC5kYXRhKCdxdWlsbC1mb3JtYXRzJylcbiAgICAgICAgOiBRdWlsbC5ERUZBVUxUUy5mb3JtYXRzXG4gICAgfVxuXG4gICAgdmFyIHF1aWxsRWxlbWVudCA9IGVsZW1lbnQuZ2V0KDApXG4gICAgdmFyIHF1aWxsID0gbmV3IFF1aWxsKHF1aWxsRWxlbWVudCwgb3B0aW9ucylcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocXVpbGxFbGVtZW50LCAnUXVpbGwnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogcXVpbGxcbiAgICB9KVxuICB9KVxuXG59KSgpIiwiaW1wb3J0ICdmbS1wbHVnaW4tcXVpbGwnIl0sInNvdXJjZVJvb3QiOiIifQ==