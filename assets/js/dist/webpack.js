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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/main.js":
/*!*******************************!*\
  !*** ./assets/js/src/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_fixedScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fixedScroll */ \"./assets/js/src/modules/fixedScroll.js\");\n/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/map */ \"./assets/js/src/modules/map.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ \"./assets/js/src/modules/form.js\");\n/* harmony import */ var _modules_mainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainMenu */ \"./assets/js/src/modules/mainMenu.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_modules_fixedScroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_mainMenu__WEBPACK_IMPORTED_MODULE_3__[\"mainMenu\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21haW4uanM/ODQ3NCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXhlZFNjcm9sbCIsImdvb2dsZU1hcCIsImNvbnRhY3RGb3JtIiwibWFpbk1lbnUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3ZEQyxzRUFBVztBQUNYQyw4REFBUztBQUNUQywrREFBVztBQUNYQyxvRUFBUTtBQUNULENBTEQiLCJmaWxlIjoiLi9hc3NldHMvanMvc3JjL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZml4ZWRTY3JvbGwgZnJvbSBcIi4vbW9kdWxlcy9maXhlZFNjcm9sbFwiO1xyXG5pbXBvcnQgZ29vZ2xlTWFwIGZyb20gXCIuL21vZHVsZXMvbWFwXCI7XHJcbmltcG9ydCBjb250YWN0Rm9ybSBmcm9tIFwiLi9tb2R1bGVzL2Zvcm1cIjtcclxuaW1wb3J0IHsgbWFpbk1lbnUgfSBmcm9tIFwiLi9tb2R1bGVzL21haW5NZW51XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICBmaXhlZFNjcm9sbCgpO1xyXG4gIGdvb2dsZU1hcCgpO1xyXG4gIGNvbnRhY3RGb3JtKCk7XHJcbiAgbWFpbk1lbnUoKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/main.js\n");

/***/ }),

/***/ "./assets/js/src/modules/bodyHidden.js":
/*!*********************************************!*\
  !*** ./assets/js/src/modules/bodyHidden.js ***!
  \*********************************************/
