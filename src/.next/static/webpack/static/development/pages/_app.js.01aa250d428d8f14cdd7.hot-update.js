webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _config_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/reducer */ "./state/config/reducer.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var initialState = _objectSpread({}, _config_reducer__WEBPACK_IMPORTED_MODULE_5__["configInitialState"], _movies_reducer__WEBPACK_IMPORTED_MODULE_3__["moviesInitialState"], _persons_reducer__WEBPACK_IMPORTED_MODULE_4__["personsInitialState"]);

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  config: _config_reducer__WEBPACK_IMPORTED_MODULE_5__["config"],
  movies: _movies_reducer__WEBPACK_IMPORTED_MODULE_3__["movies"],
  persons: _persons_reducer__WEBPACK_IMPORTED_MODULE_4__["persons"]
});
var initStore = function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, state, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
};
var clientState = function clientState(state) {
  return {
    config: state.config,
    movies: state.movies,
    persons: state.persons
  };
};
/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ })

})
//# sourceMappingURL=_app.js.01aa250d428d8f14cdd7.hot-update.js.map