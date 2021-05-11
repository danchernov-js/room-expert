/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles.scss ***!
  \**************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".address-title__name, .details-span, .form__name {\n  font-size: 13px;\n  font-weight: normal;\n  line-height: 16px;\n  color: #ffffff;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.row-cargo, .row {\n  display: flex;\n  margin: 0px -8px 0px -8px;\n}\n\n.col-50, .col-100, .col {\n  margin: 0 8px 0 8px;\n}\n\n* {\n  font-family: Helvetica;\n}\n\nbody {\n  background: #343539;\n}\n\n.calc {\n  margin: 40px 170px 0 170px;\n}\n.calc-title {\n  font-size: 56px;\n  color: #ffffff;\n}\n\n.row-cargo {\n  flex-wrap: wrap;\n}\n\n.col {\n  flex: 1;\n}\n.col-100 {\n  width: 100%;\n}\n.col-50 {\n  width: 50%;\n  flex: 1;\n}\n\n.step:not(:first-child) {\n  margin-top: 40px;\n}\n.step-name {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #ffffff;\n}\n.step-name__num {\n  background: #ef483e;\n  border-radius: 50%;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  min-width: 1.5em;\n  min-height: 1.5em;\n}\n.step-name__text {\n  margin: 0;\n  padding-left: 8px;\n  font-size: 24px;\n  line-height: 30px;\n}\n\n.form__input {\n  background: #ffffff;\n  border: 0;\n  padding: 13px 0 13px 14px;\n  width: 100%;\n  height: 44px;\n  font-size: 24px;\n}\n.form__select {\n  background: #ffffff;\n  border: 0;\n  padding: 13px 0 13px 14px;\n  width: 100%;\n  height: 44px;\n  font-size: 15px;\n}\n\ndetails {\n  margin-top: 30px;\n}\ndetails summary::marker {\n  display: none;\n}\ndetails > summary {\n  list-style: none;\n}\ndetails > summary:before {\n  content: \"\";\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  flex-shrink: 0;\n  flex-grow: 0;\n  border: 2px solid #ffffff;\n  margin-right: 8px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\ndetails[open] summary:before {\n  border-color: #ef483e;\n  background-color: #ef483e;\n  width: calc(1.5em + 4px);\n  height: calc(1.5em + 4px);\n  border: none;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\n}\n\n.details-span {\n  position: relative;\n  bottom: 8px;\n}\n\n.address-title {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.address-time {\n  width: 100%;\n  padding: 10px;\n  background: #4b4b4f;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n+ .address-time {\n  margin-top: 4px;\n}\n.address-time__checkbox:checked, .address-time__checkbox:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n.address-time__checkbox:checked + label, .address-time__checkbox:not(:checked) + label {\n  position: relative;\n  padding-left: 20px;\n  cursor: pointer;\n  background: #4b4b4f;\n}\n.address-time__checkbox:checked + label:before, .address-time__checkbox:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 0.5em;\n  height: 0.5em;\n  border: 4px solid #ffffff;\n  background-color: #343539;\n  border-radius: 100%;\n}\n.address-time__checkbox:checked + label:after, .address-time__checkbox:not(:checked) + label:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 0.5em;\n  height: 0.5em;\n  border: 4px solid #ef483e;\n  background-color: #343539;\n  border-radius: 100%;\n}\n.address-time__checkbox:not(:checked) + label:after {\n  opacity: 0;\n}\n.address-time__checkbox:checked + label:after {\n  opacity: 1;\n}\n.address-time__checkbox:checked + label:before {\n  opacity: 0;\n}\n.address-time__input {\n  color: #cfcfcf;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 19px;\n  border: none;\n  background: #4b4b4f;\n  outline: none;\n}\n.address-time__button {\n  padding: 4px 14px 4px 13px;\n  height: 24px;\n  border: none;\n  border-radius: 2px;\n  background-color: #535353;\n  color: #969696;\n  letter-spacing: 0.05em;\n  font-size: 13px;\n  line-height: 16px;\n  font-weight: normal;\n}\n.address-time__button:hover {\n  background-color: #717174;\n  color: #ffffff;\n}\n.address-time__button:active {\n  background-color: #343539;\n  color: #ffffff;\n}\n\n.comment {\n  background: #ffffff;\n  font-size: 15px;\n  border: 0;\n  padding: 13px 0 49px 14px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 80px;\n  resize: none;\n}\n\n.hint {\n  width: 50%;\n  height: 102px;\n  background-color: #4b4b4f;\n}\n.hint > p {\n  color: #ffffff;\n  background-color: #4b4b4f;\n  padding: 24px;\n  margin: 0;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 18px;\n}\n\nfooter {\n  height: 100px;\n}\n\n@media (max-width: 1500px) {\n  .col-mob-hide {\n    display: none;\n  }\n\n  .shift {\n    flex-direction: column;\n  }\n\n  .row-cargo {\n    flex-wrap: nowrap;\n  }\n\n  .col {\n    width: 80%;\n  }\n  .col-100 {\n    flex: 1;\n  }\n\n  .hint {\n    width: 100%;\n    background-color: #4b4b4f;\n    margin-top: 40px;\n  }\n}\n@media (max-width: 1000px) {\n  .calc {\n    margin: 40px 30px 0 16px;\n  }\n  .calc-title {\n    font-size: 32px;\n  }\n\n  .col {\n    width: 100%;\n  }\n}\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\n  .calc {\n    margin: 40px 30px 0 16px;\n  }\n}", "",{"version":3,"sources":["webpack://./styles.scss"],"names":[],"mappings":"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","sourcesContent":["$color1: #343539;\r\n$color2: #ffffff;\r\n$color3: #ef483e;\r\n$color4: #4b4b4f;\r\n$color5: #cfcfcf;\r\n$color6: #535353;\r\n$color7: #969696;\r\n$color8: #717174;\r\n\r\n%for-form-name {\r\n  font-size: 13px;\r\n  font-weight: normal;\r\n  line-height: 16px;\r\n  color: #ffffff;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n%for-rows {\r\n  display: flex;\r\n  margin: 0px -8px 0px -8px;\r\n}\r\n\r\n%for-cols {\r\n  margin: 0 8px 0 8px;\r\n}\r\n\r\n* {\r\n  font-family: Helvetica;\r\n}\r\n\r\nbody {\r\n  background: $color1;\r\n}\r\n\r\n.calc {\r\n  margin: 40px 170px 0 170px;\r\n\r\n  &-title {\r\n    font-size: 56px;\r\n    color: $color2;\r\n  }\r\n}\r\n\r\n.row {\r\n  @extend %for-rows;\r\n\r\n  &-cargo {\r\n    @extend %for-rows;\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n\r\n.col {\r\n  @extend %for-cols;\r\n  flex: 1;\r\n  &-100 {\r\n    @extend %for-cols;\r\n    width: 100%;\r\n  }\r\n\r\n  &-50 {\r\n    @extend %for-cols;\r\n    width: 50%;\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n.step {\r\n  &:not(:first-child) {\r\n    margin-top: 40px;\r\n  }\r\n\r\n  &-name {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    color: $color2;\r\n\r\n    &__num {\r\n      background: $color3;\r\n      border-radius: 50%;\r\n      font-weight: bold;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      font-size: 16px;\r\n      min-width: 1.5em;\r\n      min-height: 1.5em;\r\n    }\r\n\r\n    &__text {\r\n      margin: 0;\r\n      padding-left: 8px;\r\n      font-size: 24px;\r\n      line-height: 30px;\r\n    }\r\n  }\r\n}\r\n\r\n.form {\r\n  &__name {\r\n    @extend %for-form-name;\r\n  }\r\n\r\n  &__input {\r\n    background: $color2;\r\n    border: 0;\r\n    padding: 13px 0 13px 14px;\r\n    width: 100%;\r\n    height: 44px;\r\n    font-size: 24px;\r\n  }\r\n\r\n  &__select {\r\n    background: $color2;\r\n    border: 0;\r\n    padding: 13px 0 13px 14px;\r\n    width: 100%;\r\n    height: 44px;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\ndetails {\r\n  margin-top: 30px;\r\n  //убираем стандартные маркеры хром и фаерфокс\r\n  summary::marker {\r\n    display: none;\r\n  }\r\n\r\n  > summary {\r\n    list-style: none;\r\n\r\n    &:before {\r\n      content: \"\";\r\n      display: inline-block;\r\n      width: 1.5em;\r\n      height: 1.5em;\r\n      flex-shrink: 0;\r\n      flex-grow: 0;\r\n      border: 2px solid #ffffff;\r\n      margin-right: 8px;\r\n      background-repeat: no-repeat;\r\n      background-position: center center;\r\n      background-size: 50% 50%;\r\n    }\r\n  }\r\n}\r\n\r\n// Добавляем собственный маркер для открытого состояния\r\ndetails[open] summary:before {\r\n  border-color: #ef483e;\r\n  background-color: #ef483e;\r\n  width: calc(1.5em + 4px);\r\n  height: calc(1.5em + 4px);\r\n  border: none;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\r\n}\r\n\r\n.details-span {\r\n  @extend %for-form-name;\r\n  position: relative;\r\n  bottom: 8px;\r\n}\r\n\r\n.address {\r\n  &-title {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    &__name {\r\n      @extend %for-form-name;\r\n    }\r\n  }\r\n\r\n  &-time {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background: #4b4b4f;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    white-space: nowrap;\r\n\r\n    + & {\r\n      margin-top: 4px;\r\n    }\r\n\r\n    &__checkbox {\r\n      &:checked,\r\n      &:not(:checked) {\r\n        position: absolute;\r\n        left: -9999px;\r\n\r\n        + label {\r\n          position: relative;\r\n          padding-left: 20px;\r\n          cursor: pointer;\r\n          background: $color4;\r\n\r\n          &:before {\r\n            content: \"\";\r\n            position: absolute;\r\n            left: 0px;\r\n            top: 0px;\r\n            width: 0.5em;\r\n            height: 0.5em;\r\n            border: 4px solid $color2;\r\n            background-color: $color1;\r\n            border-radius: 100%;\r\n          }\r\n\r\n          &:after {\r\n            content: \"\";\r\n            position: absolute;\r\n            left: 0px;\r\n            top: 0px;\r\n            width: 0.5em;\r\n            height: 0.5em;\r\n            border: 4px solid $color3;\r\n            background-color: $color1;\r\n            border-radius: 100%;\r\n          }\r\n        }\r\n      }\r\n\r\n      &:not(:checked) + label:after {\r\n        opacity: 0;\r\n      }\r\n\r\n      &:checked {\r\n        + label:after {\r\n          opacity: 1;\r\n        }\r\n\r\n        + label:before {\r\n          opacity: 0;\r\n        }\r\n      }\r\n    }\r\n\r\n    &__input {\r\n      color: $color5;\r\n      font-weight: normal;\r\n      font-size: 15px;\r\n      line-height: 19px;\r\n      border: none;\r\n      background: $color4;\r\n      outline: none;\r\n    }\r\n    &__button {\r\n      padding: 4px 14px 4px 13px;\r\n      height: 24px;\r\n      border: none;\r\n      border-radius: 2px;\r\n      background-color: $color6;\r\n      color: $color7;\r\n      letter-spacing: 0.05em;\r\n      font-size: 13px;\r\n      line-height: 16px;\r\n      font-weight: normal;\r\n      &:hover {\r\n        background-color: $color8;\r\n        color: $color2;\r\n      }\r\n      &:active {\r\n        background-color: $color1;\r\n        color: $color2;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.comment {\r\n  background: $color2;\r\n  font-size: 15px;\r\n  border: 0;\r\n  padding: 13px 0 49px 14px;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 80px;\r\n  resize: none;\r\n}\r\n.hint {\r\n  width: 50%;\r\n  height: 102px;\r\n  background-color: $color4;\r\n  > p {\r\n    color: $color2;\r\n    background-color: $color4;\r\n    padding: 24px;\r\n    margin: 0;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n  }\r\n}\r\n\r\nfooter {\r\n  height: 100px;\r\n}\r\n\r\n@media (max-width: 1500px) {\r\n  .col-mob-hide {\r\n    display: none;\r\n  }\r\n\r\n  .shift {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .row-cargo {\r\n    flex-wrap: nowrap;\r\n  }\r\n\r\n  .col {\r\n    width: 80%;\r\n\r\n    &-100 {\r\n      flex: 1;\r\n    }\r\n  }\r\n\r\n  .hint {\r\n    width: 100%;\r\n    background-color: #4b4b4f;\r\n    margin-top: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .calc {\r\n    margin: 40px 30px 0 16px;\r\n\r\n    &-title {\r\n      font-size: 32px;\r\n    }\r\n  }\r\n\r\n  .col {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\r\n  .calc {\r\n    margin: 40px 30px 0 16px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3QtZG90Ly4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZG90LWRvdC8uL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2RvdC1kb3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2RvdC1kb3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9kb3QtZG90Ly4vc3R5bGVzLnNjc3M/YmUyYiIsIndlYnBhY2s6Ly9kb3QtZG90Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2RvdC1kb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG90LWRvdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kb3QtZG90L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3QtZG90L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG90LWRvdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RvdC1kb3Qvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLENBQXFIO0FBQzdCO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0RkFBNEYsb0JBQW9CLHdCQUF3QixzQkFBc0IsbUJBQW1CLHdCQUF3Qiw0QkFBNEIscUJBQXFCLEdBQUcsc0JBQXNCLGtCQUFrQiw4QkFBOEIsR0FB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QUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxX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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXhfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hZGRyZXNzLXRpdGxlX19uYW1lLCAuZGV0YWlscy1zcGFuLCAuZm9ybV9fbmFtZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5yb3ctY2FyZ28sIC5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMHB4IC04cHggMHB4IC04cHg7XFxufVxcblxcbi5jb2wtNTAsIC5jb2wtMTAwLCAuY29sIHtcXG4gIG1hcmdpbjogMCA4cHggMCA4cHg7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjMzQzNTM5O1xcbn1cXG5cXG4uY2FsYyB7XFxuICBtYXJnaW46IDQwcHggMTcwcHggMCAxNzBweDtcXG59XFxuLmNhbGMtdGl0bGUge1xcbiAgZm9udC1zaXplOiA1NnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5yb3ctY2FyZ28ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY29sIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5jb2wtMTAwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29sLTUwIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3RlcDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4uc3RlcC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uc3RlcC1uYW1lX19udW0ge1xcbiAgYmFja2dyb3VuZDogI2VmNDgzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBtaW4taGVpZ2h0OiAxLjVlbTtcXG59XFxuLnN0ZXAtbmFtZV9fdGV4dCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZm9ybV9faW5wdXQge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDEzcHggMCAxM3B4IDE0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDRweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmZvcm1fX3NlbGVjdCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMTNweCAwIDEzcHggMTRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbmRldGFpbHMgc3VtbWFyeTo6bWFya2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmRldGFpbHMgPiBzdW1tYXJ5IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmRldGFpbHMgPiBzdW1tYXJ5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBmbGV4LXNocmluazogMDtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MCUgNTAlO1xcbn1cXG5cXG5kZXRhaWxzW29wZW5dIHN1bW1hcnk6YmVmb3JlIHtcXG4gIGJvcmRlci1jb2xvcjogI2VmNDgzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ4M2U7XFxuICB3aWR0aDogY2FsYygxLjVlbSArIDRweCk7XFxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyA0cHgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcXFwiKTtcXG59XFxuXFxuLmRldGFpbHMtc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDhweDtcXG59XFxuXFxuLmFkZHJlc3MtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYWRkcmVzcy10aW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICM0YjRiNGY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4rIC5hZGRyZXNzLXRpbWUge1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4uYWRkcmVzcy10aW1lX19jaGVja2JveDpjaGVja2VkLCAuYWRkcmVzcy10aW1lX19jaGVja2JveDpub3QoOmNoZWNrZWQpIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5cHg7XFxufVxcbi5hZGRyZXNzLXRpbWVfX2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbCwgLmFkZHJlc3MtdGltZV9fY2hlY2tib3g6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM0YjRiNGY7XFxufVxcbi5hZGRyZXNzLXRpbWVfX2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIC5hZGRyZXNzLXRpbWVfX2NoZWNrYm94Om5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIHdpZHRoOiAwLjVlbTtcXG4gIGhlaWdodDogMC41ZW07XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzUzOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbi5hZGRyZXNzLXRpbWVfX2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDphZnRlciwgLmFkZHJlc3MtdGltZV9fY2hlY2tib3g6bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2VmNDgzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM1Mzk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4uYWRkcmVzcy10aW1lX19jaGVja2JveDpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmFkZHJlc3MtdGltZV9fY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5hZGRyZXNzLXRpbWVfX2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmFkZHJlc3MtdGltZV9faW5wdXQge1xcbiAgY29sb3I6ICNjZmNmY2Y7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjNGI0YjRmO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmFkZHJlc3MtdGltZV9fYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDRweCAxNHB4IDRweCAxM3B4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNTM1MztcXG4gIGNvbG9yOiAjOTY5Njk2O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLmFkZHJlc3MtdGltZV9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuLmFkZHJlc3MtdGltZV9fYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNTM5O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb21tZW50IHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxM3B4IDAgNDlweCAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uaGludCB7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiAxMDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGY7XFxufVxcbi5oaW50ID4gcCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjRiNGY7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xcbiAgLmNvbC1tb2ItaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuc2hpZnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnJvdy1jYXJnbyB7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgfVxcblxcbiAgLmNvbCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuICAuY29sLTEwMCB7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICAuaGludCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRmO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuY2FsYyB7XFxuICAgIG1hcmdpbjogNDBweCAzMHB4IDAgMTZweDtcXG4gIH1cXG4gIC5jYWxjLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgfVxcblxcbiAgLmNvbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkge1xcbiAgLmNhbGMge1xcbiAgICBtYXJnaW46IDQwcHggMzBweCAwIDE2cHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxzQkFBQTtBQVJGOztBQVdBO0VBQ0UsbUJBakNPO0FBeUJUOztBQVdBO0VBQ0UsMEJBQUE7QUFSRjtBQVVFO0VBQ0UsZUFBQTtFQUNBLGNBeENLO0FBZ0NUOztBQWVFO0VBRUUsZUFBQTtBQWJKOztBQWlCQTtFQUVFLE9BQUE7QUFmRjtBQWdCRTtFQUVFLFdBQUE7QUFmSjtBQWtCRTtFQUVFLFVBQUE7RUFDQSxPQUFBO0FBakJKOztBQXNCRTtFQUNFLGdCQUFBO0FBbkJKO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTdFSztBQXlEVDtBQXNCSTtFQUNFLG1CQS9FRztFQWdGSCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JB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O0lBQ0Usd0JBQUE7RUF6REY7RUEyREU7SUFDRSxlQUFBO0VBekRKOztFQTZEQTtJQUNFLFdBQUE7RUExREY7QUFDRjtBQTZEQTtFQUNFO0lBQ0Usd0JBQUE7RUEzREY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3IxOiAjMzQzNTM5O1xcclxcbiRjb2xvcjI6ICNmZmZmZmY7XFxyXFxuJGNvbG9yMzogI2VmNDgzZTtcXHJcXG4kY29sb3I0OiAjNGI0YjRmO1xcclxcbiRjb2xvcjU6ICNjZmNmY2Y7XFxyXFxuJGNvbG9yNjogIzUzNTM1MztcXHJcXG4kY29sb3I3OiAjOTY5Njk2O1xcclxcbiRjb2xvcjg6ICM3MTcxNzQ7XFxyXFxuXFxyXFxuJWZvci1mb3JtLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4lZm9yLXJvd3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMHB4IC04cHggMHB4IC04cHg7XFxyXFxufVxcclxcblxcclxcbiVmb3ItY29scyB7XFxyXFxuICBtYXJnaW46IDAgOHB4IDAgOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogJGNvbG9yMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGMge1xcclxcbiAgbWFyZ2luOiA0MHB4IDE3MHB4IDAgMTcwcHg7XFxyXFxuXFxyXFxuICAmLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NnB4O1xcclxcbiAgICBjb2xvcjogJGNvbG9yMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJvdyB7XFxyXFxuICBAZXh0ZW5kICVmb3Itcm93cztcXHJcXG5cXHJcXG4gICYtY2FyZ28ge1xcclxcbiAgICBAZXh0ZW5kICVmb3Itcm93cztcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29sIHtcXHJcXG4gIEBleHRlbmQgJWZvci1jb2xzO1xcclxcbiAgZmxleDogMTtcXHJcXG4gICYtMTAwIHtcXHJcXG4gICAgQGV4dGVuZCAlZm9yLWNvbHM7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi01MCB7XFxyXFxuICAgIEBleHRlbmQgJWZvci1jb2xzO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3RlcCB7XFxyXFxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAkY29sb3IyO1xcclxcblxcclxcbiAgICAmX19udW0ge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjM7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgbWluLXdpZHRoOiAxLjVlbTtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiAxLjVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICZfX25hbWUge1xcclxcbiAgICBAZXh0ZW5kICVmb3ItZm9ybS1uYW1lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDEzcHggMCAxM3B4IDE0cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3NlbGVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjI7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMTNweCAwIDEzcHggMTRweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAvL9GD0LHQuNGA0LDQtdC8INGB0YLQsNC90LTQsNGA0YLQvdGL0LUg0LzQsNGA0LrQtdGA0Ysg0YXRgNC+0Lwg0Lgg0YTQsNC10YDRhNC+0LrRgVxcclxcbiAgc3VtbWFyeTo6bWFya2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gID4gc3VtbWFyeSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICAgIGhlaWdodDogMS41ZW07XFxyXFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgZmxleC1ncm93OiAwO1xcclxcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YHQvtCx0YHRgtCy0LXQvdC90YvQuSDQvNCw0YDQutC10YAg0LTQu9GPINC+0YLQutGA0YvRgtC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9cXHJcXG5kZXRhaWxzW29wZW5dIHN1bW1hcnk6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2VmNDgzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjQ4M2U7XFxyXFxuICB3aWR0aDogY2FsYygxLjVlbSArIDRweCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyA0cHgpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtc3BhbiB7XFxyXFxuICBAZXh0ZW5kICVmb3ItZm9ybS1uYW1lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICYtdGl0bGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAmX19uYW1lIHtcXHJcXG4gICAgICBAZXh0ZW5kICVmb3ItZm9ybS1uYW1lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLXRpbWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzRiNGI0ZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcblxcclxcbiAgICArICYge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19jaGVja2JveCB7XFxyXFxuICAgICAgJjpjaGVja2VkLFxcclxcbiAgICAgICY6bm90KDpjaGVja2VkKSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAtOTk5OXB4O1xcclxcblxcclxcbiAgICAgICAgKyBsYWJlbCB7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjQ7XFxyXFxuXFxyXFxuICAgICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAwLjVlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDAuNWVtO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRjb2xvcjI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XFxyXFxuICAgICAgICAgICAgdG9wOiAwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDAuNWVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMC41ZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJGNvbG9yMztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjpjaGVja2VkIHtcXHJcXG4gICAgICAgICsgbGFiZWw6YWZ0ZXIge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgKyBsYWJlbDpiZWZvcmUge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvcjU7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjQ7XFxyXFxuICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgIHBhZGRpbmc6IDRweCAxNHB4IDRweCAxM3B4O1xcclxcbiAgICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjY7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvcjc7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjg7XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yMjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3IyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAkY29sb3IyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMTNweCAwIDQ5cHggMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuLmhpbnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I0O1xcclxcbiAgPiBwIHtcXHJcXG4gICAgY29sb3I6ICRjb2xvcjI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xcclxcbiAgLmNvbC1tb2ItaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2hpZnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJvdy1jYXJnbyB7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuXFxyXFxuICAgICYtMTAwIHtcXHJcXG4gICAgICBmbGV4OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGludCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjRmO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAuY2FsYyB7XFxyXFxuICAgIG1hcmdpbjogNDBweCAzMHB4IDAgMTZweDtcXHJcXG5cXHJcXG4gICAgJi10aXRsZSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29sIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSB7XFxyXFxuICAuY2FsYyB7XFxyXFxuICAgIG1hcmdpbjogNDBweCAzMHB4IDAgMTZweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=