import React, { useState } from 'react'
import Navbar from './Navbar'
import Divider from './Divider'
import { BiSolidUserAccount } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
function SendHome() {
  const [senderAddress,setSenderAddress]= useState('')
  const navigate=useNavigate();
  const renderAmount=()=>{
    navigate('/amount',{state:{senderAddress:senderAddress}});
  }
  function isValidEthAddress(address) {
    if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
      // Check if it has the right length and consists of valid hexadecimal characters
      return false;
    } else if (/^(0x)?[0]{40}$|^(0x)?[fF]{40}$/.test(address)) {
      // Check if the address is not an empty or all-zero address
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="w-full h-full bg-[#0f0e1e] flex flex-col items-center">
        <Navbar/>
        <ToastContainer position='top-left'/>
        <div className="mt-4 text-xl tracking-wide shadow-2xl text-[whitesmoke] font-semibold">Send to address</div>
        <input onChange={(e)=>{setSenderAddress(e.target.value)}} type="text" placeholder="Enter public address (0x) or ENS name" className="input input-bordered w-full max-w-xs mt-3 text-slate-500 placeholder-slate-500" />
        <div className="   mt-12 p-4 w-full flex flex-col items-start ">
            <div className="text-xl font-semibold ">Your Accounts</div>
        </div>
        
        <div className="flex flex-col items-start gap-3  w-full h-auto p-5 ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center gap-5 hover:bg-purple-600 focus:bg-purple-600 p-4"><BiSolidUserAccount className="h-6 w-6"/> Account1</div>
                    <div className="divider"></div> 
                    <div className="flex flex-row items-center gap-5 hover:bg-purple-600 focus:bg-purple-600 p-4"><BiSolidUserAccount className="h-6 w-6"/> Account2</div>
                </div>
                
        </div>
        <button className="btn w-40 mt-4 btn-primary bg-slate-800  border-slate-900 border-2 text-slate-300 rounded-l-full rounded-r-full " onClick={()=>{
          if(isValidEthAddress(senderAddress))
          {
            renderAmount()
          }else{
            toast.error("Enter Valid Eth address")
          }
        }}>Next</button>
    </div>
  )
}

export default SendHome