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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page.ui-charts.js":
/*!**********************************!*\
  !*** ./src/js/page.ui-charts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  Charts.init();

  var Performance = function Performance(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
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
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Performance",
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Orders = function Orders(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(a) {
              if (!(a % 10)) return "$" + a + "k";
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
            return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">$' + o + "k</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales",
        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32]
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Devices = function Devices(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doughnut';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      tooltips: {
        callbacks: {
          title: function title(a, e) {
            return e.labels[a[0].index];
          },
          label: function label(a, e) {
            var t = "";
            return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "%</span>";
          }
        }
      }
    }, options);
    var data = {
      labels: ["Desktop", "Tablet", "Mobile"],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: [settings.colors.primary[500], settings.colors.accent[300], settings.colors.accent[100]],
        hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
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
        pointHoverBorderColor: settings.colors.accent[400],
        pointHoverBackgroundColor: settings.colors.white,
        borderJoinStyle: 'bevel',
        lineTension: .1
      }]
    };
    Charts.create(id, type, options, data);
  }; ///////////////////
  // Create Charts //
  ///////////////////


  Performance('#performanceChart');
  Performance('#performanceAreaChart', 'line', {
    elements: {
      line: {
        fill: 'start',
        backgroundColor: settings.charts.colors.area
      }
    }
  });
  Orders('#ordersChart');
  Orders('#ordersChartSwitch');
  Devices('#devicesChart');
  TopicIQChart('#topicIqChart');
  $('[data-toggle="chart"]:checked').each(function (index, el) {
    Charts.add($(el));
  });
})();

/***/ }),

