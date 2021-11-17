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
var mintCounter = 0;

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

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      mintCounter = _useState7[0],
      setMintCounter = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
    WEI_COST: 70000000000000000,
    DISPLAY_COST: 0.07,
    GAS_LIMIT: 285000,
    MARKETPLACE: 'Opensea',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false
  }),
      CONFIG = _useState8[0],
      SET_CONFIG = _useState8[1];

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
    if (mintCounter == CONFIG.MAX_SUPPLY) setClaimingStatus('Sold out');else setClaimingStatus('Begin');
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

  var incrementMintAmount = function incrementMintAmount() {
    var newMintAmount = mintCounter + 1;

    if (newMintAmount > CONFIG.MAX_SUPPLY) {
      newMintAmount = CONFIG.MAX_SUPPLY;
      setClaimingStatus('Sold out');
    }

    setMintCounter(newMintAmount);
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
      dispatch((0,_redux_data_dataActions__WEBPACK_IMPORTED_MODULE_5__.fetchData)());
      incrementCounter(mintAmount);
      console.log(mintCounter);
    });
    if (mintCounter == CONFIG.MAX_SUPPLY) setClaimingStatus('Sold out');
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
      lineNumber: 175,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
            lineNumber: 197,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this), blockchain.account === '' || blockchain.smartContract === null || setClaimingStatus('Connect') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Error' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Transaction was either canceled or an error occured. Please contact our support in discord."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Sold out' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["We are sold out ! You can check all Yubbas in secondary market on", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              href: "https://opensea.io/collection/yubbaworld",
              children: " Opensea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Begin' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
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
                lineNumber: 259,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
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
                        lineNumber: 294,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 295,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 298,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - mintCounter, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 69
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, ' ', CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 311,
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
                lineNumber: 329,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Minting' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
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
                lineNumber: 358,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 366,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 368,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 370,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 376,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Done' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 174,
    columnNumber: 5
  }, _this);
};

