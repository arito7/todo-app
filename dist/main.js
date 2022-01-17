/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-container {\n    align-items: center;\n    background-color: #343434;\n    display: flex;\n    margin: 0;\n    padding: 32px;\n    text-align: center;\n}\n\n.header-container > h1 {\n    color: #fefefe;\n    flex: 1;\n    margin: 0;\n}\n\n.header-container > button {\n    min-height: 48px;\n    border-radius: 8px;\n    background-color: rgba(19, 162, 206, 0.829);\n    border: none;\n    color: white;\n}\n\n.header-container > button:active{\n    scale: 1.2;\n}\n", "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb,SAAS;IACT,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,OAAO;IACP,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,2CAA2C;IAC3C,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,UAAU;AACd","sourcesContent":[".header-container {\n    align-items: center;\n    background-color: #343434;\n    display: flex;\n    margin: 0;\n    padding: 32px;\n    text-align: center;\n}\n\n.header-container > h1 {\n    color: #fefefe;\n    flex: 1;\n    margin: 0;\n}\n\n.header-container > button {\n    min-height: 48px;\n    border-radius: 8px;\n    background-color: rgba(19, 162, 206, 0.829);\n    border: none;\n    color: white;\n}\n\n.header-container > button:active{\n    scale: 1.2;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/input-bar/input-bar.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/input-bar/input-bar.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.textbar {\n    padding: 0;\n    align-items: center;\n    text-align: center;\n    max-width: 90%;\n    margin: 16px auto;\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.textbar > .textbar-content {\n    padding: 4px;\n    max-width: 90%;\n    border: none;\n    font-size: 1.2em;\n    resize: none;\n    border-radius: 8px;\n    margin: 16px;\n}\n\n.textbar > .textbar-content:focus{\n    outline: none;\n}\n.textbar > button {\n    display: none;\n    align-self: flex-end;\n    margin: 0 16px 16px 16px;\n    background-color: inherit;\n}\n\n.textbar > .exists-msg {\n    background-color: #ff9999;\n    width: 100%;\n    padding: 16px;\n    display: none;\n    margin: 0;\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}", "",{"version":3,"sources":["webpack://./src/components/input-bar/input-bar.css"],"names":[],"mappings":";AACA;IACI,UAAU;IACV,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;IAClB,4EAA4E;AAChF;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,oBAAoB;IACpB,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,aAAa;IACb,aAAa;IACb,SAAS;IACT,kCAAkC;IAClC,mCAAmC;AACvC","sourcesContent":["\n.textbar {\n    padding: 0;\n    align-items: center;\n    text-align: center;\n    max-width: 90%;\n    margin: 16px auto;\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.textbar > .textbar-content {\n    padding: 4px;\n    max-width: 90%;\n    border: none;\n    font-size: 1.2em;\n    resize: none;\n    border-radius: 8px;\n    margin: 16px;\n}\n\n.textbar > .textbar-content:focus{\n    outline: none;\n}\n.textbar > button {\n    display: none;\n    align-self: flex-end;\n    margin: 0 16px 16px 16px;\n    background-color: inherit;\n}\n\n.textbar > .exists-msg {\n    background-color: #ff9999;\n    width: 100%;\n    padding: 16px;\n    display: none;\n    margin: 0;\n    border-bottom-left-radius: inherit;\n    border-bottom-right-radius: inherit;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/sidebar/sidebar.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/sidebar/sidebar.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\n    background-color: #dedede;\n    display: flex;\n    flex-direction: column;\n    max-width: 20%;\n    justify-content: start;\n}\n\n.sidebar > button {\n    padding: 16px;\n    margin: 16px;\n    background-color: #fcfcfc;\n    border-color: #acacac;\n}\n\n.menu-item {\n    padding: 16px;\n    margin: 8px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.menu-item:hover{\n    background-color: #aeaeae;\n}\n\n.menu-item:-moz-drag-over{\n    background-color: red;\n}\n\n.sidebar > .menu-item-container > .menu-item > .menu-item-name {\n    margin: 0;\n    flex: 1;\n    padding-top: 0;\n}\n\n#selected {\n    background-color: #565656;\n    color: #fefefe;\n}\n\n#dragged-over {\n    background-color: #aeaeae;\n}", "",{"version":3,"sources":["webpack://./src/components/sidebar/sidebar.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,OAAO;IACP,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":[".sidebar {\n    background-color: #dedede;\n    display: flex;\n    flex-direction: column;\n    max-width: 20%;\n    justify-content: start;\n}\n\n.sidebar > button {\n    padding: 16px;\n    margin: 16px;\n    background-color: #fcfcfc;\n    border-color: #acacac;\n}\n\n.menu-item {\n    padding: 16px;\n    margin: 8px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n.menu-item:hover{\n    background-color: #aeaeae;\n}\n\n.menu-item:-moz-drag-over{\n    background-color: red;\n}\n\n.sidebar > .menu-item-container > .menu-item > .menu-item-name {\n    margin: 0;\n    flex: 1;\n    padding-top: 0;\n}\n\n#selected {\n    background-color: #565656;\n    color: #fefefe;\n}\n\n#dragged-over {\n    background-color: #aeaeae;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-container {\n    margin: auto;\n    display: none;\n    flex-direction: column;\n    border-radius: 8px;\n    max-width: 90%;\n    padding: 8px 32px;\n    background-color: #fefefe;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.task-container > hr {\n    width: 100%;\n}\n\n.task-container > .task {\n    display: flex;   \n    margin: 0 16px;\n    align-items: center;\n    gap: 16px;\n}\n\n/* checkbox */\n.task-checkbox{\n    height: 24px;\n    width: 24px;\n}\n.task-checkbox:hover{\n    cursor: pointer;\n}\n\n.task-icon {\n    height: 100%;\n}\n\n.task-icon:hover{\n    scale: 1.1;\n}\n\n.task-icon:active{\n    scale: 1.2;\n}\n\n.task-name {\n    flex: 1;\n}\n\n.task-container > .task > .done {\n    text-decoration: line-through;\n    color: #565656;\n}\n\n.dragging {\n    opacity: 0.5;\n}\n\n.draggable:hover {\n    cursor: move;\n}\n\n.group-label {\n    background-color: #ababab;\n    border-radius: 16px;\n    padding: 8px 16px;\n    margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/components/task/task.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,yBAAyB;IACzB,4EAA4E;AAChF;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,SAAS;AACb;;AAEA,aAAa;AACb;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,SAAS;AACb","sourcesContent":[".task-container {\n    margin: auto;\n    display: none;\n    flex-direction: column;\n    border-radius: 8px;\n    max-width: 90%;\n    padding: 8px 32px;\n    background-color: #fefefe;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.task-container > hr {\n    width: 100%;\n}\n\n.task-container > .task {\n    display: flex;   \n    margin: 0 16px;\n    align-items: center;\n    gap: 16px;\n}\n\n/* checkbox */\n.task-checkbox{\n    height: 24px;\n    width: 24px;\n}\n.task-checkbox:hover{\n    cursor: pointer;\n}\n\n.task-icon {\n    height: 100%;\n}\n\n.task-icon:hover{\n    scale: 1.1;\n}\n\n.task-icon:active{\n    scale: 1.2;\n}\n\n.task-name {\n    flex: 1;\n}\n\n.task-container > .task > .done {\n    text-decoration: line-through;\n    color: #565656;\n}\n\n.dragging {\n    opacity: 0.5;\n}\n\n.draggable:hover {\n    cursor: move;\n}\n\n.group-label {\n    background-color: #ababab;\n    border-radius: 16px;\n    padding: 8px 16px;\n    margin: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n}\n@font-face {\n    font-family: ubuntu;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n}\nbody {\n    font-family: ubuntu, Geneva, Tahoma, sans-serif;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: #565656;\n}\n\nbutton {\n    border-radius: 4px;\n    border: 1px solid #dedede;\n    padding: 8px 16px;\n    font-size: 16px;\n}\n\n.icon-button:hover {\n    scale: 1.1;\n}\n.icon-button:active {\n    scale: 0.9;\n}\n\nbutton:hover {\n    scale: 1.1;\n}\n\nbutton:active{\n    scale: 1.05;\n}\n\n.container {\n    display: flex;\n    height: 100%;\n}\n\n.content {\n    flex: 1;\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,4CAAsC;AAC1C;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;AACjB;AACA;IACI,+CAA+C;IAC/C,SAAS;IACT,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;AACA;IACI,UAAU;AACd;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,OAAO;AACX","sourcesContent":["* {\n    box-sizing: border-box;\n}\n@font-face {\n    font-family: ubuntu;\n    src: url('./fonts/Ubuntu-Regular.ttf');\n}\n\nhtml {\n    padding: 0;\n    margin: 0;\n    height: 100vh;\n}\nbody {\n    font-family: ubuntu, Geneva, Tahoma, sans-serif;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: #565656;\n}\n\nbutton {\n    border-radius: 4px;\n    border: 1px solid #dedede;\n    padding: 8px 16px;\n    font-size: 16px;\n}\n\n.icon-button:hover {\n    scale: 1.1;\n}\n.icon-button:active {\n    scale: 0.9;\n}\n\nbutton:hover {\n    scale: 1.1;\n}\n\nbutton:active{\n    scale: 1.05;\n}\n\n.container {\n    display: flex;\n    height: 100%;\n}\n\n.content {\n    flex: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/input-bar/input-bar.css":
/*!************************************************!*\
  !*** ./src/components/input-bar/input-bar.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_input_bar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./input-bar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/input-bar/input-bar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_input_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_input_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_input_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_input_bar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/sidebar/sidebar.css":
/*!********************************************!*\
  !*** ./src/components/sidebar/sidebar.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/sidebar/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/task/task.css":
/*!**************************************!*\
  !*** ./src/components/task/task.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerComponent": () => (/* binding */ headerComponent)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");


