/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pencil-outline.svg */ "./src/images/pencil-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/plus.svg */ "./src/images/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/arrow-u-left-top.svg */ "./src/images/arrow-u-left-top.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;

    --trash-can-icon: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    --pencil-icon: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    --plus-icon: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    --close-icon: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    --back-icon: url(${___CSS_LOADER_URL_REPLACEMENT_4___});

    --secondary-text-color: rgb(90, 90, 90);
    --textbox-accent-color: rgb(245, 245, 245);
    --background-accent-color-light: rgb(250, 250, 250);

    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
    padding: 0;
}

header {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    
    height: 65px;
    box-shadow: var(--standard-box-shadow);
    padding: 0px 15px;

    position: sticky;
    top: 0;
    z-index: 1;
}

#page-title {
    flex: 1;

    font-size: 1.6rem;
    font-weight: 700;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-list,
.todo-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: max(500px, 70%);
    padding: 20px;
}

.project {
    cursor: pointer;
}

.project:hover {
    border-color: green;
}

.project,
.todo {
    display: flex;
    align-items: center;
    gap: 20px;

    height: 125px;
    border: 5px solid;
    border-radius: 10px;
    padding: 25px;
    box-sizing: border-box;
}

.todo.low-priority {
    border-color: green;
}

.todo.medium-priority {
    border-color: gold;
}

.todo.high-priority {
    border-color: red;
}

.project .button-list,
.todo .button-list {
    display: flex;
    gap: 20px;
}

.project .button-list {
    flex: 1;

    justify-content: flex-end;
}

.todo .todo-due-date {
    flex: 1;

    display: flex;
    justify-content: flex-end;

    font-size: 1.2rem;
    color: var(--secondary-text-color);
    margin-right: 30px;
    white-space: nowrap;
}

.project .project-title,
.todo .todo-title {
    font-size: 2rem;
    font-weight: 700;
}

.todo .todo-description {
    font-size: 1.2rem;
    color: var(--secondary-text-color);
}

.todo .todo-text-content {
    min-width: 20%;
}

.project .project-title,
.todo .todo-title,
.todo .todo-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: 0px;
}

button.icon {
    border: none;
    background-color: black;
    height: 25px;
    width: 25px;
    mask-repeat: no-repeat;
    mask-position: center;
}

.icon.edit {
    mask-image: var(--pencil-icon);
}

.icon.edit:hover,
.icon.back:hover {
    background-color: goldenrod;
}

.icon.delete {
    mask-image: var(--trash-can-icon);
}

.icon.delete:hover,
.icon.close:hover {
    background-color: red;
}

.icon.add {
    mask-image: var(--plus-icon);
}

.icon.add:hover {
    background-color: green;
}

.icon.close {
    mask-image: var(--close-icon);
}

.icon.back {
    mask-image: var(--back-icon);
}

button {
    cursor: pointer;
}

dialog {
    border-width: 1px;
    box-shadow: var(--standard-box-shadow);
    background-color: var(--background-accent-color-light);
    border-radius: 10px;
    width: clamp(350px, 50%, 800px);
}

dialog::backdrop {
    backdrop-filter: blur(5px);
}

dialog .dialog-header {
    display: flex;
    align-items: center;

    margin-bottom: 20px;
}

.dialog-header .dialog-title {
    flex: 1;

    font-size: 1.4rem;
    font-weight: 700;
}

label div {
    padding-bottom: 5px;
}

input[type="text"],
select,
input[type="date"],
textarea {
    background-color: var(--textbox-accent-color);
    box-sizing: border-box;
    width: 100%;
    padding: 10px 5px;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    font-size: 1rem;
}

input[type="text"]:focus,
select:focus,
input[type="date"]:focus,
textarea:focus {
    border-color: forestgreen;
    outline: none;
    box-shadow: var(--standard-box-shadow);
}

input[type="date"],
textarea {
    font-family: inherit;
}

textarea {
    resize: none;
}

dialog form button {
    align-self: center;

    background-color: forestgreen;
    color: white;
    font-size: 1.4rem;
    box-sizing: border-box;
    border-style: none;
    border-radius: 20px;
    padding: 5px 30px;
}

form,
form .form-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

form .form-column {
    flex: 1;
}

form .form-columns {
    display: flex;
    gap: 20px;
}

.form-column label {
    flex: 1;

    display: flex;
    flex-direction: column;
}

.form-column textarea {
    flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(https://fonts.bunny.net/css?family=roboto:400,400i,700);\n\n:root {\n    --standard-box-shadow: rgb(156, 156, 156) 1px 1px 5px;\n\n    --trash-can-icon: url('../images/trash-can-outline.svg');\n    --pencil-icon: url('../images/pencil-outline.svg');\n    --plus-icon: url('../images/plus.svg');\n    --close-icon: url('../images/close.svg');\n    --back-icon: url('../images/arrow-u-left-top.svg');\n\n    --secondary-text-color: rgb(90, 90, 90);\n    --textbox-accent-color: rgb(245, 245, 245);\n    --background-accent-color-light: rgb(250, 250, 250);\n\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    \n    height: 65px;\n    box-shadow: var(--standard-box-shadow);\n    padding: 0px 15px;\n\n    position: sticky;\n    top: 0;\n    z-index: 1;\n}\n\n#page-title {\n    flex: 1;\n\n    font-size: 1.6rem;\n    font-weight: 700;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project-list,\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    width: max(500px, 70%);\n    padding: 20px;\n}\n\n.project {\n    cursor: pointer;\n}\n\n.project:hover {\n    border-color: green;\n}\n\n.project,\n.todo {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n    height: 125px;\n    border: 5px solid;\n    border-radius: 10px;\n    padding: 25px;\n    box-sizing: border-box;\n}\n\n.todo.low-priority {\n    border-color: green;\n}\n\n.todo.medium-priority {\n    border-color: gold;\n}\n\n.todo.high-priority {\n    border-color: red;\n}\n\n.project .button-list,\n.todo .button-list {\n    display: flex;\n    gap: 20px;\n}\n\n.project .button-list {\n    flex: 1;\n\n    justify-content: flex-end;\n}\n\n.todo .todo-due-date {\n    flex: 1;\n\n    display: flex;\n    justify-content: flex-end;\n\n    font-size: 1.2rem;\n    color: var(--secondary-text-color);\n    margin-right: 30px;\n    white-space: nowrap;\n}\n\n.project .project-title,\n.todo .todo-title {\n    font-size: 2rem;\n    font-weight: 700;\n}\n\n.todo .todo-description {\n    font-size: 1.2rem;\n    color: var(--secondary-text-color);\n}\n\n.todo .todo-text-content {\n    min-width: 20%;\n}\n\n.project .project-title,\n.todo .todo-title,\n.todo .todo-description {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    min-width: 0px;\n}\n\nbutton.icon {\n    border: none;\n    background-color: black;\n    height: 25px;\n    width: 25px;\n    mask-repeat: no-repeat;\n    mask-position: center;\n}\n\n.icon.edit {\n    mask-image: var(--pencil-icon);\n}\n\n.icon.edit:hover,\n.icon.back:hover {\n    background-color: goldenrod;\n}\n\n.icon.delete {\n    mask-image: var(--trash-can-icon);\n}\n\n.icon.delete:hover,\n.icon.close:hover {\n    background-color: red;\n}\n\n.icon.add {\n    mask-image: var(--plus-icon);\n}\n\n.icon.add:hover {\n    background-color: green;\n}\n\n.icon.close {\n    mask-image: var(--close-icon);\n}\n\n.icon.back {\n    mask-image: var(--back-icon);\n}\n\nbutton {\n    cursor: pointer;\n}\n\ndialog {\n    border-width: 1px;\n    box-shadow: var(--standard-box-shadow);\n    background-color: var(--background-accent-color-light);\n    border-radius: 10px;\n    width: clamp(350px, 50%, 800px);\n}\n\ndialog::backdrop {\n    backdrop-filter: blur(5px);\n}\n\ndialog .dialog-header {\n    display: flex;\n    align-items: center;\n\n    margin-bottom: 20px;\n}\n\n.dialog-header .dialog-title {\n    flex: 1;\n\n    font-size: 1.4rem;\n    font-weight: 700;\n}\n\nlabel div {\n    padding-bottom: 5px;\n}\n\ninput[type=\"text\"],\nselect,\ninput[type=\"date\"],\ntextarea {\n    background-color: var(--textbox-accent-color);\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 5px;\n    border-radius: 5px;\n    border-style: solid;\n    border-width: 1px;\n    font-size: 1rem;\n}\n\ninput[type=\"text\"]:focus,\nselect:focus,\ninput[type=\"date\"]:focus,\ntextarea:focus {\n    border-color: forestgreen;\n    outline: none;\n    box-shadow: var(--standard-box-shadow);\n}\n\ninput[type=\"date\"],\ntextarea {\n    font-family: inherit;\n}\n\ntextarea {\n    resize: none;\n}\n\ndialog form button {\n    align-self: center;\n\n    background-color: forestgreen;\n    color: white;\n    font-size: 1.4rem;\n    box-sizing: border-box;\n    border-style: none;\n    border-radius: 20px;\n    padding: 5px 30px;\n}\n\nform,\nform .form-column {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\nform .form-column {\n    flex: 1;\n}\n\nform .form-columns {\n    display: flex;\n    gap: 20px;\n}\n\n.form-column label {\n    flex: 1;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.form-column textarea {\n    flex: 1;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/js/domUtils.js":
/*!****************************!*\
  !*** ./src/js/domUtils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DomUtils {
    static clearContainer(containerElement) {
        while (containerElement.lastChild) {
            containerElement.removeChild(containerElement.lastChild);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomUtils);

/***/ }),