_s(MintingPage, "pqQuHLDXw2ul8rA3rGV0u1twkMs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy45MmFjM2I3Nzk5YmYxMmE3MzExMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjtBQUNBLElBQUlDLFdBQW1CLEdBQUcsQ0FBMUI7O0FBRUEsSUFBTUMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUNsQyxrQkFBa0N0QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxVQUFwQjs7QUFDQSxtQkFBb0N4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPeUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBZ0MxQiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPMkIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEM1QiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDOUIsK0NBQVEsQ0FBQyxNQUFELENBQWxEO0FBQUEsTUFBTytCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUE0Q2hDLCtDQUFRLENBQUMsU0FBRCxDQUFwRDtBQUFBLE1BQU9pQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBc0NsQywrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPcUIsV0FBUDtBQUFBLE1BQW9CYyxjQUFwQjs7QUFFQSxtQkFBNkJuQywrQ0FBUSxDQUFDO0FBQ3BDb0MsSUFBQUEsZ0JBQWdCLEVB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LGlCQUhuQjtBQUlFLDBCQUFvQixFQUFFRyxzQkFKeEI7QUFLRSx3QkFBa0IsRUFBRUM7QUFMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRPRixlQThPRTtBQUFTLGVBQVMsRUFBQyxtQ0FBbkI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOU9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc1BELENBdllEOztHQUFNbkQ7VUErQmFkLHNEQUNFQyxzREFDTkEsc0RBR0VMOzs7S0FwQ1hrQjtBQXlZTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IE5leHRTZW8gYXMgU0VPIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IFByb3ZpZGVyLCBSb290U3RhdGVPckFueSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vcmVkdXgvYmxvY2tjaGFpbi9ibG9ja2NoYWluQWN0aW9ucydcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvZGF0YS9kYXRhQWN0aW9ucydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBCdXR0b25Db25uZWN0V2FsbGV0LFxyXG4gIEJ1dHRvbkNsYWltTkZULFxyXG4gIEJ1dHRvbldhaXRpbmcsXHJcbiAgQnV0dG9uV2FsbGV0LFxyXG4gIENvbm5lY3RXYWxsZXRQb3B1cCxcclxuICBDb250YWluZXIsXHJcbiAgTWludGluZ0NhcmQsXHJcbiAgTXlXYWxsZXRQb3B1cCxcclxuICBOYXZpZ2F0aW9uLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cydcclxuXHJcbmNvbnN0IGRlc2t0b3BMaW5rcyA9IFt7IG5hbWU6ICdNaW50aW5nJywgaHJlZjogJy9taW50aW5nJyB9XVxyXG5sZXQgbWludENvdW50ZXI6IG51bWJlciA9IDBcclxuXHJcbmNvbnN0IE1pbnRpbmdQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0Nvbm5lY3QsIHNldENvbm5lY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dXYWxsZXQsIHNldFNob3dXYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW215V2FsbGV0LCBzZXRNeVdhbGxldF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoJ094T08nKVxyXG4gIGNvbnN0IFtjbGFpbWluZ1N0YXR1cywgc2V0Q2xhaW1pbmdTdGF0dXNdID0gdXNlU3RhdGUoJ0Nvbm5lY3QnKVxyXG4gIGNvbnN0IFttaW50Q291bnRlciwgc2V0TWludENvdW50ZXJdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgY29uc3QgW0NPTkZJRywgU0VUX0NPTkZJR10gPSB1c2VTdGF0ZSh7XHJcbiAgICBDT05UUkFDVF9BRERSRVNTOiAnMHgxNjRBREY2MGM3MDg4NjZBNjEzQTc3NDk0OTMyODk4RjczNDdkMDY3JyxcclxuICAgIFNDQU5fTElOSzogJycsXHJcbiAgICBORVRXT1JLOiB7XHJcbiAgICAgIE5BTUU6ICdFdGhlcmV1bScsXHJcbiAgICAgIFNZTUJPTDogJ0VUSCcsXHJcbiAgICAgIElEOiA0LFxyXG4gICAgfSxcclxuICAgIE5GVF9OQU1FOiAnWXViYmEgV29ybGQnLFxyXG4gICAgU1lNQk9MOiAnWUInLFxyXG4gICAgTUFYX1NVUFBMWTogNTAwLFxyXG4gICAgV0VJX0NPU1Q6IDcwMDAwMDAwMDAwMDAwMDAwLFxyXG4gICAgRElTUExBWV9DT1NUOiAwLjA3LFxyXG4gICAgR0FTX0xJTUlUOiAyODUwMDAsXHJcbiAgICBNQVJLRVRQTEFDRTogJ09wZW5zZWEnLFxyXG4gICAgTUFSS0VUUExBQ0VfTElOSzogJycsXHJcbiAgICBTSE9XX0JBQ0tHUk9VTkQ6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUXHJcbiAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVFxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBibG9ja2NoYWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuYmxvY2tjaGFpbilcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuZGF0YSlcclxuXHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIHN0YXJ0XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzaG93V2FsbGV0Q29ubmVjdGVkID0gU3RyaW5nKHJvdXRlci5xdWVyeS53YWxsZXRDb25uZWN0ZWQpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93V2FsbGV0Q29ubmVjdGVkID09PSAneWVzJykgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9LCBbc2hvd1dhbGxldENvbm5lY3RlZF0pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChjb25uZWN0KCkpfSk7XHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIGVuZFxyXG5cclxuICBmdW5jdGlvbiBzaG93TXlXYWxsZXQoKSB7XHJcbiAgICBzZXRXYWxsZXRBZGRyZXNzKGJsb2NrY2hhaW4uYWNjb3VudClcclxuICAgIHNldFNob3dXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVNeVdhbGxldCgpIHtcclxuICAgIHNldFNob3dXYWxsZXQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldENvbm5lY3QodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdChmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdDb25uZWN0JylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdE1ldGFtYXNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3QgbWV0YW1hc2snKVxyXG4gICAgZGlzcGF0Y2goY29ubmVjdCgpKVxyXG4gICAgc2V0TXlXYWxsZXQoZmFsc2UpXHJcbiAgICBpZiAobWludENvdW50ZXIgPT0gQ09ORklHLk1BWF9TVVBQTFkpIHNldENsYWltaW5nU3RhdHVzKCdTb2xkIG91dCcpXHJcbiAgICBlbHNlIHNldENsYWltaW5nU3RhdHVzKCdCZWdpbicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RXYWxsZXRDb25uZWN0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3Qgd2FsbGV0IGNvbm5lY3QnKVxyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFR1c3RXYWxsZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgdHJ1c3Qgd2FsbGV0JylcclxuICAgIHNldE15V2FsbGV0KHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKGJsb2NrY2hhaW4uYWNjb3VudCAhPT0gJycgJiYgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ICE9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5jcmVtZW50TWludEFtb3VudCA9ICgpID0+IHtcclxuICAgIGxldCBuZXdNaW50QW1vdW50ID0gbWludENvdW50ZXIgKyAxXHJcbiAgICBpZiAobmV3TWludEFtb3VudCA+IENPTkZJRy5NQVhfU1VQUExZKSB7XHJcbiAgICAgIG5ld01pbnRBbW91bnQgPSBDT05GSUcuTUFYX1NVUFBMWVxyXG4gICAgICBzZXRDbGFpbWluZ1N0YXR1cygnU29sZCBvdXQnKVxyXG4gICAgfVxyXG4gICAgc2V0TWludENvdW50ZXIobmV3TWludEFtb3VudClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYWltTkZUcyA9IChtaW50QW1vdW50OiBudW1iZXIsIHdoaXRlbGlzdDogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1RcclxuICAgIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVRcclxuICAgIGxldCB0b3RhbENvc3RXZWkgPSBTdHJpbmcoY29zdCAqIG1pbnRBbW91bnQpXHJcbiAgICBsZXQgdG90YWxHYXNMaW1pdCA9IFN0cmluZyhnYXNMaW1pdCAqIG1pbnRBbW91bnQpXHJcbiAgICBjb25zb2xlLmxvZygnQ29zdDogJywgdG90YWxDb3N0V2VpKVxyXG4gICAgY29uc29sZS5sb2coJ0dhcyBsaW1pdDogJywgdG90YWxHYXNMaW1pdClcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdNaW50aW5nJylcclxuICAgIGlmICh3aGl0ZWxpc3QgPT0gdHJ1ZSkge1xyXG4gICAgICB0b3RhbENvc3RXZWkgPSBTdHJpbmcoMClcclxuICAgICAgbWludEFtb3VudCA9IGRhdGEud2hpdGVsaXN0XHJcbiAgICB9XHJcbiAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kc1xyXG4gICAgICAubWludChibG9ja2NoYWluLmFjY291bnQsIG1pbnRBbW91bnQsIDEpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgIHRvOiBDT05GSUcuQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgICBmcm9tOiBibG9ja2NoYWluLmFjY291bnQsXHJcbiAgICAgICAgdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgfSlcclxuICAgICAgLm9uY2UoJ2Vycm9yJywgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHNldENsYWltaW5nU3RhdHVzKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgICAgIC8vIHNldENsYWltaW5nTmZ0KGZhbHNlKTtcclxuICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnRG9uZScpXHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICAgICAgaW5jcmVtZW50Q291bnRlcihtaW50QW1vdW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1pbnRDb3VudGVyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIGlmIChtaW50Q291bnRlciA9PSBDT05GSUcuTUFYX1NVUFBMWSkgc2V0Q2xhaW1pbmdTdGF0dXMoJ1NvbGQgb3V0JylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKClcclxuICB9LCBbYmxvY2tjaGFpbi5hY2NvdW50XSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWNlbnRlciBiZy1yZXBlYXQteCBiZy1jb3ZlciBiZy1idWJibGVcIj5cclxuICAgICAgPFNFT1xyXG4gICAgICAgIHRpdGxlPVwiTWludGluZ1wiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJZdWJiYSBXb3JsZCBpcyBhIGNvbGxlY3Rpb24gb2YgcmFuZG9tbHkgZ2VuZXJhdGVkIGRpZ2l0YWwgY29sbGVjdGlibGVzIG9mIHZhcmlvdXMgcmFyaXR5IGxpdmluZyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiBhcyBFUkMtNzIxLjEwLDAwMCB1bmlxdWUgY2hhcmFjdGVycyBvZiBzdGFnZ2VyaW5nIHZhcmlldHlcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25cclxuICAgICAgICBkZXNrdG9wTGlua3M9e2Rlc2t0b3BMaW5rc31cclxuICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgbXlXYWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Db25uZWN0V2FsbGV0IG9uQ2xpY2s9e29uQ29ubmVjdE1ldGFtYXNrfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbldhbGxldFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tNeVdhbGxldD17c2hvd015V2FsbGV0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IHB0LTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYi04IGgtMTQgbWQ6aC0yNFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIveXViYmEtd29ybGQtMWxpbmUucG5nXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9yIGNvdW50ZG93biAqL31cclxuICAgICAgICAgIHsvKiA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICBZdWJiYSBtaW50aW5nIHdpbGwgc3RhcnQgaW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1iLTggdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4wMCA6IDAwIDo8L3NwYW4+IDQ1XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhzIGZvbnQtdGhpblwiPlxyXG4gICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYSAwLjA1IEVUSFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uV2FpdGluZyBibG9jayAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTWludGluZ0NhcmQ+ICovfVxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb20gKi99XHJcbiAgICAgICAgICB7YmxvY2tjaGFpbi5hY2NvdW50ID09PSAnJyB8fFxyXG4gICAgICAgICAgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ID09PSBudWxsIHx8XHJcbiAgICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnQ29ubmVjdCcpID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldCB0byBFdGhlcmV1bSBNYWlubmV0IGZpcnN0ICFcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09ICdFcnJvcicgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zYWN0aW9uIHdhcyBlaXRoZXIgY2FuY2VsZWQgb3IgYW4gZXJyb3Igb2NjdXJlZC4gUGxlYXNlXHJcbiAgICAgICAgICAgICAgICBjb250YWN0IG91ciBzdXBwb3J0IGluIGRpc2NvcmQuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PSAnU29sZCBvdXQnID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBXZSBhcmUgc29sZCBvdXQgISBZb3UgY2FuIGNoZWNrIGFsbCBZdWJiYXMgaW4gc2Vjb25kYXJ5IG1hcmtldFxyXG4gICAgICAgICAgICAgICAgb25cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL29wZW5zZWEuaW8vY29sbGVjdGlvbi95dWJiYXdvcmxkXCI+IE9wZW5zZWE8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ0JlZ2luJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIHtkYXRhLndoaXRlbGlzdCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IG1kOm10LTAgLW10LTYgdGV4dC14bCB0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25zLCB5b3UgY2FuIGNsYWltIHtkYXRhLndoaXRlbGlzdH0gZnJlZSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICAhXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwYi02IHRleHQtcmlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICdkb3R0ZWQgMC4zcHggI2E2YTVhNScgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZlZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoZGF0YS53aGl0ZWxpc3QsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHaXZlIG1lIG15IFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IG1kOm10LTAgLW10LTYgdGV4dC14bCB0ZXh0LWxlZnQgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG93IG1hbnkgWXViYmFzIHdvdWxkIHlvdSBsaWtlP1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnZG90dGVkIDAuM3B4ICNhNmE1YTUnIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC05ICAtbWwtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdGRpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiBtdC00IHRleHQtc2Vjb25kYXJ5IHRleHQteHMgZm9udC10aGluIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5NQVhfU1VQUExZIC0gbWludENvdW50ZXJ9IHJlbWFpbmluZyA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpY2UgcGVyIFl1YmJhOiB7Q09ORklHLkRJU1BMQVlfQ09TVH17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Q09ORklHLk5FVFdPUksuU1lNQk9MfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LXRpdGxlIHRleHQtbGVmdCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmb250LXRpdGxlIHRleHQtMnhsIHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyhDT05GSUcuRElTUExBWV9DT1NUICogc2VsZWN0ZWRWYWx1ZSkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaWNvbi1ldGgucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkV0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIG14LWF1dG8gbXQtNiBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBweS0zIHB4LTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZWZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1ORlRzKHNlbGVjdGVkVmFsdWUsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2V0IG1lIHNvbWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnTWludGluZycgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zZmVyaW5nIFl1YmJhcyA8YnIgLz4gdG8geW91ciB3YWxsZXRcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4NHB4XSBtdC1bNjBweF0gcmVsYXRpdmUgbXgtYXV0IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9hZGVyLmdpZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiWXViYmEgV29ybGRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxkc1NwaW5uZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnRG9uZScgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFRyYW5zZmVyIGNvbXBsZXRlIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgWXViYmEgZHViYmEgZG9vb+KApiDwn46JXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXRpdGxlIC1tYi01IGZvbnQtYm9sZCB0ZXh0LTJ4bCAgbWQ6dGV4dC0zeGwgdXBwZXJjYXNlIHRyYWNraW5nLVs2cHhdIG1kOnRyYWNraW5nLVsxM3B4XSBcIj5cclxuICAgICAgICAgICAgICAgIFRoYW5rIHlvdVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxNeVdhbGxldFBvcHVwXHJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93V2FsbGV0fVxyXG4gICAgICAgIGNsb3NlUG9wdXA9e2hpZGVNeVdhbGxldH1cclxuICAgICAgICB3YWxsZXRBZGRyZXNzPXt3YWxsZXRBZGRyZXNzfVxyXG4gICAgICAgIG9uRGlzY29ubmVjdFdhbGxldD17b25DbGlja0Rpc2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8Q29ubmVjdFdhbGxldFBvcHVwXHJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93Q29ubmVjdH1cclxuICAgICAgICBjbG9zZVBvcHVwPXtoaWRlQ29ubmVjdFdhbGxldH1cclxuICAgICAgICBvbkNsaWNrTWV0YW1hc2s9e29uQ29ubmVjdE1ldGFtYXNrfVxyXG4gICAgICAgIG9uQ2xpY2tXYWxsZXRDb25uZWN0PXtvbkNvbm5lY3RXYWxsZXRDb25uZWN0fVxyXG4gICAgICAgIG9uQ2xpY2tUcnVzdFdhbGxldD17b25Db25uZWN0VHVzdFdhbGxldH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBweS04IG0gbWQ6bXQtYXV0byAgIC1tdC0xMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtc2Vjb25kYXJ5IHRleHQteHNcIj5cclxuICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQgWXViYmEgV29ybGQgMjAyMSwgQWxsIHJpZ2h0cyByZXNlcnZlZFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50aW5nUGFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTmV4dFNlbyIsIlNFTyIsInVzZVJvdXRlciIsInN0eWxlcyIsImNvbm5lY3QiLCJmZXRjaERhdGEiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQnV0dG9uIiwiQnV0dG9uQ29ubmVjdFdhbGxldCIsIkJ1dHRvbldhbGxldCIsIkNvbm5lY3RXYWxsZXRQb3B1cCIsIkNvbnRhaW5lciIsIk1pbnRpbmdDYXJkIiwiTXlXYWxsZXRQb3B1cCIsIk5hdmlnYXRpb24iLCJkZXNrdG9wTGlua3MiLCJuYW1lIiwiaHJlZiIsIm1pbnRDb3VudGVyIiwiTWludGluZ1BhZ2UiLCJzaG93Q29ubmVjdCIsInNldENvbm5lY3QiLCJzaG93V2FsbGV0Iiwic2V0U2hvd1dhbGxldCIsIm15V2FsbGV0Iiwic2V0TXlXYWxsZXQiLCJzZWxlY3RlZFZhbHVlIiwic2V0U2VsZWN0ZWRWYWx1ZSIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY2xhaW1pbmdTdGF0dXMiLCJzZXRDbGFpbWluZ1N0YXR1cyIsInNldE1pbnRDb3VudGVyIiwiQ09OVFJBQ1RfQUREUkVTUyIsIlNDQU5fTElOSyIsIk5FVFdPUksiLCJOQU1FIiwiU1lNQk9MIiwiSUQiLCJORlRfTkFNRSIsIk1BWF9TVVBQTFkiLCJXRUlfQ09TVCIsIkRJU1BMQVlfQ09TVCIsIkdBU19MSU1JVCIsIk1BUktFVFBMQUNFIiwiTUFSS0VUUExBQ0VfTElOSyIsIlNIT1dfQkFDS0dST1VORCIsIkNPTkZJRyIsIlNFVF9DT05GSUciLCJjb3N0IiwiZ2FzTGltaXQiLCJkaXNwYXRjaCIsImJsb2NrY2hhaW4iLCJzdGF0ZSIsImRhdGEiLCJyb3V0ZXIiLCJzaG93V2FsbGV0Q29ubmVjdGVkIiwiU3RyaW5nIiwicXVlcnkiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzaG93TXlXYWxsZXQiLCJhY2NvdW50IiwiaGlkZU15V2FsbGV0Iiwic2hvd0Nvbm5lY3RXYWxsZXQiLCJoaWRlQ29ubmVjdFdhbGxldCIsIm9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0Iiwib25Db25uZWN0TWV0YW1hc2siLCJjb25zb2xlIiwibG9nIiwib25Db25uZWN0V2FsbGV0Q29ubmVjdCIsIm9uQ29ubmVjdFR1c3RXYWxsZXQiLCJnZXREYXRhIiwic21hcnRDb250cmFjdCIsImluY3JlbWVudE1pbnRBbW91bnQiLCJuZXdNaW50QW1vdW50IiwiY2xhaW1ORlRzIiwibWludEFtb3VudCIsIndoaXRlbGlzdCIsInRvdGFsQ29zdFdlaSIsInRvdGFsR2FzTGltaXQiLCJtZXRob2RzIiwibWludCIsInNlbmQiLCJ0byIsImZyb20iLCJ2YWx1ZSIsIm9uY2UiLCJlcnIiLCJ0aGVuIiwicmVjZWlwdCIsImluY3JlbWVudENvdW50ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYm9yZGVyQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0IiwiaGVpZ2h0IiwiY29sb3IiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGRpdiIsInRvRml4ZWQiLCJsZHNTcGlubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==