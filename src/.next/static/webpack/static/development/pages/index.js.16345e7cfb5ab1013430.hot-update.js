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
      alt = _ref.alt,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: url_join__WEBPACK_IMPORTED_MODULE_0___default()(baseUrl, size, url),
    alt: alt,
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
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
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

/***/ })

})
//# sourceMappingURL=index.js.16345e7cfb5ab1013430.hot-update.js.map