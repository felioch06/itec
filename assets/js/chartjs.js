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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/fm-plugin-chartjs/js/chartjs.js":
/*!******************************************************!*\
  !*** ./node_modules/fm-plugin-chartjs/js/chartjs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var extend = function extend(object, value) {
  for (var key in value) {
    "object" != _typeof(value[key]) ? object[key] = value[key] : extend(object[key], value[key]);
  }
};

var add = function add(element) {
  var data = element.data("add");
  var chart = $(element.data("target")).data("chart");

  if (element.is(":checked")) {
    var addRecursive = function addRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].push(a);
        }) : addRecursive(chart[o], data[o]);
      }
    };

    addRecursive(chart, data);
  } else {
    var removeRecursive = function removeRecursive(chart, data) {
      for (var o in data) {
        Array.isArray(data[o]) ? data[o].forEach(function (a) {
          chart[o].pop();
        }) : removeRecursive(chart[o], data[o]);
      }
    };

    removeRecursive(chart, data);
  }

  chart.update();
};

var update = function update(element) {
  var data = element.data("update");
  var chart = $(element.data("target")).data("chart");
  extend(chart, data);

  if (void 0 !== element.data("prefix") || void 0 !== element.data("suffix")) {
    var prefix = element.data("prefix") ? element.data("prefix") : "";
    var suffix = element.data("suffix") ? element.data("suffix") : "";

    if (chart.options.scales !== undefined) {
      chart.options.scales.yAxes[0].ticks.callback = function (a) {
        if (!(a % 10)) return prefix + a + suffix;
      };
    }

    chart.options.tooltips.callbacks.label = function (a, e) {
      var t = e.datasets[a.datasetIndex].label || "",
          o = a.yLabel || e.datasets[0].data[a.index],
          r = "";
      return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + prefix + o + suffix + "</span>";
    };
  }

  chart.update();
};

var globalSettings = {
  responsive: true,
  maintainAspectRatio: false,
  defaultColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[700] : settings.colors.gray[600],
  defaultFontFamily: settings.fonts.base,
  defaultFontSize: 13,
  layout: {
    padding: 0
  },
  legend: {
    display: false,
    position: "bottom",
    labels: {
      usePointStyle: true,
      padding: 16
    }
  },
  elements: {
    point: {
      radius: 0,
      backgroundColor: settings.colors.primary[500]
    },
    line: {
      tension: .4,
      borderWidth: 3,
      borderColor: settings.colors.primary[500],
      backgroundColor: settings.colors.transparent,
      borderCapStyle: "rounded"
    },
    rectangle: {
      backgroundColor: settings.colors.primary[500]
    },
    arc: {
      backgroundColor: settings.colors.primary[500],
      borderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white,
      borderWidth: 4
    }
  },
  tooltips: {
    enabled: !1,
    mode: "index",
    intersect: !1,
    custom: function custom(r) {
      var a = $("#chart-tooltip");

      if (a.length || (a = $('<div id="chart-tooltip" class="popover bs-popover-top" role="tooltip"></div>'), $("body").append(a)), 0 !== r.opacity) {
        if (r.body) {
          var e = r.title || [],
              l = r.body.map(function (a) {
            return a.lines;
          }),
              n = "";
          n += '<div class="arrow"></div>', e.forEach(function (a) {
            n += '<h3 class="popover-header text-center">' + a + "</h3>";
          }), l.forEach(function (a, e) {
            var t = '<span class="popover-body-indicator" style="background-color: ' + r.labelColors[e].backgroundColor + '"></span>',
                o = 1 < l.length ? "justify-content-left" : "justify-content-center";
            n += '<div class="popover-body d-flex align-items-center ' + o + '">' + t + a + "</div>";
          }), a.html(n);
        }

        var t = $(this._chart.canvas),
            o = (t.outerWidth(), t.outerHeight(), t.offset().top),
            s = t.offset().left,
            i = a.outerWidth(),
            c = a.outerHeight(),
            d = o + r.caretY - c - 16,
            u = s + r.caretX - i / 2;
        a.css({
          top: d + "px",
          left: u + "px",
          display: "block"
        });
      } else a.css("display", "none");
    },
    callbacks: {
      label: function label(a, e) {
        var t = e.datasets[a.datasetIndex].label || "",
            o = a.yLabel,
            r = "";
        return 1 < e.datasets.length && (r += '<span class="popover-body-label mr-auto">' + t + "</span>"), r += '<span class="popover-body-value">' + o + "</span>";
      }
    }
  }
};
var doughnutSettings = {
  cutoutPercentage: 83,
  tooltips: {
    callbacks: {
      title: function title(a, e) {
        return e.labels[a[0].index];
      },
      label: function label(a, e) {
        var t = "";
        return t += '<span class="popover-body-value">' + e.datasets[0].data[a.index] + "</span>";
      }
    }
  },
  legendCallback: function legendCallback(a) {
    var o = a.data,
        r = "";
    return o.labels.forEach(function (a, e) {
      var t = o.datasets[0].backgroundColor[e];
      r += '<span class="chart-legend-item">', r += '<i class="chart-legend-indicator" style="background-color: ' + t + '"></i>', r += a, r += "</span>";
    }), r;
  }
};

var create = function create(id) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var element = $(id);
  var chart = new Chart(element, {
    type: type,
    options: options,
    data: data
  });
  element.data("chart", chart);

  if (element.data("chart-legend")) {
    document.querySelector(element.data("chart-legend")).innerHTML = chart.generateLegend();
  }
};

var init = function init() {
  extend(Chart, {
    defaults: {
      global: globalSettings,
      doughnut: doughnutSettings
    }
  });
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      drawBorder: !1,
      drawTicks: !1,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[900] : settings.colors.gray[100],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2]
    },
    ticks: {
      beginAtZero: !0,
      padding: 10,
      callback: function callback(a) {
        if (!(a % 10)) return a;
      }
    }
  });
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: !1,
      drawOnChartArea: !1,
      drawTicks: !1
    },
    ticks: {
      padding: 20
    },
    maxBarThickness: 10
  });
  $('[data-toggle="chart"]').on({
    change: function change() {
      var el = $(this);

      if (el.is("[data-add]")) {
        add(el);
      }
    },
    click: function click() {
      var el = $(this);

      if (el.is("[data-update]")) {
        update(el);
      }
    }
  });
};

var Charts = {
  settings: settings,
  init: init,
  add: add,
  update: update,
  create: create
};

if (window !== undefined) {
  window.Charts = Charts;
}

/***/ }),

