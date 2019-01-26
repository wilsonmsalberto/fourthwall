module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/award/Award.js":
/*!***********************************!*\
  !*** ./components/award/Award.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nominees_list_NomineesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nominees-list/NomineesList */ "./components/nominees-list/NomineesList.js");
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/award/Award.js";




var Award = function Award(_ref) {
  var award = _ref.award;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, award.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nominees_list_NomineesList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: award.nominees,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

Award.propTypes = {
  award: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Award);

/***/ }),

/***/ "./components/image/Image.js":
/*!***********************************!*\
  !*** ./components/image/Image.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-join */ "url-join");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
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

/***/ }),

/***/ "./components/nominees-list/Movie.js":
/*!*******************************************!*\
  !*** ./components/nominees-list/Movie.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ }),

/***/ "./components/nominees-list/NomineesList.js":
/*!**************************************************!*\
  !*** ./components/nominees-list/NomineesList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Movie */ "./components/nominees-list/Movie.js");
/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Person */ "./components/nominees-list/Person.js");
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/nominees-list/NomineesList.js";





var NomineesList = function NomineesList(_ref) {
  var list = _ref.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, list.map(function (nominee) {
    var type = nominee.type,
        id = nominee.id;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, type === 'movie' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Movie__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), type === 'person' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  }));
};

NomineesList.propTypes = {
  list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NomineesList);

/***/ }),

/***/ "./components/nominees-list/Person.js":
/*!********************************************!*\
  !*** ./components/nominees-list/Person.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_persons_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/persons/selectors */ "./state/persons/selectors.js");
/* harmony import */ var _image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/Image */ "./components/image/Image.js");
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/nominees-list/Person.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React

 // Redux

 // State

 // Components



var Person =
/*#__PURE__*/
function (_Component) {
  _inherits(Person, _Component);

  function Person() {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, _getPrototypeOf(Person).apply(this, arguments));
  }

  _createClass(Person, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('will get extra info');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageUrl = _this$props.imageUrl,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_image_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        url: imageUrl,
        alt: title,
        size: "w500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, title));
    }
  }]);

  return Person;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Person, "propTypes", {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(Person, "defaultProps", {
  imageUrl: '',
  title: ''
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    imageUrl: _state_persons_selectors__WEBPACK_IMPORTED_MODULE_3__["getPersonImageUrl"](state, ownProps.id),
    title: _state_persons_selectors__WEBPACK_IMPORTED_MODULE_3__["getPersonName"](state, ownProps.id)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Person));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sdk/awardList */ "./sdk/awardList.js");
/* harmony import */ var _state_config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/config/actions */ "./state/config/actions.js");
/* harmony import */ var _state_movies_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/movies/actions */ "./state/movies/actions.js");
/* harmony import */ var _state_persons_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/persons/actions */ "./state/persons/actions.js");
/* harmony import */ var _views_home_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/home/Home */ "./views/home/Home.js");

var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React
 // Redux

 // SDK

 // State



 // Components



var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_home_Home__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                _context.next = 3;
                return this.getNominees(store);

              case 3:
                return _context.abrupt("return", {});

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(HomePage, "getNominees",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(store) {
    var promises;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            promises = [];
            _context2.next = 3;
            return store.dispatch(Object(_state_config_actions__WEBPACK_IMPORTED_MODULE_4__["getConfig"])());

          case 3:
            _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (award) {
              award.nominees.forEach(function (nominee) {
                var type = nominee.type,
                    id = nominee.id;

                if (type === 'movie') {
                  promises.push(store.dispatch(Object(_state_movies_actions__WEBPACK_IMPORTED_MODULE_5__["getMovie"])(id)));
                }

                if (type === 'person') {
                  promises.push(store.dispatch(Object(_state_persons_actions__WEBPACK_IMPORTED_MODULE_6__["getPerson"])(id)));
                }
              });
            });
            _context2.next = 6;
            return Promise.all(promises);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
})(HomePage));

/***/ }),

