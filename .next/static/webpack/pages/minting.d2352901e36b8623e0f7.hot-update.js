"use strict";
self["webpackHotUpdate_N_E"]("pages/minting",{

/***/ "./pages/minting.tsx":
/*!***************************!*\
  !*** ./pages/minting.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/blockchain/blockchainActions */ "./redux/blockchain/blockchainActions.js");
/* harmony import */ var _redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/data/dataActions */ "./redux/data/dataActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components */ "./components/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Hicham\\Documents\\Projects\\NFT Projects\\yubba-official\\pages\\minting.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var desktopLinks = [{
  name: "Minting",
  href: "/minting"
}];

var MintingPage = function MintingPage() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showConnect = _useState[0],
      setConnect = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showWallet = _useState2[0],
      setShowWallet = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      myWallet = _useState3[0],
      setMyWallet = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      selectedValue = _useState4[0],
      setSelectedValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("OxOO"),
      walletAddress = _useState5[0],
      setWalletAddress = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Connect"),
      claimingStatus = _useState6[0],
      setClaimingStatus = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    CONTRACT_ADDRESS: "0x164ADF60c708866A613A77494932898F7347d067",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "ETH",
      ID: 4
    },
    NFT_NAME: "Yubba World",
    SYMBOL: "YB",
    MAX_SUPPLY: 500,
    WEI_COST: 50000000000000000,
    DISPLAY_COST: 0.05,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opensea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false
  }),
      CONFIG = _useState7[0],
      SET_CONFIG = _useState7[1];

  var cost = CONFIG.WEI_COST;
  var gasLimit = CONFIG.GAS_LIMIT;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.blockchain;
  });
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.data;
  }); // === demo purpose - start

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var showWalletConnected = String(router.query.walletConnected);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (showWalletConnected === "yes") setMyWallet(true);
  }, [showWalletConnected]); // useEffect(() => {
  //   dispatch(connect())});
  // === demo purpose - end

  function showMyWallet() {
    setWalletAddress(blockchain.account);
    setShowWallet(true);
  }

  function hideMyWallet() {
    setShowWallet(false);
  }

  function showConnectWallet() {
    setConnect(true);
  }

  function hideConnectWallet() {
    setConnect(false);
  }

  function onClickDisconnectWallet() {
    setMyWallet(true);
    setClaimingStatus("Connect");
  }

  function onConnectMetamask() {
    console.log("click connect metamask");
    dispatch((0,_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_4__.connect)());
    setMyWallet(false);
    setClaimingStatus("Begin");
  }

  function onConnectWalletConnect() {
    console.log("click connect wallet connect");
    setMyWallet(true);
  }

  function onConnectTustWallet() {
    console.log("click trust wallet");
    setMyWallet(true);
  }

  var getData = function getData() {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
    }
  };

  var claimNFTs = function claimNFTs(mintAmount, whitelist) {
    var cost = CONFIG.WEI_COST;
    var gasLimit = CONFIG.GAS_LIMIT;
    var totalCostWei = String(cost * mintAmount);
    var totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setClaimingStatus("Minting");

    if (whitelist === false) {
      blockchain.smartContract.methods.mint(blockchain.account, mintAmount, 1).send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei
      }).once("error", function (err) {
        console.log(err);
        setClaimingStatus("Error");
      }).then(function (receipt) {
        console.log(receipt); // setClaimingNft(false);

        setClaimingStatus("Done");
        dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
      });
    } else {
      blockchain.smartContract.methods.freeMint(blockchain.account, mintAmount).send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account // value: totalCostWei,

      }).once("error", function (err) {
        console.log(err);
        setClaimingStatus("Begin");
      }).then(function (receipt) {
        console.log(receipt); // setClaimingNft(false);

        setClaimingStatus("Done");
        dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getData();
  }, [blockchain.account]);

  var handleChange = function handleChange(e) {
    setSelectedValue(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "h-screen bg-center bg-repeat-x bg-cover bg-bubble",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_2__.NextSeo, {
      title: "Minting",
      description: "Yubba World is a collection of randomly generated digital collectibles of various rarity living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "py-8 pt-20",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "relative mx-auto mb-8 h-14 md:h-24",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: "/yubba-world-1line.png",
            layout: "fill",
            objectFit: "contain",
            alt: "Yubba World"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), blockchain.account == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Begin" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: "dotted 0.3px #a6a5a5"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
                variant: "primary",
                className: "rounded-full py-3 px-6 ",
                style: {
                  justifyContent: "center",
                  fontWeight: "lighter",
                  height: "40px",
                  color: "#fffeff"
                },
                onClick: function onClick(e) {
                  e.preventDefault();
                  claimNFTs(data.whitelist, true);
                  getData();
                },
                children: "Give me my Yubbas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: "dotted 0.3px #a6a5a5"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "w-full h-9  -ml-0",
                style: {
                  justifyContent: "center"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                  className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().selectdiv),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("label", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("select", {
                      onChange: handleChange,
                      defaultValue: "1",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 279,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 280,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - data.totalSupply, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 74
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, " ", CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
                variant: "primary",
                className: "rounded-full py-3 px-6 ",
                style: {
                  justifyContent: "center",
                  fontWeight: "lighter",
                  height: "40px",
                  color: "#fffeff"
                },
                onClick: function onClick(e) {
                  e.preventDefault();
                  claimNFTs(selectedValue, false);
                  getData();
                },
                children: "Get me some Yubbas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Minting" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "h-[84px] mt-[60px] relative mx-aut ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/loader.gif",
                layout: "fill",
                objectFit: "contain",
                alt: "Yubba World"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Done" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }, _this);
};

_s(MintingPage, "Qq9Hyl8YgGN8UeahFtr85L76BeA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = MintingPage;
/* harmony default export */ __webpack_exports__["default"] = (MintingPage);

var _c;

$RefreshReg$(_c, "MintingPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy5kMjM1MjkwMWUzNmI4NjIzZTBmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQ2xDLGtCQUFrQ3JCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9zQixXQUFQO0FBQUEsTUFBb0JDLFVBQXBCOztBQUNBLG1CQUFvQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU93QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU8wQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQzNCLCtDQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQU80QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEM3QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEQ7QUFBQSxNQUFPOEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDL0IsK0NBQVEsQ0FBQyxTQUFELENBQXBEO0FBQUEsTUFBT2dDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE2QmpDLCtDQUFRLENBQUM7QUFDcENrQyxJQUFBQSxnQkFBZ0IsRUFBRSw0Q0FEa0I7QUFFcENDLElBQUFBLFNBQVMsRUFBRSxFQUZ5QjtBQUdwQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1BQUFB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QTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBQywrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FVRyxJQXBMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJGLGVBNk1FLDhEQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFFUixVQURiO0FBRUUsZ0JBQVUsRUFBRXVDLFlBRmQ7QUFHRSxtQkFBYSxFQUFFakMsYUFIakI7QUFJRSx3QkFBa0IsRUFBRW9DO0FBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3TUYsZUFvTkUsOERBQUMsMkRBQUQ7QUFDRSxlQUFTLEVBQUU1QyxXQURiO0FBRUUsZ0JBQVUsRUFBRTJDLGlCQUZkO0FBR0UscUJBQWUsRUFBRUUsaUJBSG5CO0FBSUUsMEJBQW9CLEVBQUVHLHNCQUp4QjtBQUtFLHdCQUFrQixFQUFFQztBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcE5GLGVBNE5FO0FBQVMsZUFBUyxFQUFDLG1DQUFuQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1TkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvT0QsQ0F2WEQ7O0dBQU1sRDtVQThCYWIsc0RBQ0VDLHNEQUNOQSxzREFHRUw7OztLQW5DWGlCO0FBeVhOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTmV4dFNlbyBhcyBTRU8gfSBmcm9tIFwibmV4dC1zZW9cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIsIFJvb3RTdGF0ZU9yQW55IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwiLi4vcmVkdXgvYmxvY2tjaGFpbi9ibG9ja2NoYWluQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tIFwiLi4vcmVkdXgvZGF0YS9kYXRhQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJ1dHRvbkNvbm5lY3RXYWxsZXQsXHJcbiAgQnV0dG9uQ2xhaW1ORlQsXHJcbiAgQnV0dG9uV2FpdGluZyxcclxuICBCdXR0b25XYWxsZXQsXHJcbiAgQ29ubmVjdFdhbGxldFBvcHVwLFxyXG4gIENvbnRhaW5lcixcclxuICBNaW50aW5nQ2FyZCxcclxuICBNeVdhbGxldFBvcHVwLFxyXG4gIE5hdmlnYXRpb24sXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZGVza3RvcExpbmtzID0gW3sgbmFtZTogXCJNaW50aW5nXCIsIGhyZWY6IFwiL21pbnRpbmdcIiB9XTtcclxuXHJcbmNvbnN0IE1pbnRpbmdQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0Nvbm5lY3QsIHNldENvbm5lY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93V2FsbGV0LCBzZXRTaG93V2FsbGV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbXlXYWxsZXQsIHNldE15V2FsbGV0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiT3hPT1wiKTtcclxuICBjb25zdCBbY2xhaW1pbmdTdGF0dXMsIHNldENsYWltaW5nU3RhdHVzXSA9IHVzZVN0YXRlKFwiQ29ubmVjdFwiKTtcclxuXHJcbiAgY29uc3QgW0NPTkZJRywgU0VUX0NPTkZJR10gPSB1c2VTdGF0ZSh7XHJcbiAgICBDT05UUkFDVF9BRERSRVNTOiBcIjB4MTY0QURGNjBjNzA4ODY2QTYxM0E3NzQ5NDkzMjg5OEY3MzQ3ZDA2N1wiLFxyXG4gICAgU0NBTl9MSU5LOiBcIlwiLFxyXG4gICAgTkVUV09SSzoge1xyXG4gICAgICBOQU1FOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgIFNZTUJPTDogXCJFVEhcIixcclxuICAgICAgSUQ6IDQsXHJcbiAgICB9LFxyXG4gICAgTkZUX05BTUU6IFwiWXViYmEgV29ybGRcIixcclxuICAgIFNZTUJPTDogXCJZQlwiLFxyXG4gICAgTUFYX1NVUFBMWTogNTAwLFxyXG4gICAgV0VJX0NPU1Q6IDUwMDAwMDAwMDAwMDAwMDAwLFxyXG4gICAgRElTUExBWV9DT1NUOiAwLjA1LFxyXG4gICAgR0FTX0xJTUlUOiAyODUwMDAsXHJcbiAgICBNQVJLRVRQTEFDRTogXCJPcGVuc2VhXCIsXHJcbiAgICBNQVJLRVRQTEFDRV9MSU5LOiBcIlwiLFxyXG4gICAgU0hPV19CQUNLR1JPVU5EOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1Q7XHJcbiAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVDtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGJsb2NrY2hhaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZU9yQW55KSA9PiBzdGF0ZS5ibG9ja2NoYWluKTtcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuZGF0YSk7XHJcblxyXG4gIC8vID09PSBkZW1vIHB1cnBvc2UgLSBzdGFydFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNob3dXYWxsZXRDb25uZWN0ZWQgPSBTdHJpbmcocm91dGVyLnF1ZXJ5LndhbGxldENvbm5lY3RlZCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93V2FsbGV0Q29ubmVjdGVkID09PSBcInllc1wiKSBzZXRNeVdhbGxldCh0cnVlKTtcclxuICB9LCBbc2hvd1dhbGxldENvbm5lY3RlZF0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goY29ubmVjdCgpKX0pO1xyXG4gIC8vID09PSBkZW1vIHB1cnBvc2UgLSBlbmRcclxuXHJcbiAgZnVuY3Rpb24gc2hvd015V2FsbGV0KCkge1xyXG4gICAgc2V0V2FsbGV0QWRkcmVzcyhibG9ja2NoYWluLmFjY291bnQpO1xyXG4gICAgc2V0U2hvd1dhbGxldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVNeVdhbGxldCgpIHtcclxuICAgIHNldFNob3dXYWxsZXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0Nvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICBzZXRDb25uZWN0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZUNvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICBzZXRDb25uZWN0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSk7XHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cyhcIkNvbm5lY3RcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RNZXRhbWFzaygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgY29ubmVjdCBtZXRhbWFza1wiKTtcclxuICAgIGRpc3BhdGNoKGNvbm5lY3QoKSk7XHJcbiAgICBzZXRNeVdhbGxldChmYWxzZSk7XHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cyhcIkJlZ2luXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0V2FsbGV0Q29ubmVjdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgY29ubmVjdCB3YWxsZXQgY29ubmVjdFwiKTtcclxuICAgIHNldE15V2FsbGV0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0VHVzdFdhbGxldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgdHJ1c3Qgd2FsbGV0XCIpO1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKGJsb2NrY2hhaW4uYWNjb3VudCAhPT0gXCJcIiAmJiBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QgIT09IG51bGwpIHtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYWltTkZUcyA9IChtaW50QW1vdW50OiBudW1iZXIsIHdoaXRlbGlzdDogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1Q7XHJcbiAgICBsZXQgZ2FzTGltaXQgPSBDT05GSUcuR0FTX0xJTUlUO1xyXG4gICAgbGV0IHRvdGFsQ29zdFdlaSA9IFN0cmluZyhjb3N0ICogbWludEFtb3VudCk7XHJcbiAgICBsZXQgdG90YWxHYXNMaW1pdCA9IFN0cmluZyhnYXNMaW1pdCAqIG1pbnRBbW91bnQpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb3N0OiBcIiwgdG90YWxDb3N0V2VpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiR2FzIGxpbWl0OiBcIiwgdG90YWxHYXNMaW1pdCk7XHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cyhcIk1pbnRpbmdcIik7XHJcbiAgICBpZiAod2hpdGVsaXN0ID09PSBmYWxzZSkge1xyXG4gICAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5taW50KGJsb2NrY2hhaW4uYWNjb3VudCwgbWludEFtb3VudCwgMSlcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgICAgdG86IENPTkZJRy5DT05UUkFDVF9BRERSRVNTLFxyXG4gICAgICAgICAgZnJvbTogYmxvY2tjaGFpbi5hY2NvdW50LFxyXG4gICAgICAgICAgdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbmNlKFwiZXJyb3JcIiwgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJFcnJvclwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xyXG4gICAgICAgICAgLy8gc2V0Q2xhaW1pbmdOZnQoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJEb25lXCIpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuZnJlZU1pbnQoYmxvY2tjaGFpbi5hY2NvdW50LCBtaW50QW1vdW50KVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgIGdhc0xpbWl0OiBTdHJpbmcodG90YWxHYXNMaW1pdCksXHJcbiAgICAgICAgICB0bzogQ09ORklHLkNPTlRSQUNUX0FERFJFU1MsXHJcbiAgICAgICAgICBmcm9tOiBibG9ja2NoYWluLmFjY291bnQsXHJcbiAgICAgICAgICAvLyB2YWx1ZTogdG90YWxDb3N0V2VpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9uY2UoXCJlcnJvclwiLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cyhcIkJlZ2luXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlY2VpcHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVjZWlwdCk7XHJcbiAgICAgICAgICAvLyBzZXRDbGFpbWluZ05mdChmYWxzZSk7XHJcbiAgICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cyhcIkRvbmVcIik7XHJcbiAgICAgICAgICBkaXNwYXRjaChmZXRjaERhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKTtcclxuICB9LCBbYmxvY2tjaGFpbi5hY2NvdW50XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWNlbnRlciBiZy1yZXBlYXQteCBiZy1jb3ZlciBiZy1idWJibGVcIj5cclxuICAgICAgPFNFT1xyXG4gICAgICAgIHRpdGxlPVwiTWludGluZ1wiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJZdWJiYSBXb3JsZCBpcyBhIGNvbGxlY3Rpb24gb2YgcmFuZG9tbHkgZ2VuZXJhdGVkIGRpZ2l0YWwgY29sbGVjdGlibGVzIG9mIHZhcmlvdXMgcmFyaXR5IGxpdmluZyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiBhcyBFUkMtNzIxLjEwLDAwMCB1bmlxdWUgY2hhcmFjdGVycyBvZiBzdGFnZ2VyaW5nIHZhcmlldHlcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25cclxuICAgICAgICBkZXNrdG9wTGlua3M9e2Rlc2t0b3BMaW5rc31cclxuICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgbXlXYWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Db25uZWN0V2FsbGV0IG9uQ2xpY2s9e29uQ29ubmVjdE1ldGFtYXNrfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbldhbGxldFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tNeVdhbGxldD17c2hvd015V2FsbGV0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IHB0LTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYi04IGgtMTQgbWQ6aC0yNFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIveXViYmEtd29ybGQtMWxpbmUucG5nXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9yIGNvdW50ZG93biAqL31cclxuICAgICAgICAgIHsvKiA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICBZdWJiYSBtaW50aW5nIHdpbGwgc3RhcnQgaW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1iLTggdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4wMCA6IDAwIDo8L3NwYW4+IDQ1XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhzIGZvbnQtdGhpblwiPlxyXG4gICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYSAwLjA1IEVUSFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uV2FpdGluZyBibG9jayAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTWludGluZ0NhcmQ+ICovfVxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb20gKi99XHJcbiAgICAgICAgICB7YmxvY2tjaGFpbi5hY2NvdW50ID09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IHRvIEV0aGVyZXVtIE1haW5uZXQgZmlyc3QgIVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSBcIkJlZ2luXCIgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICB7ZGF0YS53aGl0ZWxpc3QgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBtZDptdC0wIC1tdC02IHRleHQteGwgdGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucywgeW91IGNhbiBjbGFpbSB7ZGF0YS53aGl0ZWxpc3R9IGZyZWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgIVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcImRvdHRlZCAwLjNweCAjYTZhNWE1XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoZGF0YS53aGl0ZWxpc3QsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdpdmUgbWUgbXkgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBIb3cgbWFueSBZdWJiYXMgd291bGQgeW91IGxpa2U/XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwYi02IHRleHQtcmlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiZG90dGVkIDAuM3B4ICNhNmE1YTVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSAgLW1sLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBtdC00IHRleHQtc2Vjb25kYXJ5IHRleHQteHMgZm9udC10aGluIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5NQVhfU1VQUExZIC0gZGF0YS50b3RhbFN1cHBseX0gcmVtYWluaW5nIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmljZSBwZXIgWXViYmE6IHtDT05GSUcuRElTUExBWV9DT1NUfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5ORVRXT1JLLlNZTUJPTH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LWxlZnQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LTJ4bCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoQ09ORklHLkRJU1BMQVlfQ09TVCAqIHNlbGVjdGVkVmFsdWUpLnRvRml4ZWQoMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb24tZXRoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBteC1hdXRvIG10LTYgbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMyBweC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJsaWdodGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZlZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltTkZUcyhzZWxlY3RlZFZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2V0IG1lIHNvbWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSBcIk1pbnRpbmdcIiA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXJpbmcgWXViYmFzIDxiciAvPiB0byB5b3VyIHdhbGxldFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzg0cHhdIG10LVs2MHB4XSByZWxhdGl2ZSBteC1hdXQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2FkZXIuZ2lmXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGRzU3Bpbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09IFwiRG9uZVwiID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2ZlciBjb21wbGV0ZSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFl1YmJhIGR1YmJhIGRvb2/igKYg8J+OiVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC10aXRsZSAtbWItNSBmb250LWJvbGQgdGV4dC0yeGwgIG1kOnRleHQtM3hsIHVwcGVyY2FzZSB0cmFja2luZy1bNnB4XSBtZDp0cmFja2luZy1bMTNweF0gXCI+XHJcbiAgICAgICAgICAgICAgICBUaGFuayB5b3VcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8TXlXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd1dhbGxldH1cclxuICAgICAgICBjbG9zZVBvcHVwPXtoaWRlTXlXYWxsZXR9XHJcbiAgICAgICAgd2FsbGV0QWRkcmVzcz17d2FsbGV0QWRkcmVzc31cclxuICAgICAgICBvbkRpc2Nvbm5lY3RXYWxsZXQ9e29uQ2xpY2tEaXNjb25uZWN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPENvbm5lY3RXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd0Nvbm5lY3R9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZUNvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgb25DbGlja01ldGFtYXNrPXtvbkNvbm5lY3RNZXRhbWFza31cclxuICAgICAgICBvbkNsaWNrV2FsbGV0Q29ubmVjdD17b25Db25uZWN0V2FsbGV0Q29ubmVjdH1cclxuICAgICAgICBvbkNsaWNrVHJ1c3RXYWxsZXQ9e29uQ29ubmVjdFR1c3RXYWxsZXR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktOCBtIG1kOm10LWF1dG8gICAtbXQtMTBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IFl1YmJhIFdvcmxkIDIwMjEsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50aW5nUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5leHRTZW8iLCJTRU8iLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwiZmV0Y2hEYXRhIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIkJ1dHRvbkNvbm5lY3RXYWxsZXQiLCJCdXR0b25XYWxsZXQiLCJDb25uZWN0V2FsbGV0UG9wdXAiLCJDb250YWluZXIiLCJNaW50aW5nQ2FyZCIsIk15V2FsbGV0UG9wdXAiLCJOYXZpZ2F0aW9uIiwiZGVza3RvcExpbmtzIiwibmFtZSIsImhyZWYiLCJNaW50aW5nUGFnZSIsInNob3dDb25uZWN0Iiwic2V0Q29ubmVjdCIsInNob3dXYWxsZXQiLCJzZXRTaG93V2FsbGV0IiwibXlXYWxsZXQiLCJzZXRNeVdhbGxldCIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJjbGFpbWluZ1N0YXR1cyIsInNldENsYWltaW5nU3RhdHVzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIlNDQU5fTElOSyIsIk5FVFdPUksiLCJOQU1FIiwiU1lNQk9MIiwiSUQiLCJORlRfTkFNRSIsIk1BWF9TVVBQTFkiLCJXRUlfQ09TVCIsIkRJU1BMQVlfQ09TVCIsIkdBU19MSU1JVCIsIk1BUktFVFBMQUNFIiwiTUFSS0VUUExBQ0VfTElOSyIsIlNIT1dfQkFDS0dST1VORCIsIkNPTkZJRyIsIlNFVF9DT05GSUciLCJjb3N0IiwiZ2FzTGltaXQiLCJkaXNwYXRjaCIsImJsb2NrY2hhaW4iLCJzdGF0ZSIsImRhdGEiLCJyb3V0ZXIiLCJzaG93V2FsbGV0Q29ubmVjdGVkIiwiU3RyaW5nIiwicXVlcnkiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzaG93TXlXYWxsZXQiLCJhY2NvdW50IiwiaGlkZU15V2FsbGV0Iiwic2hvd0Nvbm5lY3RXYWxsZXQiLCJoaWRlQ29ubmVjdFdhbGxldCIsIm9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0Iiwib25Db25uZWN0TWV0YW1hc2siLCJjb25zb2xlIiwibG9nIiwib25Db25uZWN0V2FsbGV0Q29ubmVjdCIsIm9uQ29ubmVjdFR1c3RXYWxsZXQiLCJnZXREYXRhIiwic21hcnRDb250cmFjdCIsImNsYWltTkZUcyIsIm1pbnRBbW91bnQiLCJ3aGl0ZWxpc3QiLCJ0b3RhbENvc3RXZWkiLCJ0b3RhbEdhc0xpbWl0IiwibWV0aG9kcyIsIm1pbnQiLCJzZW5kIiwidG8iLCJmcm9tIiwidmFsdWUiLCJvbmNlIiwiZXJyIiwidGhlbiIsInJlY2VpcHQiLCJmcmVlTWludCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJib3JkZXJCb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJjb2xvciIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZGl2IiwidG90YWxTdXBwbHkiLCJ0b0ZpeGVkIiwibGRzU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=