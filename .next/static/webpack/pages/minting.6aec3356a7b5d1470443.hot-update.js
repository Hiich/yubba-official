"use strict";
self["webpackHotUpdate_N_E"]("pages/minting",{

/***/ "./pages/minting.tsx":
/*!***************************!*\
  !*** ./pages/minting.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.module.css */ "./pages/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/blockchain/blockchainActions */ "./redux/blockchain/blockchainActions.js");
/* harmony import */ var _redux_data_dataActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/data/dataActions */ "./redux/data/dataActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components */ "./components/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showConnect = _useState[0],
      setConnect = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showWallet = _useState2[0],
      setShowWallet = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      myWallet = _useState3[0],
      setMyWallet = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      selectedValue = _useState4[0],
      setSelectedValue = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('OxOO'),
      walletAddress = _useState5[0],
      setWalletAddress = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Connect'),
      claimingStatus = _useState6[0],
      setClaimingStatus = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
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
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var blockchain = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.blockchain;
  });
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.data;
  }); // === demo purpose - start

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var showWalletConnected = String(router.query.walletConnected);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
    dispatch((0,_redux_blockchain_blockchainActions__WEBPACK_IMPORTED_MODULE_5__.connect)());
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
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_6__.fetchData)());
    }
  };

  var mintCounter;

  var incrementCounter = function incrementCounter(amountMinted) {
    mintCounter + amountMinted, (0,C_Users_Hicham_Documents_Projects_NFT_Projects_yubba_official_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__.default)("mintCounter");
  };

  var claimNFTs = function claimNFTs(mintAmount, whitelist) {
    var cost = CONFIG.WEI_COST;
    var gasLimit = CONFIG.GAS_LIMIT;
    var totalCostWei = String(cost * mintAmount);
    var totalGasLimit = String(gasLimit * mintAmount);
    console.log('Cost: ', totalCostWei);
    console.log('Gas limit: ', totalGasLimit);
    setClaimingStatus('Minting');

    if (whitelist == true) {
      totalCostWei = String(0);
      mintAmount = data.whitelist;
    }

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
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_6__.fetchData)());
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getData();
  }, [blockchain.account]);

  var handleChange = function handleChange(e) {
    setSelectedValue(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "h-screen bg-center bg-repeat-x bg-cover bg-bubble",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
      title: "Minting",
      description: "Yubba World is a collection of randomly generated digital collectibles of various rarity living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      className: "py-8 pt-20",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.Container, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "relative mx-auto mb-8 h-14 md:h-24",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/yubba-world-1line.png",
            layout: "fill",
            objectFit: "contain",
            alt: "Yubba World"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), blockchain.account === '' || blockchain.smartContract === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Error' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Transaction was either canceled or an error occured. Please contact our support in discord."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Begin' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
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
                lineNumber: 237,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "w-full h-9  -ml-0",
                style: {
                  justifyContent: 'center'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                  className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().selectdiv),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("label", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("select", {
                      onChange: handleChange,
                      defaultValue: "1",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        children: "1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 273,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 274,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 275,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - data.totalSupply, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 74
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, ' ', CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "w-full  mx-auto mt-6 md:w-3/4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
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
                lineNumber: 307,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Minting' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
              className: "h-[84px] mt-[60px] relative mx-aut ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: "/loader.gif",
                layout: "fill",
                objectFit: "contain",
                alt: "Yubba World"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_10___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 351,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Done' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_8__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 5
  }, _this);
};

_s(MintingPage, "mRL0bU2CndsKPJunawIC+YwlLuU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy42YWVjMzM1NmE3YjVkMTQ3MDQ0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQ2xDLGtCQUFrQ3JCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9zQixXQUFQO0FBQUEsTUFBb0JDLFVBQXBCOztBQUNBLG1CQUFvQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU93QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU8wQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQzNCLCtDQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQU80QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEM3QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEQ7QUFBQSxNQUFPOEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDL0IsK0NBQVEsQ0FBQyxTQUFELENBQXBEO0FBQUEsTUFBT2dDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE2QmpDLCtDQUFRLENBQUM7QUFDcENrQyxJQUFBQSxnQkFBZ0IsRUFBRSw0Q0FEa0I7QUFFcENDLElBQUFBLFNBQVMsRUFBRSxFQUZ5QjtBQUdwQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1B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QUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFFUixVQURiO0FBRUUsZ0JBQVUsRUFBRXVDLFlBRmQ7QUFHRSxtQkFBYSxFQUFFakMsYUFIakI7QUFJRSx3QkFBa0IsRUFBRW9DO0FBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwTkYsZUEyTkUsOERBQUMsMkRBQUQ7QUFDRSxlQUFTLEVBQUU1QyxXQURiO0FBRUUsZ0JBQVUsRUFBRTJDLGlCQUZkO0FBR0UscUJBQWUsRUFBRUUsaUJBSG5CO0FBSUUsMEJBQW9CLEVBQUVHLHNCQUp4QjtBQUtFLHdCQUFrQixFQUFFQztBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM05GLGVBbU9FO0FBQVMsZUFBUyxFQUFDLG1DQUFuQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuT0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyT0QsQ0FsWEQ7O0dBQU1sRDtVQThCYWIsc0RBQ0VDLHNEQUNOQSxzREFHRUw7OztLQW5DWGlCO0FBb1hOLCtEQUFlQSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlZZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWludGluZy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9yZWFkT25seUVycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgTmV4dFNlbyBhcyBTRU8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIsIFJvb3RTdGF0ZU9yQW55IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9yZWR1eC9ibG9ja2NoYWluL2Jsb2NrY2hhaW5BY3Rpb25zJ1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9yZWR1eC9kYXRhL2RhdGFBY3Rpb25zJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJ1dHRvbkNvbm5lY3RXYWxsZXQsXHJcbiAgQnV0dG9uQ2xhaW1ORlQsXHJcbiAgQnV0dG9uV2FpdGluZyxcclxuICBCdXR0b25XYWxsZXQsXHJcbiAgQ29ubmVjdFdhbGxldFBvcHVwLFxyXG4gIENvbnRhaW5lcixcclxuICBNaW50aW5nQ2FyZCxcclxuICBNeVdhbGxldFBvcHVwLFxyXG4gIE5hdmlnYXRpb24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgZGVza3RvcExpbmtzID0gW3sgbmFtZTogJ01pbnRpbmcnLCBocmVmOiAnL21pbnRpbmcnIH1dXHJcblxyXG5jb25zdCBNaW50aW5nUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dDb25uZWN0LCBzZXRDb25uZWN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93V2FsbGV0LCBzZXRTaG93V2FsbGV0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtteVdhbGxldCwgc2V0TXlXYWxsZXRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRWYWx1ZSwgc2V0U2VsZWN0ZWRWYWx1ZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCdPeE9PJylcclxuICBjb25zdCBbY2xhaW1pbmdTdGF0dXMsIHNldENsYWltaW5nU3RhdHVzXSA9IHVzZVN0YXRlKCdDb25uZWN0JylcclxuXHJcbiAgY29uc3QgW0NPTkZJRywgU0VUX0NPTkZJR10gPSB1c2VTdGF0ZSh7XHJcbiAgICBDT05UUkFDVF9BRERSRVNTOiAnMHgxNjRBREY2MGM3MDg4NjZBNjEzQTc3NDk0OTMyODk4RjczNDdkMDY3JyxcclxuICAgIFNDQU5fTElOSzogJycsXHJcbiAgICBORVRXT1JLOiB7XHJcbiAgICAgIE5BTUU6ICdFdGhlcmV1bScsXHJcbiAgICAgIFNZTUJPTDogJ0VUSCcsXHJcbiAgICAgIElEOiA0LFxyXG4gICAgfSxcclxuICAgIE5GVF9OQU1FOiAnWXViYmEgV29ybGQnLFxyXG4gICAgU1lNQk9MOiAnWUInLFxyXG4gICAgTUFYX1NVUFBMWTogNTAwLFxyXG4gICAgV0VJX0NPU1Q6IDUwMDAwMDAwMDAwMDAwMDAwLFxyXG4gICAgRElTUExBWV9DT1NUOiAwLjA1LFxyXG4gICAgR0FTX0xJTUlUOiAyODUwMDAsXHJcbiAgICBNQVJLRVRQTEFDRTogJ09wZW5zZWEnLFxyXG4gICAgTUFSS0VUUExBQ0VfTElOSzogJycsXHJcbiAgICBTSE9XX0JBQ0tHUk9VTkQ6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUXHJcbiAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVFxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBibG9ja2NoYWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuYmxvY2tjaGFpbilcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuZGF0YSlcclxuXHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIHN0YXJ0XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzaG93V2FsbGV0Q29ubmVjdGVkID0gU3RyaW5nKHJvdXRlci5xdWVyeS53YWxsZXRDb25uZWN0ZWQpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93V2FsbGV0Q29ubmVjdGVkID09PSAneWVzJykgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9LCBbc2hvd1dhbGxldENvbm5lY3RlZF0pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChjb25uZWN0KCkpfSk7XHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIGVuZFxyXG5cclxuICBmdW5jdGlvbiBzaG93TXlXYWxsZXQoKSB7XHJcbiAgICBzZXRXYWxsZXRBZGRyZXNzKGJsb2NrY2hhaW4uYWNjb3VudClcclxuICAgIHNldFNob3dXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVNeVdhbGxldCgpIHtcclxuICAgIHNldFNob3dXYWxsZXQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldENvbm5lY3QodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdChmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdDb25uZWN0JylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdE1ldGFtYXNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3QgbWV0YW1hc2snKVxyXG4gICAgZGlzcGF0Y2goY29ubmVjdCgpKVxyXG4gICAgc2V0TXlXYWxsZXQoZmFsc2UpXHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cygnQmVnaW4nKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0V2FsbGV0Q29ubmVjdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayBjb25uZWN0IHdhbGxldCBjb25uZWN0JylcclxuICAgIHNldE15V2FsbGV0KHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RUdXN0V2FsbGV0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIHRydXN0IHdhbGxldCcpXHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIGlmIChibG9ja2NoYWluLmFjY291bnQgIT09ICcnICYmIGJsb2NrY2hhaW4uc21hcnRDb250cmFjdCAhPT0gbnVsbCkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaERhdGEoKSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG1pbnRDb3VudGVyXHJcbiAgY29uc3QgaW5jcmVtZW50Q291bnRlciA9IChhbW91bnRNaW50ZWQ6IG51bWJlcikgPT4ge1xyXG4gICAgbWludENvdW50ZXIgKz0gYW1vdW50TWludGVkXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGFpbU5GVHMgPSAobWludEFtb3VudDogbnVtYmVyLCB3aGl0ZWxpc3Q6IGJvb2xlYW4pID0+IHtcclxuICAgIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUXHJcbiAgICBsZXQgZ2FzTGltaXQgPSBDT05GSUcuR0FTX0xJTUlUXHJcbiAgICBsZXQgdG90YWxDb3N0V2VpID0gU3RyaW5nKGNvc3QgKiBtaW50QW1vdW50KVxyXG4gICAgbGV0IHRvdGFsR2FzTGltaXQgPSBTdHJpbmcoZ2FzTGltaXQgKiBtaW50QW1vdW50KVxyXG4gICAgY29uc29sZS5sb2coJ0Nvc3Q6ICcsIHRvdGFsQ29zdFdlaSlcclxuICAgIGNvbnNvbGUubG9nKCdHYXMgbGltaXQ6ICcsIHRvdGFsR2FzTGltaXQpXHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cygnTWludGluZycpXHJcbiAgICBpZiAod2hpdGVsaXN0ID09IHRydWUpIHtcclxuICAgICAgdG90YWxDb3N0V2VpID0gU3RyaW5nKDApXHJcbiAgICAgIG1pbnRBbW91bnQgPSBkYXRhLndoaXRlbGlzdFxyXG4gICAgfVxyXG4gICAgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLm1pbnQoYmxvY2tjaGFpbi5hY2NvdW50LCBtaW50QW1vdW50LCAxKVxyXG4gICAgICAuc2VuZCh7XHJcbiAgICAgICAgZ2FzTGltaXQ6IFN0cmluZyh0b3RhbEdhc0xpbWl0KSxcclxuICAgICAgICB0bzogQ09ORklHLkNPTlRSQUNUX0FERFJFU1MsXHJcbiAgICAgICAgZnJvbTogYmxvY2tjaGFpbi5hY2NvdW50LFxyXG4gICAgICAgIHZhbHVlOiB0b3RhbENvc3RXZWksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbmNlKCdlcnJvcicsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnRXJyb3InKVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVjZWlwdDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVjZWlwdClcclxuICAgICAgICAvLyBzZXRDbGFpbWluZ05mdChmYWxzZSk7XHJcbiAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoJ0RvbmUnKVxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKVxyXG4gIH0sIFtibG9ja2NoYWluLmFjY291bnRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctY2VudGVyIGJnLXJlcGVhdC14IGJnLWNvdmVyIGJnLWJ1YmJsZVwiPlxyXG4gICAgICA8U0VPXHJcbiAgICAgICAgdGl0bGU9XCJNaW50aW5nXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIll1YmJhIFdvcmxkIGlzIGEgY29sbGVjdGlvbiBvZiByYW5kb21seSBnZW5lcmF0ZWQgZGlnaXRhbCBjb2xsZWN0aWJsZXMgb2YgdmFyaW91cyByYXJpdHkgbGl2aW5nIG9uIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluIGFzIEVSQy03MjEuMTAsMDAwIHVuaXF1ZSBjaGFyYWN0ZXJzIG9mIHN0YWdnZXJpbmcgdmFyaWV0eVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TmF2aWdhdGlvblxyXG4gICAgICAgIGRlc2t0b3BMaW5rcz17ZGVza3RvcExpbmtzfVxyXG4gICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICBteVdhbGxldCA/IChcclxuICAgICAgICAgICAgPEJ1dHRvbkNvbm5lY3RXYWxsZXQgb25DbGljaz17b25Db25uZWN0TWV0YW1hc2t9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uV2FsbGV0XHJcbiAgICAgICAgICAgICAgb25DbGlja015V2FsbGV0PXtzaG93TXlXYWxsZXR9XHJcbiAgICAgICAgICAgICAgb25DbGlja0Rpc2Nvbm5lY3RXYWxsZXQ9e29uQ2xpY2tEaXNjb25uZWN0V2FsbGV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggcHQtMjBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1iLTggaC0xNCBtZDpoLTI0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi95dWJiYS13b3JsZC0xbGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgIGFsdD1cIll1YmJhIFdvcmxkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb3IgY291bnRkb3duICovfVxyXG4gICAgICAgICAgey8qIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgIFl1YmJhIG1pbnRpbmcgd2lsbCBzdGFydCBpblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbWItOCB0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPjAwIDogMDAgOjwvc3Bhbj4gNDVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQteHMgZm9udC10aGluXCI+XHJcbiAgICAgICAgICAgICAgUHJpY2UgcGVyIFl1YmJhIDAuMDUgRVRIXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25XYWl0aW5nIGJsb2NrIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9NaW50aW5nQ2FyZD4gKi99XHJcbiAgICAgICAgICB7LyogbWludGluZyBjYXJkIGZvbSAqL31cclxuICAgICAgICAgIHtibG9ja2NoYWluLmFjY291bnQgPT09ICcnIHx8IGJsb2NrY2hhaW4uc21hcnRDb250cmFjdCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgdG8gRXRoZXJldW0gTWFpbm5ldCBmaXJzdCAhXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PSAnRXJyb3InID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiB3YXMgZWl0aGVyIGNhbmNlbGVkIG9yIGFuIGVycm9yIG9jY3VyZWQuIFBsZWFzZVxyXG4gICAgICAgICAgICAgICAgY29udGFjdCBvdXIgc3VwcG9ydCBpbiBkaXNjb3JkLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdCZWdpbicgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICB7ZGF0YS53aGl0ZWxpc3QgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBtZDptdC0wIC1tdC02IHRleHQteGwgdGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucywgeW91IGNhbiBjbGFpbSB7ZGF0YS53aGl0ZWxpc3R9IGZyZWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgIVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnZG90dGVkIDAuM3B4ICNhNmE1YTUnIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIG14LWF1dG8gbXQtNiBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBweS0zIHB4LTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZWZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1ORlRzKGRhdGEud2hpdGVsaXN0LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2l2ZSBtZSBteSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBtZDptdC0wIC1tdC02IHRleHQteGwgdGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvdyBtYW55IFl1YmJhcyB3b3VsZCB5b3UgbGlrZT9cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBiLTYgdGV4dC1yaWdodCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ2RvdHRlZCAwLjNweCAjYTZhNWE1JyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSAgLW1sLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBkZWZhdWx0VmFsdWU9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgbXQtNCB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzIGZvbnQtdGhpbiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTUFYX1NVUFBMWSAtIGRhdGEudG90YWxTdXBwbHl9IHJlbWFpbmluZyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2UgcGVyIFl1YmJhOiB7Q09ORklHLkRJU1BMQVlfQ09TVH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Q09ORklHLk5FVFdPUksuU1lNQk9MfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LXRpdGxlIHRleHQtbGVmdCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LXRpdGxlIHRleHQtMnhsIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhDT05GSUcuRElTUExBWV9DT1NUICogc2VsZWN0ZWRWYWx1ZSkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbi1ldGgucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkV0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIG14LWF1dG8gbXQtNiBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBweS0zIHB4LTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZWZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1ORlRzKHNlbGVjdGVkVmFsdWUsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2V0IG1lIHNvbWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnTWludGluZycgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zZmVyaW5nIFl1YmJhcyA8YnIgLz4gdG8geW91ciB3YWxsZXRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4NHB4XSBtdC1bNjBweF0gcmVsYXRpdmUgbXgtYXV0IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9hZGVyLmdpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiWXViYmEgV29ybGRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxkc1NwaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnRG9uZScgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zZmVyIGNvbXBsZXRlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgWXViYmEgZHViYmEgZG9vb+KApiDwn46JXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXRpdGxlIC1tYi01IGZvbnQtYm9sZCB0ZXh0LTJ4bCAgbWQ6dGV4dC0zeGwgdXBwZXJjYXNlIHRyYWNraW5nLVs2cHhdIG1kOnRyYWNraW5nLVsxM3B4XSBcIj5cclxuICAgICAgICAgICAgICAgIFRoYW5rIHlvdVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxNeVdhbGxldFBvcHVwXHJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93V2FsbGV0fVxyXG4gICAgICAgIGNsb3NlUG9wdXA9e2hpZGVNeVdhbGxldH1cclxuICAgICAgICB3YWxsZXRBZGRyZXNzPXt3YWxsZXRBZGRyZXNzfVxyXG4gICAgICAgIG9uRGlzY29ubmVjdFdhbGxldD17b25DbGlja0Rpc2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Q29ubmVjdFdhbGxldFBvcHVwXHJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93Q29ubmVjdH1cclxuICAgICAgICBjbG9zZVBvcHVwPXtoaWRlQ29ubmVjdFdhbGxldH1cclxuICAgICAgICBvbkNsaWNrTWV0YW1hc2s9e29uQ29ubmVjdE1ldGFtYXNrfVxyXG4gICAgICAgIG9uQ2xpY2tXYWxsZXRDb25uZWN0PXtvbkNvbm5lY3RXYWxsZXRDb25uZWN0fVxyXG4gICAgICAgIG9uQ2xpY2tUcnVzdFdhbGxldD17b25Db25uZWN0VHVzdFdhbGxldH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBweS04IG0gbWQ6bXQtYXV0byAgIC1tdC0xMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHRleHQteHNcIj5cclxuICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgWXViYmEgV29ybGQgMjAyMSwgQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50aW5nUGFnZVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTmV4dFNlbyIsIlNFTyIsInVzZVJvdXRlciIsInN0eWxlcyIsImNvbm5lY3QiLCJmZXRjaERhdGEiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQnV0dG9uIiwiQnV0dG9uQ29ubmVjdFdhbGxldCIsIkJ1dHRvbldhbGxldCIsIkNvbm5lY3RXYWxsZXRQb3B1cCIsIkNvbnRhaW5lciIsIk1pbnRpbmdDYXJkIiwiTXlXYWxsZXRQb3B1cCIsIk5hdmlnYXRpb24iLCJkZXNrdG9wTGlua3MiLCJuYW1lIiwiaHJlZiIsIk1pbnRpbmdQYWdlIiwic2hvd0Nvbm5lY3QiLCJzZXRDb25uZWN0Iiwic2hvd1dhbGxldCIsInNldFNob3dXYWxsZXQiLCJteVdhbGxldCIsInNldE15V2FsbGV0Iiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImNsYWltaW5nU3RhdHVzIiwic2V0Q2xhaW1pbmdTdGF0dXMiLCJDT05UUkFDVF9BRERSRVNTIiwiU0NBTl9MSU5LIiwiTkVUV09SSyIsIk5BTUUiLCJTWU1CT0wiLCJJRCIsIk5GVF9OQU1FIiwiTUFYX1NVUFBMWSIsIldFSV9DT1NUIiwiRElTUExBWV9DT1NUIiwiR0FTX0xJTUlUIiwiTUFSS0VUUExBQ0UiLCJNQVJLRVRQTEFDRV9MSU5LIiwiU0hPV19CQUNLR1JPVU5EIiwiQ09ORklHIiwiU0VUX0NPTkZJRyIsImNvc3QiLCJnYXNMaW1pdCIsImRpc3BhdGNoIiwiYmxvY2tjaGFpbiIsInN0YXRlIiwiZGF0YSIsInJvdXRlciIsInNob3dXYWxsZXRDb25uZWN0ZWQiLCJTdHJpbmciLCJxdWVyeSIsIndhbGxldENvbm5lY3RlZCIsInNob3dNeVdhbGxldCIsImFjY291bnQiLCJoaWRlTXlXYWxsZXQiLCJzaG93Q29ubmVjdFdhbGxldCIsImhpZGVDb25uZWN0V2FsbGV0Iiwib25DbGlja0Rpc2Nvbm5lY3RXYWxsZXQiLCJvbkNvbm5lY3RNZXRhbWFzayIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbm5lY3RXYWxsZXRDb25uZWN0Iiwib25Db25uZWN0VHVzdFdhbGxldCIsImdldERhdGEiLCJzbWFydENvbnRyYWN0IiwibWludENvdW50ZXIiLCJpbmNyZW1lbnRDb3VudGVyIiwiYW1vdW50TWludGVkIiwiY2xhaW1ORlRzIiwibWludEFtb3VudCIsIndoaXRlbGlzdCIsInRvdGFsQ29zdFdlaSIsInRvdGFsR2FzTGltaXQiLCJtZXRob2RzIiwibWludCIsInNlbmQiLCJ0byIsImZyb20iLCJ2YWx1ZSIsIm9uY2UiLCJlcnIiLCJ0aGVuIiwicmVjZWlwdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJib3JkZXJCb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJjb2xvciIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZGl2IiwidG90YWxTdXBwbHkiLCJ0b0ZpeGVkIiwibGRzU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=