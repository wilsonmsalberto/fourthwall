webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./state/actionTypes.js":
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

/***/ "./state/reducer.js":
false,

/***/ "./state/store.js":
/*!************************!*\
  !*** ./state/store.js ***!
  \************************/
/*! exports provided: initStore, clientState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientState", function() { return clientState; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "../node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var _movies_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/reducer */ "./state/movies/reducer.js");
/* harmony import */ var _persons_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./persons/reducer */ "./state/persons/reducer.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var initialState = _objectSpread({}, _movies_reducer__WEBPACK_IMPORTED_MODULE_3__["moviesInitialState"], _persons_reducer__WEBPACK_IMPORTED_MODULE_4__["personsInitialState"]);

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  movies: _movies_reducer__WEBPACK_IMPORTED_MODULE_3__["movies"],
  persons: _persons_reducer__WEBPACK_IMPORTED_MODULE_4__["persons"]
});
var initStore = function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, state, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
};
var clientState = function clientState(state) {
  return {
    movies: state.movies,
    persons: state.persons
  };
};
/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ })

})
//# sourceMappingURL=_app.js.1b103131ffc086b31568.hot-update.js.map