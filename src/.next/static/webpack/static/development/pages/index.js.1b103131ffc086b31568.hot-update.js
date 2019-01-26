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
var _jsxFileName = "/Users/wilson.alberto/Playground/oscario/src/components/nominees-list/Movie.js";
// React

 // Redux

 // State



var Movie = function Movie(_ref) {
  var image = _ref.image,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: title,
    src: "https://image.tmdb.org/t/p/w500".concat(image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, title));
};

Movie.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Movie.defaultProps = {
  image: '',
  title: ''
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    image: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieImage"](state, ownProps.id),
    title: _state_movies_selectors__WEBPACK_IMPORTED_MODULE_3__["getMovieTitle"](state, ownProps.id)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Movie));

/***/ }),

/***/ "./components/nominees-list/Person.js":
/*!********************************************!*\
  !*** ./components/nominees-list/Person.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _state_persons_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/persons/selectors */ "./state/persons/selectors.js");
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
          image = _this$props.image,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: title,
        src: "https://image.tmdb.org/t/p/w500".concat(image),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, title));
    }
  }]);

  return Person;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Person, "propTypes", {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

_defineProperty(Person, "defaultProps", {
  image: '',
  title: ''
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    image: _state_persons_selectors__WEBPACK_IMPORTED_MODULE_3__["getPersonImage"](state, ownProps.id),
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sdk/awardList */ "./sdk/awardList.js");
/* harmony import */ var _state_movies_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/movies/actions */ "./state/movies/actions.js");
/* harmony import */ var _state_persons_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/persons/actions */ "./state/persons/actions.js");
/* harmony import */ var _views_home_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/home/Home */ "./views/home/Home.js");

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_views_home_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
            _sdk_awardList__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(function (award) {
              award.nominees.forEach(function (nominee) {
                var type = nominee.type,
                    id = nominee.id;

                if (type === 'movie') {
                  promises.push(store.dispatch(Object(_state_movies_actions__WEBPACK_IMPORTED_MODULE_4__["getMovie"])(id)));
                }

                if (type === 'person') {
                  promises.push(store.dispatch(Object(_state_persons_actions__WEBPACK_IMPORTED_MODULE_5__["getPerson"])(id)));
                }
              });
            });
            _context2.next = 4;
            return Promise.all(promises);

          case 4:
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "../node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./state/actionTypes.js":
false,

/***/ "./state/actions.js":
false,

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./sdk/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./state/movies/actionTypes.js");


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
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_MOVIE_START"]
                });
                _context.prev = 1;
                movie = getState().movies[id];

                if (movie) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Object(_sdk__WEBPACK_IMPORTED_MODULE_1__["fetchMovie"])(id);

              case 6:
                movie = _context.sent;

              case 7:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_MOVIE_SUCCESS"],
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
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_MOVIE_FAIL"],
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
/*! exports provided: getMovies, getMovieById, getMovieTitle, getMovieImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieById", function() { return getMovieById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieTitle", function() { return getMovieTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieImage", function() { return getMovieImage; });
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

var getMovieImage = function getMovieImage(state, id) {
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sdk */ "./sdk/index.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionTypes */ "./state/persons/actionTypes.js");


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
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_PERSON_START"]
                });
                _context.prev = 1;
                person = getState().persons[id];

                if (person) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return Object(_sdk__WEBPACK_IMPORTED_MODULE_1__["fetchPerson"])(id);

              case 6:
                person = _context.sent;

              case 7:
                dispatch({
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_PERSON_SUCCESS"],
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
                  type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_PERSON_FAIL"],
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
/*! exports provided: getPersons, getPersonById, getPersonName, getPersonImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersons", function() { return getPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonById", function() { return getPersonById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonName", function() { return getPersonName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonImage", function() { return getPersonImage; });
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
 * Export `getMovieImage` selector.
 */

var getPersonImage = function getPersonImage(state, id) {
  var person = getPersonById(state, id);
  return person.profile_path;
};

/***/ }),

/***/ "./state/reducer.js":
false,

/***/ "./state/selectors.js":
false

})
//# sourceMappingURL=index.js.1b103131ffc086b31568.hot-update.js.map