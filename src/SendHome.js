import React from 'react'
import Navbar from './Navbar'
import Divider from './Divider'
import { BiSolidUserAccount } from "react-icons/bi";
function SendHome() {
  return (
    <div className="w-full h-full bg-slate-600 flex flex-col items-center">
        <Navbar/>
        <div className="mt-4 text-xl tracking-wide shadow-2xl text-slate-800 font-semibold">Send to address</div>
        <input type="text" placeholder="Enter public address (0x) or ENS name" className="input input-bordered w-full max-w-xs mt-3 text-slate-500 placeholder-slate-500" />
        <div className=" bg-slate-800 mix-blend-overlay mt-12 p-4 w-full flex flex-col items-start ">
            <div className="text-xl font-semibold ">Your Accounts</div>
        </div>
        <div className="flex flex-col items-start gap-3 bg-slate-800 w-full h-auto p-5 mix-blend-overlay">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center gap-5"><BiSolidUserAccount className="h-6 w-6"/> Account1</div>
                    <div className="divider"></div> 
                    <div className="flex flex-row items-center gap-5"><BiSolidUserAccount className="h-6 w-6"/> Account2</div>
                </div>
                
        </div>
    </div>
  )
}

export default SendHome