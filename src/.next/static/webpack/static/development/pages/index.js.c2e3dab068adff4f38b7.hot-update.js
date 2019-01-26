webpackHotUpdate("static/development/pages/index.js",{

/***/ "./state/reducer.js":
/*!**************************!*\
  !*** ./state/reducer.js ***!
  \**************************/
/*! exports provided: initialState, persons, getMovies, getPersons, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persons", function() { return persons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovies", function() { return getMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersons", function() { return getPersons; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./state/actionTypes.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  persons: {}
};
var persons = function persons() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.persons;
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
var getMovies = function getMovies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.movies;
  return state;
};
var getPersons = function getPersons() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.persons;
  return state;
};
/* harmony default export */ __webpack_exports__["default"] = (combineReducers({
  movies: movies,
  persons: persons
}));

/***/ })

})
//# sourceMappingURL=index.js.c2e3dab068adff4f38b7.hot-update.js.map