/***/ "./src/js/localStorageUtils.js":
/*!*************************************!*\
  !*** ./src/js/localStorageUtils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/js/project.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ "./src/js/projectList.js");




class LocalStorageUtils {
    
    static writeProjectList(projectList) {
        localStorage.projectList = JSON.stringify(projectList);
    }

    static readProjectList() {
        if (localStorage.projectList !== undefined && localStorage.projectList !== null) {
            const projectListRawObject = JSON.parse(localStorage.projectList);
            return this.parseProjectListRawObject(projectListRawObject);
        }

        return new _projectList__WEBPACK_IMPORTED_MODULE_2__["default"](new Array());
    }

    static parseProjectListRawObject(projectListRawObject) {
        const projects = new Array();
        projectListRawObject.projects.forEach(projectRawObject => projects.push(this.parseProjectRawObject(projectRawObject)));
        return new _projectList__WEBPACK_IMPORTED_MODULE_2__["default"](projects);
    }

    static parseProjectRawObject(projectRawObject) {
        const todos = new Array();
        projectRawObject.todos.forEach(todoRawObject => todos.push(this.parseTodoRawObject(todoRawObject)));
        
        const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectRawObject.title, todos);
        project.id = projectRawObject.id;
        
        return project;
    }

    static parseTodoRawObject(todoRawObject) {
        const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](todoRawObject.title, todoRawObject.description, todoRawObject.dueDate, todoRawObject.priority, todoRawObject.isDone);
        todo.id = todoRawObject.id;
        return todo;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageUtils);

/***/ }),

/***/ "./src/js/newProjectDialog.js":
/*!************************************!*\
  !*** ./src/js/newProjectDialog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/js/project.js");


class NewProjectDialog {

    dialog;
    header;
    form;
    txtTitle;
    btnSave;
    btnClose;

    constructor() {
        this.initializeCloseButton()
        this.initializeSaveButton();
        this.initializeHeader();
        this.initializeForm();
        this.initializeDialog();
    }

    initializeHeader() {
        const dialogTitle = document.createElement('div');
        dialogTitle.classList.add('dialog-title');
        dialogTitle.textContent = 'Project Details';
        
        this.header = document.createElement('div');
        this.header.classList.add('dialog-header');
        this.header.appendChild(dialogTitle);
        this.header.appendChild(this.btnClose);
    }

    initializeCloseButton() {
        this.btnClose = document.createElement('button');
        this.btnClose.id = 'btn-new-project-form-close';
        this.btnClose.classList.add('icon', 'close');
        this.btnClose.onclick = () => {
            this.dialog.close();
            this.form.reset();
        };
    }

    initializeSaveButton() {
        this.btnSave = document.createElement('button');
        this.btnSave.id = 'btn-save-new-project';
        this.btnSave.type = 'submit';
        this.btnSave.textContent = 'Save';
    }

    initializeForm() {
        const divTitleLabel = document.createElement('div');
        divTitleLabel.textContent = 'Title';

        this.txtTitle = document.createElement('input');
        this.txtTitle.id = 'txt-new-project-title';
        this.txtTitle.name = 'txtTitle';
        this.txtTitle.type = 'text';
        this.txtTitle.required = true;

        const lblTitle = document.createElement('label');
        lblTitle.for = 'txt-title';
        lblTitle.appendChild(divTitleLabel);
        lblTitle.appendChild(this.txtTitle);


        this.form = document.createElement('form');
        this.form.id = 'form-new-project';
        this.form.action = 'dialog';
        
        this.form.appendChild(lblTitle);
        this.form.appendChild(this.btnSave);
    }

    initializeDialog() {
        this.dialog = document.createElement('dialog');
        this.dialog.id = 'dialog-new-project';
        this.dialog.appendChild(this.header);
        this.dialog.appendChild(this.form);
    }

    draw(container) {
        container.appendChild(this.dialog);
    }

    openDialog(existingProject, projectList, refreshPageFunction, dataPersistenceFunction) {
        if (existingProject !== null) {
            this.txtTitle.value = existingProject.title;
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let index = projectList.findProjectIndex(existingProject.id);
                    projectList.projects[index].title = this.txtTitle.value;
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        } else {
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](this.txtTitle.value, new Array());
                    projectList.addProject(newProject);
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        }
        this.dialog.showModal();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProjectDialog);

/***/ }),

/***/ "./src/js/newTodoDialog.js":
/*!*********************************!*\
  !*** ./src/js/newTodoDialog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/todo.js");


class NewTodoDialog {

    dialog;
    form;
    header;
    txtTitle;
    txtDescription;
    selPriority;
    dtDueDate;
    btnSave;
    btnClose;

    constructor() {
        this.initializeCloseButton();
        this.initializeSaveButton();
        this.initializeHeader();
        this.initializeForm();
        this.initializeDialog();
    }

    initializeHeader() {
        const dialogTitle = document.createElement('div');
        dialogTitle.classList.add('dialog-title');
        dialogTitle.textContent = 'Todo Details';
        
        this.header = document.createElement('div');
        this.header.classList.add('dialog-header');
        this.header.appendChild(dialogTitle);
        this.header.appendChild(this.btnClose);
    }

    initializeCloseButton() {
        this.btnClose = document.createElement('button');
        this.btnClose.id = 'btn-new-todo-form-close';
        this.btnClose.classList.add('icon', 'close');
        this.btnClose.type = 'button';
        this.btnClose.onclick = () => {
            this.dialog.close();
            this.form.reset();
        };
    }

    initializeSaveButton() {
        this.btnSave = document.createElement('button');
        this.btnSave.id = 'btn-new-todo-form-save';
        this.btnSave.type = 'submit';
        this.btnSave.textContent = 'Save';
    }

    initializeForm() {
        const lblTitle = this.createFormTitleComponent();
        const lblPriority = this.createFormPriorityComponent();
        const lblDueDate = this.createFormDueDateComponent();
        const lblDescription = this.createFormDescriptionComponent();

        const divColumn1 = document.createElement('div');
        divColumn1.classList.add('form-column');
        divColumn1.appendChild(lblTitle);
        divColumn1.appendChild(lblPriority);
        divColumn1.appendChild(lblDueDate);

        const divColumn2 = document.createElement('div');
        divColumn2.classList.add('form-column');
        divColumn2.appendChild(lblDescription);

        const divFormColumns = document.createElement('div');
        divFormColumns.classList.add('form-columns');
        divFormColumns.appendChild(divColumn1);
        divFormColumns.appendChild(divColumn2);

        this.form = document.createElement('form');
        this.form.id = 'form-new-todo';
        this.form.action = 'dialog';

        this.form.appendChild(divFormColumns);
        this.form.appendChild(this.btnSave);
    }

    createFormTitleComponent() {
        const divTitleLabel = document.createElement('div');
        divTitleLabel.textContent = 'Title';

        this.txtTitle = document.createElement('input');
        this.txtTitle.id = 'txt-new-todo-title';
        this.txtTitle.name = 'txtTitle';
        this.txtTitle.type = 'text';
        this.txtTitle.required = true;

        const lblTitle = document.createElement('label');
        lblTitle.for = 'txt-new-todo-title';
        lblTitle.appendChild(divTitleLabel);
        lblTitle.appendChild(this.txtTitle);

        return lblTitle;
    }

    createFormPriorityComponent() {
        const divPriorityLabel = document.createElement('div');
        divPriorityLabel.textContent = 'Priority';

        const optLow = document.createElement('option');
        optLow.value = '0';
        optLow.textContent = 'Low';

        const optMedium = document.createElement('option');
        optMedium.value = '1';
        optMedium.textContent = 'Medium';

        const optHigh = document.createElement('option');
        optHigh.value = '2';
        optHigh.textContent = 'High';

        this.selPriority = document.createElement('select');
        this.selPriority.id = 'sel-new-todo-priority';
        this.selPriority.name = 'selPriority';
        this.selPriority.appendChild(optLow);
        this.selPriority.appendChild(optMedium);
        this.selPriority.appendChild(optHigh);

        const lblPriority = document.createElement('label');
        lblPriority.for = 'sel-new-todo-priority';
        lblPriority.appendChild(divPriorityLabel);
        lblPriority.appendChild(this.selPriority);

        return lblPriority;
    }

    createFormDueDateComponent() {
        const divDueDateLabel = document.createElement('div');
        divDueDateLabel.textContent = 'Due Date';

        this.dtDueDate = document.createElement('input');
        this.dtDueDate.id = 'dt-new-todo-due-date';
        this.dtDueDate.name = 'dtDueDate';
        this.dtDueDate.type = 'date';

        const lblDueDate = document.createElement('label');
        lblDueDate.for = 'dt-new-todo-due-date';
        lblDueDate.appendChild(divDueDateLabel);
        lblDueDate.appendChild(this.dtDueDate);

        return lblDueDate;
    }

    createFormDescriptionComponent() {
        const divDescriptionLabel = document.createElement('div');
        divDescriptionLabel.textContent = 'Description';

        this.txtDescription = document.createElement('textarea');
        this.txtDescription.id = 'txt-new-todo-description';
        this.txtDescription.name = 'txtDescription';
        this.txtDescription.required = true;

        const lblDescription = document.createElement('label');
        lblDescription.for = 'txt-new-todo-description';
        lblDescription.appendChild(divDescriptionLabel);
        lblDescription.appendChild(this.txtDescription);

        return lblDescription;
    }

    initializeDialog() {
        this.dialog = document.createElement('dialog');
        this.dialog.id = 'dialog-new-todo';
        this.dialog.appendChild(this.header);
        this.dialog.appendChild(this.form);
    }

    draw(container) {
        container.appendChild(this.dialog);
    }

    openDialog(existingTodo, project, refreshPageFunction, dataPersistenceFunction) {
        if (existingTodo !== null) {
            this.txtTitle.value = existingTodo.title;
            this.selPriority.value = existingTodo.priority;
            this.dtDueDate.value = existingTodo.dueDate;
            this.txtDescription.value = existingTodo.description;
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let index = project.findTodoIndex(existingTodo.id);
                    project.todos[index].title = this.txtTitle.value;
                    project.todos[index].priority = this.selPriority.value;
                    project.todos[index].dueDate = this.dtDueDate.value;
                    project.todos[index].description = this.txtDescription.value;
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        } else {
            this.btnSave.onclick = (event) => {
                event.preventDefault();
                if (this.form.reportValidity()) {
                    let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](this.txtTitle.value, this.txtDescription.value, this.dtDueDate.value, this.selPriority.value, false);
                    project.addTodo(newTodo);
                    dataPersistenceFunction();
                    this.dialog.close();
                    this.form.reset();
                    refreshPageFunction();
                }
            };
        }
        this.dialog.showModal();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTodoDialog);

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project {
    constructor(title, todos) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = title;
        this.todos = todos;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    findTodoIndex(id) {
        return this.todos.findIndex(todo => todo.id === id);
    }

    removeTodo(id) {
        let indexToRemove = this.findTodoIndex(id);
        this.todos.splice(indexToRemove, 1);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/js/projectList.js":
/*!*******************************!*\
  !*** ./src/js/projectList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ProjectList {
    constructor(projects) {
        this.projects = projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    findProjectIndex(id) {
        return this.projects.findIndex(project => project.id === id);
    }

    removeProject(id) {
        let indexToRemove = this.findProjectIndex(id);
        this.projects.splice(indexToRemove, 1);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);

/***/ }),

