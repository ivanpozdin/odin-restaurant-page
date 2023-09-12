"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/home-background.jpg */ "./src/imgs/home-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Heebo);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 62.5%;
  font-family: "Heebo", sans-serif;
}

body {
  margin: 0;
}
.header {
  padding: 0 10ch;
  display: flex;
  align-items: center;
  background-color: black;
  color: #fff;
}

.header h1 {
  margin-right: auto;
  font-size: 3rem;
}

.header h1 span {
  font-size: 1.5rem;
  font-weight: lighter;
}

.section-btn {
  color: #fff;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: none;
  border-bottom: transparent 0.2rem solid;
  background-color: transparent;
}

.section-btn:hover {
  border-bottom: #fff 0.2rem solid;
  background-color: #2c2c2cce;
}

#home-background-img {
  width: 100%;
}

.menu {
  background-color: #ffffff;
}

.menu h1 {
  text-align: center;
  font-size: 4rem;
  margin: 1rem;
}

.food-section-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  column-gap: 3rem;
  row-gap: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  justify-content: space-between;
}

.food-card {
  box-sizing: border-box;
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr 1fr;
  border-bottom: solid 0.2rem #000;
  column-gap: 2rem;
  padding-bottom: 1rem;
}

.food-card img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  grid-row-start: 1;
  grid-column: 1/3;
}
.food-card .name-food {
  grid-row-start: 2;
  grid-column: 1/3;
  font-size: 2.5rem;
  margin: 0;
}

.food-card .price-food {
  grid-row-start: 3;
  grid-column-start: 1;
  font-size: 4rem;
  margin: 0;
  justify-self: self-end;
  align-self: center;
}

.food-card .order-food-btn {
  grid-row-start: 3;
  grid-column-start: 2;
  font-size: 2rem;
  justify-self: self-start;
  align-self: center;
  padding: 1rem 2.5rem;
  background-color: #a4442a;
  color: #fff;
  border-radius: 2rem;
}

#content {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  min-height: 100vh;
}

.contact-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.contacts {
  font-size: 3rem;
  width: 70%;

  background-color: #ffffffae;
  color: #000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contacts p {
  margin: 0;
}

.contacts img {
  width: 3rem;
}

.contacts iframe {
  align-self: center;
}

.contact-card {
  display: flex;
  gap: 1rem;
}

#home-restaurant-info-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

#home-restaurant-info-container p {
  margin: 0;
  font-size: 3rem;
  background-color: #ffffffcf;
  width: 70%;
  padding: 5rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE,SAAS;AACX;AACA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,uCAAuC;EACvC,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,kCAAkC;EAClC,8BAA8B;EAC9B,gCAAgC;EAChC,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,SAAS;EACT,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,wBAAwB;EACxB,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,yDAAmD;EACnD,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,UAAU;;EAEV,2BAA2B;EAC3B,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,2BAA2B;EAC3B,UAAU;EACV,aAAa;AACf","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Heebo\");\n:root {\n  font-size: 62.5%;\n  font-family: \"Heebo\", sans-serif;\n}\n\nbody {\n  margin: 0;\n}\n.header {\n  padding: 0 10ch;\n  display: flex;\n  align-items: center;\n  background-color: black;\n  color: #fff;\n}\n\n.header h1 {\n  margin-right: auto;\n  font-size: 3rem;\n}\n\n.header h1 span {\n  font-size: 1.5rem;\n  font-weight: lighter;\n}\n\n.section-btn {\n  color: #fff;\n  padding: 1rem 2rem;\n  font-size: 2rem;\n  border: none;\n  border-bottom: transparent 0.2rem solid;\n  background-color: transparent;\n}\n\n.section-btn:hover {\n  border-bottom: #fff 0.2rem solid;\n  background-color: #2c2c2cce;\n}\n\n#home-background-img {\n  width: 100%;\n}\n\n.menu {\n  background-color: #ffffff;\n}\n\n.menu h1 {\n  text-align: center;\n  font-size: 4rem;\n  margin: 1rem;\n}\n\n.food-section-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 30rem);\n  column-gap: 3rem;\n  row-gap: 3rem;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  justify-content: space-between;\n}\n\n.food-card {\n  box-sizing: border-box;\n  display: grid;\n  width: 100%;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: 1fr 1fr;\n  border-bottom: solid 0.2rem #000;\n  column-gap: 2rem;\n  padding-bottom: 1rem;\n}\n\n.food-card img {\n  width: 100%;\n  aspect-ratio: 1/1;\n  object-fit: cover;\n  grid-row-start: 1;\n  grid-column: 1/3;\n}\n.food-card .name-food {\n  grid-row-start: 2;\n  grid-column: 1/3;\n  font-size: 2.5rem;\n  margin: 0;\n}\n\n.food-card .price-food {\n  grid-row-start: 3;\n  grid-column-start: 1;\n  font-size: 4rem;\n  margin: 0;\n  justify-self: self-end;\n  align-self: center;\n}\n\n.food-card .order-food-btn {\n  grid-row-start: 3;\n  grid-column-start: 2;\n  font-size: 2rem;\n  justify-self: self-start;\n  align-self: center;\n  padding: 1rem 2.5rem;\n  background-color: #a4442a;\n  color: #fff;\n  border-radius: 2rem;\n}\n\n#content {\n  background-image: url(\"./imgs/home-background.jpg\");\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.contact-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.contacts {\n  font-size: 3rem;\n  width: 70%;\n\n  background-color: #ffffffae;\n  color: #000;\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.contacts p {\n  margin: 0;\n}\n\n.contacts img {\n  width: 3rem;\n}\n\n.contacts iframe {\n  align-self: center;\n}\n\n.contact-card {\n  display: flex;\n  gap: 1rem;\n}\n\n#home-restaurant-info-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#home-restaurant-info-container p {\n  margin: 0;\n  font-size: 3rem;\n  background-color: #ffffffcf;\n  width: 70%;\n  padding: 5rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _render_load_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-load-page.js */ "./src/render-load-page.js");
