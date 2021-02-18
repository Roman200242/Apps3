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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function openMenu(){\r\n//    document.getElementById('menu').classList.toggle('show-nav');\r\n// }\r\nconst burger = document.getElementById('headerToggle');\r\nconst head = document.getElementById('menu');\r\n\r\nburger.addEventListener('click', event => {\r\n    document.body.classList.toggle('show-nav');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.mod-but');\r\nconst modalClose2 = document.querySelectorAll('.mod2-but');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let $this = event.target;\r\n    let modalId = $this.getAttribute('data-modal');\r\n    let modal = document.getElementById(modalId);\r\n    let modalContent = document.querySelector('.modal-content');\r\n\r\n      modalContent.addEventListener('click', event => {\r\n          event.stopPropagation();\r\n      });\r\n\r\n        modal.classList.add('show-modal');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(() => {\r\n          modalContent.style.transform = 'none';\r\n          modalContent.style.opacity = '1';\r\n        },1);\r\n  });\r\n});\r\n\r\nmodalClose.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.target.closest('.modal');\r\n    let modalContent = document.querySelector('.modal-content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n      currentModal.classList.remove('show-modal');\r\n      body.classList.remove('no-scroll');\r\n    },200);\r\n\r\n      });\r\n});\r\nmodalClose2.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.target.closest('.modal');\r\n\r\n\r\n    let modalContent = document.querySelector('.modal-content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n      currentModal.classList.remove('show-modal');\r\n      body.classList.remove('no-scroll');\r\n    },200);\r\n      });\r\n});\r\n\r\nmodal.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.target;\r\n\r\n    let modalContent = document.querySelector('.modal-content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n      currentModal.classList.remove('show-modal');\r\n      body.classList.remove('no-scroll');\r\n    },200);\r\n      });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar slideShow = (function () {\r\nreturn function (selector, config) {\r\nvar\r\n_slider = document.querySelector(selector), // основный элемент блока\r\n_sliderContainer = _slider.querySelector('.slider__items'), // контейнер для .slider-item\r\n_sliderItems = _slider.querySelectorAll('.slider__item'), // коллекция .slider-item\r\n_sliderControls = _slider.querySelectorAll('.slider__control'), // элементы управления\r\n_currentPosition = 0, // позиция левого активного элемента\r\n_transformValue = 0, // значение транфсофрмации .slider_wrapper\r\n_transformStep = 100, // величина шага (для трансформации)\r\n_itemsArray = [], // массив элементов\r\n_timerId,\r\n_indicatorItems,\r\n_indicatorIndex = 0,\r\n_indicatorIndexMax = _sliderItems.length - 1,\r\n_config = {\r\n  isAutoplay: false, // автоматическая смена слайдов\r\n  directionAutoplay: 'next', // направление смены слайдов\r\n  delayAutoplay: 5000, // интервал между автоматической сменой слайдов\r\n  isPauseOnHover: true // устанавливать ли паузу при поднесении курсора к слайдеру\r\n};\r\n\r\n// настройка конфигурации слайдера в зависимости от полученных ключей\r\nfor (var key in config) {\r\nif (key in _config) {\r\n  _config[key] = config[key];\r\n}\r\n}\r\n\r\n// наполнение массива _itemsArray\r\nfor (var i = 0; i < _sliderItems.length; i++) {\r\n_itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });\r\n}\r\n\r\n// переменная position содержит методы с помощью которой можно получить минимальный и максимальный индекс элемента, а также соответствующему этому индексу позицию\r\nvar position = {\r\ngetItemIndex: function (mode) {\r\n  var index = 0;\r\n  for (var i = 0; i < _itemsArray.length; i++) {\r\n    if ((_itemsArray[i].position < _itemsArray[index].position && mode === 'min') || (_itemsArray[i].position > _itemsArray[index].position && mode === 'max')) {\r\n      index = i;\r\n    }\r\n  }\r\n  return index;\r\n},\r\ngetItemPosition: function (mode) {\r\n  return _itemsArray[position.getItemIndex(mode)].position;\r\n}\r\n};\r\n\r\n// функция, выполняющая смену слайда в указанном направлении\r\nvar _move = function (direction) {\r\nvar nextItem, currentIndicator = _indicatorIndex;\r\nif (direction === 'next') {\r\n  _currentPosition++;\r\n  if (_currentPosition > position.getItemPosition('max')) {\r\n    nextItem = position.getItemIndex('min');\r\n    _itemsArray[nextItem].position = position.getItemPosition('max') + 1;\r\n    _itemsArray[nextItem].transform += _itemsArray.length * 100;\r\n    _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';\r\n  }\r\n  _transformValue -= _transformStep;\r\n  _indicatorIndex = _indicatorIndex + 1;\r\n  if (_indicatorIndex > _indicatorIndexMax) {\r\n    _indicatorIndex = 0;\r\n  }\r\n} else {\r\n  _currentPosition--;\r\n  if (_currentPosition < position.getItemPosition('min')) {\r\n    nextItem = position.getItemIndex('max');\r\n    _itemsArray[nextItem].position = position.getItemPosition('min') - 1;\r\n    _itemsArray[nextItem].transform -= _itemsArray.length * 100;\r\n    _itemsArray[nextItem].item.style.transform = 'translateX(' + _itemsArray[nextItem].transform + '%)';\r\n  }\r\n  _transformValue += _transformStep;\r\n  _indicatorIndex = _indicatorIndex - 1;\r\n  if (_indicatorIndex < 0) {\r\n    _indicatorIndex = _indicatorIndexMax;\r\n  }\r\n}\r\n_sliderContainer.style.transform = 'translateX(' + _transformValue + '%)';\r\n_indicatorItems[currentIndicator].classList.remove('active');\r\n_indicatorItems[_indicatorIndex].classList.add('active');\r\n};\r\n\r\n// функция, осуществляющая переход к слайду по его порядковому номеру\r\nvar _moveTo = function (index) {\r\nvar i = 0, direction = (index > _indicatorIndex) ? 'next' : 'prev';\r\nwhile (index !== _indicatorIndex && i <= _indicatorIndexMax) {\r\n  _move(direction);\r\n  i++;\r\n}\r\n};\r\n\r\n// функция для запуска автоматической смены слайдов через промежутки времени\r\nvar _startAutoplay = function () {\r\nif (!_config.isAutoplay) {\r\n  return;\r\n}\r\n_stopAutoplay();\r\n_timerId = setInterval(function () {\r\n  _move(_config.directionAutoplay);\r\n}, _config.delayAutoplay);\r\n};\r\n\r\n// функция, отключающая автоматическую смену слайдов\r\nvar _stopAutoplay = function () {\r\nclearInterval(_timerId);\r\n};\r\n\r\n// функция, добавляющая индикаторы к слайдеру\r\nvar _addIndicators = function () {\r\nvar indicatorsContainer = document.createElement('ol');\r\nindicatorsContainer.classList.add('slider__indicators');\r\nfor (var i = 0; i < _sliderItems.length; i++) {\r\n  var sliderIndicatorsItem = document.createElement('li');\r\n  if (i === 0) {\r\n    sliderIndicatorsItem.classList.add('active');\r\n  }\r\n  sliderIndicatorsItem.setAttribute(\"data-slide-to\", i);\r\n  indicatorsContainer.appendChild(sliderIndicatorsItem);\r\n}\r\n_slider.appendChild(indicatorsContainer);\r\n_indicatorItems = _slider.querySelectorAll('.slider__indicators > li')\r\n};\r\n\r\n// функция, осуществляющая установку обработчиков для событий\r\nvar _setUpListeners = function () {\r\n_slider.addEventListener('click', function (e) {\r\n  if (e.target.classList.contains('slider__control')) {\r\n    e.preventDefault();\r\n    _move(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');\r\n    _startAutoplay();\r\n  } else if (e.target.getAttribute('data-slide-to')) {\r\n    e.preventDefault();\r\n    _moveTo(parseInt(e.target.getAttribute('data-slide-to')));\r\n    _startAutoplay();\r\n  }\r\n});\r\ndocument.addEventListener('visibilitychange', function () {\r\n  if (document.visibilityState === \"hidden\") {\r\n    _stopAutoplay();\r\n  } else {\r\n    _startAutoplay();\r\n  }\r\n}, false);\r\nif (_config.isPauseOnHover && _config.isAutoplay) {\r\n  _slider.addEventListener('mouseenter', function () {\r\n    _stopAutoplay();\r\n  });\r\n  _slider.addEventListener('mouseleave', function () {\r\n    _startAutoplay();\r\n  });\r\n}\r\n};\r\n\r\n// добавляем индикаторы к слайдеру\r\n_addIndicators();\r\n// установливаем обработчики для событий\r\n_setUpListeners();\r\n// запускаем автоматическую смену слайдов, если установлен соответствующий ключ\r\n_startAutoplay();\r\n\r\nreturn {\r\n// метод слайдера для перехода к следующему слайду\r\nnext: function () {\r\n  _move('next');\r\n},\r\n// метод слайдера для перехода к предыдущему слайду\r\nleft: function () {\r\n  _move('prev');\r\n},\r\n// метод отключающий автоматическую смену слайдов\r\nstop: function () {\r\n  _config.isAutoplay = false;\r\n  _stopAutoplay();\r\n},\r\n// метод запускающий автоматическую смену слайдов\r\ncycle: function () {\r\n  _config.isAutoplay = true;\r\n  _startAutoplay();\r\n}\r\n}\r\n}\r\n}());\r\n\r\nslideShow('.slider', {\r\nisAutoplay: true\r\n});\r\n\r\nslideShow('.slider2', {\r\nisAutoplay: true\r\n});\r\nslideShow('.slider3', {\r\nisAutoplay: true\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/slider_2.js":
/*!***********************************!*\
  !*** ./src/assets/js/slider_2.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <script>\\n| \\n|   'use strict';\");\n\n//# sourceURL=webpack:///./src/assets/js/slider_2.js?");

/***/ }),