const headerComponent = (doc)=>{
    const container = doc.createElement('div');
    container.classList.add('header-container');
    const h1Title = doc.createElement('h1');
    h1Title.textContent = "Todo App";
    const btnNewNote = doc.createElement('button');
    btnNewNote.textContent = 'New Note';

    container.appendChild(h1Title);

    return container;
};



/***/ }),

/***/ "./src/components/input-bar/input-bar.js":
/*!***********************************************!*\
  !*** ./src/components/input-bar/input-bar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputBarComponent": () => (/* binding */ InputBarComponent)
/* harmony export */ });
/* harmony import */ var _input_bar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-bar.css */ "./src/components/input-bar/input-bar.css");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility */ "./src/components/utility.js");



const InputBarComponent = ()=>{
    // create DOM elements
    const node = document.createElement('div');
    const textarea = document.createElement('input');
    const btn = document.createElement('button');
    const msg = document.createElement('p');
    
    // add classes
    node.classList.add('textbar');
    textarea.classList.add('textbar-content');
    msg.classList.add('exists-msg');

    // default attributes
    (0,_utility__WEBPACK_IMPORTED_MODULE_1__.setAttributes)(textarea, {
        type: 'text',
        maxlength: '40',
        placeholder: 'New Task',
        size: '40',
        minlength: '1',
        spellcheck: 'true',
        autocorrect: 'on'
    })

    const setMsgShowCondition = (fn) => {
        const condition = () => msg.style.display = fn() ? 'block' : 'none';
       
        textarea.addEventListener('input',()=>{
            condition();
        });
        btn.addEventListener('click', ()=>{
            condition();
        })
    }

    const setPlaceholderText = (text) => {
        textarea.setAttribute('placeholder', text);
    };

    btn.toggle = (e) => {
        if(e){
            btn.style.display = e.target.value !== '' ? 'block' : 'none';
        } else {
            btn.style.display = btn.style.display === 'block' ? 'none' : 'block';
        }
    }

    textarea.addEventListener('input', e => {
        btn.toggle(e);
    });

    // append
    node.appendChild(textarea);
    node.appendChild(btn);
    node.appendChild(msg);
    
    return {node, textarea, btn, msg, setPlaceholderText, setMsgShowCondition};
};



/***/ }),

/***/ "./src/components/pubsub.js":
/*!**********************************!*\
  !*** ./src/components/pubsub.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PubSub": () => (/* binding */ PubSub)
/* harmony export */ });
const PubSub = () => {
    const _events = {};

    const on = (eventName, fn) => {
        _events[eventName] = _events[eventName]||[];
        _events[eventName].push(fn);
    }

    const off = (eventName, fn) => {
        if (_events[eventName]){
            for (var i = 0; i < _events[eventName].length; i++){
                if(_events[eventName][i] === fn) {
                    _events[eventName].splice(i,1);
                    break;
                }
            }
        }
    };
    const emit = (eventName, data) => {
        if(_events[eventName]){
            _events[eventName].forEach( fn => {
                fn(data);
            });
        }
    }

    return {on, off, emit}
}



/***/ }),

/***/ "./src/components/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.css */ "./src/components/sidebar/sidebar.css");
/* harmony import */ var _input_bar_input_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-bar/input-bar */ "./src/components/input-bar/input-bar.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/components/utility.js");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove.svg */ "./src/components/sidebar/remove.svg");





/**
 * Events:
 *  'group-change' : triggers when a group is added/removed
 *  'selection-change' : triggers when side bar selection changes
 * @param {} pubsub 
 * @param {} storage 
 * @returns 
 */

