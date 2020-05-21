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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-utils */ "./src/js/theme-utils.js");
 // https://material.io/design/color/the-color-system.html#tools-for-picking-colors

var colors = {
  gray: {
    300: '#E3EBF6',
    600: '#95AAC9',
    700: '#6E84A3',
    800: '#152E4D',
    900: '#283E59'
  },
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90c9f9',
    300: '#63b4f6',
    400: '#42a4f5',
    500: '#2196F3',
    // $primary
    600: '#1f87e5',
    700: '#1a75d2',
    800: '#1764c0',
    900: '#1045a1'
  },
  accent: {
    50: '#fee3e9',
    100: '#fdb9c8',
    200: '#fa8ca3',
    300: '#f75c7f',
    400: '#f23764',
    500: '#ed0b4b',
    // primary
    600: '#dd024a',
    700: '#c80047',
    800: '#b40045',
    900: '#920041'
  },
  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66BB6A',
    // $success
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20'
  },
  black: '#383B3D',
  white: '#FFFFFF',
  transparent: 'transparent'
};
var fonts = {
  base: 'Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};
var charts = {
  colorScheme: 'light',
  colors: {
    area: Object(_theme_utils__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"])(colors.primary[500], 0.24)
  }
};
var settings = {
  fonts: fonts,
  colors: colors,
  charts: charts
};

if (typeof window !== 'undefined') {
  window.settings = settings;
}

/***/ }),

/***/ "./src/js/theme-utils.js":
/*!*******************************!*\
  !*** ./src/js/theme-utils.js ***!
  \*******************************/
/*! exports provided: hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
var hexToRGB = function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

/***/ }),

