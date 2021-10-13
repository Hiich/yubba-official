import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextSeo as SEO } from "next-seo";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { Provider, RootStateOrAny } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  ButtonConnectWallet,
  ButtonClaimNFT,
  ButtonWaiting,
  ButtonWallet,
  ConnectWalletPopup,
  Container,
  MintingCard,
  MyWalletPopup,
  Navigation,
} from "@/components";

const desktopLinks = [{ name: "Minting", href: "/minting" }];

const MintingPage: NextPage = () => {
  const [showConnect, setConnect] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [myWallet, setMyWallet] = useState(true);
  const [selectedValue, setSelectedValue] = useState(1);
  const [walletAddress, setWalletAddress] = useState("OxOO");
  const [claimingStatus, setClaimingStatus] = useState("Connect");

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0x6818DAe5505A13C3E7369bfA9E408AD8919C6D82",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "ETH",
      ID: 4,
    },
    NFT_NAME: "Yubba World",
    SYMBOL: "YB",
    MAX_SUPPLY: 9500,
    WEI_COST: 300000000000000000,
    DISPLAY_COST: 0.3,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opensea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  let cost = CONFIG.WEI_COST;
  let gasLimit = CONFIG.GAS_LIMIT;

  const dispatch = useDispatch();
  const blockchain = useSelector((state: RootStateOrAny) => state.blockchain);
  const data = useSelector((state: RootStateOrAny) => state.data);

  // === demo purpose - start
  const router = useRouter();
  const showWalletConnected = String(router.query.walletConnected);
  useEffect(() => {
    if (showWalletConnected === "yes") setMyWallet(true);
  }, [showWalletConnected]);

  // useEffect(() => {
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
    dispatch(connect());
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

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData());
    }
  };

  const claimNFTs = (mintAmount: number, whitelist: boolean) => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setClaimingStatus("Minting");
    if (whitelist === false) {
      blockchain.smartContract.methods
        .mint(blockchain.account, mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err: any) => {
          console.log(err);
          setClaimingStatus("Begin");
        })
        .then((receipt: any) => {
          console.log(receipt);
          // setClaimingNft(false);
          setClaimingStatus("Done");
          dispatch(fetchData());
        });
    } else {
      blockchain.smartContract.methods
        .freeMint(blockchain.account, mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          // value: totalCostWei,
        })
        .once("error", (err: any) => {
          console.log(err);
          setClaimingStatus("Begin");
        })
        .then((receipt: any) => {
          console.log(receipt);
          // setClaimingNft(false);
          setClaimingStatus("Done");
          dispatch(fetchData());
        });
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="h-screen bg-center bg-repeat-x bg-cover bg-bubble">
      <SEO
        title="Minting"
        description="Yubba World is a collection of randomly generated digital collectibles of various rarity living on the Ethereum blockchain as ERC-721.10,000 unique characters of staggering variety"
      />

      <Navigation
        desktopLinks={desktopLinks}
        action={
          myWallet ? (
            <ButtonConnectWallet onClick={showConnectWallet} />
          ) : (
            <ButtonWallet
              onClickMyWallet={showMyWallet}
              onClickDisconnectWallet={onClickDisconnectWallet}
            />
          )
        }
      />

      <section className="py-8 pt-20">
        <Container>
          <div className="relative mx-auto mb-8 h-14 md:h-24">
            <Image
              src="/yubba-world-1line.png"
              layout="fill"
              objectFit="contain"
              alt="Yubba World"
            />
          </div>
          {/* minting card for countdown */}
          {/* <MintingCard>
            <p className="text-lg">
              Yubba minting will start in
            </p>
            <p className="mt-5 mb-8 text-3xl">
              <span className="font-bold">00 : 00 :</span> 45
            </p>
            <p className="mb-2 text-xs font-thin">
              Price per Yubba 0.05 ETH
            </p>
            <div className="w-full mx-auto md:w-3/4">
              <ButtonWaiting block />
            </div>
          </MintingCard> */}
          {/* minting card fom */}
          {claimingStatus === "Connect" ? (
            <MintingCard>
              <div className="mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary">
                Please connect your wallet first !
              </div>
            </MintingCard>
          ) : null}

          {claimingStatus === "Begin" ? (
            <MintingCard>
              {data.whitelist > 0 ? (
                <>
                  <p className="mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary">
                    Congratulations, you can claim {data.whitelist} free Yubbas
                    !
                  </p>
                  <div
                    className="w-full pb-6 text-right "
                    style={{ borderBottom: "dotted 0.3px #a6a5a5" }}
                  ></div>
                  <div className="w-full  mx-auto mt-6 md:w-3/4">
                    <Button
                      variant="primary"
                      className="rounded-full py-3 px-6 "
                      style={{
                        justifyContent: "center",
                        fontWeight: "lighter",
                        height: "40px",
                        color: "#fffeff",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(data.whitelist, true);
                        getData();
                      }}
                    >
                      Give me my Yubbas
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-6 md:mt-0 -mt-6 text-xl text-left font-bold text-secondary">
                    How many Yubbas would you like?
                  </p>
                  <div
                    className="w-full pb-6 text-right "
                    style={{ borderBottom: "dotted 0.3px #a6a5a5" }}
                  >
                    <div
                      className="w-full h-9  -ml-0"
                      style={{ justifyContent: "center" }}
                    >
                      <div className={styles.selectdiv}>
                        <label>
                          <select onChange={handleChange} defaultValue="1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 mt-4 text-secondary text-xs font-thin text-right">
                        {CONFIG.MAX_SUPPLY - data.totalSupply} remaining <br />
                        Price per Yubba: {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-3">
                    <div className="flex-1 font-title text-left text-2xl">
                      Total
                    </div>
                    <div className="flex-1 font-title text-2xl text-right">
                      {(CONFIG.DISPLAY_COST * selectedValue).toFixed(1)}
                      <Image
                        src="/icon-eth.png"
                        layout="fixed"
                        width={13}
                        height={20}
                        alt="Eth"
                      />
                    </div>
                  </div>
                  <div className="w-full  mx-auto mt-6 md:w-3/4">
                    <Button
                      variant="primary"
                      className="rounded-full py-3 px-6 "
                      style={{
                        justifyContent: "center",
                        fontWeight: "lighter",
                        height: "40px",
                        color: "#fffeff",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(selectedValue, false);
                        getData();
                      }}
                    >
                      Get me some Yubbas
                    </Button>
                  </div>
                </>
              )}
            </MintingCard>
          ) : null}
          {claimingStatus === "Minting" ? (
            <MintingCard>
              <div className="mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary">
                Transfering Yubbas <br /> to your wallet
              </div>
              <div>
                <div className="h-[84px] mt-[60px] relative mx-aut ">
                  <Image
                    src="/loader.gif"
                    layout="fill"
                    objectFit="contain"
                    alt="Yubba World"
                  />
                  <div className={styles.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </MintingCard>
          ) : null}

          {claimingStatus === "Done" ? (
            <MintingCard>
              <div className="mb-6 -mt-8 text-xl md:mt-2 md:text-center w-[240px] md:w-[370px] text-secondary">
                Transfer complete <br />
                Yubba dubba dooo… 🎉
              </div>
              <div className="font-title -mb-5 font-bold text-2xl  md:text-3xl uppercase tracking-[6px] md:tracking-[13px] ">
                Thank you
              </div>
            </MintingCard>
          ) : null}
        </Container>
      </section>

      <MyWalletPopup
        showPopup={showWallet}
        closePopup={hideMyWallet}
        walletAddress={walletAddress}
        onDisconnectWallet={onClickDisconnectWallet}
      />

      <ConnectWalletPopup
        showPopup={showConnect}
        closePopup={hideConnectWallet}
        onClickMetamask={onConnectMetamask}
        onClickWalletConnect={onConnectWalletConnect}
        onClickTrustWallet={onConnectTustWallet}
      />

      <section className="w-full py-8 m md:mt-auto   -mt-10">
        <p className="text-center text-secondary text-xs">
          &copy; Copyright Yubba World 2021, All rights reserved
        </p>
      </section>
    </div>
  );
};

export default MintingPage;
