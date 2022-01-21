import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "../CSS/WalletCard.css";
import Button from "react-bootstrap/Button";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const WalletCardEthers = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  return (
    <div>
      <div class="card">
        <div class="card-header">Test blockchain</div>
        <div class="card-body">
          <h3 class="card-title">Connect your MetaMask </h3>
          <p class="card-text"></p>
          <Button variant="primary" onClick={connectWalletHandler}>
            {connButtonText}
          </Button>
          <hr></hr>
          <div className="accountDisplay">
            <h3>Address Wallet: </h3>
            <p>
              <i>{defaultAccount}</i>
            </p>
            <div className="balanceDisplay">
              <h3>Balance: {userBalance} Eth</h3>
            </div>
            {errorMessage}
          </div>
        </div>
      </div>
      <Footer />
    </div>  

  );
};

export default WalletCardEthers;
