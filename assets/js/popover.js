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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/popover.js":
/*!***************************!*\
  !*** ./src/js/popover.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict'; // popover manual + click trigger issue temporary fix
  // see https://github.com/twbs/bootstrap/issues/16732

  $('body').on('shown.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = true;
  });
  $('body').on('hidden.bs.popover', function (e) {
    $(e.target).data('bs.popover')._activeTrigger.click = false;
  });
  var popoverOptions = {
    trigger: 'click',
    html: true,
    container: '.mdk-header-layout__content',
    content: function content() {
      return $(this).next('.popoverContainer').html();
    },
    template: '<div class="popover popover-lg" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  };
  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  function closePopover() {
    if (this.mdkReveal) {
      this.mdkReveal.close();
    }

    if (this.overlay) {
      this.overlay.hide();
    }
  }

  function clearPopovers(event) {
    if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
      return;
    }

    $('[data-toggle="popover"][data-trigger="click"]').popover('hide').each(closePopover);
  }

  var DATA_KEY = 'bs.popover';
  var DATA_API_KEY = '.data-api';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var Event = {
    CLICK: "click".concat(EVENT_KEY),
    CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
    KEYUP_DATA_API: "keyup".concat(EVENT_KEY).concat(DATA_API_KEY)
  };
  $(document).on("".concat(Event.CLICK_DATA_API, " ").concat(Event.KEYUP_DATA_API), clearPopovers);
  $('[data-toggle="popover"][data-trigger="click"]').popover(popoverOptions).click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('[data-toggle="popover"]').not(this).popover('hide').each(closePopover);
  });
  $('[data-toggle="popover"][data-trigger="hover"]').popover(popoverOptions).on('mouseenter', function () {
    var _this = this;

    $(this).popover('show');
    $('.popover').on('mouseleave', function () {
      $(_this).popover('hide');
    });
  }).on('mouseleave', function () {
    var _this = this;

    setTimeout(function () {
      if (!$('.popover:hover').length) {
        $(_this).popover('hide');
      }
    }, 300);
  });
  var popover = $('[data-toggle="popover"][data-popover-onload-show]');
  popover.popover('show');
  window.addEventListener('load', function () {
    popover.popover('update');
  });
})();

/***/ }),

