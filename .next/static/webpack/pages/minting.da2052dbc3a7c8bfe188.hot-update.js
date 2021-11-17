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
  name: 'Minting',
  href: '/minting'
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('OxOO'),
      walletAddress = _useState5[0],
      setWalletAddress = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Connect'),
      claimingStatus = _useState6[0],
      setClaimingStatus = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    CONTRACT_ADDRESS: '0x164ADF60c708866A613A77494932898F7347d067',
    SCAN_LINK: '',
    NETWORK: {
      NAME: 'Ethereum',
      SYMBOL: 'ETH',
      ID: 4
    },
    NFT_NAME: 'Yubba World',
    SYMBOL: 'YB',
    MAX_SUPPLY: 500,
    WEI_COST: 50000000000000000,
    DISPLAY_COST: 0.05,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'Opensea',
    MARKETPLACE_LINK: '',
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
    if (showWalletConnected === 'yes') setMyWallet(true);
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
    setClaimingStatus('Connect');
  }

  function onConnectMetamask() {
    console.log('click connect metamask');
    dispatch((0,_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_4__.connect)());
    setMyWallet(false);
    setClaimingStatus('Begin');
  }

  function onConnectWalletConnect() {
    console.log('click connect wallet connect');
    setMyWallet(true);
  }

  function onConnectTustWallet() {
    console.log('click trust wallet');
    setMyWallet(true);
  }

  var getData = function getData() {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
    }
  };

  var claimNFTs = function claimNFTs(mintAmount, whitelist) {
    var cost = CONFIG.WEI_COST;
    var gasLimit = CONFIG.GAS_LIMIT;
    var totalCostWei = String(cost * mintAmount);
    var totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setClaimingStatus('Minting');
    if (whitelist == true) totalCostWei = String(0);
    blockchain.smartContract.methods.mint(blockchain.account, mintAmount, 1).send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei
    }).once('error', function (err) {
      console.log(err);
      setClaimingStatus('Error');
    }).then(function (receipt) {
      console.log(receipt); // setClaimingNft(false);

      setClaimingStatus('Done');
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
    });
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
      lineNumber: 156,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
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
            lineNumber: 178,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this), blockchain.account === '' || blockchain.smartContract === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Error' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Transaction was either canceled or an error occured. Please contact our support in discord."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Begin' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
                variant: "primary",
                className: "rounded-full py-3 px-6 ",
                style: {
                  justifyContent: 'center',
                  fontWeight: 'lighter',
                  height: '40px',
                  color: '#fffeff'
                },
                onClick: function onClick(e) {
                  e.preventDefault();
                  claimNFTs(data.whitelist, true);
                  getData();
                },
                children: "Give me my Yubbas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "w-full h-9  -ml-0",
                style: {
                  justifyContent: 'center'
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
                        lineNumber: 264,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - data.totalSupply, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 74
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, ' ', CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 274,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 286,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
                variant: "primary",
                className: "rounded-full py-3 px-6 ",
                style: {
                  justifyContent: 'center',
                  fontWeight: 'lighter',
                  height: '40px',
                  color: '#fffeff'
                },
                onClick: function onClick(e) {
                  e.preventDefault();
                  claimNFTs(selectedValue, false);
                  getData();
                },
                children: "Get me some Yubbas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Minting' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
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
                lineNumber: 328,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 338,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Done' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, _this);
};

