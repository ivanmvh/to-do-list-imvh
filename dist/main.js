"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_imvh"] = self["webpackChunkto_do_list_imvh"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n::after,\\r\\n::before {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nul,\\r\\nol {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  color: hsl(209, 61%, 16%);\\r\\n  line-height: 1.5;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#main-sec {\\r\\n  background-color: violet;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\r\\n  padding: 1.5rem;\\r\\n  margin: 10px 12px 0 12px;\\r\\n  width: 100%;\\r\\n  max-width: 60%;\\r\\n  max-height: 80%;\\r\\n}\\r\\n\\r\\n#main-sec h1 {\\r\\n  font-size: 1.5rem;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.todo-header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.add-new-task {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  height: 6vh;\\r\\n}\\r\\n\\r\\n.add-new-task input {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 1.2rem;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.add-new-task button {\\r\\n  background-color: var(--light-background-color);\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#todos-list {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  padding-right: 0.5rem;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#todos-list li {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 6vh;\\r\\n  column-gap: 20px;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  width: 100%;\\r\\n  padding: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.todo,\\r\\n.add-new-task {\\r\\n  border-bottom: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n#checked {\\r\\n  width: 1.3rem;\\r\\n  height: 1.3rem;\\r\\n  border-radius: 50%;\\r\\n  margin-right: 1rem;\\r\\n  border: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n#listItem {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.move {\\r\\n  display: block;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.clear-completed {\\r\\n  background-color: var(--light-background-color);\\r\\n  padding: 0.8rem;\\r\\n  border: none;\\r\\n  color: rgb(71, 66, 66);\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.clear-completed:hover {\\r\\n  cursor: pointer;\\r\\n  text-decoration: underline;\\r\\n  color: rgb(106, 10, 196);\\r\\n}\\r\\n\\r\\n.selection {\\r\\n  background-color: #ccc;\\r\\n}\\r\\n\\r\\n#todos::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\ninput:checked + input {\\r\\n  text-decoration: line-through;\\r\\n  color: #ccc;\\r\\n  font-style: italic;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-imvh/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTodo.js */ \"./src/modules/addTodo.js\");\n/* harmony import */ var _modules_list_Todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list_Todos.js */ \"./src/modules/list_Todos.js\");\n/* harmony import */ var _modules_removeTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeTodo.js */ \"./src/modules/removeTodo.js\");\n\n\n\n\n\n(0,_modules_list_Todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_removeTodo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/index.js?");

/***/ }),

/***/ "./src/modules/Todo_class.js":
/*!***********************************!*\
  !*** ./src/modules/Todo_class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n  constructor(task) {\r\n    this.description = task.description;\r\n    this.completed = false;\r\n    this.index = task.index;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/Todo_class.js?");

/***/ }),

/***/ "./src/modules/Todos_Data.js":
/*!***********************************!*\
  !*** ./src/modules/Todos_Data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodosData),\n/* harmony export */   \"todosData\": () => (/* binding */ todosData)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.js */ \"./src/modules/local-storage.js\");\n/* harmony import */ var _Todo_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo_class.js */ \"./src/modules/Todo_class.js\");\n\r\n\r\n\r\nclass TodosData {\r\n  constructor(todos) {\r\n    this.todos = todos;\r\n  }\r\n\r\n  addTodo(description) {\r\n    const index = this.todos.length + 1;\r\n    const todo = new _Todo_class_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ description, index });\r\n    this.todos.push(todo);\r\n    this.setToLocalStorage();\r\n  }\r\n\r\n  removeTodo(index) {\r\n    this.todos = this.todos.filter((todo, todoIndex) => todoIndex !== index);\r\n    this.setToLocalStorage();\r\n    this.resetIndex();\r\n  }\r\n\r\n  updateDescription(index, description) {\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      if (this.todos[i].index === index) {\r\n        this.todos[i].description = description;\r\n        this.setToLocalStorage();\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  setToLocalStorage() {\r\n    localStorage.setItem('todos', JSON.stringify(this.todos));\r\n  }\r\n\r\n  getTodos() {\r\n    return this.todos.sort((a, b) => a.index - b.index);\r\n  }\r\n\r\n  resetIndex() {\r\n    this.todos.forEach((todo, index) => {\r\n      todo.index = index + 1;\r\n    });\r\n    this.setToLocalStorage();\r\n  }\r\n\r\n  clearCompleted() {\r\n    this.todos = this.todos.filter((todo) => todo.completed !== true);\r\n    this.setToLocalStorage();\r\n    this.resetIndex();\r\n  }\r\n\r\n  markAsCompleted(index) {\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      if (this.todos[i].index === index) {\r\n        this.todos[i].completed = !this.todos[i].completed;\r\n        this.setToLocalStorage();\r\n        break;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nconst todosData = new TodosData((0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)('todos'));\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/Todos_Data.js?");

