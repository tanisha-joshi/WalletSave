import React, { useEffect } from "react";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, selectSavings, SET_SAVING } from "./redux/reducer";
import SavingsOn from "./components/SavingsOn";
import { useNavigate } from "react-router-dom";
import { UseDispatch } from "react-redux";
import { IoSend, IoSavings } from 'react-icons/io5';
import { FaCopy } from "react-icons/fa";
import OIG from "./assets/OIG.jpg";
import { getMyAddress, getMyBalance } from "./utils/transactionUtils";
function WalletHome() {
  const account = useSelector(selectAccount);
  console.log(account)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderChat = () => {
    navigate("/sendHome");
  };
  const isSaving = useSelector(selectSavings);

  const WalletAddressDisplay = ({ address }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
      // Create a temporary input element to copy the text to clipboard
      const tempInput = document.createElement("input");
      tempInput.value = address;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      // Set the copied state to true and reset after a short delay
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    };

    return (
      <div
        className="btn btn-sm flex rounded-full px-4 "
        style={{
          cursor: "pointer",
          border:"1px solid #4e2980 ",
          backgroundColor:"purple",
          opacity:"0.85",
          color:"white",
          padding: "0 10px",
          
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "250px",
        }}
        onClick={handleCopyClick}
      >
        {isCopied
          ? "Address Copied!"
          : `${address.substring(0, 12)}...${address.substring(
              address.length - 8
            )}`}
            {!isCopied && <FaCopy/>}
      </div>
    );
  };

  return (
    <div className="w-full h-full bg-[#0f0e1e] flex flex-col items-center">
      <Navbar />
      <SavingsOn />
      <div
        className=""
      >
        <div className="mt-8">
          <WalletAddressDisplay className="" address={account.address} />
        </div>
        <div></div>
        <div className="mt-3 text-3xl tracking-wider text-center shadow-2xl text-slate-200">
          {account.balance} ETH
        </div>
        {/* <div className="mt-2 text-center text-xl tracking-wide shadow-2xl text-[whitesmoke]">
          $0.00 USD
        </div> */}
      </div>

      <hr class="w-[90%] h-1 mx-3 my-8 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className=" flex gap-2  text-[whitesmoke] font-bold bg-[purple] py-1 px-4 rounded-full  justify-center items-center">
        <div
         onClick={()=>{navigate("/sendHome")}}
        className="bg-black text-white btn btn-sm rounded-full" >
          
        Send
        </div>
        <div
         onClick={()=>{navigate('/savings')}}
        className=" bg-black btn btn-sm text-white rounded-full">
        Savings
        </div>
        
      </div>
      
      <div role="tablist" className="tabs tabs-bordered mt-7 items-center">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tracking-wide text-slate-300"
          aria-label="Tokens"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tokens
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tracking-wide text-slate-300"
          aria-label="NFTs"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          NFTs
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab tracking-wide text-slate-300"
          aria-label="Activity"
        />
        <div role="tabpanel" className="tab-content p-10">
          Activity
        </div>
      </div>
    </div>
  );
}

export default WalletHome;