/***/ "./src/js/projectPage.js":
/*!*******************************!*\
  !*** ./src/js/projectPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoDomUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDomUtils.js */ "./src/js/todoDomUtils.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils.js */ "./src/js/domUtils.js");
/* harmony import */ var _newTodoDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTodoDialog.js */ "./src/js/newTodoDialog.js");




class ProjectPage {
    
    parentContainer;
    project;
    returnFunction;
    newTodoDialog;
    pageHeader;
    dataPersistenceFunction;

    constructor(parentContainer, project, returnFunction, dataPersistenceFunction) {
        this.parentContainer = parentContainer;
        this.project = project;
        this.returnFunction = returnFunction;
        this.newTodoDialog = new _newTodoDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.initializePageHeader();
        this.dataPersistenceFunction = dataPersistenceFunction;
    }
    
    initializePageHeader() {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = this.project.title;

        const btnBack = document.createElement('button');
        btnBack.id = 'btn-back';
        btnBack.type = 'button';
        btnBack.classList.add('icon', 'back');
        btnBack.onclick = this.returnFunction;

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add-todo';
        btnAdd.type = 'button';
        btnAdd.classList.add('icon', 'add');
        btnAdd.onclick = () => {
            this.newTodoDialog.openDialog(null, this.project, this.draw.bind(this), this.dataPersistenceFunction);
        };

        this.pageHeader = document.createElement('header');
        this.pageHeader.appendChild(divPageTitle);
        this.pageHeader.appendChild(btnBack);
        this.pageHeader.appendChild(btnAdd);
    }

    draw() {
        _domUtils_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearContainer(this.parentContainer);

        this.parentContainer.appendChild(this.pageHeader);
        this.parentContainer.appendChild(this.createPageContent());
        this.newTodoDialog.draw(this.parentContainer);
    }
    
    createPageContent() {
        const divPageContent = document.createElement('div');
        divPageContent.id = 'content';

        divPageContent.appendChild(this.createTodoList());

        return divPageContent;
    }

    createTodoList() {
        const divTodoList = document.createElement('div');
        divTodoList.classList.add('todo-list');

        this.project.todos.forEach(todo => {
            const editFunction = () => {
                this.newTodoDialog.openDialog(todo, this.project, this.draw.bind(this), this.dataPersistenceFunction);
            }
            const deleteFunction = () => {
                this.project.removeTodo(todo.id);
                this.dataPersistenceFunction();
                this.draw();
            }
            divTodoList.appendChild(_todoDomUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodoElement(todo, editFunction, deleteFunction, this.dataPersistenceFunction));
        });

        return divTodoList;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPage);

/***/ }),

/***/ "./src/js/projectsPage.js":
/*!********************************!*\
  !*** ./src/js/projectsPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPage.js */ "./src/js/projectPage.js");
/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils.js */ "./src/js/domUtils.js");
/* harmony import */ var _newProjectDialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjectDialog.js */ "./src/js/newProjectDialog.js");




class ProjectsPage {

    parentContainer;
    projectList;
    newProjectDialog;
    pageHeader;
    dataPersistenceFunction;
    
    constructor(parentContainer, projectList, dataPersistenceFunction) {
        this.parentContainer = parentContainer;
        this.projectList = projectList;
        this.newProjectDialog = new _newProjectDialog_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.initializePageHeader();
        this.dataPersistenceFunction = dataPersistenceFunction;
    }

    initializePageHeader() {
        const divPageTitle = document.createElement('div');
        divPageTitle.id = 'page-title';
        divPageTitle.textContent = 'Projects';

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btn-add';
        btnAdd.type = 'button'
        btnAdd.classList.add('icon', 'add');
        btnAdd.onclick = () => {
            this.newProjectDialog.openDialog(null, this.projectList, this.draw.bind(this), this.dataPersistenceFunction);
        };

        this.pageHeader = document.createElement('header');
        this.pageHeader.appendChild(divPageTitle);
        this.pageHeader.appendChild(btnAdd);
    }

    createPageContent() {
        const pageContent = document.createElement('div');
        pageContent.id = 'content';

        pageContent.appendChild(this.createDivProjectList());

        return pageContent;
    }

    createDivProjectList() {
        const divProjectList = document.createElement('div');
        divProjectList.classList.add('project-list');
        
        this.projectList.projects.forEach(project => divProjectList.appendChild(this.createProject(project)));

        return divProjectList;
    }

    draw() {
        _domUtils_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearContainer(this.parentContainer);
        
        this.parentContainer.appendChild(this.pageHeader);
        this.parentContainer.appendChild(this.createPageContent());
        this.newProjectDialog.draw(this.parentContainer);
    }

    createProject(project) {
        const divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.id = project.id;

        divProject.appendChild(this.createProjectTitle(project));
        divProject.appendChild(this.createProjectButtons(project));

        divProject.onclick = () => {
            const projectPage = new _projectPage_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.parentContainer, project, this.draw.bind(this), this.dataPersistenceFunction);
            projectPage.draw();
        };

