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
    WEI_COST: 50000000000000000,
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

  var incrementMintAmount = function incrementMintAmount(mintAmount) {
    var newMintAmount = mintCounter + mintAmount;

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
      incrementMintAmount(mintAmount);
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

_s(MintingPage, "thbDddOrHj2DQMtokY859Zesl5Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy4xN2RhZGQ5ZTlhMWRhOGJjMTVlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjtBQUNBLElBQUlDLFdBQW1CLEdBQUcsQ0FBMUI7O0FBRUEsSUFBTUMsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUNsQyxrQkFBa0N0QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxVQUFwQjs7QUFDQSxtQkFBb0N4QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPeUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBZ0MxQiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPMkIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEM1QiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUFPNkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBDOUIsK0NBQVEsQ0FBQyxNQUFELENBQWxEO0FBQUEsTUFBTytCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUE0Q2hDLCtDQUFRLENBQUMsU0FBRCxDQUFwRDtBQUFBLE1BQU9pQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBc0NsQywrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPcUIsV0FBUDtBQUFBLE1BQW9CYyxjQUFwQjs7QUFFQSxtQkFBNkJuQywrQ0FBUSxDQUFDO0FBQ3BDb0MsSUFBQUEsZ0JBQWdCLEVB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LEVBQUVFLGlCQUhuQjtBQUlFLDBCQUFvQixFQUFFRyxzQkFKeEI7QUFLRSx3QkFBa0IsRUFBRUM7QUFMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRPRixlQThPRTtBQUFTLGVBQVMsRUFBQyxtQ0FBbkI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOU9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc1BELENBdllEOztHQUFNbkQ7VUErQmFkLHNEQUNFQyxzREFDTkEsc0RBR0VMOzs7S0FwQ1hrQjtBQXlZTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IE5leHRTZW8gYXMgU0VPIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IFByb3ZpZGVyLCBSb290U3RhdGVPckFueSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vcmVkdXgvYmxvY2tjaGFpbi9ibG9ja2NoYWluQWN0aW9ucydcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvZGF0YS9kYXRhQWN0aW9ucydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBCdXR0b25Db25uZWN0V2FsbGV0LFxyXG4gIEJ1dHRvbkNsYWltTkZULFxyXG4gIEJ1dHRvbldhaXRpbmcsXHJcbiAgQnV0dG9uV2FsbGV0LFxyXG4gIENvbm5lY3RXYWxsZXRQb3B1cCxcclxuICBDb250YWluZXIsXHJcbiAgTWludGluZ0NhcmQsXHJcbiAgTXlXYWxsZXRQb3B1cCxcclxuICBOYXZpZ2F0aW9uLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cydcclxuXHJcbmNvbnN0IGRlc2t0b3BMaW5rcyA9IFt7IG5hbWU6ICdNaW50aW5nJywgaHJlZjogJy9taW50aW5nJyB9XVxyXG5sZXQgbWludENvdW50ZXI6IG51bWJlciA9IDBcclxuXHJcbmNvbnN0IE1pbnRpbmdQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0Nvbm5lY3QsIHNldENvbm5lY3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dXYWxsZXQsIHNldFNob3dXYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW215V2FsbGV0LCBzZXRNeVdhbGxldF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlLCBzZXRTZWxlY3RlZFZhbHVlXSA9IHVzZVN0YXRlKDEpXHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoJ094T08nKVxyXG4gIGNvbnN0IFtjbGFpbWluZ1N0YXR1cywgc2V0Q2xhaW1pbmdTdGF0dXNdID0gdXNlU3RhdGUoJ0Nvbm5lY3QnKVxyXG4gIGNvbnN0IFttaW50Q291bnRlciwgc2V0TWludENvdW50ZXJdID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgY29uc3QgW0NPTkZJRywgU0VUX0NPTkZJR10gPSB1c2VTdGF0ZSh7XHJcbiAgICBDT05UUkFDVF9BRERSRVNTOiAnMHgxNjRBREY2MGM3MDg4NjZBNjEzQTc3NDk0OTMyODk4RjczNDdkMDY3JyxcclxuICAgIFNDQU5fTElOSzogJycsXHJcbiAgICBORVRXT1JLOiB7XHJcbiAgICAgIE5BTUU6ICdFdGhlcmV1bScsXHJcbiAgICAgIFNZTUJPTDogJ0VUSCcsXHJcbiAgICAgIElEOiA0LFxyXG4gICAgfSxcclxuICAgIE5GVF9OQU1FOiAnWXViYmEgV29ybGQnLFxyXG4gICAgU1lNQk9MOiAnWUInLFxyXG4gICAgTUFYX1NVUFBMWTogNTAwLFxyXG4gICAgV0VJX0NPU1Q6IDUwMDAwMDAwMDAwMDAwMDAwLFxyXG4gICAgRElTUExBWV9DT1NUOiAwLjA3LFxyXG4gICAgR0FTX0xJTUlUOiAyODUwMDAsXHJcbiAgICBNQVJLRVRQTEFDRTogJ09wZW5zZWEnLFxyXG4gICAgTUFSS0VUUExBQ0VfTElOSzogJycsXHJcbiAgICBTSE9XX0JBQ0tHUk9VTkQ6IGZhbHNlLFxyXG4gIH0pXHJcblxyXG4gIGxldCBjb3N0ID0gQ09ORklHLldFSV9DT1NUXHJcbiAgbGV0IGdhc0xpbWl0ID0gQ09ORklHLkdBU19MSU1JVFxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBibG9ja2NoYWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuYmxvY2tjaGFpbilcclxuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGVPckFueSkgPT4gc3RhdGUuZGF0YSlcclxuXHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIHN0YXJ0XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBzaG93V2FsbGV0Q29ubmVjdGVkID0gU3RyaW5nKHJvdXRlci5xdWVyeS53YWxsZXRDb25uZWN0ZWQpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaG93V2FsbGV0Q29ubmVjdGVkID09PSAneWVzJykgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9LCBbc2hvd1dhbGxldENvbm5lY3RlZF0pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChjb25uZWN0KCkpfSk7XHJcbiAgLy8gPT09IGRlbW8gcHVycG9zZSAtIGVuZFxyXG5cclxuICBmdW5jdGlvbiBzaG93TXlXYWxsZXQoKSB7XHJcbiAgICBzZXRXYWxsZXRBZGRyZXNzKGJsb2NrY2hhaW4uYWNjb3VudClcclxuICAgIHNldFNob3dXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVNeVdhbGxldCgpIHtcclxuICAgIHNldFNob3dXYWxsZXQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Q29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldENvbm5lY3QodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVDb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0Q29ubmVjdChmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0KCkge1xyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdDb25uZWN0JylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdE1ldGFtYXNrKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3QgbWV0YW1hc2snKVxyXG4gICAgZGlzcGF0Y2goY29ubmVjdCgpKVxyXG4gICAgc2V0TXlXYWxsZXQoZmFsc2UpXHJcbiAgICBpZiAobWludENvdW50ZXIgPT0gQ09ORklHLk1BWF9TVVBQTFkpIHNldENsYWltaW5nU3RhdHVzKCdTb2xkIG91dCcpXHJcbiAgICBlbHNlIHNldENsYWltaW5nU3RhdHVzKCdCZWdpbicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RXYWxsZXRDb25uZWN0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGNvbm5lY3Qgd2FsbGV0IGNvbm5lY3QnKVxyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFR1c3RXYWxsZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgdHJ1c3Qgd2FsbGV0JylcclxuICAgIHNldE15V2FsbGV0KHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKGJsb2NrY2hhaW4uYWNjb3VudCAhPT0gJycgJiYgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ICE9PSBudWxsKSB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5jcmVtZW50TWludEFtb3VudCA9IChtaW50QW1vdW50OiBudW1iZXIpID0+IHtcclxuICAgIGxldCBuZXdNaW50QW1vdW50ID0gbWludENvdW50ZXIgKyBtaW50QW1vdW50XHJcbiAgICBpZiAobmV3TWludEFtb3VudCA+IENPTkZJRy5NQVhfU1VQUExZKSB7XHJcbiAgICAgIG5ld01pbnRBbW91bnQgPSBDT05GSUcuTUFYX1NVUFBMWVxyXG4gICAgICBzZXRDbGFpbWluZ1N0YXR1cygnU29sZCBvdXQnKVxyXG4gICAgfVxyXG4gICAgc2V0TWludENvdW50ZXIobmV3TWludEFtb3VudClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYWltTkZUcyA9IChtaW50QW1vdW50OiBudW1iZXIsIHdoaXRlbGlzdDogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1RcclxuICAgIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVRcclxuICAgIGxldCB0b3RhbENvc3RXZWkgPSBTdHJpbmcoY29zdCAqIG1pbnRBbW91bnQpXHJcbiAgICBsZXQgdG90YWxHYXNMaW1pdCA9IFN0cmluZyhnYXNMaW1pdCAqIG1pbnRBbW91bnQpXHJcbiAgICBjb25zb2xlLmxvZygnQ29zdDogJywgdG90YWxDb3N0V2VpKVxyXG4gICAgY29uc29sZS5sb2coJ0dhcyBsaW1pdDogJywgdG90YWxHYXNMaW1pdClcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdNaW50aW5nJylcclxuICAgIGlmICh3aGl0ZWxpc3QgPT0gdHJ1ZSkge1xyXG4gICAgICB0b3RhbENvc3RXZWkgPSBTdHJpbmcoMClcclxuICAgICAgbWludEFtb3VudCA9IGRhdGEud2hpdGVsaXN0XHJcbiAgICB9XHJcbiAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kc1xyXG4gICAgICAubWludChibG9ja2NoYWluLmFjY291bnQsIG1pbnRBbW91bnQsIDEpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgIHRvOiBDT05GSUcuQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgICBmcm9tOiBibG9ja2NoYWluLmFjY291bnQsXHJcbiAgICAgICAgdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgfSlcclxuICAgICAgLm9uY2UoJ2Vycm9yJywgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHNldENsYWltaW5nU3RhdHVzKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgICAgIC8vIHNldENsYWltaW5nTmZ0KGZhbHNlKTtcclxuICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnRG9uZScpXHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICAgICAgaW5jcmVtZW50TWludEFtb3VudChtaW50QW1vdW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1pbnRDb3VudGVyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIGlmIChtaW50Q291bnRlciA9PSBDT05GSUcuTUFYX1NVUFBMWSkgc2V0Q2xhaW1pbmdTdGF0dXMoJ1NvbGQgb3V0JylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKClcclxuICB9LCBbYmxvY2tjaGFpbi5hY2NvdW50XSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWNlbnRlciBiZy1yZXBlYXQteCBiZy1jb3ZlciBiZy1idWJibGVcIj5cclxuICAgICAgPFNFT1xyXG4gICAgICAgIHRpdGxlPVwiTWludGluZ1wiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJZdWJiYSBXb3JsZCBpcyBhIGNvbGxlY3Rpb24gb2YgcmFuZG9tbHkgZ2VuZXJhdGVkIGRpZ2l0YWwgY29sbGVjdGlibGVzIG9mIHZhcmlvdXMgcmFyaXR5IGxpdmluZyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiBhcyBFUkMtNzIxLjEwLDAwMCB1bmlxdWUgY2hhcmFjdGVycyBvZiBzdGFnZ2VyaW5nIHZhcmlldHlcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25cclxuICAgICAgICBkZXNrdG9wTGlua3M9e2Rlc2t0b3BMaW5rc31cclxuICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgbXlXYWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Db25uZWN0V2FsbGV0IG9uQ2xpY2s9e29uQ29ubmVjdE1ldGFtYXNrfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbldhbGxldFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tNeVdhbGxldD17c2hvd015V2FsbGV0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IHB0LTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYi04IGgtMTQgbWQ6aC0yNFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIveXViYmEtd29ybGQtMWxpbmUucG5nXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9yIGNvdW50ZG93biAqL31cclxuICAgICAgICAgIHsvKiA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICBZdWJiYSBtaW50aW5nIHdpbGwgc3RhcnQgaW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1iLTggdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4wMCA6IDAwIDo8L3NwYW4+IDQ1XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhzIGZvbnQtdGhpblwiPlxyXG4gICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYSAwLjA1IEVUSFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uV2FpdGluZyBibG9jayAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTWludGluZ0NhcmQ+ICovfVxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb20gKi99XHJcbiAgICAgICAgICB7YmxvY2tjaGFpbi5hY2NvdW50ID09PSAnJyB8fFxyXG4gICAgICAgICAgYmxvY2tjaGFpbi5zbWFydENvbnRyYWN0ID09PSBudWxsIHx8XHJcbiAgICAgICAgICBjbGFpbWluZ1N0YXR1cyA9PSAnQ29ubmVjdCcgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IHRvIEV0aGVyZXVtIE1haW5uZXQgZmlyc3QgIVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT0gJ0Vycm9yJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gd2FzIGVpdGhlciBjYW5jZWxlZCBvciBhbiBlcnJvciBvY2N1cmVkLiBQbGVhc2VcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Qgb3VyIHN1cHBvcnQgaW4gZGlzY29yZC5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09ICdTb2xkIG91dCcgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFdlIGFyZSBzb2xkIG91dCAhIFlvdSBjYW4gY2hlY2sgYWxsIFl1YmJhcyBpbiBzZWNvbmRhcnkgbWFya2V0XHJcbiAgICAgICAgICAgICAgICBvblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL3l1YmJhd29ybGRcIj4gT3BlbnNlYTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnQmVnaW4nID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAge2RhdGEud2hpdGVsaXN0ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMsIHlvdSBjYW4gY2xhaW0ge2RhdGEud2hpdGVsaXN0fSBmcmVlIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgICFcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBiLTYgdGV4dC1yaWdodCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ2RvdHRlZCAwLjNweCAjYTZhNWE1JyB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBteC1hdXRvIG10LTYgbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMyBweC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltTkZUcyhkYXRhLndoaXRlbGlzdCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdpdmUgbWUgbXkgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBIb3cgbWFueSBZdWJiYXMgd291bGQgeW91IGxpa2U/XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwYi02IHRleHQtcmlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICdkb3R0ZWQgMC4zcHggI2E2YTVhNScgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgIC1tbC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0ZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIG10LTQgdGV4dC1zZWNvbmRhcnkgdGV4dC14cyBmb250LXRoaW4gdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Q09ORklHLk1BWF9TVVBQTFkgLSBtaW50Q291bnRlcn0gcmVtYWluaW5nIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmljZSBwZXIgWXViYmE6IHtDT05GSUcuRElTUExBWV9DT1NUfXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDT05GSUcuTkVUV09SSy5TWU1CT0x9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC1sZWZ0IHRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZvbnQtdGl0bGUgdGV4dC0yeGwgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KENPTkZJRy5ESVNQTEFZX0NPU1QgKiBzZWxlY3RlZFZhbHVlKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pY29uLWV0aC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRXRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAgbXgtYXV0byBtdC02IG1kOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHB5LTMgcHgtNiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnbGlnaHRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZlZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFpbU5GVHMoc2VsZWN0ZWRWYWx1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldERhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHZXQgbWUgc29tZSBZdWJiYXNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdNaW50aW5nJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXJpbmcgWXViYmFzIDxiciAvPiB0byB5b3VyIHdhbGxldFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzg0cHhdIG10LVs2MHB4XSByZWxhdGl2ZSBteC1hdXQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2FkZXIuZ2lmXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGRzU3Bpbm5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT09ICdEb25lJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNmZXIgY29tcGxldGUgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBZdWJiYSBkdWJiYSBkb29v4oCmIPCfjolcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtdGl0bGUgLW1iLTUgZm9udC1ib2xkIHRleHQtMnhsICBtZDp0ZXh0LTN4bCB1cHBlcmNhc2UgdHJhY2tpbmctWzZweF0gbWQ6dHJhY2tpbmctWzEzcHhdIFwiPlxyXG4gICAgICAgICAgICAgICAgVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPE15V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dXYWxsZXR9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZU15V2FsbGV0fVxyXG4gICAgICAgIHdhbGxldEFkZHJlc3M9e3dhbGxldEFkZHJlc3N9XHJcbiAgICAgICAgb25EaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDb25uZWN0V2FsbGV0UG9wdXBcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dDb25uZWN0fVxyXG4gICAgICAgIGNsb3NlUG9wdXA9e2hpZGVDb25uZWN0V2FsbGV0fVxyXG4gICAgICAgIG9uQ2xpY2tNZXRhbWFzaz17b25Db25uZWN0TWV0YW1hc2t9XHJcbiAgICAgICAgb25DbGlja1dhbGxldENvbm5lY3Q9e29uQ29ubmVjdFdhbGxldENvbm5lY3R9XHJcbiAgICAgICAgb25DbGlja1RydXN0V2FsbGV0PXtvbkNvbm5lY3RUdXN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHB5LTggbSBtZDptdC1hdXRvICAgLW10LTEwXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1zZWNvbmRhcnkgdGV4dC14c1wiPlxyXG4gICAgICAgICAgJmNvcHk7IENvcHlyaWdodCBZdWJiYSBXb3JsZCAyMDIxLCBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRpbmdQYWdlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJOZXh0U2VvIiwiU0VPIiwidXNlUm91dGVyIiwic3R5bGVzIiwiY29ubmVjdCIsImZldGNoRGF0YSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJCdXR0b25Db25uZWN0V2FsbGV0IiwiQnV0dG9uV2FsbGV0IiwiQ29ubmVjdFdhbGxldFBvcHVwIiwiQ29udGFpbmVyIiwiTWludGluZ0NhcmQiLCJNeVdhbGxldFBvcHVwIiwiTmF2aWdhdGlvbiIsImRlc2t0b3BMaW5rcyIsIm5hbWUiLCJocmVmIiwibWludENvdW50ZXIiLCJNaW50aW5nUGFnZSIsInNob3dDb25uZWN0Iiwic2V0Q29ubmVjdCIsInNob3dXYWxsZXQiLCJzZXRTaG93V2FsbGV0IiwibXlXYWxsZXQiLCJzZXRNeVdhbGxldCIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJjbGFpbWluZ1N0YXR1cyIsInNldENsYWltaW5nU3RhdHVzIiwic2V0TWludENvdW50ZXIiLCJDT05UUkFDVF9BRERSRVNTIiwiU0NBTl9MSU5LIiwiTkVUV09SSyIsIk5BTUUiLCJTWU1CT0wiLCJJRCIsIk5GVF9OQU1FIiwiTUFYX1NVUFBMWSIsIldFSV9DT1NUIiwiRElTUExBWV9DT1NUIiwiR0FTX0xJTUlUIiwiTUFSS0VUUExBQ0UiLCJNQVJLRVRQTEFDRV9MSU5LIiwiU0hPV19CQUNLR1JPVU5EIiwiQ09ORklHIiwiU0VUX0NPTkZJRyIsImNvc3QiLCJnYXNMaW1pdCIsImRpc3BhdGNoIiwiYmxvY2tjaGFpbiIsInN0YXRlIiwiZGF0YSIsInJvdXRlciIsInNob3dXYWxsZXRDb25uZWN0ZWQiLCJTdHJpbmciLCJxdWVyeSIsIndhbGxldENvbm5lY3RlZCIsInNob3dNeVdhbGxldCIsImFjY291bnQiLCJoaWRlTXlXYWxsZXQiLCJzaG93Q29ubmVjdFdhbGxldCIsImhpZGVDb25uZWN0V2FsbGV0Iiwib25DbGlja0Rpc2Nvbm5lY3RXYWxsZXQiLCJvbkNvbm5lY3RNZXRhbWFzayIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbm5lY3RXYWxsZXRDb25uZWN0Iiwib25Db25uZWN0VHVzdFdhbGxldCIsImdldERhdGEiLCJzbWFydENvbnRyYWN0IiwiaW5jcmVtZW50TWludEFtb3VudCIsIm1pbnRBbW91bnQiLCJuZXdNaW50QW1vdW50IiwiY2xhaW1ORlRzIiwid2hpdGVsaXN0IiwidG90YWxDb3N0V2VpIiwidG90YWxHYXNMaW1pdCIsIm1ldGhvZHMiLCJtaW50Iiwic2VuZCIsInRvIiwiZnJvbSIsInZhbHVlIiwib25jZSIsImVyciIsInRoZW4iLCJyZWNlaXB0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImJvcmRlckJvdHRvbSIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodCIsImhlaWdodCIsImNvbG9yIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RkaXYiLCJ0b0ZpeGVkIiwibGRzU3Bpbm5lciJdLCJzb3VyY2VSb290IjoiIn0=