/*! exports provided: bodyHidden, bodyVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyHidden\", function() { return bodyHidden; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyVisible\", function() { return bodyVisible; });\nfunction getScrollBarWidth() {\n  let div = document.createElement('div');\n  div.style.overflowY = 'scroll';\n  div.style.width = '50px';\n  div.style.height = '50px';\n  document.body.append(div);\n  let scrollWidth = div.offsetWidth - div.clientWidth;\n  div.remove();\n  return scrollWidth;\n}\n\nfunction bodyHidden() {\n  const body = document.querySelector('body');\n  body.style.overflow = 'hidden';\n  body.style.width = '100vw';\n  body.style.paddingRight = getScrollBarWidth() + 'px';\n}\nfunction bodyVisible() {\n  const body = document.querySelector('body');\n  body.style.overflow = 'initial';\n  body.style.width = 'auto';\n  body.style.paddingRight = '0';\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvYm9keUhpZGRlbi5qcz84YTcxIl0sIm5hbWVzIjpbImdldFNjcm9sbEJhcldpZHRoIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ3aWR0aCIsImhlaWdodCIsImJvZHkiLCJhcHBlbmQiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmUiLCJib2R5SGlkZGVuIiwicXVlcnlTZWxlY3RvciIsIm92ZXJmbG93IiwicGFkZGluZ1JpZ2h0IiwiYm9keVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLGlCQUFULEdBQTZCO0FBQzNCLE1BQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUYsS0FBRyxDQUFDRyxLQUFKLENBQVVDLFNBQVYsR0FBc0IsUUFBdEI7QUFDQUosS0FBRyxDQUFDRyxLQUFKLENBQVVFLEtBQVYsR0FBa0IsTUFBbEI7QUFDQUwsS0FBRyxDQUFDRyxLQUFKLENBQVVHLE1BQVYsR0FBbUIsTUFBbkI7QUFDQUwsVUFBUSxDQUFDTSxJQUFULENBQWNDLE1BQWQsQ0FBcUJSLEdBQXJCO0FBQ0EsTUFBSVMsV0FBVyxHQUFHVCxHQUFHLENBQUNVLFdBQUosR0FBa0JWLEdBQUcsQ0FBQ1csV0FBeEM7QUFDQVgsS0FBRyxDQUFDWSxNQUFKO0FBQ0EsU0FBT0gsV0FBUDtBQUNEOztBQUVNLFNBQVNJLFVBQVQsR0FBc0I7QUFDM0IsUUFBTU4sSUFBSSxHQUFHTixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBUCxNQUFJLENBQUNKLEtBQUwsQ0FBV1ksUUFBWCxHQUFzQixRQUF0QjtBQUNBUixNQUFJLENBQUNKLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixPQUFuQjtBQUNBRSxNQUFJLENBQUNKLEtBQUwsQ0FBV2EsWUFBWCxHQUEwQmpCLGlCQUFpQixLQUFLLElBQWhEO0FBQ0Q7QUFFTSxTQUFTa0IsV0FBVCxHQUF1QjtBQUM1QixRQUFNVixJQUFJLEdBQUdOLFFBQVEsQ0FBQ2EsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FQLE1BQUksQ0FBQ0osS0FBTCxDQUFXWSxRQUFYLEdBQXNCLFNBQXRCO0FBQ0FSLE1BQUksQ0FBQ0osS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0FFLE1BQUksQ0FBQ0osS0FBTCxDQUFXYSxZQUFYLEdBQTBCLEdBQTFCO0FBQ0QiLCJmaWxlIjoiLi9hc3NldHMvanMvc3JjL21vZHVsZXMvYm9keUhpZGRlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFNjcm9sbEJhcldpZHRoKCkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpO1xuICBsZXQgc2Nyb2xsV2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XG4gIGRpdi5yZW1vdmUoKTtcbiAgcmV0dXJuIHNjcm9sbFdpZHRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9keUhpZGRlbigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBib2R5LnN0eWxlLndpZHRoID0gJzEwMHZ3JztcbiAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBnZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvZHlWaXNpYmxlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2luaXRpYWwnO1xuICBib2R5LnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/modules/bodyHidden.js\n");

/***/ }),

