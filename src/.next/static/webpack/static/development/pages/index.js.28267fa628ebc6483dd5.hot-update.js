webpackHotUpdate("static/development/pages/index.js",{

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
  var imageUrl = _ref.imageUrl,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: imageUrl,
    alt: title,
    size: "w500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
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
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Movie.defaultProps = {
  imageUrl: '',
  title: ''
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    imageUrl: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieImageUrl"](state, ownProps.id),
    title: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieTitle"](state, ownProps.id)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Movie));

/***/ })

})
//# sourceMappingURL=index.js.28267fa628ebc6483dd5.hot-update.js.map