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
        }, _this), blockchain.account === '' || blockchain.smartContract === null || claimingStatus == 'Connect' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy4xNzlhNWU3OGNhYzhkNzljZjUwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjtBQUNBLElBQUlDLFdBQW1CLEdBQUcsQ0FBMUI7O0FBRUEsSUFBTUMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUNsQyxrQkFBa0N0QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxVQUFwQjs7QUFDQSxtQkFBb0N4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPeUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBZ0MxQiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPMkIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEM1QiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDOUIsK0NBQVEsQ0FBQyxNQUFELENBQWxEO0FBQUEsTUFBTytCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUE0Q2hDLCtDQUFRLENBQUMsU0FBRCxDQUFwRDtBQUFBLE1BQU9pQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBc0NsQywrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPcUIsV0FBUDtBQUFBLE1BQW9CYyxjQUFwQjs7QUFFQSxtQkFBNkJuQywrQ0FBUSxDQUFDO0FBQ3BDb0MsSUFBQUEsZ0JBQWdCLEVB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O0FBSUUsMEJBQW9CLEVBQUVHLHNCQUp4QjtBQUtFLHdCQUFrQixFQUFFQztBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdE9GLGVBOE9FO0FBQVMsZUFBUyxFQUFDLG1DQUFuQjtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5T0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzUEQsQ0F2WUQ7O0dBQU1uRDtVQStCYWQsc0RBQ0VDLHNEQUNOQSxzREFHRUw7OztLQXBDWGtCO0FBeVlOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21pbnRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgTmV4dFNlbyBhcyBTRU8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIsIFJvb3RTdGF0ZU9yQW55IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9yZWR1eC9ibG9ja2NoYWluL2Jsb2NrY2hhaW5BY3Rpb25zJ1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi9yZWR1eC9kYXRhL2RhdGFBY3Rpb25zJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJ1dHRvbkNvbm5lY3RXYWxsZXQsXHJcbiAgQnV0dG9uQ2xhaW1ORlQsXHJcbiAgQnV0dG9uV2FpdGluZyxcclxuICBCdXR0b25XYWxsZXQsXHJcbiAgQ29ubmVjdFdhbGxldFBvcHVwLFxyXG4gIENvbnRhaW5lcixcclxuICBNaW50aW5nQ2FyZCxcclxuICBNeVdhbGxldFBvcHVwLFxyXG4gIE5hdmlnYXRpb24sXHJcbn0gZnJvbSAnQC9jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgZGVza3RvcExpbmtzID0gW3sgbmFtZTogJ01pbnRpbmcnLCBocmVmOiAnL21pbnRpbmcnIH1dXHJcbmxldCBtaW50Q291bnRlcjogbnVtYmVyID0gMFxyXG5cclxuY29uc3QgTWludGluZ1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93Q29ubmVjdCwgc2V0Q29ubmVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2hvd1dhbGxldCwgc2V0U2hvd1dhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbXlXYWxsZXQsIHNldE15V2FsbGV0XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZSgnT3hPTycpXHJcbiAgY29uc3QgW2NsYWltaW5nU3RhdHVzLCBzZXRDbGFpbWluZ1N0YXR1c10gPSB1c2VTdGF0ZSgnQ29ubmVjdCcpXHJcbiAgY29uc3QgW21pbnRDb3VudGVyLCBzZXRNaW50Q291bnRlcl0gPSB1c2VTdGF0ZSgxKVxyXG5cclxuICBjb25zdCBbQ09ORklHLCBTRVRfQ09ORklHXSA9IHVzZVN0YXRlKHtcclxuICAgIENPTlRSQUNUX0FERFJFU1M6ICcweDE2NEFERjYwYzcwODg2NkE2MTNBNzc0OTQ5MzI4OThGNzM0N2QwNjcnLFxyXG4gICAgU0NBTl9MSU5LOiAnJyxcclxuICAgIE5FVFdPUks6IHtcclxuICAgICAgTkFNRTogJ0V0aGVyZXVtJyxcclxuICAgICAgU1lNQk9MOiAnRVRIJyxcclxuICAgICAgSUQ6IDQsXHJcbiAgICB9LFxyXG4gICAgTkZUX05BTUU6ICdZdWJiYSBXb3JsZCcsXHJcbiAgICBTWU1CT0w6ICdZQicsXHJcbiAgICBNQVhfU1VQUExZOiA1MDAsXHJcbiAgICBXRUlfQ09TVDogNzAwMDAwMDAwMDAwMDAwMDAsXHJcbiAgICBESVNQTEFZX0NPU1Q6IDAuMDcsXHJcbiAgICBHQVNfTElNSVQ6IDI4NTAwMCxcclxuICAgIE1BUktFVFBMQUNFOiAnT3BlbnNlYScsXHJcbiAgICBNQVJLRVRQTEFDRV9MSU5LOiAnJyxcclxuICAgIFNIT1dfQkFDS0dST1VORDogZmFsc2UsXHJcbiAgfSlcclxuXHJcbiAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1RcclxuICBsZXQgZ2FzTGltaXQgPSBDT05GSUcuR0FTX0xJTUlUXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IGJsb2NrY2hhaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZU9yQW55KSA9PiBzdGF0ZS5ibG9ja2NoYWluKVxyXG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZU9yQW55KSA9PiBzdGF0ZS5kYXRhKVxyXG5cclxuICAvLyA9PT0gZGVtbyBwdXJwb3NlIC0gc3RhcnRcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHNob3dXYWxsZXRDb25uZWN0ZWQgPSBTdHJpbmcocm91dGVyLnF1ZXJ5LndhbGxldENvbm5lY3RlZClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3dXYWxsZXRDb25uZWN0ZWQgPT09ICd5ZXMnKSBzZXRNeVdhbGxldCh0cnVlKVxyXG4gIH0sIFtzaG93V2FsbGV0Q29ubmVjdGVkXSlcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKGNvbm5lY3QoKSl9KTtcclxuICAvLyA9PT0gZGVtbyBwdXJwb3NlIC0gZW5kXHJcblxyXG4gIGZ1bmN0aW9uIHNob3dNeVdhbGxldCgpIHtcclxuICAgIHNldFdhbGxldEFkZHJlc3MoYmxvY2tjaGFpbi5hY2NvdW50KVxyXG4gICAgc2V0U2hvd1dhbGxldCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZU15V2FsbGV0KCkge1xyXG4gICAgc2V0U2hvd1dhbGxldChmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZUNvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICBzZXRDb25uZWN0KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25DbGlja0Rpc2Nvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKVxyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoJ0Nvbm5lY3QnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0TWV0YW1hc2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgY29ubmVjdCBtZXRhbWFzaycpXHJcbiAgICBkaXNwYXRjaChjb25uZWN0KCkpXHJcbiAgICBzZXRNeVdhbGxldChmYWxzZSlcclxuICAgIGlmIChtaW50Q291bnRlciA9PSBDT05GSUcuTUFYX1NVUFBMWSkgc2V0Q2xhaW1pbmdTdGF0dXMoJ1NvbGQgb3V0JylcclxuICAgIGVsc2Ugc2V0Q2xhaW1pbmdTdGF0dXMoJ0JlZ2luJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFdhbGxldENvbm5lY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgY29ubmVjdCB3YWxsZXQgY29ubmVjdCcpXHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0VHVzdFdhbGxldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayB0cnVzdCB3YWxsZXQnKVxyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBpZiAoYmxvY2tjaGFpbi5hY2NvdW50ICE9PSAnJyAmJiBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QgIT09IG51bGwpIHtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmNyZW1lbnRNaW50QW1vdW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld01pbnRBbW91bnQgPSBtaW50Q291bnRlciArIDFcclxuICAgIGlmIChuZXdNaW50QW1vdW50ID4gQ09ORklHLk1BWF9TVVBQTFkpIHtcclxuICAgICAgbmV3TWludEFtb3VudCA9IENPTkZJRy5NQVhfU1VQUExZXHJcbiAgICAgIHNldENsYWltaW5nU3RhdHVzKCdTb2xkIG91dCcpXHJcbiAgICB9XHJcbiAgICBzZXRNaW50Q291bnRlcihuZXdNaW50QW1vdW50KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xhaW1ORlRzID0gKG1pbnRBbW91bnQ6IG51bWJlciwgd2hpdGVsaXN0OiBib29sZWFuKSA9PiB7XHJcbiAgICBsZXQgY29zdCA9IENPTkZJRy5XRUlfQ09TVFxyXG4gICAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVFxyXG4gICAgbGV0IHRvdGFsQ29zdFdlaSA9IFN0cmluZyhjb3N0ICogbWludEFtb3VudClcclxuICAgIGxldCB0b3RhbEdhc0xpbWl0ID0gU3RyaW5nKGdhc0xpbWl0ICogbWludEFtb3VudClcclxuICAgIGNvbnNvbGUubG9nKCdDb3N0OiAnLCB0b3RhbENvc3RXZWkpXHJcbiAgICBjb25zb2xlLmxvZygnR2FzIGxpbWl0OiAnLCB0b3RhbEdhc0xpbWl0KVxyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoJ01pbnRpbmcnKVxyXG4gICAgaWYgKHdoaXRlbGlzdCA9PSB0cnVlKSB7XHJcbiAgICAgIHRvdGFsQ29zdFdlaSA9IFN0cmluZygwKVxyXG4gICAgICBtaW50QW1vdW50ID0gZGF0YS53aGl0ZWxpc3RcclxuICAgIH1cclxuICAgIGJsb2NrY2hhaW4uc21hcnRDb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5taW50KGJsb2NrY2hhaW4uYWNjb3VudCwgbWludEFtb3VudCwgMSlcclxuICAgICAgLnNlbmQoe1xyXG4gICAgICAgIGdhc0xpbWl0OiBTdHJpbmcodG90YWxHYXNMaW1pdCksXHJcbiAgICAgICAgdG86IENPTkZJRy5DT05UUkFDVF9BRERSRVNTLFxyXG4gICAgICAgIGZyb206IGJsb2NrY2hhaW4uYWNjb3VudCxcclxuICAgICAgICB2YWx1ZTogdG90YWxDb3N0V2VpLFxyXG4gICAgICB9KVxyXG4gICAgICAub25jZSgnZXJyb3InLCAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgc2V0Q2xhaW1pbmdTdGF0dXMoJ0Vycm9yJylcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlY2VpcHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY2VpcHQpXHJcbiAgICAgICAgLy8gc2V0Q2xhaW1pbmdOZnQoZmFsc2UpO1xyXG4gICAgICAgIHNldENsYWltaW5nU3RhdHVzKCdEb25lJylcclxuICAgICAgICBkaXNwYXRjaChmZXRjaERhdGEoKSlcclxuICAgICAgICBpbmNyZW1lbnRDb3VudGVyKG1pbnRBbW91bnQpXHJcbiAgICAgICAgY29uc29sZS5sb2cobWludENvdW50ZXIpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgaWYgKG1pbnRDb3VudGVyID09IENPTkZJRy5NQVhfU1VQUExZKSBzZXRDbGFpbWluZ1N0YXR1cygnU29sZCBvdXQnKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERhdGEoKVxyXG4gIH0sIFtibG9ja2NoYWluLmFjY291bnRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gYmctY2VudGVyIGJnLXJlcGVhdC14IGJnLWNvdmVyIGJnLWJ1YmJsZVwiPlxyXG4gICAgICA8U0VPXHJcbiAgICAgICAgdGl0bGU9XCJNaW50aW5nXCJcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIll1YmJhIFdvcmxkIGlzIGEgY29sbGVjdGlvbiBvZiByYW5kb21seSBnZW5lcmF0ZWQgZGlnaXRhbCBjb2xsZWN0aWJsZXMgb2YgdmFyaW91cyByYXJpdHkgbGl2aW5nIG9uIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluIGFzIEVSQy03MjEuMTAsMDAwIHVuaXF1ZSBjaGFyYWN0ZXJzIG9mIHN0YWdnZXJpbmcgdmFyaWV0eVwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TmF2aWdhdGlvblxyXG4gICAgICAgIGRlc2t0b3BMaW5rcz17ZGVza3RvcExpbmtzfVxyXG4gICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICBteVdhbGxldCA/IChcclxuICAgICAgICAgICAgPEJ1dHRvbkNvbm5lY3RXYWxsZXQgb25DbGljaz17b25Db25uZWN0TWV0YW1hc2t9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8QnV0dG9uV2FsbGV0XHJcbiAgICAgICAgICAgICAgb25DbGlja015V2FsbGV0PXtzaG93TXlXYWxsZXR9XHJcbiAgICAgICAgICAgICAgb25DbGlja0Rpc2Nvbm5lY3RXYWxsZXQ9e29uQ2xpY2tEaXNjb25uZWN0V2FsbGV0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTggcHQtMjBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1iLTggaC0xNCBtZDpoLTI0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi95dWJiYS13b3JsZC0xbGluZS5wbmdcIlxyXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgIGFsdD1cIll1YmJhIFdvcmxkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb3IgY291bnRkb3duICovfVxyXG4gICAgICAgICAgey8qIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgIFl1YmJhIG1pbnRpbmcgd2lsbCBzdGFydCBpblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgbWItOCB0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPjAwIDogMDAgOjwvc3Bhbj4gNDVcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQteHMgZm9udC10aGluXCI+XHJcbiAgICAgICAgICAgICAgUHJpY2UgcGVyIFl1YmJhIDAuMDUgRVRIXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25XYWl0aW5nIGJsb2NrIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9NaW50aW5nQ2FyZD4gKi99XHJcbiAgICAgICAgICB7LyogbWludGluZyBjYXJkIGZvbSAqL31cclxuICAgICAgICAgIHtibG9ja2NoYWluLmFjY291bnQgPT09ICcnIHx8XHJcbiAgICAgICAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QgPT09IG51bGwgfHxcclxuICAgICAgICAgIGNsYWltaW5nU3RhdHVzID09ICdDb25uZWN0JyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgdG8gRXRoZXJldW0gTWFpbm5ldCBmaXJzdCAhXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PSAnRXJyb3InID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiB3YXMgZWl0aGVyIGNhbmNlbGVkIG9yIGFuIGVycm9yIG9jY3VyZWQuIFBsZWFzZVxyXG4gICAgICAgICAgICAgICAgY29udGFjdCBvdXIgc3VwcG9ydCBpbiBkaXNjb3JkLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT0gJ1NvbGQgb3V0JyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgV2UgYXJlIHNvbGQgb3V0ICEgWW91IGNhbiBjaGVjayBhbGwgWXViYmFzIGluIHNlY29uZGFyeSBtYXJrZXRcclxuICAgICAgICAgICAgICAgIG9uXHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24veXViYmF3b3JsZFwiPiBPcGVuc2VhPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdCZWdpbicgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICB7ZGF0YS53aGl0ZWxpc3QgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBtZDptdC0wIC1tdC02IHRleHQteGwgdGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucywgeW91IGNhbiBjbGFpbSB7ZGF0YS53aGl0ZWxpc3R9IGZyZWUgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgIVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItNiB0ZXh0LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnZG90dGVkIDAuM3B4ICNhNmE1YTUnIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIG14LWF1dG8gbXQtNiBtZDp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBweS0zIHB4LTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2xpZ2h0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmZWZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhaW1ORlRzKGRhdGEud2hpdGVsaXN0LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXREYXRhKClcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2l2ZSBtZSBteSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBtZDptdC0wIC1tdC02IHRleHQteGwgdGV4dC1sZWZ0IGZvbnQtYm9sZCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvdyBtYW55IFl1YmJhcyB3b3VsZCB5b3UgbGlrZT9cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBiLTYgdGV4dC1yaWdodCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ2RvdHRlZCAwLjNweCAjYTZhNWE1JyB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtOSAgLW1sLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RkaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBkZWZhdWx0VmFsdWU9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgbXQtNCB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzIGZvbnQtdGhpbiB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTUFYX1NVUFBMWSAtIG1pbnRDb3VudGVyfSByZW1haW5pbmcgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYToge0NPTkZJRy5ESVNQTEFZX0NPU1R9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5ORVRXT1JLLlNZTUJPTH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LWxlZnQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LTJ4bCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoQ09ORklHLkRJU1BMQVlfQ09TVCAqIHNlbGVjdGVkVmFsdWUpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb24tZXRoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBteC1hdXRvIG10LTYgbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMyBweC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltTkZUcyhzZWxlY3RlZFZhbHVlLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBtZSBzb21lIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ01pbnRpbmcnID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2ZlcmluZyBZdWJiYXMgPGJyIC8+IHRvIHlvdXIgd2FsbGV0XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bODRweF0gbXQtWzYwcHhdIHJlbGF0aXZlIG14LWF1dCBcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvYWRlci5naWZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIll1YmJhIFdvcmxkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZHNTcGlubmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ0RvbmUnID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2ZlciBjb21wbGV0ZSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFl1YmJhIGR1YmJhIGRvb2/igKYg8J+OiVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC10aXRsZSAtbWItNSBmb250LWJvbGQgdGV4dC0yeGwgIG1kOnRleHQtM3hsIHVwcGVyY2FzZSB0cmFja2luZy1bNnB4XSBtZDp0cmFja2luZy1bMTNweF0gXCI+XHJcbiAgICAgICAgICAgICAgICBUaGFuayB5b3VcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8TXlXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd1dhbGxldH1cclxuICAgICAgICBjbG9zZVBvcHVwPXtoaWRlTXlXYWxsZXR9XHJcbiAgICAgICAgd2FsbGV0QWRkcmVzcz17d2FsbGV0QWRkcmVzc31cclxuICAgICAgICBvbkRpc2Nvbm5lY3RXYWxsZXQ9e29uQ2xpY2tEaXNjb25uZWN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPENvbm5lY3RXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd0Nvbm5lY3R9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZUNvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgb25DbGlja01ldGFtYXNrPXtvbkNvbm5lY3RNZXRhbWFza31cclxuICAgICAgICBvbkNsaWNrV2FsbGV0Q29ubmVjdD17b25Db25uZWN0V2FsbGV0Q29ubmVjdH1cclxuICAgICAgICBvbkNsaWNrVHJ1c3RXYWxsZXQ9e29uQ29ubmVjdFR1c3RXYWxsZXR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktOCBtIG1kOm10LWF1dG8gICAtbXQtMTBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IFl1YmJhIFdvcmxkIDIwMjEsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludGluZ1BhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5leHRTZW8iLCJTRU8iLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwiZmV0Y2hEYXRhIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIkJ1dHRvbkNvbm5lY3RXYWxsZXQiLCJCdXR0b25XYWxsZXQiLCJDb25uZWN0V2FsbGV0UG9wdXAiLCJDb250YWluZXIiLCJNaW50aW5nQ2FyZCIsIk15V2FsbGV0UG9wdXAiLCJOYXZpZ2F0aW9uIiwiZGVza3RvcExpbmtzIiwibmFtZSIsImhyZWYiLCJtaW50Q291bnRlciIsIk1pbnRpbmdQYWdlIiwic2hvd0Nvbm5lY3QiLCJzZXRDb25uZWN0Iiwic2hvd1dhbGxldCIsInNldFNob3dXYWxsZXQiLCJteVdhbGxldCIsInNldE15V2FsbGV0Iiwic2VsZWN0ZWRWYWx1ZSIsInNldFNlbGVjdGVkVmFsdWUiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImNsYWltaW5nU3RhdHVzIiwic2V0Q2xhaW1pbmdTdGF0dXMiLCJzZXRNaW50Q291bnRlciIsIkNPTlRSQUNUX0FERFJFU1MiLCJTQ0FOX0xJTksiLCJORVRXT1JLIiwiTkFNRSIsIlNZTUJPTCIsIklEIiwiTkZUX05BTUUiLCJNQVhfU1VQUExZIiwiV0VJX0NPU1QiLCJESVNQTEFZX0NPU1QiLCJHQVNfTElNSVQiLCJNQVJLRVRQTEFDRSIsIk1BUktFVFBMQUNFX0xJTksiLCJTSE9XX0JBQ0tHUk9VTkQiLCJDT05GSUciLCJTRVRfQ09ORklHIiwiY29zdCIsImdhc0xpbWl0IiwiZGlzcGF0Y2giLCJibG9ja2NoYWluIiwic3RhdGUiLCJkYXRhIiwicm91dGVyIiwic2hvd1dhbGxldENvbm5lY3RlZCIsIlN0cmluZyIsInF1ZXJ5Iiwid2FsbGV0Q29ubmVjdGVkIiwic2hvd015V2FsbGV0IiwiYWNjb3VudCIsImhpZGVNeVdhbGxldCIsInNob3dDb25uZWN0V2FsbGV0IiwiaGlkZUNvbm5lY3RXYWxsZXQiLCJvbkNsaWNrRGlzY29ubmVjdFdhbGxldCIsIm9uQ29ubmVjdE1ldGFtYXNrIiwiY29uc29sZSIsImxvZyIsIm9uQ29ubmVjdFdhbGxldENvbm5lY3QiLCJvbkNvbm5lY3RUdXN0V2FsbGV0IiwiZ2V0RGF0YSIsInNtYXJ0Q29udHJhY3QiLCJpbmNyZW1lbnRNaW50QW1vdW50IiwibmV3TWludEFtb3VudCIsImNsYWltTkZUcyIsIm1pbnRBbW91bnQiLCJ3aGl0ZWxpc3QiLCJ0b3RhbENvc3RXZWkiLCJ0b3RhbEdhc0xpbWl0IiwibWV0aG9kcyIsIm1pbnQiLCJzZW5kIiwidG8iLCJmcm9tIiwidmFsdWUiLCJvbmNlIiwiZXJyIiwidGhlbiIsInJlY2VpcHQiLCJpbmNyZW1lbnRDb3VudGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImJvcmRlckJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodCIsImhlaWdodCIsImNvbG9yIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RkaXYiLCJ0b0ZpeGVkIiwibGRzU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=