/***/ "./assets/js/src/modules/fixedScroll.js":
/*!**********************************************!*\
  !*** ./assets/js/src/modules/fixedScroll.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fixedScroll; });\n/* harmony import */ var _bodyHidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHidden */ \"./assets/js/src/modules/bodyHidden.js\");\n\nfunction fixedScroll() {\n  const header = document.querySelector('.main-header');\n  const menuLinks = document.querySelectorAll('#js-main-menu a');\n  const menuItems = document.querySelectorAll('#js-main-menu li');\n  const mainMenu = document.querySelector('#js-main-menu');\n  const sandwitchWrap = document.querySelector('#js-sandwitch-wrap');\n  window.addEventListener('scroll', () => {\n    if (window.scrollY > 800) {\n      header.classList.add('fixed-scroll');\n    } else {\n      header.classList.remove('fixed-scroll');\n    }\n  });\n\n  function addClass(index) {\n    menuItems[index].classList.add('current-menu-item');\n  }\n\n  function removeClass() {\n    menuItems.forEach(item => {\n      item.classList.remove('current-menu-item');\n    });\n  }\n\n  menuLinks.forEach((item, index) => {\n    item.addEventListener('click', function () {\n      removeClass();\n      addClass(index);\n      mainMenu.classList.remove(\"fixed\");\n      Object(_bodyHidden__WEBPACK_IMPORTED_MODULE_0__[\"bodyVisible\"])();\n      sandwitchWrap.classList.toggle(\"sandwitch--active\");\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvZml4ZWRTY3JvbGwuanM/MjMxMiJdLCJuYW1lcyI6WyJmaXhlZFNjcm9sbCIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnVMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51SXRlbXMiLCJtYWluTWVudSIsInNhbmR3aXRjaFdyYXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZENsYXNzIiwiaW5kZXgiLCJyZW1vdmVDbGFzcyIsImZvckVhY2giLCJpdGVtIiwiYm9keVZpc2libGUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFmO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLGlCQUExQixDQUFsQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBbEI7QUFDQSxRQUFNRSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBLFFBQU1LLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF0QjtBQUVBTSxRQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDdEMsUUFBSUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCVixZQUFNLENBQUNXLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGNBQXJCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xaLFlBQU0sQ0FBQ1csU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsY0FBeEI7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsV0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkJWLGFBQVMsQ0FBQ1UsS0FBRCxDQUFULENBQWlCSixTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsbUJBQS9CO0FBQ0Q7O0FBRUQsV0FBU0ksV0FBVCxHQUF1QjtBQUNyQlgsYUFBUyxDQUFDWSxPQUFWLENBQW1CQyxJQUFELElBQVU7QUFDMUJBLFVBQUksQ0FBQ1AsU0FBTCxDQUFlRSxNQUFmLENBQXNCLG1CQUF0QjtBQUNELEtBRkQ7QUFHRDs7QUFFRFYsV0FBUyxDQUFDYyxPQUFWLENBQWtCLENBQUNDLElBQUQsRUFBT0gsS0FBUCxLQUFpQjtBQUNqQ0csUUFBSSxDQUFDVCxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQ3pDTyxpQkFBVztBQUNYRixjQUFRLENBQUNDLEtBQUQsQ0FBUjtBQUNBVCxjQUFRLENBQUNLLFNBQVQsQ0FBbUJFLE1BQW5CLENBQTBCLE9BQTFCO0FBQ0FNLHFFQUFXO0FBQ1haLG1CQUFhLENBQUNJLFNBQWQsQ0FBd0JTLE1BQXhCLENBQStCLG1CQUEvQjtBQUNELEtBTkQ7QUFPRCxHQVJEO0FBU0QiLCJmaWxlIjoiLi9hc3NldHMvanMvc3JjL21vZHVsZXMvZml4ZWRTY3JvbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib2R5VmlzaWJsZSB9IGZyb20gXCIuL2JvZHlIaWRkZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZml4ZWRTY3JvbGwoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcicpO1xuICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjanMtbWFpbi1tZW51IGEnKTtcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2pzLW1haW4tbWVudSBsaScpO1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tYWluLW1lbnUnKTtcbiAgY29uc3Qgc2FuZHdpdGNoV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1zYW5kd2l0Y2gtd3JhcCcpO1xuICBcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA4MDApIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZC1zY3JvbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkLXNjcm9sbCcpO1xuICAgIH1cbiAgfSlcbiAgXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGluZGV4KSB7XG4gICAgbWVudUl0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LW1lbnUtaXRlbScpO1xuICB9XG4gIFxuICBmdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LW1lbnUtaXRlbScpO1xuICAgIH0pO1xuICB9XG5cbiAgbWVudUxpbmtzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZUNsYXNzKCk7XG4gICAgICBhZGRDbGFzcyhpbmRleCk7XG4gICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gICAgICBib2R5VmlzaWJsZSgpO1xuICAgICAgc2FuZHdpdGNoV3JhcC5jbGFzc0xpc3QudG9nZ2xlKFwic2FuZHdpdGNoLS1hY3RpdmVcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/src/modules/fixedScroll.js\n");

/***/ }),

