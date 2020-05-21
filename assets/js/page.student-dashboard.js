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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.student-dashboard.js":
/*!******************************************!*\
  !*** ./src/js/page.student-dashboard.js ***!
  \******************************************/
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
          color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[300]
        },
        angleLines: {
          color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[300]
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

/***/ 12:
/*!************************************************!*\
  !*** multi ./src/js/page.student-dashboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/page.student-dashboard.js */"./src/js/page.student-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2Uuc3R1ZGVudC1kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiQ2hhcnRzIiwiZWFybmluZ3MiLCJzdGFydCIsIm1vbWVudCIsImVuZCIsInJhbmdlIiwieSIsIk1hdGgiLCJ4IiwiV2Vla0lRQ2hhcnQiLCJ0eXBlIiwib3B0aW9ucyIsImVsZW1lbnRzIiwicG9pbnQiLCJwb2ludFN0eWxlIiwicmFkaXVzIiwiaG92ZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXR0aW5ncyIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJzY2FsZXMiLCJ5QXhlcyIsImdyaWRMaW5lcyIsImRpc3BsYXkiLCJ0aWNrcyIsInhBeGVzIiwiZGlzdHJpYnV0aW9uIiwidGltZSIsInVuaXQiLCJzdGVwU2l6ZSIsImF1dG9Ta2lwIiwiZGlzcGxheUZvcm1hdHMiLCJkYXkiLCJ0b29sdGlwcyIsImNhbGxiYWNrcyIsImxhYmVsIiwidCIsImUiLCJhIiwibyIsInIiLCJkYXRhIiwiZGF0YXNldHMiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwid2hpdGUiLCJUb3BpY0lRQ2hhcnQiLCJzY2FsZSIsImJlZ2luQXRaZXJvIiwibWF4VGlja3NMaW1pdCIsImNvbG9yIiwiYW5nbGVMaW5lcyIsInBvaW50TGFiZWxzIiwiZm9udFNpemUiLCJsYWJlbHMiLCJib3JkZXJKb2luU3R5bGUiLCJsaW5lVGVuc2lvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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QUNUQyxlQUFLLEVBQUUscUJBQWU7QUFDcEIsZ0JBQUlDLENBQUMsR0FBR0MsQ0FBQyxDQUFEQSxTQUFXQyxDQUFDLENBQVpELHVCQUFSO0FBQUEsZ0JBQ0lFLENBQUMsR0FBR0QsQ0FBQyxDQURUO0FBQUEsZ0JBRUlFLENBQUMsR0FGTDtBQUdBLG1CQUFPLElBQUlILENBQUMsQ0FBREEsU0FBSixXQUEwQkcsQ0FBQyxJQUFJLGtEQUEvQixZQUE2RkEsQ0FBQyxJQUFJLDBDQUF6RztBQUNEO0FBTlE7QUFESDtBQTNCa0IsS0FBcEIsRUFBVjlCLE9BQVUsQ0FBVkE7QUF1Q0EsUUFBSStCLElBQUksR0FBRztBQUNUYSxZQUFNLEVBQUUsd0VBREMsU0FDRCxDQURDO0FBRVRaLGNBQVEsRUFBRSxDQUFDO0FBQ1RQLGFBQUssRUFESTtBQUVUTSxZQUFJLEVBQUUsNkJBRkcsRUFFSCxDQUZHO0FBR1RFLDZCQUFxQixFQUFFMUIsUUFBUSxDQUFSQSxlQUhkLEdBR2NBLENBSGQ7QUFJVDJCLGlDQUF5QixFQUFFM0IsUUFBUSxDQUFSQSxPQUpsQjtBQUtUc0MsdUJBQWUsRUFMTjtBQU1UQyxtQkFBVyxFQUFFO0FBTkosT0FBRDtBQUZELEtBQVg7QUFZQXpELFVBQU0sQ0FBTkE7QUF0SU8sR0FrRlQsQ0FsRlMsQ0F5SVQ7OztBQUNBUyxhQUFXLENBQVhBLFVBQVcsQ0FBWEE7QUFDQXNDLGNBQVksQ0FBWkEsZUFBWSxDQUFaQTtBQTNJRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wYWdlLnN0dWRlbnQtZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIENoYXJ0cy5pbml0KClcblxuICB2YXIgZWFybmluZ3MgPSBbXVxuXG4gIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xuICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg2LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cbiAgdmFyIGVuZCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIHRvZGF5XG4gIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxuXG4gIC8vIENyZWF0ZSB0aGUgZWFybmluZ3MgZ3JhcGggZGF0YVxuICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gKCQpIGVhcm5pbmdzIHZhbHVlIGZvciBlYWNoIGRheVxuICByYW5nZS5ieSgnZGF5cycsIGZ1bmN0aW9uKG1vbWVudCkge1xuICAgIGVhcm5pbmdzLnB1c2goe1xuICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSArIDE1LFxuICAgICAgeDogbW9tZW50LnRvRGF0ZSgpXG4gICAgfSlcbiAgfSlcblxuICB2YXIgV2Vla0lRQ2hhcnQgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICByYWRpdXM6IDQsXG4gICAgICAgICAgaG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgZGlzdHJpYnV0aW9uOiAnc2VyaWVzJyxcbiAgICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB1bml0OiAnZGF5JyxcbiAgICAgICAgICAgIHN0ZXBTaXplOiAxLFxuICAgICAgICAgICAgYXV0b1NraXA6IGZhbHNlLFxuICAgICAgICAgICAgZGlzcGxheUZvcm1hdHM6IHtcbiAgICAgICAgICAgICAgZGF5OiAnZGRkJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4nICsgbyArIFwiIHBvaW50czwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJFeHBlcmllbmNlIElRXCIsXG4gICAgICAgIGRhdGE6IGVhcm5pbmdzLFxuICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5zdWNjZXNzWzQwMF0sXG4gICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy53aGl0ZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIFRvcGljSVFDaGFydCA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JhZGFyJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICByYWRpdXM6IDQsXG4gICAgICAgICAgaG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgbWF4VGlja3NMaW1pdDogNFxuICAgICAgICB9LFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbOTAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzMwMF1cbiAgICAgICAgfSxcbiAgICAgICAgYW5nbGVMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs5MDBdIDogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXVxuICAgICAgICB9LFxuICAgICAgICBwb2ludExhYmVsczoge1xuICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIG8gKyBcIiBwb2ludHM8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiRmxpbnRvXCIsIFwiVnVlLmpzXCIsIFwiU2tldGNoXCIsIFwiUHJpY2lwbGVcIiwgXCJDU1NcIiwgXCJBbmd1bGFyXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkV4cGVyaWVuY2UgSVFcIixcbiAgICAgICAgZGF0YTogWzMwLCAzNSwgMzMsIDMyLCAzMSwgMzAsIDI4LCAzNl0sXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLnN1Y2Nlc3NbNDAwXSxcbiAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogc2V0dGluZ3MuY29sb3JzLndoaXRlLFxuICAgICAgICBib3JkZXJKb2luU3R5bGU6ICdiZXZlbCcsXG4gICAgICAgIGxpbmVUZW5zaW9uOiAuMVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgLy8gQ3JlYXRlIENoYXJ0XG4gIFdlZWtJUUNoYXJ0KCcjaXFDaGFydCcpXG4gIFRvcGljSVFDaGFydCgnI3RvcGljSXFDaGFydCcpXG5cbn0pKCkiXSwic291cmNlUm9vdCI6IiJ9