/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "api_token_js-context_AuthContext_js";
exports.ids = ["api_token_js-context_AuthContext_js"];
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

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_PATH\": function() { return /* binding */ BASE_PATH; },\n/* harmony export */   \"TOKEN\": function() { return /* binding */ TOKEN; }\n/* harmony export */ });\nconst BASE_PATH = \"http://localhost:1337\";\nconst TOKEN = \"token\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJUT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxTQUFTLEdBQUcsdUJBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLE9BQWQiLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9QQVRIID0gXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbmV4cG9ydCBjb25zdCBUT0tFTiA9IFwidG9rZW5cIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

/***/ })

};
;