const Sidebar = (pubsub = null, storage = null)=>{
    const CSS = {
        selected: 'selected',
        sidebar: 'sidebar',
        showAll: 'show-all',
        menuItem: 'menu-item',
    }
    const EVENTS = {
        groupUpdated: 'group-updated',
        selectionChange: 'selection-change',
    }
    const UI = {
        showAllBtn: 'Show All',
        createNewGroupBtn: 'Create New Group',
        warningMsg: 'Group already exists!',
        inputBarPlaceholder: 'New Group'
    }
    let _groups = [];
    const GROUPS_STORAGE_SLOT = 1;

    // create DOM elements
    const container = document.createElement('div');
    const menuItemContainer = document.createElement('div');
    const inputbar = (0,_input_bar_input_bar__WEBPACK_IMPORTED_MODULE_1__.InputBarComponent)();
    const showAllBtn = document.createElement('div');
    
    render();

    // add classes
    showAllBtn.classList.add(CSS.showAll);
    showAllBtn.classList.add(CSS.menuItem)
    container.classList.add(CSS.sidebar);
    menuItemContainer.classList.add('menu-item-container');

    showAllBtn.textContent = UI.showAllBtn;
    showAllBtn.addEventListener('click',()=>{clickListener(showAllBtn)});
    inputbar.btn.textContent = UI.createNewGroupBtn;
    inputbar.setPlaceholderText(UI.inputBarPlaceholder);
    inputbar.btn.addEventListener('click',()=>{
        if(addMenuItem(inputbar.textarea.value)){
            inputbar.textarea.value = '';
            inputbar.btn.toggle();
        };
    })
    inputbar.msg.textContent = UI.warningMsg;
    inputbar.setMsgShowCondition(()=>{
        return _groups.includes(inputbar.textarea.value); 
    })

    function render(){
        ;(0,_utility__WEBPACK_IMPORTED_MODULE_2__.clearNode)(menuItemContainer);
        
        if(!document.querySelector('#selected')){
            showAllBtn.id = 'selected';
        }

        if(storage){
            const temp = JSON.parse(storage.get(GROUPS_STORAGE_SLOT));
            if(temp){
                _groups = temp;
            }
        }

        for (let i = _groups.length - 1; i > -1; i--){
            const c = document.createElement('div');
            const text = document.createElement('h5');
            const remove = new Image();
            
            c.classList.add(CSS.menuItem);
            text.classList.add('menu-item-name');
            remove.classList.add('icon-button');
            
            remove.src = _remove_svg__WEBPACK_IMPORTED_MODULE_3__;
            text.textContent = _groups[i];
            c.addEventListener('click', () => {clickListener(c)});
            c.addEventListener('dragleave', (e) => {dragLeaveHandler(e, c)});
            c.addEventListener('dragover', (e) => {dragoverHandler(e, c)});
            c.addEventListener('drop', dropHandler);
            remove.addEventListener('click',() =>{
                removeGroup(i);
                render();
            });
            
            c.appendChild(text);            
            c.appendChild(remove);
            menuItemContainer.appendChild(c);            
        }
    }
    function clickListener(src){
        const currentSelection = document.querySelector('#selected');
        if (currentSelection === src){ return }
        if(currentSelection){
            currentSelection.id = '';
        }
        src.id = 'selected';
        if (pubsub) {
            pubsub.emit(EVENTS.selectionChange, src.textContent)
            console.log(src.textContent)
        }
    }
    function dragoverHandler(e, src){
        e.preventDefault();
        console.log('dragging over')
        src.id = 'dragged-over';
    }
    
    function dragLeaveHandler(e, src){
        e.preventDefault()
        console.log('drag leaving')
        src.id = '';
    }

    function dropHandler(e) {
        e.preventDefault();
        const draggedOver = document.querySelectorAll('#dragged-over');
        if (draggedOver){
            draggedOver.forEach((e)=>{
                e.id = '';
            })
        }
        console.log('dropped')
        if(pubsub){
            const taskName = e.dataTransfer.getData('text/plain');
            const group = e.target.textContent;
            pubsub.emit('task-moved', {taskName, group});
        }
    }
    
    function removeGroup(index){
        _groups.splice(index, 1);
        updateStorage();
        if (pubsub){
            pubsub.emit(EVENTS.groupUpdated, _groups)
        }
    }

    function addGroup(title){
        _groups.push(title);
        updateStorage();
        if(pubsub){
            pubsub.emit(EVENTS.groupUpdated, _groups);
        }
    }

    function updateStorage(){
        if(storage){
            storage.add(GROUPS_STORAGE_SLOT, JSON.stringify(_groups));
        }
    }

    function addMenuItem(title){
        if (inputbar.textarea.value !== '' && !_groups.includes(inputbar.textarea.value)){
            addGroup(title);
            render();
            return true
        }
    }
    
    // append
    container.appendChild(inputbar.node);
    container.appendChild(showAllBtn);
    container.appendChild(menuItemContainer);
    
    return container;
}


/***/ }),

/***/ "./src/components/storage/storage.js":
/*!*******************************************!*\
  !*** ./src/components/storage/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
const Storage = (type = 'localStorage') => {
    let _storage;
    // check if storage is available for use
    (()=>{
        try {
            _storage = window[type];
            let x = '__storage_test__';
            _storage.setItem(x, x);
            _storage.removeItem(x);
            console.log('storage test cleared')
        } catch(e) {
            _storage = null;
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (_storage && _storage.length !== 0);
        }
    })();

    function add(key, value){
        if(_storage){
            _storage.setItem(key, value);
        }
    }

    function remove(key, value){
        if(_storage){
            _storage.removeItem(key, value);
        }
    }

    function get(key){
        if(_storage){
            return _storage.getItem(key)
        }
    }

    function clear(){
        if(_storage){
            _storage.clear()
        }
    }

    return {add, remove, clear, get};
};




/***/ }),

/***/ "./src/components/task/task.js":
/*!*************************************!*\
  !*** ./src/components/task/task.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskContainer": () => (/* binding */ TaskContainer)
/* harmony export */ });
/* harmony import */ var _task_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.css */ "./src/components/task/task.css");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.svg */ "./src/components/task/delete.svg");
/* harmony import */ var _drag_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-icon.svg */ "./src/components/task/drag-icon.svg");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility */ "./src/components/utility.js");





const Task = (()=>{

    const EVENTS = {
        deleteTask: 'delete',
        taskStatusChange: 'task-status-change',
    }

    const CSS = {
        deleteIcon: 'task-icon',
        groupLabel: 'group-label',
        checkbox: 'task-checkbox',
        taskName: 'task-name',
    }

    function createTask(text, done = false){
        let group = null;
        return { text, done, group}
    }

    /**
     * Returns a DOM node
     */
    const createNode = (pubsub = null, taskObj) => {
        const container = document.createElement('div');
        const pText = document.createElement('p');
        const ckbox = document.createElement('input');
        const deleteIcon = new Image()
        const dragIcon = new Image()
        let groupLabel = null;
        if(taskObj.group !== null && taskObj.group !== ''){
            groupLabel = document.createElement('p');
            groupLabel.classList.add(CSS.groupLabel)
            groupLabel.textContent = taskObj.group;
        }

        // add classes
        container.classList.add('task');
        dragIcon.classList.add('draggable');
        deleteIcon.classList.add(CSS.deleteIcon);
        ckbox.classList.add(CSS.checkbox);
        pText.classList.add(CSS.taskName);
        // add attributes
        dragIcon.setAttribute('draggable', 'true');
        ckbox.setAttribute('type', 'checkbox');
        

        pText.textContent = taskObj.text;
        dragIcon.src = _drag_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
        deleteIcon.src = _delete_svg__WEBPACK_IMPORTED_MODULE_1__;
        dragIcon.addEventListener('dragstart', dragStartHandler);
        dragIcon.addEventListener('dragend', dragEndHandler);
        deleteIcon.addEventListener('click', deleteTaskHandler);
        ckbox.addEventListener('input', inputHandler);
        
        if (taskObj.done){
            ckbox.setAttribute('checked', 'true');
            pText.classList.add('done');
        }

        function deleteTaskHandler(){
            if (pubsub){
                pubsub.emit(Task.EVENTS.deleteTask, taskObj.text);
            }
        };
        
        function inputHandler(){
            taskObj.done = !taskObj.done;
            pubsub.emit(EVENTS.taskStatusChange, taskObj);
            if (taskObj.done){
                pText.classList.add('done');
            } else {
                pText.classList.remove('done');
            }
        }

        // append
        container.appendChild(dragIcon);
        container.appendChild(ckbox);
        container.appendChild(pText);
        if(groupLabel){
            container.appendChild(groupLabel);
        }
        container.appendChild(deleteIcon);

        function dragStartHandler(e){
            console.log('drag started')
            container.classList.add('dragging');
            e.dataTransfer.setData('text/plain', pText.textContent);
        }

        function dragEndHandler(e){
            console.log('drag ended')
            container.classList.remove('dragging');
        }

        return container;
    }
    
    return {createNode, createTask, EVENTS};
})();

