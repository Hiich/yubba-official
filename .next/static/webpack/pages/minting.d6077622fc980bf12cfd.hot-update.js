"use strict";
self["webpackHotUpdate_N_E"]("pages/minting",{

/***/ "./redux/data/dataActions.js":
/*!***********************************!*\
  !*** ./redux/data/dataActions.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchData": function() { return /* binding */ fetchData; }
/* harmony export */ });
/* harmony import */ var C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./redux/store.js");
/* module decorator */ module = __webpack_require__.hmd(module);


// log


var fetchDataRequest = function fetchDataRequest() {
  return {
    type: "CHECK_DATA_REQUEST"
  };
};

var fetchDataSuccess = function fetchDataSuccess(payload) {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload
  };
};

var fetchDataFailed = function fetchDataFailed(payload) {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload
  };
};

var fetchData = function fetchData() {
  return /*#__PURE__*/function () {
    var _ref = (0,C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var shares, paused, whitelist;
      return C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(fetchDataRequest());
              _context.prev = 1;
              _context.next = 4;
              return _store__WEBPACK_IMPORTED_MODULE_2__.default.getState().blockchain.smartContract.methods.shares(_store__WEBPACK_IMPORTED_MODULE_2__.default.getState().blockchain.account).call();

            case 4:
              shares = _context.sent;
              _context.next = 7;
              return _store__WEBPACK_IMPORTED_MODULE_2__.default.getState().blockchain.smartContract.methods.paused().call();

            case 7:
              paused = _context.sent;
              _context.next = 10;
              return _store__WEBPACK_IMPORTED_MODULE_2__.default.getState().blockchain.smartContract.methods.whitelist(_store__WEBPACK_IMPORTED_MODULE_2__.default.getState().blockchain.account).call();

            case 10:
              whitelist = _context.sent;
              dispatch(fetchDataSuccess({
                shares: shares,
                paused: paused,
                whitelist: whitelist
              }));
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              dispatch(fetchDataFailed("Could not load data from contract."));

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 14]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy5kNjA3NzYyMmZjOTgwYmYxMmNmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLE9BQUQsRUFBYTtBQUNwQyxTQUFPO0FBQ0xGLElBQUFBLElBQUksRUFBRSxvQkFERDtBQUVMRSxJQUFBQSxPQUFPLEVBQUVBO0FBRkosR0FBUDtBQUlELENBTEQ7O0FBT0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDRCxPQUFELEVBQWE7QUFDbkMsU0FBTztBQUNMRixJQUFBQSxJQUFJLEVBQUUsbUJBREQ7QUFFTEUsSUFBQUEsT0FBTyxFQUFFQTtBQUZKLEdBQVA7QUFJRCxDQUxEOztBQU9PLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDN0I7QUFBQSxpWEFBTyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEEsY0FBQUEsUUFBUSxDQUFDTixnQkFBZ0IsRUFBakIsQ0FBUjtBQURLO0FBQUE7QUFBQSxxQkFHZ0JELG9EQUFBLEdBRWhCUyxVQUZnQixDQUVMQyxhQUZLLENBRVNDLE9BRlQsQ0FFaUJDLE1BRmpCLENBR2ZaLG9EQUFBLEdBQWlCUyxVQUFqQixDQUE0QkksT0FIYixFQUtoQkMsSUFMZ0IsRUFIaEI7O0FBQUE7QUFHQ0YsY0FBQUEsTUFIRDtBQUFBO0FBQUEscUJBVWdCWixvREFBQSxHQUVoQlMsVUFGZ0IsQ0FFTEMsYUFGSyxDQUVTQyxPQUZULENBRWlCSSxNQUZqQixHQUdoQkQsSUFIZ0IsRUFWaEI7O0FBQUE7QUFVQ0MsY0FBQUEsTUFWRDtBQUFBO0FBQUEscUJBZW1CZixvREFBQSxHQUVuQlMsVUFGbUIsQ0FFUkMsYUFGUSxDQUVNQyxPQUZOLENBRWNLLFNBRmQsQ0FFd0JoQixvREFBQSxHQUFpQlMsVUFBakIsQ0FBNEJJLE9BRnBELEVBR25CQyxJQUhtQixFQWZuQjs7QUFBQTtBQWVDRSxjQUFBQSxTQWZEO0FBb0JIVCxjQUFBQSxRQUFRLENBQ05KLGdCQUFnQixDQUFDO0FBQ2ZTLGdCQUFBQSxNQUFNLEVBQU5BLE1BRGU7QUFFZkcsZ0JBQUFBLE1BQU0sRUFBTkEsTUFGZTtBQUdmQyxnQkFBQUEsU0FBUyxFQUFUQTtBQUhlLGVBQUQsQ0FEVixDQUFSO0FBcEJHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNEJIQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQVgsY0FBQUEsUUFBUSxDQUFDRixlQUFlLENBQUMsb0NBQUQsQ0FBaEIsQ0FBUjs7QUE3Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDRCxDQWpDTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9kYXRhL2RhdGFBY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBmZXRjaERhdGFSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkNIRUNLX0RBVEFfUkVRVUVTVFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaERhdGFTdWNjZXNzID0gKHBheWxvYWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJDSEVDS19EQVRBX1NVQ0NFU1NcIixcclxuICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoRGF0YUZhaWxlZCA9IChwYXlsb2FkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiQ0hFQ0tfREFUQV9GQUlMRURcIixcclxuICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hEYXRhUmVxdWVzdCgpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBzaGFyZXMgPSBhd2FpdCBzdG9yZVxyXG4gICAgICAgIC5nZXRTdGF0ZSgpXHJcbiAgICAgICAgLmJsb2NrY2hhaW4uc21hcnRDb250cmFjdC5tZXRob2RzLnNoYXJlcyhcclxuICAgICAgICAgIHN0b3JlLmdldFN0YXRlKCkuYmxvY2tjaGFpbi5hY2NvdW50XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYWxsKCk7XHJcblxyXG4gICAgICBsZXQgcGF1c2VkID0gYXdhaXQgc3RvcmVcclxuICAgICAgICAuZ2V0U3RhdGUoKVxyXG4gICAgICAgIC5ibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kcy5wYXVzZWQoKVxyXG4gICAgICAgIC5jYWxsKCk7XHJcblxyXG4gICAgICBsZXQgd2hpdGVsaXN0ID0gYXdhaXQgc3RvcmVcclxuICAgICAgICAuZ2V0U3RhdGUoKVxyXG4gICAgICAgIC5ibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kcy53aGl0ZWxpc3Qoc3RvcmUuZ2V0U3RhdGUoKS5ibG9ja2NoYWluLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgXHJcbiAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgIGZldGNoRGF0YVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgc2hhcmVzLFxyXG4gICAgICAgICAgcGF1c2VkLFxyXG4gICAgICAgICAgd2hpdGVsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhRmFpbGVkKFwiQ291bGQgbm90IGxvYWQgZGF0YSBmcm9tIGNvbnRyYWN0LlwiKSk7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInN0b3JlIiwiZmV0Y2hEYXRhUmVxdWVzdCIsInR5cGUiLCJmZXRjaERhdGFTdWNjZXNzIiwicGF5bG9hZCIsImZldGNoRGF0YUZhaWxlZCIsImZldGNoRGF0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJibG9ja2NoYWluIiwic21hcnRDb250cmFjdCIsIm1ldGhvZHMiLCJzaGFyZXMiLCJhY2NvdW50IiwiY2FsbCIsInBhdXNlZCIsIndoaXRlbGlzdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9