/***/ "./sdk/awardList.js":
/*!**************************!*\
  !*** ./sdk/awardList.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var awardList = [{
  id: 1,
  title: 'Best Picture',
  nominees: [{
    id: 284054,
    type: 'movie'
  }, {
    id: 487558,
    type: 'movie'
  }, {
    id: 424694,
    type: 'movie'
  }, {
    id: 375262,
    type: 'movie'
  }, {
    id: 490132,
    type: 'movie'
  }, {
    id: 426426,
    type: 'movie'
  }, {
    id: 332562,
    type: 'movie'
  }, {
    id: 429197,
    type: 'movie'
  }]
}, {
  id: 2,
  title: 'Actor in a Leading Role',
  nominees: [{
    id: 3894,
    type: 'person',
    movie: 429197
  }, {
    id: 51329,
    type: 'person',
    movie: 332562
  }, {
    id: 5293,
    type: 'person',
    movie: 491472
  }, {
    id: 17838,
    type: 'person',
    movie: 424694
  }, {
    id: 110,
    type: 'person',
    movie: 490132
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (awardList);

/***/ }),

/***/ "./sdk/config.js":
/*!***********************!*\
  !*** ./sdk/config.js ***!
  \***********************/
/*! exports provided: getApiUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApiUrl", function() { return getApiUrl; });
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-join */ "url-join");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_0__);

var apiKey = "?api_key=".concat("f826120e7a4e55dc3312dd4c3c272d33", "&language=en-US");
var apiUrl = 'https://api.themoviedb.org/3/';
var getApiUrl = function getApiUrl(endpoint) {
  return url_join__WEBPACK_IMPORTED_MODULE_0___default()(apiUrl, endpoint, apiKey);
};
/* harmony default export */ __webpack_exports__["default"] = (getApiUrl);

/***/ }),

/***/ "./sdk/index.js":
/*!**********************!*\
  !*** ./sdk/index.js ***!
  \**********************/
/*! exports provided: fetchConfig, fetchPerson, fetchMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPerson", function() { return fetchPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMovie", function() { return fetchMovie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./sdk/config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchConfig =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(Object(_config__WEBPACK_IMPORTED_MODULE_2__["getApiUrl"])('configuration')).then(function (response) {
              return response.json();
            }).then(function (response) {
              return response;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchConfig() {
    return _ref.apply(this, arguments);
  };
}();
var fetchPerson =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(Object(_config__WEBPACK_IMPORTED_MODULE_2__["getApiUrl"])("person/".concat(id))).then(function (response) {
              return response.json();
            }).then(function (response) {
              return response;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchPerson(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var fetchMovie =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(Object(_config__WEBPACK_IMPORTED_MODULE_2__["getApiUrl"])("movie/".concat(id))).then(function (response) {
              return response.json();
            }).then(function (response) {
              return response;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function fetchMovie(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./state/config/actionTypes.js":
/*!*************************************!*\
  !*** ./state/config/actionTypes.js ***!
  \*************************************/
/*! exports provided: GET_CONFIG_START, GET_CONFIG_SUCCESS, GET_CONFIG_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONFIG_START", function() { return GET_CONFIG_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONFIG_SUCCESS", function() { return GET_CONFIG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONFIG_FAIL", function() { return GET_CONFIG_FAIL; });
var GET_CONFIG_START = 'GET_CONFIG_START';
var GET_CONFIG_SUCCESS = 'GET_CONFIG_SUCCESS';
var GET_CONFIG_FAIL = 'GET_CONFIG_FAIL';

/***/ }),

/***/ "./state/config/actions.js":
/*!*********************************!*\
  !*** ./state/config/actions.js ***!
  \*********************************/
/*! exports provided: getConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./sdk/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./state/config/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var getConfig = function getConfig() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_CONFIG_START"]
                });
                _context.prev = 1;
                _context.next = 4;
                return Object(_sdk__WEBPACK_IMPORTED_MODULE_1__["fetchConfig"])();

              case 4:
                config = _context.sent;
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_CONFIG_SUCCESS"],
                  payload: {
                    result: config
                  }
                });
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_CONFIG_FAIL"],
                  payload: {
                    error: _context.t0
                  }
                });
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/* harmony default export */ __webpack_exports__["default"] = (getConfig);