/* harmony import */ var _render_home_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-home-content.js */ "./src/render-home-content.js");
/* harmony import */ var _render_menu_content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-menu-content.js */ "./src/render-menu-content.js");
/* harmony import */ var _render_contact_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-contact-content */ "./src/render-contact-content.js");






(0,_render_load_page_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const contentContainer = document.querySelector("div#content");
(0,_render_home_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])(contentContainer);

document.getElementById("home-btn").addEventListener("click", () => {
  console.log("home");
  (0,_render_home_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])(contentContainer);
});
document.getElementById("menu-btn").addEventListener("click", () => {
  console.log("menu");
  (0,_render_menu_content_js__WEBPACK_IMPORTED_MODULE_3__["default"])(contentContainer);
});
document.getElementById("contact-btn").addEventListener("click", () => {
  (0,_render_contact_content__WEBPACK_IMPORTED_MODULE_4__["default"])(contentContainer);
});


/***/ }),

/***/ "./src/render-contact-content.js":
/*!***************************************!*\
  !*** ./src/render-contact-content.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContactContent)
/* harmony export */ });
/* harmony import */ var _imgs_icons_location_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/icons/location.svg */ "./src/imgs/icons/location.svg");
/* harmony import */ var _imgs_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/icons/phone.svg */ "./src/imgs/icons/phone.svg");
/* harmony import */ var _imgs_icons_mail_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/icons/mail.svg */ "./src/imgs/icons/mail.svg");




function renderContactContent(element) {
  const contactHTML = `
  <div class="contact-container">
    <div class="contacts">
    <div class="contact-card">
      <img
        src="${_imgs_icons_location_svg__WEBPACK_IMPORTED_MODULE_0__}"
        alt="Location"
        srcset=""
      />
      <p id="address">301 Queen Anne Ave N, Seattle, WA 98109, USA</p>
    </div>
    <div class="contact-card">
      <img src="${_imgs_icons_phone_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Phone" srcset="" />
      <p id="phone">+1(206)828-6324</p>
    </div>
    <div class="contact-card">
      <img src="${_imgs_icons_mail_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Email" srcset="" />
      <p id="email">pozdinni@gmail.com</p>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1428.6949123044308!2d-122.35765117846071!3d47.62148821830265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901544eab22879%3A0xc0b049c099f33870!2s301%20Queen%20Anne%20Ave%20N%2C%20Seattle%2C%20WA%2098109%2C%20USA!5e0!3m2!1sen!2sge!4v1694522366599!5m2!1sen!2sge"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
    </div>  
</div>  
  `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", contactHTML);
}


/***/ }),

/***/ "./src/render-home-content.js":
/*!************************************!*\
  !*** ./src/render-home-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  const homeHTML = `
  <div id="home-restaurant-info-container">
  <p>
  POZDINNI is the best totally fictional pasta restaurant in Seattle. We've been cooking delicious italian dishes in website's author's imagination since 1977. This non-existent restaurant proved its food taste and quality by generations of our customers, number of which is suspiciously close to zero.
  </p>
  </div>
    `;
  element.innerHTML = "";
  element.insertAdjacentHTML("afterbegin", homeHTML);
}


/***/ }),

