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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.student-profile.js":
/*!****************************************!*\
  !*** ./src/js/page.student-profile.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Charts.init();
  var earnings = []; // Create a date range for the last 7 days

  var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

  var end = moment().format('YYYY-MM-DD'); // today

  var range = moment.range(start, end); // Create the earnings graph data
  // Iterate the date range and assign a random ($) earnings value for each day

  range.by('days', function (moment) {
    earnings.push({
      y: Math.floor(Math.random() * 200) + 15,
      x: moment.toDate()
    });
  });

  var WeekIQChart = function WeekIQChart(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        point: {
          pointStyle: 'circle',
          radius: 4,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[500],
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          type: 'time',
          distribution: 'series',
          time: {
            unit: 'day',
            stepSize: 1,
            autoSkip: false,
            displayFormats: {
              day: 'ddd'
            }
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + " points</span>";
          }
        }
      }
    }, options);
    var data = {
      datasets: [{
        label: "Experience IQ",
        data: earnings,
        pointHoverBorderColor: settings.colors.success[400],
        pointHoverBackgroundColor: settings.colors.white
      }]
    };
    Charts.create(id, type, options, data);
  };

  var TopicIQChart = function TopicIQChart(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'radar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      elements: {
        point: {
          pointStyle: 'circle',
          radius: 4,
          hoverRadius: 5,
          backgroundColor: settings.colors.white,
          borderColor: settings.colors.primary[500],
          borderWidth: 2
        }
      },
      scale: {
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 4
        },
        gridLines: {
          color: settings.colors.gray[300]
        },
        angleLines: {
          color: settings.colors.gray[300]
        },
        pointLabels: {
          fontSize: 14
        }
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + " points</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["JavaScript", "HTML", "Flinto", "Vue.js", "Sketch", "Priciple", "CSS", "Angular"],
      datasets: [{
        label: "Experience IQ",
        data: [30, 35, 33, 32, 31, 30, 28, 36],
        pointHoverBorderColor: settings.colors.success[400],
        pointHoverBackgroundColor: settings.colors.white,
        borderJoinStyle: 'bevel',
        lineTension: .1
      }]
    };
    Charts.create(id, type, options, data);
  }; // Create Chart


  WeekIQChart('#iqChart');
  TopicIQChart('#topicIqChart');
})();

/***/ }),