/***/ }),

/***/ "./state/config/reducer.js":
/*!*********************************!*\
  !*** ./state/config/reducer.js ***!
  \*********************************/
/*! exports provided: configInitialState, config, getConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configInitialState", function() { return configInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return getConfig; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./state/config/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var configInitialState = {
  config: {}
};
var config = function config() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : configInitialState.config;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CONFIG_SUCCESS"]:
      {
        return _objectSpread({}, action.payload.result);
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CONFIG_START"]:
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_CONFIG_FAIL"]:
    default:
      return state;
  }
};
var getConfig = function getConfig() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : configInitialState.config;
  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (config);

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

/***/ }),

/***/ "./state/movies/actionTypes.js":
/*!*************************************!*\
  !*** ./state/movies/actionTypes.js ***!
  \*************************************/
/*! exports provided: GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_START", function() { return GET_MOVIE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_SUCCESS", function() { return GET_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_FAIL", function() { return GET_MOVIE_FAIL; });
var GET_MOVIE_START = 'GET_MOVIE_START';
var GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
var GET_MOVIE_FAIL = 'GET_MOVIE_FAIL';

/***/ }),

/***/ "./state/movies/actions.js":
/*!*********************************!*\
  !*** ./state/movies/actions.js ***!
  \*********************************/
/*! exports provided: getMovie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./sdk/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./state/movies/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./state/movies/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getMovie = function getMovie(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var movie;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_MOVIE_START"]
                });
                _context.prev = 1;
                movie = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getMovieById"])(getState(), id);

                if (Object.keys(movie).length) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Object(_sdk__WEBPACK_IMPORTED_MODULE_1__["fetchMovie"])(id);

              case 6:
                movie = _context.sent;

              case 7:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_MOVIE_SUCCESS"],
                  payload: {
                    result: movie
                  }
                });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_MOVIE_FAIL"],
                  payload: {
                    error: _context.t0
                  }
                });
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/* harmony default export */ __webpack_exports__["default"] = (getMovie);

/***/ }),

/***/ "./state/movies/reducer.js":
/*!*********************************!*\
  !*** ./state/movies/reducer.js ***!
  \*********************************/
/*! exports provided: moviesInitialState, movies, getMovies, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesInitialState", function() { return moviesInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function() { return movies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./state/movies/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var moviesInitialState = {
  movies: {}
};
var movies = function movies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moviesInitialState.movies;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_SUCCESS"]:
      {
        var result = action.payload.result;

        if (!state[result.id]) {
          state[result.id] = _objectSpread({}, result);
        }

        return _objectSpread({}, state);
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_START"]:
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_MOVIE_FAIL"]:
    default:
      return state;
  }
};
var getMovies = function getMovies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moviesInitialState.movies;
  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (movies);

/***/ }),

/***/ "./state/movies/selectors.js":
/*!***********************************!*\
  !*** ./state/movies/selectors.js ***!
  \***********************************/
/*! exports provided: getMovies, getMovieById, getMovieTitle, getMovieImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieTitle", function() { return getMovieTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieImageUrl", function() { return getMovieImageUrl; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./state/movies/reducer.js");
/**
 * Module dependencies.
 */

/**
  * Export `getMovies` selector.
  */

var getMovies = function getMovies(state) {
  return _reducer__WEBPACK_IMPORTED_MODULE_0__["getMovies"](state.movies);
};
/**
 * Export `getMovieById` selector.
 */

var getMovieById = function getMovieById(state, id) {
  var movies = getMovies(state);
  return movies[id] || {};
};
/**
 * Export `getMovieTitle` selector.
 */

var getMovieTitle = function getMovieTitle(state, id) {
  var movie = getMovieById(state, id);
  return movie.title;
};
/**
 * Export `getMovieImage` selector.
 */

var getMovieImageUrl = function getMovieImageUrl(state, id) {
  var movie = getMovieById(state, id);
  return movie.poster_path;
};

/***/ }),