/***/ "./src/render-load-page.js":
/*!*********************************!*\
  !*** ./src/render-load-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLoadPage)
/* harmony export */ });
/* harmony import */ var _imgs_icon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/icon.jpg */ "./src/imgs/icon.jpg");


function renderLoadPage() {
  document.querySelector("html").setAttribute("lang", "en-us");
  document.querySelector("title").textContent = "Pozdinni";
  const tabIcon = document.createElement("link");
  tabIcon.setAttribute("rel", "icon");
  tabIcon.setAttribute("href", _imgs_icon_jpg__WEBPACK_IMPORTED_MODULE_0__);
  document.querySelector("html").insertAdjacentElement("beforeend", tabIcon);

  const loadPageHTML = `
    <div class="header">
      <h1>POZDINNI <span>We're cooking best pasta in town since 1977</span></h1>
      <button class="section-btn" id="home-btn">HOME</button>
      <button class="section-btn" id="menu-btn">MENU</button>
      <button class="section-btn" id="contact-btn">CONTACT</button>
    </div>
    <div class="" id="content">
    </div>
    <div class="footer"></div>
    `;
  document.querySelector("body").insertAdjacentHTML("afterbegin", loadPageHTML);
}


/***/ }),

/***/ "./src/render-menu-content.js":
/*!************************************!*\
  !*** ./src/render-menu-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenuContent)
/* harmony export */ });
/* harmony import */ var _imgs_caponata_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/caponata-pasta.jpg */ "./src/imgs/caponata-pasta.jpg");
/* harmony import */ var _imgs_chicken_pasta_bake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/chicken_pasta_bake.jpg */ "./src/imgs/chicken_pasta_bake.jpg");
/* harmony import */ var _imgs_gnocchi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/gnocchi.jpg */ "./src/imgs/gnocchi.jpg");
/* harmony import */ var _imgs_salmonpasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/salmonpasta.jpg */ "./src/imgs/salmonpasta.jpg");
/* harmony import */ var _imgs_spaghetti_with_meatballs_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/spaghetti_with_meatballs.jpg */ "./src/imgs/spaghetti_with_meatballs.jpg");
/* harmony import */ var _imgs_spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/spaghetti-carbonara.jpg */ "./src/imgs/spaghetti-carbonara.jpg");
/* harmony import */ var _imgs_pasta_bolognese_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/pasta-bolognese.jpg */ "./src/imgs/pasta-bolognese.jpg");
/* harmony import */ var _imgs_cheesy_ham_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/cheesy-ham.jpg */ "./src/imgs/cheesy-ham.jpg");
/* harmony import */ var _imgs_orange_juice_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/orange-juice.jpg */ "./src/imgs/orange-juice.jpg");
/* harmony import */ var _imgs_water_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/water.jpg */ "./src/imgs/water.jpg");
/* harmony import */ var _imgs_coca_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgs/coca.jpg */ "./src/imgs/coca.jpg");
/* harmony import */ var _imgs_beer_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgs/beer.jpg */ "./src/imgs/beer.jpg");













const Food = [
  { name: "Caponata pasta", price: "10$", imageSrc: _imgs_caponata_pasta_jpg__WEBPACK_IMPORTED_MODULE_0__ },
  { name: "Chicken pasta", price: "11$", imageSrc: _imgs_chicken_pasta_bake_jpg__WEBPACK_IMPORTED_MODULE_1__ },
  {
    name: "Chorizo & mozzarella gnocchi bake",
    price: "11.50$",
    imageSrc: _imgs_gnocchi_jpg__WEBPACK_IMPORTED_MODULE_2__,
  },
  { name: "Pasta with salmon & peas", price: "13$", imageSrc: _imgs_salmonpasta_jpg__WEBPACK_IMPORTED_MODULE_3__ },
  { name: "Spaghetti & meatballs", price: "11$", imageSrc: _imgs_spaghetti_with_meatballs_jpg__WEBPACK_IMPORTED_MODULE_4__ },
  { name: "Spaghetti carbonara", price: "14$", imageSrc: _imgs_spaghetti_carbonara_jpg__WEBPACK_IMPORTED_MODULE_5__ },
  { name: "Pasta bolognese", price: "12$", imageSrc: _imgs_pasta_bolognese_jpg__WEBPACK_IMPORTED_MODULE_6__ },
  { name: "Cheesy ham & broccoli pasta", price: "14$", imageSrc: _imgs_cheesy_ham_jpg__WEBPACK_IMPORTED_MODULE_7__ },
];

