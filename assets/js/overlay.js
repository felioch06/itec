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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/overlay.js":
/*!***************************!*\
  !*** ./src/js/overlay.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var isTouch = function isTouch() {
  return 'ontouchstart' in window;
};

var overlayComponent = function overlayComponent() {
  return {
    /**
     * Public properties.
     * @type {Object}
     */
    properties: {
      /**
       * Show on load.
       * @type {Object}
       */
      overlayOnloadShow: {
        type: Boolean,
        reflectToAttribute: true
      },

      /**
       * Toggle reveal on click/mouseenter/mouseleave or touchstart/touchend.
       * click|hover
       * @type {Object}
       */
      trigger: {
        value: 'hover',
        reflectToAttribute: true
      }
    },

    /**
     * Property change observers.
     * @type {Array}
     */
    observers: ['_onChange(shown)'],

    /**
     * Event listeners.
     * @type {Array}
     */
    listeners: ['_onEnter(mouseenter, touchstart)', '_onLeave(mouseleave, touchend)', '_onClick(click)'],

    /**
     * Show the overlay.
     */
    show: function show() {
      this.shown = true;
    },

    /**
     * Hide the overlay.
     */
    hide: function hide() {
      this.shown = false;
    },

    /**
     * Toggle the shown state.
     */
    toggle: function toggle() {
      this.shown = !this.shown;
    },
    _onChange: function _onChange() {
      if (this.shown) {
        return this.element.classList.add('overlay--show');
      }

      this.element.classList.remove('overlay--show');
    },

    /**
     * Handle `mouseenter` and `touchstart` events.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onEnter: function _onEnter() {
      if (this.trigger === 'hover') {
        this.show();
      }
    },

    /**
     * Handle `mouseleave` and `touchend` events.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onLeave: function _onLeave() {
      if (this.trigger === 'hover') {
        this.hide();
      }
    },

    /**
     * Handle `click` event.
     * @param  {MouseEvent|TouchEvent} event
     */
    _onClick: function _onClick() {
      if (this.trigger === 'click') {
        this.toggle();
      }
    },
    init: function init() {
      if (isTouch()) {
        this.element.classList.add('overlay--duserselect');
      }
    },
    _reset: function _reset() {
      if (this.overlayOnloadShow && !this.shown) {
        this.show();
      }
    }
  };
};

domFactory.handler.register('overlay', overlayComponent);

/***/ }),