/***/ "./src/assets/js/slider_3.js":
/*!***********************************!*\
  !*** ./src/assets/js/slider_3.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("slideShow('.slider3', {\r\nisAutoplay: true\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/slider_3.js?");

/***/ }),

/***/ "./src/assets/js/title.js":
/*!********************************!*\
  !*** ./src/assets/js/title.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let tooltipElem;\r\n\r\n    document.onmouseover = function(event) {\r\n      let target = event.target;\r\n\r\n      // если у нас есть подсказка...\r\n      let tooltipHtml = target.dataset.tooltip;\r\n      if (!tooltipHtml) return;\r\n\r\n      // ...создадим элемент для подсказки\r\n\r\n      tooltipElem = document.createElement('div');\r\n      tooltipElem.className = 'tooltip';\r\n      tooltipElem.innerHTML = tooltipHtml;\r\n      document.body.append(tooltipElem);\r\n\r\n      // спозиционируем его сверху от аннотируемого элемента (top-center)\r\n      let coords = target.getBoundingClientRect();\r\n\r\n      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;\r\n      if (left < 0) left = 0; // не заезжать за левый край окна\r\n\r\n      let top = coords.top - tooltipElem.offsetHeight - 5;\r\n      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу\r\n        top = coords.top + target.offsetHeight + 5;\r\n      }\r\n\r\n      tooltipElem.style.left = left + 'px';\r\n      tooltipElem.style.top = top + 'px';\r\n    };\r\n\r\n    document.onmouseout = function(e) {\r\n\r\n      if (tooltipElem) {\r\n        tooltipElem.remove();\r\n        tooltipElem = null;\r\n      }\r\n\r\n    };\r\n\n\n//# sourceURL=webpack:///./src/assets/js/title.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/burger.js ./src/assets/js/modal.js ./src/assets/js/slider.js ./src/assets/js/slider_2.js ./src/assets/js/slider_3.js ./src/assets/js/title.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\slider_2.js */\"./src/assets/js/slider_2.js\");\n__webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\slider_3.js */\"./src/assets/js/slider_3.js\");\nmodule.exports = __webpack_require__(/*! D:\\РОСТИК ВСЕ\\практика бд\\Autoselection\\src\\assets\\js\\title.js */\"./src/assets/js/title.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/burger.js_./src/assets/js/modal.js_./src/assets/js/slider.js_./src/assets/js/slider_2.js_./src/assets/js/slider_3.js_./src/assets/js/title.js?");

/***/ })

/******/ });