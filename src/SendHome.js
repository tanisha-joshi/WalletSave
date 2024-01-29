import React, { useState } from 'react'
import Navbar from './Navbar'
import Divider from './Divider'
import { BiSolidUserAccount } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
function SendHome() {
  const [senderAddress,setSenderAddress]= useState('')
  const navigate=useNavigate();
  const renderAmount=()=>{
    navigate('/amount',{state:{senderAddress:senderAddress}});
  }
  
  return (
    <div className="w-full h-full bg-[#0f0e1e] flex flex-col items-center">
        <Navbar/>
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
        <button className="btn w-40 mt-4 btn-primary bg-slate-800  border-slate-900 border-2 text-slate-300 rounded-l-full rounded-r-full " onClick={renderAmount}>Next</button>
    </div>
  )
}

export default SendHome