/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToken\": function() { return /* binding */ setToken; },\n/* harmony export */   \"getToken\": function() { return /* binding */ getToken; },\n/* harmony export */   \"removeToken\": function() { return /* binding */ removeToken; },\n/* harmony export */   \"hasExpiredToken\": function() { return /* binding */ hasExpiredToken; }\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction setToken(token) {\n  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN, token);\n}\nfunction getToken() {\n  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);\n}\nfunction removeToken() {\n  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);\n}\nfunction hasExpiredToken(token) {\n  const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);\n  const expireDate = tokenDecode.exp * 1000;\n  const currentDate = new Date().getTime();\n\n  if (currentDate > expireDate) {\n    return true;\n  }\n\n  return false;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9hcGkvdG9rZW4uanM/MzQxNiJdLCJuYW1lcyI6WyJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlRPS0VOIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmVJdGVtIiwiaGFzRXhwaXJlZFRva2VuIiwidG9rZW5EZWNvZGUiLCJqd3REZWNvZGUiLCJleHBpcmVEYXRlIiwiZXhwIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUM5QkMsY0FBWSxDQUFDQyxPQUFiLENBQXFCQyxtREFBckIsRUFBNEJILEtBQTVCO0FBQ0Q7QUFFTSxTQUFTSSxRQUFULEdBQW9CO0FBQ3pCLFNBQU9ILFlBQVksQ0FBQ0ksT0FBYixDQUFxQkYsbURBQXJCLENBQVA7QUFDRDtBQUVNLFNBQVNHLFdBQVQsR0FBdUI7QUFDNUJMLGNBQVksQ0FBQ00sVUFBYixDQUF3QkosbURBQXhCO0FBQ0Q7QUFFTSxTQUFTSyxlQUFULENBQXlCUixLQUF6QixFQUFnQztBQUNyQyxRQUFNUyxXQUFXLEdBQUdDLGlEQUFTLENBQUNWLEtBQUQsQ0FBN0I7QUFDQSxRQUFNVyxVQUFVLEdBQUdGLFdBQVcsQ0FBQ0csR0FBWixHQUFrQixJQUFyQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7O0FBQ0EsTUFBSUYsV0FBVyxHQUFHRixVQUFsQixFQUE4QjtBQUM1QixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiIuL2FwaS90b2tlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRPS0VOIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4pIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU4sIHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0V4cGlyZWRUb2tlbih0b2tlbikge1xuICBjb25zdCB0b2tlbkRlY29kZSA9IGp3dERlY29kZSh0b2tlbik7XG4gIGNvbnN0IGV4cGlyZURhdGUgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBpZiAoY3VycmVudERhdGUgPiBleHBpcmVEYXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/token.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  auth: undefined,\n  login: () => null,\n  logout: () => null,\n  setReloadUser: () => null\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiYXV0aCIsInVuZGVmaW5lZCIsImxvZ2luIiwibG9nb3V0Iiwic2V0UmVsb2FkVXNlciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUVDLFNBRDBCO0FBRWhDQyxPQUFLLEVBQUUsTUFBTSxJQUZtQjtBQUdoQ0MsUUFBTSxFQUFFLE1BQU0sSUFIa0I7QUFJaENDLGVBQWEsRUFBRSxNQUFNO0FBSlcsQ0FBRCxDQUFqQztBQU9BLCtEQUFlTixXQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgYXV0aDogdW5kZWZpbmVkLFxuICBsb2dpbjogKCkgPT4gbnVsbCxcbiAgbG9nb3V0OiAoKSA9PiBudWxsLFxuICBzZXRSZWxvYWRVc2VyOiAoKSA9PiBudWxsLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/global.scss */ \"./scss/global.scss\");\n/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/token */ \"./api/token.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _jsxFileName = \"/home/ydalimir/Documentos/GitHub/AgustinProyecto/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const {\n    0: auth,\n    1: setAuth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n  const {\n    0: realoadUser,\n    1: setReloadUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.getToken)();\n\n    if (token) {\n      setAuth({\n        token,\n        idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_6___default()(token).id\n      });\n    } else {\n      setAuth(null);\n    }\n\n    setReloadUser(false);\n  }, [realoadUser]);\n\n  const login = token => {\n    (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.setToken)(token);\n    setAuth({\n      token,\n      idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_6___default()(token).id\n    });\n  };\n\n  const logout = () => {\n    if (auth) {\n      (0,_api_token__WEBPACK_IMPORTED_MODULE_5__.removeToken)();\n      setAuth(null);\n      router.push(\"/\");\n    }\n  };\n\n  const authData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({\n    auth,\n    login,\n    logout,\n    setReloadUser\n  }), [auth]);\n  if (auth === undefined) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_7__.default.Provider, {\n    value: authData,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n      position: \"top-right\",\n      autoClose: 5000,\n      hideProgressBar: true,\n      newestOnTop: true,\n      closeOnClick: true,\n      rtl: false,\n      pauseOnFocusLoss: false,\n      draggable: true,\n      pauseOnHover: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRoIiwic2V0QXV0aCIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwicmVhbG9hZFVzZXIiLCJzZXRSZWxvYWRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidG9rZW4iLCJnZXRUb2tlbiIsImlkVXNlciIsImp3dERlY29kZSIsImlkIiwibG9naW4iLCJzZXRUb2tlbiIsImxvZ291dCIsInJlbW92ZVRva2VuIiwicHVzaCIsImF1dGhEYXRhIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN0RCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUNDLFNBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBK0JILCtDQUFRLENBQUMsS0FBRCxDQUE3QztBQUNBLFFBQU1JLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFHQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsS0FBSyxHQUFHQyxvREFBUSxFQUF0Qjs7QUFDQSxRQUFJRCxLQUFKLEVBQVc7QUFDVFIsYUFBTyxDQUFDO0FBQ05RLGFBRE07QUFFTkUsY0FBTSxFQUFFQyxpREFBUyxDQUFDSCxLQUFELENBQVQsQ0FBaUJJO0FBRm5CLE9BQUQsQ0FBUDtBQUlELEtBTEQsTUFLTztBQUNMWixhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7O0FBQ0RJLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsR0FYUSxFQVdOLENBQUNELFdBQUQsQ0FYTSxDQUFUOztBQWVBLFFBQU1VLEtBQUssR0FBSUwsS0FBRCxJQUFXO0FBQ3ZCTSx3REFBUSxDQUFDTixLQUFELENBQVI7QUFDQVIsV0FBTyxDQUFDO0FBQ05RLFdBRE07QUFFTkUsWUFBTSxFQUFFQyxpREFBUyxDQUFDSCxLQUFELENBQVQsQ0FBaUJJO0FBRm5CLEtBQUQsQ0FBUDtBQUlELEdBTkQ7O0FBVUEsUUFBTUcsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBSWhCLElBQUosRUFBVTtBQUNSaUIsNkRBQVc7QUFDWGhCLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUssWUFBTSxDQUFDWSxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFVQSxRQUFNQyxRQUFRLEdBQUdDLDhDQUFPLENBQ3RCLE9BQU87QUFDTHBCLFFBREs7QUFFTGMsU0FGSztBQUdMRSxVQUhLO0FBSUxYO0FBSkssR0FBUCxDQURzQixFQU90QixDQUFDTCxJQUFELENBUHNCLENBQXhCO0FBYUEsTUFBSUEsSUFBSSxLQUFLRyxTQUFiLEVBQXdCLE9BQU8sSUFBUDtBQUV4QixzQkFDRSw4REFBQyxrRUFBRDtBQUFzQixTQUFLLEVBQUVnQixRQUE3QjtBQUFBLDRCQUVFLDhEQUFDLFNBQUQsb0JBQWVwQixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDBEQUFEO0FBQ0UsY0FBUSxFQUFDLFdBRFg7QUFFRSxlQUFTLEVBQUUsSUFGYjtBQUdFLHFCQUFlLE1BSGpCO0FBSUUsaUJBQVcsTUFKYjtBQUtFLGtCQUFZLE1BTGQ7QUFNRSxTQUFHLEVBQUUsS0FOUDtBQU9FLHNCQUFnQixFQUFFLEtBUHBCO0FBUUUsZUFBUyxNQVJYO0FBU0Usa0JBQVk7QUFUZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3Njc3MvZ2xvYmFsLnNjc3NcIjtcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHNldFRva2VuLCBnZXRUb2tlbiwgcmVtb3ZlVG9rZW4gfSBmcm9tIFwiLi4vYXBpL3Rva2VuXCI7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtyZWFsb2FkVXNlciwgc2V0UmVsb2FkVXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRBdXRoKHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBdXRoKG51bGwpO1xuICAgIH1cbiAgICBzZXRSZWxvYWRVc2VyKGZhbHNlKTtcbiAgfSwgW3JlYWxvYWRVc2VyXSk7XG5cbiAgXG5cbiAgY29uc3QgbG9naW4gPSAodG9rZW4pID0+IHtcbiAgICBzZXRUb2tlbih0b2tlbik7XG4gICAgc2V0QXV0aCh7XG4gICAgICB0b2tlbixcbiAgICAgIGlkVXNlcjogand0RGVjb2RlKHRva2VuKS5pZCxcbiAgICB9KTtcbiAgfTtcblxuXG4gICAgXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgcmVtb3ZlVG9rZW4oKTtcbiAgICAgIHNldEF1dGgobnVsbCk7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9O1xuXG5cblxuICBjb25zdCBhdXRoRGF0YSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGF1dGgsXG4gICAgICBsb2dpbixcbiAgICAgIGxvZ291dCxcbiAgICAgIHNldFJlbG9hZFVzZXIsXG4gICAgfSksXG4gICAgW2F1dGhdXG4gICk7XG5cblxuXG5cbiAgaWYgKGF1dGggPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGhEYXRhfSA+XG4gICAgXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgcG9zaXRpb249XCJ0b3AtcmlnaHRcIlxuICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgIGhpZGVQcm9ncmVzc0JhclxuICAgICAgICBuZXdlc3RPblRvcFxuICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgcnRsPXtmYWxzZX1cbiAgICAgICAgcGF1c2VPbkZvY3VzTG9zcz17ZmFsc2V9XG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgIC8+XG4gICAgXG4gIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_PATH\": function() { return /* binding */ BASE_PATH; },\n/* harmony export */   \"TOKEN\": function() { return /* binding */ TOKEN; }\n/* harmony export */ });\nconst BASE_PATH = \"http://localhost:1337\";\nconst TOKEN = \"token\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJUT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxTQUFTLEdBQUcsdUJBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLE9BQWQiLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9QQVRIID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbmV4cG9ydCBjb25zdCBUT0tFTiA9IFwidG9rZW5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./scss/global.scss":
/*!**************************!*\
  !*** ./scss/global.scss ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("jwt-decode");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();