        return divProject;
    }

    createProjectTitle(project) {
        const divProjectTitle = document.createElement('div');
        divProjectTitle.classList.add('project-title');

        divProjectTitle.textContent = project.title;

        return divProjectTitle;
    }

    createProjectButtons(project) {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('edit', 'icon');
        btnEdit.type='button';

        btnEdit.addEventListener('click', (event) => {
            event.stopPropagation();
            this.newProjectDialog.openDialog(project, this.projectList, this.draw.bind(this), this.dataPersistenceFunction);
        });

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('delete', 'icon');
        btnDelete.type='button';
        btnDelete.addEventListener('click', (event) => {
            event.stopPropagation();
            this.projectList.removeProject(project.id);
            this.dataPersistenceFunction();
            this.draw();
        });
        
        const divProjectButtons = document.createElement('div');
        divProjectButtons.classList.add('button-list');
        divProjectButtons.appendChild(btnEdit);
        divProjectButtons.appendChild(btnDelete);

        return divProjectButtons;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsPage);

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Todo {
    constructor(title, description, dueDate, priority, isDone) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
    }

    reverseIsDone() {
        this.isDone = !this.isDone;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/js/todoDomUtils.js":
/*!********************************!*\
  !*** ./src/js/todoDomUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoDomUtils {

    static createTodoElement(todo, editFunction, deleteFunction, dataPersistenceFunction) {
        const divTodo = document.createElement('div');
        divTodo.classList.add('todo');
        divTodo.appendChild(this.createCheckbox(todo, dataPersistenceFunction));
        divTodo.appendChild(this.createTextContent(todo.title, todo.description));
        divTodo.appendChild(this.createDueDate(todo.dueDate));
        divTodo.appendChild(this.createButtons(editFunction, deleteFunction));
        this.setTodoPriority(divTodo, todo.priority);

        return divTodo;
    }
    
    static setTodoPriority(divTodo, priority) {
        switch(parseInt(priority)) {
            case 0:
                divTodo.classList.add('low-priority');
                break;
            case 1:
                divTodo.classList.add('medium-priority');
                break;
            case 2:
                divTodo.classList.add('high-priority');
                break;
        }
    }

    static createCheckbox(todo, dataPersistenceFunction) {
        const chkIsDone = document.createElement('input');
        chkIsDone.type = 'checkbox';
        chkIsDone.checked = todo.isDone;
        chkIsDone.onclick = () => {
            todo.reverseIsDone();
            dataPersistenceFunction();
        }
        return chkIsDone;
    }

    static createTextContent(title, description) {
        const divTitle = document.createElement('div');
        divTitle.classList.add('todo-title');
        divTitle.textContent = title;

        const divDescription = document.createElement('div');
        divDescription.classList.add('todo-description');
        divDescription.textContent = description;

        const divTextContent = document.createElement('div');
        divTextContent.classList.add('todo-text-content');
        divTextContent.appendChild(divTitle);
        divTextContent.appendChild(divDescription);

        return divTextContent;
    }

    static createDueDate(dueDate) {
        const divDueDate = document.createElement('div');
        divDueDate.classList.add('todo-due-date');
        divDueDate.textContent = dueDate;

        return divDueDate;
    }

    static createButtons(editFunction, deleteFunction) {
        const btnEdit = document.createElement('button');
        btnEdit.classList.add('icon');
        btnEdit.classList.add('edit');
        btnEdit.onclick = editFunction;

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('icon');
        btnDelete.classList.add('delete');
        btnDelete.onclick = deleteFunction;
        
        const divButtons = document.createElement('div');
        divButtons.classList.add('button-list');
        divButtons.appendChild(btnEdit);
        divButtons.appendChild(btnDelete);
        
        return divButtons;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoDomUtils);

/***/ }),

/***/ "./src/images/arrow-u-left-top.svg":
/*!*****************************************!*\
  !*** ./src/images/arrow-u-left-top.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daa277a531e6da87e5df.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/pencil-outline.svg":
/*!***************************************!*\
  !*** ./src/images/pencil-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"app": 0
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _projectsPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsPage.js */ "./src/js/projectsPage.js");
/* harmony import */ var _localStorageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageUtils.js */ "./src/js/localStorageUtils.js");




const body = document.querySelector('body');

const js_projectList = _localStorageUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].readProjectList();
const js_dataPersistenceFunction = () => _localStorageUtils_js__WEBPACK_IMPORTED_MODULE_2__["default"].writeProjectList(js_projectList);