const TaskContainer = (doc, pubsub = null, storage = null) => {
    const TASKS_STORAGE_SLOT = 0;
    const _container = doc.createElement('div');
    const container = _container; // for exposing
    _container.classList.add('task-container');
    let _tasks = [];

    render();
    
    if(pubsub){
        pubsub.on(Task.EVENTS.taskStatusChange, updateTask)
        pubsub.on(Task.EVENTS.deleteTask, deleteTask);
        pubsub.on('task-change', render);
        pubsub.on('task-moved', moveTask);
        pubsub.on('group-change', groups => {
            console.log(groups);
        })
        pubsub.on('selection-change', (groupName) => {
            render(groupName);
        })
    }
    
    function updateTask(taskObj){
        for(let task of _tasks){
            if(task.text === taskObj.text){
                task.done = taskObj.done;
                updateStorage();
            }
        }
    }
    function moveTask(info){
        console.log(info);
        const i = _tasks.findIndex( e => e.text === info.taskName );
        if (i > -1) {
            _tasks[i].group = info.group;
            updateStorage();
            render();
        }
    }

    function deleteTask(text){
        for(let i = 0; i < _tasks.length; i++){
            if (_tasks[i].text === text){
                _tasks.splice(i, 1);
                updateStorage();
            }
        }
        render();
    }
    /**
     * @param {Task} task 
     */
    const addTask = (task) => {
        const newTask = Task.createTask(task);
        _tasks.push(newTask);
        updateStorage();
    };
    
    function render(groupName = null){
        _container.style.display = 'none';
        
        if(storage){
            const temp = JSON.parse(storage.get(0));
            if(temp){
                _tasks = temp;
            }
        }
        // don't render if there are no tasks
        (0,_utility__WEBPACK_IMPORTED_MODULE_3__.clearNode)(_container);
        for(let i = _tasks.length - 1; i > -1; i--){
            if (groupName !== null && groupName !== 'Show All'){
                if(_tasks[i].group !== groupName){
                    continue;
                }
            }
            _container.appendChild(Task.createNode(pubsub, _tasks[i]));
        }
        if(_container.hasChildNodes()){
            _container.style.display = 'flex';
        }
    };
    
    /**
     * @param {string} text title of task 
     * @returns {boolean}
     */
    const contains = (text) => {
        for (let task of _tasks){
            if (task.text === text && !task.done){
                return true;
            }
        }
    }
    
    function updateStorage(){
        if(storage){
            storage.add(TASKS_STORAGE_SLOT, JSON.stringify(_tasks));
        }
    }
    
    return {render, addTask, container, contains}
}


/***/ }),

/***/ "./src/components/utility.js":
/*!***********************************!*\
  !*** ./src/components/utility.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAttributes": () => (/* binding */ setAttributes),
/* harmony export */   "clearNode": () => (/* binding */ clearNode)
/* harmony export */ });
function setAttributes(domElement, attributes){
    for (let attr in attributes){
        domElement.setAttribute(attr, attributes[attr]);
    }
}

function clearNode(node) {
    while(node.hasChildNodes()){
        node.removeChild(node.firstChild);
    }
}



/***/ }),

/***/ "./src/components/sidebar/remove.svg":
/*!*******************************************!*\
  !*** ./src/components/sidebar/remove.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc8ef66805b9cd7ab7d2.svg";

/***/ }),

/***/ "./src/components/task/delete.svg":
/*!****************************************!*\
  !*** ./src/components/task/delete.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1129c53a10f3c7163570.svg";

/***/ }),

/***/ "./src/components/task/drag-icon.svg":
/*!*******************************************!*\
  !*** ./src/components/task/drag-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69c278fddd6dd51c8458.svg";

/***/ }),

/***/ "./src/fonts/Ubuntu-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Ubuntu-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbdecfce69a96dc73e2a.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pubsub */ "./src/components/pubsub.js");
/* harmony import */ var _components_task_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task/task */ "./src/components/task/task.js");
/* harmony import */ var _components_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/storage/storage */ "./src/components/storage/storage.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar */ "./src/components/sidebar/sidebar.js");
/* harmony import */ var _components_input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/input-bar/input-bar */ "./src/components/input-bar/input-bar.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/index.css");








