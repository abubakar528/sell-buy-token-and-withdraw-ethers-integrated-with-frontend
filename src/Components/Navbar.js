import React, { useState, useEffect } from 'react'
import { ethers, utils } from "ethers";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  const [connect, setConnect] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(()=>{
    setTimeout(() => {
      if(window.ethereum.selectedAddress){
        connectWallet();
      }
    }, 1)
  })
  const connectWallet= async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    const blanceOfUser= Number(await signer.getBalance()/1e18);
    console.log("Balance of User",blanceOfUser)
    setBalance(blanceOfUser)
    console.log(address);
    setConnect(true);
    setAddress(address)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" id="nav">
           <button className='btn btn-success' onClick={connectWallet}> 
           {connect ? "Connected" :  "Connect Wallet"} 
           </button>
           {/* <h3 id="user">User</h3> : */}
           <div id="address">{address}</div>
           <div id="blnc2">{balance}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