/***/ "./assets/js/src/modules/form.js":
/*!***************************************!*\
  !*** ./assets/js/src/modules/form.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return contactForm; });\nfunction contactForm() {\n  const formItems = document.querySelectorAll('.form-group input[type=\"text\"], .form-group input[type=\"email\"], .form-group input[type=\"tel\"], .form textarea');\n  const formGroupItems = document.querySelectorAll('.form-group');\n  formItems.forEach(item => {\n    item.addEventListener('focus', function (e) {\n      formGroupItems.forEach(item => {\n        item.classList.remove('active');\n      });\n      e.target.closest('.form-group').classList.add('active');\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvZm9ybS5qcz85ODdiIl0sIm5hbWVzIjpbImNvbnRhY3RGb3JtIiwiZm9ybUl0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybUdyb3VwSXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGFyZ2V0IiwiY2xvc2VzdCIsImFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsUUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdIQUExQixDQUFsQjtBQUNBLFFBQU1DLGNBQWMsR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixDQUF2QjtBQUNBRixXQUFTLENBQUNJLE9BQVYsQ0FBa0JDLElBQUksSUFBSTtBQUN4QkEsUUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFVQyxDQUFWLEVBQWE7QUFDMUNKLG9CQUFjLENBQUNDLE9BQWYsQ0FBdUJDLElBQUksSUFBSTtBQUM3QkEsWUFBSSxDQUFDRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDRCxPQUZEO0FBR0FGLE9BQUMsQ0FBQ0csTUFBRixDQUFTQyxPQUFULENBQWlCLGFBQWpCLEVBQWdDSCxTQUFoQyxDQUEwQ0ksR0FBMUMsQ0FBOEMsUUFBOUM7QUFDRCxLQUxEO0FBTUQsR0FQRDtBQVNEIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgZm9ybUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1cInRleHRcIl0sIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1cInRlbFwiXSwgLmZvcm0gdGV4dGFyZWEnKTtcbiAgY29uc3QgZm9ybUdyb3VwSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1ncm91cCcpO1xuICBmb3JtSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGZvcm1Hcm91cEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5mb3JtLWdyb3VwJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/modules/form.js\n");

/***/ }),

/***/ "./assets/js/src/modules/mainMenu.js":
/*!*******************************************!*\
  !*** ./assets/js/src/modules/mainMenu.js ***!
  \*******************************************/
/*! exports provided: mainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainMenu\", function() { return mainMenu; });\n/* harmony import */ var _bodyHidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bodyHidden */ \"./assets/js/src/modules/bodyHidden.js\");\n\nfunction mainMenu() {\n  const mainMenu = document.querySelector('#js-main-menu');\n  const sandwichWrap = document.querySelector('#js-sandwitch-wrap');\n  sandwichWrap.addEventListener('click', function (e) {\n    if (mainMenu.classList.contains('fixed')) {\n      mainMenu.classList.remove('fixed');\n      Object(_bodyHidden__WEBPACK_IMPORTED_MODULE_0__[\"bodyVisible\"])();\n    } else {\n      mainMenu.classList.add('fixed');\n      Object(_bodyHidden__WEBPACK_IMPORTED_MODULE_0__[\"bodyHidden\"])();\n    }\n\n    sandwichWrap.classList.toggle('sandwitch--active');\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvbWFpbk1lbnUuanM/YTA2MyJdLCJuYW1lcyI6WyJtYWluTWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNhbmR3aWNoV3JhcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJib2R5VmlzaWJsZSIsImFkZCIsImJvZHlIaWRkZW4iLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsUUFBVCxHQUFvQjtBQUN6QixRQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFqQjtBQUNBLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUFyQjtBQUNBQyxjQUFZLENBQUNDLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVNDLENBQVQsRUFBWTtBQUNqRCxRQUFJTCxRQUFRLENBQUNNLFNBQVQsQ0FBbUJDLFFBQW5CLENBQTRCLE9BQTVCLENBQUosRUFBMEM7QUFDeENQLGNBQVEsQ0FBQ00sU0FBVCxDQUFtQkUsTUFBbkIsQ0FBMEIsT0FBMUI7QUFDQUMscUVBQVc7QUFDWixLQUhELE1BR087QUFDTFQsY0FBUSxDQUFDTSxTQUFULENBQW1CSSxHQUFuQixDQUF1QixPQUF2QjtBQUNBQyxvRUFBVTtBQUNYOztBQUNEUixnQkFBWSxDQUFDRyxTQUFiLENBQXVCTSxNQUF2QixDQUE4QixtQkFBOUI7QUFDRCxHQVREO0FBVUQiLCJmaWxlIjoiLi9hc3NldHMvanMvc3JjL21vZHVsZXMvbWFpbk1lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib2R5SGlkZGVuLCBib2R5VmlzaWJsZSB9IGZyb20gXCIuL2JvZHlIaWRkZW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW5NZW51KCkge1xuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tYWluLW1lbnUnKTtcbiAgY29uc3Qgc2FuZHdpY2hXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXNhbmR3aXRjaC13cmFwJyk7XG4gIHNhbmR3aWNoV3JhcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAobWFpbk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSB7XG4gICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xuICAgICAgYm9keVZpc2libGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcbiAgICAgIGJvZHlIaWRkZW4oKTtcbiAgICB9XG4gICAgc2FuZHdpY2hXcmFwLmNsYXNzTGlzdC50b2dnbGUoJ3NhbmR3aXRjaC0tYWN0aXZlJyk7XG4gIH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/modules/mainMenu.js\n");

