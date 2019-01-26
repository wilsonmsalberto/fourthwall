webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/image/Image.js":
/*!***********************************!*\
  !*** ./components/image/Image.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-join */ "../node_modules/url-join/lib/url-join.js");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _state_config_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/config/selectors */ "./state/config/selectors.js");
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/image/Image.js";
 // React


 // Redux

 // State



var Image = function Image(_ref) {
  var baseUrl = _ref.baseUrl,
      size = _ref.size,
      title = _ref.title,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: url_join__WEBPACK_IMPORTED_MODULE_0___default()(baseUrl, size, url),
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
};

Image.propTypes = {
  baseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
Image.defaultProps = {
  baseUrl: 'https://image.tmdb.org/t/p/',
  size: 'original'
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    baseUrl: _state_config_selectors__WEBPACK_IMPORTED_MODULE_4__["getImageBaseUrl"](state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Image));

/***/ }),

/***/ "./components/nominees-list/Movie.js":
/*!*******************************************!*\
  !*** ./components/nominees-list/Movie.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/movies/selectors */ "./state/movies/selectors.js");
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/Image */ "./components/image/Image.js");
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/nominees-list/Movie.js";
// React

 // Redux

 // State

 // Components



var Movie = function Movie(_ref) {
  var url = _ref.url,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: url,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: title,
    src: "https://image.tmdb.org/t/p/w500".concat(image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, title));
};

Movie.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Movie.defaultProps = {
  url: '',
  title: ''
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    url: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieImageUrl"](state, ownProps.id),
    title: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieTitle"](state, ownProps.id)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Movie));

/***/ }),

/***/ "./state/config/selectors.js":
/*!***********************************!*\
  !*** ./state/config/selectors.js ***!
  \***********************************/
/*! exports provided: getConfig, getImageProperties, getImageBaseUrl, getImageBackdropSizes, getImageLogoSizes, getImagePosterSizes, getImageProfileSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageProperties", function() { return getImageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageBaseUrl", function() { return getImageBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageBackdropSizes", function() { return getImageBackdropSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageLogoSizes", function() { return getImageLogoSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImagePosterSizes", function() { return getImagePosterSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageProfileSizes", function() { return getImageProfileSizes; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./state/config/reducer.js");
/**
 * Module dependencies.
 */

/**
  * Export `getConfig` selector.
  */

var getConfig = function getConfig(state) {
  return _reducer__WEBPACK_IMPORTED_MODULE_0__["getConfig"](state.config);
};
/**
 * Export `getImageProperties` selector.
 */

var getImageProperties = function getImageProperties(state) {
  var config = getConfig(state);
  return config.images;
};
/**
 * Export `getImageBaseUrl` selector.
 */

var getImageBaseUrl = function getImageBaseUrl(state) {
  var imageProperties = getImageProperties(state);
  return imageProperties.secure_base_url;
};
/**
 * Export `getImageBackdropSizes` selector.
 */

var getImageBackdropSizes = function getImageBackdropSizes(state) {
  var imageProperties = getImageProperties(state);
  return imageProperties.backdrop_sizes;
};
/**
 * Export `getImageLogoSizes` selector.
 */

var getImageLogoSizes = function getImageLogoSizes(state) {
  var imageProperties = getImageProperties(state);
  return imageProperties.logo_sizes;
};
/**
 * Export `getImagePosterSizes` selector.
 */

var getImagePosterSizes = function getImagePosterSizes(state) {
  var imageProperties = getImageProperties(state);
  return imageProperties.poster_sizes;
};
/**
 * Export `getImageProfileSizes` selector.
 */

var getImageProfileSizes = function getImageProfileSizes(state) {
  var imageProperties = getImageProperties(state);
  return imageProperties.profile_sizes;
};

/***/ })

})
//# sourceMappingURL=index.js.44d2556132e32201939a.hot-update.js.map