/***/ 17:
/*!*********************************!*\
  !*** multi ./src/js/popover.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/popover.js */"./src/js/popover.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BvcG92ZXIuanMiXSwibmFtZXMiOlsiJCIsImUiLCJwb3BvdmVyT3B0aW9ucyIsInRyaWdnZXIiLCJodG1sIiwiY29udGFpbmVyIiwiY29udGVudCIsInRlbXBsYXRlIiwiVEFCX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJldmVudCIsIkRBVEFfS0VZIiwiREFUQV9BUElfS0VZIiwiRVZFTlRfS0VZIiwiRXZlbnQiLCJDTElDSyIsIkNMSUNLX0RBVEFfQVBJIiwiS0VZVVBfREFUQV9BUEkiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJwb3BvdmVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxZQUFXO0FBQUEsZ0JBR1Y7QUFDQTs7QUFFQUEsR0FBQyxDQUFEQSxNQUFDLENBQURBLHdCQUFpQyxhQUFhO0FBQzVDQSxLQUFDLENBQUNDLENBQUMsQ0FBSEQsTUFBQyxDQUFEQTtBQURGQTtBQUlBQSxHQUFDLENBQURBLE1BQUMsQ0FBREEseUJBQWtDLGFBQWE7QUFDN0NBLEtBQUMsQ0FBQ0MsQ0FBQyxDQUFIRCxNQUFDLENBQURBO0FBREZBO0FBSUEsTUFBSUUsY0FBYyxHQUFHO0FBQ25CQyxXQUFPLEVBRFk7QUFFbkJDLFFBQUksRUFGZTtBQUduQkMsYUFBUyxFQUhVO0FBSW5CQyxXQUFPLEVBQUUsbUJBQVk7QUFDbkIsYUFBT04sQ0FBQyxDQUFEQSxJQUFDLENBQURBLDJCQUFQLElBQU9BLEVBQVA7QUFMaUI7QUFPbkJPLFlBQVEsRUFBRTtBQVBTLEdBQXJCO0FBVUEsTUFBTUMsV0FBVyxHQXhCUCxDQXdCVixDQXhCVSxDQXdCeUI7O0FBQ25DLE1BQU1DLHdCQUF3QixHQXpCcEIsQ0F5QlYsQ0F6QlUsQ0F5QnlCOztBQUVuQywwQkFBd0I7QUFDdEIsUUFBSSxLQUFKLFdBQW9CO0FBQ2xCO0FBQ0Q7O0FBQ0QsUUFBSSxLQUFKLFNBQWtCO0FBQ2hCO0FBQ0Q7QUFDRjs7QUFFRCxnQ0FBOEI7QUFDNUIsUUFBSUMsS0FBSyxLQUFLQSxLQUFLLENBQUxBLHNDQUNaQSxLQUFLLENBQUxBLG9CQUEwQkEsS0FBSyxDQUFMQSxVQUQ1QixXQUFTLENBQVQsRUFDMEQ7QUFDeEQ7QUFDRDs7QUFFRFYsS0FBQyxDQUFEQSwrQ0FBQyxDQUFEQTtBQUdEOztBQUVELE1BQU1XLFFBQVEsR0FBZDtBQUNBLE1BQU1DLFlBQVksR0FBbEI7QUFDQSxNQUFNQyxTQUFTLGNBQWYsUUFBZSxDQUFmO0FBRUEsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFNBQUssaUJBRE8sU0FDUCxDQURPO0FBRVpDLGtCQUFjLG1DQUZGLFlBRUUsQ0FGRjtBQUdaQyxrQkFBYztBQUhGLEdBQWQ7QUFNQWpCLEdBQUMsQ0FBREEsUUFBQyxDQUFEQSxjQUNTYyxLQUFLLENBRGRkLDRCQUNpQ2MsS0FBSyxDQUR0Q2Q7QUFHQUEsR0FBQyxDQUFEQSwrQ0FBQyxDQUFEQSwrQkFFUyxhQUFXO0FBQ2hCQyxLQUFDLENBQURBO0FBQ0FBLEtBQUMsQ0FBREE7QUFDQUQsS0FBQyxDQUFEQSx5QkFBQyxDQUFEQTtBQUxKQTtBQVVBQSxHQUFDLENBQURBLCtDQUFDLENBQURBLDBDQUVvQixZQUFZO0FBQzVCLFFBQUlrQixLQUFLLEdBQVQ7O0FBQ0FsQixLQUFDLENBQURBLElBQUMsQ0FBREE7QUFDQUEsS0FBQyxDQUFEQSxVQUFDLENBQURBLGtCQUErQixZQUFZO0FBQ3pDQSxPQUFDLENBQURBLEtBQUMsQ0FBREE7QUFERkE7QUFMSkEsc0JBU29CLFlBQVk7QUFDNUIsUUFBSWtCLEtBQUssR0FBVDs7QUFDQUMsY0FBVSxDQUFDLFlBQVk7QUFDckIsVUFBSSxDQUFDbkIsQ0FBQyxDQUFEQSxnQkFBQyxDQUFEQSxDQUFMLFFBQWlDO0FBQy9CQSxTQUFDLENBQURBLEtBQUMsQ0FBREE7QUFDRDtBQUhPLE9BQVZtQixHQUFVLENBQVZBO0FBWEpuQjtBQWtCQSxNQUFJb0IsT0FBTyxHQUFHcEIsQ0FBQyxDQUFmLG1EQUFlLENBQWY7QUFDQW9CLFNBQU8sQ0FBUEE7QUFFQUMsUUFBTSxDQUFOQSx5QkFBZ0MsWUFBWTtBQUMxQ0QsV0FBTyxDQUFQQTtBQURGQztBQTNGRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wb3BvdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb3BvdmVyIG1hbnVhbCArIGNsaWNrIHRyaWdnZXIgaXNzdWUgdGVtcG9yYXJ5IGZpeFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNjczMlxuICBcbiAgJCgnYm9keScpLm9uKCdzaG93bi5icy5wb3BvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAkKGUudGFyZ2V0KS5kYXRhKCdicy5wb3BvdmVyJykuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSB0cnVlXG4gIH0pXG5cbiAgJCgnYm9keScpLm9uKCdoaWRkZW4uYnMucG9wb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChlLnRhcmdldCkuZGF0YSgnYnMucG9wb3ZlcicpLl9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gZmFsc2VcbiAgfSlcblxuICB2YXIgcG9wb3Zlck9wdGlvbnMgPSB7XG4gICAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgICBodG1sOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogJy5tZGstaGVhZGVyLWxheW91dF9fY29udGVudCcsXG4gICAgY29udGVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICQodGhpcykubmV4dCgnLnBvcG92ZXJDb250YWluZXInKS5odG1sKClcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlci1sZ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG4gIH1cblxuICBjb25zdCBUQUJfS0VZQ09ERSAgICAgICAgICAgICAgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbiAgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcblxuICBmdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gICAgaWYgKHRoaXMubWRrUmV2ZWFsKSB7XG4gICAgICB0aGlzLm1ka1JldmVhbC5jbG9zZSgpXG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5oaWRlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclBvcG92ZXJzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl1bZGF0YS10cmlnZ2VyPVwiY2xpY2tcIl0nKVxuICAgICAgLnBvcG92ZXIoJ2hpZGUnKVxuICAgICAgLmVhY2goY2xvc2VQb3BvdmVyKVxuICB9XG5cbiAgY29uc3QgREFUQV9LRVkgID0gJ2JzLnBvcG92ZXInXG4gIGNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG4gIGNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgQ0xJQ0sgICAgICAgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gICAgQ0xJQ0tfREFUQV9BUEkgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gICAgS0VZVVBfREFUQV9BUEkgICA6IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbiAgfVxuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LktFWVVQX0RBVEFfQVBJfWAsIGNsZWFyUG9wb3ZlcnMpXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXVtkYXRhLXRyaWdnZXI9XCJjbGlja1wiXScpXG4gICAgLnBvcG92ZXIocG9wb3Zlck9wdGlvbnMpXG4gICAgLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykubm90KHRoaXMpXG4gICAgICAgIC5wb3BvdmVyKCdoaWRlJylcbiAgICAgICAgLmVhY2goY2xvc2VQb3BvdmVyKVxuICAgIH0pXG5cbiAgJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXVtkYXRhLXRyaWdnZXI9XCJob3ZlclwiXScpXG4gICAgLnBvcG92ZXIocG9wb3Zlck9wdGlvbnMpXG4gICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpc1xuICAgICAgJCh0aGlzKS5wb3BvdmVyKCdzaG93JylcbiAgICAgICQoJy5wb3BvdmVyJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoX3RoaXMpLnBvcG92ZXIoJ2hpZGUnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXNcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQoJy5wb3BvdmVyOmhvdmVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgJChfdGhpcykucG9wb3ZlcignaGlkZScpO1xuICAgICAgICB9XG4gICAgICB9LCAzMDApXG4gICAgfSlcblxuICB2YXIgcG9wb3ZlciA9ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl1bZGF0YS1wb3BvdmVyLW9ubG9hZC1zaG93XScpXG4gIHBvcG92ZXIucG9wb3Zlcignc2hvdycpXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcG9wb3Zlci5wb3BvdmVyKCd1cGRhdGUnKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==