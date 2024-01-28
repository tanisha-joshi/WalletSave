import React, { useEffect, useState } from "react";
import { getMyAddress, getMyBalance } from "../utils/transactionUtils";
import { UseSelector, useSelector } from "react-redux";
import { selectAccount, selectSavings } from "../redux/reducer";
import withdraw from '../assets/withdraw.svg'
import Navbar from "../Navbar";

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
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "5px",
        borderRadius: "5px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "200px",
      }}
      onClick={handleCopyClick}
    >
      {isCopied
        ? "Address Copied!"
        : `${address.substring(0, 12)}...${address.substring(
            address.length - 8
          )}`}
    </div>
  );
};
const SavingPageInfo = () => {
  const account = useSelector(selectAccount);
  const [savingAddress,setSavingAddress]=useState("")
  const [balance,setBalance]=useState(0)
  const isSaving = useSelector(selectSavings);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAccountInfo = async ()=>{
      
      if (isSaving) {
        setLoading(true)
        const saving = await getMyAddress(account.privateKey);
        
        const savingsBalance = await getMyBalance(account.privateKey);
        console.log("account",savingsBalance)
        setSavingAddress(saving)
        setBalance(savingsBalance)
        setLoading(false) 
      }
      
    }
    getAccountInfo()
  }, []);
  return (
    <>
      <Navbar />
      {loading && (
        <div
          style={{ background: "var(--Greyscale-Grey-80, #1C1C23)" }}
          className="relative h-full"
        >
          <div className="absolute left-[30%] top-[40%] flex justify-center items-center flex-col ">
            <div className="">Fetching details...</div>
            <span className="bg-yellow-200 loading loading-infinity w-[4rem]"></span>
          </div>
        </div>
      )}

      {!loading && (
        <div
          style={{ background: "var(--Greyscale-Grey-80, #1C1C23)" }}
          className="h-full w-full flex flex-col items-center "
        >
          <div className="p-3 rounded-lg  bg-blue-600  w-[90%] mt-6">
            <div className="justify-center flex w-full">
              <WalletAddressDisplay className="" address={savingAddress} />
            </div>
            <div></div>
            <div className="mt-9 font-bold  text-xl text-start tracking-wider shadow-2xl text-slate-200">
              Total Savings
            </div>
            <div className="mt-2 text-xl tracking-wide shadow-2xl text-slate-400">
              $ {balance||0} USD
            </div>
          </div>

          <div className="flex mt-6 justify-center gap-6 align-middle">
            <div>
            <svg
              
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                fill="blue"
              ></path>{" "}
            </svg>
            Send
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default SavingPageInfo;
