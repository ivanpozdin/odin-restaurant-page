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
  POZDINNI is the best totally fictional pasta restaurant in Chicago. We've been cooking delicious italian dishes in website's author's imagination since 1977. This non-existent restaurant proved its food taste and quality by generations of our customers, number of which is suspiciously close to zero.
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
function renderLoadPage() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci1jb250YWN0LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVuZGVyLWhvbWUtY29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZW5kZXItbG9hZC1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3JlbmRlci1tZW51LWNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9ob21lLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZWVibyk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwY2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlciBoMSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uaGVhZGVyIGgxIHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5zZWN0aW9uLWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCAwLjJyZW0gc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VjdGlvbi1idG46aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAjZmZmIDAuMnJlbSBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyY2NlO1xufVxuXG4jaG9tZS1iYWNrZ3JvdW5kLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tZW51IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLmZvb2Qtc2VjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzByZW0pO1xuICBjb2x1bW4tZ2FwOiAzcmVtO1xuICByb3ctZ2FwOiAzcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvb2QtY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycmVtICMwMDA7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4uZm9vZC1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuLmZvb2QtY2FyZCAubmFtZS1mb29kIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb29kLWNhcmQgLnByaWNlLWZvb2Qge1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5mb29kLWNhcmQgLm9yZGVyLWZvb2QtYnRuIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGp1c3RpZnktc2VsZjogc2VsZi1zdGFydDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0NDQyYTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbiNjb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGFjdHMge1xuICBmb250LXNpemU6IDNyZW07XG4gIHdpZHRoOiA3MCU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmFlO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uY29udGFjdHMgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhY3RzIGltZyB7XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4uY29udGFjdHMgaWZyYW1lIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY29udGFjdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jaG9tZS1yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jaG9tZS1yZXN0YXVyYW50LWluZm8tY29udGFpbmVyIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNmO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiA1cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTs7RUFFViwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVlYm9cXFwiKTtcXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWVib1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDAgMTBjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5oZWFkZXIgaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4uc2VjdGlvbi1idG4ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCAwLjJyZW0gc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnNlY3Rpb24tYnRuOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206ICNmZmYgMC4ycmVtIHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyY2NlO1xcbn1cXG5cXG4jaG9tZS1iYWNrZ3JvdW5kLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm1lbnUgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uZm9vZC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMwcmVtKTtcXG4gIGNvbHVtbi1nYXA6IDNyZW07XFxuICByb3ctZ2FwOiAzcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvb2QtY2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJyZW0gIzAwMDtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmZvb2QtY2FyZCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uZm9vZC1jYXJkIC5uYW1lLWZvb2Qge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5mb29kLWNhcmQgLnByaWNlLWZvb2Qge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb29kLWNhcmQgLm9yZGVyLWZvb2QtYnRuIHtcXG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNDQ0MmE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWdzL2hvbWUtYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdHMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgd2lkdGg6IDcwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhZTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY29udGFjdHMgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250YWN0cyBpbWcge1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5jb250YWN0cyBpZnJhbWUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNob21lLXJlc3RhdXJhbnQtaW5mby1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNob21lLXJlc3RhdXJhbnQtaW5mby1jb250YWluZXIgcCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmY2Y7XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZzogNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHJlbmRlckxvYWRQYWdlIGZyb20gXCIuL3JlbmRlci1sb2FkLXBhZ2UuanNcIjtcbmltcG9ydCByZW5kZXJIb21lQ29udGVudCBmcm9tIFwiLi9yZW5kZXItaG9tZS1jb250ZW50LmpzXCI7XG5pbXBvcnQgcmVuZGVyTWVudUNvbnRlbnQgZnJvbSBcIi4vcmVuZGVyLW1lbnUtY29udGVudC5qc1wiO1xuaW1wb3J0IHJlbmRlckNvbnRhY3RDb250ZW50IGZyb20gXCIuL3JlbmRlci1jb250YWN0LWNvbnRlbnRcIjtcblxucmVuZGVyTG9hZFBhZ2UoKTtcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5yZW5kZXJIb21lQ29udGVudChjb250ZW50Q29udGFpbmVyKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhvbWVcIik7XG4gIHJlbmRlckhvbWVDb250ZW50KGNvbnRlbnRDb250YWluZXIpO1xufSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwibWVudVwiKTtcbiAgcmVuZGVyTWVudUNvbnRlbnQoY29udGVudENvbnRhaW5lcik7XG59KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVuZGVyQ29udGFjdENvbnRlbnQoY29udGVudENvbnRhaW5lcik7XG59KTtcbiIsImltcG9ydCBsb2NhdGlvbkljb24gZnJvbSBcIi4vaW1ncy9pY29ucy9sb2NhdGlvbi5zdmdcIjtcbmltcG9ydCBwaG9uZUljb24gZnJvbSBcIi4vaW1ncy9pY29ucy9waG9uZS5zdmdcIjtcbmltcG9ydCBtYWlsSWNvbiBmcm9tIFwiLi9pbWdzL2ljb25zL21haWwuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RDb250ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgY29udGFjdEhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWN0LWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0c1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiJHtsb2NhdGlvbkljb259XCJcbiAgICAgICAgYWx0PVwiTG9jYXRpb25cIlxuICAgICAgICBzcmNzZXQ9XCJcIlxuICAgICAgLz5cbiAgICAgIDxwIGlkPVwiYWRkcmVzc1wiPjMwMSBRdWVlbiBBbm5lIEF2ZSBOLCBTZWF0dGxlLCBXQSA5ODEwOSwgVVNBPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtwaG9uZUljb259XCIgYWx0PVwiUGhvbmVcIiBzcmNzZXQ9XCJcIiAvPlxuICAgICAgPHAgaWQ9XCJwaG9uZVwiPisxKDIwNik4MjgtNjMyNDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7bWFpbEljb259XCIgYWx0PVwiRW1haWxcIiBzcmNzZXQ9XCJcIiAvPlxuICAgICAgPHAgaWQ9XCJlbWFpbFwiPnBvemRpbm5pQGdtYWlsLmNvbTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8aWZyYW1lXG4gICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNDI4LjY5NDkxMjMwNDQzMDghMmQtMTIyLjM1NzY1MTE3ODQ2MDcxITNkNDcuNjIxNDg4MjE4MzAyNjUhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDU0OTAxNTQ0ZWFiMjI4NzklM0EweGMwYjA0OWMwOTlmMzM4NzAhMnMzMDElMjBRdWVlbiUyMEFubmUlMjBBdmUlMjBOJTJDJTIwU2VhdHRsZSUyQyUyMFdBJTIwOTgxMDklMkMlMjBVU0EhNWUwITNtMiExc2VuITJzZ2UhNHYxNjk0NTIyMzY2NTk5ITVtMiExc2VuITJzZ2VcIlxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cIjQ1MFwiXG4gICAgICBzdHlsZT1cImJvcmRlcjogMFwiXG4gICAgICBhbGxvd2Z1bGxzY3JlZW49XCJcIlxuICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgXG48L2Rpdj4gIFxuICBgO1xuICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjb250YWN0SFRNTCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBob21lSFRNTCA9IGBcbiAgPGRpdiBpZD1cImhvbWUtcmVzdGF1cmFudC1pbmZvLWNvbnRhaW5lclwiPlxuICA8cD5cbiAgUE9aRElOTkkgaXMgdGhlIGJlc3QgdG90YWxseSBmaWN0aW9uYWwgcGFzdGEgcmVzdGF1cmFudCBpbiBDaGljYWdvLiBXZSd2ZSBiZWVuIGNvb2tpbmcgZGVsaWNpb3VzIGl0YWxpYW4gZGlzaGVzIGluIHdlYnNpdGUncyBhdXRob3IncyBpbWFnaW5hdGlvbiBzaW5jZSAxOTc3LiBUaGlzIG5vbi1leGlzdGVudCByZXN0YXVyYW50IHByb3ZlZCBpdHMgZm9vZCB0YXN0ZSBhbmQgcXVhbGl0eSBieSBnZW5lcmF0aW9ucyBvZiBvdXIgY3VzdG9tZXJzLCBudW1iZXIgb2Ygd2hpY2ggaXMgc3VzcGljaW91c2x5IGNsb3NlIHRvIHplcm8uXG4gIDwvcD5cbiAgPC9kaXY+XG4gICAgYDtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaG9tZUhUTUwpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGxvYWRQYWdlSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+UE9aRElOTkkgPHNwYW4+V2UncmUgY29va2luZyBiZXN0IHBhc3RhIGluIHRvd24gc2luY2UgMTk3Nzwvc3Bhbj48L2gxPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY3Rpb24tYnRuXCIgaWQ9XCJob21lLWJ0blwiPkhPTUU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzZWN0aW9uLWJ0blwiIGlkPVwibWVudS1idG5cIj5NRU5VPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VjdGlvbi1idG5cIiBpZD1cImNvbnRhY3QtYnRuXCI+Q09OVEFDVDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJcIiBpZD1cImNvbnRlbnRcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+PC9kaXY+XG4gICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBsb2FkUGFnZUhUTUwpO1xufVxuIiwiaW1wb3J0IGNhcG9uYXRhIGZyb20gXCIuL2ltZ3MvY2Fwb25hdGEtcGFzdGEuanBnXCI7XG5pbXBvcnQgYmFja2VkQ2hpY2tlbiBmcm9tIFwiLi9pbWdzL2NoaWNrZW5fcGFzdGFfYmFrZS5qcGdcIjtcbmltcG9ydCBnbm9jY2hpIGZyb20gXCIuL2ltZ3MvZ25vY2NoaS5qcGdcIjtcbmltcG9ydCBzYWxtb25QYXN0YSBmcm9tIFwiLi9pbWdzL3NhbG1vbnBhc3RhLmpwZ1wiO1xuaW1wb3J0IG1lYXRiYWxscyBmcm9tIFwiLi9pbWdzL3NwYWdoZXR0aV93aXRoX21lYXRiYWxscy5qcGdcIjtcbmltcG9ydCBjYXJib25hcmEgZnJvbSBcIi4vaW1ncy9zcGFnaGV0dGktY2FyYm9uYXJhLmpwZ1wiO1xuaW1wb3J0IGJvbG9nbmVzZSBmcm9tIFwiLi9pbWdzL3Bhc3RhLWJvbG9nbmVzZS5qcGdcIjtcbmltcG9ydCBjaGVlc3lIYW0gZnJvbSBcIi4vaW1ncy9jaGVlc3ktaGFtLmpwZ1wiO1xuaW1wb3J0IG9yYW5nZUp1aWNlIGZyb20gXCIuL2ltZ3Mvb3JhbmdlLWp1aWNlLmpwZ1wiO1xuaW1wb3J0IHdhdGVyIGZyb20gXCIuL2ltZ3Mvd2F0ZXIuanBnXCI7XG5pbXBvcnQgY29jYSBmcm9tIFwiLi9pbWdzL2NvY2EuanBnXCI7XG5pbXBvcnQgYmVlciBmcm9tIFwiLi9pbWdzL2JlZXIuanBnXCI7XG5cbmNvbnN0IEZvb2QgPSBbXG4gIHsgbmFtZTogXCJDYXBvbmF0YSBwYXN0YVwiLCBwcmljZTogXCIxMCRcIiwgaW1hZ2VTcmM6IGNhcG9uYXRhIH0sXG4gIHsgbmFtZTogXCJDaGlja2VuIHBhc3RhXCIsIHByaWNlOiBcIjExJFwiLCBpbWFnZVNyYzogYmFja2VkQ2hpY2tlbiB9LFxuICB7XG4gICAgbmFtZTogXCJDaG9yaXpvICYgbW96emFyZWxsYSBnbm9jY2hpIGJha2VcIixcbiAgICBwcmljZTogXCIxMS41MCRcIixcbiAgICBpbWFnZVNyYzogZ25vY2NoaSxcbiAgfSxcbiAgeyBuYW1lOiBcIlBhc3RhIHdpdGggc2FsbW9uICYgcGVhc1wiLCBwcmljZTogXCIxMyRcIiwgaW1hZ2VTcmM6IHNhbG1vblBhc3RhIH0sXG4gIHsgbmFtZTogXCJTcGFnaGV0dGkgJiBtZWF0YmFsbHNcIiwgcHJpY2U6IFwiMTEkXCIsIGltYWdlU3JjOiBtZWF0YmFsbHMgfSxcbiAgeyBuYW1lOiBcIlNwYWdoZXR0aSBjYXJib25hcmFcIiwgcHJpY2U6IFwiMTQkXCIsIGltYWdlU3JjOiBjYXJib25hcmEgfSxcbiAgeyBuYW1lOiBcIlBhc3RhIGJvbG9nbmVzZVwiLCBwcmljZTogXCIxMiRcIiwgaW1hZ2VTcmM6IGJvbG9nbmVzZSB9LFxuICB7IG5hbWU6IFwiQ2hlZXN5IGhhbSAmIGJyb2Njb2xpIHBhc3RhXCIsIHByaWNlOiBcIjE0JFwiLCBpbWFnZVNyYzogY2hlZXN5SGFtIH0sXG5dO1xuXG5jb25zdCBEcmlua3MgPSBbXG4gIHsgbmFtZTogXCJPcmFuZ2UganVpY2VcIiwgcHJpY2U6IFwiNiRcIiwgaW1hZ2VTcmM6IG9yYW5nZUp1aWNlIH0sXG4gIHsgbmFtZTogXCJXYXRlclwiLCBwcmljZTogXCIyJFwiLCBpbWFnZVNyYzogd2F0ZXIgfSxcbiAgeyBuYW1lOiBcIkNvY2EtQ29sYVwiLCBwcmljZTogXCIzJFwiLCBpbWFnZVNyYzogY29jYSB9LFxuICB7IG5hbWU6IFwiQmVlclwiLCBwcmljZTogXCI1JFwiLCBpbWFnZVNyYzogYmVlciB9LFxuXTtcblxuY29uc3QgY3JlYXRlRm9vZENhcmRFbGVtZW50ID0gZnVuY3Rpb24gKGZvb2QpIHtcbiAgY29uc3QgZm9vZENhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kQ2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jYXJkXCIpO1xuICBjb25zdCBpbWFnZU9mRm9vZCA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZU9mRm9vZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZm9vZC5pbWFnZVNyYyk7XG4gIGltYWdlT2ZGb29kLnNldEF0dHJpYnV0ZShcImFsdFwiLCBmb29kLm5hbWUpO1xuXG4gIGZvb2RDYXJkRGl2LmlubmVySFRNTCA9IGBcbiAgPGgyIGNsYXNzPVwibmFtZS1mb29kXCI+JHtmb29kLm5hbWV9PC9oMj5cbiAgPHAgY2xhc3M9XCJwcmljZS1mb29kXCI+JHtmb29kLnByaWNlfTwvcD5cbiAgPGJ1dHRvbiBjbGFzcz1cIm9yZGVyLWZvb2QtYnRuXCI+T3JkZXI8L2J1dHRvbj5cbiAgYDtcbiAgZm9vZENhcmREaXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJiZWdpblwiLCBpbWFnZU9mRm9vZCk7XG5cbiAgcmV0dXJuIGZvb2RDYXJkRGl2O1xufTtcblxuY29uc3QgY3JlYXRlTWVudUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBtZW51Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgXCI8aDE+UGFzdGE8L2gxPlwiKTtcbiAgbWVudUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY3JlYXRlRm9vZE1lbnUoRm9vZCkpO1xuICBtZW51Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxoMT5Ecmlua3M8L2gxPlwiKTtcbiAgbWVudUNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY3JlYXRlRm9vZE1lbnUoRHJpbmtzKSk7XG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9vZE1lbnUgPSBmdW5jdGlvbiAoZm9vZExpc3QpIHtcbiAgY29uc3QgZm9vZE1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb29kTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vZC1zZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgZm9yIChjb25zdCBmb29kIG9mIGZvb2RMaXN0KSB7XG4gICAgZm9vZE1lbnVDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgICAgXCJiZWZvcmVlbmRcIixcbiAgICAgIGNyZWF0ZUZvb2RDYXJkRWxlbWVudChmb29kKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZvb2RNZW51Q29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudUNvbnRlbnQoZWxlbWVudCkge1xuICBjb25zdCBtZW51ID0gY3JlYXRlTWVudUVsZW1lbnQoKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBlbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgbWVudSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=