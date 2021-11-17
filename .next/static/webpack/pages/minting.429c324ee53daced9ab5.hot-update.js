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
    if (blockchain.account == null) setClaimingStatus("Connect");else setClaimingStatus("Begin");
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
      lineNumber: 179,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
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
            lineNumber: 201,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this), claimingStatus == "Connect" || blockchain.account == null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Begin" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: "dotted 0.3px #a6a5a5"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
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
                lineNumber: 245,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
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
                        lineNumber: 280,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 281,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 283,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 284,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - data.totalSupply, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 74
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, " ", CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(1)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 302,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 305,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
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
                lineNumber: 315,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Minting" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 339,
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
                lineNumber: 344,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 13
        }, _this) : null, claimingStatus === "Done" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 178,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy40MjljMzI0ZWU1M2RhY2VkOWFiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQ2xDLGtCQUFrQ3JCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9zQixXQUFQO0FBQUEsTUFBb0JDLFVBQXBCOztBQUNBLG1CQUFvQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU93QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU8wQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQzNCLCtDQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQU80QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEM3QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEQ7QUFBQSxNQUFPOEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDL0IsK0NBQVEsQ0FBQyxTQUFELENBQXBEO0FBQUEsTUFBT2dDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE2QmpDLCtDQUFRLENBQUM7QUFDcENrQyxJQUFBQSxnQkFBZ0IsRUFBRSw0Q0FEa0I7QUFFcENDLElBQUFBLFNBQVMsRUFBRSxFQUZ5QjtBQUdwQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1BQUFB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Qyw4REFBQyxvREFBRDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxpRkFBZjtBQUFBLDBEQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsK0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBVUcsSUFwTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRixlQTZNRSw4REFBQyxzREFBRDtBQUNFLGVBQVMsRUFBRVIsVUFEYjtBQUVFLGdCQUFVLEVBQUV1QyxZQUZkO0FBR0UsbUJBQWEsRUFBRWpDLGFBSGpCO0FBSUUsd0JBQWtCLEVBQUVvQztBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN01GLGVBb05FLDhEQUFDLDJEQUFEO0FBQ0UsZUFBUyxFQUFFNUMsV0FEYjtBQUVFLGdCQUFVLEVBQUUyQyxpQkFGZDtBQUdFLHFCQUFlLEVBQUVFLGlCQUhuQjtBQUlFLDBCQUFvQixFQUFFRyxzQkFKeEI7QUFLRSx3QkFBa0IsRUFBRUM7QUFMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBORixlQTRORTtBQUFTLGVBQVMsRUFBQyxtQ0FBbkI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb09ELENBMVhEOztHQUFNbEQ7VUE4QmFiLHNEQUNFQyxzREFDTkEsc0RBR0VMOzs7S0FuQ1hpQjtBQTRYTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IE5leHRTZW8gYXMgU0VPIH0gZnJvbSBcIm5leHQtc2VvXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyLCBSb290U3RhdGVPckFueSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIi4uL3JlZHV4L2Jsb2NrY2hhaW4vYmxvY2tjaGFpbkFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L2RhdGEvZGF0YUFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBCdXR0b25Db25uZWN0V2FsbGV0LFxyXG4gIEJ1dHRvbkNsYWltTkZULFxyXG4gIEJ1dHRvbldhaXRpbmcsXHJcbiAgQnV0dG9uV2FsbGV0LFxyXG4gIENvbm5lY3RXYWxsZXRQb3B1cCxcclxuICBDb250YWluZXIsXHJcbiAgTWludGluZ0NhcmQsXHJcbiAgTXlXYWxsZXRQb3B1cCxcclxuICBOYXZpZ2F0aW9uLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IGRlc2t0b3BMaW5rcyA9IFt7IG5hbWU6IFwiTWludGluZ1wiLCBocmVmOiBcIi9taW50aW5nXCIgfV07XHJcblxyXG5jb25zdCBNaW50aW5nUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dDb25uZWN0LCBzZXRDb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1dhbGxldCwgc2V0U2hvd1dhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW215V2FsbGV0LCBzZXRNeVdhbGxldF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIk94T09cIik7XHJcbiAgY29uc3QgW2NsYWltaW5nU3RhdHVzLCBzZXRDbGFpbWluZ1N0YXR1c10gPSB1c2VTdGF0ZShcIkNvbm5lY3RcIik7XHJcblxyXG4gIGNvbnN0IFtDT05GSUcsIFNFVF9DT05GSUddID0gdXNlU3RhdGUoe1xyXG4gICAgQ09OVFJBQ1RfQUREUkVTUzogXCIweDE2NEFERjYwYzcwODg2NkE2MTNBNzc0OTQ5MzI4OThGNzM0N2QwNjdcIixcclxuICAgIFNDQU5fTElOSzogXCJcIixcclxuICAgIE5FVFdPUks6IHtcclxuICAgICAgTkFNRTogXCJFdGhlcmV1bVwiLFxyXG4gICAgICBTWU1CT0w6IFwiRVRIXCIsXHJcbiAgICAgIElEOiA0LFxyXG4gICAgfSxcclxuICAgIE5GVF9OQU1FOiBcIll1YmJhIFdvcmxkXCIsXHJcbiAgICBTWU1CT0w6IFwiWUJcIixcclxuICAgIE1BWF9TVVBQTFk6IDUwMCxcclxuICAgIFdFSV9DT1NUOiA1MDAwMDAwMDAwMDAwMDAwMCxcclxuICAgIERJU1BMQVlfQ09TVDogMC4wNSxcclxuICAgIEdBU19MSU1JVDogMjg1MDAwLFxyXG4gICAgTUFSS0VUUExBQ0U6IFwiT3BlbnNlYVwiLFxyXG4gICAgTUFSS0VUUExBQ0VfTElOSzogXCJcIixcclxuICAgIFNIT1dfQkFDS0dST1VORDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUO1xyXG4gIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVQ7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBibG9ja2NoYWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuYmxvY2tjaGFpbik7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlT3JBbnkpID0+IHN0YXRlLmRhdGEpO1xyXG5cclxuICAvLyA9PT0gZGVtbyBwdXJwb3NlIC0gc3RhcnRcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBzaG93V2FsbGV0Q29ubmVjdGVkID0gU3RyaW5nKHJvdXRlci5xdWVyeS53YWxsZXRDb25uZWN0ZWQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvd1dhbGxldENvbm5lY3RlZCA9PT0gXCJ5ZXNcIikgc2V0TXlXYWxsZXQodHJ1ZSk7XHJcbiAgfSwgW3Nob3dXYWxsZXRDb25uZWN0ZWRdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKGNvbm5lY3QoKSl9KTtcclxuICAvLyA9PT0gZGVtbyBwdXJwb3NlIC0gZW5kXHJcblxyXG4gIGZ1bmN0aW9uIHNob3dNeVdhbGxldCgpIHtcclxuICAgIHNldFdhbGxldEFkZHJlc3MoYmxvY2tjaGFpbi5hY2NvdW50KTtcclxuICAgIHNldFNob3dXYWxsZXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlTXlXYWxsZXQoKSB7XHJcbiAgICBzZXRTaG93V2FsbGV0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrRGlzY29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldE15V2FsbGV0KHRydWUpO1xyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJDb25uZWN0XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0TWV0YW1hc2soKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNvbm5lY3QgbWV0YW1hc2tcIik7XHJcbiAgICBkaXNwYXRjaChjb25uZWN0KCkpO1xyXG4gICAgc2V0TXlXYWxsZXQoZmFsc2UpO1xyXG4gICAgaWYoIGJsb2NrY2hhaW4uYWNjb3VudCA9PSBudWxsKVxyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJDb25uZWN0XCIpO1xyXG4gICAgZWxzZVxyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJCZWdpblwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFdhbGxldENvbm5lY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIGNvbm5lY3Qgd2FsbGV0IGNvbm5lY3RcIik7XHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFR1c3RXYWxsZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIHRydXN0IHdhbGxldFwiKTtcclxuICAgIHNldE15V2FsbGV0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIGlmIChibG9ja2NoYWluLmFjY291bnQgIT09IFwiXCIgJiYgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ICE9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFpbU5GVHMgPSAobWludEFtb3VudDogbnVtYmVyLCB3aGl0ZWxpc3Q6IGJvb2xlYW4pID0+IHtcclxuICAgIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUO1xyXG4gICAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVDtcclxuICAgIGxldCB0b3RhbENvc3RXZWkgPSBTdHJpbmcoY29zdCAqIG1pbnRBbW91bnQpO1xyXG4gICAgbGV0IHRvdGFsR2FzTGltaXQgPSBTdHJpbmcoZ2FzTGltaXQgKiBtaW50QW1vdW50KTtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29zdDogXCIsIHRvdGFsQ29zdFdlaSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdhcyBsaW1pdDogXCIsIHRvdGFsR2FzTGltaXQpO1xyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJNaW50aW5nXCIpO1xyXG4gICAgaWYgKHdoaXRlbGlzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAubWludChibG9ja2NoYWluLmFjY291bnQsIG1pbnRBbW91bnQsIDEpXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgZ2FzTGltaXQ6IFN0cmluZyh0b3RhbEdhc0xpbWl0KSxcclxuICAgICAgICAgIHRvOiBDT05GSUcuQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgICAgIGZyb206IGJsb2NrY2hhaW4uYWNjb3VudCxcclxuICAgICAgICAgIHZhbHVlOiB0b3RhbENvc3RXZWksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub25jZShcImVycm9yXCIsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIHNldENsYWltaW5nU3RhdHVzKFwiRXJyb3JcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVjZWlwdDogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KTtcclxuICAgICAgICAgIC8vIHNldENsYWltaW5nTmZ0KGZhbHNlKTtcclxuICAgICAgICAgIHNldENsYWltaW5nU3RhdHVzKFwiRG9uZVwiKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJsb2NrY2hhaW4uc21hcnRDb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmZyZWVNaW50KGJsb2NrY2hhaW4uYWNjb3VudCwgbWludEFtb3VudClcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgICAgdG86IENPTkZJRy5DT05UUkFDVF9BRERSRVNTLFxyXG4gICAgICAgICAgZnJvbTogYmxvY2tjaGFpbi5hY2NvdW50LFxyXG4gICAgICAgICAgLy8gdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbmNlKFwiZXJyb3JcIiwgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJCZWdpblwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpO1xyXG4gICAgICAgICAgLy8gc2V0Q2xhaW1pbmdOZnQoZmFsc2UpO1xyXG4gICAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoXCJEb25lXCIpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKCk7XHJcbiAgfSwgW2Jsb2NrY2hhaW4uYWNjb3VudF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1jZW50ZXIgYmctcmVwZWF0LXggYmctY292ZXIgYmctYnViYmxlXCI+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT1cIk1pbnRpbmdcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiWXViYmEgV29ybGQgaXMgYSBjb2xsZWN0aW9uIG9mIHJhbmRvbWx5IGdlbmVyYXRlZCBkaWdpdGFsIGNvbGxlY3RpYmxlcyBvZiB2YXJpb3VzIHJhcml0eSBsaXZpbmcgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gYXMgRVJDLTcyMS4xMCwwMDAgdW5pcXVlIGNoYXJhY3RlcnMgb2Ygc3RhZ2dlcmluZyB2YXJpZXR5XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxOYXZpZ2F0aW9uXHJcbiAgICAgICAgZGVza3RvcExpbmtzPXtkZXNrdG9wTGlua3N9XHJcbiAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgIG15V2FsbGV0ID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uQ29ubmVjdFdhbGxldCBvbkNsaWNrPXtvbkNvbm5lY3RNZXRhbWFza30gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25XYWxsZXRcclxuICAgICAgICAgICAgICBvbkNsaWNrTXlXYWxsZXQ9e3Nob3dNeVdhbGxldH1cclxuICAgICAgICAgICAgICBvbkNsaWNrRGlzY29ubmVjdFdhbGxldD17b25DbGlja0Rpc2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBwdC0yMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWItOCBoLTE0IG1kOmgtMjRcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3l1YmJhLXdvcmxkLTFsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWXViYmEgV29ybGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogbWludGluZyBjYXJkIGZvciBjb3VudGRvd24gKi99XHJcbiAgICAgICAgICB7LyogPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgWXViYmEgbWludGluZyB3aWxsIHN0YXJ0IGluXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBtYi04IHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+MDAgOiAwMCA6PC9zcGFuPiA0NVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14cyBmb250LXRoaW5cIj5cclxuICAgICAgICAgICAgICBQcmljZSBwZXIgWXViYmEgMC4wNSBFVEhcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbldhaXRpbmcgYmxvY2sgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01pbnRpbmdDYXJkPiAqL31cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9tICovfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09IFwiQ29ubmVjdFwiIHx8IGJsb2NrY2hhaW4uYWNjb3VudCA9PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCB0byBFdGhlcmV1bSBNYWlubmV0IGZpcnN0ICFcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gXCJCZWdpblwiID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAge2RhdGEud2hpdGVsaXN0ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMsIHlvdSBjYW4gY2xhaW0ge2RhdGEud2hpdGVsaXN0fSBmcmVlIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgICFcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBiLTYgdGV4dC1yaWdodCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCJkb3R0ZWQgMC4zcHggI2E2YTVhNVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIG14LWF1dG8gbXQtNiBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBweS0zIHB4LTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImxpZ2h0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmVmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1ORlRzKGRhdGEud2hpdGVsaXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHaXZlIG1lIG15IFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IG1kOm10LTAgLW10LTYgdGV4dC14bCB0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG93IG1hbnkgWXViYmFzIHdvdWxkIHlvdSBsaWtlP1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcImRvdHRlZCAwLjNweCAjYTZhNWE1XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgIC1tbC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBkZWZhdWx0VmFsdWU9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgbXQtNCB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzIGZvbnQtdGhpbiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTUFYX1NVUFBMWSAtIGRhdGEudG90YWxTdXBwbHl9IHJlbWFpbmluZyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2UgcGVyIFl1YmJhOiB7Q09ORklHLkRJU1BMQVlfQ09TVH17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTkVUV09SSy5TWU1CT0x9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC1sZWZ0IHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC0yeGwgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KENPTkZJRy5ESVNQTEFZX0NPU1QgKiBzZWxlY3RlZFZhbHVlKS50b0ZpeGVkKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29uLWV0aC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwibGlnaHRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoc2VsZWN0ZWRWYWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBtZSBzb21lIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gXCJNaW50aW5nXCIgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zZmVyaW5nIFl1YmJhcyA8YnIgLz4gdG8geW91ciB3YWxsZXRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4NHB4XSBtdC1bNjBweF0gcmVsYXRpdmUgbXgtYXV0IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9hZGVyLmdpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiWXViYmEgV29ybGRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxkc1NwaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSBcIkRvbmVcIiA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXIgY29tcGxldGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBZdWJiYSBkdWJiYSBkb29v4oCmIPCfjolcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgLW1iLTUgZm9udC1ib2xkIHRleHQtMnhsICBtZDp0ZXh0LTN4bCB1cHBlcmNhc2UgdHJhY2tpbmctWzZweF0gbWQ6dHJhY2tpbmctWzEzcHhdIFwiPlxyXG4gICAgICAgICAgICAgICAgVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPE15V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dXYWxsZXR9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZU15V2FsbGV0fVxyXG4gICAgICAgIHdhbGxldEFkZHJlc3M9e3dhbGxldEFkZHJlc3N9XHJcbiAgICAgICAgb25EaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDb25uZWN0V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dDb25uZWN0fVxyXG4gICAgICAgIGNsb3NlUG9wdXA9e2hpZGVDb25uZWN0V2FsbGV0fVxyXG4gICAgICAgIG9uQ2xpY2tNZXRhbWFzaz17b25Db25uZWN0TWV0YW1hc2t9XHJcbiAgICAgICAgb25DbGlja1dhbGxldENvbm5lY3Q9e29uQ29ubmVjdFdhbGxldENvbm5lY3R9XHJcbiAgICAgICAgb25DbGlja1RydXN0V2FsbGV0PXtvbkNvbm5lY3RUdXN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTggbSBtZDptdC1hdXRvICAgLW10LTEwXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgdGV4dC14c1wiPlxyXG4gICAgICAgICAgJmNvcHk7IENvcHlyaWdodCBZdWJiYSBXb3JsZCAyMDIxLCBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludGluZ1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJOZXh0U2VvIiwiU0VPIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY29ubmVjdCIsImZldGNoRGF0YSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJCdXR0b25Db25uZWN0V2FsbGV0IiwiQnV0dG9uV2FsbGV0IiwiQ29ubmVjdFdhbGxldFBvcHVwIiwiQ29udGFpbmVyIiwiTWludGluZ0NhcmQiLCJNeVdhbGxldFBvcHVwIiwiTmF2aWdhdGlvbiIsImRlc2t0b3BMaW5rcyIsIm5hbWUiLCJocmVmIiwiTWludGluZ1BhZ2UiLCJzaG93Q29ubmVjdCIsInNldENvbm5lY3QiLCJzaG93V2FsbGV0Iiwic2V0U2hvd1dhbGxldCIsIm15V2FsbGV0Iiwic2V0TXlXYWxsZXQiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY2xhaW1pbmdTdGF0dXMiLCJzZXRDbGFpbWluZ1N0YXR1cyIsIkNPTlRSQUNUX0FERFJFU1MiLCJTQ0FOX0xJTksiLCJORVRXT1JLIiwiTkFNRSIsIlNZTUJPTCIsIklEIiwiTkZUX05BTUUiLCJNQVhfU1VQUExZIiwiV0VJX0NPU1QiLCJESVNQTEFZX0NPU1QiLCJHQVNfTElNSVQiLCJNQVJLRVRQTEFDRSIsIk1BUktFVFBMQUNFX0xJTksiLCJTSE9XX0JBQ0tHUk9VTkQiLCJDT05GSUciLCJTRVRfQ09ORklHIiwiY29zdCIsImdhc0xpbWl0IiwiZGlzcGF0Y2giLCJibG9ja2NoYWluIiwic3RhdGUiLCJkYXRhIiwicm91dGVyIiwic2hvd1dhbGxldENvbm5lY3RlZCIsIlN0cmluZyIsInF1ZXJ5Iiwid2FsbGV0Q29ubmVjdGVkIiwic2hvd015V2FsbGV0IiwiYWNjb3VudCIsImhpZGVNeVdhbGxldCIsInNob3dDb25uZWN0V2FsbGV0IiwiaGlkZUNvbm5lY3RXYWxsZXQiLCJvbkNsaWNrRGlzY29ubmVjdFdhbGxldCIsIm9uQ29ubmVjdE1ldGFtYXNrIiwiY29uc29sZSIsImxvZyIsIm9uQ29ubmVjdFdhbGxldENvbm5lY3QiLCJvbkNvbm5lY3RUdXN0V2FsbGV0IiwiZ2V0RGF0YSIsInNtYXJ0Q29udHJhY3QiLCJjbGFpbU5GVHMiLCJtaW50QW1vdW50Iiwid2hpdGVsaXN0IiwidG90YWxDb3N0V2VpIiwidG90YWxHYXNMaW1pdCIsIm1ldGhvZHMiLCJtaW50Iiwic2VuZCIsInRvIiwiZnJvbSIsInZhbHVlIiwib25jZSIsImVyciIsInRoZW4iLCJyZWNlaXB0IiwiZnJlZU1pbnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYm9yZGVyQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0IiwiaGVpZ2h0IiwiY29sb3IiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGRpdiIsInRvdGFsU3VwcGx5IiwidG9GaXhlZCIsImxkc1NwaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9