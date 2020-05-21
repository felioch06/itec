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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.instructor-dashboard.js":
/*!*********************************************!*\
  !*** ./src/js/page.instructor-dashboard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Charts.init();
  var earnings = [];
  var prev = [];
  var backgroundColor = []; // Create a date range for the last 7 days

  var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

  var end = moment().format('YYYY-MM-DD'); // today

  var range = moment.range(start, end); // Create the earnings graph data
  // Iterate the date range and assign a random ($) earnings value for each day

  range.by('days', function (m) {
    earnings.push({
      y: Math.floor(Math.random() * 300) + 30,
      x: m.toDate()
    });
    prev.push({
      y: Math.floor(Math.random() * 300) + 10,
      x: m.toDate()
    });

    if (m.startOf('day').isSame(moment().startOf('day'))) {
      backgroundColor.push(settings.colors.accent[500]);
    } else {
      backgroundColor.push(settings.colors.primary[500]);
    }
  });

  var Earnings = function Earnings(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 16
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a;
            }
          }
        }],
        xAxes: [{
          offset: true,
          ticks: {
            padding: 10
          },
          maxBarThickness: 20,
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day'
          }
        }]
      },
      tooltips: {
        callbacks: {
          label: function label(a, e) {
            var t = e.datasets[a.datasetIndex].label || "",
                o = a.yLabel,
                r = "";
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "</span>";
          }
        }
      }
    }, options);
    var data = {
      datasets: [{
        label: "Previous Week",
        data: prev,
        backgroundColor: settings.colors.gray[300],
        borderColor: settings.colors.gray[50]
      }, {
        label: "Last Week",
        data: earnings,
        backgroundColor: backgroundColor,
        borderColor: settings.colors.primary[50]
      }, {
        label: "Today",
        data: [],
        backgroundColor: settings.colors.accent[500],
        borderColor: settings.colors.accent[50]
      }]
    };
    Charts.create(id, type, options, data);
  }; // Create Chart


  Earnings('#earningsChart');
})();

/***/ }),

/***/ 10:
/*!***************************************************!*\
  !*** multi ./src/js/page.instructor-dashboard.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/page.instructor-dashboard.js */"./src/js/page.instructor-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UuaW5zdHJ1Y3Rvci1kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiQ2hhcnRzIiwiZWFybmluZ3MiLCJwcmV2IiwiYmFja2dyb3VuZENvbG9yIiwic3RhcnQiLCJtb21lbnQiLCJlbmQiLCJyYW5nZSIsInkiLCJNYXRoIiwieCIsIm0iLCJzZXR0aW5ncyIsIkVhcm5pbmdzIiwidHlwZSIsIm9wdGlvbnMiLCJiYXJSb3VuZG5lc3MiLCJsZWdlbmQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJsYWJlbHMiLCJ1c2VQb2ludFN0eWxlIiwicGFkZGluZyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJjYWxsYmFjayIsImEiLCJ4QXhlcyIsIm9mZnNldCIsIm1heEJhclRoaWNrbmVzcyIsImdyaWRMaW5lcyIsInRpbWUiLCJ1bml0IiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsInQiLCJlIiwibyIsInIiLCJkYXRhIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwy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Q2tCLEtBQXBCLEVBQVZ6QixPQUFVLENBQVZBO0FBOENBLFFBQUkwQixJQUFJLEdBQUc7QUFDVEMsY0FBUSxFQUFFLENBQUM7QUFDVE4sYUFBSyxFQURJO0FBRVRLLFlBQUksRUFGSztBQUdUdEMsdUJBQWUsRUFBRVMsUUFBUSxDQUFSQSxZQUhSLEdBR1FBLENBSFI7QUFJVCtCLG1CQUFXLEVBQUUvQixRQUFRLENBQVJBO0FBSkosT0FBRCxFQUtQO0FBQ0R3QixhQUFLLEVBREo7QUFFREssWUFBSSxFQUZIO0FBR0R0Qyx1QkFBZSxFQUhkO0FBSUR3QyxtQkFBVyxFQUFFL0IsUUFBUSxDQUFSQTtBQUpaLE9BTE8sRUFVUDtBQUNEd0IsYUFBSyxFQURKO0FBRURLLFlBQUksRUFGSDtBQUdEdEMsdUJBQWUsRUFBRVMsUUFBUSxDQUFSQSxjQUhoQixHQUdnQkEsQ0FIaEI7QUFJRCtCLG1CQUFXLEVBQUUvQixRQUFRLENBQVJBO0FBSlosT0FWTztBQURELEtBQVg7QUFtQkFaLFVBQU0sQ0FBTkE7QUFwR08sR0FrQ1QsQ0FsQ1MsQ0F1R1Q7OztBQUNBYSxVQUFRLENBQVJBLGdCQUFRLENBQVJBO0FBeEdGLEsiLCJmaWxlIjoiL2Rpc3QvYXNzZXRzL2pzL3BhZ2UuaW5zdHJ1Y3Rvci1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsIihmdW5jdGlvbigpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgQ2hhcnRzLmluaXQoKVxuXG4gIHZhciBlYXJuaW5ncyA9IFtdXG4gIHZhciBwcmV2ID0gW11cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IFtdXG5cbiAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXG4gIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xuICB2YXIgZW5kID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gdG9kYXlcbiAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXG5cbiAgLy8gQ3JlYXRlIHRoZSBlYXJuaW5ncyBncmFwaCBkYXRhXG4gIC8vIEl0ZXJhdGUgdGhlIGRhdGUgcmFuZ2UgYW5kIGFzc2lnbiBhIHJhbmRvbSAoJCkgZWFybmluZ3MgdmFsdWUgZm9yIGVhY2ggZGF5XG4gIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obSkge1xuICAgIGVhcm5pbmdzLnB1c2goe1xuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAwKSArIDMwLFxuICAgICAgeDogbS50b0RhdGUoKVxuICAgIH0pXG4gICAgcHJldi5wdXNoKHtcbiAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAxMCxcbiAgICAgIHg6IG0udG9EYXRlKClcbiAgICB9KVxuXG4gICAgaWYgKG0uc3RhcnRPZignZGF5JykuaXNTYW1lKG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpKSkge1xuICAgICAgYmFja2dyb3VuZENvbG9yLnB1c2goc2V0dGluZ3MuY29sb3JzLmFjY2VudFs1MDBdKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGJhY2tncm91bmRDb2xvci5wdXNoKHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0pXG4gICAgfVxuICB9KVxuXG4gIHZhciBFYXJuaW5ncyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JvdW5kZWRCYXInLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICBiYXJSb3VuZG5lc3M6IDEuMixcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgdXNlUG9pbnRTdHlsZTogdHJ1ZSxcbiAgICAgICAgICBwYWRkaW5nOiAxNlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICBpZiAoIShhICUgMTApKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBvZmZzZXQ6IHRydWUsXG4gICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXhCYXJUaGlja25lc3M6IDIwLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJyArIG8gKyBcIjwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJQcmV2aW91cyBXZWVrXCIsXG4gICAgICAgIGRhdGE6IHByZXYsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzUwXVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJMYXN0IFdlZWtcIixcbiAgICAgICAgZGF0YTogZWFybmluZ3MsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnByaW1hcnlbNTBdXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5hY2NlbnRbNTAwXSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5hY2NlbnRbNTBdXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICAvLyBDcmVhdGUgQ2hhcnRcbiAgRWFybmluZ3MoJyNlYXJuaW5nc0NoYXJ0JylcblxufSkoKSJdLCJzb3VyY2VSb290IjoiIn0=