webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.b41867e8c375a09bbe36.hot-update.js.map