_s(MintingPage, "mRL0bU2CndsKPJunawIC+YwlLuU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy5kYTIwNTJkYmMzYTdjOGJmZTE4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQ2xDLGtCQUFrQ3JCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9zQixXQUFQO0FBQUEsTUFBb0JDLFVBQXBCOztBQUNBLG1CQUFvQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU93QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU8wQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQzNCLCtDQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQU80QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEM3QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEQ7QUFBQSxNQUFPOEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDL0IsK0NBQVEsQ0FBQyxTQUFELENBQXBEO0FBQUEsTUFBT2dDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE2QmpDLCtDQUFRLENBQUM7QUFDcENrQyxJQUFBQSxnQkFBZ0IsRUFBRSw0Q0FEa0I7QUFFcENDLElBQUFBLFNBQVMsRUFBRSxFQUZ5QjtBQUdwQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1BQUFB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QVUsRUFBRTJDLGlCQUZkO0FBR0UscUJBQWUsRUFBRUUsaUJBSG5CO0FBSUUsMEJBQW9CLEVBQUVHLHNCQUp4QjtBQUtFLHdCQUFrQixFQUFFQztBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM05GLGVBbU9FO0FBQVMsZUFBUyxFQUFDLG1DQUFuQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuT0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyT0QsQ0ExV0Q7O0dBQU1sRDtVQThCYWIsc0RBQ0VDLHNEQUNOQSxzREFHRUw7OztLQW5DWGlCO0FBNFdOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgTmV4dFNlbyBhcyBTRU8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIsIFJvb3RTdGF0ZU9yQW55IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9yZWR1eC9ibG9ja2NoYWluL2Jsb2NrY2hhaW5BY3Rpb25zJ1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9yZWR1eC9kYXRhL2RhdGFBY3Rpb25zJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJ1dHRvbkNvbm5lY3RXYWxsZXQsXHJcbiAgQnV0dG9uQ2xhaW1ORlQsXHJcbiAgQnV0dG9uV2FpdGluZyxcclxuICBCdXR0b25XYWxsZXQsXHJcbiAgQ29ubmVjdFdhbGxldFBvcHVwLFxyXG4gIENvbnRhaW5lcixcclxuICBNaW50aW5nQ2FyZCxcclxuICBNeVdhbGxldFBvcHVwLFxyXG4gIE5hdmlnYXRpb24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgZGVza3RvcExpbmtzID0gW3sgbmFtZTogJ01pbnRpbmcnLCBocmVmOiAnL21pbnRpbmcnIH1dXHJcblxyXG5jb25zdCBNaW50aW5nUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dDb25uZWN0LCBzZXRDb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2FsbGV0LCBzZXRTaG93V2FsbGV0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtteVdhbGxldCwgc2V0TXlXYWxsZXRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCdPeE9PJylcclxuICBjb25zdCBbY2xhaW1pbmdTdGF0dXMsIHNldENsYWltaW5nU3RhdHVzXSA9IHVzZVN0YXRlKCdDb25uZWN0JylcclxuXHJcbiAgY29uc3QgW0NPTkZJRywgU0VUX0NPTkZJR10gPSB1c2VTdGF0ZSh7XHJcbiAgICBDT05UUkFDVF9BRERSRVNTOiAnMHgxNjRBREY2MGM3MDg4NjZBNjEzQTc3NDk0OTMyODk4RjczNDdkMDY3JyxcclxuICAgIFNDQU5fTElOSzogJycsXHJcbiAgICBORVRXT1JLOiB7XHJcbiAgICAgIE5BTUU6ICdFdGhlcmV1bScsXHJcbiAgICAgIFNZTUJPTDogJ0VUSCcsXHJcbiAgICAgIElEOiA0LFxyXG4gICAgfSxcclxuICAgIE5GVF9OQU1FOiAnWXViYmEgV29ybGQnLFxyXG4gICAgU1lNQk9MOiAnWUInLFxyXG4gICAgTUFYX1NVUFBMWTogNTAwLFxyXG4gICAgV0VJX0NPU1Q6IDUwMDAwMDAwMDAwMDAwMDAwLFxyXG4gICAgRElTUExBWV9DT1NUOiAwLjA1LFxyXG4gICAgR0FTX0xJTUlUOiAyODUwMDAsXHJcbiAgICBNQVJLRVRQTEFDRTogJ09wZW5zZWEnLFxyXG4gICAgTUFSS0VUUExBQ0VfTElOSzogJycsXHJcbiAgICBTSE9XX0JBQ0tHUk9VTkQ6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUXHJcbiAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVFxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBibG9ja2NoYWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuYmxvY2tjaGFpbilcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuZGF0YSlcclxuXHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIHN0YXJ0XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzaG93V2FsbGV0Q29ubmVjdGVkID0gU3RyaW5nKHJvdXRlci5xdWVyeS53YWxsZXRDb25uZWN0ZWQpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93V2FsbGV0Q29ubmVjdGVkID09PSAneWVzJykgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9LCBbc2hvd1dhbGxldENvbm5lY3RlZF0pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChjb25uZWN0KCkpfSk7XHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIGVuZFxyXG5cclxuICBmdW5jdGlvbiBzaG93TXlXYWxsZXQoKSB7XHJcbiAgICBzZXRXYWxsZXRBZGRyZXNzKGJsb2NrY2hhaW4uYWNjb3VudClcclxuICAgIHNldFNob3dXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVNeVdhbGxldCgpIHtcclxuICAgIHNldFNob3dXYWxsZXQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldENvbm5lY3QodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdChmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdDb25uZWN0JylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdE1ldGFtYXNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3QgbWV0YW1hc2snKVxyXG4gICAgZGlzcGF0Y2goY29ubmVjdCgpKVxyXG4gICAgc2V0TXlXYWxsZXQoZmFsc2UpXHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cygnQmVnaW4nKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0V2FsbGV0Q29ubmVjdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayBjb25uZWN0IHdhbGxldCBjb25uZWN0JylcclxuICAgIHNldE15V2FsbGV0KHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RUdXN0V2FsbGV0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIHRydXN0IHdhbGxldCcpXHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIGlmIChibG9ja2NoYWluLmFjY291bnQgIT09ICcnICYmIGJsb2NrY2hhaW4uc21hcnRDb250cmFjdCAhPT0gbnVsbCkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaERhdGEoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYWltTkZUcyA9IChtaW50QW1vdW50OiBudW1iZXIsIHdoaXRlbGlzdDogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1RcclxuICAgIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVRcclxuICAgIGxldCB0b3RhbENvc3RXZWkgPSBTdHJpbmcoY29zdCAqIG1pbnRBbW91bnQpXHJcbiAgICBsZXQgdG90YWxHYXNMaW1pdCA9IFN0cmluZyhnYXNMaW1pdCAqIG1pbnRBbW91bnQpXHJcbiAgICBjb25zb2xlLmxvZygnQ29zdDogJywgdG90YWxDb3N0V2VpKVxyXG4gICAgY29uc29sZS5sb2coJ0dhcyBsaW1pdDogJywgdG90YWxHYXNMaW1pdClcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdNaW50aW5nJylcclxuICAgIGlmICh3aGl0ZWxpc3QgPT0gdHJ1ZSkgdG90YWxDb3N0V2VpID0gU3RyaW5nKDApXHJcbiAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kc1xyXG4gICAgICAubWludChibG9ja2NoYWluLmFjY291bnQsIG1pbnRBbW91bnQsIDEpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgIHRvOiBDT05GSUcuQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgICBmcm9tOiBibG9ja2NoYWluLmFjY291bnQsXHJcbiAgICAgICAgdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgfSlcclxuICAgICAgLm9uY2UoJ2Vycm9yJywgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHNldENsYWltaW5nU3RhdHVzKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgICAgIC8vIHNldENsYWltaW5nTmZ0KGZhbHNlKTtcclxuICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnRG9uZScpXHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGF0YSgpXHJcbiAgfSwgW2Jsb2NrY2hhaW4uYWNjb3VudF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBiZy1jZW50ZXIgYmctcmVwZWF0LXggYmctY292ZXIgYmctYnViYmxlXCI+XHJcbiAgICAgIDxTRU9cclxuICAgICAgICB0aXRsZT1cIk1pbnRpbmdcIlxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiWXViYmEgV29ybGQgaXMgYSBjb2xsZWN0aW9uIG9mIHJhbmRvbWx5IGdlbmVyYXRlZCBkaWdpdGFsIGNvbGxlY3RpYmxlcyBvZiB2YXJpb3VzIHJhcml0eSBsaXZpbmcgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gYXMgRVJDLTcyMS4xMCwwMDAgdW5pcXVlIGNoYXJhY3RlcnMgb2Ygc3RhZ2dlcmluZyB2YXJpZXR5XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxOYXZpZ2F0aW9uXHJcbiAgICAgICAgZGVza3RvcExpbmtzPXtkZXNrdG9wTGlua3N9XHJcbiAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgIG15V2FsbGV0ID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uQ29ubmVjdFdhbGxldCBvbkNsaWNrPXtvbkNvbm5lY3RNZXRhbWFza30gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25XYWxsZXRcclxuICAgICAgICAgICAgICBvbkNsaWNrTXlXYWxsZXQ9e3Nob3dNeVdhbGxldH1cclxuICAgICAgICAgICAgICBvbkNsaWNrRGlzY29ubmVjdFdhbGxldD17b25DbGlja0Rpc2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCBwdC0yMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWItOCBoLTE0IG1kOmgtMjRcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3l1YmJhLXdvcmxkLTFsaW5lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiWXViYmEgV29ybGRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogbWludGluZyBjYXJkIGZvciBjb3VudGRvd24gKi99XHJcbiAgICAgICAgICB7LyogPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICAgICAgWXViYmEgbWludGluZyB3aWxsIHN0YXJ0IGluXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSBtYi04IHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+MDAgOiAwMCA6PC9zcGFuPiA0NVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14cyBmb250LXRoaW5cIj5cclxuICAgICAgICAgICAgICBQcmljZSBwZXIgWXViYmEgMC4wNSBFVEhcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteC1hdXRvIG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbldhaXRpbmcgYmxvY2sgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01pbnRpbmdDYXJkPiAqL31cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9tICovfVxyXG4gICAgICAgICAge2Jsb2NrY2hhaW4uYWNjb3VudCA9PT0gJycgfHwgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCB0byBFdGhlcmV1bSBNYWlubmV0IGZpcnN0ICFcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09ICdFcnJvcicgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uIHdhcyBlaXRoZXIgY2FuY2VsZWQgb3IgYW4gZXJyb3Igb2NjdXJlZC4gUGxlYXNlXHJcbiAgICAgICAgICAgICAgICBjb250YWN0IG91ciBzdXBwb3J0IGluIGRpc2NvcmQuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ0JlZ2luJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIHtkYXRhLndoaXRlbGlzdCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IG1kOm10LTAgLW10LTYgdGV4dC14bCB0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25zLCB5b3UgY2FuIGNsYWltIHtkYXRhLndoaXRlbGlzdH0gZnJlZSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICAhXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwYi02IHRleHQtcmlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICdkb3R0ZWQgMC4zcHggI2E2YTVhNScgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZlZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoZGF0YS53aGl0ZWxpc3QsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHaXZlIG1lIG15IFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IG1kOm10LTAgLW10LTYgdGV4dC14bCB0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG93IG1hbnkgWXViYmFzIHdvdWxkIHlvdSBsaWtlP1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnZG90dGVkIDAuM3B4ICNhNmE1YTUnIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05ICAtbWwtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBtdC00IHRleHQtc2Vjb25kYXJ5IHRleHQteHMgZm9udC10aGluIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5NQVhfU1VQUExZIC0gZGF0YS50b3RhbFN1cHBseX0gcmVtYWluaW5nIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmljZSBwZXIgWXViYmE6IHtDT05GSUcuRElTUExBWV9DT1NUfXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTkVUV09SSy5TWU1CT0x9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC1sZWZ0IHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC0yeGwgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KENPTkZJRy5ESVNQTEFZX0NPU1QgKiBzZWxlY3RlZFZhbHVlKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29uLWV0aC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZlZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoc2VsZWN0ZWRWYWx1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHZXQgbWUgc29tZSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdNaW50aW5nJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXJpbmcgWXViYmFzIDxiciAvPiB0byB5b3VyIHdhbGxldFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzg0cHhdIG10LVs2MHB4XSByZWxhdGl2ZSBteC1hdXQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2FkZXIuZ2lmXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGRzU3Bpbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdEb25lJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXIgY29tcGxldGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBZdWJiYSBkdWJiYSBkb29v4oCmIPCfjolcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgLW1iLTUgZm9udC1ib2xkIHRleHQtMnhsICBtZDp0ZXh0LTN4bCB1cHBlcmNhc2UgdHJhY2tpbmctWzZweF0gbWQ6dHJhY2tpbmctWzEzcHhdIFwiPlxyXG4gICAgICAgICAgICAgICAgVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPE15V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dXYWxsZXR9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZU15V2FsbGV0fVxyXG4gICAgICAgIHdhbGxldEFkZHJlc3M9e3dhbGxldEFkZHJlc3N9XHJcbiAgICAgICAgb25EaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDb25uZWN0V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dDb25uZWN0fVxyXG4gICAgICAgIGNsb3NlUG9wdXA9e2hpZGVDb25uZWN0V2FsbGV0fVxyXG4gICAgICAgIG9uQ2xpY2tNZXRhbWFzaz17b25Db25uZWN0TWV0YW1hc2t9XHJcbiAgICAgICAgb25DbGlja1dhbGxldENvbm5lY3Q9e29uQ29ubmVjdFdhbGxldENvbm5lY3R9XHJcbiAgICAgICAgb25DbGlja1RydXN0V2FsbGV0PXtvbkNvbm5lY3RUdXN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTggbSBtZDptdC1hdXRvICAgLW10LTEwXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgdGV4dC14c1wiPlxyXG4gICAgICAgICAgJmNvcHk7IENvcHlyaWdodCBZdWJiYSBXb3JsZCAyMDIxLCBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRpbmdQYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJOZXh0U2VvIiwiU0VPIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY29ubmVjdCIsImZldGNoRGF0YSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJCdXR0b25Db25uZWN0V2FsbGV0IiwiQnV0dG9uV2FsbGV0IiwiQ29ubmVjdFdhbGxldFBvcHVwIiwiQ29udGFpbmVyIiwiTWludGluZ0NhcmQiLCJNeVdhbGxldFBvcHVwIiwiTmF2aWdhdGlvbiIsImRlc2t0b3BMaW5rcyIsIm5hbWUiLCJocmVmIiwiTWludGluZ1BhZ2UiLCJzaG93Q29ubmVjdCIsInNldENvbm5lY3QiLCJzaG93V2FsbGV0Iiwic2V0U2hvd1dhbGxldCIsIm15V2FsbGV0Iiwic2V0TXlXYWxsZXQiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY2xhaW1pbmdTdGF0dXMiLCJzZXRDbGFpbWluZ1N0YXR1cyIsIkNPTlRSQUNUX0FERFJFU1MiLCJTQ0FOX0xJTksiLCJORVRXT1JLIiwiTkFNRSIsIlNZTUJPTCIsIklEIiwiTkZUX05BTUUiLCJNQVhfU1VQUExZIiwiV0VJX0NPU1QiLCJESVNQTEFZX0NPU1QiLCJHQVNfTElNSVQiLCJNQVJLRVRQTEFDRSIsIk1BUktFVFBMQUNFX0xJTksiLCJTSE9XX0JBQ0tHUk9VTkQiLCJDT05GSUciLCJTRVRfQ09ORklHIiwiY29zdCIsImdhc0xpbWl0IiwiZGlzcGF0Y2giLCJibG9ja2NoYWluIiwic3RhdGUiLCJkYXRhIiwicm91dGVyIiwic2hvd1dhbGxldENvbm5lY3RlZCIsIlN0cmluZyIsInF1ZXJ5Iiwid2FsbGV0Q29ubmVjdGVkIiwic2hvd015V2FsbGV0IiwiYWNjb3VudCIsImhpZGVNeVdhbGxldCIsInNob3dDb25uZWN0V2FsbGV0IiwiaGlkZUNvbm5lY3RXYWxsZXQiLCJvbkNsaWNrRGlzY29ubmVjdFdhbGxldCIsIm9uQ29ubmVjdE1ldGFtYXNrIiwiY29uc29sZSIsImxvZyIsIm9uQ29ubmVjdFdhbGxldENvbm5lY3QiLCJvbkNvbm5lY3RUdXN0V2FsbGV0IiwiZ2V0RGF0YSIsInNtYXJ0Q29udHJhY3QiLCJjbGFpbU5GVHMiLCJtaW50QW1vdW50Iiwid2hpdGVsaXN0IiwidG90YWxDb3N0V2VpIiwidG90YWxHYXNMaW1pdCIsIm1ldGhvZHMiLCJtaW50Iiwic2VuZCIsInRvIiwiZnJvbSIsInZhbHVlIiwib25jZSIsImVyciIsInRoZW4iLCJyZWNlaXB0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImJvcmRlckJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodCIsImhlaWdodCIsImNvbG9yIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RkaXYiLCJ0b3RhbFN1cHBseSIsInRvRml4ZWQiLCJsZHNTcGlubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==