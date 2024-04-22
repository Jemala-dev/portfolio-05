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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $footerBtn = $(".js-footer-btn");
  $footerBtn.on("click", function () {
    var that = $(this);
    that.toggleClass("is-active").parent().next().fadeToggle();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var onlyNumber = function onlyNumber(str) {
    return str.toString().replace(/[^0-9]/g, '');
  };

  var $body = $("body");
  var regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';

  var errorTemplate = function errorTemplate(msg) {
    return "\n        <div class=\"form__label-error js-form-label-error\">".concat(msg, "</div>\n    ");
  };

  $(".js-input-phone").inputmask({
    regex: regex
  });
  $body.on("keyup", ".js-form input[type=\"text\"]", function () {
    var that = $(this);
    $(".js-form-label-error").remove();
    that.closest("label").removeClass("is-error");
  });
  $body.on("submit", ".js-form", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var that = $(this);
    var inputs = that.find("input");
    $(".js-form-label-error").remove();
    checkErrors(inputs);
  });

  function checkErrors(inputs) {
    inputs.each(function (i, item) {
      var $input = $(item);
      var value = $input.val();
      var fieldName = $input.attr("name");

      if (value === "") {
        $input.closest("label").addClass("is-error").append(errorTemplate("Обязательное поле"));
      } else if (fieldName === "phone" && onlyNumber(value).length < 11) {
        $input.closest("label").addClass("is-error").append(errorTemplate("Пожалуйста, укажите корректный номер телефона"));
      }
    });
    $("label.is-error").eq(0).focus();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $headerBurger = $(".js-header-burger");
  var $body = $("body");
  var $models = $(".js-models");
  $headerBurger.on("click", function () {
    var that = $(this);
    that.toggleClass("is-active");
    $models.toggleClass("is-show");

    if ($body.css("overflow") === "hidden") {
      $body.css("overflow", "visible");
    } else {
      $body.css("overflow", "hidden");
    }
  });
  $models.on("click", "a", function () {
    $models.removeClass("is-show");
    $body.css("overflow", "visible");
    $body.removeClass("is-active");
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var introVideo = document.querySelector('.js-video');

  if (!!introVideo) {
    var videoPlayer = videojs(introVideo, {
      controls: true,
      // autoplay: true,
      width: "100%",
      height: "100%"
    }); // videoPlayer.autoplay();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _stations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stations */ "./src/blocks/modules/map/stations.js");

$(function () {
  var $map = $("#ymaps");
  $(".js-map-over").on("click", function () {
    $(this).animate({
      opacity: 0
    }, 500, function () {
      this.remove();
    });
  });
  if (!$map.length) return;
  ymaps.ready(mapInit);

  function mapInit() {
    var yMap = new ymaps.Map('ymaps', {
      center: [45.028391, 39.043272],
      zoom: 12,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'trafficControl']
    });
    _stations__WEBPACK_IMPORTED_MODULE_0__["chargingStations"].forEach(function (station) {
      var yapPlace = new ymaps.Placemark(station.coords, {
        hintContent: station.name // balloonContent: 'This is a pretty placemark'

      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/map-pin.png',
        iconImageSize: [100, 113],
        imageOffset: [-21, -56]
      });
      yMap.geoObjects.add(yapPlace);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/stations.js":
/*!********************************************!*\
  !*** ./src/blocks/modules/map/stations.js ***!
  \********************************************/
/*! exports provided: chargingStations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargingStations", function() { return chargingStations; });
var chargingStations = [{
  coords: [45.124677, 38.987982],
  name: "Лукойл"
}, {
  coords: [45.119773, 39.010781],
  name: "Лукойл"
}, {
  coords: [45.108055, 38.956969],
  name: "Schneider Electric"
}, {
  coords: [45.077782, 39.014941],
  name: "Зарядная станция для электромобилей"
}, {
  coords: [45.034637, 38.923882],
  name: "Лукойл"
}, {
  coords: [45.039708, 38.973505],
  name: "Станция зарядки электромобилей"
}, {
  coords: [45.036481, 38.973880],
  name: "Зарядная станция электромобилей"
}, {
  coords: [45.017935, 38.928755],
  name: "Зарядная станция ТРЦ Мега Адыгея"
}, {
  coords: [45.020955, 38.964089],
  name: "Станция зарядки электромобилей"
}, {
  coords: [45.018072, 38.980847],
  name: "Evergreen"
}, {
  coords: [45.013351, 38.981901],
  name: "Лукойл"
}, {
  coords: [45.032451, 39.023928],
  name: "Лукойл"
}, {
  coords: [45.026380, 39.033461],
  name: "Ингредиент"
}, {
  coords: [45.035904, 39.050652],
  name: "Electro. cars"
}, {
  coords: [45.024362, 39.048612],
  name: "ChargeNet"
}, {
  coords: [45.022507, 39.048993],
  name: "Лукойл"
}, {
  coords: [45.023395, 39.060631],
  name: "Лукойл"
}, {
  coords: [45.012749, 39.052473],
  name: "Зарядная станция"
}, {
  coords: [45.006910, 39.104719],
  name: "Станция зарядки электромобилей"
}, {
  coords: [45.005103, 39.107304],
  name: "Электрозарядная станция Electro.cars"
}, {
  coords: [45.033129, 39.134017],
  name: "Лукойл"
}, {
  coords: [45.107441, 38.659863],
  name: "Станция зарядки электромобилей"
}];

/***/ }),

/***/ "./src/blocks/modules/model-card/model-card.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/model-card/model-card.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $modelCardBtn = $(".js-model-card-btn");
  $modelCardBtn.on("click", function () {
    var that = $(this);

    var _that$data = that.data(),
        type = _that$data.type;

    that.toggleClass("is-active").siblings().removeClass("is-active");
    that.closest(".js-model-card-panel").next().find("[data-type=\"".concat(type, "\"]")).fadeToggle().siblings().fadeOut(0);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_model_card_model_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/model-card/model-card */ "./src/blocks/modules/model-card/model-card.js");
/* harmony import */ var _modules_model_card_model_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_model_card_model_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map