/***/ "./src/js/vendor/chartjs.js":
/*!**********************************!*\
  !*** ./src/js/vendor/chartjs.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fm-plugin-chartjs */ "./node_modules/fm-plugin-chartjs/js/chartjs.js");
/* harmony import */ var fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fm_plugin_chartjs__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 28:
/*!****************************************!*\
  !*** multi ./src/js/vendor/chartjs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/learndash/src/js/vendor/chartjs.js */"./src/js/vendor/chartjs.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbS1wbHVnaW4tY2hhcnRqcy9qcy9jaGFydGpzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92ZW5kb3IvY2hhcnRqcy5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJvYmplY3QiLCJ2YWx1ZSIsImtleSIsImFkZCIsImVsZW1lbnQiLCJkYXRhIiwiY2hhcnQiLCIkIiwiaXMiLCJhZGRSZWN1cnNpdmUiLCJvIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImEiLCJwdXNoIiwicmVtb3ZlUmVjdXJzaXZlIiwicG9wIiwidXBkYXRlIiwicHJlZml4Iiwic3VmZml4Iiwib3B0aW9ucyIsInNjYWxlcyIsInVuZGVmaW5lZCIsInlBeGVzIiwidGlja3MiLCJjYWxsYmFjayIsInRvb2x0aXBzIiwiY2FsbGJhY2tzIiwibGFiZWwiLCJlIiwidCIsImRhdGFzZXRzIiwiZGF0YXNldEluZGV4IiwieUxhYmVsIiwiaW5kZXgiLCJyIiwibGVuZ3RoIiwiZ2xvYmFsU2V0dGluZ3MiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImRlZmF1bHRDb2xvciIsInNldHRpbmdzIiwiY2hhcnRzIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJncmF5IiwiZGVmYXVsdEZvbnRDb2xvciIsImRlZmF1bHRGb250RmFtaWx5IiwiZm9udHMiLCJiYXNlIiwiZGVmYXVsdEZvbnRTaXplIiwibGF5b3V0IiwicGFkZGluZyIsImxlZ2VuZCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImxhYmVscyIsInVzZVBvaW50U3R5bGUiLCJlbGVtZW50cyIsInBvaW50IiwicmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImxpbmUiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJDb2xvciIsInRyYW5zcGFyZW50IiwiYm9yZGVyQ2FwU3R5bGUiLCJyZWN0YW5nbGUiLCJhcmMiLCJ3aGl0ZSIsImVuYWJsZWQiLCJtb2RlIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwiYXBwZW5kIiwib3BhY2l0eSIsImJvZHkiLCJ0aXRsZSIsImwiLCJtYXAiLCJsaW5lcyIsIm4iLCJsYWJlbENvbG9ycyIsImh0bWwiLCJfY2hhcnQiLCJjYW52YXMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJzIiwibGVmdCIsImkiLCJjIiwiZCIsImNhcmV0WSIsInUiLCJjYXJldFgiLCJjc3MiLCJkb3VnaG51dFNldHRpbmdzIiwiY3V0b3V0UGVyY2VudGFnZSIsImxlZ2VuZENhbGxiYWNrIiwiY3JlYXRlIiwiaWQiLCJ0eXBlIiwiQ2hhcnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZUxlZ2VuZCIsImluaXQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRvdWdobnV0Iiwic2NhbGVTZXJ2aWNlIiwidXBkYXRlU2NhbGVEZWZhdWx0cyIsImdyaWRMaW5lcyIsImJvcmRlckRhc2giLCJib3JkZXJEYXNoT2Zmc2V0IiwiY29sb3IiLCJkcmF3Qm9yZGVyIiwiZHJhd1RpY2tzIiwibGluZVdpZHRoIiwiemVyb0xpbmVXaWR0aCIsInplcm9MaW5lQ29sb3IiLCJ6ZXJvTGluZUJvcmRlckRhc2giLCJ6ZXJvTGluZUJvcmRlckRhc2hPZmZzZXQiLCJiZWdpbkF0WmVybyIsImRyYXdPbkNoYXJ0QXJlYSIsIm1heEJhclRoaWNrbmVzcyIsIm9uIiwiY2hhbmdlIiwiZWwiLCJjbGljayIsIkNoYXJ0cyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJjb25zdCBleHRlbmQgPSAob2JqZWN0LCB2YWx1ZSkgPT4ge1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIFwib2JqZWN0XCIgIT0gdHlwZW9mIHZhbHVlW2tleV0gPyBvYmplY3Rba2V5XSA9IHZhbHVlW2tleV0gOiBleHRlbmQob2JqZWN0W2tleV0sIHZhbHVlW2tleV0pXG59XG5cbmNvbnN0IGFkZCA9IChlbGVtZW50KSA9PiB7XG4gIHZhciBkYXRhID0gZWxlbWVudC5kYXRhKFwiYWRkXCIpXG4gIHZhciBjaGFydCA9ICQoZWxlbWVudC5kYXRhKFwidGFyZ2V0XCIpKS5kYXRhKFwiY2hhcnRcIilcblxuICBpZiAoZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgZnVuY3Rpb24gYWRkUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKSB7XG4gICAgICBmb3IgKHZhciBvIGluIGRhdGEpIEFycmF5LmlzQXJyYXkoZGF0YVtvXSkgPyBkYXRhW29dLmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgICAgICBjaGFydFtvXS5wdXNoKGEpXG4gICAgICB9KSA6IGFkZFJlY3Vyc2l2ZShjaGFydFtvXSwgZGF0YVtvXSlcbiAgICB9XG4gICAgYWRkUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKVxuICB9IFxuICBlbHNlIHtcbiAgICBmdW5jdGlvbiByZW1vdmVSZWN1cnNpdmUoY2hhcnQsIGRhdGEpIHtcbiAgICAgIGZvciAodmFyIG8gaW4gZGF0YSkgQXJyYXkuaXNBcnJheShkYXRhW29dKSA/IGRhdGFbb10uZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgICAgIGNoYXJ0W29dLnBvcCgpXG4gICAgICB9KSA6IHJlbW92ZVJlY3Vyc2l2ZShjaGFydFtvXSwgZGF0YVtvXSlcbiAgICB9XG4gICAgcmVtb3ZlUmVjdXJzaXZlKGNoYXJ0LCBkYXRhKVxuICB9XG5cbiAgY2hhcnQudXBkYXRlKClcbn1cblxuY29uc3QgdXBkYXRlID0gKGVsZW1lbnQpID0+IHtcbiAgdmFyIGRhdGEgPSBlbGVtZW50LmRhdGEoXCJ1cGRhdGVcIilcbiAgdmFyIGNoYXJ0ID0gJChlbGVtZW50LmRhdGEoXCJ0YXJnZXRcIikpLmRhdGEoXCJjaGFydFwiKVxuICBcbiAgZXh0ZW5kKGNoYXJ0LCBkYXRhKVxuXG4gIGlmICh2b2lkIDAgIT09IGVsZW1lbnQuZGF0YShcInByZWZpeFwiKSB8fCB2b2lkIDAgIT09IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSkge1xuICAgIGxldCBwcmVmaXggPSBlbGVtZW50LmRhdGEoXCJwcmVmaXhcIikgPyBlbGVtZW50LmRhdGEoXCJwcmVmaXhcIikgOiBcIlwiXG4gICAgbGV0IHN1ZmZpeCA9IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSA/IGVsZW1lbnQuZGF0YShcInN1ZmZpeFwiKSA6IFwiXCJcblxuICAgIGlmIChjaGFydC5vcHRpb25zLnNjYWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5jYWxsYmFjayA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgaWYgKCEoYSAlIDEwKSkgcmV0dXJuIHByZWZpeCArIGEgKyBzdWZmaXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFydC5vcHRpb25zLnRvb2x0aXBzLmNhbGxiYWNrcy5sYWJlbCA9IGZ1bmN0aW9uKGEsIGUpIHtcbiAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICBvID0gYS55TGFiZWwgfHwgZS5kYXRhc2V0c1swXS5kYXRhW2EuaW5kZXhdLFxuICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgcmV0dXJuIDEgPCBlLmRhdGFzZXRzLmxlbmd0aCAmJiAociArPSAnPHNwYW4gY2xhc3M9XCJwb3BvdmVyLWJvZHktbGFiZWwgbXItYXV0b1wiPicgKyB0ICsgXCI8L3NwYW4+XCIpLCByICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS12YWx1ZVwiPicgKyBwcmVmaXggKyBvICsgc3VmZml4ICsgXCI8L3NwYW4+XCJcbiAgICB9XG4gIH1cblxuICBjaGFydC51cGRhdGUoKVxufVxuXG5jb25zdCBnbG9iYWxTZXR0aW5ncyA9IHtcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gIGRlZmF1bHRDb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbNzAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzYwMF0sXG4gIGRlZmF1bHRGb250Q29sb3I6IFwiZGFya1wiID09IHNldHRpbmdzLmNoYXJ0cy5jb2xvclNjaGVtZSA/IHNldHRpbmdzLmNvbG9ycy5ncmF5WzcwMF0gOiBzZXR0aW5ncy5jb2xvcnMuZ3JheVs2MDBdLFxuICBkZWZhdWx0Rm9udEZhbWlseTogc2V0dGluZ3MuZm9udHMuYmFzZSxcbiAgZGVmYXVsdEZvbnRTaXplOiAxMyxcbiAgbGF5b3V0OiB7XG4gICAgcGFkZGluZzogMFxuICB9LFxuICBsZWdlbmQ6IHtcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogXCJib3R0b21cIixcbiAgICBsYWJlbHM6IHtcbiAgICAgIHVzZVBvaW50U3R5bGU6IHRydWUsXG4gICAgICBwYWRkaW5nOiAxNlxuICAgIH1cbiAgfSxcbiAgZWxlbWVudHM6IHtcbiAgICBwb2ludDoge1xuICAgICAgcmFkaXVzOiAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICB0ZW5zaW9uOiAuNCxcbiAgICAgIGJvcmRlcldpZHRoOiAzLFxuICAgICAgYm9yZGVyQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy50cmFuc3BhcmVudCxcbiAgICAgIGJvcmRlckNhcFN0eWxlOiBcInJvdW5kZWRcIlxuICAgIH0sXG4gICAgcmVjdGFuZ2xlOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNldHRpbmdzLmNvbG9ycy5wcmltYXJ5WzUwMF1cbiAgICB9LFxuICAgIGFyYzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgYm9yZGVyQ29sb3I6IFwiZGFya1wiID09IHNldHRpbmdzLmNoYXJ0cy5jb2xvclNjaGVtZSA/IHNldHRpbmdzLmNvbG9ycy5ncmF5WzgwMF0gOiBzZXR0aW5ncy5jb2xvcnMud2hpdGUsXG4gICAgICBib3JkZXJXaWR0aDogNFxuICAgIH1cbiAgfSxcbiAgdG9vbHRpcHM6IHtcbiAgICBlbmFibGVkOiAhMSxcbiAgICBtb2RlOiBcImluZGV4XCIsXG4gICAgaW50ZXJzZWN0OiAhMSxcbiAgICBjdXN0b206IGZ1bmN0aW9uKHIpIHtcbiAgICAgIHZhciBhID0gJChcIiNjaGFydC10b29sdGlwXCIpO1xuICAgICAgaWYgKGEubGVuZ3RoIHx8IChhID0gJCgnPGRpdiBpZD1cImNoYXJ0LXRvb2x0aXBcIiBjbGFzcz1cInBvcG92ZXIgYnMtcG9wb3Zlci10b3BcIiByb2xlPVwidG9vbHRpcFwiPjwvZGl2PicpLCAkKFwiYm9keVwiKS5hcHBlbmQoYSkpLCAwICE9PSByLm9wYWNpdHkpIHtcbiAgICAgICAgaWYgKHIuYm9keSkge1xuICAgICAgICAgIHZhciBlID0gci50aXRsZSB8fCBbXSxcbiAgICAgICAgICAgICAgbCA9IHIuYm9keS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmxpbmVzXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuID0gXCJcIjtcbiAgICAgICAgICBuICs9ICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nLCBlLmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICBuICs9ICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlciB0ZXh0LWNlbnRlclwiPicgKyBhICsgXCI8L2gzPlwiXG4gICAgICAgICAgfSksIGwuZm9yRWFjaChmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LWluZGljYXRvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIHIubGFiZWxDb2xvcnNbZV0uYmFja2dyb3VuZENvbG9yICsgJ1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgbyA9IDEgPCBsLmxlbmd0aCA/IFwianVzdGlmeS1jb250ZW50LWxlZnRcIiA6IFwianVzdGlmeS1jb250ZW50LWNlbnRlclwiO1xuICAgICAgICAgICAgICBuICs9ICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgJyArIG8gKyAnXCI+JyArIHQgKyBhICsgXCI8L2Rpdj5cIlxuICAgICAgICAgIH0pLCBhLmh0bWwobilcbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9ICQodGhpcy5fY2hhcnQuY2FudmFzKSxcbiAgICAgICAgICAgIG8gPSAodC5vdXRlcldpZHRoKCksIHQub3V0ZXJIZWlnaHQoKSwgdC5vZmZzZXQoKS50b3ApLFxuICAgICAgICAgICAgcyA9IHQub2Zmc2V0KCkubGVmdCxcbiAgICAgICAgICAgIGkgPSBhLm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgIGMgPSBhLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICBkID0gbyArIHIuY2FyZXRZIC0gYyAtIDE2LFxuICAgICAgICAgICAgdSA9IHMgKyByLmNhcmV0WCAtIGkgLyAyO1xuICAgICAgICAgIFxuICAgICAgICBhLmNzcyh7XG4gICAgICAgICAgdG9wOiBkICsgXCJweFwiLFxuICAgICAgICAgIGxlZnQ6IHUgKyBcInB4XCIsXG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgIH0pXG5cbiAgICAgIH0gZWxzZSBhLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgfSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgIHZhciB0ID0gZS5kYXRhc2V0c1thLmRhdGFzZXRJbmRleF0ubGFiZWwgfHwgXCJcIixcbiAgICAgICAgICAgIG8gPSBhLnlMYWJlbCxcbiAgICAgICAgICAgIHIgPSBcIlwiO1xuICAgICAgICByZXR1cm4gMSA8IGUuZGF0YXNldHMubGVuZ3RoICYmIChyICs9ICc8c3BhbiBjbGFzcz1cInBvcG92ZXItYm9keS1sYWJlbCBtci1hdXRvXCI+JyArIHQgKyBcIjwvc3Bhbj5cIiksIHIgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIG8gKyBcIjwvc3Bhbj5cIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkb3VnaG51dFNldHRpbmdzID0ge1xuICBjdXRvdXRQZXJjZW50YWdlOiA4MyxcbiAgdG9vbHRpcHM6IHtcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgIHRpdGxlOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgIHJldHVybiBlLmxhYmVsc1thWzBdLmluZGV4XVxuICAgICAgfSxcbiAgICAgIGxhYmVsOiBmdW5jdGlvbihhLCBlKSB7XG4gICAgICAgIHZhciB0ID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIHQgKz0gJzxzcGFuIGNsYXNzPVwicG9wb3Zlci1ib2R5LXZhbHVlXCI+JyArIGUuZGF0YXNldHNbMF0uZGF0YVthLmluZGV4XSArIFwiPC9zcGFuPlwiXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBsZWdlbmRDYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgIHZhciBvID0gYS5kYXRhLFxuICAgICAgICByID0gXCJcIjtcbiAgICByZXR1cm4gby5sYWJlbHMuZm9yRWFjaChmdW5jdGlvbihhLCBlKSB7XG4gICAgICB2YXIgdCA9IG8uZGF0YXNldHNbMF0uYmFja2dyb3VuZENvbG9yW2VdO1xuICAgICAgciArPSAnPHNwYW4gY2xhc3M9XCJjaGFydC1sZWdlbmQtaXRlbVwiPicsIHIgKz0gJzxpIGNsYXNzPVwiY2hhcnQtbGVnZW5kLWluZGljYXRvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIHQgKyAnXCI+PC9pPicsIHIgKz0gYSwgciArPSBcIjwvc3Bhbj5cIlxuICAgIH0pLCByXG4gIH1cbn1cblxuY29uc3QgY3JlYXRlID0gKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30sIGRhdGEgPSB7fSkgPT4ge1xuICB2YXIgZWxlbWVudCA9ICQoaWQpXG4gIHZhciBjaGFydCA9IG5ldyBDaGFydChlbGVtZW50LCB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgIGRhdGE6IGRhdGFcbiAgfSlcbiAgZWxlbWVudC5kYXRhKFwiY2hhcnRcIiwgY2hhcnQpXG4gIGlmIChlbGVtZW50LmRhdGEoXCJjaGFydC1sZWdlbmRcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQuZGF0YShcImNoYXJ0LWxlZ2VuZFwiKSlcbiAgICAgIC5pbm5lckhUTUwgPSBjaGFydC5nZW5lcmF0ZUxlZ2VuZCgpXG4gIH1cbn1cblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgZXh0ZW5kKENoYXJ0LCB7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgIGdsb2JhbDogZ2xvYmFsU2V0dGluZ3MsXG4gICAgICBkb3VnaG51dDogZG91Z2hudXRTZXR0aW5nc1xuICAgIH1cbiAgfSlcblxuICBDaGFydC5zY2FsZVNlcnZpY2UudXBkYXRlU2NhbGVEZWZhdWx0cyhcImxpbmVhclwiLCB7XG4gICAgZ3JpZExpbmVzOiB7XG4gICAgICBib3JkZXJEYXNoOiBbMl0sXG4gICAgICBib3JkZXJEYXNoT2Zmc2V0OiBbMl0sXG4gICAgICBjb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbOTAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzEwMF0sXG4gICAgICBkcmF3Qm9yZGVyOiAhMSxcbiAgICAgIGRyYXdUaWNrczogITEsXG4gICAgICBsaW5lV2lkdGg6IDAsXG4gICAgICB6ZXJvTGluZVdpZHRoOiAwLFxuICAgICAgemVyb0xpbmVDb2xvcjogXCJkYXJrXCIgPT0gc2V0dGluZ3MuY2hhcnRzLmNvbG9yU2NoZW1lID8gc2V0dGluZ3MuY29sb3JzLmdyYXlbOTAwXSA6IHNldHRpbmdzLmNvbG9ycy5ncmF5WzEwMF0sXG4gICAgICB6ZXJvTGluZUJvcmRlckRhc2g6IFsyXSxcbiAgICAgIHplcm9MaW5lQm9yZGVyRGFzaE9mZnNldDogWzJdXG4gICAgfSxcbiAgICB0aWNrczoge1xuICAgICAgYmVnaW5BdFplcm86ICEwLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oYSkge1xuICAgICAgICBpZiAoIShhICUgMTApKSByZXR1cm4gYVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBDaGFydC5zY2FsZVNlcnZpY2UudXBkYXRlU2NhbGVEZWZhdWx0cyhcImNhdGVnb3J5XCIsIHtcbiAgICBncmlkTGluZXM6IHtcbiAgICAgIGRyYXdCb3JkZXI6ICExLFxuICAgICAgZHJhd09uQ2hhcnRBcmVhOiAhMSxcbiAgICAgIGRyYXdUaWNrczogITFcbiAgICB9LFxuICAgIHRpY2tzOiB7XG4gICAgICBwYWRkaW5nOiAyMFxuICAgIH0sXG4gICAgbWF4QmFyVGhpY2tuZXNzOiAxMFxuICB9KVxuXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNoYXJ0XCJdJykub24oe1xuICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICBpZiAoZWwuaXMoXCJbZGF0YS1hZGRdXCIpKSB7XG4gICAgICAgIGFkZChlbClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgIGlmIChlbC5pcyhcIltkYXRhLXVwZGF0ZV1cIikpIHtcbiAgICAgICAgdXBkYXRlKGVsKVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgQ2hhcnRzID0ge1xuICBzZXR0aW5ncyxcbiAgaW5pdCxcbiAgYWRkLFxuICB1cGRhdGUsXG4gIGNyZWF0ZVxufVxuXG5pZiAod2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgd2luZG93LkNoYXJ0cyA9IENoYXJ0c1xufSIsImltcG9ydCAnZm0tcGx1Z2luLWNoYXJ0anMnIl0sInNvdXJjZVJvb3QiOiIifQ==