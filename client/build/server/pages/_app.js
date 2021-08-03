module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./api/cart.js":
/*!*********************!*\
  !*** ./api/cart.js ***!
  \*********************/
/*! exports provided: getProductsCart, addProductCart, countProductsCart, removeProductCart, paymentCartApi, removeAllProductsCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsCart\", function() { return getProductsCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProductCart\", function() { return addProductCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countProductsCart\", function() { return countProductsCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProductCart\", function() { return removeProductCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paymentCartApi\", function() { return paymentCartApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllProductsCart\", function() { return removeAllProductsCart; });\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.js\");\n\n\n\n\nfunction getProductsCart() {\n  const cart = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"]);\n\n  if (!cart) {\n    return null;\n  } else {\n    const products = cart.split(\",\");\n    return products;\n  }\n}\nfunction addProductCart(product) {\n  const cart = getProductsCart();\n\n  if (!cart) {\n    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"], product);\n    react_toastify__WEBPACK_IMPORTED_MODULE_0__[\"toast\"].success(\"Producto añadido al carrito\");\n  } else {\n    const productFound = Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"includes\"])(cart, product);\n\n    if (productFound) {\n      react_toastify__WEBPACK_IMPORTED_MODULE_0__[\"toast\"].warning(\"Este producto ya esta en el carrito\");\n    } else {\n      cart.push(product);\n      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"], cart);\n      react_toastify__WEBPACK_IMPORTED_MODULE_0__[\"toast\"].success(\"Producto añadido correctamente\");\n    }\n  }\n}\nfunction countProductsCart() {\n  const cart = getProductsCart();\n\n  if (!cart) {\n    return 0;\n  } else {\n    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"size\"])(cart);\n  }\n}\nfunction removeProductCart(product) {\n  const cart = getProductsCart();\n  Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(cart, item => {\n    return item === product;\n  });\n\n  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"size\"])(cart) > 0) {\n    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"], cart);\n  } else {\n    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"]);\n  }\n}\nasync function paymentCartApi(token, products, idUser, address, logout) {\n  try {\n    const addressShipping = address;\n    delete addressShipping.user;\n    delete addressShipping.createdAt;\n    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"BASE_PATH\"]}/orders`;\n    const params = {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        token,\n        products,\n        idUser,\n        addressShipping\n      })\n    };\n    const result = await Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__[\"authFetch\"])(url, params, logout);\n    return result;\n  } catch (error) {\n    console.log(error);\n    return null;\n  }\n}\nfunction removeAllProductsCart() {\n  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"CART\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvY2FydC5qcz9hM2ZhIl0sIm5hbWVzIjpbImdldFByb2R1Y3RzQ2FydCIsImNhcnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ0FSVCIsInByb2R1Y3RzIiwic3BsaXQiLCJhZGRQcm9kdWN0Q2FydCIsInByb2R1Y3QiLCJzZXRJdGVtIiwidG9hc3QiLCJzdWNjZXNzIiwicHJvZHVjdEZvdW5kIiwiaW5jbHVkZXMiLCJ3YXJuaW5nIiwicHVzaCIsImNvdW50UHJvZHVjdHNDYXJ0Iiwic2l6ZSIsInJlbW92ZVByb2R1Y3RDYXJ0IiwicmVtb3ZlIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJwYXltZW50Q2FydEFwaSIsInRva2VuIiwiaWRVc2VyIiwiYWRkcmVzcyIsImxvZ291dCIsImFkZHJlc3NTaGlwcGluZyIsInVzZXIiLCJjcmVhdGVkQXQiLCJ1cmwiLCJCQVNFX1BBVEgiLCJwYXJhbXMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJhdXRoRmV0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVBbGxQcm9kdWN0c0NhcnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxlQUFULEdBQTJCO0FBQ2hDLFFBQU1DLElBQUksR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCQyxxREFBckIsQ0FBYjs7QUFFQSxNQUFJLENBQUNILElBQUwsRUFBVztBQUNULFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTztBQUNMLFVBQU1JLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxLQUFMLENBQVcsR0FBWCxDQUFqQjtBQUNBLFdBQU9ELFFBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU0UsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFDdEMsUUFBTVAsSUFBSSxHQUFHRCxlQUFlLEVBQTVCOztBQUVBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1RDLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUJMLHFEQUFyQixFQUEyQkksT0FBM0I7QUFDQUUsd0RBQUssQ0FBQ0MsT0FBTixDQUFjLDZCQUFkO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsVUFBTUMsWUFBWSxHQUFHQyx1REFBUSxDQUFDWixJQUFELEVBQU9PLE9BQVAsQ0FBN0I7O0FBQ0EsUUFBSUksWUFBSixFQUFrQjtBQUNoQkYsMERBQUssQ0FBQ0ksT0FBTixDQUFjLHFDQUFkO0FBQ0QsS0FGRCxNQUVPO0FBQ0xiLFVBQUksQ0FBQ2MsSUFBTCxDQUFVUCxPQUFWO0FBQ0FOLGtCQUFZLENBQUNPLE9BQWIsQ0FBcUJMLHFEQUFyQixFQUEyQkgsSUFBM0I7QUFDQVMsMERBQUssQ0FBQ0MsT0FBTixDQUFjLGdDQUFkO0FBQ0Q7QUFDRjtBQUNGO0FBRU0sU0FBU0ssaUJBQVQsR0FBNkI7QUFDbEMsUUFBTWYsSUFBSSxHQUFHRCxlQUFlLEVBQTVCOztBQUVBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1QsV0FBTyxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT2dCLG1EQUFJLENBQUNoQixJQUFELENBQVg7QUFDRDtBQUNGO0FBRU0sU0FBU2lCLGlCQUFULENBQTJCVixPQUEzQixFQUFvQztBQUN6QyxRQUFNUCxJQUFJLEdBQUdELGVBQWUsRUFBNUI7QUFFQW1CLHVEQUFNLENBQUNsQixJQUFELEVBQVFtQixJQUFELElBQVU7QUFDckIsV0FBT0EsSUFBSSxLQUFLWixPQUFoQjtBQUNELEdBRkssQ0FBTjs7QUFJQSxNQUFJUyxtREFBSSxDQUFDaEIsSUFBRCxDQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDbEJDLGdCQUFZLENBQUNPLE9BQWIsQ0FBcUJMLHFEQUFyQixFQUEyQkgsSUFBM0I7QUFDRCxHQUZELE1BRU87QUFDTEMsZ0JBQVksQ0FBQ21CLFVBQWIsQ0FBd0JqQixxREFBeEI7QUFDRDtBQUNGO0FBRU0sZUFBZWtCLGNBQWYsQ0FBOEJDLEtBQTlCLEVBQXFDbEIsUUFBckMsRUFBK0NtQixNQUEvQyxFQUF1REMsT0FBdkQsRUFBZ0VDLE1BQWhFLEVBQXdFO0FBQzdFLE1BQUk7QUFDRixVQUFNQyxlQUFlLEdBQUdGLE9BQXhCO0FBQ0EsV0FBT0UsZUFBZSxDQUFDQyxJQUF2QjtBQUNBLFdBQU9ELGVBQWUsQ0FBQ0UsU0FBdkI7QUFFQSxVQUFNQyxHQUFHLEdBQUksR0FBRUMsMERBQVUsU0FBekI7QUFDQSxVQUFNQyxNQUFNLEdBQUc7QUFDYkMsWUFBTSxFQUFFLE1BREs7QUFFYkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGSTtBQUtiQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CZCxhQURtQjtBQUVuQmxCLGdCQUZtQjtBQUduQm1CLGNBSG1CO0FBSW5CRztBQUptQixPQUFmO0FBTE8sS0FBZjtBQVlBLFVBQU1XLE1BQU0sR0FBRyxNQUFNQyw4REFBUyxDQUFDVCxHQUFELEVBQU1FLE1BQU4sRUFBY04sTUFBZCxDQUE5QjtBQUNBLFdBQU9ZLE1BQVA7QUFDRCxHQXBCRCxDQW9CRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGO0FBRU0sU0FBU0cscUJBQVQsR0FBaUM7QUFDdEN6QyxjQUFZLENBQUNtQixVQUFiLENBQXdCakIscURBQXhCO0FBQ0QiLCJmaWxlIjoiLi9hcGkvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBzaXplLCBpbmNsdWRlcywgcmVtb3ZlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQkFTRV9QQVRILCBDQVJUIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgYXV0aEZldGNoIH0gZnJvbSBcIi4uL3V0aWxzL2ZldGNoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0NhcnQoKSB7XG4gIGNvbnN0IGNhcnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDQVJUKTtcblxuICBpZiAoIWNhcnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGNhcnQuc3BsaXQoXCIsXCIpO1xuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdENhcnQocHJvZHVjdCkge1xuICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XG5cbiAgaWYgKCFjYXJ0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ0FSVCwgcHJvZHVjdCk7XG4gICAgdG9hc3Quc3VjY2VzcyhcIlByb2R1Y3RvIGHDsWFkaWRvIGFsIGNhcnJpdG9cIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvZHVjdEZvdW5kID0gaW5jbHVkZXMoY2FydCwgcHJvZHVjdCk7XG4gICAgaWYgKHByb2R1Y3RGb3VuZCkge1xuICAgICAgdG9hc3Qud2FybmluZyhcIkVzdGUgcHJvZHVjdG8geWEgZXN0YSBlbiBlbCBjYXJyaXRvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJ0LnB1c2gocHJvZHVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDQVJULCBjYXJ0KTtcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0byBhw7FhZGlkbyBjb3JyZWN0YW1lbnRlXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRQcm9kdWN0c0NhcnQoKSB7XG4gIGNvbnN0IGNhcnQgPSBnZXRQcm9kdWN0c0NhcnQoKTtcblxuICBpZiAoIWNhcnQpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2l6ZShjYXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdENhcnQocHJvZHVjdCkge1xuICBjb25zdCBjYXJ0ID0gZ2V0UHJvZHVjdHNDYXJ0KCk7XG5cbiAgcmVtb3ZlKGNhcnQsIChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0gPT09IHByb2R1Y3Q7XG4gIH0pO1xuXG4gIGlmIChzaXplKGNhcnQpID4gMCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENBUlQsIGNhcnQpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKENBUlQpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXltZW50Q2FydEFwaSh0b2tlbiwgcHJvZHVjdHMsIGlkVXNlciwgYWRkcmVzcywgbG9nb3V0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWRkcmVzc1NoaXBwaW5nID0gYWRkcmVzcztcbiAgICBkZWxldGUgYWRkcmVzc1NoaXBwaW5nLnVzZXI7XG4gICAgZGVsZXRlIGFkZHJlc3NTaGlwcGluZy5jcmVhdGVkQXQ7XG5cbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L29yZGVyc2A7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlbixcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIGlkVXNlcixcbiAgICAgICAgYWRkcmVzc1NoaXBwaW5nLFxuICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoRmV0Y2godXJsLCBwYXJhbXMsIGxvZ291dCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbFByb2R1Y3RzQ2FydCgpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQ0FSVCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/cart.js\n");

/***/ }),

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/*! exports provided: setToken, getToken, removeToken, hasExpiredToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeToken\", function() { return removeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasExpiredToken\", function() { return hasExpiredToken; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction setToken(token) {\n  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TOKEN\"], token);\n}\nfunction getToken() {\n  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TOKEN\"]);\n}\nfunction removeToken() {\n  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"TOKEN\"]);\n}\nfunction hasExpiredToken(token) {\n  const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);\n  const expireDate = tokenDecode.exp * 1000;\n  const currentDate = new Date().getTime();\n\n  if (currentDate > expireDate) {\n    return true;\n  }\n\n  return false;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdG9rZW4uanM/MzQxNiJdLCJuYW1lcyI6WyJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlRPS0VOIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmVJdGVtIiwiaGFzRXhwaXJlZFRva2VuIiwidG9rZW5EZWNvZGUiLCJqd3REZWNvZGUiLCJleHBpcmVEYXRlIiwiZXhwIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QkMsY0FBWSxDQUFDQyxPQUFiLENBQXFCQyxzREFBckIsRUFBNEJILEtBQTVCO0FBQ0Q7QUFFTSxTQUFTSSxRQUFULEdBQW9CO0FBQ3pCLFNBQU9ILFlBQVksQ0FBQ0ksT0FBYixDQUFxQkYsc0RBQXJCLENBQVA7QUFDRDtBQUVNLFNBQVNHLFdBQVQsR0FBdUI7QUFDNUJMLGNBQVksQ0FBQ00sVUFBYixDQUF3Qkosc0RBQXhCO0FBQ0Q7QUFFTSxTQUFTSyxlQUFULENBQXlCUixLQUF6QixFQUFnQztBQUNyQyxRQUFNUyxXQUFXLEdBQUdDLGlEQUFTLENBQUNWLEtBQUQsQ0FBN0I7QUFDQSxRQUFNVyxVQUFVLEdBQUdGLFdBQVcsQ0FBQ0csR0FBWixHQUFrQixJQUFyQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7O0FBQ0EsTUFBSUYsV0FBVyxHQUFHRixVQUFsQixFQUE4QjtBQUM1QixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiIuL2FwaS90b2tlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRPS0VOIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4pIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU4sIHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0V4cGlyZWRUb2tlbih0b2tlbikge1xuICBjb25zdCB0b2tlbkRlY29kZSA9IGp3dERlY29kZSh0b2tlbik7XG4gIGNvbnN0IGV4cGlyZURhdGUgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBpZiAoY3VycmVudERhdGUgPiBleHBpcmVEYXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/token.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  auth: undefined,\n  login: () => null,\n  logout: () => null,\n  setReloadUser: () => null\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXV0aCIsInVuZGVmaW5lZCIsImxvZ2luIiwibG9nb3V0Iiwic2V0UmVsb2FkVXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUVDLFNBRDBCO0FBRWhDQyxPQUFLLEVBQUUsTUFBTSxJQUZtQjtBQUdoQ0MsUUFBTSxFQUFFLE1BQU0sSUFIa0I7QUFJaENDLGVBQWEsRUFBRSxNQUFNO0FBSlcsQ0FBRCxDQUFqQztBQU9lTiwwRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvQXV0aENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIGF1dGg6IHVuZGVmaW5lZCxcbiAgbG9naW46ICgpID0+IG51bGwsXG4gIGxvZ291dDogKCkgPT4gbnVsbCxcbiAgc2V0UmVsb2FkVXNlcjogKCkgPT4gbnVsbCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./context/CartContext.js":
/*!********************************!*\
  !*** ./context/CartContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  productsCart: 0,\n  addProductCart: () => null,\n  getProductsCart: () => null,\n  removeProductCart: () => null,\n  removeAllProductsCart: () => null\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0NhcnRDb250ZXh0LmpzP2M0YTQiXSwibmFtZXMiOlsiQ2FydENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwicHJvZHVjdHNDYXJ0IiwiYWRkUHJvZHVjdENhcnQiLCJnZXRQcm9kdWN0c0NhcnQiLCJyZW1vdmVQcm9kdWN0Q2FydCIsInJlbW92ZUFsbFByb2R1Y3RzQ2FydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDO0FBQ2hDQyxjQUFZLEVBQUUsQ0FEa0I7QUFFaENDLGdCQUFjLEVBQUUsTUFBTSxJQUZVO0FBR2hDQyxpQkFBZSxFQUFFLE1BQU0sSUFIUztBQUloQ0MsbUJBQWlCLEVBQUUsTUFBTSxJQUpPO0FBS2hDQyx1QkFBcUIsRUFBRSxNQUFNO0FBTEcsQ0FBRCxDQUFqQztBQVFlTiwwRUFBZiIsImZpbGUiOiIuL2NvbnRleHQvQ2FydENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHByb2R1Y3RzQ2FydDogMCxcbiAgYWRkUHJvZHVjdENhcnQ6ICgpID0+IG51bGwsXG4gIGdldFByb2R1Y3RzQ2FydDogKCkgPT4gbnVsbCxcbiAgcmVtb3ZlUHJvZHVjdENhcnQ6ICgpID0+IG51bGwsXG4gIHJlbW92ZUFsbFByb2R1Y3RzQ2FydDogKCkgPT4gbnVsbCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CartContext.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-toastify/dist/ReactToastify.css\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/semantic-ui-css/semantic.min.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick-theme.css\n");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/slick-carousel/slick/slick.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\n/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/cart */ \"./api/cart.js\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/global.scss */ \"./scss/global.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/home/ydalimir/Documentos/GitHub/AgustinProyecto/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: auth,\n    1: setAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(undefined);\n  const {\n    0: realoadUser,\n    1: setReloadUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: totalProductsCart,\n    1: setTotalProductsCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: reloadCart,\n    1: setReloadCart\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_6__[\"getToken\"])();\n\n    if (token) {\n      setAuth({\n        token,\n        idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).id\n      });\n    } else {\n      setAuth(null);\n    }\n\n    setReloadUser(false);\n  }, [realoadUser]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setTotalProductsCart(Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__[\"countProductsCart\"])());\n    setReloadCart(false);\n  }, [reloadCart, auth]);\n\n  const login = token => {\n    Object(_api_token__WEBPACK_IMPORTED_MODULE_6__[\"setToken\"])(token);\n    setAuth({\n      token,\n      idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).id\n    });\n  };\n\n  const logout = () => {\n    if (auth) {\n      Object(_api_token__WEBPACK_IMPORTED_MODULE_6__[\"removeToken\"])();\n      setAuth(null);\n      router.push(\"/\");\n    }\n  };\n\n  const addProduct = product => {\n    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_6__[\"getToken\"])();\n\n    if (token) {\n      Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__[\"addProductCart\"])(product);\n      setReloadCart(true);\n    } else {\n      react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"toast\"].warning(\"Para comprar un juego tienes que iniciar sesión\");\n    }\n  };\n\n  const removeProduct = product => {\n    Object(_api_cart__WEBPACK_IMPORTED_MODULE_7__[\"removeProductCart\"])(product);\n    setReloadCart(true);\n  };\n\n  const authData = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => ({\n    auth,\n    login,\n    logout,\n    setReloadUser\n  }), [auth]);\n  const cartData = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => ({\n    productsCart: totalProductsCart,\n    addProductCart: product => addProduct(product),\n    getProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_7__[\"getProductsCart\"],\n    removeProductCart: product => removeProduct(product),\n    removeAllProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_7__[\"removeAllProductsCart\"]\n  }), [totalProductsCart]);\n  if (auth === undefined) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxDEV\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Provider, {\n    value: authData,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxDEV\"])(_context_CartContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Provider, {\n      value: cartData,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__[\"jsxDEV\"])(react_toastify__WEBPACK_IMPORTED_MODULE_1__[\"ToastContainer\"], {\n        position: \"top-right\",\n        autoClose: 5000,\n        hideProgressBar: true,\n        newestOnTop: true,\n        closeOnClick: true,\n        rtl: false,\n        pauseOnFocusLoss: false,\n        draggable: true,\n        pauseOnHover: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRoIiwic2V0QXV0aCIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVhbG9hZFVzZXIiLCJzZXRSZWxvYWRVc2VyIiwidG90YWxQcm9kdWN0c0NhcnQiLCJzZXRUb3RhbFByb2R1Y3RzQ2FydCIsInJlbG9hZENhcnQiLCJzZXRSZWxvYWRDYXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRUb2tlbiIsImlkVXNlciIsImp3dERlY29kZSIsImlkIiwiY291bnRQcm9kdWN0c0NhcnQiLCJsb2dpbiIsInNldFRva2VuIiwibG9nb3V0IiwicmVtb3ZlVG9rZW4iLCJwdXNoIiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJhZGRQcm9kdWN0Q2FydCIsInRvYXN0Iiwid2FybmluZyIsInJlbW92ZVByb2R1Y3QiLCJyZW1vdmVQcm9kdWN0Q2FydCIsImF1dGhEYXRhIiwidXNlTWVtbyIsImNhcnREYXRhIiwicHJvZHVjdHNDYXJ0IiwiZ2V0UHJvZHVjdHNDYXJ0IiwicmVtb3ZlQWxsUHJvZHVjdHNDYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3RELFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQ0MsU0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUErQkgsc0RBQVEsQ0FBQyxLQUFELENBQTdDO0FBQ0EsUUFBTTtBQUFBLE9B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QUVFLHNFQUFDLDZEQUFEO0FBQ0UsZ0JBQVEsRUFBQyxXQURYO0FBRUUsaUJBQVMsRUFBRSxJQUZiO0FBR0UsdUJBQWUsTUFIakI7QUFJRSxtQkFBVyxNQUpiO0FBS0Usb0JBQVksTUFMZDtBQU1FLFdBQUcsRUFBRSxLQU5QO0FBT0Usd0JBQWdCLEVBQUUsS0FQcEI7QUFRRSxpQkFBUyxNQVJYO0FBU0Usb0JBQVk7QUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQ2FydENvbnRleHRcIjtcbmltcG9ydCB7IHNldFRva2VuLCBnZXRUb2tlbiwgcmVtb3ZlVG9rZW4gfSBmcm9tIFwiLi4vYXBpL3Rva2VuXCI7XG5pbXBvcnQge1xuICBnZXRQcm9kdWN0c0NhcnQsXG4gIGFkZFByb2R1Y3RDYXJ0LFxuICBjb3VudFByb2R1Y3RzQ2FydCxcbiAgcmVtb3ZlUHJvZHVjdENhcnQsXG4gIHJlbW92ZUFsbFByb2R1Y3RzQ2FydCxcbn0gZnJvbSBcIi4uL2FwaS9jYXJ0XCI7XG5pbXBvcnQgXCIuLi9zY3NzL2dsb2JhbC5zY3NzXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtyZWFsb2FkVXNlciwgc2V0UmVsb2FkVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b3RhbFByb2R1Y3RzQ2FydCwgc2V0VG90YWxQcm9kdWN0c0NhcnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZWxvYWRDYXJ0LCBzZXRSZWxvYWRDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRBdXRoKHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBdXRoKG51bGwpO1xuICAgIH1cbiAgICBzZXRSZWxvYWRVc2VyKGZhbHNlKTtcbiAgfSwgW3JlYWxvYWRVc2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUb3RhbFByb2R1Y3RzQ2FydChjb3VudFByb2R1Y3RzQ2FydCgpKTtcbiAgICBzZXRSZWxvYWRDYXJ0KGZhbHNlKTtcbiAgfSwgW3JlbG9hZENhcnQsIGF1dGhdKTtcblxuICBjb25zdCBsb2dpbiA9ICh0b2tlbikgPT4ge1xuICAgIHNldFRva2VuKHRva2VuKTtcbiAgICBzZXRBdXRoKHtcbiAgICAgIHRva2VuLFxuICAgICAgaWRVc2VyOiBqd3REZWNvZGUodG9rZW4pLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmVtb3ZlVG9rZW4oKTtcbiAgICAgIHNldEF1dGgobnVsbCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0VG9rZW4oKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGFkZFByb2R1Y3RDYXJ0KHByb2R1Y3QpO1xuICAgICAgc2V0UmVsb2FkQ2FydCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3Qud2FybmluZyhcIlBhcmEgY29tcHJhciB1biBqdWVnbyB0aWVuZXMgcXVlIGluaWNpYXIgc2VzacOzblwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XG4gICAgcmVtb3ZlUHJvZHVjdENhcnQocHJvZHVjdCk7XG4gICAgc2V0UmVsb2FkQ2FydCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBhdXRoRGF0YSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGF1dGgsXG4gICAgICBsb2dpbixcbiAgICAgIGxvZ291dCxcbiAgICAgIHNldFJlbG9hZFVzZXIsXG4gICAgfSksXG4gICAgW2F1dGhdXG4gICk7XG5cbiAgY29uc3QgY2FydERhdGEgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBwcm9kdWN0c0NhcnQ6IHRvdGFsUHJvZHVjdHNDYXJ0LFxuICAgICAgYWRkUHJvZHVjdENhcnQ6IChwcm9kdWN0KSA9PiBhZGRQcm9kdWN0KHByb2R1Y3QpLFxuICAgICAgZ2V0UHJvZHVjdHNDYXJ0OiBnZXRQcm9kdWN0c0NhcnQsXG4gICAgICByZW1vdmVQcm9kdWN0Q2FydDogKHByb2R1Y3QpID0+IHJlbW92ZVByb2R1Y3QocHJvZHVjdCksXG4gICAgICByZW1vdmVBbGxQcm9kdWN0c0NhcnQ6IHJlbW92ZUFsbFByb2R1Y3RzQ2FydCxcbiAgICB9KSxcbiAgICBbdG90YWxQcm9kdWN0c0NhcnRdXG4gICk7XG5cbiAgaWYgKGF1dGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfT5cbiAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y2FydERhdGF9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgICAgbmV3ZXN0T25Ub3BcbiAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3M9e2ZhbHNlfVxuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAvPlxuICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3Njc3MvZ2xvYmFsLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scss/global.scss\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: BASE_PATH, TOKEN, CART, STRIPE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_PATH\", function() { return BASE_PATH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN\", function() { return TOKEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CART\", function() { return CART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRIPE_TOKEN\", function() { return STRIPE_TOKEN; });\nconst BASE_PATH = \"https://ecommerce-mx.herokuapp.com\";\nconst TOKEN = \"token\";\nconst CART = \"cart\";\nconst STRIPE_TOKEN = \"pk_test_51JIcJxAopdEHwRqeHE4dfPfc0BMXeTnqKYC6hba4EcT1DkKftlqFopOAGEe1JezoewdoZQV8v3RfOshlFxApbai900NVsXuC20\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJUT0tFTiIsIkNBUlQiLCJTVFJJUEVfVE9LRU4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLEdBQUcsb0NBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBYjtBQUNBLE1BQU1DLFlBQVksR0FDdkIsNkdBREsiLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9QQVRIID0gXCJodHRwczovL2Vjb21tZXJjZS1teC5oZXJva3VhcHAuY29tXCI7XG5leHBvcnQgY29uc3QgVE9LRU4gPSBcInRva2VuXCI7XG5leHBvcnQgY29uc3QgQ0FSVCA9IFwiY2FydFwiO1xuZXhwb3J0IGNvbnN0IFNUUklQRV9UT0tFTiA9XG4gIFwicGtfdGVzdF81MUpJY0p4QW9wZEVId1JxZUhFNGRmUGZjMEJNWGVUbnFLWUM2aGJhNEVjVDFEa0tmdGxxRm9wT0FHRWUxSmV6b2V3ZG9aUVY4djNSZk9zaGxGeEFwYmFpOTAwTlZzWHVDMjBcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/*! exports provided: authFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authFetch\", function() { return authFetch; });\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nasync function authFetch(url, params, logout) {\n  const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_0__[\"getToken\"])();\n\n  if (!token) {\n    // Usuario no logeador\n    logout();\n  } else {\n    if (Object(_api_token__WEBPACK_IMPORTED_MODULE_0__[\"hasExpiredToken\"])(token)) {\n      // Token caducado\n      logout();\n    } else {\n      const paramsTemp = _objectSpread(_objectSpread({}, params), {}, {\n        headers: _objectSpread(_objectSpread({}, params === null || params === void 0 ? void 0 : params.headers), {}, {\n          Authorization: `Bearer ${token}`\n        })\n      });\n\n      try {\n        const response = await fetch(url, paramsTemp);\n        const result = await response.json();\n        return result;\n      } catch (error) {\n        return error;\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaC5qcz9iMTZlIl0sIm5hbWVzIjpbImF1dGhGZXRjaCIsInVybCIsInBhcmFtcyIsImxvZ291dCIsInRva2VuIiwiZ2V0VG9rZW4iLCJoYXNFeHBpcmVkVG9rZW4iLCJwYXJhbXNUZW1wIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLGVBQWVBLFNBQWYsQ0FBeUJDLEdBQXpCLEVBQThCQyxNQUE5QixFQUFzQ0MsTUFBdEMsRUFBOEM7QUFDbkQsUUFBTUMsS0FBSyxHQUFHQywyREFBUSxFQUF0Qjs7QUFFQSxNQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWO0FBQ0FELFVBQU07QUFDUCxHQUhELE1BR087QUFDTCxRQUFJRyxrRUFBZSxDQUFDRixLQUFELENBQW5CLEVBQTRCO0FBQzFCO0FBQ0FELFlBQU07QUFDUCxLQUhELE1BR087QUFDTCxZQUFNSSxVQUFVLG1DQUNYTCxNQURXO0FBRWRNLGVBQU8sa0NBQ0ZOLE1BREUsYUFDRkEsTUFERSx1QkFDRkEsTUFBTSxDQUFFTSxPQUROO0FBRUxDLHVCQUFhLEVBQUcsVUFBU0wsS0FBTTtBQUYxQjtBQUZPLFFBQWhCOztBQU9BLFVBQUk7QUFDRixjQUFNTSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDVixHQUFELEVBQU1NLFVBQU4sQ0FBNUI7QUFDQSxjQUFNSyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXJCO0FBQ0EsZUFBT0QsTUFBUDtBQUNELE9BSkQsQ0FJRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxlQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YiLCJmaWxlIjoiLi91dGlscy9mZXRjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFRva2VuLCBoYXNFeHBpcmVkVG9rZW4gfSBmcm9tIFwiLi4vYXBpL3Rva2VuXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoRmV0Y2godXJsLCBwYXJhbXMsIGxvZ291dCkge1xuICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIC8vIFVzdWFyaW8gbm8gbG9nZWFkb3JcbiAgICBsb2dvdXQoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaGFzRXhwaXJlZFRva2VuKHRva2VuKSkge1xuICAgICAgLy8gVG9rZW4gY2FkdWNhZG9cbiAgICAgIGxvZ291dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJhbXNUZW1wID0ge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAuLi5wYXJhbXM/LmhlYWRlcnMsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHBhcmFtc1RlbXApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/fetch.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCI/M2U5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqd3QtZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jwt-decode\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj85N2RlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });