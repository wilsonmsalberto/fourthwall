webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.2b4a135a8d8f547648c2.hot-update.js.map