(()=>{    
    const pubsub = (0,_components_pubsub__WEBPACK_IMPORTED_MODULE_1__.PubSub)();
    const storage = (0,_components_storage_storage__WEBPACK_IMPORTED_MODULE_3__.Storage)();

    const inputBar = (0,_components_input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__.InputBarComponent)();
    inputBar.setPlaceholderText('New Task');
    inputBar.btn.textContent = 'Add Task'
    inputBar.msg.textContent = 'Task already exists!'
    inputBar.btn.addEventListener('click', ()=>{
        if (!tasksContainer.contains(inputBar.textarea.value)){
            tasksContainer.addTask(inputBar.textarea.value);   
            pubsub.emit('task-change');
            inputBar.textarea.value = '';
            inputBar.btn.toggle();
            inputBar.msg.style.display = 'none';
        } else {
            inputBar.msg.style.display = 'block';
        }
    })
    
    const body = document.querySelector('body');
    const container = document.createElement('div'); // holds sidebar and main content
    container.classList.add('container');
    const content = document.createElement('div'); // holds main content
    content.classList.add('content');
    const header = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.headerComponent)(document);
    const sidebar = (0,_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar)(pubsub, storage);
    
    addEventListener('drop',(e)=>{
        console.log(e)
    })

    const tasksContainer = (0,_components_task_task__WEBPACK_IMPORTED_MODULE_2__.TaskContainer)(document, pubsub, storage);
    
    content.appendChild(inputBar.node);
    content.appendChild(tasksContainer.container);
    container.appendChild(sidebar);
    container.appendChild(content);
    body.appendChild(header);
    body.appendChild(container);
    
    
    
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ3JCNkQ7QUFDaEI7QUFDVTtBQUNBO0FBQ0E7QUFDYztBQUNoRDs7QUFFckI7QUFDQSxtQkFBbUIsMERBQU07QUFDekIsb0JBQW9CLG9FQUFPOztBQUUzQixxQkFBcUIsa0ZBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLG1CQUFtQiwwRUFBZTtBQUNsQyxvQkFBb0Isb0VBQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCwyQkFBMkIsb0VBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQtYmFyL2lucHV0LWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFzay90YXNrLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/ZjdmYSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2lucHV0LWJhci9pbnB1dC1iYXIuY3NzPzYyNDIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY3NzPzI4YTAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY3NzP2Y1OGMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy9pbnB1dC1iYXIvaW5wdXQtYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvcHVic3ViLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvc3RvcmFnZS9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdGFzay90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciA+IGgxIHtcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDE2MiwgMjA2LCAwLjgyOSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmV7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsT0FBTztJQUNQLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyID4gaDEge1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOSwgMTYyLCAyMDYsIDAuODI5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZXtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRleHRiYXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDE2cHggYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4udGV4dGJhciA+IC50ZXh0YmFyLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW46IDE2cHg7XFxufVxcblxcbi50ZXh0YmFyID4gLnRleHRiYXItY29udGVudDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRleHRiYXIgPiBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwIDE2cHggMTZweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udGV4dGJhciA+IC5leGlzdHMtbXNnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2lucHV0LWJhci9pbnB1dC1iYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxtQ0FBbUM7QUFDdkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRleHRiYXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBtYXJnaW46IDE2cHggYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4udGV4dGJhciA+IC50ZXh0YmFyLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW46IDE2cHg7XFxufVxcblxcbi50ZXh0YmFyID4gLnRleHRiYXItY29udGVudDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLnRleHRiYXIgPiBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwIDE2cHggMTZweCAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udGV4dGJhciA+IC5leGlzdHMtbXNnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTk5OTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiAyMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5zaWRlYmFyID4gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbiAgICBib3JkZXItY29sb3I6ICNhY2FjYWM7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBtYXJnaW46IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51LWl0ZW06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWFlYWU7XFxufVxcblxcbi5tZW51LWl0ZW06LW1vei1kcmFnLW92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnNpZGViYXIgPiAubWVudS1pdGVtLWNvbnRhaW5lciA+IC5tZW51LWl0ZW0gPiAubWVudS1pdGVtLW5hbWUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4jc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG59XFxuXFxuI2RyYWdnZWQtb3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZWFlYWU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsT0FBTztJQUNQLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMjAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4uc2lkZWJhciA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIG1hcmdpbjogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gICAgYm9yZGVyLWNvbG9yOiAjYWNhY2FjO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgbWFyZ2luOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudS1pdGVtOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVhZWFlO1xcbn1cXG5cXG4ubWVudS1pdGVtOi1tb3otZHJhZy1vdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5zaWRlYmFyID4gLm1lbnUtaXRlbS1jb250YWluZXIgPiAubWVudS1pdGVtID4gLm1lbnUtaXRlbS1uYW1lIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuI3NlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcXG4gICAgY29sb3I6ICNmZWZlZmU7XFxufVxcblxcbiNkcmFnZ2VkLW92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVhZWFlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFzay1jb250YWluZXIge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgbWF4LXdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiBociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgXFxuICAgIG1hcmdpbjogMCAxNnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbi8qIGNoZWNrYm94ICovXFxuLnRhc2stY2hlY2tib3h7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxufVxcbi50YXNrLWNoZWNrYm94OmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWljb246aG92ZXJ7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi50YXNrLWljb246YWN0aXZle1xcbiAgICBzY2FsZTogMS4yO1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gLnRhc2sgPiAuZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogIzU2NTY1NjtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uZHJhZ2dhYmxlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4uZ3JvdXAtbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhYmFiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gaHIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxcbiAgICBtYXJnaW46IDAgMTZweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4vKiBjaGVja2JveCAqL1xcbi50YXNrLWNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbn1cXG4udGFzay1jaGVja2JveDpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pY29uIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1pY29uOmhvdmVye1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4udGFzay1pY29uOmFjdGl2ZXtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IC50YXNrID4gLmRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6ICM1NjU2NTY7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmRyYWdnYWJsZTpob3ZlciB7XFxuICAgIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLmdyb3VwLWxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWJhYjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIG1hcmdpbjogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHVidW50dTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IHVidW50dSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY1NjU2O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5pY29uLWJ1dHRvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcbi5pY29uLWJ1dHRvbjphY3RpdmUge1xcbiAgICBzY2FsZTogMC45O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG5idXR0b246YWN0aXZle1xcbiAgICBzY2FsZTogMS4wNTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNENBQXNDO0FBQzFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwrQ0FBK0M7SUFDL0MsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogdWJ1bnR1O1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9VYnVudHUtUmVndWxhci50dGYnKTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiB1YnVudHUsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTY1NjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uaWNvbi1idXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG4uaWNvbi1idXR0b246YWN0aXZlIHtcXG4gICAgc2NhbGU6IDAuOTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZXtcXG4gICAgc2NhbGU6IDEuMDU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQtYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQtYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9oZWFkZXIuY3NzJztcblxuY29uc3QgaGVhZGVyQ29tcG9uZW50ID0gKGRvYyk9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb250YWluZXInKTtcbiAgICBjb25zdCBoMVRpdGxlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBBcHBcIjtcbiAgICBjb25zdCBidG5OZXdOb3RlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bk5ld05vdGUudGV4dENvbnRlbnQgPSAnTmV3IE5vdGUnO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgxVGl0bGUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7aGVhZGVyQ29tcG9uZW50fTsiLCJpbXBvcnQgJy4vaW5wdXQtYmFyLmNzcyc7XG5pbXBvcnQgeyBzZXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdXRpbGl0eSc7XG5cbmNvbnN0IElucHV0QmFyQ29tcG9uZW50ID0gKCk9PntcbiAgICAvLyBjcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgXG4gICAgLy8gYWRkIGNsYXNzZXNcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3RleHRiYXInKTtcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YmFyLWNvbnRlbnQnKTtcbiAgICBtc2cuY2xhc3NMaXN0LmFkZCgnZXhpc3RzLW1zZycpO1xuXG4gICAgLy8gZGVmYXVsdCBhdHRyaWJ1dGVzXG4gICAgc2V0QXR0cmlidXRlcyh0ZXh0YXJlYSwge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIG1heGxlbmd0aDogJzQwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdOZXcgVGFzaycsXG4gICAgICAgIHNpemU6ICc0MCcsXG4gICAgICAgIG1pbmxlbmd0aDogJzEnLFxuICAgICAgICBzcGVsbGNoZWNrOiAndHJ1ZScsXG4gICAgICAgIGF1dG9jb3JyZWN0OiAnb24nXG4gICAgfSlcblxuICAgIGNvbnN0IHNldE1zZ1Nob3dDb25kaXRpb24gPSAoZm4pID0+IHtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uID0gKCkgPT4gbXNnLnN0eWxlLmRpc3BsYXkgPSBmbigpID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICBcbiAgICAgICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCgpPT57XG4gICAgICAgICAgICBjb25kaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjb25kaXRpb24oKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQbGFjZWhvbGRlclRleHQgPSAodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdGV4dCk7XG4gICAgfTtcblxuICAgIGJ0bi50b2dnbGUgPSAoZSkgPT4ge1xuICAgICAgICBpZihlKXtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gZS50YXJnZXQudmFsdWUgIT09ICcnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gYnRuLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHtcbiAgICAgICAgYnRuLnRvZ2dsZShlKTtcbiAgICB9KTtcblxuICAgIC8vIGFwcGVuZFxuICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKG1zZyk7XG4gICAgXG4gICAgcmV0dXJuIHtub2RlLCB0ZXh0YXJlYSwgYnRuLCBtc2csIHNldFBsYWNlaG9sZGVyVGV4dCwgc2V0TXNnU2hvd0NvbmRpdGlvbn07XG59O1xuXG5leHBvcnQge0lucHV0QmFyQ29tcG9uZW50fSIsImNvbnN0IFB1YlN1YiA9ICgpID0+IHtcbiAgICBjb25zdCBfZXZlbnRzID0ge307XG5cbiAgICBjb25zdCBvbiA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IF9ldmVudHNbZXZlbnROYW1lXXx8W107XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmYgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICAgICAgICBpZiAoX2V2ZW50c1tldmVudE5hbWVdKXtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihfZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBlbWl0ID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgICAgICBpZihfZXZlbnRzW2V2ZW50TmFtZV0pe1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLmZvckVhY2goIGZuID0+IHtcbiAgICAgICAgICAgICAgICBmbihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtvbiwgb2ZmLCBlbWl0fVxufVxuXG5leHBvcnQge1B1YlN1Yn0iLCJpbXBvcnQgJy4vc2lkZWJhci5jc3MnO1xuaW1wb3J0IHsgSW5wdXRCYXJDb21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1iYXIvaW5wdXQtYmFyJztcbmltcG9ydCB7IGNsZWFyTm9kZSB9IGZyb20gJy4uL3V0aWxpdHknO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnLi9yZW1vdmUuc3ZnJztcblxuLyoqXG4gKiBFdmVudHM6XG4gKiAgJ2dyb3VwLWNoYW5nZScgOiB0cmlnZ2VycyB3aGVuIGEgZ3JvdXAgaXMgYWRkZWQvcmVtb3ZlZFxuICogICdzZWxlY3Rpb24tY2hhbmdlJyA6IHRyaWdnZXJzIHdoZW4gc2lkZSBiYXIgc2VsZWN0aW9uIGNoYW5nZXNcbiAqIEBwYXJhbSB7fSBwdWJzdWIgXG4gKiBAcGFyYW0ge30gc3RvcmFnZSBcbiAqIEByZXR1cm5zIFxuICovXG5cbmNvbnN0IFNpZGViYXIgPSAocHVic3ViID0gbnVsbCwgc3RvcmFnZSA9IG51bGwpPT57XG4gICAgY29uc3QgQ1NTID0ge1xuICAgICAgICBzZWxlY3RlZDogJ3NlbGVjdGVkJyxcbiAgICAgICAgc2lkZWJhcjogJ3NpZGViYXInLFxuICAgICAgICBzaG93QWxsOiAnc2hvdy1hbGwnLFxuICAgICAgICBtZW51SXRlbTogJ21lbnUtaXRlbScsXG4gICAgfVxuICAgIGNvbnN0IEVWRU5UUyA9IHtcbiAgICAgICAgZ3JvdXBVcGRhdGVkOiAnZ3JvdXAtdXBkYXRlZCcsXG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogJ3NlbGVjdGlvbi1jaGFuZ2UnLFxuICAgIH1cbiAgICBjb25zdCBVSSA9IHtcbiAgICAgICAgc2hvd0FsbEJ0bjogJ1Nob3cgQWxsJyxcbiAgICAgICAgY3JlYXRlTmV3R3JvdXBCdG46ICdDcmVhdGUgTmV3IEdyb3VwJyxcbiAgICAgICAgd2FybmluZ01zZzogJ0dyb3VwIGFscmVhZHkgZXhpc3RzIScsXG4gICAgICAgIGlucHV0QmFyUGxhY2Vob2xkZXI6ICdOZXcgR3JvdXAnXG4gICAgfVxuICAgIGxldCBfZ3JvdXBzID0gW107XG4gICAgY29uc3QgR1JPVVBTX1NUT1JBR0VfU0xPVCA9IDE7XG5cbiAgICAvLyBjcmVhdGUgRE9NIGVsZW1lbnRzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dGJhciA9IElucHV0QmFyQ29tcG9uZW50KCk7XG4gICAgY29uc3Qgc2hvd0FsbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHJlbmRlcigpO1xuXG4gICAgLy8gYWRkIGNsYXNzZXNcbiAgICBzaG93QWxsQnRuLmNsYXNzTGlzdC5hZGQoQ1NTLnNob3dBbGwpO1xuICAgIHNob3dBbGxCdG4uY2xhc3NMaXN0LmFkZChDU1MubWVudUl0ZW0pXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQ1NTLnNpZGViYXIpO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKTtcblxuICAgIHNob3dBbGxCdG4udGV4dENvbnRlbnQgPSBVSS5zaG93QWxsQnRuO1xuICAgIHNob3dBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57Y2xpY2tMaXN0ZW5lcihzaG93QWxsQnRuKX0pO1xuICAgIGlucHV0YmFyLmJ0bi50ZXh0Q29udGVudCA9IFVJLmNyZWF0ZU5ld0dyb3VwQnRuO1xuICAgIGlucHV0YmFyLnNldFBsYWNlaG9sZGVyVGV4dChVSS5pbnB1dEJhclBsYWNlaG9sZGVyKTtcbiAgICBpbnB1dGJhci5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGlmKGFkZE1lbnVJdGVtKGlucHV0YmFyLnRleHRhcmVhLnZhbHVlKSl7XG4gICAgICAgICAgICBpbnB1dGJhci50ZXh0YXJlYS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaW5wdXRiYXIuYnRuLnRvZ2dsZSgpO1xuICAgICAgICB9O1xuICAgIH0pXG4gICAgaW5wdXRiYXIubXNnLnRleHRDb250ZW50ID0gVUkud2FybmluZ01zZztcbiAgICBpbnB1dGJhci5zZXRNc2dTaG93Q29uZGl0aW9uKCgpPT57XG4gICAgICAgIHJldHVybiBfZ3JvdXBzLmluY2x1ZGVzKGlucHV0YmFyLnRleHRhcmVhLnZhbHVlKTsgXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xuICAgICAgICBjbGVhck5vZGUobWVudUl0ZW1Db250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZCcpKXtcbiAgICAgICAgICAgIHNob3dBbGxCdG4uaWQgPSAnc2VsZWN0ZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3RvcmFnZSl7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gSlNPTi5wYXJzZShzdG9yYWdlLmdldChHUk9VUFNfU1RPUkFHRV9TTE9UKSk7XG4gICAgICAgICAgICBpZih0ZW1wKXtcbiAgICAgICAgICAgICAgICBfZ3JvdXBzID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSBfZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKXtcbiAgICAgICAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGMuY2xhc3NMaXN0LmFkZChDU1MubWVudUl0ZW0pO1xuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICAgICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2ljb24tYnV0dG9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbW92ZS5zcmMgPSBSZW1vdmVJY29uO1xuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IF9ncm91cHNbaV07XG4gICAgICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2NsaWNrTGlzdGVuZXIoYyl9KTtcbiAgICAgICAgICAgIGMuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtkcmFnTGVhdmVIYW5kbGVyKGUsIGMpfSk7XG4gICAgICAgICAgICBjLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtkcmFnb3ZlckhhbmRsZXIoZSwgYyl9KTtcbiAgICAgICAgICAgIGMuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BIYW5kbGVyKTtcbiAgICAgICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XG4gICAgICAgICAgICAgICAgcmVtb3ZlR3JvdXAoaSk7XG4gICAgICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYy5hcHBlbmRDaGlsZCh0ZXh0KTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGMuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGMpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsaWNrTGlzdGVuZXIoc3JjKXtcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RlZCcpO1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGlvbiA9PT0gc3JjKXsgcmV0dXJuIH1cbiAgICAgICAgaWYoY3VycmVudFNlbGVjdGlvbil7XG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uLmlkID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgc3JjLmlkID0gJ3NlbGVjdGVkJztcbiAgICAgICAgaWYgKHB1YnN1Yikge1xuICAgICAgICAgICAgcHVic3ViLmVtaXQoRVZFTlRTLnNlbGVjdGlvbkNoYW5nZSwgc3JjLnRleHRDb250ZW50KVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3JjLnRleHRDb250ZW50KVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRyYWdvdmVySGFuZGxlcihlLCBzcmMpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmFnZ2luZyBvdmVyJylcbiAgICAgICAgc3JjLmlkID0gJ2RyYWdnZWQtb3Zlcic7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZUhhbmRsZXIoZSwgc3JjKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmFnIGxlYXZpbmcnKVxuICAgICAgICBzcmMuaWQgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcm9wSGFuZGxlcihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZHJhZ2dlZE92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZHJhZ2dlZC1vdmVyJyk7XG4gICAgICAgIGlmIChkcmFnZ2VkT3Zlcil7XG4gICAgICAgICAgICBkcmFnZ2VkT3Zlci5mb3JFYWNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGUuaWQgPSAnJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2Ryb3BwZWQnKVxuICAgICAgICBpZihwdWJzdWIpe1xuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgcHVic3ViLmVtaXQoJ3Rhc2stbW92ZWQnLCB7dGFza05hbWUsIGdyb3VwfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlR3JvdXAoaW5kZXgpe1xuICAgICAgICBfZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKHB1YnN1Yil7XG4gICAgICAgICAgICBwdWJzdWIuZW1pdChFVkVOVFMuZ3JvdXBVcGRhdGVkLCBfZ3JvdXBzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkR3JvdXAodGl0bGUpe1xuICAgICAgICBfZ3JvdXBzLnB1c2godGl0bGUpO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgICAgIGlmKHB1YnN1Yil7XG4gICAgICAgICAgICBwdWJzdWIuZW1pdChFVkVOVFMuZ3JvdXBVcGRhdGVkLCBfZ3JvdXBzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2UoKXtcbiAgICAgICAgaWYoc3RvcmFnZSl7XG4gICAgICAgICAgICBzdG9yYWdlLmFkZChHUk9VUFNfU1RPUkFHRV9TTE9ULCBKU09OLnN0cmluZ2lmeShfZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNZW51SXRlbSh0aXRsZSl7XG4gICAgICAgIGlmIChpbnB1dGJhci50ZXh0YXJlYS52YWx1ZSAhPT0gJycgJiYgIV9ncm91cHMuaW5jbHVkZXMoaW5wdXRiYXIudGV4dGFyZWEudmFsdWUpKXtcbiAgICAgICAgICAgIGFkZEdyb3VwKHRpdGxlKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBhcHBlbmRcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRiYXIubm9kZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dBbGxCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbmV4cG9ydCB7U2lkZWJhcn0iLCJjb25zdCBTdG9yYWdlID0gKHR5cGUgPSAnbG9jYWxTdG9yYWdlJykgPT4ge1xuICAgIGxldCBfc3RvcmFnZTtcbiAgICAvLyBjaGVjayBpZiBzdG9yYWdlIGlzIGF2YWlsYWJsZSBmb3IgdXNlXG4gICAgKCgpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgICAgIGxldCB4ID0gJ19fc3RvcmFnZV90ZXN0X18nO1xuICAgICAgICAgICAgX3N0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgICAgIF9zdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcmFnZSB0ZXN0IGNsZWFyZWQnKVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIF9zdG9yYWdlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICAoX3N0b3JhZ2UgJiYgX3N0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBhZGQoa2V5LCB2YWx1ZSl7XG4gICAgICAgIGlmKF9zdG9yYWdlKXtcbiAgICAgICAgICAgIF9zdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmUoa2V5LCB2YWx1ZSl7XG4gICAgICAgIGlmKF9zdG9yYWdlKXtcbiAgICAgICAgICAgIF9zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICAgICAgaWYoX3N0b3JhZ2Upe1xuICAgICAgICAgICAgcmV0dXJuIF9zdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgaWYoX3N0b3JhZ2Upe1xuICAgICAgICAgICAgX3N0b3JhZ2UuY2xlYXIoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGQsIHJlbW92ZSwgY2xlYXIsIGdldH07XG59O1xuXG5leHBvcnQge1N0b3JhZ2V9O1xuIiwiaW1wb3J0ICcuL3Rhc2suY3NzJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4vZGVsZXRlLnN2Zyc7XG5pbXBvcnQgRHJhZ0ljb24gZnJvbSAnLi9kcmFnLWljb24uc3ZnJztcbmltcG9ydCB7IGNsZWFyTm9kZSB9IGZyb20gJy4uL3V0aWxpdHknO1xuXG5jb25zdCBUYXNrID0gKCgpPT57XG5cbiAgICBjb25zdCBFVkVOVFMgPSB7XG4gICAgICAgIGRlbGV0ZVRhc2s6ICdkZWxldGUnLFxuICAgICAgICB0YXNrU3RhdHVzQ2hhbmdlOiAndGFzay1zdGF0dXMtY2hhbmdlJyxcbiAgICB9XG5cbiAgICBjb25zdCBDU1MgPSB7XG4gICAgICAgIGRlbGV0ZUljb246ICd0YXNrLWljb24nLFxuICAgICAgICBncm91cExhYmVsOiAnZ3JvdXAtbGFiZWwnLFxuICAgICAgICBjaGVja2JveDogJ3Rhc2stY2hlY2tib3gnLFxuICAgICAgICB0YXNrTmFtZTogJ3Rhc2stbmFtZScsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0ZXh0LCBkb25lID0gZmFsc2Upe1xuICAgICAgICBsZXQgZ3JvdXAgPSBudWxsO1xuICAgICAgICByZXR1cm4geyB0ZXh0LCBkb25lLCBncm91cH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgRE9NIG5vZGVcbiAgICAgKi9cbiAgICBjb25zdCBjcmVhdGVOb2RlID0gKHB1YnN1YiA9IG51bGwsIHRhc2tPYmopID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgICAgICBjb25zdCBkcmFnSWNvbiA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGxldCBncm91cExhYmVsID0gbnVsbDtcbiAgICAgICAgaWYodGFza09iai5ncm91cCAhPT0gbnVsbCAmJiB0YXNrT2JqLmdyb3VwICE9PSAnJyl7XG4gICAgICAgICAgICBncm91cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZ3JvdXBMYWJlbC5jbGFzc0xpc3QuYWRkKENTUy5ncm91cExhYmVsKVxuICAgICAgICAgICAgZ3JvdXBMYWJlbC50ZXh0Q29udGVudCA9IHRhc2tPYmouZ3JvdXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgY2xhc3Nlc1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICBkcmFnSWNvbi5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKENTUy5kZWxldGVJY29uKTtcbiAgICAgICAgY2tib3guY2xhc3NMaXN0LmFkZChDU1MuY2hlY2tib3gpO1xuICAgICAgICBwVGV4dC5jbGFzc0xpc3QuYWRkKENTUy50YXNrTmFtZSk7XG4gICAgICAgIC8vIGFkZCBhdHRyaWJ1dGVzXG4gICAgICAgIGRyYWdJY29uLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICAgICAgY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIHBUZXh0LnRleHRDb250ZW50ID0gdGFza09iai50ZXh0O1xuICAgICAgICBkcmFnSWNvbi5zcmMgPSBEcmFnSWNvbjtcbiAgICAgICAgZGVsZXRlSWNvbi5zcmMgPSBEZWxldGVJY29uO1xuICAgICAgICBkcmFnSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRIYW5kbGVyKTtcbiAgICAgICAgZHJhZ0ljb24uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmRIYW5kbGVyKTtcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2tIYW5kbGVyKTtcbiAgICAgICAgY2tib3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBpbnB1dEhhbmRsZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tPYmouZG9uZSl7XG4gICAgICAgICAgICBja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgcFRleHQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVsZXRlVGFza0hhbmRsZXIoKXtcbiAgICAgICAgICAgIGlmIChwdWJzdWIpe1xuICAgICAgICAgICAgICAgIHB1YnN1Yi5lbWl0KFRhc2suRVZFTlRTLmRlbGV0ZVRhc2ssIHRhc2tPYmoudGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBpbnB1dEhhbmRsZXIoKXtcbiAgICAgICAgICAgIHRhc2tPYmouZG9uZSA9ICF0YXNrT2JqLmRvbmU7XG4gICAgICAgICAgICBwdWJzdWIuZW1pdChFVkVOVFMudGFza1N0YXR1c0NoYW5nZSwgdGFza09iaik7XG4gICAgICAgICAgICBpZiAodGFza09iai5kb25lKXtcbiAgICAgICAgICAgICAgICBwVGV4dC5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFwcGVuZFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ0ljb24pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2tib3gpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFRleHQpO1xuICAgICAgICBpZihncm91cExhYmVsKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncm91cExhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ1N0YXJ0SGFuZGxlcihlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcmFnIHN0YXJ0ZWQnKVxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgcFRleHQudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ0VuZEhhbmRsZXIoZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHJhZyBlbmRlZCcpXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7Y3JlYXRlTm9kZSwgY3JlYXRlVGFzaywgRVZFTlRTfTtcbn0pKCk7XG5cbmNvbnN0IFRhc2tDb250YWluZXIgPSAoZG9jLCBwdWJzdWIgPSBudWxsLCBzdG9yYWdlID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IFRBU0tTX1NUT1JBR0VfU0xPVCA9IDA7XG4gICAgY29uc3QgX2NvbnRhaW5lciA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBfY29udGFpbmVyOyAvLyBmb3IgZXhwb3NpbmdcbiAgICBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gICAgbGV0IF90YXNrcyA9IFtdO1xuXG4gICAgcmVuZGVyKCk7XG4gICAgXG4gICAgaWYocHVic3ViKXtcbiAgICAgICAgcHVic3ViLm9uKFRhc2suRVZFTlRTLnRhc2tTdGF0dXNDaGFuZ2UsIHVwZGF0ZVRhc2spXG4gICAgICAgIHB1YnN1Yi5vbihUYXNrLkVWRU5UUy5kZWxldGVUYXNrLCBkZWxldGVUYXNrKTtcbiAgICAgICAgcHVic3ViLm9uKCd0YXNrLWNoYW5nZScsIHJlbmRlcik7XG4gICAgICAgIHB1YnN1Yi5vbigndGFzay1tb3ZlZCcsIG1vdmVUYXNrKTtcbiAgICAgICAgcHVic3ViLm9uKCdncm91cC1jaGFuZ2UnLCBncm91cHMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ3JvdXBzKTtcbiAgICAgICAgfSlcbiAgICAgICAgcHVic3ViLm9uKCdzZWxlY3Rpb24tY2hhbmdlJywgKGdyb3VwTmFtZSkgPT4ge1xuICAgICAgICAgICAgcmVuZGVyKGdyb3VwTmFtZSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFza09iail7XG4gICAgICAgIGZvcihsZXQgdGFzayBvZiBfdGFza3Mpe1xuICAgICAgICAgICAgaWYodGFzay50ZXh0ID09PSB0YXNrT2JqLnRleHQpe1xuICAgICAgICAgICAgICAgIHRhc2suZG9uZSA9IHRhc2tPYmouZG9uZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbW92ZVRhc2soaW5mbyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICBjb25zdCBpID0gX3Rhc2tzLmZpbmRJbmRleCggZSA9PiBlLnRleHQgPT09IGluZm8udGFza05hbWUgKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgX3Rhc2tzW2ldLmdyb3VwID0gaW5mby5ncm91cDtcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0ZXh0KXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IF90YXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoX3Rhc2tzW2ldLnRleHQgPT09IHRleHQpe1xuICAgICAgICAgICAgICAgIF90YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlU3RvcmFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1Rhc2t9IHRhc2sgXG4gICAgICovXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrLmNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgIF90YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXIoZ3JvdXBOYW1lID0gbnVsbCl7XG4gICAgICAgIF9jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgXG4gICAgICAgIGlmKHN0b3JhZ2Upe1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IEpTT04ucGFyc2Uoc3RvcmFnZS5nZXQoMCkpO1xuICAgICAgICAgICAgaWYodGVtcCl7XG4gICAgICAgICAgICAgICAgX3Rhc2tzID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBkb24ndCByZW5kZXIgaWYgdGhlcmUgYXJlIG5vIHRhc2tzXG4gICAgICAgIGNsZWFyTm9kZShfY29udGFpbmVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gX3Rhc2tzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKXtcbiAgICAgICAgICAgIGlmIChncm91cE5hbWUgIT09IG51bGwgJiYgZ3JvdXBOYW1lICE9PSAnU2hvdyBBbGwnKXtcbiAgICAgICAgICAgICAgICBpZihfdGFza3NbaV0uZ3JvdXAgIT09IGdyb3VwTmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoVGFzay5jcmVhdGVOb2RlKHB1YnN1YiwgX3Rhc2tzW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoX2NvbnRhaW5lci5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICAgICAgX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCB0aXRsZSBvZiB0YXNrIFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNvbnN0IGNvbnRhaW5zID0gKHRleHQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBfdGFza3Mpe1xuICAgICAgICAgICAgaWYgKHRhc2sudGV4dCA9PT0gdGV4dCAmJiAhdGFzay5kb25lKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVTdG9yYWdlKCl7XG4gICAgICAgIGlmKHN0b3JhZ2Upe1xuICAgICAgICAgICAgc3RvcmFnZS5hZGQoVEFTS1NfU1RPUkFHRV9TTE9ULCBKU09OLnN0cmluZ2lmeShfdGFza3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge3JlbmRlciwgYWRkVGFzaywgY29udGFpbmVyLCBjb250YWluc31cbn1cbmV4cG9ydCB7VGFza0NvbnRhaW5lcn07IiwiZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhkb21FbGVtZW50LCBhdHRyaWJ1dGVzKXtcbiAgICBmb3IgKGxldCBhdHRyIGluIGF0dHJpYnV0ZXMpe1xuICAgICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTm9kZShub2RlKSB7XG4gICAgd2hpbGUobm9kZS5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQge3NldEF0dHJpYnV0ZXMsIGNsZWFyTm9kZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgUHViU3ViIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wdWJzdWJcIjtcbmltcG9ydCB7IFRhc2tDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Rhc2svdGFza1wiO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvc3RvcmFnZS9zdG9yYWdlXCI7XG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IElucHV0QmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9pbnB1dC1iYXIvaW5wdXQtYmFyXCI7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcblxuKCgpPT57ICAgIFxuICAgIGNvbnN0IHB1YnN1YiA9IFB1YlN1YigpO1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBpbnB1dEJhciA9IElucHV0QmFyQ29tcG9uZW50KCk7XG4gICAgaW5wdXRCYXIuc2V0UGxhY2Vob2xkZXJUZXh0KCdOZXcgVGFzaycpO1xuICAgIGlucHV0QmFyLmJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICBpbnB1dEJhci5tc2cudGV4dENvbnRlbnQgPSAnVGFzayBhbHJlYWR5IGV4aXN0cyEnXG4gICAgaW5wdXRCYXIuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYgKCF0YXNrc0NvbnRhaW5lci5jb250YWlucyhpbnB1dEJhci50ZXh0YXJlYS52YWx1ZSkpe1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYWRkVGFzayhpbnB1dEJhci50ZXh0YXJlYS52YWx1ZSk7ICAgXG4gICAgICAgICAgICBwdWJzdWIuZW1pdCgndGFzay1jaGFuZ2UnKTtcbiAgICAgICAgICAgIGlucHV0QmFyLnRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBpbnB1dEJhci5idG4udG9nZ2xlKCk7XG4gICAgICAgICAgICBpbnB1dEJhci5tc2cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0QmFyLm1zZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gaG9sZHMgc2lkZWJhciBhbmQgbWFpbiBjb250ZW50XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy8gaG9sZHMgbWFpbiBjb250ZW50XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gaGVhZGVyQ29tcG9uZW50KGRvY3VtZW50KTtcbiAgICBjb25zdCBzaWRlYmFyID0gU2lkZWJhcihwdWJzdWIsIHN0b3JhZ2UpO1xuICAgIFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLChlKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH0pXG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IFRhc2tDb250YWluZXIoZG9jdW1lbnQsIHB1YnN1Yiwgc3RvcmFnZSk7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dEJhci5ub2RlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyLmNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIFxuICAgIFxuICAgIFxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=