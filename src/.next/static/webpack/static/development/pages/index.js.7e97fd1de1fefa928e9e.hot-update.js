webpackHotUpdate("static/development/pages/index.js",{

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
 * Export `getPersonImage` selector.
 */

var getPersonImage = function getPersonImage(state, id) {
  var person = getPersonById(state, id);
  return person.profile_path;
};

/***/ })

})
//# sourceMappingURL=index.js.7e97fd1de1fefa928e9e.hot-update.js.map