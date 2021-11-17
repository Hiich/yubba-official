"use strict";
self["webpackHotUpdate_N_E"]("pages/minting",{

/***/ "./redux/data/dataReducer.js":
/*!***********************************!*\
  !*** ./redux/data/dataReducer.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  loading: false,
  cost: 0,
  payees: 0,
  error: false,
  errorMsg: ""
};

var dataReducer = function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: false,
        errorMsg: ""
      });

    case "CHECK_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        shares: action.payload.shares,
        paused: action.payload.paused,
        whitelist: action.payload.whitelist,
        // cost: action.payload.cost,
        error: false,
        errorMsg: ""
      });

    case "CHECK_DATA_FAILED":
      return _objectSpread(_objectSpread({}, initialState), {}, {
        loading: false,
        error: true,
        errorMsg: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (dataReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy43ZjUwZGMwYTVmMTk2NzcyZGVlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsT0FBTyxFQUFFLEtBRFU7QUFFbkJDLEVBQUFBLElBQUksRUFBRSxDQUZhO0FBR25CQyxFQUFBQSxNQUFNLEVBQUUsQ0FIVztBQUluQkMsRUFBQUEsS0FBSyxFQUFFLEtBSlk7QUFLbkJDLEVBQUFBLFFBQVEsRUFBRTtBQUxTLENBQXJCOztBQVFBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlAsWUFBeUI7QUFBQSxNQUFYUSxNQUFXOztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLG9CQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRU4sUUFBQUEsT0FBTyxFQUFFLElBRlg7QUFHRUcsUUFBQUEsS0FBSyxFQUFFLEtBSFQ7QUFJRUMsUUFBQUEsUUFBUSxFQUFFO0FBSlo7O0FBTUYsU0FBSyxvQkFBTDtBQUNFLDZDQUNLRSxLQURMO0FBRUVOLFFBQUFBLE9BQU8sRUFBRSxLQUZYO0FBR0VTLFFBQUFBLE1BQU0sRUFBRUYsTUFBTSxDQUFDRyxPQUFQLENBQWVELE1BSHpCO0FBSUVFLFFBQUFBLE1BQU0sRUFBRUosTUFBTSxDQUFDRyxPQUFQLENBQWVDLE1BSnpCO0FBS0VDLFFBQUFBLFNBQVMsRUFBR0wsTUFBTSxDQUFDRyxPQUFQLENBQWVFLFNBTDdCO0FBTUU7QUFDQVQsUUFBQUEsS0FBSyxFQUFFLEtBUFQ7QUFRRUMsUUFBQUEsUUFBUSxFQUFFO0FBUlo7O0FBVUYsU0FBSyxtQkFBTDtBQUNFLDZDQUNLTCxZQURMO0FBRUVDLFFBQUFBLE9BQU8sRUFBRSxLQUZYO0FBR0VHLFFBQUFBLEtBQUssRUFBRSxJQUhUO0FBSUVDLFFBQUFBLFFBQVEsRUFBRUcsTUFBTSxDQUFDRztBQUpuQjs7QUFNRjtBQUNFLGFBQU9KLEtBQVA7QUEzQko7QUE2QkQsQ0E5QkQ7O0FBZ0NBLCtEQUFlRCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2RhdGEvZGF0YVJlZHVjZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG4gIGNvc3Q6IDAsXHJcbiAgcGF5ZWVzOiAwLFxyXG4gIGVycm9yOiBmYWxzZSxcclxuICBlcnJvck1zZzogXCJcIixcclxufTtcclxuXHJcbmNvbnN0IGRhdGFSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQ0hFQ0tfREFUQV9SRVFVRVNUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNc2c6IFwiXCIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiQ0hFQ0tfREFUQV9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgc2hhcmVzOiBhY3Rpb24ucGF5bG9hZC5zaGFyZXMsXHJcbiAgICAgICAgcGF1c2VkOiBhY3Rpb24ucGF5bG9hZC5wYXVzZWQsXHJcbiAgICAgICAgd2hpdGVsaXN0IDogYWN0aW9uLnBheWxvYWQud2hpdGVsaXN0LFxyXG4gICAgICAgIC8vIGNvc3Q6IGFjdGlvbi5wYXlsb2FkLmNvc3QsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yTXNnOiBcIlwiLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIkNIRUNLX0RBVEFfRkFJTEVEXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgIGVycm9yTXNnOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhUmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJjb3N0IiwicGF5ZWVzIiwiZXJyb3IiLCJlcnJvck1zZyIsImRhdGFSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic2hhcmVzIiwicGF5bG9hZCIsInBhdXNlZCIsIndoaXRlbGlzdCJdLCJzb3VyY2VSb290IjoiIn0=