/***/ 13:
/*!**********************************************!*\
  !*** multi ./src/js/page.student-profile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/page.student-profile.js */"./src/js/page.student-profile.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2Uuc3R1ZGVudC1wcm9maWxlLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsImVhcm5pbmdzIiwic3RhcnQiLCJtb21lbnQiLCJlbmQiLCJyYW5nZSIsInkiLCJNYXRoIiwieCIsIldlZWtJUUNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJlbGVtZW50cyIsInBvaW50IiwicG9pbnRTdHlsZSIsInJhZGl1cyIsImhvdmVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwic2V0dGluZ3MiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwic2NhbGVzIiwieUF4ZXMiLCJncmlkTGluZXMiLCJkaXNwbGF5IiwidGlja3MiLCJ4QXhlcyIsImRpc3RyaWJ1dGlvbiIsInRpbWUiLCJ1bml0Iiwic3RlcFNpemUiLCJhdXRvU2tpcCIsImRpc3BsYXlGb3JtYXRzIiwiZGF5IiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsInQiLCJlIiwiYSIsIm8iLCJyIiwiZGF0YSIsImRhdGFzZXRzIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsIndoaXRlIiwiVG9waWNJUUNoYXJ0Iiwic2NhbGUiLCJiZWdpbkF0WmVybyIsIm1heFRpY2tzTGltaXQiLCJjb2xvciIsImFuZ2xlTGluZXMiLCJwb2ludExhYmVscyIsImZvbnRTaXplIiwibGFiZWxzIiwiYm9yZGVySm9pblN0eWxlIiwibGluZVRlbnNpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7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QUFHQSxtQkFBTyxJQUFJSCxDQUFDLENBQURBLFNBQUosV0FBMEJHLENBQUMsSUFBSSxrREFBL0IsWUFBNkZBLENBQUMsSUFBSSwwQ0FBekc7QUFDRDtBQU5RO0FBREg7QUEzQmtCLEtBQXBCLEVBQVY5QixPQUFVLENBQVZBO0FBdUNBLFFBQUkrQixJQUFJLEdBQUc7QUFDVGEsWUFBTSxFQUFFLHdFQURDLFNBQ0QsQ0FEQztBQUVUWixjQUFRLEVBQUUsQ0FBQztBQUNUUCxhQUFLLEVBREk7QUFFVE0sWUFBSSxFQUFFLDZCQUZHLEVBRUgsQ0FGRztBQUdURSw2QkFBcUIsRUFBRTFCLFFBQVEsQ0FBUkEsZUFIZCxHQUdjQSxDQUhkO0FBSVQyQixpQ0FBeUIsRUFBRTNCLFFBQVEsQ0FBUkEsT0FKbEI7QUFLVHNDLHVCQUFlLEVBTE47QUFNVEMsbUJBQVcsRUFBRTtBQU5KLE9BQUQ7QUFGRCxLQUFYO0FBWUF6RCxVQUFNLENBQU5BO0FBdElPLEdBa0ZULENBbEZTLENBeUlUOzs7QUFDQVMsYUFBVyxDQUFYQSxVQUFXLENBQVhBO0FBQ0FzQyxjQUFZLENBQVpBLGVBQVksQ0FBWkE7QUEzSUYsSyIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvcGFnZS5zdHVkZW50LXByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgQ2hhcnRzLmluaXQoKVxuXG4gIHZhciBlYXJuaW5ncyA9IFtdXG5cbiAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xuICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcbiAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgLy8gQ3JlYXRlIHRoZSBlYXJuaW5ncyBncmFwaCBkYXRhXG4gIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSAoJCkgZWFybmluZ3MgdmFsdWUgZm9yIGVhY2ggZGF5XG4gIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obW9tZW50KSB7XG4gICAgZWFybmluZ3MucHVzaCh7XG4gICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMTUsXG4gICAgICB4OiBtb21lbnQudG9EYXRlKClcbiAgICB9KVxuICB9KVxuXG4gIHZhciBXZWVrSVFDaGFydCA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgIHJhZGl1czogNCxcbiAgICAgICAgICBob3ZlclJhZGl1czogNSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICBkaXN0cmlidXRpb246ICdzZXJpZXMnLFxuICAgICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknLFxuICAgICAgICAgICAgc3RlcFNpemU6IDEsXG4gICAgICAgICAgICBhdXRvU2tpcDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xuICAgICAgICAgICAgICBkYXk6ICdkZGQnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGUuZGF0YXNldHNbYS5kYXRhc2V0SW5kZXhdLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgbyA9IGEueUxhYmVsLFxuICAgICAgICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBvICsgXCIgcG9pbnRzPC9zcGFuPlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucylcblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkV4cGVyaWVuY2UgSVFcIixcbiAgICAgICAgZGF0YTogZWFybmluZ3MsXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNDAwXSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgVG9waWNJUUNoYXJ0ID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAncmFkYXInLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBwb2ludDoge1xuICAgICAgICAgIHBvaW50U3R5bGU6ICdjaXJjbGUnLFxuICAgICAgICAgIHJhZGl1czogNCxcbiAgICAgICAgICBob3ZlclJhZGl1czogNSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0XG4gICAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBzZXR0aW5ncy5jb2xvcnMuZ3JheVszMDBdXG4gICAgICAgIH0sXG4gICAgICAgIGFuZ2xlTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXVxuICAgICAgICB9LFxuICAgICAgICBwb2ludExhYmVsczoge1xuICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIG8gKyBcIiBwb2ludHM8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiRmxpbnRvXCIsIFwiVnVlLmpzXCIsIFwiU2tldGNoXCIsIFwiUHJpY2lwbGVcIiwgXCJDU1NcIiwgXCJBbmd1bGFyXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkV4cGVyaWVuY2UgSVFcIixcbiAgICAgICAgZGF0YTogWzMwLCAzNSwgMzMsIDMyLCAzMSwgMzAsIDI4LCAzNl0sXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNDAwXSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdiZXZlbCcsXG4gICAgICAgIGxpbmVUZW5zaW9uOiAuMVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgLy8gQ3JlYXRlIENoYXJ0XG4gIFdlZWtJUUNoYXJ0KCcjaXFDaGFydCcpXG4gIFRvcGljSVFDaGFydCgnI3RvcGljSXFDaGFydCcpXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9