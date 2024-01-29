import React, { useEffect, useState } from "react";
import { getMyAddress, getMyBalance } from "../utils/transactionUtils";
import { UseSelector, useSelector } from "react-redux";
import { selectAccount, selectSavings } from "../redux/reducer";
import withdrawSvg from '../assets/withdraw-money-6376.svg'
import { withdraw } from "../utils/transactionUtils";
import { FaCopy } from "react-icons/fa";
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
const SavingPageInfo = () => {
  const account = useSelector(selectAccount);
  const [savingAddress,setSavingAddress]=useState("")
  const [balance,setBalance]=useState(0)
  const isSaving = useSelector(selectSavings);
  const [loading, setLoading] = useState(false); 
   const [withdrawLoading,setWithdrawLoading]=useState(false)
  const [withdrawBalance,setWithdrawBalance]=useState(0)
  const handleWithdraw=()=>{
    
    setWithdrawLoading(true)
    setLoading(true)
    if(withdrawBalance){

      withdraw(account.privateKey,withdrawBalance).then((result)=>{
        
        console.log("Amount Withdrawn Successfully",result)
        
        setLoading(false)
        setWithdrawLoading(false)
      }).catch((error)=>{
        console.log("error",error)
         alert(error)
         setLoading(false)
         setWithdrawLoading(false)
      })
    }
  }
  useEffect(() => {
    const getAccountInfo = async ()=>{
      setLoading(true)
      const saving = await getMyAddress(account.privateKey);
      if (isSaving && saving ) {
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
            { <div className="">{withdrawLoading?"Processing Withdrawl....":"Fetching details..."}</div>}
            <span className="bg-yellow-200 loading loading-infinity w-[4rem]"></span>
          </div>
        </div>
      )}
      

      {!loading && (
        <div
         
          className="h-full w-full flex flex-col items-center  bg-[#0f0e1e] "
        >
          <div className="p-3 rounded-lg bg-[#9730fc]   w-[90%] mt-6">
            <div className="justify-center flex w-full">
              <WalletAddressDisplay className="" address={savingAddress} />
            </div>
            <div></div>
            <div className="mt-9 font-bold  text-xl text-start tracking-wider shadow-2xl text-slate-200">
              Total Savings
            </div>
            <div className="mt-2 text-xl tracking-wide shadow-2xl text-[whitesmoke]">
              $ {balance||0} USD
            </div>
          </div>
          <hr class="w-[90%] h-1 mx-3 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
           
            {
              !withdrawLoading &&
              <div>
            <div>
           <div className=" w-full mt-3 flex justify-start gap-x-4">
            <div className="text-white text-3xl font-bold ">Withdraw</div>
            <img src={withdrawSvg} width={40} height={40}/>
           </div>
            </div>
            <div>
            <div className="mt-8 text-lg font-bold">Amount</div>
            <div className=" flex align-middle mt-5 items-center justify-between gap-6">
            <input onChange={(e)=>{setWithdrawBalance(e.target.value)}}  type="text" placeholder="$15" className="input input-bordered input-accent  w-xs" />
           
            <button onClick={handleWithdraw} className="btn btn-primary ">Withdraw</button>
            
            </div>
            
            </div>
            </div>
            }
              
          
        </div>
      )}
    </>
  );
};

export default SavingPageInfo;