const Drinks = [
  { name: "Orange juice", price: "6$", imageSrc: _imgs_orange_juice_jpg__WEBPACK_IMPORTED_MODULE_8__ },
  { name: "Water", price: "2$", imageSrc: _imgs_water_jpg__WEBPACK_IMPORTED_MODULE_9__ },
  { name: "Coca-Cola", price: "3$", imageSrc: _imgs_coca_jpg__WEBPACK_IMPORTED_MODULE_10__ },
  { name: "Beer", price: "5$", imageSrc: _imgs_beer_jpg__WEBPACK_IMPORTED_MODULE_11__ },
];

const createFoodCardElement = function (food) {
  const foodCardDiv = document.createElement("div");
  foodCardDiv.classList.add("food-card");
  const imageOfFood = new Image();
  imageOfFood.setAttribute("src", food.imageSrc);
  imageOfFood.setAttribute("alt", food.name);

  foodCardDiv.innerHTML = `
  <h2 class="name-food">${food.name}</h2>
  <p class="price-food">${food.price}</p>
  <button class="order-food-btn">Order</button>
  `;
  foodCardDiv.insertAdjacentElement("afterbegin", imageOfFood);

  return foodCardDiv;
};

const createMenuElement = function () {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");
  menuContainer.insertAdjacentHTML("afterbegin", "<h1>Pasta</h1>");
  menuContainer.insertAdjacentElement("beforeend", createFoodMenu(Food));
  menuContainer.insertAdjacentHTML("beforeend", "<h1>Drinks</h1>");
  menuContainer.insertAdjacentElement("beforeend", createFoodMenu(Drinks));
  return menuContainer;
};

const createFoodMenu = function (foodList) {
  const foodMenuContainer = document.createElement("div");
  foodMenuContainer.classList.add("food-section-container");
  for (const food of foodList) {
    foodMenuContainer.insertAdjacentElement(
      "beforeend",
      createFoodCardElement(food)
    );
  }
  return foodMenuContainer;
};

function renderMenuContent(element) {
  const menu = createMenuElement();
  element.innerHTML = "";
  element.insertAdjacentElement("afterbegin", menu);
}


/***/ }),

/***/ "./src/imgs/beer.jpg":
/*!***************************!*\
  !*** ./src/imgs/beer.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c8c961cfad9d3e847aa.jpg";

/***/ }),

/***/ "./src/imgs/caponata-pasta.jpg":
/*!*************************************!*\
  !*** ./src/imgs/caponata-pasta.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727f280afce07ad963dd.jpg";

/***/ }),

/***/ "./src/imgs/cheesy-ham.jpg":
/*!*********************************!*\
  !*** ./src/imgs/cheesy-ham.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30bf852881901fa3eaf4.jpg";

/***/ }),

/***/ "./src/imgs/chicken_pasta_bake.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/chicken_pasta_bake.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9afc392357a8fb1c4583.jpg";

/***/ }),

/***/ "./src/imgs/coca.jpg":
/*!***************************!*\
  !*** ./src/imgs/coca.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3aac63082de00ad664fb.jpg";

/***/ }),

/***/ "./src/imgs/gnocchi.jpg":
/*!******************************!*\
  !*** ./src/imgs/gnocchi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e0a4a7a6b732aaf78f0.jpg";

/***/ }),

/***/ "./src/imgs/home-background.jpg":
/*!**************************************!*\
  !*** ./src/imgs/home-background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b828c8e347590bc5e8a4.jpg";

/***/ }),

/***/ "./src/imgs/icon.jpg":
/*!***************************!*\
  !*** ./src/imgs/icon.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b33c199005f043419e8.jpg";

/***/ }),

/***/ "./src/imgs/icons/location.svg":
/*!*************************************!*\
  !*** ./src/imgs/icons/location.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c24915a8f3cae8a1fe30.svg";

/***/ }),

/***/ "./src/imgs/icons/mail.svg":
/*!*********************************!*\
  !*** ./src/imgs/icons/mail.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f17b448b5786320cb0b.svg";

/***/ }),

/***/ "./src/imgs/icons/phone.svg":
/*!**********************************!*\
  !*** ./src/imgs/icons/phone.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab63247918b61205af22.svg";

/***/ }),

/***/ "./src/imgs/orange-juice.jpg":
/*!***********************************!*\
  !*** ./src/imgs/orange-juice.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4131af4b973f0a208328.jpg";

/***/ }),