/***/ 14:
/*!****************************************!*\
  !*** multi ./src/js/page.ui-charts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/page.ui-charts.js */"./src/js/page.ui-charts.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UudWktY2hhcnRzLmpzIl0sIm5hbWVzIjpbIkNoYXJ0cyIsIlBlcmZvcm1hbmNlIiwidHlwZSIsIm9wdGlvbnMiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiY2FsbGJhY2siLCJhIiwidG9vbHRpcHMiLCJjYWxsYmFja3MiLCJsYWJlbCIsInQiLCJlIiwibyIsInIiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJPcmRlcnMiLCJiYXJSb3VuZG5lc3MiLCJEZXZpY2VzIiwidGl0bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXR0aW5ncyIsImhvdmVyQm9yZGVyQ29sb3IiLCJ3aGl0ZSIsIlRvcGljSVFDaGFydCIsImVsZW1lbnRzIiwicG9pbnQiLCJwb2ludFN0eWxlIiwicmFkaXVzIiwiaG92ZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwic2NhbGUiLCJkaXNwbGF5IiwiYmVnaW5BdFplcm8iLCJtYXhUaWNrc0xpbWl0IiwiZ3JpZExpbmVzIiwiY29sb3IiLCJhbmdsZUxpbmVzIiwicG9pbnRMYWJlbHMiLCJmb250U2l6ZSIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJKb2luU3R5bGUiLCJsaW5lVGVuc2lvbiIsImxpbmUiLCJmaWxsIiwiYXJlYSIsIiQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FB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UTtBQURIO0FBM0JrQixLQUFwQixFQUFWWixPQUFVLENBQVZBO0FBdUNBLFFBQUlhLElBQUksR0FBRztBQUNUQyxZQUFNLEVBQUUsd0VBREMsU0FDRCxDQURDO0FBRVRDLGNBQVEsRUFBRSxDQUFDO0FBQ1RQLGFBQUssRUFESTtBQUVUSyxZQUFJLEVBQUUsNkJBRkcsRUFFSCxDQUZHO0FBR1Q0Qiw2QkFBcUIsRUFBRXBCLFFBQVEsQ0FBUkEsY0FIZCxHQUdjQSxDQUhkO0FBSVRxQixpQ0FBeUIsRUFBRXJCLFFBQVEsQ0FBUkEsT0FKbEI7QUFLVHNCLHVCQUFlLEVBTE47QUFNVEMsbUJBQVcsRUFBRTtBQU5KLE9BQUQ7QUFGRCxLQUFYO0FBWUEvQyxVQUFNLENBQU5BO0FBM0pPLEdBdUdULENBdkdTLENBOEpUO0FBQ0E7QUFDQTs7O0FBRUFDLGFBQVcsQ0FBWEEsbUJBQVcsQ0FBWEE7QUFFQUEsYUFBVyxrQ0FBa0M7QUFDM0MyQixZQUFRLEVBQUU7QUFDUm9CLFVBQUksRUFBRTtBQUNKQyxZQUFJLEVBREE7QUFFSjFCLHVCQUFlLEVBQUVDLFFBQVEsQ0FBUkEsY0FBdUIwQjtBQUZwQztBQURFO0FBRGlDLEdBQWxDLENBQVhqRDtBQVNBa0IsUUFBTSxDQUFOQSxjQUFNLENBQU5BO0FBRUFBLFFBQU0sQ0FBTkEsb0JBQU0sQ0FBTkE7QUFFQUUsU0FBTyxDQUFQQSxlQUFPLENBQVBBO0FBRUFNLGNBQVksQ0FBWkEsZUFBWSxDQUFaQTtBQUVBd0IsR0FBQyxDQUFEQSwrQkFBQyxDQUFEQSxNQUF3QyxxQkFBcUI7QUFDM0RuRCxVQUFNLENBQU5BLElBQVdtRCxDQUFDLENBQVpuRCxFQUFZLENBQVpBO0FBREZtRDtBQXJMRixLIiwiZmlsZSI6Ii9kaXN0L2Fzc2V0cy9qcy9wYWdlLnVpLWNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0JztcblxuICBDaGFydHMuaW5pdCgpXG4gIFxuICB2YXIgUGVyZm9ybWFuY2UgPSBmdW5jdGlvbihpZCwgdHlwZSA9ICdsaW5lJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICBpZiAoIShhICUgMTApKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIGEgKyBcImtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJyArIG8gKyBcIms8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJQZXJmb3JtYW5jZVwiLFxuICAgICAgICBkYXRhOiBbMCwgMTAsIDUsIDE1LCAxMCwgMjAsIDE1LCAyNSwgMjAsIDMwLCAyNSwgNDBdXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICB2YXIgT3JkZXJzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAncm91bmRlZEJhcicsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcbiAgICAgIGJhclJvdW5kbmVzczogMS4yLFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICBpZiAoIShhICUgMTApKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIiRcIiArIGEgKyBcImtcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmRhdGFzZXRzW2EuZGF0YXNldEluZGV4XS5sYWJlbCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgICAgICByID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiAxIDwgZS5kYXRhc2V0cy5sZW5ndGggJiYgKHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWxhYmVsIG1yLWF1dG9cIj4nICsgdCArIFwiPC9zcGFuPlwiKSwgciArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktdmFsdWVcIj4kJyArIG8gKyBcIms8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogXCJTYWxlc1wiLFxuICAgICAgICBkYXRhOiBbMjUsIDIwLCAzMCwgMjIsIDE3LCAxMCwgMTgsIDI2LCAyOCwgMjYsIDIwLCAzMl1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcbiAgfVxuXG4gIHZhciBEZXZpY2VzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnZG91Z2hudXQnLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0gQ2hhcnQuaGVscGVycy5tZXJnZSh7XG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICB0aXRsZTogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubGFiZWxzW2FbMF0uaW5kZXhdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYWJlbDogZnVuY3Rpb24oYSwgZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHQgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIGUuZGF0YXNldHNbMF0uZGF0YVthLmluZGV4XSArIFwiJTwvc3Bhbj5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGxhYmVsczogW1wiRGVza3RvcFwiLCBcIlRhYmxldFwiLCBcIk1vYmlsZVwiXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbNjAsIDI1LCAxNV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW3NldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sIHNldHRpbmdzLmNvbG9ycy5hY2NlbnRbMzAwXSwgc2V0dGluZ3MuY29sb3JzLmFjY2VudFsxMDBdXSxcbiAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbODAwXSA6IHNldHRpbmdzLmNvbG9ycy53aGl0ZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxuICB9XG5cbiAgdmFyIFRvcGljSVFDaGFydCA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JhZGFyJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICBwb2ludFN0eWxlOiAnY2lyY2xlJyxcbiAgICAgICAgICByYWRpdXM6IDQsXG4gICAgICAgICAgaG92ZXJSYWRpdXM6IDUsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgbWF4VGlja3NMaW1pdDogNFxuICAgICAgICB9LFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICBjb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbOTAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzMwMF1cbiAgICAgICAgfSxcbiAgICAgICAgYW5nbGVMaW5lczoge1xuICAgICAgICAgIGNvbG9yOiBcImRhcmtcIiA9PSBzZXR0aW5ncy5jaGFydHMuY29sb3JTY2hlbWUgPyBzZXR0aW5ncy5jb2xvcnMuZ3JheVs5MDBdIDogc2V0dGluZ3MuY29sb3JzLmdyYXlbMzAwXVxuICAgICAgICB9LFxuICAgICAgICBwb2ludExhYmVsczoge1xuICAgICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgbGFiZWw6IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBvID0gYS55TGFiZWwsXG4gICAgICAgICAgICAgICAgciA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIG8gKyBcIiBwb2ludHM8L3NwYW4+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBsYWJlbHM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiRmxpbnRvXCIsIFwiVnVlLmpzXCIsIFwiU2tldGNoXCIsIFwiUHJpY2lwbGVcIiwgXCJDU1NcIiwgXCJBbmd1bGFyXCJdLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiBcIkV4cGVyaWVuY2UgSVFcIixcbiAgICAgICAgZGF0YTogWzMwLCAzNSwgMzMsIDMyLCAzMSwgMzAsIDI4LCAzNl0sXG4gICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogc2V0dGluZ3MuY29sb3JzLmFjY2VudFs0MDBdLFxuICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICAgIGJvcmRlckpvaW5TdHlsZTogJ2JldmVsJyxcbiAgICAgICAgbGluZVRlbnNpb246IC4xXG4gICAgICB9XVxuICAgIH1cblxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIENyZWF0ZSBDaGFydHMgLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIFBlcmZvcm1hbmNlKCcjcGVyZm9ybWFuY2VDaGFydCcpXG4gIFxuICBQZXJmb3JtYW5jZSgnI3BlcmZvcm1hbmNlQXJlYUNoYXJ0JywgJ2xpbmUnLCB7XG4gICAgZWxlbWVudHM6IHtcbiAgICAgIGxpbmU6IHtcbiAgICAgICAgZmlsbDogJ3N0YXJ0JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jaGFydHMuY29sb3JzLmFyZWFcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgT3JkZXJzKCcjb3JkZXJzQ2hhcnQnKVxuXG4gIE9yZGVycygnI29yZGVyc0NoYXJ0U3dpdGNoJylcblxuICBEZXZpY2VzKCcjZGV2aWNlc0NoYXJ0JylcblxuICBUb3BpY0lRQ2hhcnQoJyN0b3BpY0lxQ2hhcnQnKVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNoYXJ0XCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICBDaGFydHMuYWRkKCQoZWwpKVxuICB9KVxuXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==