/***/ 20:
/*!**********************************!*\
  !*** multi ./src/js/settings.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/settings.js */"./src/js/settings.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90aGVtZS11dGlscy5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJncmF5IiwicHJpbWFyeSIsImFjY2VudCIsInN1Y2Nlc3MiLCJibGFjayIsIndoaXRlIiwidHJhbnNwYXJlbnQiLCJmb250cyIsImJhc2UiLCJjaGFydHMiLCJjb2xvclNjaGVtZSIsImFyZWEiLCJoZXhUb1JHQiIsInNldHRpbmdzIiwid2luZG93IiwiciIsInBhcnNlSW50IiwiaGV4IiwiZyIsImIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKLFNBREk7QUFFSixTQUZJO0FBR0osU0FISTtBQUlKLFNBSkk7QUFLSixTQUFLO0FBTEQsR0FETztBQVFiQyxTQUFPLEVBQUU7QUFDUCxRQURPO0FBRVAsU0FGTztBQUdQLFNBSE87QUFJUCxTQUpPO0FBS1AsU0FMTztBQU1QLFNBTk87QUFNUztBQUNoQixTQVBPO0FBUVAsU0FSTztBQVNQLFNBVE87QUFVUCxTQUFLO0FBVkUsR0FSSTtBQW9CYkMsUUFBTSxFQUFFO0FBQ04sUUFETTtBQUVOLFNBRk07QUFHTixTQUhNO0FBSU4sU0FKTTtBQUtOLFNBTE07QUFNTixTQU5NO0FBTVU7QUFDaEIsU0FQTTtBQVFOLFNBUk07QUFTTixTQVRNO0FBVU4sU0FBSztBQVZDLEdBcEJLO0FBZ0NiQyxTQUFPLEVBQUU7QUFDUCxRQURPO0FBRVAsU0FGTztBQUdQLFNBSE87QUFJUCxTQUpPO0FBS1AsU0FMTztBQUtTO0FBQ2hCLFNBTk87QUFPUCxTQVBPO0FBUVAsU0FSTztBQVNQLFNBVE87QUFVUCxTQUFLO0FBVkUsR0FoQ0k7QUE0Q2JDLE9BQUssRUE1Q1E7QUE2Q2JDLE9BQUssRUE3Q1E7QUE4Q2JDLGFBQVcsRUFBRTtBQTlDQSxDQUFmO0FBaURBLElBQU1DLEtBQUssR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFkO0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLGFBQVcsRUFERTtBQUViWCxRQUFNLEVBQUU7QUFDTlksUUFBSSxFQUFFQyw2REFBUSxDQUFDYixNQUFNLENBQU5BLFFBQUQsR0FBQ0EsQ0FBRDtBQURSO0FBRkssQ0FBZjtBQU9PLElBQU1jLFFBQVEsR0FBRztBQUN0Qk4sT0FBSyxFQURpQjtBQUV0QlIsUUFBTSxFQUZnQjtBQUd0QlUsUUFBTSxFQUFOQTtBQUhzQixDQUFqQjs7QUFNUCxJQUFJLGtCQUFKLGFBQW1DO0FBQ2pDSyxRQUFNLENBQU5BO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDckVEO0FBQUE7QUFBTyxJQUFNRixRQUFRLEdBQUcsU0FBWEEsUUFBVyxhQUFnQjtBQUN0QyxNQUFNRyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFIQSxTQUFELENBQUNBLENBQUQsRUFBbEIsRUFBa0IsQ0FBbEI7QUFDQSxNQUFNQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0MsR0FBRyxDQUFIQSxTQUFELENBQUNBLENBQUQsRUFBbEIsRUFBa0IsQ0FBbEI7QUFDQSxNQUFNRSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0MsR0FBRyxDQUFIQSxTQUFELENBQUNBLENBQUQsRUFBbEIsRUFBa0IsQ0FBbEI7O0FBRUEsYUFBVztBQUNULFdBQU8sbURBQVA7QUFERixTQUVPO0FBQ0wsV0FBTyxtQ0FBUDtBQUNEO0FBVEksRSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbiIsImltcG9ydCB7IGhleFRvUkdCIH0gZnJvbSAnLi90aGVtZS11dGlscydcblxuLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvdGhlLWNvbG9yLXN5c3RlbS5odG1sI3Rvb2xzLWZvci1waWNraW5nLWNvbG9yc1xuY29uc3QgY29sb3JzID0ge1xuICBncmF5OiB7XG4gICAgMzAwOiAnI0UzRUJGNicsXG4gICAgNjAwOiAnIzk1QUFDOScsXG4gICAgNzAwOiAnIzZFODRBMycsXG4gICAgODAwOiAnIzE1MkU0RCcsXG4gICAgOTAwOiAnIzI4M0U1OSdcbiAgfSxcbiAgcHJpbWFyeToge1xuICAgIDUwOiAnI2UzZjJmZCcsXG4gICAgMTAwOiAnI2JiZGVmYicsXG4gICAgMjAwOiAnIzkwYzlmOScsXG4gICAgMzAwOiAnIzYzYjRmNicsXG4gICAgNDAwOiAnIzQyYTRmNScsXG4gICAgNTAwOiAnIzIxOTZGMycsIC8vICRwcmltYXJ5XG4gICAgNjAwOiAnIzFmODdlNScsXG4gICAgNzAwOiAnIzFhNzVkMicsXG4gICAgODAwOiAnIzE3NjRjMCcsXG4gICAgOTAwOiAnIzEwNDVhMSdcbiAgfSxcbiAgYWNjZW50OiB7XG4gICAgNTA6ICcjZmVlM2U5JyxcbiAgICAxMDA6ICcjZmRiOWM4JyxcbiAgICAyMDA6ICcjZmE4Y2EzJyxcbiAgICAzMDA6ICcjZjc1YzdmJyxcbiAgICA0MDA6ICcjZjIzNzY0JyxcbiAgICA1MDA6ICcjZWQwYjRiJywgLy8gcHJpbWFyeVxuICAgIDYwMDogJyNkZDAyNGEnLFxuICAgIDcwMDogJyNjODAwNDcnLFxuICAgIDgwMDogJyNiNDAwNDUnLFxuICAgIDkwMDogJyM5MjAwNDEnXG4gIH0sXG4gIHN1Y2Nlc3M6IHtcbiAgICA1MDogJyNlOGY1ZTknLFxuICAgIDEwMDogJyNjOGU2YzknLFxuICAgIDIwMDogJyNhNWQ2YTcnLFxuICAgIDMwMDogJyM4MWM3ODQnLFxuICAgIDQwMDogJyM2NkJCNkEnLCAvLyAkc3VjY2Vzc1xuICAgIDUwMDogJyM0Y2FmNTAnLFxuICAgIDYwMDogJyM0M2EwNDcnLFxuICAgIDcwMDogJyMzODhlM2MnLFxuICAgIDgwMDogJyMyZTdkMzInLFxuICAgIDkwMDogJyMxYjVlMjAnLFxuICB9LFxuICBibGFjazogJyMzODNCM0QnLFxuICB3aGl0ZTogJyNGRkZGRkYnLFxuICB0cmFuc3BhcmVudDogJ3RyYW5zcGFyZW50J1xufVxuXG5jb25zdCBmb250cyA9IHsgYmFzZTogJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCInIH1cblxuY29uc3QgY2hhcnRzID0ge1xuICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgY29sb3JzOiB7XG4gICAgYXJlYTogaGV4VG9SR0IoY29sb3JzLnByaW1hcnlbNTAwXSwgMC4yNClcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvbnRzLFxuICBjb2xvcnMsXG4gIGNoYXJ0c1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LnNldHRpbmdzID0gc2V0dGluZ3Ncbn0iLCJleHBvcnQgY29uc3QgaGV4VG9SR0IgPSAoaGV4LCBhbHBoYSkgPT4ge1xuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNilcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KVxuXG4gIGlmIChhbHBoYSkge1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCJcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==