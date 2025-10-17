/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/LanguageContext.js":
/*!****************************************!*\
  !*** ./src/context/LanguageContext.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LanguageProvider = ({ children })=>{\n    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ID\");\n    // Simpan bahasa terakhir ke localStorage\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const saved = localStorage.getItem(\"lang\");\n        if (saved) setLang(saved);\n    }, []);\n    const changeLanguage = (newLang)=>{\n        setLang(newLang);\n        localStorage.setItem(\"lang\", newLang);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            lang,\n            changeLanguage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\portofolio\\\\src\\\\context\\\\LanguageContext.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\nconst useLanguage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9MYW5ndWFnZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RTtBQUV2RSxNQUFNSSxnQ0FBa0JKLG9EQUFhQTtBQUU5QixNQUFNSyxtQkFBbUIsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDM0MsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpDLHlDQUF5QztJQUN6Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNTSxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSUYsT0FBT0QsUUFBUUM7SUFDckIsR0FBRyxFQUFFO0lBRUwsTUFBTUcsaUJBQWlCLENBQUNDO1FBQ3RCTCxRQUFRSztRQUNSSCxhQUFhSSxPQUFPLENBQUMsUUFBUUQ7SUFDL0I7SUFFQSxxQkFDRSw4REFBQ1QsZ0JBQWdCVyxRQUFRO1FBQUNDLE9BQU87WUFBRVQ7WUFBTUs7UUFBZTtrQkFDckROOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTVcsY0FBYyxJQUFNaEIsaURBQVVBLENBQUNHLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL1BPUlRPRk9MSU8vLi9zcmMvY29udGV4dC9MYW5ndWFnZUNvbnRleHQuanM/YWJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGUoXCJJRFwiKTtcclxuXHJcbiAgLy8gU2ltcGFuIGJhaGFzYSB0ZXJha2hpciBrZSBsb2NhbFN0b3JhZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdcIik7XHJcbiAgICBpZiAoc2F2ZWQpIHNldExhbmcoc2F2ZWQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAobmV3TGFuZykgPT4ge1xyXG4gICAgc2V0TGFuZyhuZXdMYW5nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ1wiLCBuZXdMYW5nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsYW5nLCBjaGFuZ2VMYW5ndWFnZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYW5ndWFnZUNvbnRleHQiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsYW5nIiwic2V0TGFuZyIsInNhdmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5nZUxhbmd1YWdlIiwibmV3TGFuZyIsInNldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwidXNlTGFuZ3VhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/LanguageContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/LanguageContext */ \"./src/context/LanguageContext.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.LanguageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\xampp\\\\htdocs\\\\portofolio\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\portofolio\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQytCO0FBRTlELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILHNFQUFnQkE7a0JBQ2YsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1BPUlRPRk9MSU8vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExhbmd1YWdlUHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkxhbmd1YWdlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();