/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_Todos.js */ \"./src/modules/list_Todos.js\");\n/* harmony import */ var _Todos_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos_Data.js */ \"./src/modules/Todos_Data.js\");\n\r\n\r\n\r\nconst addTodo = () => {\r\n  const formContainer = document.querySelector('#add-new-todo-form');\r\n  formContainer.innerHTML = `\r\n    <form class=\"add-new-task\" action=\"\">\r\n      <input type=\"text\" id=\"todo\" name=\"description\" placeholder=\"Add to your list...\" />\r\n      <button id=\"add-todo\" type=\"button\">\r\n        <i class=\"fa-solid fa-arrow-left\"></i>\r\n      </button>\r\n  </form>\r\n  `;\r\n\r\n  const form = formContainer.querySelector('form');\r\n  form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    const description = form.description.value;\r\n    _Todos_Data_js__WEBPACK_IMPORTED_MODULE_1__.todosData.addTodo(description);\r\n    form.description.value = '';\r\n    (0,_list_Todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/addTodo.js?");

/***/ }),

/***/ "./src/modules/list_Todos.js":
/*!***********************************!*\
  !*** ./src/modules/list_Todos.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todos_Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todos_Data.js */ \"./src/modules/Todos_Data.js\");\n\r\n\r\nconst listTodos = () => {\r\n  const todosListElement = document.querySelector('#todos-list');\r\n  const todos = _Todos_Data_js__WEBPACK_IMPORTED_MODULE_0__.todosData.getTodos();\r\n  todosListElement.innerHTML = '';\r\n  todos.forEach((todo) => {\r\n    const todoElement = document.createElement('li');\r\n    todoElement.innerHTML = `\r\n      <li class=\"todo\">\r\n        <input type=\"checkbox\" id=\"checked\" class='checkbox' ${todo.completed ? 'checked' : ''}\r\n          >\r\n        <input type=\"text\" id=\"listItem\" class='description' value= \"${todo.index} : ${todo.description} : ${todo.completed} \">\r\n        <i class=\"fa-solid fa-ellipsis-vertical move\"></i>\r\n        <i class=\"fa-solid fa-trash-can delete\"></i>\r\n      </li>`;\r\n\r\n    todoElement.innerHTML = `\r\n      <li class=\"todo\">\r\n        <input type=\"checkbox\" id=\"checked\" class='checkbox' ${todo.completed ? 'checked' : ''}\r\n          >\r\n        <input type=\"text\" id=\"listItem\" class='description' value= \"${todo.description} \">\r\n        <i class=\"fa-solid fa-ellipsis-vertical move\"></i>\r\n        <i class=\"fa-solid fa-trash-can delete\"></i>\r\n    </li>`;\r\n\r\n    todosListElement.appendChild(todoElement);\r\n  });\r\n  const checkboxs = todosListElement.querySelectorAll('.checkbox');\r\n  checkboxs.forEach((checkbox, index) => {\r\n    checkbox.addEventListener('change', () => {\r\n      _Todos_Data_js__WEBPACK_IMPORTED_MODULE_0__.todosData.markAsCompleted(index + 1);\r\n    });\r\n  });\r\n  const descriptions = todosListElement.querySelectorAll('.description');\r\n  descriptions.forEach((description, index) => {\r\n    description.addEventListener('change', () => {\r\n      _Todos_Data_js__WEBPACK_IMPORTED_MODULE_0__.todosData.updateDescription(index + 1, description.value);\r\n    });\r\n  });\r\n\r\n  const trashes = todosListElement.querySelectorAll('.delete');\r\n  trashes.forEach((trash, index) => {\r\n    trash.addEventListener('click', () => {\r\n      _Todos_Data_js__WEBPACK_IMPORTED_MODULE_0__.todosData.removeTodo(index);\r\n      listTodos();\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listTodos);\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/list_Todos.js?");

/***/ }),

/***/ "./src/modules/local-storage.js":
/*!**************************************!*\
  !*** ./src/modules/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nconst setLocalStorage = (key, value) => {\r\n  localStorage.setItem(key, JSON.stringify(value));\r\n};\r\n\r\nconst getLocalStorage = (key) => {\r\n  const dataAsStr = localStorage.getItem(key);\r\n  if (dataAsStr) {\r\n    const dataAsObj = JSON.parse(dataAsStr);\r\n    return dataAsObj;\r\n  }\r\n  return [];\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/local-storage.js?");

/***/ }),

/***/ "./src/modules/removeTodo.js":
/*!***********************************!*\
  !*** ./src/modules/removeTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_Todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list_Todos.js */ \"./src/modules/list_Todos.js\");\n/* harmony import */ var _Todos_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todos_Data.js */ \"./src/modules/Todos_Data.js\");\n\r\n\r\n\r\nconst removeTodo = () => {\r\n  const clearButton = document.querySelector('.clear-completed');\r\n\r\n  clearButton.addEventListener('click', () => {\r\n    _Todos_Data_js__WEBPACK_IMPORTED_MODULE_1__.todosData.clearCompleted();\r\n    (0,_list_Todos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);\n\n//# sourceURL=webpack://to-do-list-imvh/./src/modules/removeTodo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);