/***/ "./src/imgs/pasta-bolognese.jpg":
/*!**************************************!*\
  !*** ./src/imgs/pasta-bolognese.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4216d79c2f40dfa0706d.jpg";

/***/ }),

/***/ "./src/imgs/salmonpasta.jpg":
/*!**********************************!*\
  !*** ./src/imgs/salmonpasta.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e24296723afb9b963dcf.jpg";

/***/ }),

/***/ "./src/imgs/spaghetti-carbonara.jpg":
/*!******************************************!*\
  !*** ./src/imgs/spaghetti-carbonara.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98f65a5f3b917c253ad5.jpg";

/***/ }),

/***/ "./src/imgs/spaghetti_with_meatballs.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/spaghetti_with_meatballs.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f95be546dbf0cd29ad31.jpg";

/***/ }),

/***/ "./src/imgs/water.jpg":
/*!****************************!*\
  !*** ./src/imgs/water.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e862aefa9731c8b8cd42.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXItY29udGFjdC1jb250ZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci1ob21lLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVuZGVyLWxvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXItbWVudS1jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvaG9tZS1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVlYm8pO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oZWFkZXIgaDEge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhlYWRlciBoMSBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uc2VjdGlvbi1idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQgMC4ycmVtIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlY3Rpb24tYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogI2ZmZiAwLjJyZW0gc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmNjZTtcbn1cblxuI2hvbWUtYmFja2dyb3VuZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWVudSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5mb29kLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMwcmVtKTtcbiAgY29sdW1uLWdhcDogM3JlbTtcbiAgcm93LWdhcDogM3JlbTtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb29kLWNhcmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnJlbSAjMDAwO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvb2QtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cbi5mb29kLWNhcmQgLm5hbWUtZm9vZCB7XG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9vZC1jYXJkIC5wcmljZS1mb29kIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAganVzdGlmeS1zZWxmOiBzZWxmLWVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZm9vZC1jYXJkIC5vcmRlci1mb29kLWJ0biB7XG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAyLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDQ0MmE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4jY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5jb250YWN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3RzIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB3aWR0aDogNzAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhZTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmNvbnRhY3RzIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWN0cyBpbWcge1xuICB3aWR0aDogM3JlbTtcbn1cblxuLmNvbnRhY3RzIGlmcmFtZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cblxuI2hvbWUtcmVzdGF1cmFudC1pbmZvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2hvbWUtcmVzdGF1cmFudC1pbmZvLWNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjZjtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogNXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5REFBbUQ7RUFDbkQsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7O0VBRVYsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlZWJvXFxcIik7XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAwIDEwY2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGVhZGVyIGgxIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLnNlY3Rpb24tYnRuIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQgMC4ycmVtIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5zZWN0aW9uLWJ0bjpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAjZmZmIDAuMnJlbSBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmNjZTtcXG59XFxuXFxuI2hvbWUtYmFja2dyb3VuZC1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5tZW51IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmZvb2Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMHJlbSk7XFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgcm93LWdhcDogM3JlbTtcXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb29kLWNhcmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycmVtICMwMDA7XFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5mb29kLWNhcmQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuLmZvb2QtY2FyZCAubmFtZS1mb29kIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5wcmljZS1mb29kIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXJnaW46IDA7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZm9vZC1jYXJkIC5vcmRlci1mb29kLWJ0biB7XFxuICBncmlkLXJvdy1zdGFydDogMztcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLXN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTQ0NDJhO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1ncy9ob21lLWJhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHdpZHRoOiA3MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYWU7XFxuICBjb2xvcjogIzAwMDtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3RzIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdHMgaW1nIHtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4uY29udGFjdHMgaWZyYW1lIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jaG9tZS1yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZS1yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNmO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCByZW5kZXJMb2FkUGFnZSBmcm9tIFwiLi9yZW5kZXItbG9hZC1wYWdlLmpzXCI7XG5pbXBvcnQgcmVuZGVySG9tZUNvbnRlbnQgZnJvbSBcIi4vcmVuZGVyLWhvbWUtY29udGVudC5qc1wiO1xuaW1wb3J0IHJlbmRlck1lbnVDb250ZW50IGZyb20gXCIuL3JlbmRlci1tZW51LWNvbnRlbnQuanNcIjtcbmltcG9ydCByZW5kZXJDb250YWN0Q29udGVudCBmcm9tIFwiLi9yZW5kZXItY29udGFjdC1jb250ZW50XCI7XG5cbnJlbmRlckxvYWRQYWdlKCk7XG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xucmVuZGVySG9tZUNvbnRlbnQoY29udGVudENvbnRhaW5lcik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJob21lXCIpO1xuICByZW5kZXJIb21lQ29udGVudChjb250ZW50Q29udGFpbmVyKTtcbn0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIm1lbnVcIik7XG4gIHJlbmRlck1lbnVDb250ZW50KGNvbnRlbnRDb250YWluZXIpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlbmRlckNvbnRhY3RDb250ZW50KGNvbnRlbnRDb250YWluZXIpO1xufSk7XG4iLCJpbXBvcnQgbG9jYXRpb25JY29uIGZyb20gXCIuL2ltZ3MvaWNvbnMvbG9jYXRpb24uc3ZnXCI7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gXCIuL2ltZ3MvaWNvbnMvcGhvbmUuc3ZnXCI7XG5pbXBvcnQgbWFpbEljb24gZnJvbSBcIi4vaW1ncy9pY29ucy9tYWlsLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJDb250YWN0Q29udGVudChlbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRhY3RIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkXCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIiR7bG9jYXRpb25JY29ufVwiXG4gICAgICAgIGFsdD1cIkxvY2F0aW9uXCJcbiAgICAgICAgc3Jjc2V0PVwiXCJcbiAgICAgIC8+XG4gICAgICA8cCBpZD1cImFkZHJlc3NcIj4zMDEgUXVlZW4gQW5uZSBBdmUgTiwgU2VhdHRsZSwgV0EgOTgxMDksIFVTQTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7cGhvbmVJY29ufVwiIGFsdD1cIlBob25lXCIgc3Jjc2V0PVwiXCIgLz5cbiAgICAgIDxwIGlkPVwicGhvbmVcIj4rMSgyMDYpODI4LTYzMjQ8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY2FyZFwiPlxuICAgICAgPGltZyBzcmM9XCIke21haWxJY29ufVwiIGFsdD1cIkVtYWlsXCIgc3Jjc2V0PVwiXCIgLz5cbiAgICAgIDxwIGlkPVwiZW1haWxcIj5wb3pkaW5uaUBnbWFpbC5jb208L3A+XG4gICAgPC9kaXY+XG4gICAgPGlmcmFtZVxuICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTQyOC42OTQ5MTIzMDQ0MzA4ITJkLTEyMi4zNTc2NTExNzg0NjA3MSEzZDQ3LjYyMTQ4ODIxODMwMjY1ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg1NDkwMTU0NGVhYjIyODc5JTNBMHhjMGIwNDljMDk5ZjMzODcwITJzMzAxJTIwUXVlZW4lMjBBbm5lJTIwQXZlJTIwTiUyQyUyMFNlYXR0bGUlMkMlMjBXQSUyMDk4MTA5JTJDJTIwVVNBITVlMCEzbTIhMXNlbiEyc2dlITR2MTY5NDUyMjM2NjU5OSE1bTIhMXNlbiEyc2dlXCJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBoZWlnaHQ9XCI0NTBcIlxuICAgICAgc3R5bGU9XCJib3JkZXI6IDBcIlxuICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgID48L2lmcmFtZT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gIFxuPC9kaXY+ICBcbiAgYDtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgY29udGFjdEhUTUwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgY29uc3QgaG9tZUhUTUwgPSBgXG4gIDxkaXYgaWQ9XCJob21lLXJlc3RhdXJhbnQtaW5mby1jb250YWluZXJcIj5cbiAgPHA+XG4gIFBPWkRJTk5JIGlzIHRoZSBiZXN0IHRvdGFsbHkgZmljdGlvbmFsIHBhc3RhIHJlc3RhdXJhbnQgaW4gU2VhdHRsZS4gV2UndmUgYmVlbiBjb29raW5nIGRlbGljaW91cyBpdGFsaWFuIGRpc2hlcyBpbiB3ZWJzaXRlJ3MgYXV0aG9yJ3MgaW1hZ2luYXRpb24gc2luY2UgMTk3Ny4gVGhpcyBub24tZXhpc3RlbnQgcmVzdGF1cmFudCBwcm92ZWQgaXRzIGZvb2QgdGFzdGUgYW5kIHF1YWxpdHkgYnkgZ2VuZXJhdGlvbnMgb2Ygb3VyIGN1c3RvbWVycywgbnVtYmVyIG9mIHdoaWNoIGlzIHN1c3BpY2lvdXNseSBjbG9zZSB0byB6ZXJvLlxuICA8L3A+XG4gIDwvZGl2PlxuICAgIGA7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGhvbWVIVE1MKTtcbn1cbiIsImltcG9ydCB0YWJJY29uU3JjIGZyb20gXCIuL2ltZ3MvaWNvbi5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTG9hZFBhZ2UoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnNldEF0dHJpYnV0ZShcImxhbmdcIiwgXCJlbi11c1wiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLnRleHRDb250ZW50ID0gXCJQb3pkaW5uaVwiO1xuICBjb25zdCB0YWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHRhYkljb24uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwiaWNvblwiKTtcbiAgdGFiSWNvbi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRhYkljb25TcmMpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGFiSWNvbik7XG5cbiAgY29uc3QgbG9hZFBhZ2VIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxoMT5QT1pESU5OSSA8c3Bhbj5XZSdyZSBjb29raW5nIGJlc3QgcGFzdGEgaW4gdG93biBzaW5jZSAxOTc3PC9zcGFuPjwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VjdGlvbi1idG5cIiBpZD1cImhvbWUtYnRuXCI+SE9NRTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY3Rpb24tYnRuXCIgaWQ9XCJtZW51LWJ0blwiPk1FTlU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzZWN0aW9uLWJ0blwiIGlkPVwiY29udGFjdC1idG5cIj5DT05UQUNUPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIlwiIGlkPVwiY29udGVudFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj48L2Rpdj5cbiAgICBgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGxvYWRQYWdlSFRNTCk7XG59XG4iLCJpbXBvcnQgY2Fwb25hdGEgZnJvbSBcIi4vaW1ncy9jYXBvbmF0YS1wYXN0YS5qcGdcIjtcbmltcG9ydCBiYWNrZWRDaGlja2VuIGZyb20gXCIuL2ltZ3MvY2hpY2tlbl9wYXN0YV9iYWtlLmpwZ1wiO1xuaW1wb3J0IGdub2NjaGkgZnJvbSBcIi4vaW1ncy9nbm9jY2hpLmpwZ1wiO1xuaW1wb3J0IHNhbG1vblBhc3RhIGZyb20gXCIuL2ltZ3Mvc2FsbW9ucGFzdGEuanBnXCI7XG5pbXBvcnQgbWVhdGJhbGxzIGZyb20gXCIuL2ltZ3Mvc3BhZ2hldHRpX3dpdGhfbWVhdGJhbGxzLmpwZ1wiO1xuaW1wb3J0IGNhcmJvbmFyYSBmcm9tIFwiLi9pbWdzL3NwYWdoZXR0aS1jYXJib25hcmEuanBnXCI7XG5pbXBvcnQgYm9sb2duZXNlIGZyb20gXCIuL2ltZ3MvcGFzdGEtYm9sb2duZXNlLmpwZ1wiO1xuaW1wb3J0IGNoZWVzeUhhbSBmcm9tIFwiLi9pbWdzL2NoZWVzeS1oYW0uanBnXCI7XG5pbXBvcnQgb3JhbmdlSnVpY2UgZnJvbSBcIi4vaW1ncy9vcmFuZ2UtanVpY2UuanBnXCI7XG5pbXBvcnQgd2F0ZXIgZnJvbSBcIi4vaW1ncy93YXRlci5qcGdcIjtcbmltcG9ydCBjb2NhIGZyb20gXCIuL2ltZ3MvY29jYS5qcGdcIjtcbmltcG9ydCBiZWVyIGZyb20gXCIuL2ltZ3MvYmVlci5qcGdcIjtcblxuY29uc3QgRm9vZCA9IFtcbiAgeyBuYW1lOiBcIkNhcG9uYXRhIHBhc3RhXCIsIHByaWNlOiBcIjEwJFwiLCBpbWFnZVNyYzogY2Fwb25hdGEgfSxcbiAgeyBuYW1lOiBcIkNoaWNrZW4gcGFzdGFcIiwgcHJpY2U6IFwiMTEkXCIsIGltYWdlU3JjOiBiYWNrZWRDaGlja2VuIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNob3Jpem8gJiBtb3p6YXJlbGxhIGdub2NjaGkgYmFrZVwiLFxuICAgIHByaWNlOiBcIjExLjUwJFwiLFxuICAgIGltYWdlU3JjOiBnbm9jY2hpLFxuICB9LFxuICB7IG5hbWU6IFwiUGFzdGEgd2l0aCBzYWxtb24gJiBwZWFzXCIsIHByaWNlOiBcIjEzJFwiLCBpbWFnZVNyYzogc2FsbW9uUGFzdGEgfSxcbiAgeyBuYW1lOiBcIlNwYWdoZXR0aSAmIG1lYXRiYWxsc1wiLCBwcmljZTogXCIxMSRcIiwgaW1hZ2VTcmM6IG1lYXRiYWxscyB9LFxuICB7IG5hbWU6IFwiU3BhZ2hldHRpIGNhcmJvbmFyYVwiLCBwcmljZTogXCIxNCRcIiwgaW1hZ2VTcmM6IGNhcmJvbmFyYSB9LFxuICB7IG5hbWU6IFwiUGFzdGEgYm9sb2duZXNlXCIsIHByaWNlOiBcIjEyJFwiLCBpbWFnZVNyYzogYm9sb2duZXNlIH0sXG4gIHsgbmFtZTogXCJDaGVlc3kgaGFtICYgYnJvY2NvbGkgcGFzdGFcIiwgcHJpY2U6IFwiMTQkXCIsIGltYWdlU3JjOiBjaGVlc3lIYW0gfSxcbl07XG5cbmNvbnN0IERyaW5rcyA9IFtcbiAgeyBuYW1lOiBcIk9yYW5nZSBqdWljZVwiLCBwcmljZTogXCI2JFwiLCBpbWFnZVNyYzogb3JhbmdlSnVpY2UgfSxcbiAgeyBuYW1lOiBcIldhdGVyXCIsIHByaWNlOiBcIjIkXCIsIGltYWdlU3JjOiB3YXRlciB9LFxuICB7IG5hbWU6IFwiQ29jYS1Db2xhXCIsIHByaWNlOiBcIjMkXCIsIGltYWdlU3JjOiBjb2NhIH0sXG4gIHsgbmFtZTogXCJCZWVyXCIsIHByaWNlOiBcIjUkXCIsIGltYWdlU3JjOiBiZWVyIH0sXG5dO1xuXG5jb25zdCBjcmVhdGVGb29kQ2FyZEVsZW1lbnQgPSBmdW5jdGlvbiAoZm9vZCkge1xuICBjb25zdCBmb29kQ2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RDYXJkRGl2LmNsYXNzTGlzdC5hZGQoXCJmb29kLWNhcmRcIik7XG4gIGNvbnN0IGltYWdlT2ZGb29kID0gbmV3IEltYWdlKCk7XG4gIGltYWdlT2ZGb29kLnNldEF0dHJpYnV0ZShcInNyY1wiLCBmb29kLmltYWdlU3JjKTtcbiAgaW1hZ2VPZkZvb2Quc2V0QXR0cmlidXRlKFwiYWx0XCIsIGZvb2QubmFtZSk7XG5cbiAgZm9vZENhcmREaXYuaW5uZXJIVE1MID0gYFxuICA8aDIgY2xhc3M9XCJuYW1lLWZvb2RcIj4ke2Zvb2QubmFtZX08L2gyPlxuICA8cCBjbGFzcz1cInByaWNlLWZvb2RcIj4ke2Zvb2QucHJpY2V9PC9wPlxuICA8YnV0dG9uIGNsYXNzPVwib3JkZXItZm9vZC1idG5cIj5PcmRlcjwvYnV0dG9uPlxuICBgO1xuICBmb29kQ2FyZERpdi5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGltYWdlT2ZGb29kKTtcblxuICByZXR1cm4gZm9vZENhcmREaXY7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIG1lbnVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcIjxoMT5QYXN0YTwvaDE+XCIpO1xuICBtZW51Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjcmVhdGVGb29kTWVudShGb29kKSk7XG4gIG1lbnVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPGgxPkRyaW5rczwvaDE+XCIpO1xuICBtZW51Q29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjcmVhdGVGb29kTWVudShEcmlua3MpKTtcbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVGb29kTWVudSA9IGZ1bmN0aW9uIChmb29kTGlzdCkge1xuICBjb25zdCBmb29kTWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb29kLXNlY3Rpb24tY29udGFpbmVyXCIpO1xuICBmb3IgKGNvbnN0IGZvb2Qgb2YgZm9vZExpc3QpIHtcbiAgICBmb29kTWVudUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgY3JlYXRlRm9vZENhcmRFbGVtZW50KGZvb2QpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZm9vZE1lbnVDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNZW51Q29udGVudChlbGVtZW50KSB7XG4gIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51RWxlbWVudCgpO1xuICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBtZW51KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==