const projectsPage = new _projectsPage_js__WEBPACK_IMPORTED_MODULE_1__["default"](body, js_projectList, js_dataPersistenceFunction);
projectsPage.draw();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBJQUFrRDtBQUM5Riw0Q0FBNEMsb0lBQStDO0FBQzNGLDRDQUE0QyxnSEFBcUM7QUFDakYsNENBQTRDLGtIQUFzQztBQUNsRiw0Q0FBNEMsd0lBQWlEO0FBQzdGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsOEdBQThHO0FBQzlHLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLG1DQUFtQztBQUMvRCx5QkFBeUIsbUNBQW1DO0FBQzVELHVCQUF1QixtQ0FBbUM7QUFDMUQsd0JBQXdCLG1DQUFtQztBQUMzRCx1QkFBdUIsbUNBQW1DOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLDZGQUE2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QUUxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZDQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDbk5ROztBQUVwQztBQUNBO0FBQ0Esa0JBQWtCLGdEQUFNO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUN2QnRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUI7QUFDUjtBQUNVOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHlEQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0RBQVk7QUFDaEQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRmlCO0FBQ047QUFDZ0I7O0FBRXJEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw0REFBZ0I7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLHVEQUFXO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDdEhTOztBQUVwQztBQUNBO0FBQ0Esa0JBQWtCLGdEQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ2pCbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNlO0FBQ1U7O0FBRXZEOztBQUVBLE1BQU0sY0FBVyxHQUFHLDZEQUFpQjtBQUNyQyxNQUFNLDBCQUF1QixTQUFTLDZEQUFpQixrQkFBa0IsY0FBVzs7QUFFcEYseUJBQXlCLHdEQUFZLE9BQU8sY0FBVyxFQUFFLDBCQUF1QjtBQUNoRixvQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvZG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvbG9jYWxTdG9yYWdlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvbmV3UHJvamVjdERpYWxvZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9uZXdUb2RvRGlhbG9nLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvcHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvcHJvamVjdHNQYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdG9kb0RvbVV0aWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9hcnJvdy11LWxlZnQtdG9wLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuYnVubnkubmV0L2Nzcz9mYW1pbHk9cm9ib3RvOjQwMCw0MDBpLDcwMCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1zdGFuZGFyZC1ib3gtc2hhZG93OiByZ2IoMTU2LCAxNTYsIDE1NikgMXB4IDFweCA1cHg7XG5cbiAgICAtLXRyYXNoLWNhbi1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgLS1wZW5jaWwtaWNvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIC0tcGx1cy1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgLS1jbG9zZS1pY29uOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgLS1iYWNrLWljb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcblxuICAgIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcbiAgICAtLXRleHRib3gtYWNjZW50LWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgLS1iYWNrZ3JvdW5kLWFjY2VudC1jb2xvci1saWdodDogcmdiKDI1MCwgMjUwLCAyNTApO1xuXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIFxuICAgIGhlaWdodDogNjVweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcblxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbiNwYWdlLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1saXN0LFxuLnRvZG8tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcblxuICAgIHdpZHRoOiBtYXgoNTAwcHgsIDcwJSk7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2plY3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3Q6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG5cbi5wcm9qZWN0LFxuLnRvZG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG5cbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udG9kby5sb3ctcHJpb3JpdHkge1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG5cbi50b2RvLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xufVxuXG4udG9kby5oaWdoLXByaW9yaXR5IHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLnByb2plY3QgLmJ1dHRvbi1saXN0LFxuLnRvZG8gLmJ1dHRvbi1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLnByb2plY3QgLmJ1dHRvbi1saXN0IHtcbiAgICBmbGV4OiAxO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRvZG8gLnRvZG8tZHVlLWRhdGUge1xuICAgIGZsZXg6IDE7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucHJvamVjdCAucHJvamVjdC10aXRsZSxcbi50b2RvIC50b2RvLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRvZG8gLnRvZG8tZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG59XG5cbi50b2RvIC50b2RvLXRleHQtY29udGVudCB7XG4gICAgbWluLXdpZHRoOiAyMCU7XG59XG5cbi5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLFxuLnRvZG8gLnRvZG8tdGl0bGUsXG4udG9kbyAudG9kby1kZXNjcmlwdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi13aWR0aDogMHB4O1xufVxuXG5idXR0b24uaWNvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmljb24uZWRpdCB7XG4gICAgbWFzay1pbWFnZTogdmFyKC0tcGVuY2lsLWljb24pO1xufVxuXG4uaWNvbi5lZGl0OmhvdmVyLFxuLmljb24uYmFjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xufVxuXG4uaWNvbi5kZWxldGUge1xuICAgIG1hc2staW1hZ2U6IHZhcigtLXRyYXNoLWNhbi1pY29uKTtcbn1cblxuLmljb24uZGVsZXRlOmhvdmVyLFxuLmljb24uY2xvc2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmljb24uYWRkIHtcbiAgICBtYXNrLWltYWdlOiB2YXIoLS1wbHVzLWljb24pO1xufVxuXG4uaWNvbi5hZGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uaWNvbi5jbG9zZSB7XG4gICAgbWFzay1pbWFnZTogdmFyKC0tY2xvc2UtaWNvbik7XG59XG5cbi5pY29uLmJhY2sge1xuICAgIG1hc2staW1hZ2U6IHZhcigtLWJhY2staWNvbik7XG59XG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaWFsb2cge1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXN0YW5kYXJkLWJveC1zaGFkb3cpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50LWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiBjbGFtcCgzNTBweCwgNTAlLCA4MDBweCk7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5kaWFsb2cgLmRpYWxvZy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kaWFsb2ctaGVhZGVyIC5kaWFsb2ctdGl0bGUge1xuICAgIGZsZXg6IDE7XG5cbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5sYWJlbCBkaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuc2VsZWN0LFxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXG50ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dGJveC1hY2NlbnQtY29sb3IpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbmlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogZm9yZXN0Z3JlZW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXG50ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbmRpYWxvZyBmb3JtIGJ1dHRvbiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNXB4IDMwcHg7XG59XG5cbmZvcm0sXG5mb3JtIC5mb3JtLWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuZm9ybSAuZm9ybS1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG59XG5cbmZvcm0gLmZvcm0tY29sdW1ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5mb3JtLWNvbHVtbiBsYWJlbCB7XG4gICAgZmxleDogMTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0tY29sdW1uIHRleHRhcmVhIHtcbiAgICBmbGV4OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0kscURBQXFEOztJQUVyRCx5REFBd0Q7SUFDeEQsc0RBQWtEO0lBQ2xELG9EQUFzQztJQUN0QyxxREFBd0M7SUFDeEMsb0RBQWtEOztJQUVsRCx1Q0FBdUM7SUFDdkMs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QUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPOztJQUVQLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5idW5ueS5uZXQvY3NzP2ZhbWlseT1yb2JvdG86NDAwLDQwMGksNzAwKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc3RhbmRhcmQtYm94LXNoYWRvdzogcmdiKDE1NiwgMTU2LCAxNTYpIDFweCAxcHggNXB4O1xcblxcbiAgICAtLXRyYXNoLWNhbi1pY29uOiB1cmwoJy4uL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmcnKTtcXG4gICAgLS1wZW5jaWwtaWNvbjogdXJsKCcuLi9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnJyk7XFxuICAgIC0tcGx1cy1pY29uOiB1cmwoJy4uL2ltYWdlcy9wbHVzLnN2ZycpO1xcbiAgICAtLWNsb3NlLWljb246IHVybCgnLi4vaW1hZ2VzL2Nsb3NlLnN2ZycpO1xcbiAgICAtLWJhY2staWNvbjogdXJsKCcuLi9pbWFnZXMvYXJyb3ctdS1sZWZ0LXRvcC5zdmcnKTtcXG5cXG4gICAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgICAtLXRleHRib3gtYWNjZW50LWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIC0tYmFja2dyb3VuZC1hY2NlbnQtY29sb3ItbGlnaHQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI3BhZ2UtdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LFxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHdpZHRoOiBtYXgoNTAwcHgsIDcwJSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0LFxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRvZG8ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnRvZG8ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4udG9kby5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wcm9qZWN0IC5idXR0b24tbGlzdCxcXG4udG9kbyAuYnV0dG9uLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IC5idXR0b24tbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvIC50b2RvLWR1ZS1kYXRlIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3QgLnByb2plY3QtdGl0bGUsXFxuLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50b2RvIC50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XFxufVxcblxcbi50b2RvIC50b2RvLXRleHQtY29udGVudCB7XFxuICAgIG1pbi13aWR0aDogMjAlO1xcbn1cXG5cXG4ucHJvamVjdCAucHJvamVjdC10aXRsZSxcXG4udG9kbyAudG9kby10aXRsZSxcXG4udG9kbyAudG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBtaW4td2lkdGg6IDBweDtcXG59XFxuXFxuYnV0dG9uLmljb24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5pY29uLmVkaXQge1xcbiAgICBtYXNrLWltYWdlOiB2YXIoLS1wZW5jaWwtaWNvbik7XFxufVxcblxcbi5pY29uLmVkaXQ6aG92ZXIsXFxuLmljb24uYmFjazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuXFxuLmljb24uZGVsZXRlIHtcXG4gICAgbWFzay1pbWFnZTogdmFyKC0tdHJhc2gtY2FuLWljb24pO1xcbn1cXG5cXG4uaWNvbi5kZWxldGU6aG92ZXIsXFxuLmljb24uY2xvc2U6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5pY29uLmFkZCB7XFxuICAgIG1hc2staW1hZ2U6IHZhcigtLXBsdXMtaWNvbik7XFxufVxcblxcbi5pY29uLmFkZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaWNvbi5jbG9zZSB7XFxuICAgIG1hc2staW1hZ2U6IHZhcigtLWNsb3NlLWljb24pO1xcbn1cXG5cXG4uaWNvbi5iYWNrIHtcXG4gICAgbWFzay1pbWFnZTogdmFyKC0tYmFjay1pY29uKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc3RhbmRhcmQtYm94LXNoYWRvdyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYWNjZW50LWNvbG9yLWxpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgd2lkdGg6IGNsYW1wKDM1MHB4LCA1MCUsIDgwMHB4KTtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG5kaWFsb2cgLmRpYWxvZy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGlhbG9nLWhlYWRlciAuZGlhbG9nLXRpdGxlIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmxhYmVsIGRpdiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5zZWxlY3QsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dGJveC1hY2NlbnQtY29sb3IpO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IGZvcmVzdGdyZWVuO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zdGFuZGFyZC1ib3gtc2hhZG93KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5kaWFsb2cgZm9ybSBidXR0b24ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xcbn1cXG5cXG5mb3JtLFxcbmZvcm0gLmZvcm0tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIC5mb3JtLWNvbHVtbiB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmZvcm0gLmZvcm0tY29sdW1ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0tY29sdW1uIGxhYmVsIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29sdW1uIHRleHRhcmVhIHtcXG4gICAgZmxleDogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImNsYXNzIERvbVV0aWxzIHtcbiAgICBzdGF0aWMgY2xlYXJDb250YWluZXIoY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyRWxlbWVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyRWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb21VdGlsczsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4vcHJvamVjdExpc3RcIjtcblxuY2xhc3MgTG9jYWxTdG9yYWdlVXRpbHMge1xuICAgIFxuICAgIHN0YXRpYyB3cml0ZVByb2plY3RMaXN0KHByb2plY3RMaXN0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5wcm9qZWN0TGlzdCA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVhZFByb2plY3RMaXN0KCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLnByb2plY3RMaXN0ICE9PSB1bmRlZmluZWQgJiYgbG9jYWxTdG9yYWdlLnByb2plY3RMaXN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdFJhd09iamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RMaXN0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUHJvamVjdExpc3RSYXdPYmplY3QocHJvamVjdExpc3RSYXdPYmplY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0TGlzdChuZXcgQXJyYXkoKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhcnNlUHJvamVjdExpc3RSYXdPYmplY3QocHJvamVjdExpc3RSYXdPYmplY3QpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgcHJvamVjdExpc3RSYXdPYmplY3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0UmF3T2JqZWN0ID0+IHByb2plY3RzLnB1c2godGhpcy5wYXJzZVByb2plY3RSYXdPYmplY3QocHJvamVjdFJhd09iamVjdCkpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0TGlzdChwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhcnNlUHJvamVjdFJhd09iamVjdChwcm9qZWN0UmF3T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG9zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHByb2plY3RSYXdPYmplY3QudG9kb3MuZm9yRWFjaCh0b2RvUmF3T2JqZWN0ID0+IHRvZG9zLnB1c2godGhpcy5wYXJzZVRvZG9SYXdPYmplY3QodG9kb1Jhd09iamVjdCkpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0UmF3T2JqZWN0LnRpdGxlLCB0b2Rvcyk7XG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0UmF3T2JqZWN0LmlkO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhcnNlVG9kb1Jhd09iamVjdCh0b2RvUmF3T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0b2RvUmF3T2JqZWN0LnRpdGxlLCB0b2RvUmF3T2JqZWN0LmRlc2NyaXB0aW9uLCB0b2RvUmF3T2JqZWN0LmR1ZURhdGUsIHRvZG9SYXdPYmplY3QucHJpb3JpdHksIHRvZG9SYXdPYmplY3QuaXNEb25lKTtcbiAgICAgICAgdG9kby5pZCA9IHRvZG9SYXdPYmplY3QuaWQ7XG4gICAgICAgIHJldHVybiB0b2RvO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxTdG9yYWdlVXRpbHM7IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jbGFzcyBOZXdQcm9qZWN0RGlhbG9nIHtcblxuICAgIGRpYWxvZztcbiAgICBoZWFkZXI7XG4gICAgZm9ybTtcbiAgICB0eHRUaXRsZTtcbiAgICBidG5TYXZlO1xuICAgIGJ0bkNsb3NlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNsb3NlQnV0dG9uKClcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2F2ZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRm9ybSgpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVEaWFsb2coKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaWFsb2dUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctdGl0bGUnKTtcbiAgICAgICAgZGlhbG9nVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXRhaWxzJztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuYXBwZW5kQ2hpbGQoZGlhbG9nVGl0bGUpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLmJ0bkNsb3NlKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplQ2xvc2VCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pZCA9ICdidG4tbmV3LXByb2plY3QtZm9ybS1jbG9zZSc7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuY2xhc3NMaXN0LmFkZCgnaWNvbicsICdjbG9zZScpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZVNhdmVCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnRuU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ0blNhdmUuaWQgPSAnYnRuLXNhdmUtbmV3LXByb2plY3QnO1xuICAgICAgICB0aGlzLmJ0blNhdmUudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICB0aGlzLmJ0blNhdmUudGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG5cbiAgICAgICAgdGhpcy50eHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMudHh0VGl0bGUuaWQgPSAndHh0LW5ldy1wcm9qZWN0LXRpdGxlJztcbiAgICAgICAgdGhpcy50eHRUaXRsZS5uYW1lID0gJ3R4dFRpdGxlJztcbiAgICAgICAgdGhpcy50eHRUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aGlzLnR4dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxibFRpdGxlLmZvciA9ICd0eHQtdGl0bGUnO1xuICAgICAgICBsYmxUaXRsZS5hcHBlbmRDaGlsZChkaXZUaXRsZUxhYmVsKTtcbiAgICAgICAgbGJsVGl0bGUuYXBwZW5kQ2hpbGQodGhpcy50eHRUaXRsZSk7XG5cblxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHRoaXMuZm9ybS5pZCA9ICdmb3JtLW5ldy1wcm9qZWN0JztcbiAgICAgICAgdGhpcy5mb3JtLmFjdGlvbiA9ICdkaWFsb2cnO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKHRoaXMuYnRuU2F2ZSk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZURpYWxvZygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgdGhpcy5kaWFsb2cuaWQgPSAnZGlhbG9nLW5ldy1wcm9qZWN0JztcbiAgICAgICAgdGhpcy5kaWFsb2cuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLmRpYWxvZy5hcHBlbmRDaGlsZCh0aGlzLmZvcm0pO1xuICAgIH1cblxuICAgIGRyYXcoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRpYWxvZyk7XG4gICAgfVxuXG4gICAgb3BlbkRpYWxvZyhleGlzdGluZ1Byb2plY3QsIHByb2plY3RMaXN0LCByZWZyZXNoUGFnZUZ1bmN0aW9uLCBkYXRhUGVyc2lzdGVuY2VGdW5jdGlvbikge1xuICAgICAgICBpZiAoZXhpc3RpbmdQcm9qZWN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnR4dFRpdGxlLnZhbHVlID0gZXhpc3RpbmdQcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5idG5TYXZlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0ucmVwb3J0VmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0TGlzdC5maW5kUHJvamVjdEluZGV4KGV4aXN0aW5nUHJvamVjdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LnByb2plY3RzW2luZGV4XS50aXRsZSA9IHRoaXMudHh0VGl0bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoUGFnZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU2F2ZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aGlzLnR4dFRpdGxlLnZhbHVlLCBuZXcgQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoUGFnZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Byb2plY3REaWFsb2c7IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuXG5jbGFzcyBOZXdUb2RvRGlhbG9nIHtcblxuICAgIGRpYWxvZztcbiAgICBmb3JtO1xuICAgIGhlYWRlcjtcbiAgICB0eHRUaXRsZTtcbiAgICB0eHREZXNjcmlwdGlvbjtcbiAgICBzZWxQcmlvcml0eTtcbiAgICBkdER1ZURhdGU7XG4gICAgYnRuU2F2ZTtcbiAgICBidG5DbG9zZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDbG9zZUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVTYXZlQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVGb3JtKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURpYWxvZygpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpYWxvZ1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy10aXRsZScpO1xuICAgICAgICBkaWFsb2dUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIERldGFpbHMnO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChkaWFsb2dUaXRsZSk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuYnRuQ2xvc2UpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVDbG9zZUJ1dHRvbigpIHtcbiAgICAgICAgdGhpcy5idG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmlkID0gJ2J0bi1uZXctdG9kby1mb3JtLWNsb3NlJztcbiAgICAgICAgdGhpcy5idG5DbG9zZS5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UudHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZVNhdmVCdXR0b24oKSB7XG4gICAgICAgIHRoaXMuYnRuU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ0blNhdmUuaWQgPSAnYnRuLW5ldy10b2RvLWZvcm0tc2F2ZSc7XG4gICAgICAgIHRoaXMuYnRuU2F2ZS50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgIHRoaXMuYnRuU2F2ZS50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICB9XG5cbiAgICBpbml0aWFsaXplRm9ybSgpIHtcbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSB0aGlzLmNyZWF0ZUZvcm1UaXRsZUNvbXBvbmVudCgpO1xuICAgICAgICBjb25zdCBsYmxQcmlvcml0eSA9IHRoaXMuY3JlYXRlRm9ybVByaW9yaXR5Q29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IGxibER1ZURhdGUgPSB0aGlzLmNyZWF0ZUZvcm1EdWVEYXRlQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IGxibERlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVGb3JtRGVzY3JpcHRpb25Db21wb25lbnQoKTtcblxuICAgICAgICBjb25zdCBkaXZDb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb2x1bW4nKTtcbiAgICAgICAgZGl2Q29sdW1uMS5hcHBlbmRDaGlsZChsYmxUaXRsZSk7XG4gICAgICAgIGRpdkNvbHVtbjEuYXBwZW5kQ2hpbGQobGJsUHJpb3JpdHkpO1xuICAgICAgICBkaXZDb2x1bW4xLmFwcGVuZENoaWxkKGxibER1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IGRpdkNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2Q29sdW1uMi5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbHVtbicpO1xuICAgICAgICBkaXZDb2x1bW4yLmFwcGVuZENoaWxkKGxibERlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkaXZGb3JtQ29sdW1ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZGb3JtQ29sdW1ucy5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbHVtbnMnKTtcbiAgICAgICAgZGl2Rm9ybUNvbHVtbnMuYXBwZW5kQ2hpbGQoZGl2Q29sdW1uMSk7XG4gICAgICAgIGRpdkZvcm1Db2x1bW5zLmFwcGVuZENoaWxkKGRpdkNvbHVtbjIpO1xuXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5mb3JtLmlkID0gJ2Zvcm0tbmV3LXRvZG8nO1xuICAgICAgICB0aGlzLmZvcm0uYWN0aW9uID0gJ2RpYWxvZyc7XG5cbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKGRpdkZvcm1Db2x1bW5zKTtcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKHRoaXMuYnRuU2F2ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybVRpdGxlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBkaXZUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnO1xuXG4gICAgICAgIHRoaXMudHh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLnR4dFRpdGxlLmlkID0gJ3R4dC1uZXctdG9kby10aXRsZSc7XG4gICAgICAgIHRoaXMudHh0VGl0bGUubmFtZSA9ICd0eHRUaXRsZSc7XG4gICAgICAgIHRoaXMudHh0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGhpcy50eHRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYmxUaXRsZS5mb3IgPSAndHh0LW5ldy10b2RvLXRpdGxlJztcbiAgICAgICAgbGJsVGl0bGUuYXBwZW5kQ2hpbGQoZGl2VGl0bGVMYWJlbCk7XG4gICAgICAgIGxibFRpdGxlLmFwcGVuZENoaWxkKHRoaXMudHh0VGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBsYmxUaXRsZTtcbiAgICB9XG5cbiAgICBjcmVhdGVGb3JtUHJpb3JpdHlDb21wb25lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRpdlByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2UHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG5cbiAgICAgICAgY29uc3Qgb3B0TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdExvdy52YWx1ZSA9ICcwJztcbiAgICAgICAgb3B0TG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgY29uc3Qgb3B0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdE1lZGl1bS52YWx1ZSA9ICcxJztcbiAgICAgICAgb3B0TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG5cbiAgICAgICAgY29uc3Qgb3B0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRIaWdoLnZhbHVlID0gJzInO1xuICAgICAgICBvcHRIaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gICAgICAgIHRoaXMuc2VsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5zZWxQcmlvcml0eS5pZCA9ICdzZWwtbmV3LXRvZG8tcHJpb3JpdHknO1xuICAgICAgICB0aGlzLnNlbFByaW9yaXR5Lm5hbWUgPSAnc2VsUHJpb3JpdHknO1xuICAgICAgICB0aGlzLnNlbFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdExvdyk7XG4gICAgICAgIHRoaXMuc2VsUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0TWVkaXVtKTtcbiAgICAgICAgdGhpcy5zZWxQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRIaWdoKTtcblxuICAgICAgICBjb25zdCBsYmxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxibFByaW9yaXR5LmZvciA9ICdzZWwtbmV3LXRvZG8tcHJpb3JpdHknO1xuICAgICAgICBsYmxQcmlvcml0eS5hcHBlbmRDaGlsZChkaXZQcmlvcml0eUxhYmVsKTtcbiAgICAgICAgbGJsUHJpb3JpdHkuYXBwZW5kQ2hpbGQodGhpcy5zZWxQcmlvcml0eSk7XG5cbiAgICAgICAgcmV0dXJuIGxibFByaW9yaXR5O1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm1EdWVEYXRlQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBkaXZEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2RHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcblxuICAgICAgICB0aGlzLmR0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuZHREdWVEYXRlLmlkID0gJ2R0LW5ldy10b2RvLWR1ZS1kYXRlJztcbiAgICAgICAgdGhpcy5kdER1ZURhdGUubmFtZSA9ICdkdER1ZURhdGUnO1xuICAgICAgICB0aGlzLmR0RHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gICAgICAgIGNvbnN0IGxibER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYmxEdWVEYXRlLmZvciA9ICdkdC1uZXctdG9kby1kdWUtZGF0ZSc7XG4gICAgICAgIGxibER1ZURhdGUuYXBwZW5kQ2hpbGQoZGl2RHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgbGJsRHVlRGF0ZS5hcHBlbmRDaGlsZCh0aGlzLmR0RHVlRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIGxibER1ZURhdGU7XG4gICAgfVxuXG4gICAgY3JlYXRlRm9ybURlc2NyaXB0aW9uQ29tcG9uZW50KCkge1xuICAgICAgICBjb25zdCBkaXZEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuXG4gICAgICAgIHRoaXMudHh0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICB0aGlzLnR4dERlc2NyaXB0aW9uLmlkID0gJ3R4dC1uZXctdG9kby1kZXNjcmlwdGlvbic7XG4gICAgICAgIHRoaXMudHh0RGVzY3JpcHRpb24ubmFtZSA9ICd0eHREZXNjcmlwdGlvbic7XG4gICAgICAgIHRoaXMudHh0RGVzY3JpcHRpb24ucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGxibERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGJsRGVzY3JpcHRpb24uZm9yID0gJ3R4dC1uZXctdG9kby1kZXNjcmlwdGlvbic7XG4gICAgICAgIGxibERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRpdkRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBsYmxEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aGlzLnR4dERlc2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gbGJsRGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZURpYWxvZygpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgdGhpcy5kaWFsb2cuaWQgPSAnZGlhbG9nLW5ldy10b2RvJztcbiAgICAgICAgdGhpcy5kaWFsb2cuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLmRpYWxvZy5hcHBlbmRDaGlsZCh0aGlzLmZvcm0pO1xuICAgIH1cblxuICAgIGRyYXcoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRpYWxvZyk7XG4gICAgfVxuXG4gICAgb3BlbkRpYWxvZyhleGlzdGluZ1RvZG8sIHByb2plY3QsIHJlZnJlc2hQYWdlRnVuY3Rpb24sIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1RvZG8gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudHh0VGl0bGUudmFsdWUgPSBleGlzdGluZ1RvZG8udGl0bGU7XG4gICAgICAgICAgICB0aGlzLnNlbFByaW9yaXR5LnZhbHVlID0gZXhpc3RpbmdUb2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy5kdER1ZURhdGUudmFsdWUgPSBleGlzdGluZ1RvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMudHh0RGVzY3JpcHRpb24udmFsdWUgPSBleGlzdGluZ1RvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmJ0blNhdmUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHByb2plY3QuZmluZFRvZG9JbmRleChleGlzdGluZ1RvZG8uaWQpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2luZGV4XS50aXRsZSA9IHRoaXMudHh0VGl0bGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NbaW5kZXhdLnByaW9yaXR5ID0gdGhpcy5zZWxQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvc1tpbmRleF0uZHVlRGF0ZSA9IHRoaXMuZHREdWVEYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IHRoaXMudHh0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoUGFnZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuU2F2ZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aGlzLnR4dFRpdGxlLnZhbHVlLCB0aGlzLnR4dERlc2NyaXB0aW9uLnZhbHVlLCB0aGlzLmR0RHVlRGF0ZS52YWx1ZSwgdGhpcy5zZWxQcmlvcml0eS52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoUGFnZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1RvZG9EaWFsb2c7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0b2Rvcykge1xuICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuXG4gICAgZmluZFRvZG9JbmRleChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSBpZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyhpZCkge1xuICAgICAgICBsZXQgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZmluZFRvZG9JbmRleChpZCk7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBQcm9qZWN0TGlzdCB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgZmluZFByb2plY3RJbmRleChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgICBsZXQgaW5kZXhUb1JlbW92ZSA9IHRoaXMuZmluZFByb2plY3RJbmRleChpZCk7XG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4VG9SZW1vdmUsIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7IiwiaW1wb3J0IFRvZG9Eb21VdGlscyBmcm9tICcuL3RvZG9Eb21VdGlscy5qcyc7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSAnLi9kb21VdGlscy5qcyc7XG5pbXBvcnQgTmV3VG9kb0RpYWxvZyBmcm9tICcuL25ld1RvZG9EaWFsb2cuanMnO1xuXG5jbGFzcyBQcm9qZWN0UGFnZSB7XG4gICAgXG4gICAgcGFyZW50Q29udGFpbmVyO1xuICAgIHByb2plY3Q7XG4gICAgcmV0dXJuRnVuY3Rpb247XG4gICAgbmV3VG9kb0RpYWxvZztcbiAgICBwYWdlSGVhZGVyO1xuICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocGFyZW50Q29udGFpbmVyLCBwcm9qZWN0LCByZXR1cm5GdW5jdGlvbiwgZGF0YVBlcnNpc3RlbmNlRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wYXJlbnRDb250YWluZXIgPSBwYXJlbnRDb250YWluZXI7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMucmV0dXJuRnVuY3Rpb24gPSByZXR1cm5GdW5jdGlvbjtcbiAgICAgICAgdGhpcy5uZXdUb2RvRGlhbG9nID0gbmV3IE5ld1RvZG9EaWFsb2coKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGFnZUhlYWRlcigpO1xuICAgICAgICB0aGlzLmRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uID0gZGF0YVBlcnNpc3RlbmNlRnVuY3Rpb247XG4gICAgfVxuICAgIFxuICAgIGluaXRpYWxpemVQYWdlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBkaXZQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2UGFnZVRpdGxlLmlkID0gJ3BhZ2UtdGl0bGUnO1xuICAgICAgICBkaXZQYWdlVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XG5cbiAgICAgICAgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5CYWNrLmlkID0gJ2J0bi1iYWNrJztcbiAgICAgICAgYnRuQmFjay50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ0bkJhY2suY2xhc3NMaXN0LmFkZCgnaWNvbicsICdiYWNrJyk7XG4gICAgICAgIGJ0bkJhY2sub25jbGljayA9IHRoaXMucmV0dXJuRnVuY3Rpb247XG5cbiAgICAgICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bkFkZC5pZCA9ICdidG4tYWRkLXRvZG8nO1xuICAgICAgICBidG5BZGQudHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidG5BZGQuY2xhc3NMaXN0LmFkZCgnaWNvbicsICdhZGQnKTtcbiAgICAgICAgYnRuQWRkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5ld1RvZG9EaWFsb2cub3BlbkRpYWxvZyhudWxsLCB0aGlzLnByb2plY3QsIHRoaXMuZHJhdy5iaW5kKHRoaXMpLCB0aGlzLmRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKGRpdlBhZ2VUaXRsZSk7XG4gICAgICAgIHRoaXMucGFnZUhlYWRlci5hcHBlbmRDaGlsZChidG5CYWNrKTtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKGJ0bkFkZCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgRG9tVXRpbHMuY2xlYXJDb250YWluZXIodGhpcy5wYXJlbnRDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMucGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucGFnZUhlYWRlcik7XG4gICAgICAgIHRoaXMucGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUGFnZUNvbnRlbnQoKSk7XG4gICAgICAgIHRoaXMubmV3VG9kb0RpYWxvZy5kcmF3KHRoaXMucGFyZW50Q29udGFpbmVyKTtcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGRpdlBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlBhZ2VDb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gICAgICAgIGRpdlBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVG9kb0xpc3QoKSk7XG5cbiAgICAgICAgcmV0dXJuIGRpdlBhZ2VDb250ZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZVRvZG9MaXN0KCkge1xuICAgICAgICBjb25zdCBkaXZUb2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZUb2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcblxuICAgICAgICB0aGlzLnByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1RvZG9EaWFsb2cub3BlbkRpYWxvZyh0b2RvLCB0aGlzLnByb2plY3QsIHRoaXMuZHJhdy5iaW5kKHRoaXMpLCB0aGlzLmRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdC5yZW1vdmVUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVBlcnNpc3RlbmNlRnVuY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdlRvZG9MaXN0LmFwcGVuZENoaWxkKFRvZG9Eb21VdGlscy5jcmVhdGVUb2RvRWxlbWVudCh0b2RvLCBlZGl0RnVuY3Rpb24sIGRlbGV0ZUZ1bmN0aW9uLCB0aGlzLmRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkaXZUb2RvTGlzdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RQYWdlOyIsImltcG9ydCBQcm9qZWN0UGFnZSBmcm9tICcuL3Byb2plY3RQYWdlLmpzJztcbmltcG9ydCBEb21VdGlscyBmcm9tICcuL2RvbVV0aWxzLmpzJztcbmltcG9ydCBOZXdQcm9qZWN0RGlhbG9nIGZyb20gJy4vbmV3UHJvamVjdERpYWxvZy5qcyc7XG5cbmNsYXNzIFByb2plY3RzUGFnZSB7XG5cbiAgICBwYXJlbnRDb250YWluZXI7XG4gICAgcHJvamVjdExpc3Q7XG4gICAgbmV3UHJvamVjdERpYWxvZztcbiAgICBwYWdlSGVhZGVyO1xuICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHBhcmVudENvbnRhaW5lciwgcHJvamVjdExpc3QsIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMucGFyZW50Q29udGFpbmVyID0gcGFyZW50Q29udGFpbmVyO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0ID0gcHJvamVjdExpc3Q7XG4gICAgICAgIHRoaXMubmV3UHJvamVjdERpYWxvZyA9IG5ldyBOZXdQcm9qZWN0RGlhbG9nKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBhZ2VIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhUGVyc2lzdGVuY2VGdW5jdGlvbiA9IGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVQYWdlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBkaXZQYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2UGFnZVRpdGxlLmlkID0gJ3BhZ2UtdGl0bGUnO1xuICAgICAgICBkaXZQYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5BZGQuaWQgPSAnYnRuLWFkZCc7XG4gICAgICAgIGJ0bkFkZC50eXBlID0gJ2J1dHRvbidcbiAgICAgICAgYnRuQWRkLmNsYXNzTGlzdC5hZGQoJ2ljb24nLCAnYWRkJyk7XG4gICAgICAgIGJ0bkFkZC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXdQcm9qZWN0RGlhbG9nLm9wZW5EaWFsb2cobnVsbCwgdGhpcy5wcm9qZWN0TGlzdCwgdGhpcy5kcmF3LmJpbmQodGhpcyksIHRoaXMuZGF0YVBlcnNpc3RlbmNlRnVuY3Rpb24pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICB0aGlzLnBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2UGFnZVRpdGxlKTtcbiAgICAgICAgdGhpcy5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKGJ0bkFkZCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhZ2VDb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRGl2UHJvamVjdExpc3QoKSk7XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VDb250ZW50O1xuICAgIH1cblxuICAgIGNyZWF0ZURpdlByb2plY3RMaXN0KCkge1xuICAgICAgICBjb25zdCBkaXZQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZQcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvamVjdExpc3QucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IGRpdlByb2plY3RMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUHJvamVjdChwcm9qZWN0KSkpO1xuXG4gICAgICAgIHJldHVybiBkaXZQcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBEb21VdGlscy5jbGVhckNvbnRhaW5lcih0aGlzLnBhcmVudENvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VIZWFkZXIpO1xuICAgICAgICB0aGlzLnBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVBhZ2VDb250ZW50KCkpO1xuICAgICAgICB0aGlzLm5ld1Byb2plY3REaWFsb2cuZHJhdyh0aGlzLnBhcmVudENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGRpdlByb2plY3QuaWQgPSBwcm9qZWN0LmlkO1xuXG4gICAgICAgIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkpO1xuICAgICAgICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUHJvamVjdEJ1dHRvbnMocHJvamVjdCkpO1xuXG4gICAgICAgIGRpdlByb2plY3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYWdlID0gbmV3IFByb2plY3RQYWdlKHRoaXMucGFyZW50Q29udGFpbmVyLCBwcm9qZWN0LCB0aGlzLmRyYXcuYmluZCh0aGlzKSwgdGhpcy5kYXRhUGVyc2lzdGVuY2VGdW5jdGlvbik7XG4gICAgICAgICAgICBwcm9qZWN0UGFnZS5kcmF3KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRpdlByb2plY3Q7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdFRpdGxlKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgZGl2UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgZGl2UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICByZXR1cm4gZGl2UHJvamVjdFRpdGxlO1xuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RCdXR0b25zKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgYnRuRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5FZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnLCAnaWNvbicpO1xuICAgICAgICBidG5FZGl0LnR5cGU9J2J1dHRvbic7XG5cbiAgICAgICAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5ld1Byb2plY3REaWFsb2cub3BlbkRpYWxvZyhwcm9qZWN0LCB0aGlzLnByb2plY3RMaXN0LCB0aGlzLmRyYXcuYmluZCh0aGlzKSwgdGhpcy5kYXRhUGVyc2lzdGVuY2VGdW5jdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJywgJ2ljb24nKTtcbiAgICAgICAgYnRuRGVsZXRlLnR5cGU9J2J1dHRvbic7XG4gICAgICAgIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RMaXN0LnJlbW92ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXZQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZQcm9qZWN0QnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b24tbGlzdCcpO1xuICAgICAgICBkaXZQcm9qZWN0QnV0dG9ucy5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgICAgICAgZGl2UHJvamVjdEJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcblxuICAgICAgICByZXR1cm4gZGl2UHJvamVjdEJ1dHRvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuICAgICAgICB0aGlzLmlkID0gdXVpZHY0KCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICAgIH1cblxuICAgIHJldmVyc2VJc0RvbmUoKSB7XG4gICAgICAgIHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiLCJjbGFzcyBUb2RvRG9tVXRpbHMge1xuXG4gICAgc3RhdGljIGNyZWF0ZVRvZG9FbGVtZW50KHRvZG8sIGVkaXRGdW5jdGlvbiwgZGVsZXRlRnVuY3Rpb24sIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpdlRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDaGVja2JveCh0b2RvLCBkYXRhUGVyc2lzdGVuY2VGdW5jdGlvbikpO1xuICAgICAgICBkaXZUb2RvLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGV4dENvbnRlbnQodG9kby50aXRsZSwgdG9kby5kZXNjcmlwdGlvbikpO1xuICAgICAgICBkaXZUb2RvLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRHVlRGF0ZSh0b2RvLmR1ZURhdGUpKTtcbiAgICAgICAgZGl2VG9kby5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJ1dHRvbnMoZWRpdEZ1bmN0aW9uLCBkZWxldGVGdW5jdGlvbikpO1xuICAgICAgICB0aGlzLnNldFRvZG9Qcmlvcml0eShkaXZUb2RvLCB0b2RvLnByaW9yaXR5KTtcblxuICAgICAgICByZXR1cm4gZGl2VG9kbztcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHNldFRvZG9Qcmlvcml0eShkaXZUb2RvLCBwcmlvcml0eSkge1xuICAgICAgICBzd2l0Y2gocGFyc2VJbnQocHJpb3JpdHkpKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZGl2VG9kby5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkaXZUb2RvLmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGRpdlRvZG8uY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNoZWNrYm94KHRvZG8sIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoa0lzRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoa0lzRG9uZS50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgY2hrSXNEb25lLmNoZWNrZWQgPSB0b2RvLmlzRG9uZTtcbiAgICAgICAgY2hrSXNEb25lLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvLnJldmVyc2VJc0RvbmUoKTtcbiAgICAgICAgICAgIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoa0lzRG9uZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGV4dENvbnRlbnQodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICAgICAgZGl2VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICBjb25zdCBkaXZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRpdkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGl2VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2VGV4dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgndG9kby10ZXh0LWNvbnRlbnQnKTtcbiAgICAgICAgZGl2VGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuICAgICAgICBkaXZUZXh0Q29udGVudC5hcHBlbmRDaGlsZChkaXZEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGRpdlRleHRDb250ZW50O1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVEdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgZGl2RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXZEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKTtcbiAgICAgICAgZGl2RHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICAgICAgcmV0dXJuIGRpdkR1ZURhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUJ1dHRvbnMoZWRpdEZ1bmN0aW9uLCBkZWxldGVGdW5jdGlvbikge1xuICAgICAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bkVkaXQuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBidG5FZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgYnRuRWRpdC5vbmNsaWNrID0gZWRpdEZ1bmN0aW9uO1xuXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGJ0bkRlbGV0ZS5vbmNsaWNrID0gZGVsZXRlRnVuY3Rpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXZCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWxpc3QnKTtcbiAgICAgICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgICAgICAgZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRpdkJ1dHRvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvRG9tVXRpbHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgUHJvamVjdHNQYWdlIGZyb20gJy4vcHJvamVjdHNQYWdlLmpzJztcbmltcG9ydCBMb2NhbFN0b3JhZ2VVdGlscyBmcm9tICcuL2xvY2FsU3RvcmFnZVV0aWxzLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBMb2NhbFN0b3JhZ2VVdGlscy5yZWFkUHJvamVjdExpc3QoKTtcbmNvbnN0IGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uID0gKCkgPT4gTG9jYWxTdG9yYWdlVXRpbHMud3JpdGVQcm9qZWN0TGlzdChwcm9qZWN0TGlzdCk7XG5cbmNvbnN0IHByb2plY3RzUGFnZSA9IG5ldyBQcm9qZWN0c1BhZ2UoYm9keSwgcHJvamVjdExpc3QsIGRhdGFQZXJzaXN0ZW5jZUZ1bmN0aW9uKTtcbnByb2plY3RzUGFnZS5kcmF3KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9