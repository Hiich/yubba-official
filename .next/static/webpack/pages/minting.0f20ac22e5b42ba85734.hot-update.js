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

  var mintCounter = 0;

  var incrementCounter = function incrementCounter(amountMinted) {
    mintCounter += amountMinted;
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
      lineNumber: 168,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.Navigation, {
      desktopLinks: desktopLinks,
      action: myWallet ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonConnectWallet, {
        onClick: onConnectMetamask
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ButtonWallet, {
        onClickMyWallet: showMyWallet,
        onClickDisconnectWallet: onClickDisconnectWallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
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
            lineNumber: 190,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this), blockchain.account === '' || blockchain.smartContract === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Please connect your wallet to Ethereum Mainnet first !"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Error' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: "Transaction was either canceled or an error occured. Please contact our support in discord."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }, _this) : null, claimingStatus == 'Sold Out' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["We are sold out ! You can check all Yubbas in secondary market on", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              href: "https://opensea.io/collection/yubbaworld",
              children: " Opensea"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Begin' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: data.whitelist > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: ["Congratulations, you can claim ", data.whitelist, " free Yubbas !"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "w-full pb-6 text-right ",
              style: {
                borderBottom: 'dotted 0.3px #a6a5a5'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
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
                lineNumber: 250,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 19
            }, _this)]
          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary",
              children: "How many Yubbas would you like?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
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
                        lineNumber: 285,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 288,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("option", {
                        children: "5"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 289,
                        columnNumber: 29
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 284,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 283,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "mb-2 mt-4 text-secondary text-xs font-thin text-right",
                  children: [CONFIG.MAX_SUPPLY - data.totalSupply, " remaining ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 74
                  }, _this), "Price per Yubba: ", CONFIG.DISPLAY_COST, ' ', CONFIG.NETWORK.SYMBOL]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 23
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "flex mt-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-left text-2xl",
                children: "Total"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "flex-1 font-title text-2xl text-right",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
                  className: "pr-1",
                  children: (CONFIG.DISPLAY_COST * selectedValue).toFixed(2)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                  src: "/icon-eth.png",
                  layout: "fixed",
                  width: 13,
                  height: 20,
                  alt: "Eth"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 302,
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
                lineNumber: 320,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 319,
              columnNumber: 19
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Minting' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfering Yubbas ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 36
            }, _this), " to your wallet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
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
                lineNumber: 349,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_9___default().ldsSpinner),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {}, void 0, false, {
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
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 13
        }, _this) : null, claimingStatus === 'Done' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MintingCard, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary",
            children: ["Transfer complete ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 35
            }, _this), "Yubba dubba dooo\u2026 \uD83C\uDF89"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ",
            children: "Thank you"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 13
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.MyWalletPopup, {
      showPopup: showWallet,
      closePopup: hideMyWallet,
      walletAddress: walletAddress,
      onDisconnectWallet: onClickDisconnectWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_7__.ConnectWalletPopup, {
      showPopup: showConnect,
      closePopup: hideConnectWallet,
      onClickMetamask: onConnectMetamask,
      onClickWalletConnect: onConnectWalletConnect,
      onClickTrustWallet: onConnectTustWallet
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "w-full py-8 m md:mt-auto   -mt-10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
        className: "text-center text-secondary text-xs",
        children: "\xA9 Copyright Yubba World 2021, All rights reserved"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWludGluZy4wZjIwYWMyMmU1YjQyYmE4NTczNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBYUEsSUFBTW9CLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FBRCxDQUFyQjs7QUFFQSxJQUFNQyxXQUFxQixHQUFHLFNBQXhCQSxXQUF3QixHQUFNO0FBQUE7O0FBQ2xDLGtCQUFrQ3JCLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9zQixXQUFQO0FBQUEsTUFBb0JDLFVBQXBCOztBQUNBLG1CQUFvQ3ZCLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU93QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFnQ3pCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU8wQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUEwQzNCLCtDQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQU80QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEM3QiwrQ0FBUSxDQUFDLE1BQUQsQ0FBbEQ7QUFBQSxNQUFPOEIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTRDL0IsK0NBQVEsQ0FBQyxTQUFELENBQXBEO0FBQUEsTUFBT2dDLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE2QmpDLCtDQUFRLENBQUM7QUFDcENrQyxJQUFBQSxnQkFBZ0IsRUFBRSw0Q0FEa0I7QUFFcENDLElBQUFBLFNBQVMsRUFBRSxFQUZ5QjtBQUdwQ0MsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRSxVQURDO0FBRVBDLE1BQUFBLE1BQU0sRUFBRSxLQUZEO0FBR1BDLE1BQUFBLEVBQUUsRUFBRTtBQUhHLEtBSDJCO0FBUXBDQyxJQUFBQSxRQUFRLEVBQUUsYUFSMEI7QUFTcENGLElBQUFBLE1BQU0sRUFBRSxJQVQ0QjtBQVVwQ0csSUFBQUEsVUFBVSxFQUFFLEdBVndCO0FBV3BDQyxJQUFBQSxRQUFRLEVBQUUsaUJBWDBCO0FBWXBDQyxJQUFBQSxZQUFZLEVBQUUsSUFac0I7QUFhcENDLElBQUFBLFNBQVMsRUFBRSxNQWJ5QjtBQWNwQ0MsSUFBQUEsV0FBVyxFQUFFLFNBZHVCO0FBZXBDQyxJQUFBQSxnQkFBZ0IsRUFBRSxFQWZrQjtBQWdCcENDLElBQUFBLGVBQWUsRUFBRTtBQWhCbUIsR0FBRCxDQUFyQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxVQUFmOztBQW1CQSxNQUFJQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ04sUUFBbEI7QUFDQSxNQUFJUyxRQUFRLEdBQUdILE1BQU0sQ0FBQ0osU0FBdEI7QUFFQSxNQUFNUSxRQUFRLEdBQUc1Qyx3REFBVyxFQUE1QjtBQUNBLE1BQU02QyxVQUFVLEdBQUc1Qyx3REFBVyxDQUFDLFVBQUM2QyxLQUFEO0FBQUEsV0FBMkJBLEtBQUssQ0FBQ0QsVUFBakM7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUUsSUFBSSxHQUFHOUMsd0RBQVcsQ0FBQyxVQUFDNkMsS0FBRDtBQUFBLFdBQTJCQSxLQUFLLENBQUNDLElBQWpDO0FBQUEsR0FBRCxDQUF4QixDQWhDa0MsQ0FrQ2xDOztBQUNBLE1BQU1DLE1BQU0sR0FBR3BELHNEQUFTLEVBQXhCO0FBQ0EsTUFBTXFELG1CQUFtQixHQUFHQyxNQUFNLENBQUNGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxlQUFkLENBQWxDO0FBQ0E3RCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJMEQsbUJBQW1CLEtBQUssS0FBNUIsRUFBbUM5QixXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ3BDLEdBRlEsRUFFTixDQUFDOEIsbUJBQUQsQ0FGTSxDQUFULENBckNrQyxDQXlDbEM7QUFDQTtBQUNBOztBQUVBLFdBQVNJLFlBQVQsR0FBd0I7QUFDdEI5QixJQUFBQSxnQkFBZ0IsQ0FBQ3NCLFVBQVUsQ0FBQ1MsT0FBWixDQUFoQjtBQUNBckMsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNEOztBQUVELFdBQVNzQyxZQUFULEdBQXdCO0FBQ3RCdEMsSUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEOztBQUVELFdBQVN1QyxpQkFBVCxHQUE2QjtBQUMzQnpDLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDs7QUFFRCxXQUFTMEMsaUJBQVQsR0FBNkI7QUFDM0IxQyxJQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0Q7O0FBRUQsV0FBUzJDLHVCQUFULEdBQW1DO0FBQ2pDdkMsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNBTSxJQUFBQSxpQkFBaUIsQ0FBQyxTQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBU2tDLGlCQUFULEdBQTZCO0FBQzNCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjtBQUNBakIsSUFBQUEsUUFBUSxDQUFDOUMsNEVBQU8sRUFBUixDQUFSO0FBQ0FxQixJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FNLElBQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTcUMsc0JBQVQsR0FBa0M7QUFDaENGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaO0FBQ0ExQyxJQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7O0FBRUQsV0FBUzRDLG1CQUFULEdBQStCO0FBQzdCSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBMUMsSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELE1BQU02QyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFFBQUluQixVQUFVLENBQUNTLE9BQVgsS0FBdUIsRUFBdkIsSUFBNkJULFVBQVUsQ0FBQ29CLGFBQVgsS0FBNkIsSUFBOUQsRUFBb0U7QUFDbEVyQixNQUFBQSxRQUFRLENBQUM3QyxrRUFBUyxFQUFWLENBQVI7QUFDRDtBQUNGLEdBSkQ7O0FBTUEsTUFBSW1FLFdBQW1CLEdBQUcsQ0FBMUI7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxZQUFELEVBQTBCO0FBQ2pERixJQUFBQSxXQUFXLElBQUlFLFlBQWY7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFVBQUQsRUFBcUJDLFNBQXJCLEVBQTRDO0FBQzVELFFBQUk3QixJQUFJLEdBQUdGLE1BQU0sQ0FBQ04sUUFBbEI7QUFDQSxRQUFJUyxRQUFRLEdBQUdILE1BQU0sQ0FBQ0osU0FBdEI7QUFDQSxRQUFJb0MsWUFBWSxHQUFHdEIsTUFBTSxDQUFDUixJQUFJLEdBQUc0QixVQUFSLENBQXpCO0FBQ0EsUUFBSUcsYUFBYSxHQUFHdkIsTUFBTSxDQUFDUCxRQUFRLEdBQUcyQixVQUFaLENBQTFCO0FBQ0FWLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JXLFlBQXRCO0FBQ0FaLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJZLGFBQTNCO0FBQ0FoRCxJQUFBQSxpQkFBaUIsQ0FBQyxTQUFELENBQWpCOztBQUNBLFFBQUk4QyxTQUFTLElBQUksSUFBakIsRUFBdUI7QUFDckJDLE1BQUFBLFlBQVksR0FBR3RCLE1BQU0sQ0FBQyxDQUFELENBQXJCO0FBQ0FvQixNQUFBQSxVQUFVLEdBQUd2QixJQUFJLENBQUN3QixTQUFsQjtBQUNEOztBQUNEMUIsSUFBQUEsVUFBVSxDQUFDb0IsYUFBWCxDQUF5QlMsT0FBekIsQ0FDR0MsSUFESCxDQUNROUIsVUFBVSxDQUFDUyxPQURuQixFQUM0QmdCLFVBRDVCLEVBQ3dDLENBRHhDLEVBRUdNLElBRkgsQ0FFUTtBQUNKakMsTUFBQUEsUUFBUSxFQUFFTyxNQUFNLENBQUN1QixhQUFELENBRFo7QUFFSkksTUFBQUEsRUFBRSxFQUFFckMsTUFBTSxDQUFDZCxnQkFGUDtBQUdKb0QsTUFBQUEsSUFBSSxFQUFFakMsVUFBVSxDQUFDUyxPQUhiO0FBSUp5QixNQUFBQSxLQUFLLEVBQUVQO0FBSkgsS0FGUixFQVFHUSxJQVJILENBUVEsT0FSUixFQVFpQixVQUFDQyxHQUFELEVBQWM7QUFDM0JyQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEdBQVo7QUFDQXhELE1BQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRCxLQVhILEVBWUd5RCxJQVpILENBWVEsVUFBQ0MsT0FBRCxFQUFrQjtBQUN0QnZCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZc0IsT0FBWixFQURzQixDQUV0Qjs7QUFDQTFELE1BQUFBLGlCQUFpQixDQUFDLE1BQUQsQ0FBakI7QUFDQW1CLE1BQUFBLFFBQVEsQ0FBQzdDLGtFQUFTLEVBQVYsQ0FBUjtBQUNBb0UsTUFBQUEsZ0JBQWdCLENBQUNHLFVBQUQsQ0FBaEI7QUFDQVYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlLLFdBQVo7QUFDRCxLQW5CSDtBQXFCQSxRQUFJQSxXQUFXLElBQUkxQixNQUFNLENBQUNQLFVBQTFCLEVBQXNDUixpQkFBaUIsQ0FBQyxVQUFELENBQWpCO0FBQ3ZDLEdBbENEOztBQW9DQWxDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkeUUsSUFBQUEsT0FBTztBQUNSLEdBRlEsRUFFTixDQUFDbkIsVUFBVSxDQUFDUyxPQUFaLENBRk0sQ0FBVDs7QUFJQSxNQUFNOEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFZO0FBQy9CaEUsSUFBQUEsZ0JBQWdCLENBQUNnRSxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsS0FBVixDQUFoQjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQSw0QkFDRSw4REFBQyw2Q0FBRDtBQUNFLFdBQUssRUFBQyxTQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLDhEQUFDLG1EQUFEO0FBQ0Usa0JBQVksRUFBRXJFLFlBRGhCO0FBRUUsWUFBTSxFQUNKUSxRQUFRLGdCQUNOLDhEQUFDLDREQUFEO0FBQXFCLGVBQU8sRUFBRXlDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETSxnQkFHTiw4REFBQyxxREFBRDtBQUNFLHVCQUFlLEVBQUVOLFlBRG5CO0FBRUUsK0JBQXVCLEVBQUVLO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFvQkU7QUFBUyxlQUFTLEVBQUMsWUFBbkI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsZUFBRyxFQUFDLHdCQUROO0FBRUUsa0JBQU0sRUFBQyxNQUZUO0FBR0UscUJBQVMsRUFBQyxTQUhaO0FBSUUsZUFBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUF5QkdiLFVBQVUsQ0FBQ1MsT0FBWCxLQUF1QixFQUF2QixJQUE2QlQsVUFBVSxDQUFDb0IsYUFBWCxLQUE2QixJQUExRCxnQkFDQyw4REFBQyxvREFBRDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxpRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FNRyxJQS9CTixFQWdDR3pDLGNBQWMsSUFBSSxPQUFsQixnQkFDQyw4REFBQyxvREFBRDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxpRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FPRyxJQXZDTixFQXdDR0EsY0FBYyxJQUFJLFVBQWxCLGdCQUNDLDhEQUFDLG9EQUFEO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGlGQUFmO0FBQUEseUdBR0U7QUFBRyxrQkFBSSxFQUFDLDBDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FRRyxJQWhETixFQWlER0EsY0FBYyxLQUFLLE9BQW5CLGdCQUNDLDhEQUFDLG9EQUFEO0FBQUEsb0JBQ0d1QixJQUFJLENBQUN3QixTQUFMLEdBQWlCLENBQWpCLGdCQUNDO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLCtEQUFiO0FBQUEsNERBQ2tDeEIsSUFBSSxDQUFDd0IsU0FEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBS0U7QUFDRSx1QkFBUyxFQUFDLHlCQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFZ0IsZ0JBQUFBLFlBQVksRUFBRTtBQUFoQjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEYsZUFTRTtBQUFLLHVCQUFTLEVBQUMsK0JBQWY7QUFBQSxxQ0FDRSw4REFBQywrQ0FBRDtBQUNFLHVCQUFPLEVBQUMsU0FEVjtBQUVFLHlCQUFTLEVBQUMseUJBRlo7QUFHRSxxQkFBSyxFQUFFO0FBQ0xDLGtCQUFBQSxjQUFjLEVBQUUsUUFEWDtBQUVMQyxrQkFBQUEsVUFBVSxFQUFFLFNBRlA7QUFHTEMsa0JBQUFBLE1BQU0sRUFBRSxNQUhIO0FBSUxDLGtCQUFBQSxLQUFLLEVBQUU7QUFKRixpQkFIVDtBQVNFLHVCQUFPLEVBQUUsaUJBQUNOLENBQUQsRUFBTztBQUNkQSxrQkFBQUEsQ0FBQyxDQUFDTyxjQUFGO0FBQ0F2QixrQkFBQUEsU0FBUyxDQUFDdEIsSUFBSSxDQUFDd0IsU0FBTixFQUFpQixJQUFqQixDQUFUO0FBQ0FQLGtCQUFBQSxPQUFPO0FBQ1IsaUJBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUEsMEJBREQsZ0JBK0JDO0FBQUEsb0NBQ0U7QUFBRyx1QkFBUyxFQUFDLCtEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFDRSx1QkFBUyxFQUFDLHlCQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFdUIsZ0JBQUFBLFlBQVksRUFBRTtBQUFoQixlQUZUO0FBQUEsc0NBSUU7QUFDRSx5QkFBUyxFQUFDLG1CQURaO0FBRUUscUJBQUssRUFBRTtBQUFFQyxrQkFBQUEsY0FBYyxFQUFFO0FBQWxCLGlCQUZUO0FBQUEsdUNBSUU7QUFBSywyQkFBUyxFQUFFM0YscUVBQWhCO0FBQUEseUNBQ0U7QUFBQSwyQ0FDRTtBQUFRLDhCQUFRLEVBQUV1RixZQUFsQjtBQUFnQyxrQ0FBWSxFQUFDLEdBQTdDO0FBQUEsOENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFvQkU7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsdURBQWI7QUFBQSw2QkFDRzVDLE1BQU0sQ0FBQ1AsVUFBUCxHQUFvQmMsSUFBSSxDQUFDK0MsV0FENUIsOEJBQ21EO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRG5ELHVCQUVvQnRELE1BQU0sQ0FBQ0wsWUFGM0IsRUFFeUMsR0FGekMsRUFHR0ssTUFBTSxDQUFDWixPQUFQLENBQWVFLE1BSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQWdDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBQyx1Q0FBZjtBQUFBLHdDQUNFO0FBQU0sMkJBQVMsRUFBQyxNQUFoQjtBQUFBLDRCQUNHLENBQUNVLE1BQU0sQ0FBQ0wsWUFBUCxHQUFzQmYsYUFBdkIsRUFBc0MyRSxPQUF0QyxDQUE4QyxDQUE5QztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLHFCQUFHLEVBQUMsZUFETjtBQUVFLHdCQUFNLEVBQUMsT0FGVDtBQUdFLHVCQUFLLEVBQUUsRUFIVDtBQUlFLHdCQUFNLEVBQUUsRUFKVjtBQUtFLHFCQUFHLEVBQUM7QUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaENGLGVBaURFO0FBQUssdUJBQVMsRUFBQywrQkFBZjtBQUFBLHFDQUNFLDhEQUFDLCtDQUFEO0FBQ0UsdUJBQU8sRUFBQyxTQURWO0FBRUUseUJBQVMsRUFBQyx5QkFGWjtBQUdFLHFCQUFLLEVBQUU7QUFDTFAsa0JBQUFBLGNBQWMsRUFBRSxRQURYO0FBRUxDLGtCQUFBQSxVQUFVLEVBQUUsU0FGUDtBQUdMQyxrQkFBQUEsTUFBTSxFQUFFLE1BSEg7QUFJTEMsa0JBQUFBLEtBQUssRUFBRTtBQUpGLGlCQUhUO0FBU0UsdUJBQU8sRUFBRSxpQkFBQ04sQ0FBRCxFQUFPO0FBQ2RBLGtCQUFBQSxDQUFDLENBQUNPLGNBQUY7QUFDQXZCLGtCQUFBQSxTQUFTLENBQUNqRCxhQUFELEVBQWdCLEtBQWhCLENBQVQ7QUFDQTRDLGtCQUFBQSxPQUFPO0FBQ1IsaUJBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpERjtBQUFBO0FBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0F3R0csSUF6Sk4sRUEwSkd4QyxjQUFjLEtBQUssU0FBbkIsZ0JBQ0MsOERBQUMsb0RBQUQ7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsaUZBQWY7QUFBQSwyREFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMscUNBQWY7QUFBQSxzQ0FDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFHLEVBQUMsYUFETjtBQUVFLHNCQUFNLEVBQUMsTUFGVDtBQUdFLHlCQUFTLEVBQUMsU0FIWjtBQUlFLG1CQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBT0U7QUFBSyx5QkFBUyxFQUFFM0Isc0VBQWhCO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWEYsZUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxHQThCRyxJQXhMTixFQTBMRzJCLGNBQWMsS0FBSyxNQUFuQixnQkFDQyw4REFBQyxvREFBRDtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxpRkFBZjtBQUFBLDBEQUNvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsK0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBVUcsSUFwTU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRixlQTZORSw4REFBQyxzREFBRDtBQUNFLGVBQVMsRUFBRVIsVUFEYjtBQUVFLGdCQUFVLEVBQUV1QyxZQUZkO0FBR0UsbUJBQWEsRUFBRWpDLGFBSGpCO0FBSUUsd0JBQWtCLEVBQUVvQztBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN05GLGVBb09FLDhEQUFDLDJEQUFEO0FBQ0UsZUFBUyxFQUFFNUMsV0FEYjtBQUVFLGdCQUFVLEVBQUUyQyxpQkFGZDtBQUdFLHFCQUFlLEVBQUVFLGlCQUhuQjtBQUlFLDBCQUFvQixFQUFFRyxzQkFKeEI7QUFLRSx3QkFBa0IsRUFBRUM7QUFMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBPRixlQTRPRTtBQUFTLGVBQVMsRUFBQyxtQ0FBbkI7QUFBQSw2QkFDRTtBQUFHLGlCQUFTLEVBQUMsb0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNU9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb1BELENBL1hEOztHQUFNbEQ7VUE4QmFiLHNEQUNFQyxzREFDTkEsc0RBR0VMOzs7S0FuQ1hpQjtBQWlZTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9taW50aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IE5leHRTZW8gYXMgU0VPIH0gZnJvbSAnbmV4dC1zZW8nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IFByb3ZpZGVyLCBSb290U3RhdGVPckFueSB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vcmVkdXgvYmxvY2tjaGFpbi9ibG9ja2NoYWluQWN0aW9ucydcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vcmVkdXgvZGF0YS9kYXRhQWN0aW9ucydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBCdXR0b25Db25uZWN0V2FsbGV0LFxyXG4gIEJ1dHRvbkNsYWltTkZULFxyXG4gIEJ1dHRvbldhaXRpbmcsXHJcbiAgQnV0dG9uV2FsbGV0LFxyXG4gIENvbm5lY3RXYWxsZXRQb3B1cCxcclxuICBDb250YWluZXIsXHJcbiAgTWludGluZ0NhcmQsXHJcbiAgTXlXYWxsZXRQb3B1cCxcclxuICBOYXZpZ2F0aW9uLFxyXG59IGZyb20gJ0AvY29tcG9uZW50cydcclxuXHJcbmNvbnN0IGRlc2t0b3BMaW5rcyA9IFt7IG5hbWU6ICdNaW50aW5nJywgaHJlZjogJy9taW50aW5nJyB9XVxyXG5cclxuY29uc3QgTWludGluZ1BhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93Q29ubmVjdCwgc2V0Q29ubmVjdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2hvd1dhbGxldCwgc2V0U2hvd1dhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbXlXYWxsZXQsIHNldE15V2FsbGV0XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3NlbGVjdGVkVmFsdWUsIHNldFNlbGVjdGVkVmFsdWVdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZSgnT3hPTycpXHJcbiAgY29uc3QgW2NsYWltaW5nU3RhdHVzLCBzZXRDbGFpbWluZ1N0YXR1c10gPSB1c2VTdGF0ZSgnQ29ubmVjdCcpXHJcblxyXG4gIGNvbnN0IFtDT05GSUcsIFNFVF9DT05GSUddID0gdXNlU3RhdGUoe1xyXG4gICAgQ09OVFJBQ1RfQUREUkVTUzogJzB4MTY0QURGNjBjNzA4ODY2QTYxM0E3NzQ5NDkzMjg5OEY3MzQ3ZDA2NycsXHJcbiAgICBTQ0FOX0xJTks6ICcnLFxyXG4gICAgTkVUV09SSzoge1xyXG4gICAgICBOQU1FOiAnRXRoZXJldW0nLFxyXG4gICAgICBTWU1CT0w6ICdFVEgnLFxyXG4gICAgICBJRDogNCxcclxuICAgIH0sXHJcbiAgICBORlRfTkFNRTogJ1l1YmJhIFdvcmxkJyxcclxuICAgIFNZTUJPTDogJ1lCJyxcclxuICAgIE1BWF9TVVBQTFk6IDUwMCxcclxuICAgIFdFSV9DT1NUOiA1MDAwMDAwMDAwMDAwMDAwMCxcclxuICAgIERJU1BMQVlfQ09TVDogMC4wNSxcclxuICAgIEdBU19MSU1JVDogMjg1MDAwLFxyXG4gICAgTUFSS0VUUExBQ0U6ICdPcGVuc2VhJyxcclxuICAgIE1BUktFVFBMQUNFX0xJTks6ICcnLFxyXG4gICAgU0hPV19CQUNLR1JPVU5EOiBmYWxzZSxcclxuICB9KVxyXG5cclxuICBsZXQgY29zdCA9IENPTkZJRy5XRUlfQ09TVFxyXG4gIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVRcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgYmxvY2tjaGFpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlT3JBbnkpID0+IHN0YXRlLmJsb2NrY2hhaW4pXHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlT3JBbnkpID0+IHN0YXRlLmRhdGEpXHJcblxyXG4gIC8vID09PSBkZW1vIHB1cnBvc2UgLSBzdGFydFxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qgc2hvd1dhbGxldENvbm5lY3RlZCA9IFN0cmluZyhyb3V0ZXIucXVlcnkud2FsbGV0Q29ubmVjdGVkKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvd1dhbGxldENvbm5lY3RlZCA9PT0gJ3llcycpIHNldE15V2FsbGV0KHRydWUpXHJcbiAgfSwgW3Nob3dXYWxsZXRDb25uZWN0ZWRdKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goY29ubmVjdCgpKX0pO1xyXG4gIC8vID09PSBkZW1vIHB1cnBvc2UgLSBlbmRcclxuXHJcbiAgZnVuY3Rpb24gc2hvd015V2FsbGV0KCkge1xyXG4gICAgc2V0V2FsbGV0QWRkcmVzcyhibG9ja2NoYWluLmFjY291bnQpXHJcbiAgICBzZXRTaG93V2FsbGV0KHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlTXlXYWxsZXQoKSB7XHJcbiAgICBzZXRTaG93V2FsbGV0KGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0Nvbm5lY3RXYWxsZXQoKSB7XHJcbiAgICBzZXRDb25uZWN0KHRydWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaWRlQ29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldENvbm5lY3QoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNsaWNrRGlzY29ubmVjdFdhbGxldCgpIHtcclxuICAgIHNldE15V2FsbGV0KHRydWUpXHJcbiAgICBzZXRDbGFpbWluZ1N0YXR1cygnQ29ubmVjdCcpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvbkNvbm5lY3RNZXRhbWFzaygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayBjb25uZWN0IG1ldGFtYXNrJylcclxuICAgIGRpc3BhdGNoKGNvbm5lY3QoKSlcclxuICAgIHNldE15V2FsbGV0KGZhbHNlKVxyXG4gICAgc2V0Q2xhaW1pbmdTdGF0dXMoJ0JlZ2luJylcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ29ubmVjdFdhbGxldENvbm5lY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2sgY29ubmVjdCB3YWxsZXQgY29ubmVjdCcpXHJcbiAgICBzZXRNeVdhbGxldCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb25Db25uZWN0VHVzdFdhbGxldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljayB0cnVzdCB3YWxsZXQnKVxyXG4gICAgc2V0TXlXYWxsZXQodHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBpZiAoYmxvY2tjaGFpbi5hY2NvdW50ICE9PSAnJyAmJiBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QgIT09IG51bGwpIHtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgbWludENvdW50ZXI6IG51bWJlciA9IDBcclxuICBjb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKGFtb3VudE1pbnRlZDogbnVtYmVyKSA9PiB7XHJcbiAgICBtaW50Q291bnRlciArPSBhbW91bnRNaW50ZWRcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYWltTkZUcyA9IChtaW50QW1vdW50OiBudW1iZXIsIHdoaXRlbGlzdDogYm9vbGVhbikgPT4ge1xyXG4gICAgbGV0IGNvc3QgPSBDT05GSUcuV0VJX0NPU1RcclxuICAgIGxldCBnYXNMaW1pdCA9IENPTkZJRy5HQVNfTElNSVRcclxuICAgIGxldCB0b3RhbENvc3RXZWkgPSBTdHJpbmcoY29zdCAqIG1pbnRBbW91bnQpXHJcbiAgICBsZXQgdG90YWxHYXNMaW1pdCA9IFN0cmluZyhnYXNMaW1pdCAqIG1pbnRBbW91bnQpXHJcbiAgICBjb25zb2xlLmxvZygnQ29zdDogJywgdG90YWxDb3N0V2VpKVxyXG4gICAgY29uc29sZS5sb2coJ0dhcyBsaW1pdDogJywgdG90YWxHYXNMaW1pdClcclxuICAgIHNldENsYWltaW5nU3RhdHVzKCdNaW50aW5nJylcclxuICAgIGlmICh3aGl0ZWxpc3QgPT0gdHJ1ZSkge1xyXG4gICAgICB0b3RhbENvc3RXZWkgPSBTdHJpbmcoMClcclxuICAgICAgbWludEFtb3VudCA9IGRhdGEud2hpdGVsaXN0XHJcbiAgICB9XHJcbiAgICBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QubWV0aG9kc1xyXG4gICAgICAubWludChibG9ja2NoYWluLmFjY291bnQsIG1pbnRBbW91bnQsIDEpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBnYXNMaW1pdDogU3RyaW5nKHRvdGFsR2FzTGltaXQpLFxyXG4gICAgICAgIHRvOiBDT05GSUcuQ09OVFJBQ1RfQUREUkVTUyxcclxuICAgICAgICBmcm9tOiBibG9ja2NoYWluLmFjY291bnQsXHJcbiAgICAgICAgdmFsdWU6IHRvdGFsQ29zdFdlaSxcclxuICAgICAgfSlcclxuICAgICAgLm9uY2UoJ2Vycm9yJywgKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIHNldENsYWltaW5nU3RhdHVzKCdFcnJvcicpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZWNlaXB0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWNlaXB0KVxyXG4gICAgICAgIC8vIHNldENsYWltaW5nTmZ0KGZhbHNlKTtcclxuICAgICAgICBzZXRDbGFpbWluZ1N0YXR1cygnRG9uZScpXHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhKCkpXHJcbiAgICAgICAgaW5jcmVtZW50Q291bnRlcihtaW50QW1vdW50KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1pbnRDb3VudGVyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIGlmIChtaW50Q291bnRlciA9PSBDT05GSUcuTUFYX1NVUFBMWSkgc2V0Q2xhaW1pbmdTdGF0dXMoJ1NvbGQgb3V0JylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREYXRhKClcclxuICB9LCBbYmxvY2tjaGFpbi5hY2NvdW50XSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRWYWx1ZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWNlbnRlciBiZy1yZXBlYXQteCBiZy1jb3ZlciBiZy1idWJibGVcIj5cclxuICAgICAgPFNFT1xyXG4gICAgICAgIHRpdGxlPVwiTWludGluZ1wiXHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJZdWJiYSBXb3JsZCBpcyBhIGNvbGxlY3Rpb24gb2YgcmFuZG9tbHkgZ2VuZXJhdGVkIGRpZ2l0YWwgY29sbGVjdGlibGVzIG9mIHZhcmlvdXMgcmFyaXR5IGxpdmluZyBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbiBhcyBFUkMtNzIxLjEwLDAwMCB1bmlxdWUgY2hhcmFjdGVycyBvZiBzdGFnZ2VyaW5nIHZhcmlldHlcIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25cclxuICAgICAgICBkZXNrdG9wTGlua3M9e2Rlc2t0b3BMaW5rc31cclxuICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgbXlXYWxsZXQgPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Db25uZWN0V2FsbGV0IG9uQ2xpY2s9e29uQ29ubmVjdE1ldGFtYXNrfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbldhbGxldFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tNeVdhbGxldD17c2hvd015V2FsbGV0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0PXtvbkNsaWNrRGlzY29ubmVjdFdhbGxldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IHB0LTIwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYi04IGgtMTQgbWQ6aC0yNFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIveXViYmEtd29ybGQtMWxpbmUucG5nXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJZdWJiYSBXb3JsZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBtaW50aW5nIGNhcmQgZm9yIGNvdW50ZG93biAqL31cclxuICAgICAgICAgIHsvKiA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cclxuICAgICAgICAgICAgICBZdWJiYSBtaW50aW5nIHdpbGwgc3RhcnQgaW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IG1iLTggdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj4wMCA6IDAwIDo8L3NwYW4+IDQ1XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhzIGZvbnQtdGhpblwiPlxyXG4gICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYSAwLjA1IEVUSFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG14LWF1dG8gbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uV2FpdGluZyBibG9jayAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTWludGluZ0NhcmQ+ICovfVxyXG4gICAgICAgICAgey8qIG1pbnRpbmcgY2FyZCBmb20gKi99XHJcbiAgICAgICAgICB7YmxvY2tjaGFpbi5hY2NvdW50ID09PSAnJyB8fCBibG9ja2NoYWluLnNtYXJ0Q29udHJhY3QgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0IHRvIEV0aGVyZXVtIE1haW5uZXQgZmlyc3QgIVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7Y2xhaW1pbmdTdGF0dXMgPT0gJ0Vycm9yJyA/IChcclxuICAgICAgICAgICAgPE1pbnRpbmdDYXJkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiAtbXQtOCB0ZXh0LXhsIG1kOm10LTIgbWQ6dGV4dC1jZW50ZXIgdy1bMjQwcHhdIG1kOnctWzM3MHB4XSB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gd2FzIGVpdGhlciBjYW5jZWxlZCBvciBhbiBlcnJvciBvY2N1cmVkLiBQbGVhc2VcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Qgb3VyIHN1cHBvcnQgaW4gZGlzY29yZC5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09ICdTb2xkIE91dCcgPyAoXHJcbiAgICAgICAgICAgIDxNaW50aW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgLW10LTggdGV4dC14bCBtZDptdC0yIG1kOnRleHQtY2VudGVyIHctWzI0MHB4XSBtZDp3LVszNzBweF0gdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIFdlIGFyZSBzb2xkIG91dCAhIFlvdSBjYW4gY2hlY2sgYWxsIFl1YmJhcyBpbiBzZWNvbmRhcnkgbWFya2V0XHJcbiAgICAgICAgICAgICAgICBvblxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb3BlbnNlYS5pby9jb2xsZWN0aW9uL3l1YmJhd29ybGRcIj4gT3BlbnNlYTwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge2NsYWltaW5nU3RhdHVzID09PSAnQmVnaW4nID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAge2RhdGEud2hpdGVsaXN0ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMsIHlvdSBjYW4gY2xhaW0ge2RhdGEud2hpdGVsaXN0fSBmcmVlIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgICFcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHBiLTYgdGV4dC1yaWdodCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJ2RvdHRlZCAwLjNweCAjYTZhNWE1JyB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBteC1hdXRvIG10LTYgbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMyBweC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltTkZUcyhkYXRhLndoaXRlbGlzdCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdpdmUgbWUgbXkgWXViYmFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgbWQ6bXQtMCAtbXQtNiB0ZXh0LXhsIHRleHQtbGVmdCBmb250LWJvbGQgdGV4dC1zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBIb3cgbWFueSBZdWJiYXMgd291bGQgeW91IGxpa2U/XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwYi02IHRleHQtcmlnaHQgXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206ICdkb3R0ZWQgMC4zcHggI2E2YTVhNScgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTkgIC1tbC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0ZGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gZGVmYXVsdFZhbHVlPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIG10LTQgdGV4dC1zZWNvbmRhcnkgdGV4dC14cyBmb250LXRoaW4gdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Q09ORklHLk1BWF9TVVBQTFkgLSBkYXRhLnRvdGFsU3VwcGx5fSByZW1haW5pbmcgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaWNlIHBlciBZdWJiYToge0NPTkZJRy5ESVNQTEFZX0NPU1R9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge0NPTkZJRy5ORVRXT1JLLlNZTUJPTH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LWxlZnQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZm9udC10aXRsZSB0ZXh0LTJ4bCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoQ09ORklHLkRJU1BMQVlfQ09TVCAqIHNlbGVjdGVkVmFsdWUpLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb24tZXRoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJFdGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICBteC1hdXRvIG10LTYgbWQ6dy0zLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHktMyBweC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdsaWdodGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmVmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYWltTkZUcyhzZWxlY3RlZFZhbHVlLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdldCBtZSBzb21lIFl1YmJhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvTWludGluZ0NhcmQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ01pbnRpbmcnID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2ZlcmluZyBZdWJiYXMgPGJyIC8+IHRvIHlvdXIgd2FsbGV0XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bODRweF0gbXQtWzYwcHhdIHJlbGF0aXZlIG14LWF1dCBcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvYWRlci5naWZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIll1YmJhIFdvcmxkXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZHNTcGlubmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIHtjbGFpbWluZ1N0YXR1cyA9PT0gJ0RvbmUnID8gKFxyXG4gICAgICAgICAgICA8TWludGluZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IC1tdC04IHRleHQteGwgbWQ6bXQtMiBtZDp0ZXh0LWNlbnRlciB3LVsyNDBweF0gbWQ6dy1bMzcwcHhdIHRleHQtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc2ZlciBjb21wbGV0ZSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFl1YmJhIGR1YmJhIGRvb2/igKYg8J+OiVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC10aXRsZSAtbWItNSBmb250LWJvbGQgdGV4dC0yeGwgIG1kOnRleHQtM3hsIHVwcGVyY2FzZSB0cmFja2luZy1bNnB4XSBtZDp0cmFja2luZy1bMTNweF0gXCI+XHJcbiAgICAgICAgICAgICAgICBUaGFuayB5b3VcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NaW50aW5nQ2FyZD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8TXlXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd1dhbGxldH1cclxuICAgICAgICBjbG9zZVBvcHVwPXtoaWRlTXlXYWxsZXR9XHJcbiAgICAgICAgd2FsbGV0QWRkcmVzcz17d2FsbGV0QWRkcmVzc31cclxuICAgICAgICBvbkRpc2Nvbm5lY3RXYWxsZXQ9e29uQ2xpY2tEaXNjb25uZWN0V2FsbGV0fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPENvbm5lY3RXYWxsZXRQb3B1cFxyXG4gICAgICAgIHNob3dQb3B1cD17c2hvd0Nvbm5lY3R9XHJcbiAgICAgICAgY2xvc2VQb3B1cD17aGlkZUNvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgb25DbGlja01ldGFtYXNrPXtvbkNvbm5lY3RNZXRhbWFza31cclxuICAgICAgICBvbkNsaWNrV2FsbGV0Q29ubmVjdD17b25Db25uZWN0V2FsbGV0Q29ubmVjdH1cclxuICAgICAgICBvbkNsaWNrVHJ1c3RXYWxsZXQ9e29uQ29ubmVjdFR1c3RXYWxsZXR9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktOCBtIG1kOm10LWF1dG8gICAtbXQtMTBcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNlY29uZGFyeSB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IFl1YmJhIFdvcmxkIDIwMjEsIEFsbCByaWdodHMgcmVzZXJ2ZWRcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludGluZ1BhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIk5leHRTZW8iLCJTRU8iLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJjb25uZWN0IiwiZmV0Y2hEYXRhIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIkJ1dHRvbkNvbm5lY3RXYWxsZXQiLCJCdXR0b25XYWxsZXQiLCJDb25uZWN0V2FsbGV0UG9wdXAiLCJDb250YWluZXIiLCJNaW50aW5nQ2FyZCIsIk15V2FsbGV0UG9wdXAiLCJOYXZpZ2F0aW9uIiwiZGVza3RvcExpbmtzIiwibmFtZSIsImhyZWYiLCJNaW50aW5nUGFnZSIsInNob3dDb25uZWN0Iiwic2V0Q29ubmVjdCIsInNob3dXYWxsZXQiLCJzZXRTaG93V2FsbGV0IiwibXlXYWxsZXQiLCJzZXRNeVdhbGxldCIsInNlbGVjdGVkVmFsdWUiLCJzZXRTZWxlY3RlZFZhbHVlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJjbGFpbWluZ1N0YXR1cyIsInNldENsYWltaW5nU3RhdHVzIiwiQ09OVFJBQ1RfQUREUkVTUyIsIlNDQU5fTElOSyIsIk5FVFdPUksiLCJOQU1FIiwiU1lNQk9MIiwiSUQiLCJORlRfTkFNRSIsIk1BWF9TVVBQTFkiLCJXRUlfQ09TVCIsIkRJU1BMQVlfQ09TVCIsIkdBU19MSU1JVCIsIk1BUktFVFBMQUNFIiwiTUFSS0VUUExBQ0VfTElOSyIsIlNIT1dfQkFDS0dST1VORCIsIkNPTkZJRyIsIlNFVF9DT05GSUciLCJjb3N0IiwiZ2FzTGltaXQiLCJkaXNwYXRjaCIsImJsb2NrY2hhaW4iLCJzdGF0ZSIsImRhdGEiLCJyb3V0ZXIiLCJzaG93V2FsbGV0Q29ubmVjdGVkIiwiU3RyaW5nIiwicXVlcnkiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzaG93TXlXYWxsZXQiLCJhY2NvdW50IiwiaGlkZU15V2FsbGV0Iiwic2hvd0Nvbm5lY3RXYWxsZXQiLCJoaWRlQ29ubmVjdFdhbGxldCIsIm9uQ2xpY2tEaXNjb25uZWN0V2FsbGV0Iiwib25Db25uZWN0TWV0YW1hc2siLCJjb25zb2xlIiwibG9nIiwib25Db25uZWN0V2FsbGV0Q29ubmVjdCIsIm9uQ29ubmVjdFR1c3RXYWxsZXQiLCJnZXREYXRhIiwic21hcnRDb250cmFjdCIsIm1pbnRDb3VudGVyIiwiaW5jcmVtZW50Q291bnRlciIsImFtb3VudE1pbnRlZCIsImNsYWltTkZUcyIsIm1pbnRBbW91bnQiLCJ3aGl0ZWxpc3QiLCJ0b3RhbENvc3RXZWkiLCJ0b3RhbEdhc0xpbWl0IiwibWV0aG9kcyIsIm1pbnQiLCJzZW5kIiwidG8iLCJmcm9tIiwidmFsdWUiLCJvbmNlIiwiZXJyIiwidGhlbiIsInJlY2VpcHQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYm9yZGVyQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJmb250V2VpZ2h0IiwiaGVpZ2h0IiwiY29sb3IiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdGRpdiIsInRvdGFsU3VwcGx5IiwidG9GaXhlZCIsImxkc1NwaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9