/***/ "./state/persons/actionTypes.js":
/*!**************************************!*\
  !*** ./state/persons/actionTypes.js ***!
  \**************************************/
/*! exports provided: GET_PERSON_START, GET_PERSON_SUCCESS, GET_PERSON_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PERSON_START", function() { return GET_PERSON_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PERSON_SUCCESS", function() { return GET_PERSON_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PERSON_FAIL", function() { return GET_PERSON_FAIL; });
var GET_PERSON_START = 'GET_PERSON_START';
var GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS';
var GET_PERSON_FAIL = 'GET_PERSON_FAIL';

/***/ }),

/***/ "./state/persons/actions.js":
/*!**********************************!*\
  !*** ./state/persons/actions.js ***!
  \**********************************/
/*! exports provided: getPerson, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPerson", function() { return getPerson; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./sdk/index.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./state/persons/selectors.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./state/persons/actionTypes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getPerson = function getPerson(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var person;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PERSON_START"]
                });
                _context.prev = 1;
                person = Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["getPersonById"])(getState(), id);

                if (Object.keys(person).length) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Object(_sdk__WEBPACK_IMPORTED_MODULE_1__["fetchPerson"])(id);

              case 6:
                person = _context.sent;

              case 7:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PERSON_SUCCESS"],
                  payload: {
                    result: person
                  }
                });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PERSON_FAIL"],
                  payload: {
                    error: _context.t0
                  }
                });
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
/* harmony default export */ __webpack_exports__["default"] = (getPerson);

/***/ }),

/***/ "./state/persons/reducer.js":
/*!**********************************!*\
  !*** ./state/persons/reducer.js ***!
  \**********************************/
/*! exports provided: personsInitialState, persons, getPersons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personsInitialState", function() { return personsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persons", function() { return persons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersons", function() { return getPersons; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./state/persons/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var personsInitialState = {
  persons: {}
};
var persons = function persons() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : personsInitialState.persons;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PERSON_SUCCESS"]:
      {
        var result = action.payload.result;

        if (!state[result.id]) {
          state[result.id] = _objectSpread({}, result);
        }

        return _objectSpread({}, state);
      }

    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PERSON_START"]:
    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_PERSON_FAIL"]:
    default:
      return state;
  }
};
var getPersons = function getPersons() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : personsInitialState.persons;
  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (persons);

/***/ }),

/***/ "./state/persons/selectors.js":
/*!************************************!*\
  !*** ./state/persons/selectors.js ***!
  \************************************/
/*! exports provided: getPersons, getPersonById, getPersonName, getPersonImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersons", function() { return getPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonById", function() { return getPersonById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonName", function() { return getPersonName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonImageUrl", function() { return getPersonImageUrl; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./state/persons/reducer.js");
/**
 * Module dependencies.
 */

/**
  * Export `getPersons` selector.
  */

var getPersons = function getPersons(state) {
  return _reducer__WEBPACK_IMPORTED_MODULE_0__["getPersons"](state.persons);
};
/**
 * Export `getPersonById` selector.
 */

var getPersonById = function getPersonById(state, id) {
  var persons = getPersons(state);
  return persons[id] || {};
};
/**
 * Export `getPersonName` selector.
 */

var getPersonName = function getPersonName(state, id) {
  var person = getPersonById(state, id);
  return person.name;
};
/**
 * Export `getPersonImage` selector.
 */

var getPersonImageUrl = function getPersonImageUrl(state, id) {
  var person = getPersonById(state, id);
  return person.profile_path;
};

/***/ }),

/***/ "./views/home/Home.css":
/*!*****************************!*\
  !*** ./views/home/Home.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"title": "Home__title___krWzf"
};

/***/ }),

/***/ "./views/home/Home.js":
/*!****************************!*\
  !*** ./views/home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_award_Award__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/award/Award */ "./components/award/Award.js");
/* harmony import */ var _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sdk/awardList */ "./sdk/awardList.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.css */ "./views/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/views/home/Home.js";

 // Components


 // Styles



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: _Home_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (award) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_award_Award__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: award.id,
      award: award,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
})(Home));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map