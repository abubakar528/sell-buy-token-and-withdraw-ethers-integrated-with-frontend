import React, { useEffect, useState } from 'react'
import { ethers } from "ethers";
import abi from "./contract.json"

const Second = () => {
  const [owner, setOwner] = useState("");
  const [loading, setLoading] = useState(null);

useEffect(()=>{
  ownerOf();
})
// this is ownwer function 
  const ownerOf =async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xcdDE91494F756194866304dE60186d3ffA7bFB6C",
      abi,
      provider
    );
    console.log("OWNER",await dollar.owner());
    setOwner(await dollar.owner());
  }

  const mintToken = async () => {
    let address = document.getElementById("m1").value;
    console.log(address);
    let amount = document.getElementById("m2").value;
    console.log(amount);
    amount = ethers.utils.parseUnits(amount, 18);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xcdDE91494F756194866304dE60186d3ffA7bFB6C",
      abi,
      provider
    );
    const signer = await provider.getSigner();
    const addressofUser = await signer.getAddress()
    console.log("add of USER",addressofUser);
    console.log("Signer",window.ethereum.selectedAddress);
    if(addressofUser!==owner){
      alert("caller in not owner")
    setLoading(false);
    }
    else{
      const Contract = dollar.connect(signer);
      setLoading(true);
      await Contract.mint(address, amount).then((res =>{
          setLoading(false)
      })).catch((err)=>{
        console.log("this is error", err)
        setLoading(false);
      });
    }
      
    
    
  }

// this is buyToken function 
  const buyToken = async () => {
    let amountBuy = document.getElementById("buy1").value;
    console.log(amountBuy ,"amount of buying token");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xcdDE91494F756194866304dE60186d3ffA7bFB6C",
      abi,
      provider
    );
    const signer = provider.getSigner();
    const Contract = dollar.connect(signer);
    // setLoading(true);
    await Contract.buyToken( amountBuy,  {
      value: (100000000000000 * Number(amountBuy)).toString(),
    });
    // setLoading(false);
  }

  // this is sell token function 
  const sellToken = async () => {
    let amountSale = document.getElementById("sell1").value;
    console.log(amountSale ,"amount of buying token");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xcdDE91494F756194866304dE60186d3ffA7bFB6C",
      abi,
      provider
    );
    const signer = provider.getSigner();
    const Contract = dollar.connect(signer);
    // setLoading(true);
    await Contract.sellToken( amountSale);
    // setLoading(false);
  }

  // this is transfer token 
  const transferToken = async () => {
    let addressOfReciever = document.getElementById("t1").value;
    console.log(addressOfReciever);
    let amountOfTransfer = document.getElementById("t2").value;
    console.log(amountOfTransfer);
    amountOfTransfer = ethers.utils.parseUnits(amountOfTransfer, 18);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let dollar;
    dollar = new ethers.Contract(
      "0xcdDE91494F756194866304dE60186d3ffA7bFB6C",
      abi,
      provider
    );
    const signer = await provider.getSigner();
      const Contract = dollar.connect(signer);
      await Contract.transfer(addressOfReciever, amountOfTransfer).then((res =>{
      })).catch((err)=>{
        console.log("this is error", err)
      });
    
  }
  



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 second">
            <div id="left">
              <input id="m1" placeholder="to"></input>
              <input id="m2" placeholder="amount"></input>
              <button className="btn btn-primary" id="mintBtn" onClick={mintToken}>
              {loading ? "Minting....." : "Mint"}
              </button>
            </div>
            <div id="right">
              <input placeholder='enter amount' id='buy1'></input>
              <button className="btn btn-primary" id="buyBtn"  onClick={buyToken}>buytToken</button>
            </div>
            <div id="left2">
            <h2>sell token</h2>
            <input placeholder='enter amount' id='sell1'></input>
              <button className="btn btn-primary" id="sellBtn"  onClick={sellToken}>SellToken</button>
            </div>
            <div id="right2">

           <input placeholder='to' id='t1'></input>
           <input placeholder='amount' id='t2'></input>
           <button className="btn btn-primary"  id='transBtn' onClick={transferToken}>Transfer</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Second