/***/ 9:
/*!*********************************!*\
  !*** multi ./src/js/overlay.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/overlay.js */"./src/js/overlay.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL292ZXJsYXkuanMiXSwibmFtZXMiOlsiaXNUb3VjaCIsIm92ZXJsYXlDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib3ZlcmxheU9ubG9hZFNob3ciLCJ0eXBlIiwicmVmbGVjdFRvQXR0cmlidXRlIiwidHJpZ2dlciIsInZhbHVlIiwib2JzZXJ2ZXJzIiwibGlzdGVuZXJzIiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJfb25DaGFuZ2UiLCJfb25FbnRlciIsIl9vbkxlYXZlIiwiX29uQ2xpY2siLCJpbml0IiwiX3Jlc2V0IiwiZG9tRmFjdG9yeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsU0FBUSxrQkFBUjtBQURGOztBQUlBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFPO0FBRTlCOzs7O0FBSUFDLGNBQVUsRUFBRTtBQUVWOzs7O0FBSUFDLHVCQUFpQixFQUFFO0FBQ2pCQyxZQUFJLEVBRGE7QUFFakJDLDBCQUFrQixFQUFFO0FBRkgsT0FOVDs7QUFXVjs7Ozs7QUFLQUMsYUFBTyxFQUFFO0FBQ1BDLGFBQUssRUFERTtBQUVQRiwwQkFBa0IsRUFBRTtBQUZiO0FBaEJDLEtBTmtCOztBQTRCOUI7Ozs7QUFJQUcsYUFBUyxFQUFFLENBaENtQixrQkFnQ25CLENBaENtQjs7QUFvQzlCOzs7O0FBSUFDLGFBQVMsRUFBRSx1RUF4Q21CLGlCQXdDbkIsQ0F4Q21COztBQThDOUI7OztBQUdBQyxRQWpEOEIsa0JBaUR0QjtBQUNOO0FBbEQ0Qjs7QUFxRDlCOzs7QUFHQUMsUUF4RDhCLGtCQXdEdEI7QUFDTjtBQXpENEI7O0FBNEQ5Qjs7O0FBR0FDLFVBL0Q4QixvQkErRHBCO0FBQ1IsbUJBQWEsQ0FBQyxLQUFkO0FBaEU0QjtBQW1FOUJDLGFBbkU4Qix1QkFtRWpCO0FBQ1gsVUFBSSxLQUFKLE9BQWdCO0FBQ2QsZUFBTywyQkFBUCxlQUFPLENBQVA7QUFDRDs7QUFDRDtBQXZFNEI7O0FBMEU5Qjs7OztBQUlBQyxZQTlFOEIsc0JBOEVsQjtBQUNWLFVBQUksaUJBQUosU0FBOEI7QUFDNUI7QUFDRDtBQWpGMkI7O0FBb0Y5Qjs7OztBQUlBQyxZQXhGOEIsc0JBd0ZsQjtBQUNWLFVBQUksaUJBQUosU0FBOEI7QUFDNUI7QUFDRDtBQTNGMkI7O0FBOEY5Qjs7OztBQUlBQyxZQWxHOEIsc0JBa0dsQjtBQUNWLFVBQUksaUJBQUosU0FBOEI7QUFDNUI7QUFDRDtBQXJHMkI7QUF3RzlCQyxRQXhHOEIsa0JBd0d0QjtBQUNOLFVBQUlqQixPQUFKLElBQWU7QUFDYjtBQUNEO0FBM0cyQjtBQThHOUJrQixVQTlHOEIsb0JBOEdwQjtBQUNSLFVBQUksMEJBQTBCLENBQUMsS0FBL0IsT0FBMkM7QUFDekM7QUFDRDtBQUNGO0FBbEg2QixHQUFQO0FBQXpCOztBQXFIQUMsVUFBVSxDQUFWQSw4QyIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvb3ZlcmxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4iLCJjb25zdCBpc1RvdWNoID0gKCkgPT4ge1xuICByZXR1cm4gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdylcbn1cblxuY29uc3Qgb3ZlcmxheUNvbXBvbmVudCA9ICgpID0+ICh7XG5cbiAgLyoqXG4gICAqIFB1YmxpYyBwcm9wZXJ0aWVzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogU2hvdyBvbiBsb2FkLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgb3ZlcmxheU9ubG9hZFNob3c6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHJldmVhbCBvbiBjbGljay9tb3VzZWVudGVyL21vdXNlbGVhdmUgb3IgdG91Y2hzdGFydC90b3VjaGVuZC5cbiAgICAgKiBjbGlja3xob3ZlclxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdHJpZ2dlcjoge1xuICAgICAgdmFsdWU6ICdob3ZlcicsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSBjaGFuZ2Ugb2JzZXJ2ZXJzLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBvYnNlcnZlcnM6IFtcbiAgICAnX29uQ2hhbmdlKHNob3duKSdcbiAgXSxcblxuICAvKipcbiAgICogRXZlbnQgbGlzdGVuZXJzLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBsaXN0ZW5lcnM6IFtcbiAgICAnX29uRW50ZXIobW91c2VlbnRlciwgdG91Y2hzdGFydCknLFxuICAgICdfb25MZWF2ZShtb3VzZWxlYXZlLCB0b3VjaGVuZCknLFxuICAgICdfb25DbGljayhjbGljayknXG4gIF0sXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBzaG93ICgpIHtcbiAgICB0aGlzLnNob3duID0gdHJ1ZVxuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgaGlkZSAoKSB7XG4gICAgdGhpcy5zaG93biA9IGZhbHNlXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgc2hvd24gc3RhdGUuXG4gICAqL1xuICB0b2dnbGUgKCkge1xuICAgIHRoaXMuc2hvd24gPSAhdGhpcy5zaG93blxuICB9LFxuXG4gIF9vbkNoYW5nZSAoKSB7XG4gICAgaWYgKHRoaXMuc2hvd24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS0tc2hvdycpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LS1zaG93JylcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlIGBtb3VzZWVudGVyYCBhbmQgYHRvdWNoc3RhcnRgIGV2ZW50cy5cbiAgICogQHBhcmFtICB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBldmVudFxuICAgKi9cbiAgX29uRW50ZXIgKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYG1vdXNlbGVhdmVgIGFuZCBgdG91Y2hlbmRgIGV2ZW50cy5cbiAgICogQHBhcmFtICB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBldmVudFxuICAgKi9cbiAgX29uTGVhdmUgKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYGNsaWNrYCBldmVudC5cbiAgICogQHBhcmFtICB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBldmVudFxuICAgKi9cbiAgX29uQ2xpY2sgKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH0sXG5cbiAgaW5pdCAoKSB7XG4gICAgaWYgKGlzVG91Y2goKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktLWR1c2Vyc2VsZWN0JylcbiAgICB9XG4gIH0sXG5cbiAgX3Jlc2V0ICgpIHtcbiAgICBpZiAodGhpcy5vdmVybGF5T25sb2FkU2hvdyAmJiAhdGhpcy5zaG93bikge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cbn0pXG5cbmRvbUZhY3RvcnkuaGFuZGxlci5yZWdpc3Rlcignb3ZlcmxheScsIG92ZXJsYXlDb21wb25lbnQpIl0sInNvdXJjZVJvb3QiOiIifQ==