/***/ }),

/***/ "./assets/js/src/modules/map.js":
/*!**************************************!*\
  !*** ./assets/js/src/modules/map.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return googleMap; });\nfunction googleMap() {\n  const mapDiv = document.querySelector('#map');\n  const iframe = `\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.6342906113146!2d8.051748251581197!3d45.55768187899966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478620d95abf4b8f%3A0xf4faecb88db8a8f0!2sVia%20Galimberti%20Tancredi%2C%2017%2C%2013900%20Biella%20BI%2C%20Italia!5e0!3m2!1sit!2s!4v1619423547914!5m2!1sit!2s\" width=\"100%\" height=\"100%\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n\t`;\n\n  if (document.body.classList.contains('home')) {\n    setTimeout(() => {\n      mapDiv.innerHTML = iframe;\n    }, 2000);\n  } else {\n    mapDiv.innerHTML = iframe;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvbWFwLmpzP2Y1MTQiXSwibmFtZXMiOlsiZ29vZ2xlTWFwIiwibWFwRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaWZyYW1lIiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFNBQVQsR0FBcUI7QUFDbEMsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZjtBQUNBLFFBQU1DLE1BQU0sR0FBSTtBQUNsQjtBQUNBLEVBRkU7O0FBR0EsTUFBSUYsUUFBUSxDQUFDRyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLE1BQWpDLENBQUosRUFBOEM7QUFDNUNDLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZQLFlBQU0sQ0FBQ1EsU0FBUCxHQUFtQkwsTUFBbkI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FKRCxNQUlPO0FBQ0xILFVBQU0sQ0FBQ1EsU0FBUCxHQUFtQkwsTUFBbkI7QUFDRDtBQUVGIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3NyYy9tb2R1bGVzL21hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdvb2dsZU1hcCgpIHtcbiAgY29uc3QgbWFwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xuICBjb25zdCBpZnJhbWUgPSBgXG48aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI3OTMuNjM0MjkwNjExMzE0NiEyZDguMDUxNzQ4MjUxNTgxMTk3ITNkNDUuNTU3NjgxODc4OTk5NjYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3ODYyMGQ5NWFiZjRiOGYlM0EweGY0ZmFlY2I4OGRiOGE4ZjAhMnNWaWElMjBHYWxpbWJlcnRpJTIwVGFuY3JlZGklMkMlMjAxNyUyQyUyMDEzOTAwJTIwQmllbGxhJTIwQkklMkMlMjBJdGFsaWEhNWUwITNtMiExc2l0ITJzITR2MTYxOTQyMzU0NzkxNCE1bTIhMXNpdCEyc1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+XG5cdGA7XG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaG9tZScpKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBtYXBEaXYuaW5uZXJIVE1MID0gaWZyYW1lO1xuICAgIH0sIDIwMDApO1xuICB9IGVsc2Uge1xuICAgIG1hcERpdi5pbm5lckhUTUwgPSBpZnJhbWU7XG4gIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/src/modules/map.js\n");

/***/ })

/******/ });